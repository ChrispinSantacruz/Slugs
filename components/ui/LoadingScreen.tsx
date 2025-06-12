"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import dynamic from "next/dynamic"

const DestroyedCityBackground = dynamic(
  () => import("@/components/effects/DestroyedCityBackground").then((mod) => ({ 
    default: mod.DestroyedCityBackground 
  })),
  { ssr: false }
)

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState("Initializing Slime...")

  useEffect(() => {
    const texts = [
      "Initializing Slime...",
      "Loading Viscous Universe...",
      "Awakening SlugDudes...",
      "Ready!"
    ]

    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 20 + 10
        
        // Update loading text based on progress
        if (newProgress >= 85) setLoadingText(texts[3])
        else if (newProgress >= 60) setLoadingText(texts[2])
        else if (newProgress >= 30) setLoadingText(texts[1])
        else setLoadingText(texts[0])

        if (newProgress >= 100) {
          clearInterval(interval)
          setTimeout(() => onLoadingComplete(), 200)
          return 100
        }
        return newProgress
      })
    }, 150)

    return () => clearInterval(interval)
  }, [onLoadingComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* City background */}
      <div className="absolute inset-0">
        <DestroyedCityBackground />
      </div>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Loading content */}
      <div className="relative z-20 text-center max-w-md mx-auto px-4">
        {/* SlugDudes logo/title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-[#BBFF00] to-[#70FF00] bg-clip-text text-transparent mb-4">
            SlugDudes
          </h1>
          <p className="text-[#BBFF00] text-lg md:text-xl lg:text-2xl font-bold">
            Immortal Mutant Slug Colony
          </p>
        </motion.div>

        {/* Loading progress */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-80 max-w-sm mx-auto"
        >
          {/* Progress bar */}
          <div className="mb-6">
            <div className="w-full bg-gray-800 rounded-full h-2 border border-[#BBFF00]/30">
              <motion.div
                className="h-full bg-gradient-to-r from-[#BBFF00] to-[#70FF00] rounded-full relative overflow-hidden"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              >
                {/* Progress bar glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
              </motion.div>
            </div>
          </div>

          {/* Loading text */}
          <motion.p
            key={loadingText}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-[#BBFF00] font-semibold"
          >
            {loadingText}
          </motion.p>

          {/* Progress percentage */}
          <p className="text-gray-400 text-sm mt-2">
            {Math.round(progress)}%
          </p>
        </motion.div>

        {/* Animated slime blob */}
        <motion.div
          className="mt-8"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-16 h-16 mx-auto bg-gradient-radial from-[#BBFF00]/60 to-[#70FF00]/30 rounded-full blur-sm" />
        </motion.div>
      </div>
    </motion.div>
  )
} 