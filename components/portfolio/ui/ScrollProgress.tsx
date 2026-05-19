"use client";

interface ScrollProgressProps {
  progress: number;
}

export default function ScrollProgress({ progress }: ScrollProgressProps) {
  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[60]" aria-hidden="true">
      <div
        className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-500"
        style={{ width: `${progress}%`, transition: "width 0.1s linear" }}
      />
    </div>
  );
}
