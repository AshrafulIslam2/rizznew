"use client";

import { useEffect, useState } from "react";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3040/api";
const HEARTBEAT_INTERVAL_MS = 20_000;
const REAL_COUNT_THRESHOLD = 30;

function getSessionId() {
  const key = "rizz_session_id";
  let id = sessionStorage.getItem(key);
  if (!id) {
    id = crypto.randomUUID();
    sessionStorage.setItem(key, id);
  }
  return id;
}

export function VisitorCounter({ productId }: { productId: string }) {
  const [baseline, setBaseline] = useState(0);
  const [realCount, setRealCount] = useState(0);

  useEffect(() => {
    setBaseline(Math.floor(Math.random() * 81) + 20);
  }, []);

  useEffect(() => {
    if (!productId) return;
    const sessionId = getSessionId();

    async function ping() {
      try {
        const res = await fetch(`${API}/products/${productId}/views/heartbeat`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ session_id: sessionId }),
        });
        if (!res.ok) return;
        const data = await res.json();
        setRealCount(data.count ?? 0);
      } catch {
        // ignore — fall back to baseline
      }
    }

    ping();
    const interval = setInterval(ping, HEARTBEAT_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [productId]);

  const displayCount = realCount >= REAL_COUNT_THRESHOLD ? realCount : baseline;

  return (
    <p className="flex items-center gap-2 text-xs text-[var(--gold-light)]">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
      </span>
      <span>
        <strong className="font-semibold">{displayCount}</strong> people watching this product — hurry up!
      </span>
    </p>
  );
}
