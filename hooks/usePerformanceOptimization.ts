import { useState, useEffect } from 'react'

interface PerformanceSettings {
  reduceAnimations: boolean
  reducedMotion: boolean
  isMobile: boolean
  isLowPerformance: boolean
}

export function usePerformanceOptimization(): PerformanceSettings {
  const [settings, setSettings] = useState<PerformanceSettings>({
    reduceAnimations: false,
    reducedMotion: false,
    isMobile: false,
    isLowPerformance: false,
  })

  useEffect(() => {
    const checkPerformance = () => {
      // Check for reduced motion preference
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      // Check if mobile device
      const isMobile = window.innerWidth < 768

      // Simple performance test - measure time to paint
      const performanceStart = performance.now()
      
      // Create a simple test element to measure performance
      const testElement = document.createElement('div')
      testElement.style.transform = 'translateX(100px)'
      testElement.style.opacity = '0.5'
      document.body.appendChild(testElement)
      
      requestAnimationFrame(() => {
        const performanceEnd = performance.now()
        const renderTime = performanceEnd - performanceStart
        
        // Remove test element
        document.body.removeChild(testElement)
        
        // If render time is high or device has low memory, reduce effects
        const isLowPerformance = renderTime > 16 || // More than one frame
          (navigator as any).deviceMemory && (navigator as any).deviceMemory < 4 ||
          navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4

        setSettings({
          reduceAnimations: isLowPerformance || isMobile,
          reducedMotion,
          isMobile,
          isLowPerformance,
        })
      })
    }

    // Initial check
    checkPerformance()

    // Listen for window resize
    window.addEventListener('resize', checkPerformance)
    
    // Listen for reduced motion changes
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    mediaQuery.addEventListener('change', checkPerformance)

    return () => {
      window.removeEventListener('resize', checkPerformance)
      mediaQuery.removeEventListener('change', checkPerformance)
    }
  }, [])

  return settings
} 