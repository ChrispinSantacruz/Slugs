"use client"

import { motion } from "framer-motion"
import { useEffect } from "react"

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  useEffect(() => {
    // Set timeout to 3 seconds
    const timer = setTimeout(() => {
      onLoadingComplete()
    }, 3000)

    return () => clearTimeout(timer)
  }, [onLoadingComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Video covering full screen */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/animations/loading2.mp4" type="video/mp4" />
      </video>
    </motion.div>
  )
} 