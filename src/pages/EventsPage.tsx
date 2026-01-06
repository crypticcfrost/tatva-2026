import { Box, Container, Heading, useColorMode, Divider, Text } from '@chakra-ui/react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import EventCard from '../components/EventCard'
import { technicalEvents, nonTechnicalEvents } from '../data/events'
import SmoothReveal from '../components/SmoothReveal'
import ParallaxBlob from '../components/ParallaxBlob'
import SideAurora from '../components/SideAurora'

const EventsPage = () => {
  const { colorMode } = useColorMode()
  const containerRef = useRef<HTMLDivElement>(null)
  const techSectionRef = useRef<HTMLDivElement>(null)
  const nonTechSectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress: techProgress } = useScroll({
    target: techSectionRef,
    offset: ['start end', 'end start'],
  })

  const { scrollYProgress: nonTechProgress } = useScroll({
    target: nonTechSectionRef,
    offset: ['start end', 'end start'],
  })

  const techOpacity = useTransform(techProgress, [0, 0.2, 0.8, 1], [0, 0.3, 1, 1])
  const techY = useTransform(techProgress, [0, 0.3], [100, 0])
  
  const nonTechOpacity = useTransform(nonTechProgress, [0, 0.2, 0.8, 1], [0, 0.3, 1, 1])
  const nonTechY = useTransform(nonTechProgress, [0, 0.3], [100, 0])

  return (
    <Box
      ref={containerRef}
      id="events"
      minH="100vh"
      py={20}
      pt={32}
      bg={colorMode === 'dark' ? '#0a0e27' : '#fafafa'}
      position="relative"
      overflow="hidden"
    >
      {/* Animated auroras to fill sides */}
      <SideAurora
        side="left"
        colorA={colorMode === 'dark' ? 'rgba(255,153,51,0.32)' : 'rgba(255,153,51,0.24)'}
        colorB={colorMode === 'dark' ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.10)'}
      />
      <SideAurora
        side="right"
        colorA={colorMode === 'dark' ? 'rgba(19,136,8,0.32)' : 'rgba(19,136,8,0.24)'}
        colorB={colorMode === 'dark' ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.10)'}
      />

      {/* Parallax Background Elements */}
      <ParallaxBlob 
        colorMode={colorMode}
        top="10%"
        left="0"
        size="400px"
        color="saffron"
        containerRef={containerRef}
      />
      <ParallaxBlob 
        colorMode={colorMode}
        bottom="10%"
        right="0"
        size="500px"
        color="green"
        containerRef={containerRef}
      />

      <Container maxW="7xl" position="relative" zIndex={1}>
        {/* Technical Events Section */}
        <Box ref={techSectionRef} mb={32}>
          <motion.div
            style={{
              opacity: techOpacity,
              y: techY,
            }}
          >
            <SmoothReveal delay={0.1}>
              <Box mb={20} textAlign="center">
                <Heading
                  fontSize={{ base: '5xl', md: '6xl', lg: '8xl' }}
                  mb={8}
                  fontWeight="900"
                  bgGradient={
                    colorMode === 'dark'
                      ? 'linear(to-r, indian.saffron, yellow.300, indian.saffron)'
                      : 'linear(to-r, indian.saffron, indian.blue, indian.saffron)'
                  }
                  bgClip="text"
                  letterSpacing="tight"
                  lineHeight="1.1"
                >
                  Technical Events
                </Heading>
                <SmoothReveal delay={0.3}>
                  <Box
                    width="120px"
                    height="4px"
                    mx="auto"
                    mb={6}
                    bgGradient="linear(to-r, indian.saffron, indian.white, indian.green)"
                    borderRadius="full"
                  />
                </SmoothReveal>
                <SmoothReveal delay={0.4}>
                  <Text
                    fontSize={{ base: 'lg', md: 'xl' }}
                    color={colorMode === 'dark' ? 'gray.400' : 'gray.600'}
                    maxW="600px"
                    mx="auto"
                    fontWeight="400"
                  >
                    Where innovation meets code
                  </Text>
                </SmoothReveal>
              </Box>
            </SmoothReveal>

            <Box
              display="grid"
              gridTemplateColumns={{
                base: 'repeat(1, 1fr)',
                md: 'repeat(2, 1fr)',
                lg: 'repeat(2, 1fr)',
              }}
              gap={{ base: 10, md: 12, lg: 14 }}
            >
              {technicalEvents.map((event, index) => (
                <SmoothReveal 
                  key={event.id} 
                  delay={0.5 + index * 0.1}
                  direction="up"
                  distance={60}
                >
                  <EventCard event={event} index={index} />
                </SmoothReveal>
              ))}
            </Box>
          </motion.div>
        </Box>

        {/* Elegant Divider */}
        <SmoothReveal delay={0.8}>
          <Box my={32} position="relative">
            <Divider
              borderColor={colorMode === 'dark' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.1)'}
              borderWidth="1px"
            />
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              px={8}
              py={3}
              bg={colorMode === 'dark' ? '#0a0e27' : '#fafafa'}
              borderRadius="full"
              border="1px solid"
              borderColor={colorMode === 'dark' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.1)'}
              backdropFilter="blur(20px)"
            >
              <Text
                fontSize="3xl"
                bgGradient="linear(to-r, indian.saffron, indian.white, indian.green)"
                bgClip="text"
                fontWeight="bold"
              >
                🇮🇳
              </Text>
            </Box>
          </Box>
        </SmoothReveal>

        {/* Non-Technical Events Section */}
        <Box ref={nonTechSectionRef}>
          <motion.div
            style={{
              opacity: nonTechOpacity,
              y: nonTechY,
            }}
          >
            <SmoothReveal delay={0.1}>
              <Box mb={20} textAlign="center">
                <Heading
                  fontSize={{ base: '5xl', md: '6xl', lg: '8xl' }}
                  mb={8}
                  fontWeight="900"
                  bgGradient={
                    colorMode === 'dark'
                      ? 'linear(to-r, indian.green, cyan.300, indian.green)'
                      : 'linear(to-r, indian.green, indian.blue, indian.green)'
                  }
                  bgClip="text"
                  letterSpacing="tight"
                  lineHeight="1.1"
                >
                  Non-Technical Events
                </Heading>
                <SmoothReveal delay={0.3}>
                  <Box
                    width="120px"
                    height="4px"
                    mx="auto"
                    mb={6}
                    bgGradient="linear(to-r, indian.green, indian.white, indian.saffron)"
                    borderRadius="full"
                  />
                </SmoothReveal>
                <SmoothReveal delay={0.4}>
                  <Text
                    fontSize={{ base: 'lg', md: 'xl' }}
                    color={colorMode === 'dark' ? 'gray.400' : 'gray.600'}
                    maxW="600px"
                    mx="auto"
                    fontWeight="400"
                  >
                    Where culture meets competition
                  </Text>
                </SmoothReveal>
              </Box>
            </SmoothReveal>

            <Box
              display="grid"
              gridTemplateColumns={{
                base: 'repeat(1, 1fr)',
                md: 'repeat(2, 1fr)',
                lg: 'repeat(2, 1fr)',
              }}
              gap={{ base: 10, md: 12, lg: 14 }}
            >
              {nonTechnicalEvents.map((event, index) => (
                <SmoothReveal 
                  key={event.id} 
                  delay={0.5 + index * 0.08}
                  direction="up"
                  distance={60}
                >
                  <EventCard event={event} index={index} />
                </SmoothReveal>
              ))}
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  )
}

export default EventsPage

