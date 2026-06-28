"use client"

import {
  useRef,
  type ComponentPropsWithoutRef,
  type FC,
  type ReactNode,
} from "react"
import { motion, MotionValue, useScroll, useTransform } from "motion/react"

import { cn } from "@/lib/utils"

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string
}

export const TextReveal: FC<TextRevealProps> = ({ children, className }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end 0.75"],
  })

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string")
  }

  const words = children.split(" ")
  
  // Fade out the entire text container as we scroll past it
  const containerOpacity = useTransform(scrollYProgress, [0.80, 0.95], [1, 0])

  return (
    <div ref={sectionRef} className={cn("relative z-0 h-[200vh]", className)}>
      <motion.div
        style={{ opacity: containerOpacity }}
        className={
          "sticky top-0 mx-auto flex h-[50%] max-w-6xl items-center bg-transparent px-6 py-20"
        }
      >
        <span
          className={
            "flex flex-wrap p-4 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-black/20 dark:text-white/10"
          }
        >
          {words.map((word, i) => {
            const wordRevealEnd = 0.72
            const start = (i / words.length) * wordRevealEnd
            const end = ((i + 1) / words.length) * wordRevealEnd
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            )
          })}
        </span>
      </motion.div>
    </div>
  )
}

interface WordProps {
  children: ReactNode
  progress: MotionValue<number>
  range: [number, number]
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1])
  return (
    <span className="relative mx-1 lg:mx-1.5 inline-block">
      <span className="absolute left-0 top-0 opacity-20 dark:opacity-10 select-none pointer-events-none">{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className={"text-black dark:text-white dark:drop-shadow-[0_0_25px_rgba(255,255,255,0.25)] relative z-10"}
      >
        {children}
      </motion.span>
    </span>
  )
}
