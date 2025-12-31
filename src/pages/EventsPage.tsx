import { Box, Container, Heading, useColorMode } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import EventCard from '../components/EventCard'
import { technicalEvents, nonTechnicalEvents } from '../data/events'

const EventsPage = () => {
  const { colorMode } = useColorMode()

  return (
    <Box
      id="events"
      minH="100vh"
      py={20}
      pt={32}
      bg={colorMode === 'dark' ? '#0a0e27' : '#f5f5f5'}
      position="relative"
    >
      <Container maxW="7xl">
        {/* Technical Events */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Heading
            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            mb={12}
            textAlign="center"
            bgGradient={
              colorMode === 'dark'
                ? 'linear(to-r, indian.saffron, yellow.400)'
                : 'linear(to-r, indian.saffron, indian.blue)'
            }
            bgClip="text"
          >
            Technical Events
          </Heading>
          <Box
            display="grid"
            gridTemplateColumns={{
              base: '1fr',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(2, 1fr)',
            }}
            gap={8}
            mb={20}
          >
            {technicalEvents.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </Box>
        </motion.div>

        {/* Non-Technical Events */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Heading
            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            mb={12}
            textAlign="center"
            bgGradient={
              colorMode === 'dark'
                ? 'linear(to-r, indian.green, cyan.400)'
                : 'linear(to-r, indian.green, indian.blue)'
            }
            bgClip="text"
          >
            Non-Technical Events
          </Heading>
          <Box
            display="grid"
            gridTemplateColumns={{
              base: '1fr',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
            }}
            gap={8}
          >
            {nonTechnicalEvents.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  )
}

export default EventsPage

