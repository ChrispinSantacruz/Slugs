"use client"

import { motion } from "framer-motion"
import { Zap, Users, TrendingUp, Rocket } from "lucide-react"
import { SlimeTitle } from "@/components/ui/SlimeTitle"
import { SlimeCard } from "@/components/ui/SlimeCard"
import { TokenomicsChart } from "@/components/ui/TokenomicsChart"
import { PriceChart } from "@/components/ui/PriceChart"
import { SlimeCalculator } from "@/components/ui/SlimeCalculator"
import { TOKENOMICS_STATS } from "@/lib/constants"
import { fadeInUp } from "@/utils/animations"

const iconMap = {
  TrendingUp,
  Zap,
  Users,
  Rocket,
}

export function TokenomicsSection() {
  return (
    <section id="tokenomics" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <SlimeTitle size="lg" className="mb-6">
            TOKENOMICS
          </SlimeTitle>
          <p className="text-xl text-[#BBFF00] max-w-2xl mx-auto font-bold slime-subtitle">
            Discover the economic structure of the SlugDudes ecosystem
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {TOKENOMICS_STATS.map((stat, index) => {
            const IconComponent = iconMap[stat.icon as keyof typeof iconMap]
            return (
              <SlimeCard key={stat.title} delay={index * 0.1}>
                <div className="text-center">
                  <IconComponent className="h-12 w-12 mx-auto mb-4" style={{ color: stat.color }} />
                  <h3 className="text-2xl font-bold mb-2" style={{ color: stat.color }}>
                    {stat.value}
                  </h3>
                  <p className="text-gray-300 font-semibold">{stat.title}</p>
                </div>
              </SlimeCard>
            )
          })}
        </div>

        {/* Charts and Calculator Grid - Horizontal Layout */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Price Chart */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <PriceChart />
          </motion.div>

          {/* Pie Chart */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <TokenomicsChart />
          </motion.div>

          {/* Calculator */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <SlimeCalculator />
          </motion.div>
        </div>

        {/* Trading Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 grid md:grid-cols-2 gap-8"
        >
          <SlimeCard>
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-[#BBFF00] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#BBFF00] mb-2">Live Trading</h3>
              <p className="text-gray-300">
                Trade SLUG tokens on major DEX platforms with real-time price updates and low slippage.
              </p>
            </div>
          </SlimeCard>

          <SlimeCard>
            <div className="text-center">
              <Rocket className="h-12 w-12 text-[#70FF00] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#70FF00] mb-2">Solana Ecosystem</h3>
              <p className="text-gray-300">
                Built on Solana for lightning-fast transactions and minimal fees. Join the fastest growing ecosystem.
              </p>
            </div>
          </SlimeCard>
        </motion.div>
      </div>
    </section>
  )
}
