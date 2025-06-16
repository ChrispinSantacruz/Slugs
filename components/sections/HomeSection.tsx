"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function HomeSection() {
  // Configuración individual para cada botón
  const buttons = [
    { 
      id: 1, 
      text: '',
      position: { top: '40px', left: '778px' },
      size: { width: '300px', height: '450px' },
      color: 'bg-red-500/30 hover:bg-red-500/40 border-red-400/50 hover:shadow-red-500/25' // Rojo
    },
    { 
      id: 2, 
      text: '',
      position: { top: '220px', left: '400px' },
      size: { width: '130px', height: '270px' },
      color: 'bg-blue-500/30 hover:bg-blue-500/40 border-blue-400/50 hover:shadow-blue-500/25' // Azul
    },
    { 
      id: 3, 
      text: '',
      position: { top: '205px', left: '615px' },
      size: { width: '50px', height: '70px' },
      color: 'bg-green-500/30 hover:bg-green-500/40 border-green-400/50 hover:shadow-green-500/25' // Verde
    },
    { 
      id: 4, 
      text: '',
      position: { top: '250px', left: '680px' },
      size: { width: '50px', height: '70px' },
      color: 'bg-yellow-500/30 hover:bg-yellow-500/40 border-yellow-400/50 hover:shadow-yellow-500/25' // Amarillo
    },
    { 
      id: 5, 
      text: '',
      position: { top: '290px', left: '588px' },
      size: { width: '50px', height: '72px' },
      color: 'bg-purple-500/30 hover:bg-purple-500/40 border-purple-400/50 hover:shadow-purple-500/25' // Morado
    },
    { 
      id: 6, 
      text: '',
      position: { top: '280px', left: '1100px' },
      size: { width: '50px', height: '70px' },
      color: 'bg-pink-500/30 hover:bg-pink-500/40 border-pink-400/50 hover:shadow-pink-500/25' // Rosa
    },
    { 
      id: 7, 
      text: '',
      position: { top: '120px', left: '1160px' },
      size: { width: '160px', height: '360px' },
      color: 'bg-orange-500/30 hover:bg-orange-500/40 border-orange-400/50 hover:shadow-orange-500/25' // Naranja
    },
  ]

  return (
    <section 
      id="home-banner" 
      className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-green-900 to-black"
      style={{
        position: 'relative',
        zIndex: 1,
        minHeight: '100vh',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 w-full h-full"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1
        }}
      >
        <Image
          src="/images/backgrounds/slugs_background_web-01.png"
          alt="Slug Dudes Background"
          fill
          className="object-cover object-center"
          style={{ 
            objectPosition: 'center center',
            objectFit: 'cover',
            width: '100%',
            height: '100%'
          }}
          priority={true}
          quality={100}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkrHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R7p4v8AHTAHcXRAgjfQdg6QkfO8ueWOhJHvwQAWZKFMpqGTTQfqk4fk66kE2W1g3sHoHf6U8PfHlGAqI5+P7lnP7Q6mOkXdG6j2l5IwAiEcXFdYCOMhC8bGAMq2bFKyXG+lJFKShN4QD/P8AH/aWQmAzSAQJm/xJC6WtEtZvmeyJyBaBTxRNS30Fb5YIEBZTZPkTSN5DdQCFJG4K1tXGANYKJNcXNJyLRUGgGQMYTJ6/4YcNzQUWbKNf57MvWGpkmGAJCRMJJ6cZG44iDlFg3eA/9k="
        />
      </motion.div>

      {/* Botones individuales con posición y tamaño independiente */}
      {buttons.map((button, index) => (
        <motion.button
          key={button.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.5, 
            delay: 0.8 + (index * 0.1),
            ease: "easeOut"
          }}
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.95 }}
          className={`absolute z-10 ${button.color} rounded-lg 
                     text-white font-medium transition-all duration-300 
                     backdrop-blur-sm shadow-lg`}
          style={{
            top: button.position.top,
            left: button.position.left,
            width: button.size.width,
            height: button.size.height,
            minWidth: button.size.width,
            minHeight: button.size.height,
            maxWidth: button.size.width,
            maxHeight: button.size.height,
            padding: '0',
            fontSize: '0',
            overflow: 'hidden',
          }}
          onClick={() => console.log(`Clicked ${button.text}`)}
        >
          {button.text}
        </motion.button>
      ))}
    </section>
  )
} 