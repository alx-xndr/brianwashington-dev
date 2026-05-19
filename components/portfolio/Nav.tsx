"use client";

import { NAV_LINKS } from "./data";

interface NavProps {
  scrolled: boolean;
  activeSection: string;
  mobileOpen: boolean;
  onToggleMobile: () => void;
  onScrollTo: (id: string) => void;
}

export default function Nav({
  scrolled,
  activeSection,
  mobileOpen,
  onToggleMobile,
  onScrollTo,
}: NavProps) {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-white/[0.06] shadow-2xl shadow-black/50" : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <button
          onClick={() => onScrollTo("hero")}
          className="cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg"
          aria-label="Back to top"
        >
          <span
            className="gradient-text font-bold text-xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            BW
          </span>
          <span className="text-zinc-500 ml-2.5 font-light text-sm hidden sm:inline">
            Brian Washington
          </span>
        </button>

        {/* Desktop links — pill container */}
        <div className="hidden md:flex items-center">
          <ul
            className="flex items-center gap-1 glass rounded-full px-3 py-1.5 border border-white/[0.07]"
            role="list"
          >
            {NAV_LINKS.map((link) => {
              const id = link.toLowerCase();
              const isActive = activeSection === id;
              return (
                <li key={link}>
                  <button
                    onClick={() => onScrollTo(id)}
                    className={`relative text-sm px-3.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                      isActive
                        ? "text-white bg-white/[0.1]"
                        : "text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.05]"
                    }`}
                  >
                    {link}
                    {isActive && (
                      <span
                        className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"
                        aria-hidden="true"
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* CTA */}
        <button
          onClick={() => onScrollTo("contact")}
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 border border-blue-500/40 transition-all duration-200 cursor-pointer glow-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b]"
        >
          Get in Touch
        </button>

        {/* Mobile hamburger */}
        <button
          onClick={onToggleMobile}
          className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-white/5 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden glass border-t border-white/[0.06] px-6 py-4">
          <ul className="flex flex-col gap-1" role="list">
            {NAV_LINKS.map((link) => {
              const id = link.toLowerCase();
              const isActive = activeSection === id;
              return (
                <li key={link}>
                  <button
                    onClick={() => onScrollTo(id)}
                    className={`block w-full text-left py-2.5 px-3 rounded-xl transition-colors cursor-pointer text-sm ${
                      isActive
                        ? "text-white bg-white/[0.08] font-medium"
                        : "text-zinc-300 hover:text-white hover:bg-white/[0.05]"
                    }`}
                  >
                    {link}
                  </button>
                </li>
              );
            })}
            <li className="pt-2 border-t border-white/10 mt-2">
              <button
                onClick={() => onScrollTo("contact")}
                className="block w-full text-center text-white bg-blue-600 hover:bg-blue-500 py-2.5 px-3 rounded-xl transition-colors cursor-pointer text-sm font-medium"
              >
                Get in Touch
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
