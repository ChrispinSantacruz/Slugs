"use client"

import { OptimizedBubblesBackground } from "@/components/effects/OptimizedBubblesBackground"
import { GlobalPageBackground } from "@/components/effects/GlobalPageBackground"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Fondo global de toda la página - Background2 */}
      <GlobalPageBackground />
      
      {/* Efectos de burbujas optimizados */}
      <OptimizedBubblesBackground />
      
      {/* Contenido principal */}
      {children}
    </>
  )
} 