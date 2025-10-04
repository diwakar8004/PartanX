import { ServiceDetailTemplate } from "@/components/service-detail-template"
import { Eye } from "lucide-react"

export const metadata = {
  title: "EDR - Endpoint Detection and Response | PartanX",
  description:
    "Advanced endpoint protection with real-time threat detection, automated response, and comprehensive forensics.",
}

const service = {
  name: "EDR",
  tagline: "Endpoint Detection and Response with real-time threat hunting and automated remediation.",
  description:
    "Protect every endpoint with advanced behavioral analysis, machine learning detection, and automated response capabilities.",
  icon: Eye,
  problems: [
    "Traditional antivirus solutions miss advanced threats and zero-day attacks",
    "Endpoints are the primary attack vector for ransomware and data breaches",
    "Manual threat hunting and incident response is time-consuming and error-prone",
    "Lack of visibility into endpoint activities makes forensic analysis difficult",
    "Remote work has expanded the attack surface beyond traditional network perimeters",
    "Compliance requirements demand detailed endpoint monitoring and reporting",
  ],
  howItWorks: [
    {
      step: "Step 1",
      title: "Assess",
      description:
        "We inventory all endpoints, assess current security posture, and identify gaps in protection to design the optimal EDR deployment strategy.",
    },
    {
      step: "Step 2",
      title: "Implement",
      description:
        "Deploy EDR agents across all endpoints, configure behavioral analysis rules, and integrate with SIEM for centralized monitoring and response.",
    },
    {
      step: "Step 3",
      title: "Operate",
      description:
        "Monitor endpoint activities 24/7, hunt for threats proactively, and provide automated response with expert analysis and forensic support.",
    },
  ],
  deliverables: [
    "Comprehensive endpoint inventory and risk assessment",
    "EDR agent deployment across all devices",
    "Behavioral analysis and machine learning configuration",
    "Threat hunting playbooks and automated responses",
    "SIEM integration for centralized monitoring",
    "Incident response procedures and forensic capabilities",
    "User training on security best practices",
    "24/7 SOC monitoring and threat hunting",
    "Real-time alerts and automated containment",
    "Monthly threat intelligence and security reports",
  ],
  integrations: [
    "Rapid7 InsightIDR",
    "Emsisoft",
    "Palo Alto Cortex",
    "Check Point Harmony",
    "AWS GuardDuty",
    "Azure Sentinel",
  ],
  plans: [
    {
      name: "Essential",
      price: "Contact Us",
      description: "Basic EDR for small businesses",
      features: [
        "Up to 100 endpoints",
        "Basic threat detection",
        "Automated malware removal",
        "Email alerts",
        "Monthly reporting",
      ],
    },
    {
      name: "Professional",
      price: "Contact Us",
      description: "Advanced EDR with threat hunting",
      popular: true,
      features: [
        "Up to 1,000 endpoints",
        "Advanced behavioral analysis",
        "Proactive threat hunting",
        "Automated response actions",
        "24/7 SOC monitoring",
        "Forensic analysis",
        "Priority support",
      ],
    },
    {
      name: "Enterprise",
      price: "Contact Us",
      description: "Enterprise EDR with custom rules",
      features: [
        "Unlimited endpoints",
        "Custom detection rules",
        "Advanced forensics",
        "API integrations",
        "Dedicated threat hunter",
        "Custom reporting",
        "SLA guarantees",
      ],
    },
  ],
  faqs: [
    {
      question: "How does EDR differ from traditional antivirus?",
      answer:
        "EDR provides continuous monitoring, behavioral analysis, and forensic capabilities beyond signature-based detection. It can identify and respond to advanced threats that bypass traditional antivirus.",
    },
    {
      question: "Will EDR impact endpoint performance?",
      answer:
        "Modern EDR solutions are designed to minimize performance impact. Our deployment includes performance optimization and monitoring to ensure minimal disruption to user productivity.",
    },
    {
      question: "How quickly can EDR detect and respond to threats?",
      answer:
        "Our EDR solution provides real-time detection with automated response within seconds. Critical threats trigger immediate containment while our SOC team investigates and provides detailed analysis.",
    },
    {
      question: "Can EDR work with our existing security tools?",
      answer:
        "Yes, our EDR solution integrates with SIEM, SOAR, and other security tools through APIs and standard protocols to provide comprehensive security orchestration.",
    },
  ],
}

export default function EDRPage() {
  return <ServiceDetailTemplate service={service} />
}
