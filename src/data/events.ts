export interface Event {
  id: string
  name: string
  type: string
  category: 'technical' | 'non-technical'
  animationType: string
  imageUrl?: string
}

export const technicalEvents: Event[] = [
  {
    id: 'jnana-patha',
    name: 'Jnana Patha',
    type: 'Hackathon',
    category: 'technical',
    animationType: 'code',
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80',
  },
  {
    id: 'yukti-pravaha',
    name: 'Yukti Pravaha',
    type: 'Coding Challenge',
    category: 'technical',
    animationType: 'coding',
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
  },
  {
    id: 'yantra-yuddha',
    name: 'Yantra Yuddha',
    type: 'Robo Knockout',
    category: 'technical',
    animationType: 'robot',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
  },
  {
    id: 'kala-srujana',
    name: 'Kala Srujana',
    type: 'AI Art Making',
    category: 'technical',
    animationType: 'art',
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
  },
]

export const nonTechnicalEvents: Event[] = [
  {
    id: 'dhristi',
    name: 'Dhristi',
    type: 'Photo Battle',
    category: 'non-technical',
    animationType: 'camera',
    imageUrl: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'bharat-baatein',
    name: 'Bharat Baatein',
    type: 'Family Feud',
    category: 'non-technical',
    animationType: 'quiz',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
  },
  {
    id: 'astra-arena',
    name: 'Astra Arena',
    type: 'Freefire Max',
    category: 'non-technical',
    animationType: 'gaming',
    imageUrl: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&q=80',
  },
  {
    id: 'bhojana-yuddha',
    name: 'Bhojana Yuddha',
    type: 'Hogathon',
    category: 'non-technical',
    animationType: 'food',
    imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9c836a?auto=format&fit=crop&w=1200&q=80&sat=-10',
  },
  {
    id: 'tez-talaash',
    name: 'Tez Talaash',
    type: 'Beg, Borrow, Steal',
    category: 'non-technical',
    animationType: 'treasure',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80',
  },
  {
    id: 'vega-patha',
    name: 'Vega Patha',
    type: 'F1 Simulator',
    category: 'non-technical',
    animationType: 'racing',
    imageUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
  },
  {
    id: 'khel-niyojan',
    name: 'Khel Niyojan',
    type: 'Mock IPL',
    category: 'non-technical',
    animationType: 'cricket',
    imageUrl: 'https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?w=800&q=80',
  },
  {
    id: 'natya-utsav',
    name: 'Natya Utsav',
    type: 'Dance Trance',
    category: 'non-technical',
    animationType: 'dance',
    imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80',
  },
  {
    id: 'yodha-yudd',
    name: 'Yodha Yudd',
    type: 'BGMI / COD',
    category: 'non-technical',
    animationType: 'battle',
    imageUrl: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&q=80',
  },
  {
    id: 'guhya-patha',
    name: 'Guhya Patha',
    type: 'Escape Room',
    category: 'non-technical',
    animationType: 'maze',
    imageUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80',
  },
  {
    id: 'kshanika',
    name: 'Kshanika',
    type: 'Minute to Win It',
    category: 'non-technical',
    animationType: 'timer',
    imageUrl: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&q=80',
  },
]

