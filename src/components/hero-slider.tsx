"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Slide = { src: string; alt: string };

type Props = {
  slides: Slide[];
};

export function HeroSlider({ slides }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="space-y-2">
      <div className="surface-panel overflow-hidden rounded-2xl border">
        <Image
          src={slides[index].src}
          alt={slides[index].alt}
          width={900}
          height={640}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="h-[250px] w-full object-cover sm:h-[320px] md:h-[430px]"
          priority
        />
      </div>
      <div className="flex justify-center gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setIndex(i)}
            className="tap-target flex w-9 items-center justify-center rounded"
            aria-label={`Show slide ${i + 1}`}
          >
            <span className={`h-2 w-8 rounded ${i === index ? "bg-[var(--primary)]" : "bg-[var(--border)]"}`} />
          </button>
        ))}
      </div>
    </div>
  );
}
