import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface SideAuroraProps {
  side: 'left' | 'right'
  colorA: string
  colorB: string
}

const SideAurora = ({ side, colorA, colorB }: SideAuroraProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, side === 'left' ? -120 : 120])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, side === 'left' ? -6 : 6])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 0.9, 0.75])

  return (
    <motion.div
      ref={ref}
      style={{
        position: 'fixed',
        [side]: 0,
        top: side === 'left' ? '8vh' : '12vh',
        width: '18vw',
        height: '88vh',
        background: `linear-gradient(160deg, ${colorA}, ${colorB})`,
        filter: 'blur(18px)',
        mixBlendMode: 'screen',
        zIndex: 0,
        y,
        rotate,
        opacity,
        borderRadius: '50%',
      }}
      animate={{
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}

export default SideAurora

