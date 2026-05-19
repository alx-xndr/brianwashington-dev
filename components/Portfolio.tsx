"use client";

import { useEffect, useState } from "react";
import { SECTION_IDS } from "./portfolio/data";
import { useScrollReveal } from "./portfolio/hooks";

import Nav from "./portfolio/Nav";
import Hero from "./portfolio/Hero";
import TechMarquee from "./portfolio/TechMarquee";
import About from "./portfolio/About";
import Skills from "./portfolio/Skills";
import Experience from "./portfolio/Experience";
import Certifications from "./portfolio/Certifications";
import Contact from "./portfolio/Contact";
import Footer from "./portfolio/Footer";
import BackToTop from "./portfolio/ui/BackToTop";
import MouseSpotlight from "./portfolio/ui/MouseSpotlight";
import ScrollProgress from "./portfolio/ui/ScrollProgress";

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useScrollReveal();

  useEffect(() => {
    const handle = () => {
      const y = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 60);
      setShowBackToTop(y > 500);
      setScrollProgress(total > 0 ? (y / total) * 100 : 0);

      const threshold = y + window.innerHeight * 0.4;
      let current = "";
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= threshold) current = id;
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handle, { passive: true });
    handle();
    return () => window.removeEventListener("scroll", handle);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-dvh text-zinc-100 font-sans overflow-x-hidden" style={{ background: "#09090b" }}>
      <MouseSpotlight />
      <ScrollProgress progress={scrollProgress} />

      <Nav
        scrolled={scrolled}
        activeSection={activeSection}
        mobileOpen={mobileOpen}
        onToggleMobile={() => setMobileOpen((v) => !v)}
        onScrollTo={scrollTo}
      />

      <BackToTop visible={showBackToTop} />

      <main id="main-content">
        <Hero onScrollTo={scrollTo} />
        <TechMarquee />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Experience />
        <div className="section-divider" />
        <Certifications />
        <div className="section-divider" />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
