import { animate, stagger } from "animejs";

export interface TextRevealOptions {
  duration?: number;
  delay?: number;
  staggerDelay?: number;
  yOffset?: string | number;
  ease?: string;
}

export function revealLines(
  targets: HTMLElement[] | NodeListOf<HTMLElement> | string,
  options: TextRevealOptions = {}
) {
  const {
    duration = 1000,
    delay = 0,
    staggerDelay = 90,
    yOffset = "105%",
    ease = "out(4)",
  } = options;

  return animate(targets, {
    translateY: [yOffset, "0%"],
    opacity: [0, 1],
    duration,
    delay: stagger(staggerDelay, { start: delay }),
    ease,
  });
}

export function revealWords(
  targets: HTMLElement[] | NodeListOf<HTMLElement> | string,
  options: TextRevealOptions = {}
) {
  const {
    duration = 900,
    delay = 0,
    staggerDelay = 40,
    yOffset = "100%",
    ease = "out(4)",
  } = options;

  return animate(targets, {
    translateY: [yOffset, "0%"],
    opacity: [0, 1],
    duration,
    delay: stagger(staggerDelay, { start: delay }),
    ease,
  });
}
