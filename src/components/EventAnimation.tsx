import { Box, useColorMode } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface EventAnimationProps {
  type: string
  isActive: boolean
}

const EventAnimation = ({ type, isActive }: EventAnimationProps) => {

  switch (type) {
    case 'code':
      return <CodeAnimation isActive={isActive} />
    case 'coding':
      return <CodingAnimation isActive={isActive} />
    case 'robot':
      return <RobotAnimation isActive={isActive} />
    case 'art':
      return <ArtAnimation isActive={isActive} />
    case 'camera':
      return <CameraAnimation isActive={isActive} />
    case 'quiz':
      return <QuizAnimation isActive={isActive} />
    case 'gaming':
      return <GamingAnimation isActive={isActive} />
    case 'food':
      return <FoodAnimation isActive={isActive} />
    case 'treasure':
      return <TreasureAnimation isActive={isActive} />
    case 'racing':
      return <RacingAnimation isActive={isActive} />
    case 'cricket':
      return <CricketAnimation isActive={isActive} />
    case 'dance':
      return <DanceAnimation isActive={isActive} />
    case 'battle':
      return <BattleAnimation isActive={isActive} />
    case 'maze':
      return <MazeAnimation isActive={isActive} />
    case 'timer':
      return <TimerAnimation isActive={isActive} />
    default:
      return <DefaultAnimation isActive={isActive} />
  }
}

// Code Animation (Hackathon)
const CodeAnimation = ({ isActive }: { isActive: boolean }) => {
  const { colorMode } = useColorMode()
  const [lines, setLines] = useState<string[]>([])

  useEffect(() => {
    const codeLines = [
      'function hackathon() {',
      '  const innovation = true;',
      '  return build();',
      '}',
    ]
    setLines(codeLines)
  }, [])

  return (
    <Box p={4} fontFamily="monospace" fontSize="sm" color={colorMode === 'dark' ? 'green.400' : 'green.600'}>
      {lines.map((line: string, i: number) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0.5, x: -20 }}
          transition={{ delay: i * 0.2, duration: 0.3 }}
        >
          {line}
        </motion.div>
      ))}
      <motion.div
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        |
      </motion.div>
    </Box>
  )
}

// Coding Challenge Animation
const CodingAnimation = ({ isActive }: { isActive: boolean }) => {
  const { colorMode } = useColorMode()
  return (
    <Box position="relative" width="100%" height="100%">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            left: `${i * 20}%`,
            top: '50%',
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            background: colorMode === 'dark' ? '#4FD1C7' : '#319795',
          }}
          animate={
            isActive
              ? {
                  y: [0, -30, 0],
                  scale: [1, 1.2, 1],
                }
              : {}
          }
          transition={{
            duration: 1,
            delay: i * 0.2,
            repeat: Infinity,
          }}
        />
      ))}
    </Box>
  )
}

// Robot Animation
const RobotAnimation = ({ isActive }: { isActive: boolean }) => {
  const { colorMode } = useColorMode()
  return (
    <Box position="relative" width="100%" height="100%" display="flex" alignItems="center" justifyContent="center">
      <motion.div
        style={{
          width: '80px',
          height: '80px',
          borderRadius: '10px',
          background: colorMode === 'dark' ? '#FF6B6B' : '#E53E3E',
          position: 'relative',
        }}
        animate={
          isActive
            ? {
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }
            : {}
        }
        transition={{ duration: 0.5, repeat: Infinity }}
      >
        <Box
          position="absolute"
          top="20%"
          left="25%"
          width="15px"
          height="15px"
          borderRadius="50%"
          bg={colorMode === 'dark' ? 'white' : 'black'}
        />
        <Box
          position="absolute"
          top="20%"
          right="25%"
          width="15px"
          height="15px"
          borderRadius="50%"
          bg={colorMode === 'dark' ? 'white' : 'black'}
        />
      </motion.div>
    </Box>
  )
}

// AI Art Animation
const ArtAnimation = ({ isActive }: { isActive: boolean }) => {
  const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#95E1D3']
  return (
    <Box position="relative" width="100%" height="100%">
      {colors.map((color, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            left: `${i * 25}%`,
            top: `${i * 20}%`,
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: color,
          }}
          animate={
            isActive
              ? {
                  rotate: 360,
                  scale: [1, 1.3, 1],
                }
              : {}
          }
          transition={{
            duration: 2,
            delay: i * 0.3,
            repeat: Infinity,
          }}
        />
      ))}
    </Box>
  )
}

