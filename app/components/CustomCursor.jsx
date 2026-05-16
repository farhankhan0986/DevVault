"use client";

import AnimatedCursor from "react-animated-cursor";

export default function CustomCursor() {
  if (typeof window !== "undefined" && "ontouchstart" in window) {
    return null;
  }

  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={0}
      color="255,255,255"
      outerAlpha={0}
      innerScale={1.5}
      outerScale={0}
      innerStyle={{
        backgroundColor: "rgba(255,255,255,0.95)",
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