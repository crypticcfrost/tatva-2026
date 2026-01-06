import { Box, useColorMode } from '@chakra-ui/react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface ParallaxBlobProps {
  colorMode: string
  top?: string
  bottom?: string
  left?: string
  right?: string
  size: string
  color: 'saffron' | 'green'
  containerRef: React.RefObject<HTMLDivElement>
}

const ParallaxBlob = ({ 
  colorMode, 
  top, 
  bottom, 
  left, 
  right, 
  size, 
  color,
  containerRef 
}: ParallaxBlobProps) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const y = useTransform(
    scrollYProgress, 
    [0, 1], 
    color === 'saffron' ? [0, -150] : [0, 150]
  )
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.15, 0.2, 0.1])

  const bgColor = color === 'saffron' 
    ? (colorMode === 'dark' ? 'rgba(255, 153, 51, 0.15)' : 'rgba(255, 153, 51, 0.08)')
    : (colorMode === 'dark' ? 'rgba(19, 136, 8, 0.15)' : 'rgba(19, 136, 8, 0.08)')

  return (
    <motion.div
      style={{
        position: 'absolute',
        top: top || 'auto',
        bottom: bottom || 'auto',
        left: left || 'auto',
        right: right || 'auto',
        width: size,
        height: size,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${bgColor}, transparent)`,
        filter: 'blur(80px)',
        zIndex: 0,
        y,
        opacity,
      }}
    />
  )
}

export default ParallaxBlob

