"use client";

import { MARQUEE_ITEMS } from "./data";

export default function TechMarquee() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div
      className="relative overflow-hidden py-5 group"
      style={{
        maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
      aria-hidden="true"
    >
      <div className="flex gap-3 animate-marquee group-hover:[animation-play-state:paused]">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="shrink-0 px-4 py-1.5 rounded-full text-xs font-medium text-zinc-500 border border-white/[0.07] bg-white/[0.03] whitespace-nowrap"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
