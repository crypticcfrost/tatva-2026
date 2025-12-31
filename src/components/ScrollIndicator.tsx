import { Box, useColorMode } from '@chakra-ui/react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const ScrollIndicator = () => {
  const { colorMode } = useColorMode()
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const width = useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <Box
      ref={containerRef}
      position="fixed"
      bottom="0"
      left="0"
      right="0"
      height="4px"
      bg={colorMode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}
      zIndex={999}
    >
      <motion.div
        style={{
          height: '100%',
          width: `${width}%`,
          background: colorMode === 'dark'
            ? 'linear-gradient(to right, #FF9933, #FFFFFF, #138808)'
            : 'linear-gradient(to right, #FF9933, #000080, #138808)',
        }}
      />
    </Box>
  )
}

export default ScrollIndicator

