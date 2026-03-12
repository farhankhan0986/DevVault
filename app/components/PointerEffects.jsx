"use client";

import { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";

export default function PointerEffects() {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
    }
  }, []);

  useEffect(() => {
    if (!isTouch) return;

    const handleTouch = (e) => {
      const touch = e.touches[0];

      const ripple = document.createElement("span");
      ripple.className = "tap-ripple";
      ripple.style.left = touch.clientX + "px";
      ripple.style.top = touch.clientY + "px";

      document.body.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    };

    window.addEventListener("touchstart", handleTouch);

    return () => window.removeEventListener("touchstart", handleTouch);
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      color="99,102,241"
      outerAlpha={0.25}
      innerScale={1}
      outerScale={2}
    />
  );
}