import { animate } from "animejs";

export function applyParallax(
  target: HTMLElement,
  offsetY: number,
  duration = 400
) {
  return animate(target, {
    translateY: offsetY,
    duration,
    ease: "out(2)",
  });
}
