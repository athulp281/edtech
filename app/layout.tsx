import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SocialNavigation } from "@/components/social-navigation"
import { ScrollProgress } from "@/components/scroll-progress"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "EduTech - Transform Your Future with Quality Education",
    template: "%s | EduTech",
  },
  description:
    "Leading online education platform offering courses in technology, business, and personal development. Join 50,000+ students learning web development, data science, UI/UX design, and more.",
  keywords: [
    "online education",
    "web development courses",
    "data science",
    "UI/UX design",
    "digital marketing",
    "programming",
    "technology courses",
    "online learning",
  ],
  authors: [{ name: "EduTech Team" }],
  creator: "EduTech",
  publisher: "EduTech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://edutech.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://edutech.com",
    title: "EduTech - Transform Your Future with Quality Education",
    description:
      "Leading online education platform offering courses in technology, business, and personal development.",
    siteName: "EduTech",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EduTech - Online Learning Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EduTech - Transform Your Future with Quality Education",
    description:
      "Leading online education platform offering courses in technology, business, and personal development.",
    images: ["/og-image.jpg"],
    creator: "@edutech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} transition-colors duration-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
          storageKey="edutech-theme"
        >
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <Navbar />
            <SocialNavigation />
            <main className="min-h-screen bg-white dark:bg-gray-900">{children}</main>
            <Footer />
            <ScrollProgress />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
