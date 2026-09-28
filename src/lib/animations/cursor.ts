import { animate } from "animejs";

export function moveCursor(
  target: HTMLElement,
  x: number,
  y: number,
  duration = 200
) {
  return animate(target, {
    translateX: x,
    translateY: y,
    duration,
    ease: "out(3)",
  });
}

export function transformCursor(
  target: HTMLElement,
  scale: number,
  duration = 300
) {
  return animate(target, {
    scale,
    duration,
    ease: "out(4)",
  });
}
