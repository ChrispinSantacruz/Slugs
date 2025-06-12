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

  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-40">
      {/* Burbujas grandes */}
      {[...Array(isMobile ? 3 : 6)].map((_, i) => (
        <motion.div
          key={`large-bubble-${i}`}
          className="absolute bg-gradient-radial from-[#BBFF00]/30 to-[#70FF00]/10 rounded-full"
          style={{
            width: `${120 + Math.random() * 80}px`,
            height: `${120 + Math.random() * 80}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: "blur(3px)",
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 40 - 20, 0],
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 12 + Math.random() * 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Burbujas medianas */}
      {[...Array(isMobile ? 5 : 10)].map((_, i) => (
        <motion.div
          key={`medium-bubble-${i}`}
          className="absolute bg-gradient-radial from-[#70FF00]/40 to-[#5ACC00]/15 rounded-full"
          style={{
            width: `${60 + Math.random() * 40}px`,
            height: `${60 + Math.random() * 40}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: "blur(2px)",
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}
          animate={{
            y: [0, -60, 0],
            x: [0, Math.random() * 20 - 10, 0],
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10 + Math.random() * 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Burbujas pequeñas */}
      {[...Array(isMobile ? 8 : 15)].map((_, i) => (
        <motion.div
          key={`small-bubble-${i}`}
          className="absolute bg-gradient-radial from-[#BBFF00]/50 to-[#70FF00]/20 rounded-full"
          style={{
            width: `${20 + Math.random() * 30}px`,
            height: `${20 + Math.random() * 30}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: "blur(1px)",
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}
          animate={{
            y: [0, -80, 0],
            x: [0, Math.random() * 15 - 7.5, 0],
            scale: [1, 1.4, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: Math.random() * 1.5,
          }}
        />
      ))}

      {/* Micro burbujas */}
      {[...Array(isMobile ? 10 : 20)].map((_, i) => (
        <motion.div
          key={`micro-bubble-${i}`}
          className="absolute bg-[#BBFF00]/60 rounded-full"
          style={{
            width: `${5 + Math.random() * 10}px`,
            height: `${5 + Math.random() * 10}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: "blur(0.5px)",
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 10 - 5, 0],
            scale: [1, 1.5, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 6 + Math.random() * 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: Math.random() * 1,
          }}
        />
      ))}

      {/* Gradiente de fondo sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#BBFF00]/5 via-transparent to-[#70FF00]/5" />
      <div className="absolute inset-0 bg-gradient-radial from-[#BBFF00]/10 via-transparent to-[#70FF00]/10" />
    </div>
  )
}
