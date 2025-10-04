import { ServiceDetailTemplate } from "@/components/service-detail-template"
import { Settings } from "lucide-react"

export const metadata = {
  title: "Patch & Configuration Management | PartanX",
  description: "Automated patch deployment and security configuration management across all systems.",
}

const service = {
  name: "Patch & Configuration Management",
  tagline: "Automated Security Updates and Configuration Control",
  description:
    "Ensure systems stay secure and compliant with automated patch management and configuration control across all endpoints, servers, and network devices.",
  icon: Settings,
  problems: [
    "Manual patch management is time-consuming and error-prone",
    "Unpatched systems are vulnerable to known exploits and attacks",
    "Configuration drift leads to security gaps and compliance issues",
    "Lack of visibility into patch status across distributed environments",
    "Business-critical systems require careful patch testing and scheduling",
    "Compliance requirements demand timely patching and documentation",
  ],
  howItWorks: [
    {
      step: "Step 1",
      title: "Assess",
      description:
        "Inventory all systems, assess current patch levels, and identify vulnerabilities with risk-based prioritization for remediation planning.",
    },
    {
      step: "Step 2",
      title: "Deploy",
      description:
        "Implement automated patch management tools, configure deployment schedules, and establish testing procedures with rollback capabilities.",
    },
    {
      step: "Step 3",
      title: "Monitor",
      description:
        "Continuously monitor patch compliance, track configuration changes, and provide detailed reporting with ongoing optimization and support.",
    },
  ],
  deliverables: [
    "Comprehensive system inventory and patch assessment",
    "Automated patch management platform deployment",
    "Risk-based patch prioritization and scheduling",
    "Configuration baseline establishment and monitoring",
    "Patch testing and validation procedures",
    "Automated deployment with rollback capabilities",
    "Compliance reporting and audit support",
    "Emergency patch deployment procedures",
    "Monthly patch compliance reports",
    "Quarterly configuration reviews and optimization",
  ],
  integrations: ["Microsoft WSUS", "Red Hat Satellite", "Tanium Patch", "Qualys VMDR", "Rapid7", "ManageEngine"],
  plans: [
    {
      name: "Essential",
      price: "$15/device/month",
      description: "Basic patch management",
      features: [
        "Up to 100 devices",
        "Automated patch deployment",
        "Basic reporting",
        "Email support",
        "Monthly compliance reports",
      ],
    },
    {
      name: "Professional",
      price: "$25/device/month",
      description: "Advanced patch and configuration management",
      popular: true,
      features: [
        "Up to 1,000 devices",
        "Configuration management",
        "Risk-based prioritization",
        "Testing and validation",
        "24/7 monitoring",
        "Priority support",
        "Real-time dashboards",
      ],
    },
    {
      name: "Enterprise",
      price: "Contact Us",
      description: "Comprehensive management for large environments",
      features: [
        "Unlimited devices",
        "Advanced automation",
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
      question: "How do you handle critical system patching?",
      answer:
        "We provide flexible scheduling options including maintenance windows, staged deployments, and emergency patching procedures with proper testing and rollback capabilities.",
    },
    {
      question: "What happens if a patch causes issues?",
      answer:
        "Our solution includes automated rollback capabilities, system monitoring, and immediate support to quickly resolve any patch-related issues with minimal downtime.",
    },
    {
      question: "Can you manage patches for different operating systems?",
      answer:
        "Yes, we support Windows, Linux, macOS, and various network device operating systems with unified management and reporting across all platforms.",
    },
    {
      question: "How do you prioritize which patches to deploy first?",
      answer:
        "We use risk-based prioritization considering CVSS scores, exploit availability, system criticality, and business impact to ensure the most important patches are deployed first.",
    },
  ],
}

export default function PatchManagementPage() {
  return <ServiceDetailTemplate service={service} />
}
