"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpDown, TrendingUp } from "lucide-react"

export function SlimeCalculator() {
  const [solAmount, setSolAmount] = useState<string>("1")
  const [usdtAmount, setUsdtAmount] = useState<string>("72.45")
  const [isReversed, setIsReversed] = useState(false)
  const [solPrice] = useState(72.45) // Mock SOL price

  useEffect(() => {
    if (!isReversed) {
      const usdt = (Number.parseFloat(solAmount) * solPrice).toFixed(2)
      setUsdtAmount(usdt)
    } else {
      const sol = (Number.parseFloat(usdtAmount) / solPrice).toFixed(6)
      setSolAmount(sol)
    }
  }, [solAmount, usdtAmount, solPrice, isReversed])

  const handleSolChange = (value: string) => {
    setSolAmount(value)
    setIsReversed(false)
  }

  const handleUsdtChange = (value: string) => {
    setUsdtAmount(value)
    setIsReversed(true)
  }

  const swapCurrencies = () => {
    const tempSol = solAmount
    const tempUsdt = usdtAmount
    setSolAmount(tempUsdt)
    setUsdtAmount(tempSol)
    setIsReversed(!isReversed)
  }

  return (
    <Card className="slime-card bg-gradient-to-br from-[#BBFF00]/20 to-[#70FF00]/20 border-[#BBFF00]/40 h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-[#BBFF00] text-center text-lg flex items-center justify-center gap-2">
          <TrendingUp className="h-4 w-4" />
          SOL/USDT Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1">
            <label className="text-xs font-bold text-[#BBFF00]">Solana (SOL)</label>
            <input
              type="number"
              value={solAmount}
              onChange={(e) => handleSolChange(e.target.value)}
              className="w-full p-2 bg-black/50 border-2 border-[#BBFF00]/30 rounded-lg text-white font-bold focus:border-[#BBFF00] focus:outline-none text-sm"
              placeholder="Enter SOL amount"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-[#70FF00]">Tether (USDT)</label>
            <input
              type="number"
              value={usdtAmount}
              onChange={(e) => handleUsdtChange(e.target.value)}
              className="w-full p-2 bg-black/50 border-2 border-[#70FF00]/30 rounded-lg text-white font-bold focus:border-[#70FF00] focus:outline-none text-sm"
              placeholder="Enter USDT amount"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              onClick={swapCurrencies}
              variant="outline"
              size="sm"
              className="border-[#BBFF00] text-[#BBFF00] hover:bg-[#BBFF00] hover:text-black"
            >
              <ArrowUpDown className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>

        <div className="text-center p-2 bg-[#BBFF00]/10 rounded-lg border border-[#BBFF00]/20">
          <p className="text-xs text-gray-300">Current SOL Price</p>
          <p className="text-lg font-bold text-[#BBFF00]">${solPrice}</p>
        </div>
      </CardContent>
    </Card>
  )
}
