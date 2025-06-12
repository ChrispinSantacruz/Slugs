"use client"

import { motion } from "framer-motion"
import { Gamepad2 } from "lucide-react"
import Link from "next/link"
import { SlimeTitle } from "@/components/ui/SlimeTitle"
import { SlimeButton } from "@/components/ui/SlimeButton"
import { SlimeCard } from "@/components/ui/SlimeCard"
import { CUSTOMIZATION_FEATURES } from "@/lib/constants"
import { fadeInLeft, fadeInRight } from "@/utils/animations"
import { slimeRotate } from "@/utils/animations"

export function VideogameAvatarsSection() {
  return (
    <section id="videogame-avatars" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <SlimeTitle size="lg" className="mb-6">
            VIDEOGAME AVATARS
          </SlimeTitle>
          <p className="text-xl text-[#BBFF00] max-w-2xl mx-auto font-bold slime-subtitle">
            Create your unique SlugDude avatar and join the immortal colony
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <SlimeCard className="p-8">
              <div className="aspect-square bg-black/70 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <motion.div className="text-8xl relative z-10" animate={slimeRotate}>
                  🐌
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#BBFF00]/30 to-transparent" />

                {/* Slime bubbles in demo */}
                {Array.from({ length: 6 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-[#BBFF00]/60 rounded-full"
                    style={{
                      left: `${Math.random() * 80 + 10}%`,
                      top: `${Math.random() * 80 + 10}%`,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                      y: [0, -20, -40],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </div>
              <p className="text-center mt-4 text-[#BBFF00] font-bold text-lg slime-glow">Interactive Dress-Up Demo</p>
            </SlimeCard>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <SlimeTitle size="md" className="text-[#BBFF00]">
              Customize Your SlugDude
            </SlimeTitle>

            <p className="text-gray-300 text-xl leading-relaxed font-semibold">
              Dive into our interactive dress-up game and create your perfect SlugDude avatar. Mix and match skins,
              eyes, mouths, hats, jackets, chains, weapons, and more to build your unique identity in the slime colony.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {CUSTOMIZATION_FEATURES.map((feature, index) => (
                <SlimeCard key={feature.label} delay={index * 0.1} className="p-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{feature.icon}</span>
                    <span className="text-white font-bold text-lg">{feature.label}</span>
                  </div>
                </SlimeCard>
              ))}
            </div>

            <Link href="/dress-up-game">
              <SlimeButton size="lg" className="w-full text-xl py-6">
                <Gamepad2 className="mr-2 h-6 w-6" />
                Create Your Slug!
              </SlimeButton>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
