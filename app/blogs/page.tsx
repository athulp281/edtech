export const metadata = {
  title: "Educational Blog - Latest Insights & Tutorials",
  description:
    "Stay updated with the latest insights, tutorials, and industry trends in web development, data science, design, and technology from our expert instructors.",
  keywords: [
    "education blog",
    "web development tutorials",
    "data science insights",
    "programming tips",
    "technology trends",
  ],
  openGraph: {
    title: "Educational Blog - Latest Insights & Tutorials | EduTech",
    description: "Stay updated with the latest insights, tutorials, and industry trends in technology and education.",
    url: "https://edutech.com/blogs",
    images: ["/blog-og.jpg"],
  },
}

import BlogsClientPage from "./BlogsClientPage"

export default function BlogsPage() {
  return <BlogsClientPage />
}
