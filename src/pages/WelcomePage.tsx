import { Box, useColorMode, Text } from '@chakra-ui/react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import HeroSection from '../components/HeroSection'
import SmoothReveal from '../components/SmoothReveal'
import VideoBackground from '../components/VideoBackground'

const WelcomePage = () => {
  const { colorMode } = useColorMode()
  const containerRef = useRef<HTMLDivElement>(null)
  const transitionRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const { scrollYProgress: transitionProgress } = useScroll({
    target: transitionRef,
    offset: ['start end', 'end start'],
  })

  // Hero fade out - smoother Apple-style transition
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2, 0.6], [1, 1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.96])
  const heroY = useTransform(scrollYProgress, [0, 0.4], [0, -30])

  // Transition section fade in - smooth reveal
  const transitionOpacity = useTransform(transitionProgress, [0, 0.2, 0.6], [0, 0.6, 1])
  const transitionY = useTransform(transitionProgress, [0, 0.4], [80, 0])
  const transitionScale = useTransform(transitionProgress, [0, 0.3], [0.95, 1])

  return (
    <Box
      ref={containerRef}
      position="relative"
      minH="300vh"
      bg={colorMode === 'dark' ? '#0a0e27' : '#fafafa'}
    >
      {/* Sticky Hero Section with smooth fade */}
      <Box position="sticky" top="0" h="100vh" overflow="hidden" zIndex={1}>
        <motion.div
          style={{
            opacity: heroOpacity,
            scale: heroScale,
            y: heroY,
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
        >
          <HeroSection />
        </motion.div>
      </Box>

      {/* Elegant Transition Section */}
      <Box 
        ref={transitionRef}
        position="relative" 
        zIndex={2}
        minH="100vh"
        pt="100vh"
        overflow="hidden"
      >
        {/* Video Background */}
        <VideoBackground 
          youtubeId="LkoAK3GMnyk"
          opacity={0.5}
        />
        
        {/* Content Overlay */}
        <motion.div
          style={{
            opacity: transitionOpacity,
            y: transitionY,
            scale: transitionScale,
            position: 'relative',
            zIndex: 2,
          }}
        >
          <Box
            py={32}
            px={8}
            textAlign="center"
            maxW="5xl"
            mx="auto"
            minH="100vh"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <SmoothReveal delay={0.2}>
              <Text
                fontSize={{ base: '5xl', md: '6xl', lg: '8xl' }}
                fontWeight="900"
                mb={8}
                bgGradient={
                  colorMode === 'dark'
                    ? 'linear(to-r, indian.saffron, yellow.300, indian.green)'
                    : 'linear(to-r, indian.saffron, indian.blue, indian.green)'
                }
                bgClip="text"
                letterSpacing="tight"
                lineHeight="1.1"
              >
                Welcome to TATVA 2026
              </Text>
            </SmoothReveal>
            
            <SmoothReveal delay={0.4} direction="up" distance={30}>
              <Text
                fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
                color={colorMode === 'dark' ? 'gray.300' : 'gray.600'}
                lineHeight="tall"
                maxW="3xl"
                mb={12}
                fontWeight="400"
              >
                Where Technology Meets Culture
              </Text>
            </SmoothReveal>

            <SmoothReveal delay={0.6} direction="up" distance={20}>
              <Box
                width="120px"
                height="4px"
                mx="auto"
                bgGradient="linear(to-r, indian.saffron, indian.white, indian.green)"
                borderRadius="full"
                mb={16}
              />
            </SmoothReveal>
          </Box>
        </motion.div>
      </Box>
    </Box>
  )
}

export default WelcomePage

