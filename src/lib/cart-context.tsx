"use client";

import { createContext, useContext, useEffect, useReducer } from "react";

export type CartItem = {
  productId?: string;
  slug: string;
  name: string;
  price: number;
  size: string;
  color: string;
  quantity: number;
  image: string;
};

type CartState = { items: CartItem[] };

type Action =
  | { type: "LOAD"; items: CartItem[] }
  | { type: "ADD"; item: CartItem }
  | { type: "REMOVE"; slug: string; size: string; color: string }
  | { type: "UPDATE_QTY"; slug: string; size: string; color: string; qty: number }
  | { type: "CLEAR" };

function reducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case "LOAD":
      return { items: action.items };
    case "ADD": {
      const idx = state.items.findIndex(
        (i) => i.slug === action.item.slug && i.size === action.item.size && i.color === action.item.color
      );
      if (idx >= 0) {
        const updated = [...state.items];
        updated[idx] = { ...updated[idx], quantity: updated[idx].quantity + action.item.quantity };
        return { items: updated };
      }
      return { items: [...state.items, action.item] };
    }
    case "REMOVE":
      return {
        items: state.items.filter(
          (i) => !(i.slug === action.slug && i.size === action.size && i.color === action.color)
        )
      };
    case "UPDATE_QTY":
      if (action.qty < 1) {
        return {
          items: state.items.filter(
            (i) => !(i.slug === action.slug && i.size === action.size && i.color === action.color)
          )
        };
      }
      return {
        items: state.items.map((i) =>
          i.slug === action.slug && i.size === action.size && i.color === action.color
            ? { ...i, quantity: action.qty }
            : i
        )
      };
    case "CLEAR":
      return { items: [] };
    default:
      return state;
  }
}

type CartCtx = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (slug: string, size: string, color: string) => void;
  updateQty: (slug: string, size: string, color: string, qty: number) => void;
  clear: () => void;
  total: number;
  count: number;
};

const CartContext = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { items: [] });

  useEffect(() => {
    try {
      const stored = localStorage.getItem("rizz_cart");
      if (stored) dispatch({ type: "LOAD", items: JSON.parse(stored) });
    } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem("rizz_cart", JSON.stringify(state.items));
  }, [state.items]);

  const total = state.items.reduce((s, i) => s + i.price * i.quantity, 0);
  const count = state.items.reduce((s, i) => s + i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        addItem: (item) => dispatch({ type: "ADD", item }),
        removeItem: (slug, size, color) => dispatch({ type: "REMOVE", slug, size, color }),
        updateQty: (slug, size, color, qty) => dispatch({ type: "UPDATE_QTY", slug, size, color, qty }),
        clear: () => dispatch({ type: "CLEAR" }),
        total,
        count
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be inside CartProvider");
  return ctx;
}
