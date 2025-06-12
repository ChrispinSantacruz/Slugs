"use client"

import { motion } from "framer-motion"
import { useSlimeAnimations } from "@/hooks/useSlimeAnimations"
import { useMousePosition } from "@/hooks/useMousePosition"
import { generateSlimeBlobs, generateSlimeParticles } from "@/utils/slimeEffects"

export function SlimeBackground() {
  const { backgroundY, backgroundOpacity } = useSlimeAnimations()
  const mousePosition = useMousePosition()

  const slimeBlobs = generateSlimeBlobs(6)
  const slimeParticles = generateSlimeParticles(15)

  return (
    <motion.div
      className="fixed inset-0 opacity-30 pointer-events-none"
      style={{ y: backgroundY, opacity: backgroundOpacity }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#BBFF00]/20 via-transparent to-[#70FF00]/20" />

      {/* Large Slime Blobs */}
      {slimeBlobs.map((blob) => (
        <div
          key={blob.id}
          className="slime-blob absolute"
          style={{
            width: `${blob.size}px`,
            height: `${blob.size * 0.7}px`,
            left: `${blob.left}%`,
            top: `${blob.top}%`,
            animationDuration: `${blob.duration}s`,
            animationDelay: `${blob.delay}s`,
          }}
        />
      ))}

      {/* Floating Slime Particles */}
      {slimeParticles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-[#BBFF00] rounded-full blur-sm"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -particle.moveY, 0],
            x: [0, particle.moveX, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Mouse-following slime trail */}
      <motion.div
        className="absolute w-4 h-4 bg-[#BBFF00]/40 rounded-full blur-md"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />
    </motion.div>
  )
}
