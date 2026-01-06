import { Box, useColorMode } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  xOffset: number
}

const ParticleBackground = () => {
  const { colorMode } = useColorMode()
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const colors = colorMode === 'dark' 
      ? ['#FF9933', '#FFFFFF', '#138808', '#FFD700']
      : ['#FF9933', '#000080', '#138808', '#FF6B6B']
    
    const newParticles: Particle[] = Array.from({ length: 30 }, (_, i) => {
      const randomX = Math.random() * 100
      const randomY = Math.random() * 100
      const randomSize = Math.random() * 4 + 2
      const randomDuration = Math.random() * 3 + 2
      const randomDelay = Math.random() * 2
      const randomXOffset = Math.random() * 20 - 10
      
      return {
        id: i,
        x: randomX,
        y: randomY,
        size: randomSize,
        duration: randomDuration,
        delay: randomDelay,
        xOffset: randomXOffset,
      }
    })
    setParticles(newParticles)
  }, [colorMode])

  return (
    <Box
      position="absolute"
      top="0"
      left="0"
      width="100%"
      height="100%"
      overflow="hidden"
      zIndex={1}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          style={{
            position: 'absolute',
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            borderRadius: '50%',
            background: colorMode === 'dark' 
              ? ['#FF9933', '#FFFFFF', '#138808', '#FFD700'][particle.id % 4]
              : ['#FF9933', '#000080', '#138808', '#FF6B6B'][particle.id % 4],
            opacity: 0.6,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, particle.xOffset, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </Box>
  )
}

export default ParticleBackground

