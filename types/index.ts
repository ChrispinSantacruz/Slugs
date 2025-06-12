export interface SlugCustomization {
  skin: string
  eyes: string
  mouth: string
  hat: string
  jacket: string
  chain: string
  weapon: string
}

export interface TeamMember {
  name: string
  role: string
  avatar: string
  description: string
  skills: string[]
}

export interface TokenomicsStat {
  title: string
  value: string
  icon: string
}

export interface NavigationItem {
  label: string
  href: string
}

export interface CustomizationFeature {
  icon: string
  label: string
  color: string
}

export interface SocialLink {
  icon: string
  label: string
  href: string
}

export interface MousePosition {
  x: number
  y: number
}
