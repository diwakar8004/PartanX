import { ServiceDetailTemplate } from "@/components/service-detail-template"
import { Database } from "lucide-react"

export const metadata = {
  title: "Analytics and Reporting | PartanX",
  description: "Detailed performance reporting and optimization recommendations for social channels.",
}

const service = {
  name: "Analytics and Reporting",
  tagline: "Actionable analytics to drive channel performance.",
  description: "Comprehensive reporting with dashboards, insights, and recommendations for social programs.",
  icon: Database,
  problems: ["No cross-channel reporting", "Limited insight into conversions", "Slow decision cycles"],
  howItWorks: [
    { step: "Step 1", title: "Instrument", description: "Set up tracking and dashboards." },
    { step: "Step 2", title: "Report", description: "Deliver weekly and monthly insights." },
    { step: "Step 3", title: "Act", description: "Recommend optimizations and test plans." },
  ],
  deliverables: ["Dashboards", "Monthly reports", "Attribution analysis"],
  integrations: ["Analytics platforms", "Ad platforms"],
  plans: [
    { name: "Reporting", price: "Contact Us", description: "Regular dashboards", features: ["Monthly insights"] },
  ],
  faqs: [
    { question: "Can you integrate with our analytics?", answer: "Yes, we integrate with common analytics platforms." },
  ],
}

export default function SmmAnalyticsPage() {
  return <ServiceDetailTemplate service={service} />
}
