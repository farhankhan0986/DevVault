import React from "react";

/**
 * Logo — Vercel-aligned monochrome mark
 *
 * Design:
 *   - Dark rounded square background
 *   - Thin white border (hairline)
 *   - Bold "F" constructed from clean geometric strokes
 *   - Subtle "A" dot accent — a single white pixel/circle beneath the F
 *     reading as "Farhan Abid" initial mark
 *   - No colors, no gradients, no playful decorations
 */
const Logo = ({ size = 40, className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="none"
      width={size}
      height={size}
      className={className}
      aria-label="Farhan Abid logo"
    >
      {/* Background — near-black square */}
      <rect width="100" height="100" rx="18" fill="#0a0a0a" />

      {/* Hairline border */}
      <rect
        x="1"
        y="1"
        width="98"
        height="98"
        rx="17"
        fill="none"
        stroke="rgba(255,255,255,0.14)"
        strokeWidth="1"
      />

      {/* ── Lettermark: F ── */}
      {/* Vertical stem */}
      <rect x="28" y="24" width="8" height="52" rx="2" fill="white" />
      {/* Top horizontal bar — full width */}
      <rect x="28" y="24" width="38" height="8" rx="2" fill="white" />
      {/* Middle horizontal bar — slightly shorter */}
      <rect x="28" y="44" width="28" height="7" rx="2" fill="rgba(255,255,255,0.85)" />

      {/* ── Accent dot: "A" initial — bottom right ── */}
      <circle cx="70" cy="72" r="5" fill="white" opacity="0.9" />

      {/* Thin connecting line from stem bottom to dot */}
      <line
        x1="36"
        y1="76"
        x2="65"
        y2="72"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Logo;