import { Box, Text, useColorMode, Badge, VStack, HStack, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useState, useMemo, memo } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import EventAnimation from './EventAnimation'
import { Event } from '../data/events'

interface EventCardProps {
  event: Event
  index: number
}

const EventCard = memo(({ event, index }: EventCardProps) => {
  const { colorMode } = useColorMode()
  const [isHovered, setIsHovered] = useState(false)

  // Create varied card styles based on index
  const cardVariants = [
    { shape: 'rounded-xl', rotation: 0, scale: 1 },
    { shape: 'rounded-2xl', rotation: -1, scale: 1.02 },
    { shape: 'rounded-3xl', rotation: 1, scale: 0.98 },
    { shape: 'rounded-xl', rotation: 0, scale: 1 },
  ]

  const variant = cardVariants[index % cardVariants.length]
  const isTechnical = event.category === 'technical'
  const cardHeight = '460px'

  // Different gradient overlays for variety
  const gradients = [
    'linear(to-br, transparent, rgba(10, 14, 39, 0.95))',
    'linear(to-tl, transparent, rgba(10, 14, 39, 0.95))',
    'linear(to-b, transparent, rgba(10, 14, 39, 0.9))',
    'radial(circle, transparent, rgba(10, 14, 39, 0.95))',
  ]

  const lightGradients = [
    'linear(to-br, transparent, rgba(245, 245, 245, 0.95))',
    'linear(to-tl, transparent, rgba(245, 245, 245, 0.95))',
    'linear(to-b, transparent, rgba(245, 245, 245, 0.9))',
    'radial(circle, transparent, rgba(245, 245, 245, 0.95))',
  ]

  const gradient = colorMode === 'dark' 
    ? 'linear(to-b, transparent, rgba(10, 14, 39, 0.7))'
    : 'linear(to-b, transparent, rgba(255, 255, 255, 0.7))'

  const cardBody = (
    <motion.div
      initial={{ opacity: 0, y: 50, rotate: variant.rotation }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        transform: `scale(${variant.scale})`,
      }}
    >
      <Box
        position="relative"
        h={cardHeight}
        borderRadius="2xl"
        overflow="hidden"
        cursor="pointer"
        bg={colorMode === 'dark' 
          ? 'rgba(255, 255, 255, 0.05)' 
          : 'rgba(255, 255, 255, 0.8)'}
        border="1px solid"
        borderColor={colorMode === 'dark' 
          ? 'rgba(255, 255, 255, 0.1)' 
          : 'rgba(0, 0, 0, 0.08)'}
        backdropFilter="blur(20px) saturate(180%)"
        boxShadow={colorMode === 'dark' 
          ? '0 4px 24px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)' 
          : '0 4px 24px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.05)'}
        _hover={{
          borderColor: isTechnical 
            ? (colorMode === 'dark' ? 'rgba(255, 153, 51, 0.5)' : 'rgba(0, 0, 128, 0.4)')
            : (colorMode === 'dark' ? 'rgba(19, 136, 8, 0.5)' : 'rgba(19, 136, 8, 0.4)'),
          boxShadow: isTechnical
            ? (colorMode === 'dark' 
                ? '0 20px 60px rgba(255, 153, 51, 0.3), 0 0 0 1px rgba(255, 153, 51, 0.2)' 
                : '0 20px 60px rgba(0, 0, 128, 0.2), 0 0 0 1px rgba(0, 0, 128, 0.15)')
            : (colorMode === 'dark' 
                ? '0 20px 60px rgba(19, 136, 8, 0.3), 0 0 0 1px rgba(19, 136, 8, 0.2)' 
                : '0 20px 60px rgba(19, 136, 8, 0.2), 0 0 0 1px rgba(19, 136, 8, 0.15)'),
          transform: 'translateY(-12px) scale(1.03)',
        }}
        transition="all 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
      >
        {/* Background Image */}
        {event.imageUrl && (
          <Box
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            zIndex={0}
            overflow="hidden"
          >
            <motion.div
              animate={{
                scale: isHovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              style={{ width: '100%', height: '100%' }}
            >
              <Image
                src={event.imageUrl}
                alt={event.name}
                width="100%"
                height="100%"
                objectFit="cover"
                opacity={colorMode === 'dark' ? 0.35 : 0.25}
                loading="lazy"
              />
            </motion.div>
            <Box
              position="absolute"
              top="0"
              left="0"
              width="100%"
              height="100%"
              bgGradient={
                colorMode === 'dark'
                  ? 'linear(to-b, rgba(10, 14, 39, 0.2), rgba(10, 14, 39, 0.75))'
                  : 'linear(to-b, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.75))'
              }
            />
          </Box>
        )}

        {/* Background Animation Overlay */}
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          zIndex={1}
          opacity={isHovered ? 1 : 0.3}
          transition="opacity 0.3s"
        >
          <EventAnimation type={event.animationType} isActive={isHovered} />
        </Box>

        {/* Decorative Elements */}
        <Box
          position="absolute"
          top="10px"
          right="10px"
          zIndex={3}
        >
          <Badge
            colorScheme={isTechnical ? 'orange' : 'green'}
            variant="solid"
            borderRadius="full"
            px={3}
            py={1}
            fontSize="xs"
            fontWeight="bold"
            opacity={0.9}
          >
            {isTechnical ? 'TECH' : 'NON-TECH'}
          </Badge>
        </Box>

        {/* Content */}
        <Box
          position="relative"
          zIndex={2}
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={8}
          bgGradient={gradient}
        >
          <VStack align="center" spacing={4} textAlign="center" flex="1" justifyContent="center">
            <Box>
              <Text
                fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                fontWeight="800"
                mb={3}
                color={colorMode === 'dark' ? 'white' : 'gray.900'}
                lineHeight="shorter"
                letterSpacing="tight"
                fontFamily="heading"
              >
                {event.name}
              </Text>
              <VStack spacing={2} align="center">
                <Box
                  width="60px"
                  height="3px"
                  borderRadius="full"
                  bgGradient={
                    isTechnical
                      ? 'linear(to-r, indian.saffron, yellow.400)'
                      : 'linear(to-r, indian.green, cyan.400)'
                  }
                  mx="auto"
                />
                <Text
                  fontSize="sm"
                  color={colorMode === 'dark' ? 'gray.300' : 'gray.600'}
                  fontWeight="600"
                  letterSpacing="wide"
                  textTransform="uppercase"
                  fontFamily="body"
                >
                  {event.type}
                </Text>
              </VStack>
            </Box>
          </VStack>

          <motion.div
            animate={{
              y: isHovered ? -5 : 0,
              opacity: isHovered ? 1 : 0.8,
            }}
            transition={{ duration: 0.3 }}
          >
            <HStack spacing={3} align="center" justify="center">
              <Text
                fontSize="sm"
                color={isTechnical 
                  ? (colorMode === 'dark' ? 'indian.saffron' : 'indian.blue')
                  : (colorMode === 'dark' ? 'indian.green' : 'indian.green')}
                fontWeight="700"
                letterSpacing="wider"
                textTransform="uppercase"
                fontFamily="body"
              >
                Explore
              </Text>
              <Box
                as="span"
                fontSize="xl"
                transform={isHovered ? 'translateX(8px)' : 'translateX(0)'}
                transition="transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              >
                →
              </Box>
            </HStack>
          </motion.div>
        </Box>

        {/* Shine effect on hover */}
        {isHovered && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '200%' }}
            transition={{ duration: 0.6 }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '50%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
              zIndex: 4,
              pointerEvents: 'none',
            }}
          />
        )}
      </Box>
    </motion.div>
  )

  const isJnana = event.id === 'jnana-patha'

  return isJnana ? (
    <Box as={RouterLink} to="/jnana-patha" _hover={{ textDecoration: 'none' }}>
      {cardBody}
    </Box>
  ) : (
    cardBody
  )
})

EventCard.displayName = 'EventCard'

export default EventCard
