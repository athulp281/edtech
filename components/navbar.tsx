"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ChevronDown, Menu, X, BookOpen, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import Image from "next/image"

const courses = [
  "Web Development",
  "Data Science",
  "Mobile App Development",
  "UI/UX Design",
  "Digital Marketing",
  "Artificial Intelligence",
  "Cybersecurity",
  "Cloud Computing",
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isCoursesOpen, setIsCoursesOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()
  const router = useRouter()

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    if (resolvedTheme === "dark") {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }

  const handleNavigation = (href: string) => {
    setIsOpen(false)
    router.push(href)
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  // Don't render theme toggle until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <nav className="bg-transparent backdrop-blur-sm border-b border-transparent sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              {/* <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                EduTech
              </span> */}
              <Image alt="logo"  height={100} width={200} src={"https://mentrtest.vercel.app/assets/img/logo/logo-blue.png"} />
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <div className="w-9 h-9"></div> {/* Placeholder for theme toggle */}
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <nav
      className={`${
        scrolled
          ? "bg-white/95 dark:bg-gray-900/95 border-gray-200 dark:border-gray-700"
          : "bg-transparent border-transparent"
      } backdrop-blur-sm border-b sticky top-0 z-50 transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button onClick={() => handleNavigation("/")} className="flex items-center space-x-2">
            {/* <BookOpen className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              EduTech
            </span> */}
            <Image alt="logo"  height={100} width={200} src={"https://mentrtest.vercel.app/assets/img/logo/logo-blue.png"} />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavigation("/")}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Home
            </button>

            <div
              className="relative"
              onMouseEnter={() => setIsCoursesOpen(true)}
              onMouseLeave={() => setIsCoursesOpen(false)}
            >
              <button
              disabled
                onClick={() => handleNavigation("/courses")}
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Courses
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {isCoursesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2"
                >
                  {courses.map((course, index) => (
                    <button
                      key={index}
                      onClick={() => handleNavigation(`/courses/${course.toLowerCase().replace(/\s+/g, "-")}`)}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {course}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>

            {/* <button
              onClick={() => handleNavigation("/blogs")}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Blogs
            </button> */}
            {/* <button
              onClick={() => handleNavigation("/news")}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              News
            </button> */}
            <button
            disabled
              onClick={() => handleNavigation("/about")}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              About Us
            </button>
            <button
            disabled
              onClick={() => handleNavigation("/contact")}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Contact
            </button>

            {/* Theme Toggle Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="w-9 px-0 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
            >
              {resolvedTheme === "dark" ? (
                <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-500 transition-all" />
              ) : (
                <Moon className="h-[1.2rem] w-[1.2rem] text-gray-700 transition-all" />
              )}
            </Button>

            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="w-9 px-0 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
            >
              {resolvedTheme === "dark" ? (
                <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-500 transition-all" />
              ) : (
                <Moon className="h-[1.2rem] w-[1.2rem] text-gray-700 transition-all" />
              )}
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 space-y-4 bg-white dark:bg-gray-900 transition-colors"
          >
            <button
              onClick={() => handleNavigation("/")}
              className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation("/courses")}
              className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Courses
            </button>
            <button
              onClick={() => handleNavigation("/blogs")}
              className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Blogs
            </button>
            <button
              onClick={() => handleNavigation("/news")}
              className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              News
            </button>
            <button
              onClick={() => handleNavigation("/about")}
              className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => handleNavigation("/contact")}
              className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Contact
            </button>
            <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all">Get Started</Button>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
