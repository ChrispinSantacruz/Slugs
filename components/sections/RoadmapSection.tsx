"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { SlimeTitle } from "@/components/ui/SlimeTitle"
import { SlimeCard } from "@/components/ui/SlimeCard"

export function RoadmapSection() {
  return (
    <section id="roadmap" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <SlimeTitle size="lg" className="mb-6">
            OBJETIVO
          </SlimeTitle>
          <p className="text-xl text-[#BBFF00] max-w-2xl mx-auto font-bold slime-subtitle">
            Nuestra misión hacia la dominación viscosa del universo
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <SlimeCard className="max-w-4xl w-full">
            <div className="relative">
              <Image
                src="/images/slug-banner.jpg"
                alt="SlugDudes Roadmap - Objetivo"
                width={800}
                height={600}
                quality={85}
                sizes="(max-width: 768px) 100vw, 800px"
                className="w-full h-auto rounded-lg border-2 border-[#BBFF00]/30"
                style={{
                  filter: "drop-shadow(0 0 20px rgba(187, 255, 0, 0.3))",
                }}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkrHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R7p4v8AHTAHcXRAgjfQdg6QkfO8ueWOhJHvwQAWZKFMpqGTTQfqk4fk66kE2W1g3sHoHf6U8PfHlGAqI5+P7lnP7Q6mOkXdG6j2l5IwAiEcXFdYCOMhC8bGAMq2bFKyXG+lJFKShN4QD/P8AH/aWQmAzSAQJm/xJC6WtEtZvmeyJyBaBTxRNS30Fb5YIEBZTZPkTSN5DdQCFJG4K1tXGANYKJNcXNJyLRUGgGQMYTJ6/4YcNzQUWbKNf57MvWGpkmGAJCRMJJ6cZG44iDlFg3eA/9k="
              />

              {/* Overlay con efectos neon */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 rounded-lg"></div>

              {/* Esquinas futuristas para la imagen */}
              <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-[#BBFF00]"></div>
              <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-[#BBFF00]"></div>
              <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-[#70FF00]"></div>
              <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-[#70FF00]"></div>
            </div>

            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold text-[#BBFF00] mb-4 neon-title">LA EVOLUCIÓN CONTINÚA</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Desde las profundidades del limo primordial hasta la conquista galáctica, los SlugDudes están destinados
                a transformar el universo en su hogar viscoso. Únete a la colonia inmortal y sé parte de la revolución
                babosa.
              </p>
            </div>
          </SlimeCard>
        </motion.div>
      </div>
    </section>
  )
}
