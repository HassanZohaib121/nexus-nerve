import { animate } from "animejs";

export function createMarqueeAnimation(
  target: HTMLElement | string,
  duration = 25000,
  direction: "left" | "right" = "left"
) {
  const fromX = direction === "left" ? "0%" : "-50%";
  const toX = direction === "left" ? "-50%" : "0%";

  return animate(target, {
    translateX: [fromX, toX],
    duration,
    ease: "linear",
    loop: true,
  });
}
