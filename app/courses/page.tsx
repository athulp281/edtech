import CoursesClientPage from "./CoursesClientPage"

export const metadata = {
  title: "Online Courses - Web Development, Data Science & More",
  description:
    "Explore our comprehensive collection of online courses in web development, data science, UI/UX design, digital marketing, and more. Learn from industry experts.",
  keywords: [
    "online courses",
    "web development course",
    "data science course",
    "UI UX design",
    "digital marketing",
    "programming courses",
  ],
  openGraph: {
    title: "Online Courses - Web Development, Data Science & More | EduTech",
    description:
      "Explore our comprehensive collection of online courses in web development, data science, UI/UX design, digital marketing, and more.",
    url: "https://edutech.com/courses",
    images: ["/courses-og.jpg"],
  },
}

export default function CoursesPage() {
  return <CoursesClientPage />
}
