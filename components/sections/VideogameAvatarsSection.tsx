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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
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

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square bg-gradient-to-br from-[#BBFF00]/10 to-[#70FF00]/10 rounded-2xl flex items-center justify-center overflow-hidden border border-[#BBFF00]/20">
              <motion.div
                animate={slimeRotate}
                className="text-9xl opacity-60 motion-element"
              >
                🐌
              </motion.div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

              <div className="absolute bottom-8 left-8 right-8">
                <div className="grid grid-cols-4 gap-3">
                  {["🎩", "😎", "⚔️", "📿"].map((accessory, index) => (
                    <motion.div
                      key={accessory}
                      className="aspect-square bg-black/60 rounded-lg flex items-center justify-center text-2xl border border-[#BBFF00]/30"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {accessory}
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="absolute top-4 left-4 right-4">
                <div className="bg-black/80 rounded-lg p-3 border border-[#BBFF00]/30">
                  <div className="flex items-center justify-between">
                    <span className="text-[#BBFF00] text-sm font-bold">SlugDude #1337</span>
                    <span className="text-[#70FF00] text-sm">⚡ Immortal</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
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

            <div className="pt-8 pb-16">
              <Link href="/dress-up-game">
                <SlimeButton size="lg" className="w-full text-xl py-6">
                  <Gamepad2 className="mr-2 h-6 w-6" />
                  Create Your Slug!
                </SlimeButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
