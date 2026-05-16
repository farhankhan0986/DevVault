"use client";

import { useEffect } from "react";

export default function MobileTouchEffect() {
  useEffect(() => {
    const dot = document.createElement("div");
    const ring = document.createElement("div");

    dot.className = "tap-dot";
    ring.className = "tap-ring";

    document.body.appendChild(dot);
    document.body.appendChild(ring);

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const handleTouch = (e) => {
      const touch = e.touches[0];

      mouseX = touch.clientX;
      mouseY = touch.clientY;

      dot.style.left = mouseX + "px";
      dot.style.top = mouseY + "px";
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.2;
      ringY += (mouseY - ringY) * 0.2;

      ring.style.left = ringX + "px";
      ring.style.top = ringY + "px";

      requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("touchstart", handleTouch);

    return () => {
      window.removeEventListener("touchstart", handleTouch);
      dot.remove();
      ring.remove();
    };
  }, []);

  return null;
}