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
}

const ParticleBackground = () => {
  const { colorMode } = useColorMode()
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const colors = colorMode === 'dark' 
      ? ['#FF9933', '#FFFFFF', '#138808', '#FFD700']
      : ['#FF9933', '#000080', '#138808', '#FF6B6B']
    
    const newParticles: Particle[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }))
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
            x: [0, Math.random() * 20 - 10, 0],
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

