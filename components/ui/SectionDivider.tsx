"use client"

import Image from "next/image"

export function SectionDivider() {
  return (
    <div className="w-full h-32 md:h-40 flex items-center justify-center relative overflow-hidden">
      <Image
        src="/images/backgrounds/slug_bar-02.png"
        alt="Section Divider"
        width={1920}
        height={160}
        className="w-full h-full object-cover"
        quality={100}
        priority={false}
      />
    </div>
  )
} 