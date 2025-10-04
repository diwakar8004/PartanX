import { ServiceDetailTemplate } from "@/components/service-detail-template"
import { Settings } from "lucide-react"

export const metadata = {
  title: "Server Maintenance | PartanX",
  description: "Ongoing server maintenance, patching, and performance tuning.",
}

const service = {
  name: "Server Maintenance",
  tagline: "Keep your servers patched, secure, and performing.",
  description: "Regular patching, performance tuning, and monitoring to ensure server reliability.",
  icon: Settings,
  problems: ["Unpatched vulnerabilities", "Performance degradation", "Unexpected downtime"],
  howItWorks: [
    { step: "Step 1", title: "Assess", description: "Inventory and risk-based prioritization." },
    { step: "Step 2", title: "Patch & Tune", description: "Apply patches and optimize configurations." },
    { step: "Step 3", title: "Monitor", description: "Ongoing monitoring and automated alerts." },
  ],
  deliverables: ["Patch management", "Performance reports", "Configuration hardening"],
  integrations: ["Monitoring tools", "Patch management platforms"],
  plans: [
    { name: "Standard", price: "Contact Us", description: "Weekly patching and monitoring", features: ["Weekly windows", "Patch reporting"] },
  ],
  faqs: [
    { question: "Do you manage Windows and Linux?", answer: "Yes, we manage both Windows and Linux server stacks." },
  ],
}

export default function ServerMaintenancePage() {
  return <ServiceDetailTemplate service={service} />
}
