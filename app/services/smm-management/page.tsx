import { ServiceDetailTemplate } from "@/components/service-detail-template"
import { Users } from "lucide-react"

export const metadata = {
  title: "SM Management | PartanX",
  description: "Day-to-day social account management and community engagement.",
}

const service = {
  name: "SM Management",
  tagline: "End-to-end social account management and audience engagement.",
  description: "We manage posting, community interactions, and reputation across all major social platforms.",
  icon: Users,
  problems: ["Inconsistent posting schedules", "Slow community responses", "Reputational risks"],
  howItWorks: [
    { step: "Step 1", title: "Setup", description: "Define processes and approval workflows." },
    { step: "Step 2", title: "Operate", description: "Daily posting and community engagement." },
    { step: "Step 3", title: "Report", description: "Weekly performance summaries and insights." },
  ],
  deliverables: ["Posting schedules", "Community responses", "Weekly reports"],
  integrations: ["Social dashboards", "Engagement tools"],
  plans: [
    { name: "Basic", price: "Contact Us", description: "3 posts/week", features: ["Community monitoring"] },
    { name: "Pro", price: "Contact Us", description: "Daily posting and engagement", features: ["Content creation", "Paid support"], popular: true },
  ],
  faqs: [
    { question: "Do you handle crises?", answer: "Yes, we have escalation playbooks for rapid response." },
  ],
}

export default function SmmManagementPage() {
  return <ServiceDetailTemplate service={service} />
}
