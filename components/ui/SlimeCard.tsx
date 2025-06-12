"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import type { ReactNode } from "react"

interface SlimeCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  delay?: number
}

export function SlimeCard({ children, className = "", hover = true, delay = 0 }: SlimeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8 }}
      viewport={{ once: true }}
      whileHover={hover ? { scale: 1.02 } : undefined}
      className="relative group"
    >
      <Card className={`neon-card ${className} relative z-10`}>
        <CardContent className="p-6">{children}</CardContent>
      </Card>

      {/* Marco neon exterior */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#BBFF00]/20 via-[#70FF00]/30 to-[#BBFF00]/20 blur-sm group-hover:blur-md transition-all duration-300 -z-10"></div>

      {/* Esquinas futuristas */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#BBFF00] -translate-x-2 -translate-y-2 group-hover:w-8 group-hover:h-8 transition-all duration-300"></div>
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#BBFF00] translate-x-2 -translate-y-2 group-hover:w-8 group-hover:h-8 transition-all duration-300"></div>
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#70FF00] -translate-x-2 translate-y-2 group-hover:w-8 group-hover:h-8 transition-all duration-300"></div>
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#70FF00] translate-x-2 translate-y-2 group-hover:w-8 group-hover:h-8 transition-all duration-300"></div>

      {/* Líneas de conexión */}
      <div className="absolute top-0 left-1/2 w-px h-4 bg-[#BBFF00] -translate-x-1/2 -translate-y-4 opacity-60"></div>
      <div className="absolute bottom-0 left-1/2 w-px h-4 bg-[#70FF00] -translate-x-1/2 translate-y-4 opacity-60"></div>
    </motion.div>
  )
}
