import { ServiceDetailTemplate } from "@/components/service-detail-template"
import { Search } from "lucide-react"

export const metadata = {
  title: "Web SEO | PartanX",
  description: "Search engine optimization to increase visibility and organic traffic.",
}

const service = {
  name: "Web SEO",
  tagline: "Improve search rankings and organic traffic.",
  description: "Technical SEO, on-page optimization, and content strategies to improve organic search performance.",
  icon: Search,
  problems: ["Low organic visibility", "Technical SEO issues", "Poor content relevance"],
  howItWorks: [
    { step: "Step 1", title: "Audit", description: "Comprehensive SEO and technical audit." },
    { step: "Step 2", title: "Optimize", description: "Implement technical fixes and content improvements." },
    { step: "Step 3", title: "Grow", description: "Ongoing monitoring and content strategy." },
  ],
  deliverables: ["SEO audit", "Metadata and schema updates", "Content recommendations", "Performance tracking"],
  integrations: ["Google Search Console", "Analytics"],
  plans: [
    { name: "Audit", price: "Contact Us", description: "SEO audit and roadmap", features: ["Technical report", "Prioritized fixes"] },
    { name: "Ongoing", price: "Contact Us", description: "Monthly SEO execution", features: ["Content support", "Monthly reporting"], popular: true },
  ],
  faqs: [
    { question: "How soon will I see results?", answer: "SEO improvements typically show over 2-6 months depending on competition." },
  ],
}

export default function WebSeoPage() {
  return <ServiceDetailTemplate service={service} />
}
