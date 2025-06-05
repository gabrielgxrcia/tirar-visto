"use client"

import React, { memo } from "react"
import { motion } from "framer-motion"
import { STATS } from "@/lib/constants"
import { AnimatedCounter } from "@/components/shared/animated-counter"
import { tw, cn } from "@/lib/tailwind-utilities"

type StatItemProps = {
  stat: {
    value: number
    suffix?: string
    label: string
  }
  index: number
}

const StatItem = memo<StatItemProps>(({ stat, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={cn(
        "flex flex-col",
        "items-center sm:items-start",
        "gap-2",
        "w-full sm:w-auto",
        "text-center sm:text-left"
      )}
    >
      {/* Number */}
      <div className={cn(
        "font-inter font-medium",
        "text-[#232323]",
        "flex items-baseline",
        "justify-center sm:justify-start",
        "text-3xl sm:text-4xl lg:text-[44px]",
        "leading-[130.81%] tracking-[-0.05em]"
      )}>
        <AnimatedCounter value={stat.value} />
        {stat.suffix && <span className="text-current">{stat.suffix}</span>}
      </div>

      {/* Label */}
      <div className={cn(
        tw.typography.body,
        tw.typography.secondary,
        "text-center sm:text-left"
      )}>
        {stat.label}
      </div>
    </motion.div>
  )
})

StatItem.displayName = "StatItem"

export const Stats = memo(() => {
  return (
    <section 
      className={cn(
        "w-full",
        "flex justify-center",
        "2xl:justify-start 2xl:ml-[60px]"
      )}
      aria-label="Estatísticas da empresa"
    >
      <div className={cn(
        "grid grid-cols-1 sm:grid-cols-3",
        "divide-y sm:divide-y-0 sm:divide-x divide-[#E5E5E5]",
        "gap-6 sm:gap-0",
        "w-full max-w-[536px] 2xl:w-[536px]"
      )}>
        {STATS.map((stat, index) => (
          <div 
            key={stat.label} 
            className={cn(
              "flex justify-center",
              "py-6 sm:py-0",
              "sm:px-7 first:sm:pl-0 last:sm:pr-0"
            )}
          >
            <StatItem stat={stat} index={index} />
          </div>
        ))}
      </div>
    </section>
  )
})

Stats.displayName = "Stats"