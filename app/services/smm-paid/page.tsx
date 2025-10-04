import { ServiceDetailTemplate } from "@/components/service-detail-template"
import { Target } from "lucide-react"

export const metadata = {
  title: "Paid Advertisement | PartanX",
  description: "Paid social campaigns on major platforms with conversion tracking.",
}

const service = {
  name: "Paid Advertisement",
  tagline: "Performance-driven paid social campaigns.",
  description: "Targeted paid campaigns across major platforms with optimization and conversion tracking.",
  icon: Target,
  problems: ["Poor ad ROI", "Weak targeting", "No conversion tracking"],
  howItWorks: [
    { step: "Step 1", title: "Strategy", description: "Define audiences, creative, and measurement." },
    { step: "Step 2", title: "Launch", description: "Deploy campaigns and monitor performance." },
    { step: "Step 3", title: "Optimize", description: "Iterate on creative and targeting for ROI." },
  ],
  deliverables: ["Campaign setup", "A/B tests", "Conversion tracking"],
  integrations: ["Ad platforms", "Analytics"],
  plans: [
    { name: "Starter", price: "Contact Us", description: "Small tests", features: ["Creative setup"] },
    { name: "Scale", price: "Contact Us", description: "Full-funnel paid programs", features: ["Landing optimization"], popular: true },
  ],
  faqs: [
    { question: "What ad platforms do you support?", answer: "Meta, X, LinkedIn, TikTok and others as needed." },
  ],
}

export default function SmmPaidPage() {
  return <ServiceDetailTemplate service={service} />
}
