"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import dynamic from "next/dynamic"

// Lazy load the global background effect
const GlobalViscousBubblesBackground = dynamic(
  () => import("@/components/effects/GlobalViscousBubblesBackground").then((mod) => ({ 
    default: mod.GlobalViscousBubblesBackground 
  })),
  { 
    ssr: false, 
    loading: () => null 
  }
)

interface ThemeContextType {
  effectsEnabled: boolean
  toggleEffects: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

interface ThemeProviderProps {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [effectsEnabled, setEffectsEnabled] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) {
      setEffectsEnabled(false)
    }
  }, [])

  const toggleEffects = () => {
    setEffectsEnabled(prev => !prev)
  }

  const value = {
    effectsEnabled,
    toggleEffects,
  }

  return (
    <ThemeContext.Provider value={value}>
      {/* Always render the container to prevent layout shift, but conditionally show content */}
      <div className="fixed inset-0 pointer-events-none z-[1]">
        {mounted && effectsEnabled && <GlobalViscousBubblesBackground />}
      </div>
      {children}
    </ThemeContext.Provider>
  )
} 