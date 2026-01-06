import { Box, Image, useColorMode } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useEffect, useState, useMemo, memo } from 'react'

interface EventAnimationProps {
  type: string
  isActive: boolean
}

const EventAnimation = memo(({ type, isActive }: EventAnimationProps) => {
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
})

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

// Robot Animation with image support
const RobotAnimation = ({ isActive }: { isActive: boolean }) => {
  const { colorMode } = useColorMode()
  const robotImage = '/images/robot.png'
  
  return (
    <Box position="relative" width="100%" height="100%" display="flex" alignItems="center" justifyContent="center">
      {robotImage ? (
        <motion.div
          animate={
            isActive
              ? {
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.15, 1],
                  y: [0, -10, 0],
                }
              : {}
          }
          transition={{ duration: 0.6, repeat: Infinity }}
        >
          <Image
            src={robotImage}
            alt="Robot"
            width="100px"
            height="auto"
            filter={isActive ? 'drop-shadow(0 0 15px rgba(255, 107, 107, 0.6))' : 'none'}
            fallback={<RobotFallback colorMode={colorMode} isActive={isActive} />}
          />
        </motion.div>
      ) : (
        <RobotFallback colorMode={colorMode} isActive={isActive} />
      )}
    </Box>
  )
}

const RobotFallback = ({ colorMode, isActive }: { colorMode: string, isActive: boolean }) => (
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
)

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

// Camera Animation with image support
const CameraAnimation = ({ isActive }: { isActive: boolean }) => {
  const { colorMode } = useColorMode()
  const cameraImage = '/images/camera.png'
  
  return (
    <Box position="relative" width="100%" height="100%" display="flex" alignItems="center" justifyContent="center" overflow="hidden">
      {cameraImage ? (
        <motion.div
          animate={isActive ? { 
            scale: [1, 1.15, 1],
            rotate: [0, 5, -5, 0]
          } : {}}
          transition={{ duration: 0.8, repeat: Infinity }}
        >
          <Image
            src={cameraImage}
            alt="Camera"
            width="120px"
            height="auto"
            fallback={
              <CameraFallback colorMode={colorMode} isActive={isActive} />
            }
          />
        </motion.div>
      ) : (
        <CameraFallback colorMode={colorMode} isActive={isActive} />
      )}
      
      {/* Flash effect */}
      {isActive && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 1, 0], scale: [0, 2, 0] }}
          transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
          style={{
            position: 'absolute',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.8), transparent)',
            pointerEvents: 'none',
          }}
        />
      )}
    </Box>
  )
}

const CameraFallback = ({ colorMode, isActive }: { colorMode: string, isActive: boolean }) => (
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
)

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

// Gaming Animation with controller image
const GamingAnimation = ({ isActive }: { isActive: boolean }) => {
  const { colorMode } = useColorMode()
  const controllerImage = '/images/gaming-controller.png'
  
  return (
    <Box position="relative" width="100%" height="100%" display="flex" alignItems="center" justifyContent="center">
      {controllerImage ? (
        <motion.div
          animate={
            isActive
              ? {
                  y: [0, -15, 0],
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.1, 1],
                }
              : {}
          }
          transition={{ duration: 0.8, repeat: Infinity }}
        >
          <Image
            src={controllerImage}
            alt="Gaming Controller"
            width="100px"
            height="auto"
            filter={isActive ? 'drop-shadow(0 0 20px rgba(255, 107, 107, 0.8))' : 'none'}
            fallback={<GamingFallback colorMode={colorMode} isActive={isActive} />}
          />
        </motion.div>
      ) : (
        <GamingFallback colorMode={colorMode} isActive={isActive} />
      )}
      
      {/* Particle effects - memoized */}
      {isActive && useMemo(() => {
        return [...Array(5)].map((_, i) => {
          const angle = (i * 2 * Math.PI) / 5
          return (
            <motion.div
              key={i}
              style={{
                position: 'absolute',
                left: `${50 + Math.cos(angle) * 30}%`,
                top: `${50 + Math.sin(angle) * 30}%`,
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: colorMode === 'dark' ? '#FF6B6B' : '#E53E3E',
              }}
              animate={{
                scale: [0, 1.5, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1,
                delay: i * 0.2,
                repeat: Infinity,
              }}
            />
          )
        })
      }, [isActive, colorMode])}
    </Box>
  )
}

