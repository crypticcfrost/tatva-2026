# TATVA 2026 - The Spirit of India

A stunning, interactive website for the college techno-cultural event featuring scroll-triggered animations, unique event displays, and a modern design inspired by Apple's product pages.

## Features

- 🎨 **Apple-style Scroll Animations**: Smooth, interactive scroll-triggered animations
- 🌓 **Dark/Light Theme**: Automatic theme switching with logo adaptation
- 🎭 **Unique Event Animations**: Each event has its own custom interactive animation
- 🎯 **16 Events**: Technical and non-technical events with themed displays
- ✨ **Modern UI**: Built with Chakra UI and Framer Motion
- 🇮🇳 **Indian Theme**: Colors and design elements inspired by "The Spirit of India"

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Chakra UI** for component library
- **Framer Motion** for animations
- **React Intersection Observer** for scroll detection

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Events

### Technical Events
- Jnana Patha (Hackathon)
- Yukti Pravaha (Coding Challenge)
- Yantra Yuddha (Robo Knockout)
- Kala Srujana (AI Art Making)

### Non-Technical Events
- Dhristi (Photo Battle)
- Bharat Baatein (Family Feud)
- Astra Arena (Freefire Max)
- Bhojana Yuddha (Hogathon)
- Tez Talaash (Beg, Borrow, Steal)
- Vega Patha (F1 Simulator)
- Khel Niyojan (Mock IPL)
- Natya Utsav (Dance Trance)
- Yodha Yudd (BGMI / COD)
- Guhya Patha (Escape Room)
- Kshanika (Minute to Win It)

## Project Structure

```
src/
├── components/       # Reusable components
│   ├── EventCard.tsx
│   ├── EventAnimation.tsx
│   ├── HeroSection.tsx
│   ├── Logo.tsx
│   ├── ParticleBackground.tsx
│   └── ScrollReveal.tsx
├── pages/           # Page components
│   ├── WelcomePage.tsx
│   └── EventsPage.tsx
├── data/            # Data files
│   └── events.ts
├── App.tsx          # Main app component
├── main.tsx         # Entry point
└── theme.ts         # Chakra UI theme
```

## Customization

### Adding New Events

Edit `src/data/events.ts` to add new events with their animation types.

### Changing Colors

Modify `src/theme.ts` to customize the color scheme.

### Logo

Replace the Logo component with your actual logo SVG/images.

## License

MIT

