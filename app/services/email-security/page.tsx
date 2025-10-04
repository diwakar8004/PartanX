import { ServiceDetailTemplate } from "@/components/service-detail-template"
import { Mail } from "lucide-react"

export const metadata = {
  title: "Email Security & Phishing Defense | PartanX",
  description:
    "Advanced threat protection against phishing, malware, and business email compromise with AI-powered detection.",
}

const service = {
  name: "Email Security & Phishing Defense",
  tagline: "Advanced threat protection against phishing, malware, and business email compromise.",
  description:
    "Comprehensive email security solution that protects against sophisticated phishing attacks, malware, and business email compromise using AI-powered threat detection.",
  icon: Mail,
  problems: [
    "Sophisticated phishing attacks bypass traditional email filters",
    "Business email compromise (BEC) attacks target executives and finance teams",
    "Malware and ransomware delivered through email attachments",
    "Lack of user awareness about email-based threats",
    "Difficulty in detecting and preventing email spoofing",
    "Compliance requirements for email archiving and data protection",
  ],
  howItWorks: [
    {
      step: "Step 1",
      title: "Analyze",
      description:
        "Deploy advanced email security filters that analyze incoming messages using AI-powered threat detection, reputation analysis, and behavioral patterns.",
    },
    {
      step: "Step 2",
      title: "Protect",
      description:
        "Block malicious emails, quarantine suspicious messages, and provide safe link protection while maintaining legitimate email flow and user productivity.",
    },
    {
      step: "Step 3",
      title: "Educate",
      description:
        "Deliver security awareness training, simulate phishing attacks, and provide real-time user feedback to build a human firewall against email threats.",
    },
  ],
  deliverables: [
    "Email security gateway deployment and configuration",
    "AI-powered threat detection and analysis",
    "Phishing simulation and training programs",
    "Business email compromise protection",
    "Safe link and attachment scanning",
    "Email encryption and data loss prevention",
    "Security awareness training modules",
    "Incident response and forensic analysis",
    "Monthly security reports and metrics",
    "Quarterly phishing simulation assessments",
  ],
  integrations: ["Microsoft 365", "Google Workspace", "Proofpoint", "Mimecast", "Barracuda", "Trend Micro"],
  plans: [
    {
      name: "Essential",
      price: "Contact Us",
      description: "Basic email security protection",
      features: [
        "Up to 100 mailboxes",
        "Anti-phishing protection",
        "Malware scanning",
        "Basic reporting",
        "Email support",
      ],
    },
    {
      name: "Professional",
      price: "Contact Us",
      description: "Advanced email security with training",
      popular: true,
      features: [
        "Up to 1,000 mailboxes",
        "Advanced threat protection",
        "Phishing simulation training",
        "BEC protection",
        "24/7 monitoring",
        "Detailed analytics",
        "Priority support",
      ],
    },
    {
      name: "Enterprise",
      price: "Contact Us",
      description: "Complete email security solution",
      features: [
        "Unlimited mailboxes",
        "AI-powered threat detection",
        "Custom training programs",
        "Advanced forensics",
        "Dedicated support team",
        "Executive reporting",
        "SLA guarantees",
      ],
    },
  ],
  faqs: [
    {
      question: "How effective is the phishing detection?",
      answer:
        "Our AI-powered detection achieves over 99.9% accuracy in identifying phishing attempts while maintaining minimal false positives to ensure legitimate emails are delivered.",
    },
    {
      question: "Can the solution integrate with our existing email system?",
      answer:
        "Yes, our email security solution integrates seamlessly with Microsoft 365, Google Workspace, and on-premises email systems without disrupting existing workflows.",
    },
    {
      question: "What is included in the security awareness training?",
      answer:
        "Training includes interactive modules, simulated phishing campaigns, real-time feedback, and customizable content based on your organization's specific threat landscape.",
    },
    {
      question: "How quickly are new threats detected and blocked?",
      answer:
        "Our system updates threat intelligence in real-time and can detect and block new threats within minutes of identification through our global threat network.",
    },
  ],
}

export default function EmailSecurityPage() {
  return <ServiceDetailTemplate service={service} />
}
