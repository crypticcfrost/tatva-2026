import { Box, Text, useColorMode } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import EventAnimation from './EventAnimation'
import { Event } from '../data/events'

interface EventCardProps {
  event: Event
  index: number
}

const EventCard = ({ event, index }: EventCardProps) => {
  const { colorMode } = useColorMode()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Box
        position="relative"
        h="400px"
        borderRadius="xl"
        overflow="hidden"
        cursor="pointer"
        bg={colorMode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'}
        border="1px solid"
        borderColor={colorMode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}
        backdropFilter="blur(10px)"
        _hover={{
          borderColor: colorMode === 'dark' ? 'indian.saffron' : 'indian.green',
          boxShadow: `0 0 30px ${colorMode === 'dark' ? 'rgba(255, 153, 51, 0.3)' : 'rgba(19, 136, 8, 0.3)'}`,
        }}
        transition="all 0.3s"
      >
        {/* Background Animation */}
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          zIndex={1}
        >
          <EventAnimation type={event.animationType} isActive={isHovered} />
        </Box>

        {/* Content */}
        <Box
          position="relative"
          zIndex={2}
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          p={6}
          bgGradient={
            colorMode === 'dark'
              ? 'linear(to-b, transparent, rgba(10, 14, 39, 0.9))'
              : 'linear(to-b, transparent, rgba(245, 245, 245, 0.9))'
          }
        >
          <Box>
            <Text
              fontSize="2xl"
              fontWeight="bold"
              mb={2}
              color={colorMode === 'dark' ? 'white' : 'gray.800'}
            >
              {event.name}
            </Text>
            <Text
              fontSize="md"
              color={colorMode === 'dark' ? 'gray.300' : 'gray.600'}
            >
              {event.type}
            </Text>
          </Box>

          <motion.div
            animate={{
              x: isHovered ? 10 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <Text
              fontSize="sm"
              color={colorMode === 'dark' ? 'indian.saffron' : 'indian.green'}
              fontWeight="semibold"
            >
              Learn More →
            </Text>
          </motion.div>
        </Box>
      </Box>
    </motion.div>
  )
}

export default EventCard

