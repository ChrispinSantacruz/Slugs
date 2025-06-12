"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp } from "lucide-react"

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="relative">
            {/* Botón principal */}
            <div className="w-14 h-14 bg-gradient-to-r from-[#BBFF00] to-[#70FF00] rounded-full flex items-center justify-center text-black font-bold shadow-lg relative z-10">
              <ChevronUp className="w-6 h-6" />
            </div>

            {/* Efecto neon */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#BBFF00]/50 to-[#70FF00]/50 rounded-full blur-md group-hover:blur-lg transition-all duration-300 -z-10"></div>

            {/* Anillo exterior */}
            <div className="absolute inset-0 border-2 border-[#BBFF00]/60 rounded-full animate-spin-slow"></div>

            {/* Esquinas futuristas */}
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[#BBFF00]"></div>
            <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-[#BBFF00]"></div>
            <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-[#70FF00]"></div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[#70FF00]"></div>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
