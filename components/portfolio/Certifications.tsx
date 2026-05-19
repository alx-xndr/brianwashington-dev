"use client";

import { CERTIFICATIONS } from "./data";
import TiltCard from "./ui/TiltCard";

function IconGradCap() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 px-6" aria-labelledby="certs-heading">
      <div className="max-w-4xl mx-auto">

        <div className="reveal mb-14">
          <p
            className="text-xs uppercase tracking-widest text-emerald-400 mb-2 font-semibold"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Credentials
          </p>
          <h2
            id="certs-heading"
            className="text-3xl sm:text-4xl font-bold text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Certifications &amp; Education
          </h2>
        </div>

        {/* Cert cards */}
        <div className="grid sm:grid-cols-2 gap-5 mb-5">
          {CERTIFICATIONS.map((cert, i) => (
            <TiltCard
              key={cert.name}
              className={`reveal reveal-delay-${i + 1} glass glass-bg-hover rounded-2xl p-6`}
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <div>
                  <h3
                    className="font-semibold text-zinc-100 mb-1 leading-snug"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {cert.name}
                  </h3>
                  <p className="text-sm text-zinc-400">{cert.issuer}</p>
                </div>

                {cert.status === "earned" ? (
                  <span className="shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border text-emerald-300 bg-emerald-500/10 border-emerald-500/30 whitespace-nowrap">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    Earned {cert.year}
                  </span>
                ) : (
                  <span className="shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border text-amber-300 bg-amber-500/10 border-amber-500/30 whitespace-nowrap">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 pulse-dot" aria-hidden="true" />
                    In Progress
                  </span>
                )}
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">{cert.description}</p>
            </TiltCard>
          ))}
        </div>

        {/* Education card */}
        <TiltCard className="reveal glass glass-bg-hover rounded-2xl p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 text-blue-400">
                <IconGradCap />
              </span>
              <div>
                <h3
                  className="font-semibold text-zinc-100 mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Associate Degree, Information Technology
                </h3>
                <p className="text-sm text-zinc-400">Ranken Technical College · St. Louis, MO</p>
              </div>
            </div>
            <span className="shrink-0 text-xs font-semibold px-3 py-1 rounded-full border text-blue-300 bg-blue-500/10 border-blue-500/30 whitespace-nowrap">
              A.S. Degree
            </span>
          </div>
        </TiltCard>

      </div>
    </section>
  );
}
