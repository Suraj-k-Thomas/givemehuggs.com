import { motion, useReducedMotion } from 'framer-motion'

/**
 * Subtle scroll-in fade + rise. Kept deliberately light: one transform, one
 * opacity, runs once, and collapses to a plain wrapper when the visitor has
 * asked for reduced motion.
 */
export default function Reveal({ children, delay = 0, y = 18, className = '', as = 'div' }) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as] ?? motion.div

  if (reduce) return <div className={className}>{children}</div>

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}
