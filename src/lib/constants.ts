import { Destination, Package, Stat } from '@/types'

export const STATS: Stat[] = [
  { value: 509, label: 'Vistos Tirados' },
  { value: 602, label: 'Passaportes Tirados' },
  { value: 634, label: 'Famílias Felizes' }
]

export const DESTINATIONS: Destination[] = [
  {
    id: '1',
    name: 'Bali',
    country: 'Indonésia',
    image: '/images/bali.jpg'
  },
  {
    id: '2',
    name: 'Nova York',
    country: 'Estados Unidos',
    image: '/images/new-york.jpg'
  },
  {
    id: '3',
    name: 'Santorini',
    country: 'Grécia',
    image: '/images/santorini.jpg'
  },
  {
    id: '4',
    name: 'Paris',
    country: 'França',
    image: '/images/paris.jpg'
  },
  {
    id: '5',
    name: 'Cidade do Cabo',
    country: 'África do Sul',
    image: '/images/cape-town.jpg'
  },
  {
    id: '6',
    name: 'Mumbai',
    country: 'Índia',
    image: '/images/mumbai.jpg'
  }
]

export const PACKAGES: Package[] = [
  {
    id: '1',
    name: 'Passaporte',
    type: 'basic',
    services: ['Atendimento On-line'],
    processingTime: '45 dias',
    deliveryTime: 'A partir de',
    price: 890
  },
  {
    id: '2',
    name: 'Passaporte + Visto',
    type: 'basic',
    services: ['Atendimento On-line + Presencial'],
    processingTime: '25 dias',
    deliveryTime: 'A partir de',
    price: 1290
  },
  {
    id: '3',
    name: 'Consultoria Completa',
    type: 'premium',
    services: ['Atendimento Presencial Completo'],
    processingTime: '10 dias',
    deliveryTime: 'A partir de',
    price: 1890
  }
]