// Camera Animation
const CameraAnimation = ({ isActive }: { isActive: boolean }) => {
  const { colorMode } = useColorMode()
  return (
    <Box position="relative" width="100%" height="100%" display="flex" alignItems="center" justifyContent="center">
      <motion.div
        style={{
          width: '100px',
          height: '80px',
          borderRadius: '10px',
          background: colorMode === 'dark' ? '#2D3748' : '#4A5568',
          position: 'relative',
        }}
        animate={isActive ? { scale: [1, 1.1, 1] } : {}}
        transition={{ duration: 0.5, repeat: Infinity }}
      >
        <Box
          position="absolute"
          top="10px"
          left="50%"
          transform="translateX(-50%)"
          width="50px"
          height="40px"
          borderRadius="5px"
          bg={colorMode === 'dark' ? '#1A202C' : '#2D3748'}
        />
        <motion.div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            background: colorMode === 'dark' ? '#FFD700' : '#FFA500',
          }}
          animate={isActive ? { scale: [1, 1.2, 1], opacity: [1, 0.5, 1] } : {}}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
      </motion.div>
    </Box>
  )
}

// Quiz Animation
const QuizAnimation = ({ isActive }: { isActive: boolean }) => {
  const { colorMode } = useColorMode()
  return (
    <Box position="relative" width="100%" height="100%" display="flex" alignItems="center" justifyContent="center" flexDirection="column" gap={2}>
      {['?', '!', '?'].map((char, i) => (
        <motion.div
          key={i}
          style={{
            fontSize: '48px',
            color: colorMode === 'dark' ? '#FFD700' : '#FF8C00',
            fontWeight: 'bold',
          }}
          animate={isActive ? { rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] } : {}}
          transition={{ duration: 0.6, delay: i * 0.2, repeat: Infinity }}
        >
          {char}
        </motion.div>
      ))}
    </Box>
  )
}

// Gaming Animation
const GamingAnimation = ({ isActive }: { isActive: boolean }) => {
  const { colorMode } = useColorMode()
  return (
    <Box position="relative" width="100%" height="100%">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            left: `${i * 30 + 10}%`,
            top: `${i * 25}%`,
            width: '40px',
            height: '40px',
            background: colorMode === 'dark' ? '#FF6B6B' : '#E53E3E',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          }}
          animate={
            isActive
              ? {
                  y: [0, -20, 0],
                  rotate: [0, 180, 360],
                }
              : {}
          }
          transition={{
            duration: 1,
            delay: i * 0.3,
            repeat: Infinity,
          }}
        />
      ))}
    </Box>
  )
}

// Food Animation
const FoodAnimation = ({ isActive }: { isActive: boolean }) => {
  return (
    <Box position="relative" width="100%" height="100%" display="flex" alignItems="center" justifyContent="center" gap={2}>
      {['🍔', '🍕', '🍰'].map((emoji, i) => (
        <motion.div
          key={i}
          style={{ fontSize: '40px' }}
          animate={isActive ? { y: [0, -15, 0], rotate: [0, 10, -10, 0] } : {}}
          transition={{ duration: 0.8, delay: i * 0.2, repeat: Infinity }}
        >
          {emoji}
        </motion.div>
      ))}
    </Box>
  )
}

// Treasure Animation
const TreasureAnimation = ({ isActive }: { isActive: boolean }) => {
  const { colorMode } = useColorMode()
  return (
    <Box position="relative" width="100%" height="100%" display="flex" alignItems="center" justifyContent="center">
      <motion.div
        style={{
          fontSize: '60px',
        }}
        animate={isActive ? { rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] } : {}}
        transition={{ duration: 1, repeat: Infinity }}
      >
        💎
      </motion.div>
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: colorMode === 'dark' ? '#FFD700' : '#FFA500',
            left: `${50 + Math.cos((i * 2 * Math.PI) / 5) * 40}%`,
            top: `${50 + Math.sin((i * 2 * Math.PI) / 5) * 40}%`,
          }}
          animate={isActive ? { scale: [1, 1.5, 1], opacity: [1, 0.5, 1] } : {}}
          transition={{ duration: 1, delay: i * 0.2, repeat: Infinity }}
        />
      ))}
    </Box>
  )
}

// Racing Animation (F1 Simulator)
const RacingAnimation = ({ isActive }: { isActive: boolean }) => {
  const { colorMode } = useColorMode()
  return (
    <Box position="relative" width="100%" height="100%" overflow="hidden">
      <motion.div
        style={{
          position: 'absolute',
          bottom: '20%',
          left: isActive ? '100%' : '-50px',
          width: '50px',
          height: '30px',
          background: colorMode === 'dark' ? '#FF6B6B' : '#E53E3E',
          borderRadius: '5px',
        }}
        animate={isActive ? { left: ['-50px', '100%'] } : {}}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      >
        <Box
          position="absolute"
          top="-10px"
          left="10px"
          width="20px"
          height="15px"
          bg={colorMode === 'dark' ? '#2D3748' : '#4A5568'}
          borderRadius="3px"
        />
      </motion.div>
      {/* Road lines */}
      {[...Array(3)].map((_, i) => (
        <Box
          key={i}
          position="absolute"
          bottom={`${30 + i * 20}%`}
          left="0"
          width="100%"
          height="2px"
          bg={colorMode === 'dark' ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)'}
        />
      ))}
    </Box>
  )
}

