"use client";

import AnimatedCursor from "react-animated-cursor";

export default function CustomCursor() {
  if (typeof window !== "undefined" && "ontouchstart" in window) {
    return null;
  }

  return (
    <AnimatedCursor
  innerSize={8}
  outerSize={28}
  color="99,102,241"
  outerAlpha={0.25}
  innerScale={1.2}
  outerScale={2.5}
  outerStyle={{
    mixBlendMode: "difference",
    border: "2px solid rgba(99,102,241,0.5)",
    delay: 100,
  }}
  innerStyle={{
    backgroundColor: "rgb(99,102,241)",
  }}
  clickables={[
    "a",
    "button",
    ".cursor-pointer",
    "input",
    "textarea",
    ".link",
  ]}
/>
  );
}