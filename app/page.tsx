"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { TypedEffect } from "@/components/typed-effect"
import { ImageSlider } from "@/components/image-slider"
import { Button } from "@/components/ui/button"
import { EnrollmentPopup } from "@/components/enrollment-popup"
import { VideoPopup } from "@/components/video-popup"
import { LearningCategoriesSection } from "@/components/learning-categories-section"
import { BestPlatformSection } from "@/components/best-platform-section"
import { PersonalizedEducationSection } from "@/components/personalized-education-section"
import { Play, BookOpen, Users, Award, TrendingUp, ArrowRight } from "lucide-react"
import { FeaturedCourses } from "@/components/featured-courses"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { LatestNewsSection } from "@/components/latest-news-section"

const stats = [
  { icon: Users, value: "50K+", label: "Students Enrolled" },
  { icon: BookOpen, value: "200+", label: "Courses Available" },
  { icon: Award, value: "95%", label: "Success Rate" },
  { icon: TrendingUp, value: "4.8/5", label: "Average Rating" },
]

export default function HomePage() {
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false)
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden min-h-screen flex items-center py-16 md:py-20"
      >
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Text Content - First on mobile, First on desktop */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-1"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 px-3 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6"
              >
                <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                <span>Transform Your Career Today</span>
              </motion.div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 leading-tight">
                Transform Your Future with{" "}
                <TypedEffect
                  texts={["Quality Education", "Expert Mentorship", "Practical Skills", "Career Growth"]}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block sm:inline"
                />
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-10 leading-relaxed">
                Join thousands of learners who have advanced their careers with our industry-leading courses and expert
                instructors.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 sm:mb-12">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                  onClick={() => setIsEnrollmentOpen(true)}
                >
                  Start Learning Today
                  <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 bg-transparent dark:border-gray-600 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 w-full sm:w-auto"
                  onClick={() => setIsVideoOpen(true)}
                >
                  <Play className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
                  Watch Demo
                </Button>
              </div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8"
              >
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-2 border-white dark:border-gray-900"
                      />
                    ))}
                  </div>
                  <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">
                    50,000+ Happy Students
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-yellow-400 text-base sm:text-lg">★★★★★</span>
                  <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">4.8/5 Rating</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Image Slider - Second on mobile, Second on desktop */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative order-2 lg:order-2 mb-8 lg:mb-0"
            >
              <ImageSlider />

              {/* Floating elements - Hidden on mobile, visible on larger screens */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-lg hidden sm:block"
              >
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Live Classes</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-lg hidden sm:block"
              >
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Award className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">Certified</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Industry Standard</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Platform Section */}
      <section id="best-platform">
        <BestPlatformSection />
      </section>

      {/* Personalized Education Section */}
      <section id="personalized-education">
        <PersonalizedEducationSection />
      </section>

      {/* Learning Categories Section */}
      <section id="learning-categories">
        <LearningCategoriesSection />
      </section>

      {/* Featured Courses */}
      <section id="courses" className="py-20 bg-white dark:bg-gray-900">
        <FeaturedCourses />
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800">
        <TestimonialsSection />
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20">
        <FAQSection />
      </section>

      {/* Latest News Section */}
      <section id="news" className="py-20">
        <LatestNewsSection />
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Learning Journey?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join our community of learners and take the first step towards your dream career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
                onClick={() => setIsEnrollmentOpen(true)}
              >
                Get Started Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popups */}
      <EnrollmentPopup isOpen={isEnrollmentOpen} onClose={() => setIsEnrollmentOpen(false)} />
      <VideoPopup isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} videoId="dQw4w9WgXcQ" />
    </div>
  )
}
