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

  // Reduce significantly the number of bubbles for global use
  const bubbleCount = isLowPerformance 
    ? { large: 1, medium: 2, small: 3 }
    : isMobile 
    ? { large: 2, medium: 3, small: 4 }
    : { large: 3, medium: 4, small: 5 }

  // Simplified animation for global use
  const globalBubbleAnimation = {
    y: [0, -20, 0],
    scale: [1, 1.05, 1],
    opacity: [0.3, 0.6, 0.3],
  }

  const globalTransition = {
    duration: reduceAnimations ? 12 : 10,
    repeat: Number.POSITIVE_INFINITY,
    ease: "easeInOut",
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] opacity-40">
      {/* Large subtle bubbles - More visible */}
      {[...Array(bubbleCount.large)].map((_, i) => (
        <motion.div
          key={`global-large-bubble-${i}`}
          className="absolute bg-gradient-radial from-[#BBFF00]/25 to-[#70FF00]/8 rounded-full"
          style={{
            width: `${150 + i * 30}px`,
            height: `${150 + i * 30}px`,
            left: `${20 + i * 35}%`,
            top: `${15 + i * 25}%`,
            filter: "blur(2px)",
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}
          animate={globalBubbleAnimation}
          transition={{
            ...globalTransition,
            delay: i * 1.5,
          }}
        />
      ))}

      {/* Medium bubbles - Enhanced visibility */}
      {[...Array(bubbleCount.medium)].map((_, i) => (
        <motion.div
          key={`global-medium-bubble-${i}`}
          className="absolute bg-gradient-radial from-[#70FF00]/30 to-[#BBFF00]/10 rounded-full"
          style={{
            width: `${80 + i * 15}px`,
            height: `${80 + i * 15}px`,
            left: `${60 + i * 20}%`,
            top: `${30 + i * 20}%`,
            filter: "blur(1.5px)",
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}
          animate={globalBubbleAnimation}
          transition={{
            ...globalTransition,
            delay: i * 1,
          }}
        />
      ))}

      {/* Small floating bubbles - More prominent */}
      {[...Array(bubbleCount.small)].map((_, i) => (
        <motion.div
          key={`global-small-bubble-${i}`}
          className="absolute bg-gradient-radial from-[#BBFF00]/35 to-[#70FF00]/12 rounded-full"
          style={{
            width: `${40 + i * 8}px`,
            height: `${40 + i * 8}px`,
            left: `${10 + i * 18}%`,
            top: `${60 + i * 15}%`,
            filter: "blur(0.5px)",
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}
          animate={globalBubbleAnimation}
          transition={{
            ...globalTransition,
            delay: i * 0.8,
          }}
        />
      ))}

      {/* Enhanced global gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#BBFF00]/4 via-transparent to-[#70FF00]/4" />
      
      {/* More visible corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-radial from-[#BBFF00]/15 to-transparent rounded-full blur-xl" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-radial from-[#70FF00]/12 to-transparent rounded-full blur-xl" />
      
      {/* Additional floating particles for more atmosphere */}
      <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-gradient-radial from-[#BBFF00]/20 to-transparent rounded-full blur-lg animate-pulse" />
      <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-gradient-radial from-[#70FF00]/15 to-transparent rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }} />
    </div>
  )
} 