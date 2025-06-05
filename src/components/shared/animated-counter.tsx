"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

interface AnimatedCounterProps {
  value: number
  duration?: number
  delay?: number
}

export const AnimatedCounter = ({ value, duration = 2000, delay = 0 }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!isInView) return

    const startTime = Date.now()
    const endValue = value

    const updateCount = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime - delay) / duration, 1)

      if (progress < 0) {
        requestAnimationFrame(updateCount)
        return
      }

      const currentValue = Math.floor(endValue * progress)
      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(updateCount)
      }
    }

    requestAnimationFrame(updateCount)
  }, [value, duration, delay, isInView])

  return <span ref={ref}>{count}</span>
}