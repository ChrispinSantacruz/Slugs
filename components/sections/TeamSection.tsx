"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function TeamSection() {
  // Miembros del equipo
  const teamMembers = [
    {
      name: "SlugPro",
      role: "Support",
      avatar: "/images/team/Slugrelleno.png",
    },
    {
      name: "Camilo",
      role: "Developer",
      avatar: "/images/team/camilo.png", 
    },
    {
      name: "Luthor Barbosa",
      role: "Dev - Designer",
      avatar: "/images/team/luthorbarbosa.png",
    },
    {
      name: "Neo Whinters", 
      role: "Programming - Dev",
      avatar: "/images/team/neowhinters.png",
    },
    {
      name: "Dereckforreal",
      role: "Bot",
      avatar: "/images/team/dereckforreal.png",
    }
  ]

  return (
    <section 
      id="team" 
      className="py-20 relative"
      style={{
        backgroundImage: "url('/images/backgrounds/backgroundteam.png')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh"
      }}
    >
      {/* Overlay sutil para mejor contraste con el contenido */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
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
            Conoce a los cerebros detrás del universo SlugDudes
          </p>
        </motion.div>

        {/* Disposición horizontal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.5, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="neon-card hover:scale-105 transition-all duration-300 relative bg-black/90 border-[#BBFF00]/40 hover:border-[#BBFF00]/80 h-full">
                <CardContent className="p-6 text-center h-full flex flex-col justify-center">
                  <motion.div
                    className="relative w-40 h-40 mx-auto mb-6 rounded-2xl overflow-hidden border-2 border-[#BBFF00]/40 bg-black/50"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      fill
                      className="object-contain object-center p-1"
                      sizes="160px"
                    />
                  </motion.div>
                  <h3 className="text-lg font-bold text-[#BBFF00] mb-3 neon-title">{member.name}</h3>
                  <p className="text-[#70FF00] font-semibold text-sm">{member.role}</p>
                </CardContent>
              </Card>

              {/* Esquinas futuristas sin aura verde */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#BBFF00] -translate-x-1 -translate-y-1 group-hover:w-6 group-hover:h-6 transition-all duration-300"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#BBFF00] translate-x-1 -translate-y-1 group-hover:w-6 group-hover:h-6 transition-all duration-300"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#70FF00] -translate-x-1 translate-y-1 group-hover:w-6 group-hover:h-6 transition-all duration-300"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#70FF00] translate-x-1 translate-y-1 group-hover:w-6 group-hover:h-6 transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 