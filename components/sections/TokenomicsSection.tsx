"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function TokenomicsSection() {
  return (
    <section 
      id="tokenomics" 
      className="relative w-full overflow-hidden bg-gradient-to-b from-green-900 to-black"
      style={{
        position: 'relative',
        zIndex: 1,
        minHeight: '350vh',
        height: '350vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* Background para Desktop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 w-full h-full hidden md:block"
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
          src="/images/backgrounds/tokenomicsv2_02.png"
          alt="Tokenomics Background"
          fill
          className="object-contain object-center"
          style={{ 
            objectPosition: 'center center',
            objectFit: 'contain',
            width: '100%',
            height: '100%'
          }}
          priority={false}
          quality={100}
          sizes="100vw"
        />
      </motion.div>

      {/* Background para Mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 w-full h-full block md:hidden"
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
          src="/images/backgroundResponsive/tokenomics.png"
          alt="Tokenomics Background Mobile"
          fill
          className="object-contain object-center"
          style={{ 
            objectPosition: 'center center',
            objectFit: 'contain',
            width: '100%',
            height: '100%'
          }}
          priority={false}
          quality={100}
          sizes="100vw"
        />
      </motion.div>
    </section>
  )
}
