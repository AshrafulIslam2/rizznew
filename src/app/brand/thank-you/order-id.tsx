"use client";

import { useState, useEffect } from "react";

export function OrderId() {
  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    setId(`RZ-${Math.floor(Math.random() * 90000) + 10000}`);
  }, []);

  return (
    <p className="mt-2 font-serif text-2xl text-[var(--cream)]">
      #{id ?? "—"}
    </p>
  );
}
