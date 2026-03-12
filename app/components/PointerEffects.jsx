"use client";

import { useEffect, useState } from "react";
import DesktopCursor from "./CustomCursor";
import MobileTouchEffect from "./MobileTouchEffect";

export default function PointerEffects() {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const touchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouch(touchDevice);
  }, []);

  if (isTouch) {
    return <MobileTouchEffect />;
  }

  return <DesktopCursor />;
}