import { ServiceDetailTemplate } from "@/components/service-detail-template"
import { Activity } from "lucide-react"

export const metadata = {
  title: "SM Strategy Development | PartanX",
  description: "Strategic social media planning aligned with business goals.",
}

const service = {
  name: "SM Strategy Development",
  tagline: "Strategic planning for measurable social media outcomes.",
  description: "We build data-driven social media strategies that align with marketing and business objectives.",
  icon: Activity,
  problems: ["No clear social media strategy", "Low engagement and reach", "Inconsistent brand voice"],
  howItWorks: [
    { step: "Step 1", title: "Audit", description: "Analyze current channels and performance." },
    { step: "Step 2", title: "Plan", description: "Define objectives, KPIs, and content pillars." },
    { step: "Step 3", title: "Execute", description: "Operationalize the strategy with content calendars." },
  ],
  deliverables: ["Strategy documents", "Content calendar", "KPIs and dashboards"],
  integrations: ["Social platforms", "Analytics tools"],
  plans: [
    { name: "Strategy", price: "Contact Us", description: "Custom social strategy", features: ["Audit", "Content plan"] },
  ],
  faqs: [
    { question: "Do you manage paid campaigns?", answer: "We can include paid campaign planning as part of the strategy." },
  ],
}

export default function SmmStrategyPage() {
  return <ServiceDetailTemplate service={service} />
}
