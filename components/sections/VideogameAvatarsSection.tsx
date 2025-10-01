"use client"

import { motion } from "framer-motion"
import { Gamepad2, Users, Crown, Palette, Clock } from "lucide-react"
import { SlimeCard } from "@/components/ui/SlimeCard"
import { SlimeTitle } from "@/components/ui/SlimeTitle"
import Image from "next/image"

export function VideogameAvatarsSection() {
  return (
    <section 
      id="videogame-avatars" 
      className="relative w-full overflow-hidden bg-gradient-to-b from-green-900 to-black"
      style={{
        position: 'relative',
        zIndex: 1,
        minHeight: '800vh',
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '22vh',
        paddingBottom: '44vh'
      }}
    >
      {/* Background para Desktop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 w-full h-full hidden md:block"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1
        }}
      >
        <Image
          src="/images/backgrounds/backgroundgame1.png"
          alt="Videogame Background"
          fill
          className="object-cover object-center"
          style={{ 
            objectPosition: 'center center',
            objectFit: 'cover',
            width: '100%',
            height: '100%'
          }}
          priority={false}
          quality={100}
          sizes="100vw"
        />
      </motion.div>

      {/* Background para Mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 w-full h-full block md:hidden"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1
        }}
      >
        <Image
          src="/images/backgrounds/backgroundgame1.png"
          alt="Videogame Background Mobile"
          fill
          className="object-contain object-center"
          style={{ 
            objectPosition: 'center center',
            objectFit: 'contain',
            width: '100%',
            height: '100%'
          }}
          priority={false}
          quality={100}
          sizes="100vw"
        />
      </motion.div>

      {/* Overlay para mejor contraste */}
      <div className="absolute inset-0 bg-black/25 z-2"></div>
      
      {/* Contenido principal centrado */}
      <div className="relative z-10 container mx-auto max-w-7xl px-4">
        {/* Título de la sección */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-[26.5rem] md:max-w-[38.5rem] mx-auto px-4">
          {/* Dress Up Game */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <motion.a
              href="/dress-up-game"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="block relative w-full aspect-[3/2] rounded-lg overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Image
                src="/images/Game/dressup.png"
                alt="Slugs Dudes Dress Up Game"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 25vw"
                priority
                quality={90}
              />
            </motion.a>
          </motion.div>

          {/* Slugs Pot Game */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <motion.a
              href="https://slugs-pot.vercel.app/login.html"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="block relative w-full aspect-[3/2] rounded-lg overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Image
                src="/images/Game/slugspot.png"
                alt="Slugs Dudes Pot Game"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 25vw"
                priority
                quality={90}
              />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
