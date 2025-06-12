"use client"

import { motion } from "framer-motion"
import { Sparkles, Rocket } from "lucide-react"
import Image from "next/image"
import { SlimeTitle } from "@/components/ui/SlimeTitle"
import { SlimeButton } from "@/components/ui/SlimeButton"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Image simplificada */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <Image
                src="/images/slug-character.jpg"
                alt="SlugDudes Character"
                width={400}
                height={400}
                className="rounded-2xl border-2 border-[#BBFF00]/50"
              />
            </div>
          </motion.div>

          {/* Right Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <SlimeTitle size="xl" className="mb-6">
              SLUG DUDES
            </SlimeTitle>

            <motion.p
              className="text-xl md:text-2xl mb-4 text-[#BBFF00] font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              FROM PRIMORDIAL SLIME TO IMMORTAL COLONY
            </motion.p>

            <motion.p
              className="text-lg md:text-xl mb-8 text-gray-300 max-w-3xl mx-auto md:mx-0 font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Enter the viscous universe of immortal mutant slugs born from the primordial ooze. The future is slimy,
              and it's here to stay!
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <SlimeButton size="lg">
                <Sparkles className="mr-2 h-5 w-5" />
                Join the Colony
              </SlimeButton>

              <SlimeButton variant="secondary" size="lg">
                <Rocket className="mr-2 h-5 w-5" />
                Explore Universe
              </SlimeButton>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Fondo simplificado */}
      <div className="absolute inset-0 opacity-10 z-0">
        <Image src="/images/slug-banner.jpg" alt="SlugDudes Universe" fill className="object-cover" />
      </div>
    </section>
  )
}
