"use client"

import { motion } from "framer-motion"
import { Gamepad2 } from "lucide-react"
import Link from "next/link"

export function VideogameAvatarsSection() {
  return (
    <section 
      id="videogame-avatars" 
      className="py-20 relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/backgrounds/BackgroundGame.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Overlay para mejor contraste si es necesario */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Link href="/dress-up-game">
              <motion.button
                className="w-64 h-64 bg-blue-600 hover:bg-blue-700 transition-all duration-300 rounded-2xl flex items-center justify-center shadow-2xl border-4 border-blue-400 hover:border-blue-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-center text-white">
                  <Gamepad2 className="w-16 h-16 mx-auto mb-4 group-hover:animate-pulse" />
                  <span className="text-2xl font-bold block">CREATE</span>
                  <span className="text-2xl font-bold block">YOUR SLUG</span>
                </div>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
