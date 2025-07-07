"use client"

import { motion } from "framer-motion"
import { Brain, Trophy, Code, Languages } from "lucide-react"

const categories = [
  {
    title: "Academic Courses",
    icon: Brain,
    bgColor: "bg-green-100 dark:bg-green-900/30",
    iconColor: "text-purple-600 dark:text-purple-400",
    description: "Comprehensive academic programs designed to build strong foundations in core subjects.",
  },
  {
    title: "Non Academic Courses",
    icon: Trophy,
    bgColor: "bg-pink-100 dark:bg-pink-900/30",
    iconColor: "text-red-500 dark:text-red-400",
    description: "Practical skills and creative courses for personal and professional development.",
  },
  {
    title: "Academic Clubs",
    icon: Code,
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-600 dark:text-blue-400",
    description: "Interactive learning communities and coding clubs for collaborative growth.",
  },
  {
    title: "Language Courses",
    icon: Languages,
    bgColor: "bg-orange-100 dark:bg-orange-900/30",
    iconColor: "text-orange-500 dark:text-orange-400",
    description: "Master new languages with our comprehensive language learning programs.",
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

export function LearningCategoriesSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-blue-400/10 to-green-400/10 rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            We help{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">you</span>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full origin-left"
              />
            </span>{" "}
            to learn better.
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our diverse range of learning opportunities designed to help you achieve your educational and
            professional goals.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
            >
              <div className="relative mb-6">
                <div
                  className={`w-20 h-20 ${category.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <category.icon className={`h-10 w-10 ${category.iconColor}`} />
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {category.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{category.description}</p>

              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                className="h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mt-6 transition-all duration-300"
              />
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
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Ready to explore our learning categories and find the perfect course for you?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Explore All Categories
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
