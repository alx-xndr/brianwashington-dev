"use client";

import React, { forwardRef, useEffect, useRef, useState } from "react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

const TiltCard = forwardRef<HTMLDivElement, TiltCardProps>(function TiltCard(
  { children, className },
  forwardedRef
) {
  const localRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, on: false });
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const mergeRef = (el: HTMLDivElement | null) => {
    (localRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
    if (typeof forwardedRef === "function") forwardedRef(el);
    else if (forwardedRef)
      (forwardedRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
  };

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced.current || !localRef.current) return;
    const r = localRef.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: -y * 8, y: x * 8, on: true });
  };

  const onLeave = () => setTilt({ x: 0, y: 0, on: false });

  return (
    <div
      ref={mergeRef}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(${tilt.on ? 1.02 : 1},${tilt.on ? 1.02 : 1},1)`,
        transition: tilt.on
          ? "transform 0.12s ease-out"
          : "transform 0.55s cubic-bezier(0.16,1,0.3,1)",
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
});

export default TiltCard;
