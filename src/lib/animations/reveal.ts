import { animate, stagger } from "animejs";

export interface RevealOptions {
  duration?: number;
  delay?: number;
  staggerDelay?: number;
  yOffset?: number | string;
  ease?: string;
  scale?: [number, number];
}

export function revealElement(
  target: HTMLElement | HTMLElement[] | string,
  options: RevealOptions = {}
) {
  const {
    duration = 900,
    delay = 0,
    yOffset = 40,
    ease = "out(4)",
  } = options;

  return animate(target, {
    opacity: [0, 1],
    translateY: [yOffset, 0],
    duration,
    delay,
    ease,
  });
}

export function revealImage(
  target: HTMLElement | HTMLElement[] | string,
  options: RevealOptions = {}
) {
  const {
    duration = 1400,
    delay = 0,
    scale = [1.08, 1],
    ease = "out(4)",
  } = options;

  return animate(target, {
    scale,
    opacity: [0, 1],
    duration,
    delay,
    ease,
  });
}

export function revealStagger(
  targets: HTMLElement[] | NodeListOf<HTMLElement> | string,
  options: RevealOptions = {}
) {
  const {
    duration = 800,
    delay = 0,
    staggerDelay = 80,
    yOffset = 30,
    ease = "out(4)",
  } = options;

  return animate(targets, {
    opacity: [0, 1],
    translateY: [yOffset, 0],
    duration,
    delay: stagger(staggerDelay, { start: delay }),
    ease,
  });
}
