"use client"

import { motion } from "framer-motion"
import { Monitor, DollarSign, Target } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Faster Learning with Quick Market Apply",
    description:
      "Learn only what matters — apply your skills to real projects right away."
,
  },
  {
    icon: Target,
    title: "Mentored by Experts",
    description:
      "Learn directly from professionals who’ve built real careers and startups.",
  },
  {
    icon: Target,
    title: "Portfolio & Personal Brand Building",
    description:
      "Showcase your work and grow your online identity with guided support.",
  },
   {
    icon: Target,
    title: "Job-Oriented Skills",
    description:
      "Every course is designed to help you earn, create, or get hired faster.",
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

export function PersonalizedEducationSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-blue-400/10 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Header Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Title */}
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Why Choose Mentrloop
                </span>{" "}
                {/* that fits every child's educational needs */}
              </h2>

              {/* Purple underline decoration */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-32 h-1 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full origin-left"
              />
            </motion.div>

            {/* Right Side - Description */}
            {/* <motion.div variants={itemVariants} className="lg:pt-8">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Personalized online education goes beyond a series of virtual classes and uninspiring instructions that
                often miss the mark. At Interval, we believe in bridging the gap between knowledge and accessibility.
                Our approach is centered on providing education that's customized to meet the unique needs of every
                child.
              </p>
            </motion.div> */}
          </div>

          {/* Features Cards */}
          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-10 w-10 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>

                  {/* Hover line decoration */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    className="h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 mt-6 transition-all duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
