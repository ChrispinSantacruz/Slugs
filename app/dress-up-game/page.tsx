"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Download, Share2, Shuffle, RotateCcw } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import html2canvas from "html2canvas"

interface SlugCustomization {
  baseSkin: string
  eyes: string
  mouth: string
  hat: string
  coat: string
}

// 🎨 CONFIGURACIÓN ACTUALIZADA CON NUEVOS ASSETS
const customizationOptions = {
  // 1. SKIN BASE - NUEVAS SKINS
  baseSkin: [
    { id: "skin-01", name: "Classic Skin", src: "/images/Game/GAME avatars (2)/slugs_base_skin/slugs_skins-01.png" },
    { id: "skin-02", name: "Premium Skin", src: "/images/Game/GAME avatars (2)/slugs_base_skin/slugs_skins-02.png" },
    { id: "skin-03", name: "Elite Skin", src: "/images/Game/GAME avatars (2)/slugs_base_skin/slugs_skins-03.png" },
    { id: "skin-04", name: "Legendary Skin", src: "/images/Game/GAME avatars (2)/slugs_base_skin/slugs_skins-04.png" },
    { id: "skin-05", name: "Epic Skin", src: "/images/Game/GAME avatars (2)/slugs_base_skin/slugs_skins-05.png" },
    { id: "skin-06", name: "Mythic Skin", src: "/images/Game/GAME avatars (2)/slugs_base_skin/slugs_skins-06.png" },
  ],
  
  // 2. EYES - NUEVOS OJOS
  eyes: [
    { id: "eyes-03", name: "Expressive Eyes", src: "/images/Game/GAME avatars (2)/eyes/slugs_eyes-03.png" },
    { id: "eyes-04", name: "Minimalist Eyes", src: "/images/Game/GAME avatars (2)/eyes/slugs_eyes-04.png" },
    { id: "eyes-05", name: "Bright Eyes", src: "/images/Game/GAME avatars (2)/eyes/slugs_eyes-05.png" },
    { id: "eyes-06", name: "Elegant Eyes", src: "/images/Game/GAME avatars (2)/eyes/slugs_eyes-06.png" },
    { id: "eyes-07", name: "Serious Eyes", src: "/images/Game/GAME avatars (2)/eyes/slugs_eyes-07.png" },
    { id: "eyes-08", name: "Intense Eyes", src: "/images/Game/GAME avatars (2)/eyes/slugs_eyes-08.png" },
    { id: "eyes-09", name: "Mysterious Eyes", src: "/images/Game/GAME avatars (2)/eyes/slugs_eyes-09.png" },
    { id: "eyes-10", name: "Unique Eyes", src: "/images/Game/GAME avatars (2)/eyes/slugs_eyes-10.png" },
  ],
  
  // 3. MOUTH - NUEVAS BOCAS
  mouth: [
    { id: "mouth-03", name: "Subtle Smile", src: "/images/Game/GAME avatars (2)/mouth/slugs_mouth-03.png" },
    { id: "mouth-04", name: "Neutral Expression", src: "/images/Game/GAME avatars (2)/mouth/slugs_mouth-04.png" },
    { id: "mouth-05", name: "Wide Smile", src: "/images/Game/GAME avatars (2)/mouth/slugs_mouth-05.png" },
    { id: "mouth-06", name: "Cool Expression", src: "/images/Game/GAME avatars (2)/mouth/slugs_mouth-06.png" },
    { id: "mouth-07", name: "Mischievous Smile", src: "/images/Game/GAME avatars (2)/mouth/slugs_mouth-07.png" },
    { id: "mouth-08", name: "Surprised Expression", src: "/images/Game/GAME avatars (2)/mouth/slugs_mouth-08.png" },
    { id: "mouth-09", name: "Discreet Smile", src: "/images/Game/GAME avatars (2)/mouth/slugs_mouth-09.png" },
    { id: "mouth-10", name: "Epic Expression", src: "/images/Game/GAME avatars (2)/mouth/slugs_mouth-10.png" },
  ],
  
  // 4. COATS - NUEVOS VESTIDOS
  coat: [
    { id: "dress-03", name: "Vestido Elegante", src: "/images/Game/GAME avatars (2)/dress/dress/slugs_dress-03.png" },
    { id: "dress-04", name: "Vestido Casual", src: "/images/Game/GAME avatars (2)/dress/dress/slugs_dress-04.png" },
    { id: "dress-05", name: "Vestido Premium", src: "/images/Game/GAME avatars (2)/dress/dress/slugs_dress-05.png" },
    { id: "dress-06", name: "Vestido Moderno", src: "/images/Game/GAME avatars (2)/dress/dress/slugs_dress-06.png" },
    { id: "dress-07", name: "Vestido Exclusivo", src: "/images/Game/GAME avatars (2)/dress/dress/slugs_dress-07.png" },
    { id: "dress-08", name: "Vestido Sofisticado", src: "/images/Game/GAME avatars (2)/dress/dress/slugs_dress-08.png" },
    { id: "dress-09", name: "Vestido Minimalista", src: "/images/Game/GAME avatars (2)/dress/dress/slugs_dress-09.png" },
    { id: "dress-10", name: "Vestido de Gala", src: "/images/Game/GAME avatars (2)/dress/dress/slugs_dress-10.png" },
    { id: "dress-11", name: "Vestido Épico", src: "/images/Game/GAME avatars (2)/dress/dress/slugs_dress-11.png" },
    { id: "dress-12", name: "Vestido Legendario", src: "/images/Game/GAME avatars (2)/dress/dress/slugs_dress-12.png" },
    { id: "dress-13", name: "Vestido Mítico", src: "/images/Game/GAME avatars (2)/dress/dress/slugs_dress-13.png" },
  ],

  // 5. HATS - NUEVOS SOMBREROS (MÁS VARIEDAD)
  hat: [
    { id: "hat-03", name: "Gorra Básica", src: "/images/Game/GAME avatars (2)/caps/slugs_hats-03.png" },
    { id: "hat-04", name: "Sombrero Sport", src: "/images/Game/GAME avatars (2)/caps/slugs_hats-04.png" },
    { id: "hat-05", name: "Gorra Premium", src: "/images/Game/GAME avatars (2)/caps/slugs_hats-05.png" },
    { id: "hat-06", name: "Sombrero Elegante", src: "/images/Game/GAME avatars (2)/caps/slugs_hats-06.png" },
    { id: "hat-07", name: "Gorra Retro", src: "/images/Game/GAME avatars (2)/caps/slugs_hats-07.png" },
    { id: "hat-08", name: "Sombrero Moderno", src: "/images/Game/GAME avatars (2)/caps/slugs_hats-08.png" },
    { id: "hat-09", name: "Gorra Minimalista", src: "/images/Game/GAME avatars (2)/caps/slugs_hats-09.png" },
    { id: "hat-10", name: "Sombrero Clásico", src: "/images/Game/GAME avatars (2)/caps/slugs_hats-10.png" },
    { id: "hat-11", name: "Gorra Única", src: "/images/Game/GAME avatars (2)/caps/slugs_hats-11.png" },
    { id: "hat-12", name: "Sombrero Épico", src: "/images/Game/GAME avatars (2)/caps/slugs_hats-12.png" },
    { id: "hat-13", name: "Gorra Legendaria", src: "/images/Game/GAME avatars (2)/caps/slugs_hats-13.png" },
    { id: "hat-14", name: "Sombrero Cyber", src: "/images/Game/GAME avatars (2)/caps/slugs_hats-14.png" },
    { id: "hat-15", name: "Gorra Futurista", src: "/images/Game/GAME avatars (2)/caps/slugs_hats-15.png" },
    { id: "hat-16", name: "Sombrero Espacial", src: "/images/Game/GAME avatars (2)/caps/slugs_hats-16.png" },
    { id: "hat-17", name: "Gorra Mítica", src: "/images/Game/GAME avatars (2)/caps/slugs_hats-17.png" },
  ],

}

