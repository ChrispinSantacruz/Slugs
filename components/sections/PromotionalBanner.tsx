"use client"

import { motion } from "framer-motion"
import { Zap } from "lucide-react"
import { SlimeTitle } from "@/components/ui/SlimeTitle"
import { SlimeButton } from "@/components/ui/SlimeButton"
import { generateSlimeBlobs } from "@/utils/slimeEffects"
import { slimePulse } from "@/utils/animations"

export function PromotionalBanner() {
  const backgroundBlobs = generateSlimeBlobs(8)

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#BBFF00]/20 via-[#70FF00]/20 to-[#BBFF00]/20" />

      <div className="absolute inset-0">
        {backgroundBlobs.map((blob) => (
          <div
            key={blob.id}
            className="slime-blob slime-blob-small absolute"
            style={{
              left: `${blob.left}%`,
              top: `${blob.top}%`,
              animationDelay: `${blob.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div animate={slimePulse}>
            <SlimeTitle size="md" className="mb-4">
              🚀 LIMITED GENESIS DROP COMING SOON! 🚀
            </SlimeTitle>
          </motion.div>

          <p className="text-2xl text-[#BBFF00] mb-6 font-bold slime-subtitle">
            Be among the first 1000 SlugDudes to join the immortal colony
          </p>

          <SlimeButton size="lg" className="text-xl px-10 py-6">
            <Zap className="mr-2 h-6 w-6" />
            Get Notified
          </SlimeButton>
        </motion.div>
      </div>
    </section>
  )
}
