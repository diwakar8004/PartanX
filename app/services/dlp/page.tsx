import { ServiceDetailTemplate } from "@/components/service-detail-template"
import { Database } from "lucide-react"

export const metadata = {
  title: "Data Loss Prevention (DLP) | PartanX",
  description:
    "Comprehensive data protection with classification, monitoring, and loss prevention across all environments.",
}

const service = {
  name: "Data Loss Prevention (DLP)",
  tagline: "Protect Your Most Valuable Asset - Your Data",
  description:
    "Implement comprehensive data loss prevention with automated classification, real-time monitoring, and policy enforcement across endpoints, networks, and cloud environments.",
  icon: Database,
  problems: [
    "Sensitive data is scattered across multiple systems without proper classification",
    "Employees accidentally or intentionally share confidential information",
    "Compliance regulations require strict data handling and protection controls",
    "Lack of visibility into data movement and usage patterns",
    "Traditional security tools don't understand data context and sensitivity",
    "Data breaches result in significant financial and reputational damage",
  ],
  howItWorks: [
    {
      step: "Step 1",
      title: "Discover",
      description:
        "Scan and classify sensitive data across all systems, applications, and storage locations to create a comprehensive data inventory and risk assessment.",
    },
    {
      step: "Step 2",
      title: "Protect",
      description:
        "Deploy DLP policies and controls across endpoints, networks, and cloud platforms with real-time monitoring and automated response capabilities.",
    },
    {
      step: "Step 3",
      title: "Monitor",
      description:
        "Continuously monitor data usage, detect policy violations, and provide detailed reporting with ongoing policy optimization and compliance support.",
    },
  ],
  deliverables: [
    "Comprehensive data discovery and classification",
    "DLP policy framework and rule configuration",
    "Endpoint DLP agent deployment and management",
    "Network DLP monitoring and inspection",
    "Cloud DLP integration and protection",
    "Real-time incident detection and response",
    "User education and policy awareness training",
    "Compliance reporting and audit support",
    "Monthly data protection reports",
    "Quarterly policy reviews and optimization",
  ],
  integrations: ["Microsoft Purview", "Symantec DLP", "Forcepoint DLP", "Digital Guardian", "Varonis", "Code42"],
  plans: [
    {
      name: "Essential",
      price: "$25/user/month",
      description: "Basic data protection for small businesses",
      features: [
        "Up to 100 users",
        "Endpoint DLP protection",
        "Basic data classification",
        "Email monitoring",
        "Standard support",
      ],
    },
    {
      name: "Professional",
      price: "$45/user/month",
      description: "Comprehensive DLP with advanced features",
      popular: true,
      features: [
        "Up to 1,000 users",
        "Network and cloud DLP",
        "Advanced classification",
        "Custom policies",
        "Real-time monitoring",
        "Priority support",
        "Compliance reporting",
      ],
    },
    {
      name: "Enterprise",
      price: "Contact Us",
      description: "Full-scale DLP for large organizations",
      features: [
        "Unlimited users",
        "Advanced analytics",
        "Custom integrations",
        "Dedicated support team",
        "Executive reporting",
        "API access",
        "SLA guarantees",
      ],
    },
  ],
  faqs: [
    {
      question: "What types of data can DLP protect?",
      answer:
        "DLP can protect structured data (databases, spreadsheets), unstructured data (documents, emails), and custom data types including PII, PHI, financial records, and intellectual property.",
    },
    {
      question: "How does DLP impact user productivity?",
      answer:
        "Modern DLP solutions are designed to be transparent to users, with intelligent policies that allow legitimate business activities while blocking risky data transfers.",
    },
    {
      question: "Can DLP work with cloud applications?",
      answer:
        "Yes, our DLP solutions integrate with major cloud platforms including Office 365, Google Workspace, Salesforce, and other SaaS applications through APIs and proxies.",
    },
    {
      question: "How accurate is automated data classification?",
      answer:
        "Our AI-powered classification achieves 95%+ accuracy for common data types, with machine learning that improves over time and custom rules for organization-specific data.",
    },
  ],
}

export default function DLPPage() {
  return <ServiceDetailTemplate service={service} />
}
