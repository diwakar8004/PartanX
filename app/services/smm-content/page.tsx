import { ServiceDetailTemplate } from "@/components/service-detail-template"
import { Camera } from "lucide-react"

export const metadata = {
  title: "Content Creation | PartanX",
  description: "High-quality content production for social channels: copy, graphics, and video.",
}

const service = {
  name: "Content Creation",
  tagline: "Engaging creative content tailored to each social platform.",
  description: "End-to-end content production including copywriting, design, and short-form video creation.",
  icon: Camera,
  problems: ["Low-quality content", "Lack of consistent creative", "No video strategy"],
  howItWorks: [
    { step: "Step 1", title: "Plan", description: "Define content pillars and creative direction." },
    { step: "Step 2", title: "Create", description: "Produce assets and copy tailored to channels." },
    { step: "Step 3", title: "Optimize", description: "A/B test creative and iterate." },
  ],
  deliverables: ["Post templates", "Short videos", "Graphic assets", "Copy guidelines"],
  integrations: ["Social platforms", "DAM systems"],
  plans: [
    { name: "Campaign", price: "Contact Us", description: "Content packages", features: ["10 posts", "2 short videos"] },
  ],
  faqs: [
    { question: "Can you repurpose existing content?", answer: "Yes, we can adapt and repurpose your assets." },
  ],
}

export default function SmmContentPage() {
  return <ServiceDetailTemplate service={service} />
}