const GamingFallback = ({ colorMode, isActive }: { colorMode: string, isActive: boolean }) => (
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

// Food Animation with image support
const FoodAnimation = ({ isActive }: { isActive: boolean }) => {
  const foodImages = ['/images/food1.png', '/images/food2.png', '/images/food3.png']
  const foodEmojis = ['🍔', '🍕', '🍰']
  
  return (
    <Box position="relative" width="100%" height="100%" display="flex" alignItems="center" justifyContent="center" gap={3} flexWrap="wrap">
      {foodImages.map((img, i) => (
        <motion.div
          key={i}
          animate={isActive ? { 
            y: [0, -20, 0], 
            rotate: [0, 15, -15, 0],
            scale: [1, 1.1, 1]
          } : {}}
          transition={{ duration: 0.8, delay: i * 0.2, repeat: Infinity }}
        >
          <Image
            src={img}
            alt={`Food ${i + 1}`}
            width="60px"
            height="60px"
            objectFit="contain"
            fallback={
              <Box fontSize="40px" textAlign="center">
                {foodEmojis[i]}
              </Box>
            }
          />
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

// Racing Animation (F1 Simulator) with car image
const RacingAnimation = ({ isActive }: { isActive: boolean }) => {
  const { colorMode } = useColorMode()
  const carImage = '/images/racing-car.png'
  
  // Memoize speed lines positions - hooks must be called unconditionally
  const speedLines = useMemo(() => {
    const positions = [20, 35, 50, 65, 80]
    const leftPositions = [10, 30, 50, 70, 90]
    return positions.map((bottom, i) => ({
      bottom,
      left: leftPositions[i],
      key: i,
    }))
  }, [])
  
  return (
    <Box position="relative" width="100%" height="100%" overflow="hidden">
      {/* Road background */}
      <Box
        position="absolute"
        bottom="0"
        left="0"
        width="100%"
        height="60%"
        bg={colorMode === 'dark' ? 'rgba(50, 50, 50, 0.3)' : 'rgba(100, 100, 100, 0.2)'}
      />
      
      {/* Road lines */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            bottom: `${30 + i * 20}%`,
            left: '0',
            width: '100%',
            height: '3px',
            background: colorMode === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.6)',
            borderTop: `2px dashed ${colorMode === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'}`,
          }}
          animate={isActive ? { x: [0, -100, 0] } : {}}
          transition={{ duration: 0.5, repeat: Infinity, ease: 'linear' }}
        />
      ))}
      
      {/* Racing car */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '25%',
          left: 0,
          width: '80px',
          height: 'auto',
        }}
        initial={{ x: -80 }}
        animate={isActive ? { 
          x: [-80, 500]
        } : { 
          x: -80
        }}
        transition={isActive ? { duration: 2, repeat: Infinity, ease: 'linear' } : { duration: 0.3 }}
      >
        {carImage ? (
          <Image
            src={carImage}
            alt="Racing Car"
            width="100%"
            height="auto"
            filter={isActive ? 'drop-shadow(0 0 10px rgba(255, 153, 51, 0.8))' : 'none'}
            fallback={<RacingCarFallback colorMode={colorMode} />}
          />
        ) : (
          <RacingCarFallback colorMode={colorMode} />
        )}
      </motion.div>
      
      {/* Speed lines */}
      {isActive && speedLines.map((line) => (
        <motion.div
          key={line.key}
          style={{
            position: 'absolute',
            bottom: `${line.bottom}%`,
            left: `${line.left}%`,
            width: '2px',
            height: '30px',
            background: 'rgba(255, 255, 255, 0.6)',
          }}
          animate={{ x: [0, -200], opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, delay: line.key * 0.1 }}
        />
      ))}
    </Box>
  )
}

const RacingCarFallback = ({ colorMode }: { colorMode: string }) => (
  <Box
    width="50px"
    height="30px"
    bg={colorMode === 'dark' ? '#FF6B6B' : '#E53E3E'}
    borderRadius="5px"
    position="relative"
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
  </Box>
)

// Cricket Animation with ball and bat images
const CricketAnimation = ({ isActive }: { isActive: boolean }) => {
  const { colorMode } = useColorMode()
  const ballImage = '/images/cricket-ball.png'
  const batImage = '/images/cricket-bat.png'
  
  return (
    <Box position="relative" width="100%" height="100%" display="flex" alignItems="center" justifyContent="center">
      {/* Cricket bat */}
      <motion.div
        style={{
          position: 'absolute',
          left: '50%',
          top: '20%',
          transformOrigin: 'bottom center',
        }}
        animate={isActive ? { 
          rotate: [0, 45, -45, 0],
          x: [-20, 0, 20, 0]
        } : {}}
        transition={{ duration: 0.8, repeat: Infinity }}
      >
        {batImage ? (
          <Image
            src={batImage}
            alt="Cricket Bat"
            width="60px"
            height="auto"
            transform="rotate(-90deg)"
            fallback={
              <Box
                width="4px"
                height="80px"
                bg={colorMode === 'dark' ? '#8B4513' : '#654321'}
              />
            }
          />
        ) : (
          <Box
            width="4px"
            height="80px"
            bg={colorMode === 'dark' ? '#8B4513' : '#654321'}
          />
        )}
      </motion.div>
      
      {/* Cricket ball */}
      <motion.div
        style={{
          position: 'relative',
        }}
        animate={isActive ? { 
          y: [0, -60, 0], 
          rotate: [0, 360],
          x: [0, 30, 0]
        } : {}}
        transition={{ duration: 1, repeat: Infinity }}
      >
        {ballImage ? (
          <Image
            src={ballImage}
            alt="Cricket Ball"
            width="50px"
            height="50px"
            fallback={
              <Box
                width="60px"
                height="60px"
                borderRadius="50%"
                bg={colorMode === 'dark' ? '#FFD700' : '#FFA500'}
              />
            }
          />
        ) : (
          <Box
            width="60px"
            height="60px"
            borderRadius="50%"
            bg={colorMode === 'dark' ? '#FFD700' : '#FFA500'}
          />
        )}
      </motion.div>
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
    if (!isActive) {
      setSeconds(60)
      return
    }
    
    const interval = setInterval(() => {
      setSeconds((prev: number) => (prev > 0 ? prev - 1 : 60))
    }, 100)
    
    return () => clearInterval(interval)
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

EventAnimation.displayName = 'EventAnimation'

export default EventAnimation