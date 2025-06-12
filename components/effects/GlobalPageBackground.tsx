"use client"

import Image from "next/image"

export function GlobalPageBackground() {
  return (
    <div className="fixed inset-0 z-[-2]">
      {/* Background2 - Ciudad oscura con SLUG SHOP para toda la página */}
      <Image 
        src="/images/backgrounds/page-background.png" 
        alt="SlugDudes Dark City with SLUG SHOP" 
        fill 
        className="object-cover opacity-35" 
        quality={80}
        sizes="100vw"
        priority={false}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkrHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R7p4v8AHTAHcXRAgjfQdg6QkfO8ueWOhJHvwQAWZKFMpqGTTQfqk4fk66kE2W1g3sHoHf6U8PfHlGAqI5+P7lnP7Q6mOkXdG6j2l5IwAiEcXFdYCOMhC8bGAMq2bFKyXG+lJFKShN4QD/P8AH/aWQmAzSAQJm/xJC6WtEtZvmeyJyBaBTxRNS30Fb5YIEBZTZPkTSN5DdQCFJG4K1tXGANYKJNcXNJyLRUGgGQMYTJ6/4YcNzQUWbKNf57MvWGpkmGAJCRMJJ6cZG44iDlFg3eA/9k="
      />
      
      {/* Overlay para el fondo global */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Gradiente para mejor integración y transición con el banner */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
    </div>
  )
} 