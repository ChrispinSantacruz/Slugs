"use client"

import Image from "next/image"

export function SectionDivider() {
  return (
    <div className="w-full h-20 flex items-center justify-center relative overflow-hidden">
      <Image
        src="/images/backgrounds/division.png"
        alt="Section Divider"
        width={1920}
        height={80}
        className="w-full h-full object-cover"
        quality={100}
        priority={false}
      />
    </div>
  )
} 