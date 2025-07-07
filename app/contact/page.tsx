import ContactPageClient from "./ContactPageClient"

export const metadata = {
  title: "Contact Us - Get Support & Information | EduTech",
  description:
    "Have questions about our courses or need support? Contact EduTech team. We're here to help with course information, technical support, and more.",
  keywords: ["contact edutech", "customer support", "course information", "help center", "get in touch"],
  openGraph: {
    title: "Contact Us - Get Support & Information | EduTech",
    description: "Have questions about our courses or need support? Contact EduTech team for help.",
    url: "https://edutech.com/contact",
    images: ["/contact-og.jpg"],
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
