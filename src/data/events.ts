export interface Event {
  id: string
  name: string
  type: string
  category: 'technical' | 'non-technical'
  animationType: string
}

export const technicalEvents: Event[] = [
  {
    id: 'jnana-patha',
    name: 'Jnana Patha',
    type: 'Hackathon',
    category: 'technical',
    animationType: 'code',
  },
  {
    id: 'yukti-pravaha',
    name: 'Yukti Pravaha',
    type: 'Coding Challenge',
    category: 'technical',
    animationType: 'coding',
  },
  {
    id: 'yantra-yuddha',
    name: 'Yantra Yuddha',
    type: 'Robo Knockout',
    category: 'technical',
    animationType: 'robot',
  },
  {
    id: 'kala-srujana',
    name: 'Kala Srujana',
    type: 'AI Art Making',
    category: 'technical',
    animationType: 'art',
  },
]

export const nonTechnicalEvents: Event[] = [
  {
    id: 'dhristi',
    name: 'Dhristi',
    type: 'Photo Battle',
    category: 'non-technical',
    animationType: 'camera',
  },
  {
    id: 'bharat-baatein',
    name: 'Bharat Baatein',
    type: 'Family Feud',
    category: 'non-technical',
    animationType: 'quiz',
  },
  {
    id: 'astra-arena',
    name: 'Astra Arena',
    type: 'Freefire Max',
    category: 'non-technical',
    animationType: 'gaming',
  },
  {
    id: 'bhojana-yuddha',
    name: 'Bhojana Yuddha',
    type: 'Hogathon',
    category: 'non-technical',
    animationType: 'food',
  },
  {
    id: 'tez-talaash',
    name: 'Tez Talaash',
    type: 'Beg, Borrow, Steal',
    category: 'non-technical',
    animationType: 'treasure',
  },
  {
    id: 'vega-patha',
    name: 'Vega Patha',
    type: 'F1 Simulator',
    category: 'non-technical',
    animationType: 'racing',
  },
  {
    id: 'khel-niyojan',
    name: 'Khel Niyojan',
    type: 'Mock IPL',
    category: 'non-technical',
    animationType: 'cricket',
  },
  {
    id: 'natya-utsav',
    name: 'Natya Utsav',
    type: 'Dance Trance',
    category: 'non-technical',
    animationType: 'dance',
  },
  {
    id: 'yodha-yudd',
    name: 'Yodha Yudd',
    type: 'BGMI / COD',
    category: 'non-technical',
    animationType: 'battle',
  },
  {
    id: 'guhya-patha',
    name: 'Guhya Patha',
    type: 'Escape Room',
    category: 'non-technical',
    animationType: 'maze',
  },
  {
    id: 'kshanika',
    name: 'Kshanika',
    type: 'Minute to Win It',
    category: 'non-technical',
    animationType: 'timer',
  },
]

