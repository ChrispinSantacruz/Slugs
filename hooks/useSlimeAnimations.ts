"use client"

import { useScroll, useTransform } from "framer-motion"

export function useSlimeAnimations() {
  const { scrollY } = useScroll()

  // Reducir la intensidad de las transformaciones
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 75]) // Reducido de [0, 150]
  const backgroundOpacity = useTransform(scrollY, [0, 500], [1, 0.5]) // Cambiado de [0, 300], [1, 0.3]
  const parallaxY = useTransform(scrollY, [0, 2000], [0, -100]) // Reducido de [0, 1000], [0, -200]

  return {
    backgroundY,
    backgroundOpacity,
    parallaxY,
  }
}
