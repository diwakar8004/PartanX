import { ServiceDetailTemplate } from "@/components/service-detail-template"
import { Users } from "lucide-react"

export const metadata = {
  title: "Incident Response & Forensics | PartanX",
  description: "Expert incident response team with digital forensics and breach investigation capabilities.",
}

const service = {
  name: "Incident Response & Forensics",
  tagline: "Expert Incident Response When Every Minute Counts",
  description:
    "Get immediate access to certified incident response experts and digital forensics specialists to contain threats, investigate breaches, and restore operations quickly.",
  icon: Users,
  problems: [
    "Security incidents require immediate expert response to minimize damage",
    "Internal teams lack specialized incident response and forensics expertise",
    "Regulatory requirements demand proper incident handling and documentation",
    "Evidence collection and preservation requires specialized tools and procedures",
    "Business operations are disrupted during security incidents",
    "Legal and compliance implications require expert guidance and documentation",
  ],
  howItWorks: [
    {
      step: "Step 1",
      title: "Respond",
      description:
        "Immediate response team activation with threat containment, evidence preservation, and initial impact assessment within 1 hour of incident notification.",
    },
    {
      step: "Step 2",
      title: "Investigate",
      description:
        "Comprehensive forensic analysis using advanced tools and techniques to determine attack vectors, scope of compromise, and evidence collection for legal proceedings.",
    },
    {
      step: "Step 3",
      title: "Recover",
      description:
        "Guided recovery and remediation with security improvements, lessons learned documentation, and ongoing monitoring to prevent similar incidents.",
    },
  ],
  deliverables: [
    "24/7 incident response hotline and team activation",
    "Immediate threat containment and evidence preservation",
    "Comprehensive forensic analysis and investigation",
    "Detailed incident timeline and attack reconstruction",
    "Evidence collection and chain of custody documentation",
    "Regulatory notification and compliance support",
    "Recovery and remediation guidance",
    "Lessons learned and security improvement recommendations",
    "Legal support and expert witness testimony",
    "Post-incident monitoring and threat hunting",
  ],
  integrations: [
    "All Major Platforms",
    "SIEM Systems",
    "Cloud Providers",
    "Endpoint Tools",
    "Network Appliances",
    "Mobile Devices",
  ],
  plans: [
    {
      name: "Retainer",
      price: "$5,000/month",
      description: "Incident response retainer service",
      features: [
        "Priority response guarantee",
        "Discounted hourly rates",
        "Quarterly tabletop exercises",
        "Incident response planning",
        "24/7 hotline access",
      ],
    },
    {
      name: "On-Demand",
      price: "$350/hour",
      description: "Pay-per-incident response service",
      popular: true,
      features: [
        "Expert incident response team",
        "Digital forensics analysis",
        "Evidence collection",
        "Regulatory support",
        "Recovery guidance",
        "Detailed reporting",
        "Legal support",
      ],
    },
    {
      name: "Enterprise",
      price: "Contact Us",
      description: "Dedicated incident response program",
      features: [
        "Dedicated response team",
        "Custom response procedures",
        "Advanced forensics tools",
        "Executive communication",
        "Legal coordination",
        "Insurance liaison",
        "SLA guarantees",
      ],
    },
  ],
  faqs: [
    {
      question: "How quickly can your team respond to an incident?",
      answer:
        "Our incident response team is available 24/7 with guaranteed response within 1 hour for critical incidents and on-site response within 4 hours if required.",
    },
    {
      question: "What qualifications do your incident responders have?",
      answer:
        "Our team includes GCIH, GCFA, CISSP, and other certified professionals with extensive experience in incident response, digital forensics, and breach investigation.",
    },
    {
      question: "Can you work with our legal team and insurance?",
      answer:
        "Yes, we regularly coordinate with legal counsel, insurance providers, and regulatory bodies to ensure proper incident handling and compliance requirements are met.",
    },
    {
      question: "What types of incidents do you handle?",
      answer:
        "We handle all types of security incidents including malware infections, data breaches, insider threats, ransomware attacks, and advanced persistent threats.",
    },
  ],
}

export default function IncidentResponsePage() {
  return <ServiceDetailTemplate service={service} />
}
