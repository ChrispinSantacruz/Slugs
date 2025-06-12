export function generateSlimeBlobs(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 60 + 20,
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: Math.random() * 2 + 3,
    delay: Math.random() * 2,
  }))
}

export function generateSlimeParticles(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: Math.random() * 3 + 4,
    delay: Math.random() * 2,
    moveX: Math.random() * 20 - 10,
    moveY: Math.random() * 30 + 20,
  }))
}

export function generateDripEffects(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: (i + 1) * (100 / (count + 1)),
    width: Math.random() * 6 + 4,
    height: Math.random() * 20 + 15,
    duration: Math.random() * 1 + 2,
    delay: Math.random() * 2,
  }))
}
