import { ServiceDetailTemplate } from "@/components/service-detail-template"
import { Eye } from "lucide-react"

export const metadata = {
  title: "Endpoint Protection (EDR, XDR) | PartanX",
  description:
    "Comprehensive endpoint detection, response, and extended detection across all environments with real-time threat hunting.",
}

const service = {
  name: "Endpoint Protection (EDR, XDR)",
  tagline: "Comprehensive endpoint detection, response, and extended detection across all environments.",
  description:
    "Advanced endpoint security with real-time threat detection, automated response, and extended visibility across your entire digital infrastructure.",
  icon: Eye,
  problems: [
    "Traditional antivirus solutions miss advanced threats and zero-day attacks",
    "Limited visibility into endpoint activities and attack progression",
    "Manual incident response processes are too slow for modern threats",
    "Lack of correlation between endpoint, network, and cloud security events",
    "Difficulty in threat hunting and forensic analysis across distributed environments",
    "Compliance requirements demand detailed endpoint monitoring and reporting",
  ],
  howItWorks: [
    {
      step: "Step 1",
      title: "Deploy",
      description:
        "Install lightweight agents across all endpoints and configure behavioral analysis engines to establish baseline security postures and detection capabilities.",
    },
    {
      step: "Step 2",
      title: "Detect",
      description:
        "Continuously monitor endpoint activities using AI-powered detection engines that identify suspicious behaviors, malware, and advanced persistent threats in real-time.",
    },
    {
      step: "Step 3",
      title: "Respond",
      description:
        "Automatically contain threats, isolate compromised endpoints, and execute response playbooks while providing detailed forensic analysis and remediation guidance.",
    },
  ],
  deliverables: [
    "EDR/XDR platform deployment and configuration",
    "Endpoint agent installation and management",
    "Behavioral analysis and threat detection rules",
    "Automated response playbooks and containment policies",
    "Real-time threat hunting and investigation tools",
    "Forensic analysis and incident reconstruction",
    "Integration with SIEM and security orchestration platforms",
    "24/7 SOC monitoring and expert analysis",
    "Monthly threat intelligence reports",
    "Quarterly security posture assessments",
  ],
  integrations: [
    "CrowdStrike Falcon",
    "SentinelOne",
    "Microsoft Defender",
    "Carbon Black",
    "Palo Alto Cortex",
    "Rapid7",
  ],
  plans: [
    {
      name: "Essential EDR",
      price: "Contact Us",
      description: "Basic endpoint protection for small businesses",
      features: [
        "Up to 100 endpoints",
        "Real-time threat detection",
        "Basic automated response",
        "Email support",
        "Monthly reporting",
      ],
    },
    {
      name: "Professional XDR",
      price: "Contact Us",
      description: "Advanced protection with extended detection",
      popular: true,
      features: [
        "Up to 1,000 endpoints",
        "Extended detection and response",
        "Advanced threat hunting",
        "Custom response playbooks",
        "24/7 SOC monitoring",
        "Real-time analytics dashboard",
        "Priority support",
      ],
    },
    {
      name: "Enterprise XDR",
      price: "Contact Us",
      description: "Full-scale protection for large organizations",
      features: [
        "Unlimited endpoints",
        "AI-powered threat detection",
        "Advanced forensic analysis",
        "Custom integrations",
        "Dedicated security team",
        "Executive reporting",
        "SLA guarantees",
      ],
    },
  ],
  faqs: [
    {
      question: "What's the difference between EDR and XDR?",
      answer:
        "EDR focuses on endpoint detection and response, while XDR extends this capability across endpoints, networks, cloud, and applications for unified threat detection and response.",
    },
    {
      question: "How does endpoint protection impact system performance?",
      answer:
        "Modern EDR/XDR solutions use lightweight agents with minimal performance impact. Our solutions typically use less than 2% CPU and 100MB RAM on average.",
    },
    {
      question: "Can you integrate with our existing security tools?",
      answer:
        "Yes, our EDR/XDR solutions integrate with major SIEM platforms, security orchestration tools, and threat intelligence feeds for comprehensive security operations.",
    },
    {
      question: "How quickly can threats be detected and contained?",
      answer:
        "Our solutions detect threats in real-time and can automatically contain them within seconds. Manual investigation and response typically occurs within 15 minutes of detection.",
    },
  ],
}

export default function EndpointProtectionPage() {
  return <ServiceDetailTemplate service={service} />
}
