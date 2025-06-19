"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { SlimeTitle } from "@/components/ui/SlimeTitle"

export function RoadmapSection() {
  return (
    <section 
      id="roadmap" 
      className="relative w-full overflow-hidden bg-gradient-to-b from-green-900 to-black"
      style={{
        position: 'relative',
        zIndex: 1,
        minHeight: '150vh',
        height: 'auto',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: '50px',
        paddingBottom: '200px'
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
          src="/images/backgrounds/Backgroundroadmap.png"
          alt="Roadmap Background"
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
          src="/images/backgroundResponsive/roadmap.png"
          alt="Roadmap Background Mobile"
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

      {/* Contenido del Roadmap */}
      <div className="relative z-20 container mx-auto px-4 max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-6 mt-16"
        >
          <SlimeTitle className="text-3xl md:text-4xl mb-4 text-[#BBFF00]">
            ROADMAP
          </SlimeTitle>
        </motion.div>

        {/* Imagen del Roadmap - Aún más pequeña */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center items-center"
        >
          <div className="relative w-full max-w-3xl">
            <Image
              src="/images/map.png"
              alt="SlugDudes Roadmap - From Primordial Slime to Immortal Colony"
              width={1200}
              height={750}
              className="w-full h-auto rounded-lg shadow-2xl shadow-black/60 border-4 border-[#BBFF00] glow-border"
              quality={100}
              priority={true}
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 70vw, 60vw"
              style={{
                filter: 'drop-shadow(0 0 20px #BBFF00) drop-shadow(0 10px 25px rgba(0, 0, 0, 0.8))',
                boxShadow: '0 0 30px #BBFF00, 0 0 60px #BBFF00, inset 0 0 20px rgba(187, 255, 0, 0.1), 0 20px 40px rgba(0, 0, 0, 0.6)'
              }}
            />
            {/* Marco fosforescente adicional */}
            <div 
              className="absolute inset-0 rounded-lg pointer-events-none border-2 border-[#BBFF00]/80"
              style={{
                background: 'linear-gradient(45deg, transparent 30%, rgba(187, 255, 0, 0.1) 50%, transparent 70%)',
                boxShadow: 'inset 0 0 20px rgba(187, 255, 0, 0.3), 0 0 40px rgba(187, 255, 0, 0.5)'
              }}
            ></div>
          </div>
        </motion.div>

        {/* Texto adicional debajo del roadmap */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-6"
        >
          <p className="text-base md:text-lg text-[#BBFF00] font-bold">
            "THIS AIN'T A ROADMAP. IT'S A GODDAMN INFESTATION PROTOCOL."
          </p>
        </motion.div>

        {/* Sección Tokenomics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{
              background: 'linear-gradient(45deg, #BBFF00, #70FF00, #BBFF00)',
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 30px rgba(187, 255, 0, 0.5)',
              filter: 'drop-shadow(0 0 10px #BBFF00)'
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            TOKENOMICS
          </motion.h2>
          
          <motion.div
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#BBFF00]/20 to-[#70FF00]/20 rounded-full border-2 border-[#BBFF00]/50 backdrop-blur-md"
            whileHover={{ scale: 1.05 }}
            style={{
              boxShadow: '0 0 20px rgba(187, 255, 0, 0.3), inset 0 0 20px rgba(187, 255, 0, 0.1)'
            }}
          >
            <motion.p
              className="text-2xl md:text-3xl font-bold text-[#BBFF00]"
              animate={{ 
                textShadow: [
                  "0 0 5px #BBFF00", 
                  "0 0 15px #BBFF00", 
                  "0 0 5px #BBFF00"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Coming Soon
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
