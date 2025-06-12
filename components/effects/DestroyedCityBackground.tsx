"use client"

import { motion } from "framer-motion"

export function DestroyedCityBackground() {
  return (
    <div className="fixed inset-0 z-0 opacity-30">
      {/* Fondo base de ciudad destruida */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-black"></div>

      {/* Siluetas de edificios destruidos */}
      <svg
        className="absolute bottom-0 w-full h-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="buildingGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1a1a1a" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#000000" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="smokeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#333333" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Edificios destruidos */}
        <polygon
          points="0,800 0,400 80,380 120,420 180,350 220,390 280,320 320,360 380,300 420,340 480,280 520,320 580,250 620,290 680,220 720,260 780,200 820,240 880,180 920,220 980,160 1020,200 1080,140 1120,180 1180,120 1220,160 1280,100 1320,140 1380,80 1440,120 1440,800"
          fill="url(#buildingGradient)"
        />

        {/* Edificios de segundo plano */}
        <polygon
          points="0,800 0,500 100,480 150,520 200,450 250,490 300,420 350,460 400,400 450,440 500,380 550,420 600,350 650,390 700,320 750,360 800,300 850,340 900,280 950,320 1000,260 1050,300 1100,240 1150,280 1200,220 1250,260 1300,200 1350,240 1400,180 1440,220 1440,800"
          fill="url(#buildingGradient)"
          opacity="0.7"
        />

        {/* Humo y partículas */}
        {[...Array(8)].map((_, i) => (
          <motion.ellipse
            key={`smoke-${i}`}
            cx={200 + i * 150}
            cy={300 + Math.random() * 200}
            rx={30 + Math.random() * 20}
            ry={60 + Math.random() * 40}
            fill="url(#smokeGradient)"
            animate={{
              cy: [300 + Math.random() * 200, 100 + Math.random() * 100, 300 + Math.random() * 200],
              opacity: [0.3, 0.6, 0.3],
              rx: [30 + Math.random() * 20, 50 + Math.random() * 30, 30 + Math.random() * 20],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </svg>

      {/* Efectos de fuego/resplandor */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-orange-900/20 via-red-900/10 to-transparent"></div>

      {/* Partículas flotantes de ceniza */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`ash-${i}`}
          className="absolute w-1 h-1 bg-gray-400 rounded-full opacity-40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Overlay de atmósfera */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-gray-900/20"></div>
    </div>
  )
}
