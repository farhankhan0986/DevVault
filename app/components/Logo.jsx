import React from "react";

const Logo = ({ size = 40, className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="none"
      width={size}
      height={size}
      className={className}
    >
      {/* Background */}
      <rect width="512" height="512" rx="80" fill="#0f172a" />
      {/* Glowing border */}
      <rect x="8" y="8" width="496" height="496" rx="74" fill="none" stroke="url(#logoGrad)" strokeWidth="4" />
      {/* Terminal prompt > */}
      <path d="M100 200L170 256L100 312" stroke="#6366f1" strokeWidth="26" strokeLinecap="round" strokeLinejoin="round" />
      {/* Cursor */}
      <rect x="195" y="290" width="50" height="26" rx="4" fill="#6366f1" opacity="0.6" />
      {/* FA Text */}
      <text x="340" y="290" textAnchor="middle" fontFamily="'Courier New', monospace" fontWeight="bold" fontSize="150" fill="white">
        FA
      </text>
      {/* Window dots */}
      <circle cx="70" cy="60" r="14" fill="#ef4444" />
      <circle cx="115" cy="60" r="14" fill="#eab308" />
      <circle cx="160" cy="60" r="14" fill="#22c55e" />
      {/* Separator */}
      <line x1="30" y1="100" x2="482" y2="100" stroke="white" strokeWidth="2" opacity="0.1" />
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="512" y2="512">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Logo;