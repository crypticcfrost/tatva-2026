import { Box, useColorMode } from '@chakra-ui/react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface VideoBackgroundProps {
  youtubeId?: string
  videoUrl?: string
  opacity?: number
}

const VideoBackground = ({ youtubeId, videoUrl, opacity = 0.4 }: VideoBackgroundProps) => {
  const { colorMode } = useColorMode()
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const videoOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7], [opacity, opacity * 0.6, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])

  if (!youtubeId && !videoUrl) {
    return null
  }

  return (
    <Box
      ref={containerRef}
      position="absolute"
      top="0"
      left="0"
      width="100%"
      height="100%"
      overflow="hidden"
      zIndex={0}
    >
      {youtubeId ? (
        <motion.iframe
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&playlist=${youtubeId}`}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '177.77777778vh',
            height: '56.25vw',
            minWidth: '100%',
            minHeight: '100%',
            border: 'none',
            opacity: videoOpacity,
            scale,
            pointerEvents: 'none',
          }}
          allow="autoplay; encrypted-media"
          allowFullScreen={false}
        />
      ) : videoUrl ? (
        <motion.video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            minWidth: '100%',
            minHeight: '100%',
            width: 'auto',
            height: 'auto',
            objectFit: 'cover',
            opacity: videoOpacity,
            scale,
          }}
        >
          <source src={videoUrl} type="video/mp4" />
        </motion.video>
      ) : null}
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bg={colorMode === 'dark' 
          ? 'linear-gradient(to bottom, rgba(10, 14, 39, 0.6), rgba(10, 14, 39, 0.85))'
          : 'linear-gradient(to bottom, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.85))'}
        zIndex={1}
      />
    </Box>
  )
}

export default VideoBackground

