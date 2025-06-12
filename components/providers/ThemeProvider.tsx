"use client"

import { OptimizedBubblesBackground } from "@/components/effects/OptimizedBubblesBackground"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Efectos de burbujas optimizados */}
      <OptimizedBubblesBackground />
      
      {/* Contenido principal */}
      {children}
    </>
  )
} 