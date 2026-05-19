"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface HeroProps {
  onScrollTo: (id: string) => void;
}

export default function Hero({ onScrollTo }: HeroProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-dvh flex items-center px-6 pt-24 pb-16 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Ambient mesh background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute top-[-18%] left-[-6%] w-[600px] h-[600px] rounded-full opacity-[0.16] blur-3xl"
          style={{
            background: "radial-gradient(circle, #1d4ed8 0%, transparent 70%)",
            animation: "blob-drift 22s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-[-15%] right-[-6%] w-[500px] h-[500px] rounded-full opacity-[0.12] blur-3xl"
          style={{
            background: "radial-gradient(circle, #0891b2 0%, transparent 70%)",
            animation: "blob-drift 28s ease-in-out 5s infinite reverse",
          }}
        />
        <div
          className="absolute top-[40%] left-[50%] w-[300px] h-[300px] rounded-full opacity-[0.09] blur-3xl"
          style={{
            background: "radial-gradient(circle, #4f46e5 0%, transparent 70%)",
            animation: "blob-drift 18s ease-in-out 9s infinite",
          }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: text content ── */}
          <div className="order-2 lg:order-1">
            {/* Location badge */}
            <div
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-zinc-400 border border-white/10 bg-white/[0.04] mb-7 ${
                mounted ? "hero-enter-left hero-delay-1" : "opacity-0"
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              St. Louis, MO · Open to Remote
            </div>

            {/* Hi label */}
            <p
              className={`text-zinc-500 text-sm font-medium mb-2 tracking-wider uppercase ${
                mounted ? "hero-enter-left hero-delay-2" : "opacity-0"
              }`}
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Hi, I&apos;m
            </p>

            {/* Name */}
            <h1
              id="hero-heading"
              className={`font-bold tracking-tight text-white leading-[1.02] mb-4 ${
                mounted ? "hero-enter-left hero-delay-2" : "opacity-0"
              }`}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3rem, 1.5rem + 5vw, 5.5rem)",
              }}
            >
              Brian{" "}
              <span className="gradient-text">Washington</span>
            </h1>

            {/* Role */}
            <p
              className={`text-xl sm:text-2xl font-medium text-zinc-300 mb-4 leading-snug ${
                mounted ? "hero-enter-left hero-delay-3" : "opacity-0"
              }`}
              style={{ fontFamily: "var(--font-display)" }}
            >
              Systems &amp; Cloud Infrastructure Engineer
            </p>

            {/* Subtitle pills */}
            <div
              className={`flex flex-wrap gap-2 mb-10 ${
                mounted ? "hero-enter-up hero-delay-4" : "opacity-0"
              }`}
            >
              {["Azure", "Microsoft 365", "AI-Assisted Automation"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium text-zinc-400 bg-white/[0.04] border border-white/[0.08] rounded-full"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div
              className={`flex flex-col sm:flex-row gap-3 mb-6 ${
                mounted ? "hero-enter-up hero-delay-5" : "opacity-0"
              }`}
            >
              <button
                onClick={() => onScrollTo("experience")}
                className="px-7 py-3.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 glow-blue cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                View My Work
              </button>
              <button
                onClick={() => onScrollTo("contact")}
                className="px-7 py-3.5 rounded-xl font-semibold text-zinc-200 glass hover:text-white hover:bg-white/[0.07] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Contact Me
              </button>
            </div>

            {/* Resume download */}
            <div className={mounted ? "hero-enter-up hero-delay-5" : "opacity-0"}>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-300 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="3" y2="15" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>

          {/* ── Right: profile photo ── */}
          <div
            className={`order-1 lg:order-2 flex justify-center lg:justify-end ${
              mounted ? "hero-enter-right hero-delay-3" : "opacity-0"
            }`}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              {/* Rotating ring */}
              <div
                className="absolute inset-[-6px] rounded-full photo-ring-spinner"
                style={{
                  background: "conic-gradient(from 0deg, #3b82f6, #06b6d4, #6366f1, #3b82f6)",
                  padding: "3px",
                }}
                aria-hidden="true"
              >
                <div className="w-full h-full rounded-full bg-[#09090b]" />
              </div>

              {/* Static outer glow */}
              <div
                className="absolute inset-[-12px] rounded-full opacity-30 blur-xl"
                style={{
                  background: "radial-gradient(circle, rgba(59,130,246,0.6) 0%, transparent 70%)",
                }}
                aria-hidden="true"
              />

              {/* Photo or initials placeholder */}
              <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10">
                <ProfilePhoto />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll chevron */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-600 animate-bounce"
        aria-hidden="true"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}

function ProfilePhoto() {
  const [hasPhoto, setHasPhoto] = useState(true);

  if (hasPhoto) {
    return (
      <Image
        src="/profile.jpg"
        alt="Brian Washington"
        fill
        className="object-cover"
        priority
        onError={() => setHasPhoto(false)}
      />
    );
  }

  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(99,102,241,0.1) 50%, rgba(6,182,212,0.15) 100%)",
      }}
    >
      <span
        className="gradient-text font-bold select-none"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(3rem, 8vw, 5rem)",
        }}
        aria-hidden="true"
      >
        BW
      </span>
    </div>
  );
}
