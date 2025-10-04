import { ServiceDetailTemplate } from "@/components/service-detail-template"
import { HardDrive } from "lucide-react"

export const metadata = {
  title: "Web Hosting | PartanX",
  description: "Reliable hosting with managed backups, monitoring, and scalable infrastructure.",
}

const service = {
  name: "Web Hosting",
  tagline: "Managed hosting with uptime and performance guarantees.",
  description: "Secure, monitored, and fully-managed hosting with backups and scaling options.",
  icon: HardDrive,
  problems: ["Frequent outages and poor performance", "No backups or recovery plan", "Unclear scaling options"],
  howItWorks: [
    { step: "Step 1", title: "Provision", description: "Provision secure hosting and configure monitoring." },
    { step: "Step 2", title: "Manage", description: "Managed patching, backups and incident handling." },
    { step: "Step 3", title: "Scale", description: "Auto-scale to meet traffic demands and optimize cost." },
  ],
  deliverables: ["Daily backups", "Uptime monitoring", "Security hardening", "Disaster recovery"],
  integrations: ["AWS", "Cloudflare", "CDN providers"],
  plans: [
    { name: "Managed Basic", price: "Contact Us", description: "Small sites hosting", features: ["Daily backups", "Monitoring"] },
    { name: "Managed Pro", price: "Contact Us", description: "High-availability hosting", features: ["Load balancing", "SLA"] },
  ],
  faqs: [
    { question: "Can you migrate my site?", answer: "Yes, we provide migration services with verification." },
  ],
}

export default function WebHostingPage() {
  return <ServiceDetailTemplate service={service} />
}
