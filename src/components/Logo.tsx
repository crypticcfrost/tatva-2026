import { Box, useColorMode } from '@chakra-ui/react'
import { motion } from 'framer-motion'

interface LogoProps {
  size?: string
  animated?: boolean
}

const Logo = ({ size = '200px', animated = true }: LogoProps) => {
  const { colorMode } = useColorMode()
  const isDark = colorMode === 'dark'

  const logoVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
    hover: {
      scale: 1.05,
      rotate: [0, -5, 5, -5, 0],
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <motion.div
      variants={animated ? logoVariants : undefined}
      initial={animated ? 'initial' : undefined}
      animate={animated ? 'animate' : undefined}
      whileHover={animated ? 'hover' : undefined}
    >
      <Box
        width={size}
        height={size}
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {/* Simplified Logo Representation - You can replace this with actual logo SVG */}
        <Box
          width="100%"
          height="100%"
          position="relative"
          bg={isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}
          borderRadius="50%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          border="3px solid"
          borderColor={isDark ? 'indian.saffron' : 'indian.green'}
          _before={{
            content: '""',
            position: 'absolute',
            width: '80%',
            height: '80%',
            borderRadius: '50%',
            border: '2px solid',
            borderColor: isDark ? 'indian.green' : 'indian.saffron',
          }}
        >
          <Box
            fontSize="3xl"
            fontWeight="bold"
            color={isDark ? 'white' : 'gray.800'}
            textAlign="center"
            zIndex={2}
          >
            TATVA
          </Box>
        </Box>
        
        {/* Indian Flag Colors Arc */}
        <Box
          position="absolute"
          bottom="-10px"
          left="10%"
          right="10%"
          height="8px"
          borderRadius="full"
          bgGradient="linear(to-r, indian.saffron, indian.white, indian.green)"
          zIndex={3}
        />
      </Box>
    </motion.div>
  )
}

export default Logo

