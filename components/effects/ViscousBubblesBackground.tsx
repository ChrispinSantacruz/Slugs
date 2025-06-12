"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export function ViscousBubblesBackground() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Reduce animation complexity for better performance
  const simpleBubbleAnimation = {
    y: [0, -30, 0],
    scale: [1, 1.1, 1],
    opacity: [0.3, 0.6, 0.3],
  }

  const simpleTransition = {
    duration: 8,
    repeat: Number.POSITIVE_INFINITY,
    ease: "easeInOut",
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-30">
      {/* Reduced number of large bubbles */}
      {[...Array(isMobile ? 2 : 3)].map((_, i) => (
        <motion.div
          key={`large-bubble-${i}`}
          className="absolute bg-gradient-radial from-[#BBFF00]/20 to-[#70FF00]/5 rounded-full"
          style={{
            width: `${100 + i * 20}px`,
            height: `${100 + i * 20}px`,
            left: `${25 + i * 25}%`,
            top: `${20 + i * 30}%`,
            filter: "blur(2px)",
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}
          animate={simpleBubbleAnimation}
          transition={{
            ...simpleTransition,
            delay: i * 1,
          }}
        />
      ))}

      {/* Reduced number of medium bubbles */}
      {[...Array(isMobile ? 3 : 4)].map((_, i) => (
        <motion.div
          key={`medium-bubble-${i}`}
          className="absolute bg-gradient-radial from-[#70FF00]/25 to-[#5ACC00]/8 rounded-full"
          style={{
            width: `${60 + i * 10}px`,
            height: `${60 + i * 10}px`,
            left: `${15 + i * 20}%`,
            top: `${40 + i * 15}%`,
            filter: "blur(1px)",
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}
          animate={simpleBubbleAnimation}
          transition={{
            ...simpleTransition,
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Significantly reduced small bubbles */}
      {[...Array(isMobile ? 4 : 6)].map((_, i) => (
        <motion.div
          key={`small-bubble-${i}`}
          className="absolute bg-gradient-radial from-[#BBFF00]/30 to-[#70FF00]/10 rounded-full"
          style={{
            width: `${30 + i * 5}px`,
            height: `${30 + i * 5}px`,
            left: `${10 + i * 15}%`,
            top: `${60 + i * 10}%`,
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}
          animate={simpleBubbleAnimation}
          transition={{
            ...simpleTransition,
            delay: i * 0.3,
          }}
        />
      ))}

      {/* Simplified background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#BBFF00]/3 via-transparent to-[#70FF00]/3" />
    </div>
  )
}
