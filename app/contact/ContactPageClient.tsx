"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "info@edutech.com",
    description: "Send us an email anytime!",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+1 (555) 123-4567",
    description: "Mon-Fri from 8am to 5pm",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "123 Education Street",
    description: "Learning City, LC 12345",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: "Mon - Fri: 8am - 5pm",
    description: "Weekend: 10am - 2pm",
  },
]

export default function ContactPageClient() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have questions about our courses or need support? We're here to help! Get in touch with our team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send us a Message</h2>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName" className="dark:text-gray-300">
                    First Name
                  </Label>
                  <Input id="firstName" placeholder="John" className="mt-1 dark:bg-gray-700 dark:border-gray-600" />
                </div>
                <div>
                  <Label htmlFor="lastName" className="dark:text-gray-300">
                    Last Name
                  </Label>
                  <Input id="lastName" placeholder="Doe" className="mt-1 dark:bg-gray-700 dark:border-gray-600" />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="dark:text-gray-300">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="mt-1 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="dark:text-gray-300">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  className="mt-1 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>

              <div>
                <Label htmlFor="subject" className="dark:text-gray-300">
                  Subject
                </Label>
                <Input
                  id="subject"
                  placeholder="How can we help you?"
                  className="mt-1 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>

              <div>
                <Label htmlFor="message" className="dark:text-gray-300">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us more about your inquiry..."
                  rows={5}
                  className="mt-1 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>

              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Get in Touch</h2>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{info.title}</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">{info.details}</p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">How do I enroll in a course?</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Simply browse our courses, select the one you want, and click "Enroll Now" to get started.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Do you offer certificates?</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Yes, we provide certificates of completion for all our courses upon successful completion.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">What's your refund policy?</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    We offer a 30-day money-back guarantee if you're not satisfied with your course.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
