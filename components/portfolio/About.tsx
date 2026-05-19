"use client";

import { STATS } from "./data";
import StatCard from "./ui/StatCard";

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6" aria-labelledby="about-heading">
      <div className="max-w-5xl mx-auto">

        <div className="reveal mb-14">
          <p
            className="text-xs uppercase tracking-widest text-blue-400 mb-2 font-semibold"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            About
          </p>
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl font-bold text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Background
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* Bio */}
          <div className="space-y-5">
            <p className="reveal text-zinc-300 leading-relaxed">
              Nine years in IT, most of it building and running the infrastructure at a 300-person company —{" "}
              <strong className="text-white font-semibold">Azure AD / Entra ID</strong>,{" "}
              <strong className="text-white font-medium">Microsoft 365</strong>, VMware, device management,
              networking, the works.
            </p>
            <p className="reveal reveal-delay-1 text-zinc-300 leading-relaxed">
              More recently I&apos;ve been getting into scripting and automation. I use{" "}
              <strong className="text-white font-medium">AI tools</strong> to help write PowerShell, build{" "}
              <strong className="text-white font-medium">Graph API</strong> integrations, and put together
              internal tools that replace hours of manual work with something that just runs.
            </p>
            <p className="reveal reveal-delay-2 text-zinc-300 leading-relaxed">
              Working toward{" "}
              <strong className="text-blue-400 font-medium">AZ-104</strong> now. The hands-on Azure experience
              is there — the cert makes it official.
            </p>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((stat, i) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                label={stat.label}
                color={stat.color}
                delay={(i % 4) + 1}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
