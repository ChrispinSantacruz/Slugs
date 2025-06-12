export const COLORS = {
  SLIME_GREEN_LIGHT: "#BBFF00",
  SLIME_GREEN_DARK: "#70FF00",
  SLIME_GREEN_ACCENT: "#5ACC00",
  BLACK: "#000000",
  WHITE: "#FFFFFF",
} as const

export const FONTS = {
  TITLE: "Impact, Arial Black, Franklin Gothic Bold, sans-serif",
  SUBTITLE: "Impact, Arial Black, Franklin Gothic Bold, sans-serif",
  BODY: "Impact, Arial Black, Franklin Gothic Bold, sans-serif",
} as const

export const ANIMATION_DURATIONS = {
  FAST: 0.3,
  MEDIUM: 0.8,
  SLOW: 2,
  VERY_SLOW: 4,
} as const

export const NAVIGATION_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Videogame Avatars", href: "#videogame-avatars" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Tokenomics", href: "#tokenomics" },
  { label: "Team", href: "#team" },
] as const

export const TOKENOMICS_DATA = [
  { name: "Liquidity Pool", value: 40, color: "#BBFF00" },
  { name: "Community", value: 30, color: "#70FF00" },
  { name: "Development", value: 20, color: "#5ACC00" },
  { name: "Marketing", value: 10, color: "#9AFF00" },
] as const

export const TOKENOMICS_STATS = [
  { title: "Total Supply", value: "1B SOL", icon: "TrendingUp", color: "#BBFF00" },
  { title: "Liquidity Pool", value: "40%", icon: "Zap", color: "#70FF00" },
  { title: "Community", value: "30%", icon: "Users", color: "#5ACC00" },
  { title: "Development", value: "20%", icon: "Rocket", color: "#9AFF00" },
] as const

export const TEAM_MEMBERS = [
  {
    name: "SlugMaster Alpha",
    role: "Lead Developer & Visionary",
    avatar: "🐌",
    description: "The original slug who discovered the primordial slime and founded the immortal colony.",
    skills: ["Blockchain", "Smart Contracts", "Slime Physics"],
  },
  {
    name: "CodeSlug Beta",
    role: "Frontend Architect & Game Designer",
    avatar: "🎮",
    description: "Master of the digital realm, creating immersive experiences for the slug community.",
    skills: ["React", "Game Development", "UI/UX"],
  },
] as const

export const CUSTOMIZATION_FEATURES = [
  { icon: "🎨", label: "Custom Skins", color: "#BBFF00" },
  { icon: "👁️", label: "Unique Eyes", color: "#70FF00" },
  { icon: "🎩", label: "Epic Hats", color: "#BBFF00" },
  { icon: "⚔️", label: "Weapons", color: "#70FF00" },
] as const

export const SOCIAL_LINKS = [
  { icon: "🐦", label: "Twitter", href: "#" },
  { icon: "📱", label: "Discord", href: "#" },
  { icon: "💬", label: "Telegram", href: "#" },
] as const

// Mock price data for charts
export const PRICE_HISTORY = [
  { time: "00:00", price: 0.045, volume: 1200000 },
  { time: "04:00", price: 0.052, volume: 1800000 },
  { time: "08:00", price: 0.048, volume: 1500000 },
  { time: "12:00", price: 0.061, volume: 2200000 },
  { time: "16:00", price: 0.058, volume: 1900000 },
  { time: "20:00", price: 0.067, volume: 2500000 },
  { time: "24:00", price: 0.072, volume: 2800000 },
] as const
