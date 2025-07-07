"use client"

import { motion } from "framer-motion"
import { CourseCard } from "@/components/course-card"
import { Search, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const allCourses = [
  {
    title: "Full Stack Web Development",
    description: "Master modern web development with React, Node.js, and MongoDB. Build real-world applications.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.8,
    duration: "12 weeks",
    students: 2500,
    price: "$299",
  },
  {
    title: "Data Science & Analytics",
    description: "Learn Python, machine learning, and data visualization to become a data scientist.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.9,
    duration: "16 weeks",
    students: 1800,
    price: "$399",
  },
  {
    title: "UI/UX Design Masterclass",
    description: "Create stunning user interfaces and experiences with Figma, Adobe XD, and design principles.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.7,
    duration: "10 weeks",
    students: 3200,
    price: "$249",
  },
  {
    title: "Digital Marketing Pro",
    description: "Master SEO, social media marketing, Google Ads, and content marketing strategies.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.6,
    duration: "8 weeks",
    students: 2100,
    price: "$199",
  },
  {
    title: "Mobile App Development",
    description: "Build native iOS and Android apps using React Native and Flutter frameworks.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.7,
    duration: "14 weeks",
    students: 1900,
    price: "$349",
  },
  {
    title: "Cybersecurity Fundamentals",
    description: "Learn ethical hacking, network security, and cybersecurity best practices.",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.8,
    duration: "12 weeks",
    students: 1500,
    price: "$279",
  },
]

export default function CoursesClientPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">All Courses</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive collection of courses designed to help you master new skills and advance your
            career.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col md:flex-row gap-4 mb-12"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input placeholder="Search courses..." className="pl-10 h-12 dark:bg-gray-800 dark:border-gray-700" />
          </div>
          <Button variant="outline" className="h-12 px-6 bg-transparent dark:border-gray-600">
            <Filter className="mr-2 h-5 w-5" />
            Filter
          </Button>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allCourses.map((course, index) => (
            <CourseCard key={index} {...course} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
