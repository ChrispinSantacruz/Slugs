"use client"

import { motion } from "framer-motion"
import { Eye, EyeOff } from "lucide-react"
import { useTheme } from "@/components/providers/ThemeProvider"

export function EffectsToggle() {
  const { effectsEnabled, toggleEffects } = useTheme()

  return (
    <motion.button
      onClick={toggleEffects}
      className="fixed bottom-4 left-4 z-50 w-12 h-12 bg-black/80 border border-[#BBFF00]/50 rounded-full flex items-center justify-center text-[#BBFF00] hover:bg-[#BBFF00]/10 transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      title={effectsEnabled ? "Disable Effects" : "Enable Effects"}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
    >
      {effectsEnabled ? (
        <Eye className="w-5 h-5" />
      ) : (
        <EyeOff className="w-5 h-5" />
      )}
    </motion.button>
  )
} 