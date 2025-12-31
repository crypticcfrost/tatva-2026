import { Box, useColorMode } from '@chakra-ui/react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Logo from '../components/Logo'
import HeroSection from '../components/HeroSection'
import ScrollReveal from '../components/ScrollReveal'

const WelcomePage = () => {
  const { colorMode } = useColorMode()
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1, 0.8, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  return (
    <Box
      ref={containerRef}
      position="relative"
      minH="300vh"
      bg={colorMode === 'dark' ? '#0a0e27' : '#f5f5f5'}
    >
      {/* Sticky Hero Section */}
      <Box position="sticky" top="0" h="100vh" overflow="hidden">
        <motion.div
          style={{
            opacity,
            scale,
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
        >
          <HeroSection />
        </motion.div>
      </Box>

      {/* Scroll Reveal Sections */}
      <Box position="relative" zIndex={10}>
        <ScrollReveal>
          <Box
            py={32}
            px={8}
            textAlign="center"
            bg={colorMode === 'dark' ? 'rgba(10, 14, 39, 0.95)' : 'rgba(245, 245, 245, 0.95)'}
            backdropFilter="blur(10px)"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Box fontSize="6xl" fontWeight="bold" mb={4}>
                Welcome to TATVA 2026
              </Box>
              <Box fontSize="2xl" color={colorMode === 'dark' ? 'gray.300' : 'gray.600'}>
                Where Technology Meets Culture
              </Box>
            </motion.div>
          </Box>
        </ScrollReveal>
      </Box>
    </Box>
  )
}

export default WelcomePage

