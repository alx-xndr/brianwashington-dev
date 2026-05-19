"use client";

import TiltCard from "./TiltCard";
import { useCountUp } from "../hooks";

interface StatCardProps {
  value: string;
  label: string;
  color: string;
  delay: number;
}

export default function StatCard({ value, label, color, delay }: StatCardProps) {
  const numeric = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/\d/g, "");
  const { count, ref } = useCountUp(numeric);

  return (
    <TiltCard
      ref={ref}
      className={`reveal reveal-delay-${delay} glass glass-bg-hover rounded-2xl p-6 text-center`}
    >
      <div
        className={`text-3xl font-bold tabular-nums mb-1.5 ${color}`}
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {count}{suffix}
      </div>
      <div className="text-xs text-zinc-400 font-medium tracking-wide uppercase">
        {label}
      </div>
    </TiltCard>
  );
}
