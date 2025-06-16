"use client"

import { motion } from "framer-motion"

export function RoadmapSection() {
  return (
    <section 
      id="roadmap" 
      className="relative min-h-[150vh] flex items-center justify-center"
      style={{
        paddingTop: "320px",
        paddingBottom: "320px",
        backgroundImage: "url('/images/map.png')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Overlay sutil para mejor contraste si es necesario */}
      <div className="absolute inset-0 bg-black/10"></div>
    </section>
  )
}
