export interface Destination {
  id: string
  name: string
  country: string
  image: string
}

export interface Package {
  id: string
  name: string
  type: 'basic' | 'premium'
  services: string[]
  processingTime: string
  deliveryTime: string
  price: number
}

export interface Stat {
  value: number
  label: string
  suffix?: string
}