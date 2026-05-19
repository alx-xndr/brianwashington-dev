"use client";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 px-6" aria-labelledby="contact-heading">
      <div className="max-w-5xl mx-auto">

        <div className="reveal mb-10 text-center">
          <p
            className="text-xs uppercase tracking-widest text-violet-400 mb-2 font-semibold"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Contact
          </p>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Let&apos;s Connect
          </h2>
          <p className="text-zinc-400 max-w-md mx-auto leading-relaxed">
            Reach out directly — always happy to talk IT, Azure, automation, or anything infrastructure.
          </p>
        </div>

        {/* Contact pill cards */}
        <div className="reveal flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto mb-10">
          <a
            href="mailto:brian@brianwashington.dev"
            className="flex items-center gap-3 px-5 py-4 glass rounded-2xl text-sm text-zinc-300 hover:text-white hover:bg-white/[0.07] hover:border-white/20 transition-all duration-200 hover:-translate-y-1 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 flex-1 justify-center"
          >
            <span className="w-9 h-9 shrink-0 flex items-center justify-center rounded-xl bg-white/[0.05] border border-white/10 group-hover:border-blue-500/30 group-hover:bg-blue-500/10 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </span>
            <span>brian@brianwashington.dev</span>
          </a>

          <a
            href="https://www.linkedin.com/in/brianwashington"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-5 py-4 glass rounded-2xl text-sm text-zinc-300 hover:text-white hover:bg-white/[0.07] hover:border-white/20 transition-all duration-200 hover:-translate-y-1 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 flex-1 justify-center"
          >
            <span className="w-9 h-9 shrink-0 flex items-center justify-center rounded-xl bg-white/[0.05] border border-white/10 group-hover:border-blue-500/30 group-hover:bg-blue-500/10 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </span>
            <span>linkedin.com/in/brianwashington</span>
          </a>
        </div>

        {/* Resume download */}
        <div className="reveal text-center">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
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
    </section>
  );
}
