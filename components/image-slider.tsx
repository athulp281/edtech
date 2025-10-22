"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const images = [
  "/slide1.jpg?height=400&width=600",
  "/slide2.png?height=400&width=600",
  "/slide3.jpg?height=400&width=600",
  "/slide4.webp?height=400&width=600",
]

export function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 4000) // Changed to 4 seconds for better viewing
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl bg-transparent">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 bg-transparent"
        >
          <Image
            src={images[currentIndex] || "/placeholder.svg"}
            alt={`Educational content ${currentIndex + 1}`}
            fill
            className="object-cover rounded-2xl"
            priority={currentIndex === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl" />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
