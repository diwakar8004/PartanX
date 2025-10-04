import { ServiceDetailTemplate } from "@/components/service-detail-template"
import { Monitor } from "lucide-react"

export const metadata = {
  title: "Managed SOC - 24/7 Security Operations Center | PartanX",
  description: "Expert security analysts providing 24/7 monitoring, threat detection, and incident response services.",
}

const service = {
  name: "Managed SOC",
  tagline: "24/7 Security Operations Center with expert analysts and incident response.",
  description:
    "Get enterprise-grade security operations without the overhead. Our expert analysts monitor your environment around the clock and respond to threats in real-time.",
  icon: Monitor,
  problems: [
    "Building an in-house SOC is expensive and requires specialized expertise",
    "Security alerts require 24/7 monitoring and expert analysis",
    "Threat landscape evolves rapidly, requiring continuous threat intelligence updates",
    "Incident response requires immediate action to minimize business impact",
    "Compliance requirements demand documented security monitoring and response",
    "Skills shortage makes it difficult to hire and retain security talent",
  ],
  howItWorks: [
    {
      step: "Step 1",
      title: "Assess",
      description:
        "We evaluate your security infrastructure, identify monitoring requirements, and design the SOC service delivery model tailored to your environment.",
    },
    {
      step: "Step 2",
      title: "Implement",
      description:
        "Deploy monitoring tools, establish secure connections to our SOC, configure alerting and escalation procedures, and integrate with your incident response processes.",
    },
    {
      step: "Step 3",
      title: "Operate",
      description:
        "Provide 24/7 monitoring, threat analysis, and incident response with regular reporting, threat intelligence updates, and continuous service optimization.",
    },
  ],
  deliverables: [
    "24/7 security monitoring and analysis",
    "Expert threat detection and investigation",
    "Incident response and containment procedures",
    "Threat intelligence and IOC monitoring",
    "Security event correlation and analysis",
    "Escalation procedures and communication protocols",
    "Monthly security reports and metrics",
    "Quarterly threat landscape briefings",
    "Compliance reporting and documentation",
    "Continuous service improvement and optimization",
  ],
  integrations: [
    "All SIEM Platforms",
    "Rapid7",
    "Palo Alto",
    "Check Point",
    "Cloudflare",
    "AWS Security",
    "Azure Sentinel",
  ],
  plans: [
    {
      name: "Essential",
      price: "Contact Us",
      description: "Basic SOC monitoring",
      features: [
        "Business hours monitoring",
        "Basic threat detection",
        "Email alerts",
        "Monthly reporting",
        "Standard response times",
      ],
    },
    {
      name: "Professional",
      price: "Contact Us",
      description: "24/7 SOC with incident response",
      popular: true,
      features: [
        "24/7/365 monitoring",
        "Advanced threat hunting",
        "Incident response team",
        "Real-time alerts",
        "Weekly reporting",
        "Dedicated analyst",
        "Priority escalation",
      ],
    },
    {
      name: "Enterprise",
      price: "Contact Us",
      description: "Premium SOC with custom services",
      features: [
        "Dedicated SOC team",
        "Custom playbooks",
        "Advanced threat intelligence",
        "On-site response capability",
        "Custom reporting",
        "Executive briefings",
        "SLA guarantees",
      ],
    },
  ],
  faqs: [
    {
      question: "What qualifications do your SOC analysts have?",
      answer:
        "Our analysts hold industry certifications including GCIH, GCFA, CISSP, and have extensive experience in threat detection, incident response, and forensic analysis.",
    },
    {
      question: "How quickly do you respond to security incidents?",
      answer:
        "Critical incidents receive immediate response within 15 minutes. High priority incidents are addressed within 1 hour, with regular updates throughout the investigation.",
    },
    {
      question: "Can you integrate with our existing security tools?",
      answer:
        "Yes, our SOC integrates with over 200 security tools and platforms. We work with your existing infrastructure to provide seamless monitoring and response.",
    },
    {
      question: "What happens during a security incident?",
      answer:
        "We immediately contain the threat, notify your team, conduct forensic analysis, and provide detailed incident reports with remediation recommendations and lessons learned.",
    },
  ],
}

export default function ManagedSOCPage() {
  return <ServiceDetailTemplate service={service} />
}
