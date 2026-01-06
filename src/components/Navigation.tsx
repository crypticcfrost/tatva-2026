import { Box, Button, Flex, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'
import Logo from './Logo'

const Navigation = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)
  const bg = useColorModeValue('rgba(245, 245, 245, 0.9)', 'rgba(10, 14, 39, 0.9)')
  const borderColor = useColorModeValue('rgba(0, 0, 0, 0.1)', 'rgba(255, 255, 255, 0.1)')

  const opacity = useTransform(scrollY, [0, 100], [0, 1])
  const y = useTransform(scrollY, [0, 100], [-100, 0])

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setIsScrolled(latest > 50)
    })
    return () => unsubscribe()
  }, [scrollY])

  return (
    <motion.nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        opacity: isScrolled ? opacity : 0,
        y: isScrolled ? y : -100,
        backdropFilter: 'blur(20px) saturate(180%)',
        background: colorMode === 'dark' 
          ? 'rgba(10, 14, 39, 0.8)' 
          : 'rgba(255, 255, 255, 0.8)',
        borderBottom: `1px solid ${colorMode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'}`,
        boxShadow: isScrolled 
          ? (colorMode === 'dark' 
              ? '0 8px 32px rgba(0, 0, 0, 0.3)' 
              : '0 8px 32px rgba(0, 0, 0, 0.1)')
          : 'none',
      }}
    >
      <Flex
        maxW="7xl"
        mx="auto"
        px={{ base: 4, md: 8 }}
        py={5}
        alignItems="center"
        justifyContent="space-between"
      >
        <Logo size="80px" animated={false} />
        <Flex gap={3} alignItems="center">
          <Button
            variant="ghost"
            size="md"
            fontWeight="medium"
            fontSize="md"
            _hover={{
              bg: colorMode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
              transform: 'translateY(-2px)',
            }}
            transition="all 0.2s"
            onClick={() => {
              const eventsSection = document.getElementById('events')
              eventsSection?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Events
          </Button>
          <Button 
            onClick={toggleColorMode} 
            variant="ghost"
            size="md"
            fontSize="xl"
            _hover={{
              bg: colorMode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
              transform: 'scale(1.1)',
            }}
            transition="all 0.2s"
          >
            {colorMode === 'dark' ? '☀️' : '🌙'}
          </Button>
        </Flex>
      </Flex>
    </motion.nav>
  )
}

export default Navigation

