"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Star, Quote, ChevronLeft, ChevronRight, Users, Award } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Software Developer",
    company: "Google",
    studentImage: "/placeholder.svg?height=100&width=100",
    parentImage: "/placeholder.svg?height=100&width=100",
    testimonial:
      "EduTech transformed my daughter's career. The courses are practical, engaging, and taught by industry experts. She landed her dream job within 3 months!",
    rating: 5,
    course: "Full Stack Development",
    achievement: "Got hired at Google",
  },
  {
    name: "Michael Chen",
    role: "Data Scientist",
    company: "Microsoft",
    studentImage: "/placeholder.svg?height=100&width=100",
    parentImage: "/placeholder.svg?height=100&width=100",
    testimonial:
      "The data science program exceeded our expectations. My son went from zero programming knowledge to landing a data scientist role at Microsoft.",
    rating: 5,
    course: "Data Science & Analytics",
    achievement: "Career transition success",
  },
  {
    name: "Emily Rodriguez",
    role: "UX Designer",
    company: "Apple",
    studentImage: "/placeholder.svg?height=100&width=100",
    parentImage: "/placeholder.svg?height=100&width=100",
    testimonial:
      "Amazing learning experience! The design course helped my daughter transition from marketing to UX design. The mentorship was incredible.",
    rating: 5,
    course: "UI/UX Design Masterclass",
    achievement: "Successful career pivot",
  },
  {
    name: "David Wilson",
    role: "Full Stack Developer",
    company: "Netflix",
    studentImage: "/placeholder.svg?height=100&width=100",
    parentImage: "/placeholder.svg?height=100&width=100",
    testimonial:
      "The comprehensive curriculum and hands-on projects prepared my son perfectly for the tech industry. He's now working at Netflix!",
    rating: 5,
    course: "Web Development",
    achievement: "Dream job achieved",
  },
  {
    name: "Lisa Anderson",
    role: "Digital Marketer",
    company: "Meta",
    studentImage: "/placeholder.svg?height=100&width=100",
    parentImage: "/placeholder.svg?height=100&width=100",
    testimonial:
      "EduTech's digital marketing course gave my daughter the skills and confidence to excel. She's now leading campaigns at Meta.",
    rating: 5,
    course: "Digital Marketing Pro",
    achievement: "Leadership role",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Title and Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                <Quote className="h-4 w-4" />
                <span>Success Stories</span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                What Our{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Students Say
                </span>
              </h2>

              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                Join thousands of successful graduates who have transformed their careers with EduTech. Our students and
                their families share their incredible journey to success.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center space-x-3 mb-2">
                  <Users className="h-8 w-8 text-blue-600" />
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">50K+</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 font-medium">Happy Students</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center space-x-3 mb-2">
                  <Award className="h-8 w-8 text-purple-600" />
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">95%</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 font-medium">Success Rate</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Sliding Testimonials */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="p-8"
                >
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6">
                    <Quote className="h-12 w-12 text-blue-600/20 dark:text-blue-400/20" />
                  </div>

                  {/* Course Badge */}
                  <div className="mb-6">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      {testimonials[currentIndex].course}
                    </span>
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed italic">
                    "{testimonials[currentIndex].testimonial}"
                  </blockquote>

                  {/* Rating */}
                  <div className="flex items-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Parent and Student Images */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg">
                          <Image
                            src={testimonials[currentIndex].parentImage || "/placeholder.svg"}
                            alt="Parent"
                            width={64}
                            height={64}
                            className="object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full overflow-hidden border-2 border-white dark:border-gray-700 shadow-lg">
                          <Image
                            src={testimonials[currentIndex].studentImage || "/placeholder.svg"}
                            alt="Student"
                            width={40}
                            height={40}
                            className="object-cover"
                          />
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white">{testimonials[currentIndex].name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                        </p>
                        <p className="text-xs text-green-600 dark:text-green-400 font-medium mt-1">
                          ✓ {testimonials[currentIndex].achievement}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls */}
              <div className="absolute bottom-4 right-4 flex items-center space-x-2">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors"
                >
                  <ChevronLeft className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full flex items-center justify-center transition-all"
                >
                  <ChevronRight className="h-5 w-5 text-white" />
                </button>
              </div>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index)
                      setIsAutoPlaying(false)
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 w-6"
                        : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
