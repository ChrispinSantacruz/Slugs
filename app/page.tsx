"use client"

// import { SlimeNavbar } from "@/components/layout/SlimeNavbar"
import { HomeSection } from "@/components/sections/HomeSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { AboutSection2 } from "@/components/sections/AboutSection2"
import { VideogameAvatarsSection } from "@/components/sections/VideogameAvatarsSection"
import { RoadmapSection } from "@/components/sections/RoadmapSection"
import { PromotionalBanner } from "@/components/sections/PromotionalBanner"
import { TokenomicsSection } from "@/components/sections/TokenomicsSection"
import { TeamSection } from "@/components/sections/TeamSection"
import { SectionDivider } from "@/components/ui/SectionDivider"
import { BackToTop } from "@/components/ui/BackToTop"
import { LoadingScreen } from "@/components/ui/LoadingScreen"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  const handleLoadingComplete = () => {
    setShowContent(true)
    setIsLoading(false)
  }

  useEffect(() => {
    // Prevent scrolling during loading
    if (isLoading) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isLoading])

  return (
    <div className="min-h-screen w-full bg-black">
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen key="loading" onLoadingComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      {showContent && (
        <div className="min-h-screen w-full text-white relative bg-black">
          {/* Contenido principal con scroll único */}
          <div className="relative z-10">
            {/* <SlimeNavbar /> */}
            <HomeSection />
            <SectionDivider />
            <AboutSection />
            <SectionDivider />
            <AboutSection2 />
            <SectionDivider />
            <VideogameAvatarsSection />
            <SectionDivider />
            <RoadmapSection />
            <SectionDivider />
            <PromotionalBanner />
            <SectionDivider />
            <TokenomicsSection />
            <SectionDivider />
            <TeamSection />
            <SectionDivider />

            {/* Footer con efectos neon */}
            <footer className="relative py-12 bg-black/90 border-t border-[#BBFF00]/20">
              <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8">
                  <div className="md:col-span-2">
                    <motion.div
                      className="neon-title text-3xl font-bold bg-gradient-to-r from-[#BBFF00] to-[#70FF00] bg-clip-text text-transparent mb-4"
                      whileHover={{ scale: 1.05 }}
                    >
                      SlugDudes
                    </motion.div>
                    <p className="text-gray-400 mb-6 max-w-md">
                      Join the immortal colony of mutant slugs from the primordial slime. The future is viscous, and it
                      starts here.
                    </p>
                    <div className="flex space-x-4">
                      {["🐦", "📱", "💬"].map((social, index) => (
                        <motion.button
                          key={index}
                          className="w-12 h-12 bg-[#BBFF00]/10 rounded-full flex items-center justify-center text-xl hover:bg-[#BBFF00]/20 transition-colors duration-300 border border-[#BBFF00]/30 neon-social"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {social}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[#BBFF00] font-bold mb-4 neon-title text-lg">Quick Links</h4>
                    <ul className="space-y-2">
                      {["Home", "Game", "Roadmap", "Tokenomics", "Team"].map((link) => (
                        <li key={link}>
                          <a
                            href={`#${link.toLowerCase()}`}
                            className="text-gray-400 hover:text-[#BBFF00] transition-colors duration-300 hover:text-shadow-neon"
                          >
                            {link}
                          </a>
                        </li>
                      ))}
                      <li>
                        <a
                          href="/dress-up-game"
                          className="text-gray-400 hover:text-[#BBFF00] transition-colors duration-300 hover:text-shadow-neon"
                        >
                          🎨 Dress Up Game
                        </a>
                      </li>
                      <li>
                        <a
                          href="/meme-generator"
                          className="text-gray-400 hover:text-[#BBFF00] transition-colors duration-300 hover:text-shadow-neon"
                        >
                          🎭 Meme Generator
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[#BBFF00] font-bold mb-4 neon-title text-lg">Community</h4>
                    <ul className="space-y-2">
                      {["Discord", "Telegram", "Twitter", "Reddit"].map((platform) => (
                        <li key={platform}>
                          <a
                            href="#"
                            className="text-gray-400 hover:text-[#BBFF00] transition-colors duration-300 hover:text-shadow-neon"
                          >
                            {platform}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border-t border-[#BBFF00]/20 mt-12 pt-8 text-center">
                  <p className="text-gray-400">
                    © 2024 SlugDudes. All rights reserved. |
                    <span className="text-[#BBFF00] ml-2 slime-subtitle">Powered by Primordial Slime</span>
                  </p>
                </div>
              </div>
            </footer>

            <BackToTop />
          </div>
        </div>
      )}
    </div>
  )
}
