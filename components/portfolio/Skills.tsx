"use client";

import { SKILLS, SKILL_COLORS } from "./data";
import TiltCard from "./ui/TiltCard";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6" aria-labelledby="skills-heading">
      <div className="max-w-5xl mx-auto">

        <div className="reveal mb-14">
          <p
            className="text-xs uppercase tracking-widest text-cyan-400 mb-2 font-semibold"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Skills
          </p>
          <h2
            id="skills-heading"
            className="text-3xl sm:text-4xl font-bold text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            What I Work With
          </h2>
        </div>

        {/*
          Bento grid: 3 columns on large screens.
          Cloud & Identity (col-span-2) takes up more space on the first row.
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILLS.map((group, i) => {
            const colors = SKILL_COLORS[group.color];
            const isWide = i === 0;
            return (
              <TiltCard
                key={group.category}
                className={[
                  `reveal reveal-delay-${(i % 3) + 1}`,
                  "glass glass-bg-hover rounded-2xl p-6 transition-[border-color] duration-300",
                  colors.cardClass,
                  isWide ? "lg:col-span-2" : "",
                ].join(" ")}
              >
                <div className={`flex items-center gap-2 mb-4 ${colors.heading}`}>
                  {group.icon}
                  <h3
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors duration-200 ${colors.badge}`}
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </TiltCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
