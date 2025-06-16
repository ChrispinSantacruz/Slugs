"use client"

import { motion } from "framer-motion"
import { Gamepad2 } from "lucide-react"
import Link from "next/link"

export function VideogameAvatarsSection() {
  return (
    <section 
      id="videogame-avatars" 
      className="relative min-h-[200vh] flex items-center justify-center"
      style={{
        paddingTop: "480px",
        paddingBottom: "480px",
        backgroundImage: "url('/images/backgrounds/BackgroundGame.png')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Overlay para mejor contraste si es necesario */}
      <div className="absolute inset-0 bg-black/20"></div>
      

    </section>
  )
}
