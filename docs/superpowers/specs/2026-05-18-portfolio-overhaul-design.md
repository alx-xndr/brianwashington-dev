# Portfolio Overhaul Design Spec
**Date:** 2026-05-18  
**Project:** Brian Washington Personal Website  
**Stack:** Next.js 15, Tailwind CSS, TypeScript

---

## Goal

Complete visual and structural overhaul of the portfolio. Keep all existing content (bio, experience, skills, certs). Elevate the design from "glassmorphism template" to "dark technical premium" — precise, layered, and engineered-feeling.

---

## Visual Identity

| Token | Value |
|-------|-------|
| Background | `#09090b` (warm zinc-black) |
| Surface | `rgba(255,255,255,0.04)` glassmorphism |
| Accent primary | Electric blue `#3B82F6` → cyan `#06B6D4` gradient |
| Accent warm | Amber `#F59E0B` (in-progress indicators only) |
| Text primary | `#fafafa` |
| Text secondary | `#a1a1aa` |
| Font headings | Space Grotesk (via next/font/google) |
| Font body | Inter (existing) |
| Font mono | JetBrains Mono (stats, skill badges) |
| Grid texture | `radial-gradient` dot grid, 36px spacing, 4% opacity |
| Ambient | Slow-shifting mesh gradient blob (CSS animation, no canvas) |

---

## Component Architecture

All components live under `components/portfolio/`. Main `Portfolio.tsx` orchestrates them.

```
components/
  Portfolio.tsx          — root, scroll state, nav state
  portfolio/
    data.ts              — all constants (SKILLS, EXPERIENCE, CERTS, STATS, NAV)
    hooks.ts             — useScrollReveal, useCountUp, useTypingEffect
    Nav.tsx              — pill nav, mobile drawer
    Hero.tsx             — split-column hero, profile photo frame
    TechMarquee.tsx      — scrolling tech pill marquee
    About.tsx            — bio text + stat cards
    Skills.tsx           — asymmetric bento skill grid
    Experience.tsx       — timeline with role cards
    Certifications.tsx   — cert cards + education card
    Contact.tsx          — contact links section
    Footer.tsx           — minimal footer
    ui/
      TiltCard.tsx       — 3D hover tilt wrapper
      StatCard.tsx       — animated count-up stat
      BackToTop.tsx      — fixed scroll-to-top button
      MouseSpotlight.tsx — cursor radial glow
      ScrollProgress.tsx — top progress bar
```

---

## Section Designs

### Nav
- Centered pill shape: `max-w-fit mx-auto`, frosted glass, `rounded-full`
- Name/logo on far left, links centered, CTA on right — pill wraps just the links; name and CTA float outside on same row
- Active link: gradient underline dot
- Mobile: slide-down drawer

### Hero
- Two-column layout (50/50 on desktop, stacked on mobile)
- **Left**: Small "Hi, I'm" label → massive `Brian Washington` heading → role subtitle → location badge → CTA buttons → resume download
- **Right**: Profile photo in a circular frame with a slow-rotating conic-gradient border ring; placeholder shown until `/public/profile.jpg` is added
- Background: mesh gradient blobs (CSS), dot grid, no particle canvas
- Entry animations: name slides from left, photo slides from right

### Skills
- Asymmetric bento grid: first two categories as wide featured tiles, remaining four in 2×2
- Hover: card border brightens to category accent color

### Experience
- Vertical timeline, keep structure
- Cards with subtle left-border accent on hover
- Period badge in monospace font

### Certifications
- Side-by-side cards
- In-progress: amber pulse dot next to status badge

### Contact
- Centered layout
- Contact items as standalone pill cards with icon + label + hover lift

---

## Animations

| Element | Animation |
|---------|-----------|
| Hero name | Slide in from left, 0.8s ease-out-expo |
| Hero photo | Slide in from right, 0.8s ease-out-expo |
| Photo ring | Slow rotating conic-gradient, 8s linear infinite |
| Stat cards | Count-up on scroll-into-view |
| Scroll reveal | Fade + translateY |
| In-progress dot | Pulse keyframe |

No external animation libraries. All CSS + requestAnimationFrame.

---

## Accessibility

- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- `prefers-reduced-motion`: disable all animations
- Focus-visible rings on all interactive elements
- WCAG AA color contrast on all text

---

## Out of Scope

- Contact form
- Dark/light theme toggle
- Blog or project case studies
