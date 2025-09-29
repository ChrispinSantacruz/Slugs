"use client"

import { motion } from "framer-motion"
import { Copy, CheckCircle, ExternalLink } from "lucide-react"
import { SlimeTitle } from "@/components/ui/SlimeTitle"
import { generateSlimeBlobs } from "@/utils/slimeEffects"
import { slimePulse } from "@/utils/animations"
import { useState } from "react"

export function PromotionalBanner() {
  const backgroundBlobs = generateSlimeBlobs(8)
  const [copied, setCopied] = useState(false)
  const contractAddress = "HusumSkat3cL5bSZWWu1fTMQakarBcT5rFtHzH5Lpump"

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Error copying to clipboard:', err)
    }
  }

  const openPumpfun = () => {
    window.open('https://pump.fun/coin/HusumSkat3cL5bSZWWu1fTMQakarBcT5rFtHzH5Lpump', '_blank')
  }

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
              Contract Address
            </SlimeTitle>
          </motion.div>

          <motion.p 
            className="text-[#70FF00] font-mono text-lg md:text-xl lg:text-2xl font-semibold tracking-wider break-all mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {contractAddress}
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              onClick={copyToClipboard}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-[#BBFF00]/20 hover:bg-[#BBFF00]/30 rounded-lg border border-[#BBFF00]/40 transition-all duration-300 font-bold text-[#BBFF00] text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {copied ? (
                <>
                  <CheckCircle className="w-6 h-6" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-6 h-6" />
                  <span>Copy</span>
                </>
              )}
            </motion.button>

            <motion.button
              onClick={openPumpfun}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-orange-600/20 hover:bg-orange-600/30 rounded-lg border border-orange-400/40 transition-all duration-300 font-bold text-orange-400 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <ExternalLink className="w-6 h-6" />
              <span>Buy Pumpfun</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
