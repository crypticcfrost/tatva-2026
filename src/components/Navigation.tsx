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
        backdropFilter: 'blur(10px)',
        background: bg,
        borderBottom: `1px solid ${borderColor}`,
      }}
    >
      <Flex
        maxW="7xl"
        mx="auto"
        px={8}
        py={4}
        alignItems="center"
        justifyContent="space-between"
      >
        <Logo size="50px" animated={false} />
        <Flex gap={4} alignItems="center">
          <Button
            variant="ghost"
            onClick={() => {
              const eventsSection = document.getElementById('events')
              eventsSection?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Events
          </Button>
          <Button onClick={toggleColorMode} variant="ghost">
            {colorMode === 'dark' ? '☀️' : '🌙'}
          </Button>
        </Flex>
      </Flex>
    </motion.nav>
  )
}

export default Navigation

