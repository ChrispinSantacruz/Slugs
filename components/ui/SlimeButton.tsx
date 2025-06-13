"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { ReactNode } from "react"

interface SlimeButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: "primary" | "secondary"
  size?: "sm" | "md" | "lg"
  className?: string
  disabled?: boolean
}

export function SlimeButton({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
}: SlimeButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  const variantClasses = {
    primary: "neon-button-primary text-black font-black",
    secondary: "neon-button-secondary text-[#BBFF00] font-black",
  }

  return (
    <motion.div 
      whileHover={{ scale: disabled ? 1 : 1.02 }} 
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      transition={{ duration: 0.2 }}
      className="motion-element"
    >
      <div className="relative group">
        <Button
          onClick={onClick}
          disabled={disabled}
          className={`${variantClasses[variant]} ${sizeClasses[size]} ${className} font-bold transition-all duration-200 relative z-10 border-2`}
        >
          {children}
        </Button>
        {/* Esquinas futuristas optimizadas */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#BBFF00] -translate-x-1 -translate-y-1 group-hover:w-4 group-hover:h-4 transition-all duration-200"></div>
        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#BBFF00] translate-x-1 -translate-y-1 group-hover:w-4 group-hover:h-4 transition-all duration-200"></div>
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#70FF00] -translate-x-1 translate-y-1 group-hover:w-4 group-hover:h-4 transition-all duration-200"></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#70FF00] translate-x-1 translate-y-1 group-hover:w-4 group-hover:h-4 transition-all duration-200"></div>
      </div>
    </motion.div>
  )
}
