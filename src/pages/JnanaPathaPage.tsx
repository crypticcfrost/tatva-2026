import { Box, Button, Container, Grid, GridItem, Heading, Image, Stack, Text, useColorMode } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Link as RouterLink } from 'react-router-dom'
import SmoothReveal from '../components/SmoothReveal'
import VideoBackground from '../components/VideoBackground'

const heroImages = [
  'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80',
]

const JnanaPathaPage = () => {
  const { colorMode } = useColorMode()

  return (
    <Box position="relative" minH="100vh" bg={colorMode === 'dark' ? '#060918' : '#f7f7fa'} overflow="hidden">
      <VideoBackground youtubeId="LkoAK3GMnyk" opacity={0.35} />

      <Container maxW="7xl" position="relative" zIndex={2} py={{ base: 16, md: 24 }}>
        <SmoothReveal>
          <Stack spacing={6} textAlign="center" mb={12}>
            <Heading
              fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
              bgGradient={
                colorMode === 'dark'
                  ? 'linear(to-r, indian.saffron, yellow.300, indian.green)'
                  : 'linear(to-r, indian.saffron, indian.blue, indian.green)'
              }
              bgClip="text"
              fontWeight="900"
              letterSpacing="tight"
            >
              Jnana Patha — The Hackathon
            </Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }} color={colorMode === 'dark' ? 'gray.200' : 'gray.700'} maxW="4xl" mx="auto">
              Build the future in 24 hours. AI, Web, Mobile, and IoT tracks. Pitch-ready demos, industry mentors, and prizes.
            </Text>
            <Stack direction={{ base: 'column', sm: 'row' }} spacing={4} justify="center">
              <Button
                as={RouterLink}
                to="/"
                variant="outline"
                colorScheme="whiteAlpha"
                size="lg"
              >
                Back to Home
              </Button>
              <Button colorScheme="orange" size="lg">
                Register Now (Dummy)
              </Button>
              <Button variant="ghost" size="lg">
                View Schedule (Placeholder)
              </Button>
            </Stack>
          </Stack>
        </SmoothReveal>

        <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={10} mb={16}>
          {heroImages.map((src, idx) => (
            <SmoothReveal key={src} delay={0.1 * idx} direction={idx % 2 === 0 ? 'up' : 'down'}>
              <Box
                as={motion.div}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                overflow="hidden"
                borderRadius="2xl"
                boxShadow={colorMode === 'dark' ? '0 20px 60px rgba(0,0,0,0.35)' : '0 20px 60px rgba(0,0,0,0.15)'}
              >
                <Image src={src} alt="Hackathon" w="100%" h="100%" objectFit="cover" />
              </Box>
            </SmoothReveal>
          ))}
        </Grid>

        <SmoothReveal delay={0.2}>
          <Box
            p={{ base: 6, md: 10 }}
            borderRadius="2xl"
            bg={colorMode === 'dark' ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)'}
            border="1px solid"
            borderColor={colorMode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}
            boxShadow={colorMode === 'dark' ? '0 10px 40px rgba(0,0,0,0.35)' : '0 10px 40px rgba(0,0,0,0.15)'}
          >
            <Stack spacing={6}>
              <Heading size="lg">What to Expect</Heading>
              <Text fontSize="lg" lineHeight="tall" color={colorMode === 'dark' ? 'gray.200' : 'gray.700'}>
                Rapid prototyping, mentor-led checkpoints, API credits, design critiques, and a live demo showcase. Bring your squad or join one on-site. Power snacks, coffee, and midnight pizza runs included.
              </Text>
              <Heading size="md">Tracks & Ideas</Heading>
              <Text color={colorMode === 'dark' ? 'gray.200' : 'gray.700'}>
                - AI: Chatbot copilots, smart summarizers, generative media <br />
                - Web3/Fintech: Trustless escrows, on-chain attestations <br />
                - Mobility/IoT: Smart campus navigation, safety beacons <br />
                - Impact: Sustainability dashboards, accessibility tools
              </Text>
            </Stack>
          </Box>
        </SmoothReveal>

        <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6} mt={16}>
          {['https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80'].map((src, idx) => (
            <SmoothReveal key={src} delay={0.3 + idx * 0.1} direction="up">
              <Box
                as={motion.div}
                whileHover={{ scale: 1.03, rotate: idx === 1 ? 0.5 : -0.5 }}
                transition={{ duration: 0.4 }}
                overflow="hidden"
                borderRadius="xl"
                boxShadow={colorMode === 'dark' ? '0 16px 40px rgba(0,0,0,0.35)' : '0 16px 40px rgba(0,0,0,0.15)'}
              >
                <Image src={src} alt="Hackathon gallery" w="100%" h="100%" objectFit="cover" />
              </Box>
            </SmoothReveal>
          ))}
        </Grid>

        <SmoothReveal delay={0.4}>
          <Stack mt={16} spacing={4} align="center">
            <Heading size="lg">Ready to build?</Heading>
            <Text color={colorMode === 'dark' ? 'gray.300' : 'gray.600'}>Reserve a spot. Limited seats. Registration is a placeholder.</Text>
            <Stack direction={{ base: 'column', sm: 'row' }} spacing={4}>
              <Button colorScheme="green" size="lg">Register (Dummy)</Button>
              <Button variant="outline" size="lg">Join Discord (Placeholder)</Button>
            </Stack>
          </Stack>
        </SmoothReveal>
      </Container>
    </Box>
  )
}

export default JnanaPathaPage

