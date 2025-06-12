"use client"

import type { Variants } from "framer-motion"

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
}

export const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
}

export const fadeInRight: Variants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
}

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
}

export const rotateIn: Variants = {
  initial: { opacity: 0, scale: 0, rotate: -180 },
  animate: { opacity: 1, scale: 1, rotate: 0 },
  exit: { opacity: 0, scale: 0, rotate: 180 },
}

export const slimePulse = {
  scale: [1, 1.02, 1],
  transition: {
    duration: 2,
    repeat: Number.POSITIVE_INFINITY,
    ease: "easeInOut",
  },
}

export const slimeGlow = {
  textShadow: [
    "0 0 20px #BBFF00, 0 0 40px #70FF00",
    "0 0 40px #70FF00, 0 0 60px #BBFF00",
    "0 0 20px #BBFF00, 0 0 40px #70FF00",
  ],
  transition: {
    duration: 2,
    repeat: Number.POSITIVE_INFINITY,
    ease: "easeInOut",
  },
}

export const slimeRotate = {
  rotate: [0, 5, -5, 0],
  scale: [1, 1.05, 1],
  transition: {
    duration: 3,
    repeat: Number.POSITIVE_INFINITY,
  },
}

export const slimeDrip = (delay = 0) => ({
  y: [0, 15, 0],
  scaleY: [1, 1.5, 1],
  opacity: [0.8, 1, 0.8],
  transition: {
    duration: 2.5,
    repeat: Number.POSITIVE_INFINITY,
    ease: "easeInOut",
    delay,
  },
})
