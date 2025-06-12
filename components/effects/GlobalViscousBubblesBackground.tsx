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

  // Increased number of bubbles for better visibility
  const bubbleCount = isLowPerformance 
    ? { large: 2, medium: 4, small: 6, micro: 8 }
    : isMobile 
    ? { large: 3, medium: 5, small: 8, micro: 10 }
    : { large: 5, medium: 8, small: 12, micro: 15 }

  // More dynamic animations
  const intenseBubbleAnimation = {
    y: [0, -40, 0],
    x: [0, 15, 0],
    scale: [1, 1.2, 1],
    opacity: [0.4, 0.8, 0.4],
  }

  const microBubbleAnimation = {
    y: [0, -60, 0],
    x: [0, 10, -5, 0],
    scale: [1, 1.3, 1],
    opacity: [0.6, 1, 0.6],
  }

  const dynamicTransition = {
    duration: reduceAnimations ? 15 : 12,
    repeat: Number.POSITIVE_INFINITY,
    ease: "easeInOut",
  }

  return (
    <div className="absolute inset-0 w-full h-full opacity-60 overflow-hidden">
      {/* Large dramatic bubbles */}
      {[...Array(bubbleCount.large)].map((_, i) => (
        <motion.div
          key={`global-large-bubble-${i}`}
          className="absolute bg-gradient-radial from-[#BBFF00]/40 to-[#70FF00]/15 rounded-full"
          style={{
            width: `${180 + i * 40}px`,
            height: `${180 + i * 40}px`,
            left: `${Math.random() * 80}%`,
            top: `${Math.random() * 80}%`,
            filter: "blur(3px)",
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}
          animate={intenseBubbleAnimation}
          transition={{
            ...dynamicTransition,
            delay: i * 1.5,
          }}
        />
      ))}

      {/* Medium bubbles with movement */}
      {[...Array(bubbleCount.medium)].map((_, i) => (
        <motion.div
          key={`global-medium-bubble-${i}`}
          className="absolute bg-gradient-radial from-[#70FF00]/45 to-[#BBFF00]/20 rounded-full"
          style={{
            width: `${100 + i * 20}px`,
            height: `${100 + i * 20}px`,
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 90}%`,
            filter: "blur(2px)",
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}
          animate={intenseBubbleAnimation}
          transition={{
            ...dynamicTransition,
            delay: i * 1,
          }}
        />
      ))}

      {/* Small floating bubbles */}
      {[...Array(bubbleCount.small)].map((_, i) => (
        <motion.div
          key={`global-small-bubble-${i}`}
          className="absolute bg-gradient-radial from-[#BBFF00]/50 to-[#70FF00]/25 rounded-full"
          style={{
            width: `${50 + i * 10}px`,
            height: `${50 + i * 10}px`,
            left: `${Math.random() * 95}%`,
            top: `${Math.random() * 95}%`,
            filter: "blur(1px)",
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}
          animate={intenseBubbleAnimation}
          transition={{
            ...dynamicTransition,
            delay: i * 0.8,
          }}
        />
      ))}

      {/* Micro bubbles for atmosphere */}
      {[...Array(bubbleCount.micro)].map((_, i) => (
        <motion.div
          key={`global-micro-bubble-${i}`}
          className="absolute bg-[#BBFF00]/70 rounded-full"
          style={{
            width: `${15 + i * 3}px`,
            height: `${15 + i * 3}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: "blur(0.5px)",
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}
          animate={microBubbleAnimation}
          transition={{
            duration: 8 + i * 0.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}

      {/* Strong atmospheric gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#BBFF00]/8 via-transparent to-[#70FF00]/8" />
      <div className="absolute inset-0 bg-gradient-radial from-[#BBFF00]/12 via-transparent to-[#70FF00]/12" />
      
      {/* Corner dramatic accents */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-radial from-[#BBFF00]/25 to-transparent rounded-full blur-2xl" />
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-gradient-radial from-[#70FF00]/20 to-transparent rounded-full blur-2xl" />
      <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-gradient-radial from-[#BBFF00]/30 to-transparent rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-gradient-radial from-[#70FF00]/25 to-transparent rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Additional floating atmosphere */}
      <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-radial from-[#BBFF00]/35 to-transparent rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }} />
    </div>
  )
} 