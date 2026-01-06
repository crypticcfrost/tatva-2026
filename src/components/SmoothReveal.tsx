import { Box } from '@chakra-ui/react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface SmoothRevealProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  distance?: number
}

const SmoothReveal = ({ 
  children, 
  delay = 0, 
  direction = 'up',
  distance = 50 
}: SmoothRevealProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const directionMap = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { y: 0, x: distance },
    right: { y: 0, x: -distance },
  }

  const initial = directionMap[direction]

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        ...initial 
      }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        x: 0 
      } : { 
        opacity: 0, 
        ...initial 
      }}
      transition={{ 
        duration: 1.2,
        delay,
        ease: [0.16, 1, 0.3, 1] // Apple's signature easing curve
      }}
    >
      <Box>{children}</Box>
    </motion.div>
  )
}

export default SmoothReveal

