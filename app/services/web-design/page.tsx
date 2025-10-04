import { ServiceDetailTemplate } from "@/components/service-detail-template"
import { Monitor } from "lucide-react"

export const metadata = {
  title: "Web Design | PartanX",
  description: "Modern, responsive web design focused on performance, accessibility, and conversions.",
}

const service = {
  name: "Web Design",
  tagline: "Design-driven websites that perform and convert.",
  description: "We design modern, accessible, and high-performance websites aligned with your brand and goals.",
  icon: Monitor,
  problems: [
    "Outdated designs that harm credibility",
    "Poor mobile performance and accessibility issues",
    "Slow page load times and low conversions",
  ],
  howItWorks: [
    { step: "Step 1", title: "Discovery", description: "Understand goals, audience, and brand requirements." },
    { step: "Step 2", title: "Design", description: "Prototype, iterate and validate user flows and visuals." },
    { step: "Step 3", title: "Delivery", description: "Handoff or deploy a production-ready website with monitoring." },
  ],
  deliverables: ["Design mockups and prototypes", "Responsive site templates", "Accessibility fixes", "Performance tuning"],
  integrations: ["Google Analytics", "Content Delivery Networks", "CMS platforms"],
  plans: [
    { name: "Starter", price: "Contact Us", description: "Landing pages and small sites", features: ["Up to 5 pages", "Responsive design"] },
    { name: "Business", price: "Contact Us", description: "Multi-page business sites", features: ["CMS integration", "SEO basics"], popular: true },
  ],
  faqs: [
    { question: "How long does a site take?", answer: "Typically 4-8 weeks depending on scope." },
    { question: "Do you provide content?", answer: "We can assist with content creation as an add-on." },
  ],
}

export default function WebDesignPage() {
  return <ServiceDetailTemplate service={service} />
}
