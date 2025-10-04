import { ServiceDetailTemplate } from "@/components/service-detail-template"
import { Key } from "lucide-react"

export const metadata = {
  title: "Domain Services | PartanX",
  description: "Domain registration, DNS management, and domain security services.",
}

const service = {
  name: "Domain Services",
  tagline: "Reliable domain registration and DNS management.",
  description: "Domain procurement, DNS configuration, and DNS security best practices.",
  icon: Key,
  problems: ["DNS misconfiguration", "Expiring domains", "Poor DNS performance"],
  howItWorks: [
    { step: "Step 1", title: "Register/Transfer", description: "Assist with domain registration or transfers." },
    { step: "Step 2", title: "Configure", description: "Set up DNS, records, and security features." },
    { step: "Step 3", title: "Monitor", description: "Monitor DNS health and expiration windows." },
  ],
  deliverables: ["Domain registration", "DNS configuration", "DNSSEC setup", "Expiry monitoring"],
  integrations: ["Registrars", "DNS providers"],
  plans: [
    { name: "Domain Basic", price: "Contact Us", description: "Registration and DNS setup", features: ["One domain", "DNS management"] },
  ],
  faqs: [
    { question: "Can you transfer my existing domain?", answer: "Yes, we handle transfers and DNS migration." },
  ],
}

export default function DomainServicesPage() {
  return <ServiceDetailTemplate service={service} />
}
