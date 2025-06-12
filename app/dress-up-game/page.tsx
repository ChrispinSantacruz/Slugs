"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Download, Share2, Shuffle, RotateCcw } from "lucide-react"
import Link from "next/link"

interface SlugCustomization {
  skin: string
  eyes: string
  mouth: string
  hat: string
  jacket: string
  chain: string
  weapon: string
}

const customizationOptions = {
  skin: ["🟢", "🟡", "🔵", "🟣", "🟠", "⚫"],
  eyes: ["👀", "😎", "🤖", "👁️", "🔥", "⭐"],
  mouth: ["😊", "😈", "🤖", "😵", "🤪", "😴"],
  hat: ["🎩", "👑", "🧢", "🎓", "⛑️", "🪖"],
  jacket: ["🦺", "🧥", "👔", "🥼", "🎽", "🦸"],
  chain: ["📿", "⛓️", "🔗", "💎", "🏅", "🎖️"],
  weapon: ["⚔️", "🔫", "🏹", "🔨", "⚡", "🚀"],
}

export default function DressUpGame() {
  const [slug, setSlug] = useState<SlugCustomization>({
    skin: "🟢",
    eyes: "👀",
    mouth: "😊",
    hat: "",
    jacket: "",
    chain: "",
    weapon: "",
  })

  const [activeCategory, setActiveCategory] = useState<keyof SlugCustomization>("skin")

  const updateSlug = (category: keyof SlugCustomization, value: string) => {
    setSlug((prev) => ({
      ...prev,
      [category]: prev[category] === value ? "" : value,
    }))
  }

  const randomizeSlug = () => {
    const newSlug: SlugCustomization = {} as SlugCustomization
    Object.keys(customizationOptions).forEach((category) => {
      const options = customizationOptions[category as keyof typeof customizationOptions]
      newSlug[category as keyof SlugCustomization] =
        Math.random() > 0.3 ? options[Math.floor(Math.random() * options.length)] : ""
    })
    setSlug(newSlug)
  }

  const resetSlug = () => {
    setSlug({
      skin: "🟢",
      eyes: "👀",
      mouth: "😊",
      hat: "",
      jacket: "",
      chain: "",
      weapon: "",
    })
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#BBFF00]/20 via-transparent to-[#70FF00]/20" />
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-[#BBFF00]/20 rounded-full blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="p-6 border-b border-[#BBFF00]/20">
          <div className="container mx-auto flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" className="text-[#BBFF00] hover:text-[#70FF00]">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Colony
              </Button>
            </Link>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-[#BBFF00] to-[#70FF00] bg-clip-text text-transparent">
              SlugDude Creator
            </h1>
            <div className="flex gap-2">
              <Button
                onClick={randomizeSlug}
                variant="outline"
                className="border-[#BBFF00] text-[#BBFF00] hover:bg-[#BBFF00] hover:text-black"
              >
                <Shuffle className="h-4 w-4" />
              </Button>
              <Button
                onClick={resetSlug}
                variant="outline"
                className="border-[#70FF00] text-[#70FF00] hover:bg-[#70FF00] hover:text-black"
              >
                <RotateCcw className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </header>

        <div className="container mx-auto p-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Slug Display */}
            <div className="lg:col-span-1">
              <Card className="bg-gradient-to-br from-[#BBFF00]/10 to-[#70FF00]/10 border-[#BBFF00]/20 sticky top-6">
                <CardHeader>
                  <CardTitle className="text-center text-[#BBFF00]">Your SlugDude</CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.div
                    className="aspect-square bg-black/50 rounded-2xl flex items-center justify-center relative overflow-hidden mb-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative text-8xl">
                      {/* Base Slug */}
                      <motion.span
                        key={slug.skin}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="relative z-10"
                      >
                        {slug.skin}
                      </motion.span>

                      {/* Layered Accessories */}
                      <AnimatePresence>
                        {slug.jacket && (
                          <motion.span
                            key={`jacket-${slug.jacket}`}
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0, rotate: 180 }}
                            className="absolute top-0 left-0 text-6xl"
                          >
                            {slug.jacket}
                          </motion.span>
                        )}
                        {slug.hat && (
                          <motion.span
                            key={`hat-${slug.hat}`}
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: -20, opacity: 1 }}
                            exit={{ y: -50, opacity: 0 }}
                            className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-4xl"
                          >
                            {slug.hat}
                          </motion.span>
                        )}
                        {slug.eyes && (
                          <motion.span
                            key={`eyes-${slug.eyes}`}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            className="absolute top-4 left-1/2 transform -translate-x-1/2 text-3xl"
                          >
                            {slug.eyes}
                          </motion.span>
                        )}
                        {slug.mouth && (
                          <motion.span
                            key={`mouth-${slug.mouth}`}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            className="absolute top-8 left-1/2 transform -translate-x-1/2 text-2xl"
                          >
                            {slug.mouth}
                          </motion.span>
                        )}
                        {slug.chain && (
                          <motion.span
                            key={`chain-${slug.chain}`}
                            initial={{ scale: 0, rotate: 90 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0, rotate: -90 }}
                            className="absolute top-6 left-1/2 transform -translate-x-1/2 text-3xl"
                          >
                            {slug.chain}
                          </motion.span>
                        )}
                        {slug.weapon && (
                          <motion.span
                            key={`weapon-${slug.weapon}`}
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 20, opacity: 1 }}
                            exit={{ x: 50, opacity: 0 }}
                            className="absolute top-4 -right-2 text-4xl"
                          >
                            {slug.weapon}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#BBFF00]/10 to-transparent" />
                  </motion.div>

                  <div className="flex gap-2">
                    <Button className="flex-1 bg-gradient-to-r from-[#BBFF00] to-[#70FF00] text-black font-bold hover:scale-105 transition-transform duration-300">
                      <Download className="mr-2 h-4 w-4" />
                      Save
                    </Button>
                    <Button
                      variant="outline"
                      className="border-[#BBFF00] text-[#BBFF00] hover:bg-[#BBFF00] hover:text-black"
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Customization Options */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {/* Category Tabs */}
                <div className="flex flex-wrap gap-2">
                  {Object.keys(customizationOptions).map((category) => (
                    <Button
                      key={category}
                      onClick={() => setActiveCategory(category as keyof SlugCustomization)}
                      variant={activeCategory === category ? "default" : "outline"}
                      className={
                        activeCategory === category
                          ? "bg-gradient-to-r from-[#BBFF00] to-[#70FF00] text-black font-bold"
                          : "border-[#BBFF00]/50 text-[#BBFF00] hover:bg-[#BBFF00]/10"
                      }
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </Button>
                  ))}
                </div>

                {/* Options Grid */}
                <Card className="bg-gradient-to-br from-[#BBFF00]/5 to-[#70FF00]/5 border-[#BBFF00]/20">
                  <CardHeader>
                    <CardTitle className="text-[#BBFF00] capitalize">Choose {activeCategory}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 gap-3">
                      {/* Clear Option */}
                      <motion.button
                        onClick={() => updateSlug(activeCategory, "")}
                        className={`aspect-square rounded-lg border-2 flex items-center justify-center text-2xl transition-all duration-300 ${
                          slug[activeCategory] === ""
                            ? "border-[#BBFF00] bg-[#BBFF00]/20"
                            : "border-gray-600 hover:border-[#BBFF00]/50"
                        }`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        ❌
                      </motion.button>

                      {/* Options */}
                      {customizationOptions[activeCategory].map((option, index) => (
                        <motion.button
                          key={`${activeCategory}-${option}-${index}`}
                          onClick={() => updateSlug(activeCategory, option)}
                          className={`aspect-square rounded-lg border-2 flex items-center justify-center text-3xl transition-all duration-300 ${
                            slug[activeCategory] === option
                              ? "border-[#BBFF00] bg-[#BBFF00]/20"
                              : "border-gray-600 hover:border-[#BBFF00]/50"
                          }`}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          {option}
                        </motion.button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Stats */}
                <Card className="bg-gradient-to-br from-[#70FF00]/5 to-[#BBFF00]/5 border-[#70FF00]/20">
                  <CardContent className="p-6">
                    <h3 className="text-[#70FF00] font-bold mb-4">SlugDude Stats</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#BBFF00]">
                          {Object.values(slug).filter(Boolean).length}
                        </div>
                        <div className="text-sm text-gray-400">Accessories</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#BBFF00]">{Math.floor(Math.random() * 100) + 50}</div>
                        <div className="text-sm text-gray-400">Slime Power</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#BBFF00]">{Math.floor(Math.random() * 10) + 1}</div>
                        <div className="text-sm text-gray-400">Rarity</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-[#BBFF00]">∞</div>
                        <div className="text-sm text-gray-400">Immortality</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
