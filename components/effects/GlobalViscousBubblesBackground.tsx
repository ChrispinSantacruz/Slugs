"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { usePerformanceOptimization } from "@/hooks/usePerformanceOptimization"

export function GlobalViscousBubblesBackground() {
  const [isMounted, setIsMounted] = useState(false)
  const { reduceAnimations, isMobile, isLowPerformance } = usePerformanceOptimization()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  // Significantly reduced bubbles - much fewer for better performance and no scroll interference
  const bubbleCount = isLowPerformance 
    ? { large: 1, medium: 2, small: 3 }
    : isMobile 
    ? { large: 2, medium: 3, small: 4 }
    : { large: 3, medium: 4, small: 5 }

  // Gentle animation that doesn't interfere
  const subtleBubbleAnimation = {
    y: [0, -25, 0],
    scale: [1, 1.1, 1],
    opacity: [0.3, 0.6, 0.3],
  }

  const gentleTransition = {
    duration: reduceAnimations ? 18 : 15,
    repeat: Number.POSITIVE_INFINITY,
    ease: "easeInOut",
  }

  return (
    <div className="absolute inset-0 w-full h-full opacity-50 overflow-hidden pointer-events-none">
      {/* Large bubbles - much fewer */}
      {[...Array(bubbleCount.large)].map((_, i) => (
        <motion.div
          key={`global-large-bubble-${i}`}
          className="absolute bg-gradient-radial from-[#BBFF00]/30 to-[#70FF00]/10 rounded-full pointer-events-none"
          style={{
            width: `${160 + i * 30}px`,
            height: `${160 + i * 30}px`,
            left: `${20 + i * 30}%`,
            top: `${10 + i * 35}%`,
            filter: "blur(3px)",
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}
          animate={subtleBubbleAnimation}
          transition={{
            ...gentleTransition,
            delay: i * 2,
          }}
        />
      ))}

      {/* Medium bubbles - reduced */}
      {[...Array(bubbleCount.medium)].map((_, i) => (
        <motion.div
          key={`global-medium-bubble-${i}`}
          className="absolute bg-gradient-radial from-[#70FF00]/35 to-[#BBFF00]/15 rounded-full pointer-events-none"
          style={{
            width: `${90 + i * 15}px`,
            height: `${90 + i * 15}px`,
            left: `${50 + i * 20}%`,
            top: `${30 + i * 25}%`,
            filter: "blur(2px)",
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}
          animate={subtleBubbleAnimation}
          transition={{
            ...gentleTransition,
            delay: i * 1.5,
          }}
        />
      ))}

      {/* Small bubbles - minimal */}
      {[...Array(bubbleCount.small)].map((_, i) => (
        <motion.div
          key={`global-small-bubble-${i}`}
          className="absolute bg-gradient-radial from-[#BBFF00]/40 to-[#70FF00]/20 rounded-full pointer-events-none"
          style={{
            width: `${45 + i * 8}px`,
            height: `${45 + i * 8}px`,
            left: `${15 + i * 20}%`,
            top: `${60 + i * 15}%`,
            filter: "blur(1px)",
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}
          animate={subtleBubbleAnimation}
          transition={{
            ...gentleTransition,
            delay: i * 1,
          }}
        />
      ))}

      {/* Atmospheric gradients - subtle */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#BBFF00]/5 via-transparent to-[#70FF00]/5 pointer-events-none" />
      
      {/* Corner accents - fewer and more subtle */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-radial from-[#BBFF00]/15 to-transparent rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-radial from-[#70FF00]/12 to-transparent rounded-full blur-2xl pointer-events-none" />
    </div>
  )
} 