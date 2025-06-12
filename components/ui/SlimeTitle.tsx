"use client"
import type { ReactNode } from "react"

interface SlimeTitleProps {
  children: ReactNode
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
  animate?: boolean
}

export function SlimeTitle({ children, size = "lg", className = "", animate = true }: SlimeTitleProps) {
  const sizeClasses = {
    sm: "text-2xl md:text-3xl",
    md: "text-4xl md:text-5xl",
    lg: "text-5xl md:text-6xl",
    xl: "text-6xl md:text-8xl",
  }

  return (
    <div className="relative">
      <h1
        className={`neon-title font-bold ${sizeClasses[size]} ${className} bg-gradient-to-r from-[#BBFF00] to-[#70FF00] bg-clip-text text-transparent relative z-10`}
      >
        {children}
      </h1>
      {/* Simplified background effect - less resource intensive */}
      {animate && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#BBFF00]/10 via-[#70FF00]/15 to-[#BBFF00]/10 blur-lg -z-10"></div>
      )}
    </div>
  )
}
