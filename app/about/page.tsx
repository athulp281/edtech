import AboutClientPage from "./AboutClientPage"

export const metadata = {
  title: "About Us - EduTech Online Learning Platform",
  description:
    "Learn about EduTech's mission to democratize education and empower learners worldwide. Meet our team of educators, technologists, and innovators.",
  keywords: ["about edutech", "online education mission", "learning platform team", "education technology company"],
  openGraph: {
    title: "About Us - EduTech Online Learning Platform",
    description: "Learn about EduTech's mission to democratize education and empower learners worldwide.",
    url: "https://edutech.com/about",
    images: ["/about-og.jpg"],
  },
}

export default function AboutPage() {
  return <AboutClientPage />
}
