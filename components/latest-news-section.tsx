"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowRight, Newspaper, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const latestNews = [
  {
    id: 1,
    title: "EduTech Launches New AI-Powered Learning Platform",
    summary: "Revolutionary platform uses artificial intelligence to personalize learning experiences for students.",
    image: "/placeholder.svg?height=300&width=500",
    date: "March 20, 2024",
    readTime: "3 min read",
    category: "Product Launch",
    featured: true,
  },
  {
    id: 2,
    title: "Partnership with Leading Tech Companies Announced",
    summary: "Strategic partnerships with Google, Microsoft, and Amazon to provide industry-relevant curriculum.",
    image: "/placeholder.svg?height=300&width=500",
    date: "March 18, 2024",
    readTime: "5 min read",
    category: "Partnership",
    featured: false,
  },
  {
    id: 3,
    title: "EduTech Reaches 100,000 Students Milestone",
    summary: "Platform celebrates major milestone with special offers and new course launches.",
    image: "/placeholder.svg?height=300&width=500",
    date: "March 15, 2024",
    readTime: "2 min read",
    category: "Milestone",
    featured: false,
  },
  {
    id: 4,
    title: "New Scholarship Program for Underrepresented Communities",
    summary: "Initiative aims to provide free access to premium courses for students from diverse backgrounds.",
    image: "/placeholder.svg?height=300&width=500",
    date: "March 12, 2024",
    readTime: "4 min read",
    category: "Social Impact",
    featured: false,
  },
  {
    id: 5,
    title: "EduTech Wins Best Online Learning Platform Award",
    summary: "Recognition from EdTech Awards 2024 for innovation in online education.",
    image: "/placeholder.svg?height=300&width=500",
    date: "March 10, 2024",
    readTime: "3 min read",
    category: "Award",
    featured: false,
  },
  {
    id: 6,
    title: "Mobile App Update Brings Enhanced Learning Features",
    summary: "Latest update includes offline learning, progress tracking, and improved user interface.",
    image: "/placeholder.svg?height=300&width=500",
    date: "March 8, 2024",
    readTime: "2 min read",
    category: "Product Update",
    featured: false,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export function LatestNewsSection() {
  const featuredNews = latestNews.find((news) => news.featured)
  const regularNews = latestNews.filter((news) => !news.featured).slice(0, 5)

  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-2xl" />
        <div className="absolute bottom-40 right-10 w-40 h-40 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-2xl" />
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
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Newspaper className="h-4 w-4" />
            <span>Latest News</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Stay{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Updated
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Get the latest updates, announcements, and insights from the EduTech community and industry.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Featured News - Large Card */}
          {featuredNews && (
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group h-full">
                <div className="relative h-64 lg:h-80 overflow-hidden">
                  <Image
                    src={featuredNews.image || "/placeholder.svg"}
                    alt={featuredNews.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center space-x-1">
                      <TrendingUp className="h-3 w-3" />
                      <span>Featured</span>
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-3 inline-block">
                      {featuredNews.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{featuredNews.title}</h3>
                    <p className="text-gray-200 text-sm mb-3">{featuredNews.summary}</p>
                    <div className="flex items-center space-x-4 text-gray-300 text-sm">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{featuredNews.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{featuredNews.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Regular News - Small Cards */}
          <motion.div variants={itemVariants} className="space-y-6 lg:col-span-1">
            {regularNews.map((news, index) => (
              <motion.div
                key={news.id}
                variants={itemVariants}
                whileHover={{ x: 5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex">
                  <div className="w-24 h-24 relative overflow-hidden">
                    <Image
                      src={news.image || "/placeholder.svg"}
                      alt={news.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 p-4">
                    <div className="flex items-center mb-2">
                      <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full text-xs font-medium">
                        {news.category}
                      </span>
                    </div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {news.title}
                    </h4>
                    <div className="flex items-center space-x-3 text-gray-500 dark:text-gray-400 text-xs">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{news.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{news.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Link href="/news">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              View All News
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
