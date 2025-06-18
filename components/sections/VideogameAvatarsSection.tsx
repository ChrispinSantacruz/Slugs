"use client"

import { motion } from "framer-motion"
import { Gamepad2, Users, Crown, Palette } from "lucide-react"
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
        minHeight: '100vh',
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        paddingTop: '100px',
        paddingBottom: '100px'
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 w-full h-full"
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
          src="/images/backgrounds/videojuegoback.png"
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

      {/* Overlay para mejor contraste */}
      <div className="absolute inset-0 bg-black/25 z-2"></div>
      
      {/* Contenido principal centrado */}
      <div className="relative z-10 container mx-auto max-w-7xl px-4">
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            {/* Cuadro explicativo pequeño y compacto */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <SlimeCard className="p-4 md:p-5 bg-black/80 backdrop-blur-md border-2 border-[#BBFF00]/30">
                <div className="text-center mb-4">
                  <Gamepad2 className="w-8 h-8 text-[#BBFF00] mx-auto mb-2" />
                  <h3 className="text-lg md:text-xl font-bold text-[#BBFF00] mb-2">
                    Dress-Up Game
                  </h3>
                  <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                    Create unique avatars by combining different elements.
                  </p>
                </div>

                <div className="space-y-3">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center p-2 bg-[#BBFF00]/10 rounded border border-[#BBFF00]/20"
                  >
                    <Users className="w-6 h-6 text-[#BBFF00] mr-2 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold text-[#BBFF00]">Infinite Variety</h4>
                      <p className="text-xs text-gray-300">Hundreds of combinations</p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center p-2 bg-[#BBFF00]/10 rounded border border-[#BBFF00]/20"
                  >
                    <Crown className="w-6 h-6 text-[#BBFF00] mr-2 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold text-[#BBFF00]">Epic Accessories</h4>
                      <p className="text-xs text-gray-300">Unique hats and elements</p>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center p-2 bg-[#BBFF00]/10 rounded border border-[#BBFF00]/20"
                  >
                    <Palette className="w-6 h-6 text-[#BBFF00] mr-2 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold text-[#BBFF00]">Total Customization</h4>
                      <p className="text-xs text-gray-300">Colors and expressions</p>
                    </div>
                  </motion.div>
                </div>

                <div className="mt-4 text-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block"
                  >
                    <a
                      href="/dress-up-game"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#BBFF00] to-[#70FF00] text-black font-bold text-sm rounded-full hover:shadow-lg hover:shadow-[#BBFF00]/50 transition-all duration-300"
                    >
                      <Gamepad2 className="w-4 h-4 mr-1" />
                      Play Now!
                    </a>
                  </motion.div>
                </div>
              </SlimeCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
