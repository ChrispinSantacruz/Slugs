"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Download, Share2, Shuffle, RotateCcw } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface SlugCustomization {
  baseSkin: string
  eyes: string
  mouth: string
  hat: string
  coat: string
  chain: string
}

// 🎨 CONFIGURACIÓN ACTUALIZADA CON NUEVOS ASSETS
const customizationOptions = {
  // 1. SKIN BASE - NUEVAS SKINS
  baseSkin: [
    { id: "skin-01", name: "Skin Clásica", src: "/images/Game/GAME avatars (2)/slugs_base_skin/slugs_skins-01.png" },
    { id: "skin-02", name: "Skin Premium", src: "/images/Game/GAME avatars (2)/slugs_base_skin/slugs_skins-02.png" },
    { id: "skin-03", name: "Skin Élite", src: "/images/Game/GAME avatars (2)/slugs_base_skin/slugs_skins-03.png" },
    { id: "skin-04", name: "Skin Legendaria", src: "/images/Game/GAME avatars (2)/slugs_base_skin/slugs_skins-04.png" },
    { id: "skin-05", name: "Skin Épica", src: "/images/Game/GAME avatars (2)/slugs_base_skin/slugs_skins-05.png" },
    { id: "skin-06", name: "Skin Mítica", src: "/images/Game/GAME avatars (2)/slugs_base_skin/slugs_skins-06.png" },
  ],
  
  // 2. EYES - NUEVOS OJOS
  eyes: [
    { id: "eyes-03", name: "Ojos Expresivos", src: "/images/Game/GAME avatars (2)/eyes/slugs_eyes-03.png" },
    { id: "eyes-04", name: "Ojos Minimalistas", src: "/images/Game/GAME avatars (2)/eyes/slugs_eyes-04.png" },
    { id: "eyes-05", name: "Ojos Brillantes", src: "/images/Game/GAME avatars (2)/eyes/slugs_eyes-05.png" },
    { id: "eyes-06", name: "Ojos Elegantes", src: "/images/Game/GAME avatars (2)/eyes/slugs_eyes-06.png" },
    { id: "eyes-07", name: "Ojos Serios", src: "/images/Game/GAME avatars (2)/eyes/slugs_eyes-07.png" },
    { id: "eyes-08", name: "Ojos Intensos", src: "/images/Game/GAME avatars (2)/eyes/slugs_eyes-08.png" },
    { id: "eyes-09", name: "Ojos Misteriosos", src: "/images/Game/GAME avatars (2)/eyes/slugs_eyes-09.png" },
    { id: "eyes-10", name: "Ojos Únicos", src: "/images/Game/GAME avatars (2)/eyes/slugs_eyes-10.png" },
  ],
  
  // 3. MOUTH - NUEVAS BOCAS
  mouth: [
    { id: "mouth-03", name: "Sonrisa Sutil", src: "/images/Game/GAME avatars (2)/mouth/slugs_mouth-03.png" },
    { id: "mouth-04", name: "Expresión Neutra", src: "/images/Game/GAME avatars (2)/mouth/slugs_mouth-04.png" },
    { id: "mouth-05", name: "Sonrisa Amplia", src: "/images/Game/GAME avatars (2)/mouth/slugs_mouth-05.png" },
    { id: "mouth-06", name: "Expresión Cool", src: "/images/Game/GAME avatars (2)/mouth/slugs_mouth-06.png" },
    { id: "mouth-07", name: "Sonrisa Traviesa", src: "/images/Game/GAME avatars (2)/mouth/slugs_mouth-07.png" },
    { id: "mouth-08", name: "Expresión Sorprendida", src: "/images/Game/GAME avatars (2)/mouth/slugs_mouth-08.png" },
    { id: "mouth-09", name: "Sonrisa Discreta", src: "/images/Game/GAME avatars (2)/mouth/slugs_mouth-09.png" },
    { id: "mouth-10", name: "Expresión Épica", src: "/images/Game/GAME avatars (2)/mouth/slugs_mouth-10.png" },
  ],
  
  // 4. COATS - ABRIGOS DE LA CARPETA ORIGINAL
  coat: [
    { id: "coat-01", name: "Abrigo Clásico", src: "/images/Game/GAME avatars/coats/coats/SLUG_coat-01.png" },
    { id: "coat-02", name: "Abrigo Sport", src: "/images/Game/GAME avatars/coats/coats/SLUG_coat-02.png" },
    { id: "coat-03", name: "Abrigo Elegante", src: "/images/Game/GAME avatars/coats/coats/SLUG_coat-03.png" },
    { id: "coat-04", name: "Abrigo Premium", src: "/images/Game/GAME avatars/coats/coats/SLUG_coat-04.png" },
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
  
  // 6. ACCESSORIES - MANTENEMOS LOS EMOJIS
  chain: ["📿", "⛓️", "🔗", "💎", "🏅", "🎖️", "🌟", "⚡", "🔥", "❄️"],
}

export default function DressUpGame() {
  const [slug, setSlug] = useState<SlugCustomization>({
    baseSkin: "skin-01",
    eyes: "",
    mouth: "",
    hat: "",
    coat: "",
    chain: "",
  })

  const [activeCategory, setActiveCategory] = useState<keyof SlugCustomization>("baseSkin")

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
    newSlug.chain = Math.random() > 0.3 ? customizationOptions.chain[Math.floor(Math.random() * customizationOptions.chain.length)] : ""
    
    setSlug(newSlug)
  }

  const resetSlug = () => {
    setSlug({
      baseSkin: "skin-01",
      eyes: "",
      mouth: "",
      hat: "",
      coat: "",
      chain: "",
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

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#BBFF00]/20 via-transparent to-[#70FF00]/20" />
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-[#BBFF00]/20 rounded-full blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="p-6 border-b border-[#BBFF00]/20">
          <div className="container mx-auto flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" className="text-[#BBFF00] hover:text-[#70FF00]">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver a la Colonia
              </Button>
            </Link>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-[#BBFF00] to-[#70FF00] bg-clip-text text-transparent">
              Creador de SlugDude
            </h1>
            <div className="flex gap-2">
              <Button
                onClick={randomizeSlug}
                variant="outline"
                className="border-[#BBFF00] text-[#BBFF00] hover:bg-[#BBFF00] hover:text-black"
              >
                <Shuffle className="h-4 w-4" />
              </Button>
              <Button
                onClick={resetSlug}
                variant="outline"
                className="border-[#70FF00] text-[#70FF00] hover:bg-[#70FF00] hover:text-black"
              >
                <RotateCcw className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </header>

        <div className="container mx-auto p-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Slug Display */}
            <div className="lg:col-span-1 flex flex-col items-center">
              <Card className="bg-transparent border-transparent sticky top-6 w-full">

                <CardContent className="flex flex-col items-center justify-center p-4">
                  {/* 🎯 CONTENEDOR PRINCIPAL - MARCO Y SLUG MÁS GRANDES VERTICALMENTE */}
                  <div className="relative mb-6" style={{ width: '450px', height: '500px' }}>
                    
                    {/* 📦 MARCO - INDEPENDIENTE Y MÁS GRANDE */}
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

                    {/* 🐌 SLUG - MÁS GRANDE VERTICALMENTE */}
                    <div 
                      className="absolute"
                                              style={{ 
                          width: '371px',   // 📐 SLUG 7% MÁS PEQUEÑO (399 * 0.93)
                          height: '424px',  // 📐 SLUG 7% MÁS PEQUEÑO (456 * 0.93)
                        top: '50%',       // 📍 CENTRADO VERTICAL EXACTO
                        left: '50%',      // 📍 CENTRADO HORIZONTAL EXACTO
                        transform: 'translate(-50%, -50%)', // 📍 CENTRADO PERFECTO
                        zIndex: 5,        // Slug debajo del marco
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
                          width={800} // Aumentado para mejor calidad
                          height={800} // Aumentado para mejor calidad
                          className="w-full h-full object-contain"
                          quality={100} // Máxima calidad
                          priority
                        />
                      </motion.div>

                      {/* Mouth Overlay - Ajustado al nuevo tamaño */}
                      <AnimatePresence>
                        {slug.mouth && getMouthImage() && (
                          <motion.div
                            key={`mouth-${slug.mouth}`}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            // 📍 POSICIÓN DE LA BOCA - AJUSTADA AL TAMAÑO VERTICAL:
                            className="absolute top-[4.5%] left-[33.1%] transform -translate-x-1/2 -translate-y-1/2"
                            style={{ 
                              width: '35%', // Ajustado al slug más grande
                              height: '35%', // Proporción vertical
                              zIndex: 8 // Boca debajo de gorros
                            }}
                          >
                            <Image
                              src={getMouthImage()!}
                              alt="Mouth"
                              width={400} // Aumentado para mejor calidad
                              height={400} // Aumentado para mejor calidad
                              className="w-full h-full object-contain"
                              quality={100} // Máxima calidad
                              priority
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Hat Overlay - Ajustado al nuevo tamaño */}
                      <AnimatePresence>
                        {slug.hat && getHatImage() && (
                          <motion.div
                            key={`hat-${slug.hat}`}
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -50, opacity: 0 }}
                            // 📍 POSICIÓN DEL GORRO - AJUSTADO AL TAMAÑO VERTICAL:
                            className="absolute top-[1%] left-[31%] transform -translate-x-1/2"
                            style={{ 
                              width: '40%', // Ajustado al slug más grande
                              height: '40%', // Proporción vertical
                              zIndex: 25 // Gorros en primer plano
                            }}
                          >
                            <Image
                              src={getHatImage()!}
                              alt="Hat"
                              width={500} // Aumentado para mejor calidad
                              height={500} // Aumentado para mejor calidad
                              className="w-full h-full object-contain"
                              quality={100} // Máxima calidad
                              priority
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Coat Overlay - Restaurado */}
                      <AnimatePresence>
                        {slug.coat && getCoatImage() && (
                          <motion.div
                            key={`coat-${slug.coat}`}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            // 📍 POSICIÓN DEL ABRIGO:
                            className="absolute top-[28%] left-[15.6%] transform -translate-x-1/2"
                            style={{ 
                              width: '70%', 
                              height: '70%',
                              zIndex: 5 
                            }}
                          >
                            <Image
                              src={getCoatImage()!}
                              alt="Coat"
                              width={600} // Aumentado para mejor calidad
                              height={600} // Aumentado para mejor calidad
                              className="w-full h-full object-contain"
                              quality={100} // Máxima calidad
                              priority
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Eyes - Ajustado al nuevo tamaño */}
                      <AnimatePresence>
                        {slug.eyes && getEyesImage() && (
                          <motion.div
                            key={`eyes-${slug.eyes}`}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            // 📍 POSICIÓN DE LOS OJOS - AJUSTADA AL TAMAÑO VERTICAL:
                            className="absolute top-[1%] left-[32.3%] transform -translate-x-1/2 -translate-y-1/2"
                            style={{ 
                              width: '36%',
                              height: '36%', // Proporción vertical
                              zIndex: 9 // Ojos debajo de gorros pero encima de boca
                            }}
                          >
                            <Image
                              src={getEyesImage()!}
                              alt="Eyes"
                              width={400} // Aumentado para mejor calidad
                              height={400} // Aumentado para mejor calidad
                              className="w-full h-full object-contain"
                              quality={100} // Máxima calidad
                              priority
                            />
                          </motion.div>
                        )}

                        {/* Chain/Accessories - AJUSTADO AL TAMAÑO VERTICAL */}
                        {slug.chain && (
                          <motion.span
                            key={`chain-${slug.chain}`}
                            initial={{ scale: 0, rotate: 90 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0, rotate: -90 }}
                            className="absolute top-[75%] left-1/2 transform -translate-x-1/2 text-4xl z-10"
                          >
                            {slug.chain}
                          </motion.span>
                        )}

                      </AnimatePresence>
                      </div>
                    </div>
                  </div>

                </CardContent>
              </Card>
            </div>

            {/* Customization Options */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {/* Category Tabs + Botón Guardar */}
                <div className="flex flex-wrap gap-2 items-center justify-between mb-4">
                  <div className="flex flex-wrap gap-2">
                    {Object.keys(customizationOptions).map((category) => (
                      <Button
                        key={category}
                        onClick={() => setActiveCategory(category as keyof SlugCustomization)}
                        variant={activeCategory === category ? "default" : "outline"}
                        className={
                          activeCategory === category
                            ? "bg-gradient-to-r from-[#BBFF00] to-[#70FF00] text-black font-bold"
                            : "border-[#BBFF00]/50 text-[#BBFF00] hover:bg-[#BBFF00]/10"
                        }
                      >
                        {category === 'baseSkin' ? 'Skin Base' :
                         category === 'eyes' ? 'Eyes' :
                         category === 'mouth' ? 'Mouth' :
                         category === 'coat' ? 'Coats' :
                         category === 'hat' ? 'Hats' :
                         category === 'chain' ? 'Accessories' :
                         category.charAt(0).toUpperCase() + category.slice(1)}
                      </Button>
                    ))}
                  </div>
                  
                  {/* Botón Guardar */}
                  <div className="flex gap-2">
                    <Button className="bg-gradient-to-r from-[#BBFF00] to-[#70FF00] text-black font-bold hover:scale-105 transition-transform duration-300">
                      <Download className="mr-2 h-4 w-4" />
                      Guardar
                    </Button>
                    <Button
                      variant="outline"
                      className="border-[#BBFF00] text-[#BBFF00] hover:bg-[#BBFF00] hover:text-black"
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Options Grid */}
                <Card 
                  className="relative bg-transparent border-2 border-[#BBFF00] rounded-lg"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(0,20,0,0.8) 50%, rgba(0,40,0,0.9) 100%)',
                    boxShadow: '0 0 20px rgba(187, 255, 0, 0.3), inset 0 0 20px rgba(187, 255, 0, 0.1)',
                    padding: '20px',
                    position: 'relative',
                  }}
                >
                  {/* Efectos neon adicionales */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-[#BBFF00]/20 to-transparent animate-pulse" />
                  <div className="relative z-10">
                  <CardHeader>
                    <CardTitle className="text-[#BBFF00] capitalize">
                      Choose {activeCategory === 'baseSkin' ? 'Skin Base' :
                              activeCategory === 'eyes' ? 'Eyes' :
                              activeCategory === 'mouth' ? 'Mouth' :
                              activeCategory === 'coat' ? 'Coats' :
                              activeCategory === 'hat' ? 'Hats' :
                              activeCategory === 'chain' ? 'Accessories' :
                              activeCategory}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-2">
                      {/* Clear Option para categorías que no son baseSkin */}
                      {activeCategory !== 'baseSkin' && (
                        <motion.button
                          onClick={() => updateSlug(activeCategory, "")}
                          className={`aspect-square rounded-lg border-2 flex items-center justify-center text-xl transition-all duration-300 ${
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

                      {/* Render options based on category */}
                      {(activeCategory === 'baseSkin' || activeCategory === 'mouth' || activeCategory === 'hat' || activeCategory === 'coat' || activeCategory === 'eyes') ? (
                        // Render image options
                        customizationOptions[activeCategory].map((option: any, index: number) => (
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
                        ))
                      ) : (
                        // Render emoji options
                        customizationOptions[activeCategory].map((option: string, index: number) => (
                          <motion.button
                            key={`${activeCategory}-${option}-${index}`}
                            onClick={() => updateSlug(activeCategory, option)}
                            className={`aspect-square rounded-lg border-2 flex items-center justify-center text-xl transition-all duration-300 ${
                              slug[activeCategory] === option
                                ? "border-[#BBFF00] bg-[#BBFF00]/20"
                                : "border-gray-600 hover:border-[#BBFF00]/50"
                            }`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            {option}
                          </motion.button>
                        ))
                      )}
                    </div>
                  </CardContent>
                  </div>
                </Card>

                {/* Stats */}
                <Card 
                  className="relative bg-transparent border-2 border-[#BBFF00] rounded-lg"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(0,20,0,0.8) 50%, rgba(0,40,0,0.9) 100%)',
                    boxShadow: '0 0 20px rgba(187, 255, 0, 0.3), inset 0 0 20px rgba(187, 255, 0, 0.1)',
                    padding: '20px',
                    position: 'relative',
                  }}
                >
                  {/* Efectos neon adicionales */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-[#BBFF00]/20 to-transparent animate-pulse" />
                  <div className="relative z-10">
                  <CardContent className="p-6">
                    <h3 className="text-[#70FF00] font-bold mb-4">Estadísticas del SlugDude</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#BBFF00]">
                          {Object.values(slug).filter(Boolean).length}
                        </div>
                        <div className="text-sm text-gray-400">Accesorios</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#BBFF00]">{Math.floor(Math.random() * 100) + 50}</div>
                        <div className="text-sm text-gray-400">Poder Viscoso</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#BBFF00]">{Math.floor(Math.random() * 10) + 1}</div>
                        <div className="text-sm text-gray-400">Rareza</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#BBFF00]">∞</div>
                        <div className="text-sm text-gray-400">Inmortalidad</div>
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