export default function DressUpGame() {
  const [slug, setSlug] = useState<SlugCustomization>({
    baseSkin: "skin-01",
    eyes: "",
    mouth: "",
    hat: "",
    coat: "",
  })

  const [activeCategory, setActiveCategory] = useState<keyof SlugCustomization>("baseSkin")
  const slugContainerRef = useRef<HTMLDivElement>(null)

  const updateSlug = (category: keyof SlugCustomization, value: string) => {
    setSlug((prev) => ({
      ...prev,
      [category]: prev[category] === value ? "" : value,
    }))
  }

  const randomizeSlug = () => {
    const newSlug: SlugCustomization = {} as SlugCustomization
    
    // Siempre seleccionar una skin base
    newSlug.baseSkin = customizationOptions.baseSkin[Math.floor(Math.random() * customizationOptions.baseSkin.length)].id
    
    // Para mouth, hat, coat y eyes, usar las nuevas opciones de imagen
    newSlug.mouth = Math.random() > 0.3 ? customizationOptions.mouth[Math.floor(Math.random() * customizationOptions.mouth.length)].id : ""
    newSlug.hat = Math.random() > 0.3 ? customizationOptions.hat[Math.floor(Math.random() * customizationOptions.hat.length)].id : ""
    newSlug.coat = Math.random() > 0.3 ? customizationOptions.coat[Math.floor(Math.random() * customizationOptions.coat.length)].id : ""
    newSlug.eyes = Math.random() > 0.3 ? customizationOptions.eyes[Math.floor(Math.random() * customizationOptions.eyes.length)].id : ""
    
    setSlug(newSlug)
  }

  const resetSlug = () => {
    setSlug({
      baseSkin: "skin-01",
      eyes: "",
      mouth: "",
      hat: "",
      coat: "",
    })
  }

  // Función para obtener la imagen de la skin base seleccionada
  const getBaseSkinImage = () => {
    const baseSkin = customizationOptions.baseSkin.find(skin => skin.id === slug.baseSkin)
    return baseSkin?.src || customizationOptions.baseSkin[0].src
  }

  // Función para obtener la imagen de la boca seleccionada
  const getMouthImage = () => {
    if (!slug.mouth) return null
    const mouth = customizationOptions.mouth.find(m => m.id === slug.mouth)
    return mouth?.src || null
  }

  // Función para obtener la imagen del gorro seleccionado
  const getHatImage = () => {
    if (!slug.hat) return null
    const hat = customizationOptions.hat.find(h => h.id === slug.hat)
    return hat?.src || null
  }

  // Función para obtener la imagen del abrigo seleccionado
  const getCoatImage = () => {
    if (!slug.coat) return null
    const coat = customizationOptions.coat.find(c => c.id === slug.coat)
    return coat?.src || null
  }

  // Función para obtener la imagen de los ojos seleccionados
  const getEyesImage = () => {
    if (!slug.eyes) return null
    const eyes = customizationOptions.eyes.find(e => e.id === slug.eyes)
    return eyes?.src || null
  }

  // 🎨 FUNCIÓN ULTRA-ROBUSTA PARA CAPTURAR SLUG EN MÓVILES Y DESKTOP
  const saveSlugAsImage = async () => {
    if (!slugContainerRef.current) return

    try {
      // 📱 Detectar dispositivo y obtener dimensiones de pantalla
      const isMobile = window.innerWidth < 768
      const screenWidth = window.innerWidth
      const screenHeight = window.innerHeight
      
      // 🎯 Usar método optimizado basado en el dispositivo
      if (isMobile && screenWidth < 500) {
        // Para móviles muy pequeños, usar método Canvas directo
        await saveMobileOptimized()
      } else {
        // Para desktop y tablets, usar método estándar mejorado
        await saveStandardMethod()
      }

    } catch (error) {
      console.error('❌ Error guardando SlugDude:', error)
      alert('Hubo un error al guardar la imagen. Por favor, inténtalo de nuevo.')
    }
  }

  // 📱 MÉTODO OPTIMIZADO PARA MÓVILES PEQUEÑOS
  const saveMobileOptimized = async () => {
    // Crear canvas directamente sin usar html2canvas
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    if (!ctx) throw new Error('No se pudo crear contexto de canvas')
    
    // 🚀 ALTA CALIDAD para móviles pequeños (>1500p)
    canvas.width = 1750  // 5x más grande = 1750px width
    canvas.height = 2000 // 5x más grande = 2000px height
    
    // Función auxiliar para cargar imágenes
    const loadImage = (src: string): Promise<HTMLImageElement> => {
      return new Promise((resolve, reject) => {
        const img = new (window as any).Image() as HTMLImageElement
        img.crossOrigin = 'anonymous'
        img.onload = () => resolve(img)
        img.onerror = reject
        img.src = src
      })
    }
    
    try {
      // Cargar imagen base - ESCALA 5X
      const baseImg = await loadImage(getBaseSkinImage())
      ctx.drawImage(baseImg, 437.5, 0, 875, 2000) // 5X escalado, centrado (87.5 * 5 = 437.5)
      
      // Cargar y dibujar coat si existe - ESCALA 5X
      if (slug.coat && getCoatImage()) {
        const coatImg = await loadImage(getCoatImage()!)
        ctx.drawImage(coatImg, 217, 600, 1312.5, 1225) // 5X escalado, posición bajada (30% = 600px)
      }
      
      // Cargar y dibujar mouth si existe - ESCALA 5X
      if (slug.mouth && getMouthImage()) {
        const mouthImg = await loadImage(getMouthImage()!)
        ctx.drawImage(mouthImg, 577.5, 180, 612.5, 700) // 5X escalado, posición bajada (9% = 180px)
      }
      
      // Cargar y dibujar eyes si existe - ESCALA 5X
      if (slug.eyes && getEyesImage()) {
        const eyesImg = await loadImage(getEyesImage()!)
        ctx.drawImage(eyesImg, 560, 120, 630, 720) // 5X escalado, posición bajada (6% = 120px)
      }
      
      // Cargar y dibujar hat si existe (último para que esté encima) - ESCALA 5X
      if (slug.hat && getHatImage()) {
        const hatImg = await loadImage(getHatImage()!)
        ctx.drawImage(hatImg, 525, 60, 700, 800) // 5X escalado, posición bajada (3% = 60px)
      }
      
      // Descargar imagen
      const link = document.createElement('a')
      link.download = `mi-slugdude-mobile-${Date.now()}.png`
      link.href = canvas.toDataURL('image/png', 1.0)
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      console.log('✅ SlugDude guardado exitosamente (método móvil optimizado)!')
      
    } catch (error) {
      console.error('Error en método móvil, intentando método estándar...', error)
      await saveStandardMethod()
    }
  }

  // 🖥️ MÉTODO ESTÁNDAR MEJORADO PARA DESKTOP Y TABLETS
  const saveStandardMethod = async () => {
    // 🎯 Crear un contenedor temporal para la captura
    const captureContainer = document.createElement('div')
    captureContainer.style.position = 'fixed'
    captureContainer.style.top = '-9999px'
    captureContainer.style.left = '-9999px'
    captureContainer.style.width = '350px'
    captureContainer.style.height = '400px'
    captureContainer.style.background = 'transparent'
    captureContainer.style.zIndex = '-1'
    captureContainer.style.overflow = 'visible'
    
    // 📦 Clonar solo la estructura necesaria del slug
    const baseSlugImg = slugContainerRef.current?.querySelector('img[alt="Base Slug"]') as HTMLImageElement
    
    if (baseSlugImg) {
      // Crear base slug - Más ancho para desktop
      const baseDiv = document.createElement('div')
      baseDiv.style.position = 'absolute'
      baseDiv.style.width = '297.5px'    // 85% de 350px (más ancho para desktop)
      baseDiv.style.height = '400px'
      baseDiv.style.left = '50%'
      baseDiv.style.top = '0'
      baseDiv.style.transform = 'translateX(-50%)'
      baseDiv.style.display = 'flex'
      baseDiv.style.alignItems = 'center'
      baseDiv.style.justifyContent = 'center'
      
      const baseImg = document.createElement('img')
      baseImg.src = baseSlugImg.src
      baseImg.style.width = '85%'        // 🖥️ Más ancho para desktop
      baseImg.style.height = '100%'
      baseImg.style.objectFit = 'contain'
      baseImg.crossOrigin = 'anonymous'
      baseDiv.appendChild(baseImg)
      captureContainer.appendChild(baseDiv)
      
      // 👔 Agregar coat si existe
      if (slug.coat && getCoatImage()) {
        const coatDiv = document.createElement('div')
        coatDiv.style.position = 'absolute'
        coatDiv.style.width = '262.5px'    // 75% de 350px
        coatDiv.style.height = '245px'     // 70% de 350px
        coatDiv.style.left = '43.4px'      // 12.4% de 350px
        coatDiv.style.top = '112px'        // 28% de 400px (más abajo para desktop)
        
        const coatImg = document.createElement('img')
        coatImg.src = getCoatImage()!
        coatImg.style.width = '100%'
        coatImg.style.height = '100%'
        coatImg.style.objectFit = 'contain'
        coatImg.crossOrigin = 'anonymous'
        coatDiv.appendChild(coatImg)
        captureContainer.appendChild(coatDiv)
      }
      
      // 👄 Agregar mouth si existe
      if (slug.mouth && getMouthImage()) {
        const mouthDiv = document.createElement('div')
        mouthDiv.style.position = 'absolute'
        mouthDiv.style.width = '122.5px'   // 35% de 350px
        mouthDiv.style.height = '140px'    // 35% de 400px
        mouthDiv.style.left = '115.5px'    // 33% de 350px
        mouthDiv.style.top = '18px'        // 4.5% de 400px (un pelin más arriba)
        
        const mouthImg = document.createElement('img')
        mouthImg.src = getMouthImage()!
        mouthImg.style.width = '100%'
        mouthImg.style.height = '100%'
        mouthImg.style.objectFit = 'contain'
        mouthImg.crossOrigin = 'anonymous'
        mouthDiv.appendChild(mouthImg)
        captureContainer.appendChild(mouthDiv)
      }
      
      // 👀 Agregar eyes si existe
      if (slug.eyes && getEyesImage()) {
        const eyesDiv = document.createElement('div')
        eyesDiv.style.position = 'absolute'
        eyesDiv.style.width = '126px'      // 36% de 350px
        eyesDiv.style.height = '144px'     // 36% de 400px
        eyesDiv.style.left = '112px'       // 32% de 350px
        eyesDiv.style.top = '8px'          // 2% de 400px (un pelin más arriba)
        
        const eyesImg = document.createElement('img')
        eyesImg.src = getEyesImage()!
        eyesImg.style.width = '100%'
        eyesImg.style.height = '100%'
        eyesImg.style.objectFit = 'contain'
        eyesImg.crossOrigin = 'anonymous'
        eyesDiv.appendChild(eyesImg)
        captureContainer.appendChild(eyesDiv)
      }
      
      // 🎩 Agregar hat si existe
      if (slug.hat && getHatImage()) {
        const hatDiv = document.createElement('div')
        hatDiv.style.position = 'absolute'
        hatDiv.style.width = '140px'       // 40% de 350px
        hatDiv.style.height = '160px'      // 40% de 400px
        hatDiv.style.left = '105px'        // 30% de 350px
        hatDiv.style.top = '-4px'          // -1% de 400px (un pelin más arriba)
        hatDiv.style.zIndex = '10'         // Hat encima de todo
        
        const hatImg = document.createElement('img')
        hatImg.src = getHatImage()!
        hatImg.style.width = '100%'
        hatImg.style.height = '100%'
        hatImg.style.objectFit = 'contain'
        hatImg.crossOrigin = 'anonymous'
        hatDiv.appendChild(hatImg)
        captureContainer.appendChild(hatDiv)
      }
    }
    
    // 📎 Agregar al DOM temporalmente
    document.body.appendChild(captureContainer)
    
    // ⏰ Esperar a que las imágenes se carguen
    await new Promise(resolve => setTimeout(resolve, 500))
    
    // 📸 Capturar con configuración de SÚPER ALTA CALIDAD (>1000p)
    const canvas = await html2canvas(captureContainer, {
      backgroundColor: null,
      useCORS: true,
      allowTaint: false,
      scale: 6, // 🚀 SÚPER ALTA resolución: 350x6 = 2100px width
      width: 350,
      height: 400,
      logging: false,
      x: 0,
      y: 0,
      scrollX: 0,
      scrollY: 0,
      foreignObjectRendering: false,
      imageTimeout: 45000, // Más tiempo para procesar alta calidad
      removeContainer: false,
      onclone: (clonedDoc) => {
        // Asegurar que el contenedor clonado tenga los estilos correctos
        const clonedContainer = clonedDoc.body.lastChild as HTMLElement
        if (clonedContainer) {
          clonedContainer.style.position = 'relative'
          clonedContainer.style.top = '0'
          clonedContainer.style.left = '0'
          clonedContainer.style.zIndex = '1'
        }
      }
    })
    
    // 🧹 Limpiar el contenedor temporal
    document.body.removeChild(captureContainer)
    
    // 📁 Crear y descargar el archivo PNG
    const link = document.createElement('a')
    link.download = `mi-slugdude-${Date.now()}.png`
    link.href = canvas.toDataURL('image/png', 1.0)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    console.log('✅ SlugDude guardado exitosamente (método estándar)!')
  }

  // 🔧 FUNCIÓN ALTERNATIVA ESPECÍFICA PARA MÓVILES USANDO CANVAS DIRECTO
  const saveSlugAsMobileImage = async () => {
    try {
      // Crear canvas directamente
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      if (!ctx) throw new Error('No se pudo crear contexto de canvas')
      
      // 🚀 MÁXIMA CALIDAD para móviles (>2000p)
      canvas.width = 2100  // 6x más grande = 2100px width
      canvas.height = 2400 // 6x más grande = 2400px height
      
      // Función auxiliar para cargar imágenes
      const loadImage = (src: string): Promise<HTMLImageElement> => {
        return new Promise((resolve, reject) => {
          const img = new (window as any).Image() as HTMLImageElement
          img.crossOrigin = 'anonymous'
          img.onload = () => resolve(img)
          img.onerror = () => {
            console.warn(`Error cargando imagen: ${src}`)
            reject(new Error(`No se pudo cargar: ${src}`))
          }
          img.src = src
        })
      }
      
      // Limpiar canvas con fondo transparente
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Dibujar imagen base (siempre presente) - ESCALA 6X
      try {
        const baseImg = await loadImage(getBaseSkinImage())
        // Centrar y redimensionar base slug - 6X más grande
        const baseWidth = 1785  // 85% de 2100 (más ancho como en desktop)
        const baseHeight = 2400
        const baseX = (2100 - baseWidth) / 2
        ctx.drawImage(baseImg, baseX, 0, baseWidth, baseHeight)
      } catch (error) {
        console.error('Error cargando imagen base:', error)
        throw error
      }
      
      // Dibujar coat si existe - ESCALA 6X
      if (slug.coat && getCoatImage()) {
        try {
          const coatImg = await loadImage(getCoatImage()!)
          ctx.drawImage(coatImg, 260.4, 720, 1575, 1470) // 6X escalado, posición bajada
        } catch (error) {
          console.warn('Error cargando coat:', error)
        }
      }
      
      // Dibujar mouth si existe - ESCALA 6X  
      if (slug.mouth && getMouthImage()) {
        try {
          const mouthImg = await loadImage(getMouthImage()!)
          ctx.drawImage(mouthImg, 693, 216, 735, 840) // 6X escalado, posición bajada (9% = 216px)
        } catch (error) {
          console.warn('Error cargando mouth:', error)
        }
      }
      
      // Dibujar eyes si existe - ESCALA 6X
      if (slug.eyes && getEyesImage()) {
        try {
          const eyesImg = await loadImage(getEyesImage()!)
          ctx.drawImage(eyesImg, 672, 144, 756, 864) // 6X escalado, posición bajada (6% = 144px)
        } catch (error) {
          console.warn('Error cargando eyes:', error)
        }
      }
      
      // Dibujar hat si existe (último para que esté encima) - ESCALA 6X
      if (slug.hat && getHatImage()) {
        try {
          const hatImg = await loadImage(getHatImage()!)
          ctx.drawImage(hatImg, 630, 72, 840, 960) // 6X escalado, posición bajada (3% = 72px)
        } catch (error) {
          console.warn('Error cargando hat:', error)
        }
      }
      
      // Convertir a blob para mejor calidad
      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob)
          const link = document.createElement('a')
          link.download = `mi-slugdude-mobile-${Date.now()}.png`
          link.href = url
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
          URL.revokeObjectURL(url)
          console.log('✅ SlugDude guardado exitosamente (Canvas móvil)!')
        }
      }, 'image/png', 1.0)
      
    } catch (error) {
      console.error('❌ Error en método Canvas móvil:', error)
      alert('Error al guardar la imagen. Intentando método alternativo...')
      
             // Fallback al método original con html2canvas
       try {
         await saveStandardMethod()
       } catch (fallbackError) {
         console.error('❌ Todos los métodos fallaron:', fallbackError)
         alert('No se pudo guardar la imagen. Por favor, inténtalo de nuevo.')
       }
    }
  }

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* 🎨 BACKGROUND PRINCIPAL - IMAGEN DE LABORATORIO */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url('/images/backgrounds/background.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.35, // 🎯 OPACIDAD AUMENTADA PARA MAYOR VISIBILIDAD
        }}
      />
      
      {/* 🌟 OVERLAY DE PROFUNDIDAD - GRADIENTE OSCURO REDUCIDO */}
      <div className="fixed inset-0 z-1 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
      
      {/* ✨ EFECTOS ADICIONALES DE PARTÍCULAS */}
      <div className="fixed inset-0 z-2 opacity-8">
        <div className="absolute inset-0 bg-gradient-to-br from-[#BBFF00]/10 via-transparent to-[#70FF00]/10" />
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#BBFF00]/30 rounded-full blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.1, 0.4, 0.1],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="relative z-20">
        {/* Header con imagen de navbar - Responsive */}
        <header 
          className="relative h-24 sm:h-28 lg:h-32 w-full overflow-hidden"
          style={{
            backgroundImage: `url('/images/backgrounds/slug_top_bar_game-02.png')`,
            backgroundSize: 'contain',
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Overlay para mejor legibilidad */}
          <div className="absolute inset-0 bg-black/10" />
          
          {/* Contenido del header */}
          <div className="relative z-10 container mx-auto h-full flex items-center justify-between px-3 sm:px-6">
            {/* Botón de retroceso - solo ícono */}
            <Link href="/">
              <Button 
                variant="ghost" 
                size="sm"
                className="text-white hover:text-[#BBFF00] bg-black/30 hover:bg-black/50 backdrop-blur-sm border border-white/20"
              >
                <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </Link>
            
            {/* Espacio vacío - header limpio */}
            <div></div>
            
            {/* Espacio vacío para mantener layout */}
            <div></div>
          </div>
        </header>

        <div className="container mx-auto p-3 sm:p-6">
          <div className="grid lg:grid-cols-3 gap-4 lg:gap-8">
            {/* Slug Display */}
            <div className="lg:col-span-1 flex flex-col items-center order-1 lg:order-none">
              <Card className="bg-transparent border-transparent sticky top-6 w-full">

                <CardContent className="flex flex-col items-center justify-center p-4">
                  {/* 🎯 CONTENEDOR PRINCIPAL - MARCO Y SLUG RESPONSIVE */}
                  <div className="relative mb-6 w-full flex justify-center">
                    <div 
                      className="relative"
                      style={{ 
                        width: 'min(350px, 85vw)',   // 📱 Responsive: max 350px o 85% del viewport
                        height: 'min(400px, 70vh)',  // 📱 Responsive: max 400px o 70% de altura
                        maxWidth: '350px',           // 📐 Máximo absoluto para pantallas grandes
                        aspectRatio: '7/8'           // 📐 Mantener proporción
                      }}
                    >
                    
                      {/* 📦 MARCO - RESPONSIVE */}
                      <motion.div
                        className="absolute inset-0"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        style={{
                          width: '100%',
                          height: '100%',
                          backgroundImage: `url('/images/Game/GAME avatars/slugs_box-02.png')`,
                          backgroundSize: 'contain',
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'center',
                          zIndex: 10, // Marco encima del slug
                        }}
                      />

                      {/* 🐌 SLUG - RESPONSIVE */}
                      <div 
                        ref={slugContainerRef}
                        className="absolute"
                        style={{ 
                          width: 'min(297px, 80vw)',   // 📱 Proporcional al contenedor (350 * 0.85)
                          height: 'min(339px, 60vh)',  // 📱 Proporcional al contenedor (400 * 0.85)
                          top: '50%',                   // 📍 CENTRADO VERTICAL EXACTO
                          left: '50%',                  // 📍 CENTRADO HORIZONTAL EXACTO
                          transform: 'translate(-50%, -50%)', // 📍 CENTRADO PERFECTO
                          zIndex: 5,                    // Slug debajo del marco
                        }}
                      >
                        <div className="relative w-full h-full">
                        {/* Base Slug Skin */}
                        <motion.div
                          key={slug.baseSkin}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <Image
                            src={getBaseSkinImage()}
                            alt="Base Slug"
                            width={800}
                            height={800}
                            className="w-[85%] sm:w-[70%] h-full object-contain" // 🎯 Más ancho en desktop, más estrecho en móvil
                            quality={100}
                            priority
                          />
                        </motion.div>

                        {/* Mouth Overlay - Responsive */}
                        <AnimatePresence>
                          {slug.mouth && getMouthImage() && (
                            <motion.div
                              key={`mouth-${slug.mouth}`}
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 0, opacity: 0 }}
                              className="absolute transform -translate-x-1/2 -translate-y-1/2"
                              style={{ 
                                top: window.innerWidth >= 768 ? '8%' : '8%', // 🖥️ Desktop 8%, Móvil ajustado a 8%
                                left: '33%',
                                width: 'min(35%, 105px)',    // 📱 Responsive width
                                height: 'min(35%, 105px)',   // 📱 Responsive height
                                zIndex: 8 // Boca debajo de gorros
                              }}
                            >
                              <Image
                                src={getMouthImage()!}
                                alt="Mouth"
                                width={400}
                                height={400}
                                className="w-full h-full object-contain"
                                quality={100}
                                priority
                              />
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Hat Overlay - Responsive */}
                        <AnimatePresence>
                          {slug.hat && getHatImage() && (
                            <motion.div
                              key={`hat-${slug.hat}`}
                              initial={{ y: -50, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              exit={{ y: -50, opacity: 0 }}
                              className="absolute transform -translate-x-1/2"
                              style={{ 
                                top: window.innerWidth >= 768 ? '2%' : '2%', // 🖥️ Desktop 2%, Móvil ajustado a 2%
                                left: '30%',
                                width: 'min(40%, 120px)',    // 📱 Responsive width
                                height: 'min(40%, 120px)',   // 📱 Responsive height
                                zIndex: 25 // Gorros en primer plano
                              }}
                            >
                              <Image
                                src={getHatImage()!}
                                alt="Hat"
                                width={500}
                                height={500}
                                className="w-full h-full object-contain"
                                quality={100}
                                priority
                              />
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Coat Overlay - Responsive */}
                        <AnimatePresence>
                          {slug.coat && getCoatImage() && (
                            <motion.div
                              key={`coat-${slug.coat}`}
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 0, opacity: 0 }}
                              className="absolute transform -translate-x-1/2"
                              style={{ 
                                top: window.innerWidth >= 768 ? '28%' : '29%', // 🖥️ Desktop 28%, Móvil ajustado a 29%
                                left: '12.4%',
                                width: 'min(75%, 225px)',    // 📱 Responsive width
                                height: 'min(70%, 210px)',   // 📱 Responsive height
                                zIndex: 5 
                              }}
                            >
                              <Image
                                src={getCoatImage()!}
                                alt="Coat"
                                width={600}
                                height={600}
                                className="w-full h-full object-contain"
                                quality={100}
                                priority
                              />
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Eyes - Responsive */}
                        <AnimatePresence>
                          {slug.eyes && getEyesImage() && (
                            <motion.div
                              key={`eyes-${slug.eyes}`}
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 0, opacity: 0 }}
                              className="absolute transform -translate-x-1/2 -translate-y-1/2"
                              style={{ 
                                top: window.innerWidth >= 768 ? '5%' : '5%', // 🖥️ Desktop 5%, Móvil ajustado a 5%
                                left: '32%',
                                width: 'min(36%, 108px)',    // 📱 Responsive width
                                height: 'min(36%, 108px)',   // 📱 Responsive height
                                zIndex: 9 // Ojos debajo de gorros pero encima de boca
                              }}
                            >
                              <Image
                                src={getEyesImage()!}
                                alt="Eyes"
                                width={400}
                                height={400}
                                className="w-full h-full object-contain"
                                quality={100}
                                priority
                              />
                            </motion.div>
                          )}
                        </AnimatePresence>
                        </div>
                      </div>
                    </div>
                  </div>

                </CardContent>
              </Card>
            </div>

            {/* Customization Options */}
            <div className="lg:col-span-2 order-2 lg:order-none">
              <div className="space-y-4 lg:space-y-6">
                {/* Category Tabs + Botón Guardar - Responsive */}
                <div className="flex flex-col sm:flex-row flex-wrap gap-2 items-start sm:items-center justify-between mb-4">
                  <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                    {Object.keys(customizationOptions).map((category) => (
                      <Button
                        key={category}
                        onClick={() => setActiveCategory(category as keyof SlugCustomization)}
                        variant={activeCategory === category ? "default" : "outline"}
                        size="sm"
                        className={`text-xs sm:text-sm ${
                          activeCategory === category
                            ? "bg-gradient-to-r from-[#BBFF00] to-[#70FF00] text-black font-bold"
                            : "border-[#BBFF00]/50 text-[#BBFF00] hover:bg-[#BBFF00]/10"
                        }`}
                      >
                        {category === 'baseSkin' ? 'Base Skin' :
                         category === 'eyes' ? 'Eyes' :
                         category === 'mouth' ? 'Mouth' :
                         category === 'coat' ? 'Dress' :
                         category === 'hat' ? 'Hats' :
                         category.charAt(0).toUpperCase() + category.slice(1)}
                      </Button>
                    ))}
                  </div>
                  
                  {/* Botones de acción - Responsive */}
                  <div className="flex gap-2 w-full sm:w-auto justify-center sm:justify-end">
                    <Button 
                      onClick={() => {
                        const isMobile = window.innerWidth < 768
                        if (isMobile && window.innerWidth < 500) {
                          saveSlugAsMobileImage()
                        } else {
                          saveSlugAsImage()
                        }
                      }}
                      size="sm"
                      className="bg-gradient-to-r from-[#BBFF00] to-[#70FF00] text-black font-bold hover:scale-105 transition-transform duration-300 text-xs sm:text-sm flex-1 sm:flex-none"
                    >
                      <Download className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      Save
                    </Button>
                    <Button
                      onClick={randomizeSlug}
                      variant="outline"
                      size="sm"
                      className="border-[#BBFF00] text-[#BBFF00] hover:bg-[#BBFF00] hover:text-black"
                    >
                      <Shuffle className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                    <Button
                      onClick={resetSlug}
                      variant="outline"
                      size="sm"
                      className="border-[#70FF00] text-[#70FF00] hover:bg-[#70FF00] hover:text-black"
                    >
                      <RotateCcw className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[#BBFF00] text-[#BBFF00] hover:bg-[#BBFF00] hover:text-black"
                    >
                      <Share2 className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </div>
                </div>

                {/* Options Grid - Responsive */}
                <Card 
                  className="relative bg-transparent border-2 border-[#BBFF00] rounded-lg backdrop-blur-md"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(0,20,0,0.75) 50%, rgba(0,40,0,0.85) 100%)',
                    boxShadow: '0 0 25px rgba(187, 255, 0, 0.4), inset 0 0 25px rgba(187, 255, 0, 0.15)',
                    padding: '10px sm:20px',
                    position: 'relative',
                  }}
                >
                  {/* Efectos neon adicionales */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-[#BBFF00]/20 to-transparent animate-pulse" />
                  <div className="relative z-10">
                  <CardHeader className="pb-3 sm:pb-6">
                    <CardTitle className="text-[#BBFF00] capitalize text-lg sm:text-xl">
                      Choose {activeCategory === 'baseSkin' ? 'Base Skin' :
                              activeCategory === 'eyes' ? 'Eyes' :
                              activeCategory === 'mouth' ? 'Mouth' :
                              activeCategory === 'coat' ? 'Dress' :
                              activeCategory === 'hat' ? 'Hats' :
                              activeCategory}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-2">
                      {/* Clear Option para categorías que no son baseSkin */}
                      {activeCategory !== 'baseSkin' && (
                        <motion.button
                          onClick={() => updateSlug(activeCategory, "")}
                          className={`aspect-square rounded-lg border-2 flex items-center justify-center text-lg sm:text-xl transition-all duration-300 ${
                            slug[activeCategory] === ""
                              ? "border-[#BBFF00] bg-[#BBFF00]/20"
                              : "border-gray-600 hover:border-[#BBFF00]/50"
                          }`}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          ❌
                        </motion.button>
                      )}

                      {/* Render image options */}
                      {customizationOptions[activeCategory].map((option: any, index: number) => (
                        <motion.button
                          key={`${activeCategory}-${option.id}-${index}`}
                          onClick={() => updateSlug(activeCategory, option.id)}
                          className={`aspect-square rounded-lg border-2 flex items-center justify-center transition-all duration-300 overflow-hidden ${
                            slug[activeCategory] === option.id
                              ? "border-[#BBFF00] bg-[#BBFF00]/20"
                              : "border-gray-600 hover:border-[#BBFF00]/50"
                          }`}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          title={option.name}
                        >
                          <Image
                            src={option.src}
                            alt={option.name}
                            width={60}
                            height={60}
                            className="w-full h-full object-contain"
                          />
                        </motion.button>
                      ))}
                    </div>
                  </CardContent>
                  </div>
                </Card>

                {/* Stats - Responsive */}
                <Card 
                  className="relative bg-transparent border-2 border-[#BBFF00] rounded-lg backdrop-blur-md"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(0,20,0,0.75) 50%, rgba(0,40,0,0.85) 100%)',
                    boxShadow: '0 0 25px rgba(187, 255, 0, 0.4), inset 0 0 25px rgba(187, 255, 0, 0.15)',
                    padding: '10px sm:20px',
                    position: 'relative',
                  }}
                >
                  {/* Efectos neon adicionales */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-[#BBFF00]/20 to-transparent animate-pulse" />
                  <div className="relative z-10">
                  <CardContent className="p-3 sm:p-6">
                    <h3 className="text-[#70FF00] font-bold mb-4 text-lg sm:text-xl">SlugDude Stats</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="text-xl sm:text-2xl font-bold text-[#BBFF00]">
                          {Object.values(slug).filter(Boolean).length}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-400">Accessories</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl sm:text-2xl font-bold text-[#BBFF00]">{Math.floor(Math.random() * 100) + 50}</div>
                        <div className="text-xs sm:text-sm text-gray-400">Slime Power</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl sm:text-2xl font-bold text-[#BBFF00]">{Math.floor(Math.random() * 10) + 1}</div>
                        <div className="text-xs sm:text-sm text-gray-400">Rarity</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl sm:text-2xl font-bold text-[#BBFF00]">∞</div>
                        <div className="text-xs sm:text-sm text-gray-400">Immortality</div>
                      </div>
                    </div>
                  </CardContent>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