// Cricket Animation
const CricketAnimation = ({ isActive }: { isActive: boolean }) => {
  const { colorMode } = useColorMode()
  return (
    <Box position="relative" width="100%" height="100%" display="flex" alignItems="center" justifyContent="center">
      <motion.div
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: colorMode === 'dark' ? '#FFD700' : '#FFA500',
          position: 'relative',
        }}
        animate={isActive ? { y: [0, -50, 0], rotate: [0, 360] } : {}}
        transition={{ duration: 1, repeat: Infinity }}
      />
      <motion.div
        style={{
          position: 'absolute',
          width: '4px',
          height: '80px',
          background: colorMode === 'dark' ? '#8B4513' : '#654321',
          left: '50%',
          top: '20%',
          transform: 'translateX(-50%)',
        }}
        animate={isActive ? { rotate: [0, 45, -45, 0] } : {}}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </Box>
  )
}

// Dance Animation
const DanceAnimation = ({ isActive }: { isActive: boolean }) => {
  const { colorMode } = useColorMode()
  return (
    <Box position="relative" width="100%" height="100%" display="flex" alignItems="center" justifyContent="center" gap={3}>
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            width: '30px',
            height: '50px',
            background: colorMode === 'dark' ? ['#FF6B6B', '#4ECDC4', '#FFE66D'][i] : ['#E53E3E', '#319795', '#D69E2E'][i],
            borderRadius: '15px',
          }}
          animate={
            isActive
              ? {
                  y: [0, -20, 0],
                  rotate: [0, 10, -10, 0],
                }
              : {}
          }
          transition={{ duration: 0.6, delay: i * 0.2, repeat: Infinity }}
        />
      ))}
    </Box>
  )
}

// Battle Animation
const BattleAnimation = ({ isActive }: { isActive: boolean }) => {
  const { colorMode } = useColorMode()
  return (
    <Box position="relative" width="100%" height="100%">
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            left: i % 2 === 0 ? '20%' : '70%',
            top: i < 2 ? '30%' : '60%',
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            background: colorMode === 'dark' ? '#FF6B6B' : '#E53E3E',
          }}
          animate={
            isActive
              ? {
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1],
                }
              : {}
          }
          transition={{ duration: 0.8, delay: i * 0.2, repeat: Infinity }}
        />
      ))}
    </Box>
  )
}

// Maze Animation
const MazeAnimation = ({ isActive }: { isActive: boolean }) => {
  const { colorMode } = useColorMode()
  return (
    <Box position="relative" width="100%" height="100%" display="flex" alignItems="center" justifyContent="center">
      <motion.div
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: colorMode === 'dark' ? '#4ECDC4' : '#319795',
          position: 'relative',
        }}
        animate={
          isActive
            ? {
                x: [0, 30, -30, 0],
                y: [0, 30, -30, 0],
              }
            : {}
        }
        transition={{ duration: 2, repeat: Infinity }}
      />
      {/* Maze lines */}
      <Box
        position="absolute"
        width="80px"
        height="80px"
        border="2px solid"
        borderColor={colorMode === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'}
      />
    </Box>
  )
}

// Timer Animation
const TimerAnimation = ({ isActive }: { isActive: boolean }) => {
  const { colorMode } = useColorMode()
  const [seconds, setSeconds] = useState(60)

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setSeconds((prev: number) => (prev > 0 ? prev - 1 : 60))
      }, 100)
      return () => clearInterval(interval)
    } else {
      setSeconds(60)
    }
  }, [isActive])

  return (
    <Box position="relative" width="100%" height="100%" display="flex" alignItems="center" justifyContent="center">
      <motion.div
        style={{
          fontSize: '48px',
          fontWeight: 'bold',
          color: colorMode === 'dark' ? '#FF6B6B' : '#E53E3E',
        }}
        animate={isActive ? { scale: [1, 1.2, 1] } : {}}
        transition={{ duration: 0.5, repeat: Infinity }}
      >
        {seconds}
      </motion.div>
    </Box>
  )
}

// Default Animation
const DefaultAnimation = ({ isActive }: { isActive: boolean }) => {
  const { colorMode } = useColorMode()
  return (
    <Box position="relative" width="100%" height="100%" display="flex" alignItems="center" justifyContent="center">
      <motion.div
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: colorMode === 'dark' ? '#4ECDC4' : '#319795',
        }}
        animate={isActive ? { scale: [1, 1.2, 1], rotate: 360 } : {}}
        transition={{ duration: 1, repeat: Infinity }}
      />
    </Box>
  )
}

export default EventAnimation

