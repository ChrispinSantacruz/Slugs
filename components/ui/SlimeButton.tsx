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
    <motion.div whileHover={{ scale: disabled ? 1 : 1.05 }} whileTap={{ scale: disabled ? 1 : 0.95 }}>
      <div className="relative group">
        <Button
          onClick={onClick}
          disabled={disabled}
          className={`${variantClasses[variant]} ${sizeClasses[size]} ${className} font-bold transition-all duration-300 relative z-10 border-2`}
        >
          {children}
        </Button>
        {/* Efecto neon del botón */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#BBFF00]/30 to-[#70FF00]/30 blur-md group-hover:blur-lg transition-all duration-300 -z-10"></div>
        {/* Esquinas futuristas */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#BBFF00] -translate-x-1 -translate-y-1"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#BBFF00] translate-x-1 -translate-y-1"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#70FF00] -translate-x-1 translate-y-1"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#70FF00] translate-x-1 translate-y-1"></div>
      </div>
    </motion.div>
  )
}
