"use client"

import { motion } from "framer-motion"
import { SlimeTitle } from "@/components/ui/SlimeTitle"
import { NAVIGATION_ITEMS } from "@/lib/constants"

export function SlimeNavbar() {
  return (
    <motion.nav
      className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-[#BBFF00]/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div whileHover={{ scale: 1.05 }}>
            <SlimeTitle size="sm" animate={false}>
              SlugDudes
            </SlimeTitle>
          </motion.div>

          <div className="hidden md:flex space-x-8">
            {NAVIGATION_ITEMS.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-white hover:text-[#BBFF00] transition-colors duration-300 relative group font-bold"
                whileHover={{ y: -2, scale: 1.05 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.label}
                <motion.div
                  className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-[#BBFF00] to-[#70FF00] group-hover:w-full transition-all duration-300 rounded-full"
                  whileHover={{ boxShadow: "0 0 10px #BBFF00" }}
                />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Efecto de ondas simplificado */}
      <div className="absolute bottom-0 left-0 w-full overflow-visible z-10 pointer-events-none translate-y-full">
        <svg
          width="100%"
          height="60"
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#BBFF00" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#70FF00" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          {/* Onda principal */}
          <motion.path
            d="M0,0 L1440,0 
               C1380,15 1350,25 1300,20 
               C1250,15 1200,35 1150,40 
               C1100,45 1050,25 1000,20 
               C950,15 900,30 850,35 
               C800,40 750,20 700,15 
               C650,10 600,25 550,30 
               C500,35 450,20 400,15 
               C350,10 300,25 250,30 
               C200,35 150,20 100,15 
               C50,10 0,20 0,20 Z"
            fill="url(#waveGradient)"
            animate={{
              d: [
                "M0,0 L1440,0 C1380,15 1350,25 1300,20 C1250,15 1200,35 1150,40 C1100,45 1050,25 1000,20 C950,15 900,30 850,35 C800,40 750,20 700,15 C650,10 600,25 550,30 C500,35 450,20 400,15 C350,10 300,25 250,30 C200,35 150,20 100,15 C50,10 0,20 0,20 Z",
                "M0,0 L1440,0 C1380,20 1350,15 1300,25 C1250,35 1200,20 1150,15 C1100,10 1050,30 1000,35 C950,40 900,20 850,15 C800,10 750,30 700,35 C650,40 600,20 550,15 C500,10 450,30 400,35 C350,40 300,20 250,15 C200,10 150,30 100,35 C50,40 0,15 0,15 Z",
                "M0,0 L1440,0 C1380,15 1350,25 1300,20 C1250,15 1200,35 1150,40 C1100,45 1050,25 1000,20 C950,15 900,30 850,35 C800,40 750,20 700,15 C650,10 600,25 550,30 C500,35 450,20 400,15 C350,10 300,25 250,30 C200,35 150,20 100,15 C50,10 0,20 0,20 Z",
              ],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          {/* Pequeñas burbujas en las ondas */}
          {[...Array(5)].map((_, i) => (
            <motion.circle
              key={i}
              cx={200 + i * 200}
              cy={25}
              r={3}
              fill="#BBFF00"
              opacity={0.7}
              animate={{
                cy: [25, 15, 25],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </svg>
      </div>
    </motion.nav>
  )
}
