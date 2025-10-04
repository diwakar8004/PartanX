import { ServiceDetailTemplate } from "@/components/service-detail-template"
import { Layers } from "lucide-react"

export const metadata = {
  title: "XDR - Extended Detection and Response | PartanX",
  description:
    "Unified security across endpoints, networks, and cloud with correlated threat detection and automated response.",
}

const service = {
  name: "XDR",
  tagline: "Extended Detection and Response across endpoints, networks, and cloud environments.",
  description:
    "Unify security data from multiple sources to provide comprehensive threat detection, investigation, and response across your entire digital infrastructure.",
  icon: Layers,
  problems: [
    "Security tools operate in silos, creating blind spots and alert fatigue",
    "Threat actors move laterally across endpoints, networks, and cloud environments",
    "Manual correlation of security events is time-consuming and error-prone",
    "Incident response teams lack unified visibility for effective threat hunting",
    "Complex attack chains span multiple security domains requiring coordinated response",
    "Compliance reporting requires data from disparate security systems",
  ],
  howItWorks: [
    {
      step: "Step 1",
      title: "Assess",
      description:
        "We map your security architecture, identify data sources, and design the XDR integration strategy to provide unified visibility across all environments.",
    },
    {
      step: "Step 2",
      title: "Implement",
      description:
        "Deploy XDR platform, integrate security tools and data sources, configure correlation rules, and establish automated response workflows.",
    },
    {
      step: "Step 3",
      title: "Operate",
      description:
        "Monitor unified security data 24/7, correlate threats across domains, and provide coordinated response with expert analysis and threat intelligence.",
    },
  ],
  deliverables: [
    "Security architecture assessment and XDR design",
    "Multi-domain data source integration",
    "Unified security dashboard and analytics",
    "Cross-domain threat correlation rules",
    "Automated response playbooks and workflows",
    "Threat hunting capabilities across all domains",
    "Incident investigation and forensic tools",
    "24/7 SOC monitoring and analysis",
    "Coordinated incident response procedures",
    "Comprehensive security reporting and metrics",
  ],
  integrations: [
    "Palo Alto Cortex",
    "Rapid7 InsightIDR",
    "AWS Security Hub",
    "Azure Sentinel",
    "Cloudflare",
    "Check Point",
  ],
  plans: [
    {
      name: "Essential",
      price: "Contact Us",
      description: "Basic XDR for unified visibility",
      features: [
        "Up to 3 data sources",
        "Basic correlation rules",
        "Unified dashboard",
        "Email alerts",
        "Monthly reporting",
      ],
    },
    {
      name: "Professional",
      price: "Contact Us",
      description: "Advanced XDR with automation",
      popular: true,
      features: [
        "Up to 10 data sources",
        "Advanced correlation engine",
        "Automated response workflows",
        "Threat hunting tools",
        "24/7 SOC monitoring",
        "Custom dashboards",
        "Priority support",
      ],
    },
    {
      name: "Enterprise",
      price: "Contact Us",
      description: "Full XDR with custom integrations",
      features: [
        "Unlimited data sources",
        "Custom correlation rules",
        "Advanced automation",
        "API integrations",
        "Dedicated analyst team",
        "Custom reporting",
        "SLA guarantees",
      ],
    },
  ],
  faqs: [
    {
      question: "What's the difference between XDR and SIEM?",
      answer:
        "XDR focuses on detection and response with built-in analytics and automation, while SIEM primarily collects and correlates log data. XDR provides more context and automated response capabilities.",
    },
    {
      question: "How many security tools can XDR integrate with?",
      answer:
        "Our XDR platform can integrate with hundreds of security tools through APIs, agents, and standard protocols. We customize integrations based on your existing security stack.",
    },
    {
      question: "Does XDR replace our existing security tools?",
      answer:
        "No, XDR enhances your existing tools by providing unified visibility and coordinated response. It acts as the central nervous system for your security operations.",
    },
    {
      question: "How does XDR improve incident response times?",
      answer:
        "XDR reduces investigation time by providing correlated data, automated analysis, and pre-built response workflows. This can reduce incident response times by 60-80%.",
    },
  ],
}

export default function XDRPage() {
  return <ServiceDetailTemplate service={service} />
}
