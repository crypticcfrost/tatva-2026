import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
}

const ScrollReveal = ({ children }: ScrollRevealProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <Box>{children}</Box>
    </motion.div>
  )
}

export default ScrollReveal

