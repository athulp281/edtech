"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/cta-section"

const blogPosts = [
  {
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt:
      "Discover the latest trends shaping the future of web development, from AI integration to progressive web apps.",
    image: "/placeholder.svg?height=300&width=500",
    author: "John Smith",
    date: "March 15, 2024",
    category: "Web Development",
  },
  {
    title: "How to Break into Data Science: A Complete Roadmap",
    excerpt: "A comprehensive guide for beginners looking to start their journey in data science and analytics.",
    image: "/placeholder.svg?height=300&width=500",
    author: "Sarah Johnson",
    date: "March 12, 2024",
    category: "Data Science",
  },
  {
    title: "UI/UX Design Principles Every Developer Should Know",
    excerpt: "Essential design principles that will help developers create better user experiences.",
    image: "/placeholder.svg?height=300&width=500",
    author: "Mike Chen",
    date: "March 10, 2024",
    category: "Design",
  },
  {
    title: "The Rise of AI in Education: Transforming Learning",
    excerpt: "Exploring how artificial intelligence is revolutionizing the education sector and online learning.",
    image: "/placeholder.svg?height=300&width=500",
    author: "Emily Rodriguez",
    date: "March 8, 2024",
    category: "Technology",
  },
  {
    title: "Building Your First Mobile App: A Beginner's Guide",
    excerpt: "Step-by-step guide to creating your first mobile application using modern frameworks.",
    image: "/placeholder.svg?height=300&width=500",
    author: "David Wilson",
    date: "March 5, 2024",
    category: "Mobile Development",
  },
  {
    title: "Cybersecurity Best Practices for Remote Workers",
    excerpt: "Essential security measures every remote worker should implement to protect their data.",
    image: "/placeholder.svg?height=300&width=500",
    author: "Lisa Anderson",
    date: "March 3, 2024",
    category: "Cybersecurity",
  },
]

export default function BlogsClientPage() {
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
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Blog</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest insights, tutorials, and industry trends from our expert instructors and
              guest writers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">{post.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  <Link href={`/blogs/${post.title.toLowerCase().replace(/\s+/g, "-")}`}>
                    <Button variant="outline" className="w-full bg-transparent dark:border-gray-600">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
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
