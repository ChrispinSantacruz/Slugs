"use client"

import { SlimeNavbar } from "@/components/layout/SlimeNavbar"
import { HeroSection } from "@/components/sections/HeroSection"
import { VideogameAvatarsSection } from "@/components/sections/VideogameAvatarsSection"
import { RoadmapSection } from "@/components/sections/RoadmapSection"
import { PromotionalBanner } from "@/components/sections/PromotionalBanner"
import { TokenomicsSection } from "@/components/sections/TokenomicsSection"
import { BackToTop } from "@/components/ui/BackToTop"
import { LoadingScreen } from "@/components/ui/LoadingScreen"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TEAM_MEMBERS } from "@/lib/constants"
import { useState, useEffect } from "react"

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  const handleLoadingComplete = () => {
    setIsLoading(false)
    setTimeout(() => setShowContent(true), 300)
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
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen key="loading" onLoadingComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      {showContent && (
        <div className="min-h-screen w-full text-white relative">
          {/* Contenido principal con scroll único */}
          <div className="relative z-10">
            <SlimeNavbar />
            <HeroSection />
            <VideogameAvatarsSection />
            <RoadmapSection />
            <PromotionalBanner />
            <TokenomicsSection />

            {/* Team Section con efectos neon */}
            <section id="team" className="py-20 relative">
              <div className="container mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <div className="relative">
                    <h2 className="neon-title text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#BBFF00] to-[#70FF00] bg-clip-text text-transparent">
                      TEAM
                    </h2>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#BBFF00]/10 via-[#70FF00]/15 to-[#BBFF00]/10 blur-xl -z-10"></div>
                  </div>
                  <p className="text-xl text-[#BBFF00] max-w-2xl mx-auto font-bold slime-subtitle">
                    Meet the masterminds behind the SlugDudes universe
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {TEAM_MEMBERS.map((member, index) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="relative group"
                    >
                      <Card className="neon-card hover:scale-105 transition-transform duration-300 relative z-10">
                        <CardContent className="p-8 text-center">
                          <motion.div
                            className="text-6xl mb-4"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ duration: 0.3 }}
                          >
                            {member.avatar}
                          </motion.div>
                          <h3 className="text-2xl font-bold text-[#BBFF00] mb-2 neon-title">{member.name}</h3>
                          <p className="text-[#70FF00] font-semibold mb-4">{member.role}</p>
                          <p className="text-gray-300 mb-6">{member.description}</p>
                          <div className="flex flex-wrap justify-center gap-2">
                            {member.skills.map((skill) => (
                              <Badge
                                key={skill}
                                variant="outline"
                                className="border-[#BBFF00]/50 text-[#BBFF00] neon-badge"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>

                      {/* Marco neon */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#BBFF00]/10 via-[#70FF00]/15 to-[#BBFF00]/10 blur-sm group-hover:blur-md transition-all duration-300 -z-10"></div>

                      {/* Esquinas futuristas */}
                      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#BBFF00] -translate-x-2 -translate-y-2 group-hover:w-8 group-hover:h-8 transition-all duration-300"></div>
                      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#BBFF00] translate-x-2 -translate-y-2 group-hover:w-8 group-hover:h-8 transition-all duration-300"></div>
                      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#70FF00] -translate-x-2 translate-y-2 group-hover:w-8 group-hover:h-8 transition-all duration-300"></div>
                      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#70FF00] translate-x-2 translate-y-2 group-hover:w-8 group-hover:h-8 transition-all duration-300"></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

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
    </>
  )
}
