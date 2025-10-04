import { ServiceDetailTemplate } from "@/components/service-detail-template"
import { CloudCog } from "lucide-react"

export const metadata = {
  title: "Cloud Security (AWS Stack) | PartanX",
  description: "Comprehensive AWS security with GuardDuty, Security Hub, IAM, and Shield integration.",
}

const service = {
  name: "Cloud Security (AWS Stack)",
  tagline: "Comprehensive AWS Security and Compliance Protection",
  description:
    "Secure your AWS infrastructure with integrated security services, automated compliance monitoring, and expert cloud security management.",
  icon: CloudCog,
  problems: [
    "Complex AWS security services require specialized expertise to configure properly",
    "Misconfigurations in cloud environments lead to data breaches and compliance issues",
    "Lack of visibility into cloud security posture and threat landscape",
    "Compliance requirements demand continuous monitoring and reporting",
    "Shared responsibility model creates confusion about security ownership",
    "Rapid cloud adoption outpaces security implementation and governance",
  ],
  howItWorks: [
    {
      step: "Step 1",
      title: "Assess",
      description:
        "Comprehensive AWS security assessment including configuration review, compliance gap analysis, and threat landscape evaluation.",
    },
    {
      step: "Step 2",
      title: "Secure",
      description:
        "Deploy and configure AWS security services including GuardDuty, Security Hub, IAM, Shield, and WAF with automated monitoring and response.",
    },
    {
      step: "Step 3",
      title: "Monitor",
      description:
        "Continuous security monitoring, compliance reporting, and optimization with 24/7 SOC support and expert cloud security management.",
    },
  ],
  deliverables: [
    "AWS security architecture review and recommendations",
    "GuardDuty deployment and threat detection configuration",
    "Security Hub centralized security findings management",
    "IAM policy optimization and access governance",
    "AWS Shield DDoS protection and WAF configuration",
    "CloudTrail logging and monitoring setup",
    "Config rules for compliance and configuration monitoring",
    "Automated security response and remediation",
    "Monthly cloud security reports and compliance dashboards",
    "Quarterly security posture reviews and optimization",
  ],
  integrations: ["AWS GuardDuty", "AWS Security Hub", "AWS Shield", "AWS WAF", "AWS Config", "AWS CloudTrail"],
  plans: [
    {
      name: "Essential",
      price: "$2,500/month",
      description: "Basic AWS security for small deployments",
      features: [
        "Up to 10 AWS accounts",
        "Basic security services setup",
        "Monthly reporting",
        "Email support",
        "Standard compliance monitoring",
      ],
    },
    {
      name: "Professional",
      price: "$7,500/month",
      description: "Advanced AWS security with monitoring",
      popular: true,
      features: [
        "Up to 50 AWS accounts",
        "Advanced threat detection",
        "24/7 SOC monitoring",
        "Automated response",
        "Real-time dashboards",
        "Priority support",
        "Compliance reporting",
      ],
    },
    {
      name: "Enterprise",
      price: "Contact Us",
      description: "Comprehensive AWS security program",
      features: [
        "Unlimited AWS accounts",
        "Custom security architecture",
        "Dedicated cloud security team",
        "Advanced analytics",
        "Executive reporting",
        "Custom integrations",
        "SLA guarantees",
      ],
    },
  ],
  faqs: [
    {
      question: "What AWS security services do you implement?",
      answer:
        "We implement and manage the full AWS security stack including GuardDuty, Security Hub, IAM, Shield, WAF, Config, CloudTrail, and Inspector for comprehensive protection.",
    },
    {
      question: "How do you handle AWS compliance requirements?",
      answer:
        "We provide automated compliance monitoring for SOC 2, PCI DSS, HIPAA, and other frameworks with continuous assessment and detailed reporting.",
    },
    {
      question: "Can you secure existing AWS environments?",
      answer:
        "Yes, we perform comprehensive security assessments of existing AWS deployments and implement security improvements without disrupting operations.",
    },
    {
      question: "How do you monitor AWS security across multiple accounts?",
      answer:
        "We use AWS Organizations and Security Hub to provide centralized security monitoring and management across all your AWS accounts with unified reporting.",
    },
  ],
}

export default function CloudSecurityAWSPage() {
  return <ServiceDetailTemplate service={service} />
}
