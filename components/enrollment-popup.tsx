"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, User, Mail, Phone, MessageCircle, Globe, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"

interface EnrollmentPopupProps {
  isOpen: boolean
  onClose: () => void
}

const countryCodes = [
  { code: "+1", country: "US", flag: "🇺🇸" },
  { code: "+44", country: "UK", flag: "🇬🇧" },
  { code: "+91", country: "IN", flag: "🇮🇳" },
  { code: "+86", country: "CN", flag: "🇨🇳" },
  { code: "+49", country: "DE", flag: "🇩🇪" },
  { code: "+33", country: "FR", flag: "🇫🇷" },
  { code: "+81", country: "JP", flag: "🇯🇵" },
  { code: "+82", country: "KR", flag: "🇰🇷" },
  { code: "+61", country: "AU", flag: "🇦🇺" },
  { code: "+55", country: "BR", flag: "🇧🇷" },
]

const countries = [
  "United States",
  "United Kingdom",
  "India",
  "China",
  "Germany",
  "France",
  "Japan",
  "South Korea",
  "Australia",
  "Brazil",
  "Canada",
  "Mexico",
  "Spain",
  "Italy",
  "Netherlands",
  "Sweden",
  "Norway",
  "Denmark",
  "Finland",
  "Switzerland",
  "Austria",
  "Belgium",
  "Portugal",
  "Ireland",
  "New Zealand",
  "Singapore",
  "Malaysia",
  "Thailand",
  "Philippines",
  "Indonesia",
]

const purposes = [
  "Career Change",
  "Skill Enhancement",
  "Professional Development",
  "Academic Requirements",
  "Personal Interest",
  "Startup/Entrepreneurship",
  "Freelancing",
  "Job Promotion",
  "Industry Certification",
  "Other",
]

export function EnrollmentPopup({ isOpen, onClose }: EnrollmentPopupProps) {
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    email: "",
    purpose: "",
    phoneCode: "+1",
    phoneNumber: "",
    whatsappCode: "+1",
    whatsappNumber: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
    onClose()
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 p-6">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="h-5 w-5 text-white" />
              </button>
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-2">Start Your Learning Journey</h2>
                <p className="text-blue-100">Join thousands of successful students worldwide</p>
              </div>
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Side - Image and Title - Hidden on mobile */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 p-6 lg:p-8 flex flex-col justify-center items-center text-center min-h-[300px] lg:min-h-[500px] hidden lg:flex">
                <div className="relative w-48 h-36 lg:w-64 lg:h-48 mb-4 lg:mb-6 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Learning Journey"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent" />
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3 lg:mb-4">
                  Let's Grow{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    With Us
                  </span>
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-base lg:text-lg leading-relaxed mb-4 lg:mb-0">
                  Transform your career with industry-leading courses, expert mentorship, and a supportive learning
                  community.
                </p>

                <div className="mt-4 lg:mt-8 grid grid-cols-2 gap-4 w-full max-w-sm">
                  <div className="text-center">
                    <div className="text-xl lg:text-2xl font-bold text-blue-600 dark:text-blue-400">50K+</div>
                    <div className="text-xs lg:text-sm text-gray-600 dark:text-gray-400">Students</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl lg:text-2xl font-bold text-purple-600 dark:text-purple-400">95%</div>
                    <div className="text-xs lg:text-sm text-gray-600 dark:text-gray-400">Success Rate</div>
                  </div>
                </div>
              </div>

              {/* Right Side - Form - Full width on mobile */}
              <div className="p-6 lg:p-8 max-h-[60vh] lg:max-h-none overflow-y-auto lg:overflow-visible lg:col-span-1 col-span-1">
                {/* Mobile-only header */}
                <div className="lg:hidden text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Start Your Learning Journey</h3>
                  <p className="text-gray-600 dark:text-gray-300">Join thousands of successful students worldwide</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                  {/* Name Field */}
                  <div>
                    <Label htmlFor="name" className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 mb-2">
                      <User className="h-4 w-4" />
                      <span>Full Name</span>
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="dark:bg-gray-800 dark:border-gray-700"
                      required
                    />
                  </div>

                  {/* Country Field */}
                  <div>
                    <Label
                      htmlFor="country"
                      className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 mb-2"
                    >
                      <Globe className="h-4 w-4" />
                      <span>Country</span>
                    </Label>
                    <Select value={formData.country} onValueChange={(value) => handleInputChange("country", value)}>
                      <SelectTrigger className="dark:bg-gray-800 dark:border-gray-700">
                        <SelectValue placeholder="Select your country" />
                      </SelectTrigger>
                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem key={country} value={country}>
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Email Field */}
                  <div>
                    <Label
                      htmlFor="email"
                      className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 mb-2"
                    >
                      <Mail className="h-4 w-4" />
                      <span>Email Address</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="dark:bg-gray-800 dark:border-gray-700"
                      required
                    />
                  </div>

                  {/* Purpose Field */}
                  <div>
                    <Label
                      htmlFor="purpose"
                      className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 mb-2"
                    >
                      <Target className="h-4 w-4" />
                      <span>Learning Purpose</span>
                    </Label>
                    <Select value={formData.purpose} onValueChange={(value) => handleInputChange("purpose", value)}>
                      <SelectTrigger className="dark:bg-gray-800 dark:border-gray-700">
                        <SelectValue placeholder="Select your learning purpose" />
                      </SelectTrigger>
                      <SelectContent>
                        {purposes.map((purpose) => (
                          <SelectItem key={purpose} value={purpose}>
                            {purpose}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Phone Number Field */}
                  <div>
                    <Label
                      htmlFor="phone"
                      className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 mb-2"
                    >
                      <Phone className="h-4 w-4" />
                      <span>Phone Number</span>
                    </Label>
                    <div className="flex space-x-2">
                      <Select
                        value={formData.phoneCode}
                        onValueChange={(value) => handleInputChange("phoneCode", value)}
                      >
                        <SelectTrigger className="w-24 dark:bg-gray-800 dark:border-gray-700">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {countryCodes.map((item) => (
                            <SelectItem key={item.code} value={item.code}>
                              <span className="flex items-center space-x-2">
                                <span>{item.flag}</span>
                                <span>{item.code}</span>
                              </span>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Phone number"
                        value={formData.phoneNumber}
                        onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                        className="flex-1 dark:bg-gray-800 dark:border-gray-700"
                        required
                      />
                    </div>
                  </div>

                  {/* WhatsApp Number Field */}
                  <div>
                    <Label
                      htmlFor="whatsapp"
                      className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 mb-2"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>WhatsApp Number</span>
                    </Label>
                    <div className="flex space-x-2">
                      <Select
                        value={formData.whatsappCode}
                        onValueChange={(value) => handleInputChange("whatsappCode", value)}
                      >
                        <SelectTrigger className="w-24 dark:bg-gray-800 dark:border-gray-700">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {countryCodes.map((item) => (
                            <SelectItem key={item.code} value={item.code}>
                              <span className="flex items-center space-x-2">
                                <span>{item.flag}</span>
                                <span>{item.code}</span>
                              </span>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Input
                        id="whatsapp"
                        type="tel"
                        placeholder="WhatsApp number"
                        value={formData.whatsappNumber}
                        onChange={(e) => handleInputChange("whatsappNumber", e.target.value)}
                        className="flex-1 dark:bg-gray-800 dark:border-gray-700"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Start My Learning Journey
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
