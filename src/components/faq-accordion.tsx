"use client";

import { useState } from "react";

type FaqItem = { question: string; answer: string };

type Props = {
  items: FaqItem[];
};

export function FAQAccordion({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const open = index === openIndex;
        return (
          <div key={item.question} className="surface-panel rounded-lg border">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? -1 : index)}
              className="tap-target flex w-full items-center justify-between px-4 py-3 text-left"
              aria-expanded={open}
            >
              <span className="font-medium">{item.question}</span>
              <span className="text-[var(--muted)]">{open ? "-" : "+"}</span>
            </button>
            {open ? <p className="border-t border-[var(--border)] px-4 py-3 text-sm text-[var(--muted)]">{item.answer}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
