"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15 + 10

        if (newProgress >= 100) {
          clearInterval(interval)
          setTimeout(() => onLoadingComplete(), 200)
          return 100
        }
        return newProgress
      })
    }, 120)

    return () => clearInterval(interval)
  }, [onLoadingComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* SlugDudes Title */}
      <div className="mb-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#BBFF00] to-[#70FF00] bg-clip-text text-transparent">
          SlugDudes
        </h1>
      </div>

      {/* Video centered and half size */}
      <video
        className="w-1/2 h-1/2 object-contain mb-8"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/animations/loading2.mp4" type="video/mp4" />
      </video>

      {/* Loading progress bar */}
      <div className="w-96 max-w-sm mx-auto px-4">
        <div className="w-full bg-gray-800/50 rounded-full h-3 border border-[#BBFF00]/30">
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
    </motion.div>
  )
} 