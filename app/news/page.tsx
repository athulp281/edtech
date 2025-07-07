export const metadata = {
  title: "Latest News & Updates - EduTech Platform",
  description:
    "Stay informed about the latest developments, partnerships, achievements, and product updates at EduTech online learning platform.",
  keywords: ["edutech news", "online learning updates", "education technology", "platform updates", "partnerships"],
  openGraph: {
    title: "Latest News & Updates | EduTech",
    description: "Stay informed about the latest developments, partnerships, and achievements at EduTech.",
    url: "https://edutech.com/news",
    images: ["/news-og.jpg"],
  },
}

import NewsPageClient from "./NewsPageClient"

export default function NewsPage() {
  return <NewsPageClient />
}
