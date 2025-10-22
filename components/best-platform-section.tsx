"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Check, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    left: ["Learn from industry mentors who guide you even after course completion", "Apply your skills directly to live or simulated startup projects.", ],
    right: ["Build a strong portfolio that stands out to clients and companies.", "Grow your personal brand and learn how to earn from your abilities.", ],
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

export function BestPlatformSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-purple-50/30 to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl" />
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-purple-400/10 to-blue-400/10 rounded-full blur-2xl" />
        <div className="absolute top-1/2 right-10 w-20 h-20 border-4 border-yellow-400/30 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Side - Image and Stats */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative">
              {/* Main Image */}
              <div className="relative w-full max-w-md mx-auto">
                <div className="bg-pink-100 dark:bg-pink-900/30 rounded-3xl p-8 shadow-2xl">
                  <div className="relative h-80 rounded-2xl overflow-hidden">
                    <Image
                      src={"https://www.usnews.com/object/image/00000191-80a0-d21f-a595-f3ed9f4d0000/gettyimages-2105091005.jpg?update-time=1724440047982&size=responsive640"}
                      alt="Student in classroom"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Stats Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    {/* <div>
                      <div className="text-2xl font-bold text-pink-600 dark:text-pink-400">50K+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Enrolled Learners</div>
                    </div> */}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
               Why  {" "}
                <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-blue-500 bg-clip-text text-transparent">
                  Mentrloop is the
                </span>
                <br />
                Best Option
              </h2>

              {/* Purple underline decoration */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-32 h-1 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full mb-8 origin-left"
              />
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-4">
                {features[0].left.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="h-3 w-3 text-white font-bold" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                {features[0].right.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="h-3 w-3 text-white font-bold" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              At Mentrloop, learning isn’t limited to watching lessons — it’s about transforming knowledge
into action.
We’ve built a system that bridges education and entrepreneurship, helping students from
every background step confidently into the real world.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
              🚀 Join the Loop Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
