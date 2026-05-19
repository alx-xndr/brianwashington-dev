"use client";

import { EXPERIENCE } from "./data";

function IconBriefcase() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="14" x="2" y="7" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function IconMapPin() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6" aria-labelledby="experience-heading">
      <div className="max-w-4xl mx-auto">

        <div className="reveal mb-14">
          <p
            className="text-xs uppercase tracking-widest text-indigo-400 mb-2 font-semibold"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Experience
          </p>
          <h2
            id="experience-heading"
            className="text-3xl sm:text-4xl font-bold text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Work History
          </h2>
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div
            className="absolute left-[22px] top-4 bottom-4 w-px hidden sm:block"
            style={{
              background: "linear-gradient(to bottom, rgba(99,102,241,0.5) 0%, rgba(99,102,241,0.15) 70%, transparent 100%)",
            }}
            aria-hidden="true"
          />

          <div className="space-y-6">
            {EXPERIENCE.map((job, i) => (
              <div
                key={`${job.company}-${i}`}
                className={`reveal reveal-delay-${i + 1} relative sm:pl-14`}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-[15px] top-[28px] w-3.5 h-3.5 rounded-full border-2 border-indigo-500 bg-[#09090b] hidden sm:block"
                  aria-hidden="true"
                />

                <div className="glass glass-hover rounded-2xl p-6 transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-zinc-500">
                          <IconBriefcase />
                        </span>
                        <h3
                          className="text-base font-semibold text-zinc-100"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {job.role}
                        </h3>
                      </div>
                      <p className="text-blue-400 font-medium text-sm pl-6">{job.company}</p>
                    </div>
                    <div className="text-right flex flex-col items-end gap-1.5">
                      <span
                        className="text-xs font-medium text-zinc-400 bg-white/[0.05] border border-white/10 rounded-full px-3 py-1"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {job.period}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-zinc-500">
                        <IconMapPin />{job.location}
                      </span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2.5">
                    {job.highlights.map((point, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2.5 text-sm text-zinc-400 leading-relaxed"
                      >
                        <span className="mt-[3px] shrink-0 text-blue-500/70">
                          <IconCheck />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
