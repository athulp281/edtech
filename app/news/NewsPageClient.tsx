"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/cta-section"

const newsItems = [
  {
    title: "EduTech Launches New AI-Powered Learning Platform",
    summary: "Revolutionary platform uses artificial intelligence to personalize learning experiences for students.",
    image: "/placeholder.svg?height=300&width=500",
    date: "March 20, 2024",
    readTime: "3 min read",
    category: "Product Launch",
  },
  {
    title: "Partnership with Leading Tech Companies Announced",
    summary: "Strategic partnerships with Google, Microsoft, and Amazon to provide industry-relevant curriculum.",
    image: "/placeholder.svg?height=300&width=500",
    date: "March 18, 2024",
    readTime: "5 min read",
    category: "Partnership",
  },
  {
    title: "EduTech Reaches 100,000 Students Milestone",
    summary: "Platform celebrates major milestone with special offers and new course launches.",
    image: "/placeholder.svg?height=300&width=500",
    date: "March 15, 2024",
    readTime: "2 min read",
    category: "Milestone",
  },
  {
    title: "New Scholarship Program for Underrepresented Communities",
    summary: "Initiative aims to provide free access to premium courses for students from diverse backgrounds.",
    image: "/placeholder.svg?height=300&width=500",
    date: "March 12, 2024",
    readTime: "4 min read",
    category: "Social Impact",
  },
  {
    title: "EduTech Wins Best Online Learning Platform Award",
    summary: "Recognition from EdTech Awards 2024 for innovation in online education.",
    image: "/placeholder.svg?height=300&width=500",
    date: "March 10, 2024",
    readTime: "3 min read",
    category: "Award",
  },
  {
    title: "Mobile App Update Brings Enhanced Learning Features",
    summary: "Latest update includes offline learning, progress tracking, and improved user interface.",
    image: "/placeholder.svg?height=300&width=500",
    date: "March 8, 2024",
    readTime: "2 min read",
    category: "Product Update",
  },
]

export default function NewsPageClient() {
  const handleGetStarted = () => {
    // You can add enrollment popup logic here or redirect to courses
    window.location.href = "/courses"
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Latest News</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Stay informed about the latest developments, partnerships, and achievements at EduTech.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {newsItems.map((item, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <div className="relative h-48 md:h-full">
                      <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                    </div>
                  </div>

                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center mb-3">
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                        {item.category}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h2>

                    <p className="text-gray-600 dark:text-gray-300 mb-4">{item.summary}</p>

                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{item.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{item.readTime}</span>
                        </div>
                      </div>
                    </div>

                    <Button variant="outline" className="w-full bg-transparent dark:border-gray-600">
                      Read Full Story
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section before Footer */}
      <CTASection onGetStarted={handleGetStarted} />
    </div>
  )
}
