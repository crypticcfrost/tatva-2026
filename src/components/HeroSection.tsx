import { Box, Text, useColorMode } from '@chakra-ui/react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Logo from './Logo'
import ParticleBackground from './ParticleBackground'

const HeroSection = () => {
  const { colorMode } = useColorMode()
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  return (
    <Box
      ref={sectionRef}
      position="relative"
      width="100%"
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
      bg={colorMode === 'dark' ? '#0a0e27' : '#f5f5f5'}
    >
      <ParticleBackground />
      
      <motion.div
        style={{
          y,
          opacity,
          scale,
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem',
        }}
      >
        <Logo size="300px" animated={true} />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Text
            fontSize={{ base: '4xl', md: '6xl', lg: '8xl' }}
            fontWeight="bold"
            textAlign="center"
            bgGradient={
              colorMode === 'dark'
                ? 'linear(to-r, indian.saffron, yellow.400, indian.green)'
                : 'linear(to-r, indian.saffron, indian.blue, indian.green)'
            }
            bgClip="text"
            mb={4}
          >
            TATVA 2026
          </Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <Text
            fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
            color={colorMode === 'dark' ? 'gray.300' : 'gray.600'}
            textAlign="center"
            fontStyle="italic"
          >
            The Spirit of India
          </Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          style={{ marginTop: '2rem' }}
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Box
              width="40px"
              height="40px"
              border="2px solid"
              borderColor={colorMode === 'dark' ? 'white' : 'gray.800'}
              borderTop="none"
              borderLeft="none"
              transform="rotate(45deg)"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </Box>
  )
}

export default HeroSection

