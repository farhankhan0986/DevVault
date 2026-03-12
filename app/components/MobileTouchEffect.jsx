"use client";

import { useEffect } from "react";

export default function MobileTouchEffect() {
  useEffect(() => {
    const createRipple = (x, y) => {
      const ripple = document.createElement("span");
      ripple.className = "tap-ripple";
      ripple.style.left = x + "px";
      ripple.style.top = y + "px";

      document.body.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);
    };

    const handleTouch = (e) => {
      const touch = e.touches[0];
      createRipple(touch.clientX, touch.clientY);
    };

    window.addEventListener("touchstart", handleTouch);

    return () => {
      window.removeEventListener("touchstart", handleTouch);
    };
  }, []);

  return null;
}