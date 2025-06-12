"use client"

import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp } from "lucide-react"
import { PRICE_HISTORY } from "@/lib/constants"

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black/90 border border-[#BBFF00]/50 rounded-lg p-3">
        <p className="text-[#BBFF00] font-bold">{`Time: ${label}`}</p>
        <p className="text-white">{`Price: $${payload[0].value}`}</p>
        <p className="text-[#70FF00]">{`Volume: ${payload[1]?.value?.toLocaleString()}`}</p>
      </div>
    )
  }
  return null
}

export function PriceChart() {
  const currentPrice = PRICE_HISTORY[PRICE_HISTORY.length - 1].price
  const previousPrice = PRICE_HISTORY[PRICE_HISTORY.length - 2].price
  const priceChange = ((currentPrice - previousPrice) / previousPrice) * 100

  return (
    <Card className="slime-card bg-gradient-to-br from-[#BBFF00]/10 to-[#70FF00]/10 border-[#BBFF00]/30">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-[#BBFF00] flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            SLUG/USDT
          </CardTitle>
          <div className="text-right">
            <p className="text-2xl font-bold text-[#BBFF00]">${currentPrice}</p>
            <Badge className={`${priceChange >= 0 ? "bg-green-500" : "bg-red-500"} text-white`}>
              {priceChange >= 0 ? "+" : ""}
              {priceChange.toFixed(2)}%
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={PRICE_HISTORY}>
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#BBFF00" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#70FF00" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#BBFF00" opacity={0.2} />
            <XAxis dataKey="time" stroke="#BBFF00" fontSize={12} />
            <YAxis stroke="#BBFF00" fontSize={12} />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="price"
              stroke="#BBFF00"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorPrice)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
