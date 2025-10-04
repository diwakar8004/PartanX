import { ServiceDetailTemplate } from "@/components/service-detail-template"
import { Search } from "lucide-react"

export const metadata = {
  title: "SM SEO | PartanX",
  description: "Social media optimization to improve discoverability and engagement.",
}

const service = {
  name: "SM SEO",
  tagline: "Optimize social profiles and content for search and discovery.",
  description: "Optimize profiles, hashtags, and content structure to improve discoverability and reach.",
  icon: Search,
  problems: ["Poor discoverability", "Weak profile optimization", "Inconsistent tagging strategy"],
  howItWorks: [
    { step: "Step 1", title: "Audit", description: "Profile and content discoverability audit." },
    { step: "Step 2", title: "Optimize", description: "Hashtag, metadata, and profile optimization." },
    { step: "Step 3", title: "Measure", description: "Track search-driven engagement and refine." },
  ],
  deliverables: ["Optimization playbook", "Hashtag strategy", "Profile improvements"],
  integrations: ["Social platforms"],
  plans: [
    { name: "Optimization", price: "Contact Us", description: "Profile and hashtag optimization", features: ["Profile audits"] },
  ],
  faqs: [
    { question: "Do hashtags still help?", answer: "Yes, when used strategically they improve reach on many platforms." },
  ],
}

export default function SmmSeoPage() {
  return <ServiceDetailTemplate service={service} />
}
