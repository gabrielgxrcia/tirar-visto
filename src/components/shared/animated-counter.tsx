"use client"

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useMotionValue, useTransform } from 'framer-motion'

interface AnimatedCounterProps {
  value: number
  duration?: number
}

export function AnimatedCounter({ value, duration = 2 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const rounded = useTransform(motionValue, (latest) => Math.round(latest))
  const isInView = useInView(ref, { once: true })
  
  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [motionValue, value, isInView])
  
  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.span
        style={{
          transition: `all ${duration}s cubic-bezier(0.17, 0.55, 0.55, 1)`
        }}
      >
        {rounded}
      </motion.span>
    </motion.span>
  )
}