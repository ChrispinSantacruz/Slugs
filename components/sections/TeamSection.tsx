"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TEAM_MEMBERS } from "@/lib/constants"

export function TeamSection() {
  return (
    <section 
      id="team" 
      className="py-20 relative"
      style={{
        backgroundImage: "url('/images/backgrounds/backgroundteam.png')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat"
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <Card className="neon-card hover:scale-105 transition-transform duration-300 relative z-10 bg-black/80 border-[#BBFF00]/30">
                <CardContent className="p-6 text-center">
                  <motion.div
                    className="relative w-40 h-40 mx-auto mb-4 rounded-2xl overflow-hidden border-4 border-[#BBFF00]/50 bg-gradient-to-br from-[#BBFF00]/10 to-[#70FF00]/10"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      fill
                      className="object-contain object-center p-2"
                      sizes="160px"
                    />
                  </motion.div>
                  <h3 className="text-xl font-bold text-[#BBFF00] mb-2 neon-title">{member.name}</h3>
                  <p className="text-[#70FF00] font-semibold mb-3 text-sm">{member.role}</p>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{member.description}</p>
                  <div className="flex flex-wrap justify-center gap-1">
                    {member.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="border-[#BBFF00]/50 text-[#BBFF00] neon-badge text-xs"
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
  )
} 