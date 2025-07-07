"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react"

const courses = [
  {
    title: "Full Stack Web Development",
    description:
      "Master modern web development with React, Node.js, and MongoDB. Build real-world applications from scratch.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.8,
    duration: "12 weeks",
    students: 2500,
    price: "$299",
    badge: "Most Popular",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Data Science & Analytics",
    description: "Learn Python, machine learning, and data visualization to become a professional data scientist.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.9,
    duration: "16 weeks",
    students: 1800,
    price: "$399",
    badge: "Highest Rated",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "UI/UX Design Masterclass",
    description: "Create stunning user interfaces and experiences with Figma, Adobe XD, and modern design principles.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.7,
    duration: "10 weeks",
    students: 3200,
    price: "$249",
    badge: "Creative",
    color: "from-green-500 to-teal-500",
  },
  {
    title: "Digital Marketing Pro",
    description: "Master SEO, social media marketing, Google Ads, and comprehensive content marketing strategies.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.6,
    duration: "8 weeks",
    students: 2100,
    price: "$199",
    badge: "Best Value",
    color: "from-orange-500 to-red-500",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export function FeaturedCourses() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4"
          >
            <Sparkles className="h-4 w-4" />
            <span>Featured Courses</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Transform Your{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Career Today
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our most popular courses designed by industry experts to help you achieve your career goals and
            master cutting-edge technologies.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center space-x-6 mt-8"
          >
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
              <TrendingUp className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium">50,000+ Students Enrolled</span>
            </div>
            <div className="w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full" />
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
              <Sparkles className="h-5 w-5 text-yellow-500" />
              <span className="text-sm font-medium">4.8/5 Average Rating</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {courses.map((course, index) => (
            <motion.div key={index} variants={itemVariants} whileHover={{ y: -10, scale: 1.02 }}>
              <EnhancedCourseCard {...course} index={index} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            Explore All Courses
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

interface EnhancedCourseCardProps {
  title: string
  description: string
  image: string
  rating: number
  duration: string
  students: number
  price: string
  badge: string
  color: string
  index: number
}

function EnhancedCourseCard({
  title,
  description,
  image,
  rating,
  duration,
  students,
  price,
  badge,
  color,
  index,
}: EnhancedCourseCardProps) {
  return (
    <motion.div
      whileHover={{ rotateY: 5, rotateX: 5 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group perspective-1000"
    >
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          whileHover={{ scale: 1.1 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        <div className="absolute top-4 left-4">
          <span className={`bg-gradient-to-r ${color} text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg`}>
            {badge}
          </span>
        </div>

        <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-3 py-1">
          <span className="text-sm font-bold text-gray-900 dark:text-white">{price}</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="absolute bottom-4 left-4 right-4"
        >
          <div className="flex items-center space-x-2 text-white text-sm">
            <div className="flex items-center space-x-1">
              <span className="text-yellow-400">★</span>
              <span>{rating}</span>
            </div>
            <span>•</span>
            <span>{students} students</span>
          </div>
        </motion.div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 leading-relaxed">{description}</p>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">{duration}</span>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-full bg-gradient-to-r ${color} text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group`}
        >
          <span className="group-hover:scale-110 inline-block transition-transform">Enroll Now</span>
        </motion.button>
      </div>
    </motion.div>
  )
}
