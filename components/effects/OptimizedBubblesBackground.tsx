"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export function OptimizedBubblesBackground() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  // Burbujas mínimas y optimizadas
  const bubbles = [
    { id: 1, size: 120, x: 15, y: 20, delay: 0 },
    { id: 2, size: 80, x: 75, y: 40, delay: 1 },
    { id: 3, size: 60, x: 45, y: 70, delay: 2 },
    { id: 4, size: 90, x: 85, y: 15, delay: 3 },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] opacity-40">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute bg-gradient-radial from-[#BBFF00]/30 to-[#70FF00]/10 rounded-full blur-sm"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            willChange: "transform",
          }}
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: bubble.delay,
          }}
        />
      ))}
      
      {/* Gradiente atmosférico sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#BBFF00]/5 via-transparent to-[#70FF00]/5" />
    </div>
  )
} 