// "use client";

// import { useEffect } from "react";

// export default function MobileTouchEffect() {
//   useEffect(() => {
//     const dot = document.createElement("div");
//     const ring = document.createElement("div");

//     dot.className = "tap-dot";
//     ring.className = "tap-ring";

//     document.body.appendChild(dot);
//     document.body.appendChild(ring);

//     let ringX = 0;
//     let ringY = 0;

//     const movePointer = (x, y) => {
//       // dot moves instantly
//       dot.style.left = x + "px";
//       dot.style.top = y + "px";
//       dot.style.opacity = "1";

//       // ring follows with delay
//       ringX += (x - ringX) * 0.2;
//       ringY += (y - ringY) * 0.2;

//       ring.style.left = ringX + "px";
//       ring.style.top = ringY + "px";
//       ring.style.opacity = "1";
//     };

//     const handleTouch = (e) => {
//       const touch = e.touches[0];
//       movePointer(touch.clientX, touch.clientY);
//     };

//     window.addEventListener("touchstart", handleTouch);

//     return () => {
//       window.removeEventListener("touchstart", handleTouch);
//       dot.remove();
//       ring.remove();
//     };
//   }, []);

//   return null;
// }