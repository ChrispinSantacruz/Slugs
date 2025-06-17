"use client"

import { motion } from "framer-motion"

export function HomeSection() {
  // Configuración individual para cada botón con medidas universales
  const buttons = [
    { 
      id: 1, 
      text: '',
      position: { top: '12vh', left: '57.3vw' },
      size: { width: '22vw', height: '67vh' },
      action: () => {
        // Navegar al videojuego - asumiendo que existe una ruta
        window.location.href = '/dress-up-game';
      }
    },
    { 
      id: 2, 
      text: '',
      position: { top: '37vh', left: '30vw' },
      size: { width: '6.8vw', height: '44vh' },
      action: () => {
        // Abrir DexTools chart
        window.open('https://www.dextools.io/app/en/solana/pair-explorer/Czfq3xZZDmsdGdUyrNLtRhGc47cXcZtLG4crryfu44zE?t=1750116900418', '_blank');
      }
    },
    { 
      id: 3, 
      text: '',
      position: { top: '34vh', left: '45vw' },
      size: { width: '4vw', height: '12vh' },
      action: () => {
        // Abrir Telegram
        window.open('https://t.me/+K0XqhNsSHPpmNWEx', '_blank');
      }
    },
    { 
      id: 4, 
      text: '',
      position: { top: '41vh', left: '50vw' },
      size: { width: '4vw', height: '12vh' },
      action: () => {
        // Abrir TikTok - asumiendo el handle de SlugDudes
        window.open('https://www.tiktok.com/@slugdudes', '_blank');
      }
    },
    { 
      id: 5, 
      text: '',
      position: { top: '48vh', left: '43vw' },
      size: { width: '4vw', height: '12vh' },
      action: () => {
        // Abrir X (Twitter)
        window.open('https://x.com/SlugDudes', '_blank');
      }
    },
    { 
      id: 6, 
      text: '',
      position: { top: '47vh', left: '80.5vw' },
      size: { width: '3.5vw', height: '10vh' },
      action: () => {
        // Abrir YouTube
        window.open('https://www.youtube.com/', '_blank');
      }
    },
    { 
      id: 7, 
      text: '',
      position: { top: '20vh', left: '86vw' },
      size: { width: '8.3vw', height: '60vh' },
      action: () => {
        // Scroll suave a la sección roadmap
        const roadmapSection = document.getElementById('roadmap') || document.querySelector('[id*="roadmap"]');
        if (roadmapSection) {
          roadmapSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
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
        <video
          src="/animations/home.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="object-cover object-center"
          style={{ 
            objectPosition: 'center center',
            objectFit: 'cover',
            width: '100%',
            height: '100%'
          }}
        />
      </motion.div>

      {/* Botones individuales con posición y tamaño independiente */}
      {buttons.map((button, index) => (
        <motion.button
          key={button.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 0.5, 
            delay: 0.8 + (index * 0.1),
            ease: "easeOut"
          }}
          className="absolute z-10 bg-transparent border-none cursor-pointer"
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
            background: 'transparent',
            outline: 'none',
          }}
          onClick={button.action}
        >
          {button.text}
        </motion.button>
      ))}
    </section>
  )
} 