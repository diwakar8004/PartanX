import { ServiceDetailTemplate } from "@/components/service-detail-template"
import { Shield } from "lucide-react"

export const metadata = {
  title: "Advanced ZTNA - Zero Trust Network Access | PartanX",
  description:
    "Implement Zero Trust Network Access with granular policy controls, continuous verification, and seamless user experience.",
}

const service = {
  name: "Advanced ZTNA",
  tagline: "Zero Trust Network Access with granular policy controls and continuous verification.",
  description:
    "Secure remote access without traditional VPNs. Our ZTNA solution provides application-specific access with continuous user and device verification.",
  icon: Shield,
  problems: [
    "Traditional VPNs provide excessive network access and create security blind spots",
    "Remote workers need secure access to specific applications without compromising the network",
    "Legacy access controls lack granular policy enforcement and real-time risk assessment",
    "Compliance requirements demand detailed access logging and session monitoring",
    "Network segmentation is difficult to implement and maintain with traditional solutions",
    "User experience suffers with complex authentication and connection procedures",
  ],
  howItWorks: [
    {
      step: "Step 1",
      title: "Assess",
      description:
        "We analyze your current network architecture, identify critical applications, and map user access requirements to design the optimal ZTNA deployment.",
    },
    {
      step: "Step 2",
      title: "Implement",
      description:
        "Deploy ZTNA connectors and policies, integrate with identity providers, and configure application-specific access controls with continuous verification.",
    },
    {
      step: "Step 3",
      title: "Operate",
      description:
        "Monitor access patterns, enforce adaptive policies, and provide ongoing optimization with 24/7 SOC support and regular security reviews.",
    },
  ],
  deliverables: [
    "ZTNA architecture design and implementation plan",
    "Application discovery and access policy mapping",
    "Identity provider integration and SSO configuration",
    "Continuous device and user verification setup",
    "Real-time access monitoring and logging",
    "Policy enforcement and adaptive access controls",
    "User training and adoption support",
    "24/7 monitoring and incident response",
    "Monthly access reports and security analytics",
    "Quarterly policy reviews and optimization",
  ],
  integrations: ["Cloudflare Access", "Palo Alto Prisma", "Check Point Harmony", "AWS IAM", "Azure AD", "Okta"],
  plans: [
    {
      name: "Essential",
      price: "Contact Us",
      description: "Basic ZTNA for small teams",
      features: [
        "Up to 50 users",
        "Basic application access",
        "Standard authentication",
        "Email support",
        "Monthly reporting",
      ],
    },
    {
      name: "Professional",
      price: "Contact Us",
      description: "Advanced ZTNA for growing organizations",
      popular: true,
      features: [
        "Up to 500 users",
        "Advanced policy controls",
        "Multi-factor authentication",
        "Device compliance checking",
        "24/7 SOC monitoring",
        "Real-time analytics",
        "Priority support",
      ],
    },
    {
      name: "Enterprise",
      price: "Contact Us",
      description: "Full-scale ZTNA for large enterprises",
      features: [
        "Unlimited users",
        "Custom policy framework",
        "Advanced threat detection",
        "API integrations",
        "Dedicated support team",
        "Custom reporting",
        "SLA guarantees",
      ],
    },
  ],
  faqs: [
    {
      question: "How does ZTNA differ from traditional VPN?",
      answer:
        "ZTNA provides application-specific access without exposing the entire network, includes continuous verification, and offers better performance and security than traditional VPNs.",
    },
    {
      question: "What applications can be protected with ZTNA?",
      answer:
        "ZTNA can protect web applications, internal tools, databases, file servers, and any TCP/UDP-based applications regardless of where they're hosted.",
    },
    {
      question: "How long does ZTNA implementation take?",
      answer:
        "Typical implementation takes 2-4 weeks depending on the number of applications and complexity of access policies. We provide phased rollouts to minimize disruption.",
    },
    {
      question: "Is ZTNA compatible with our existing identity provider?",
      answer:
        "Yes, our ZTNA solution integrates with major identity providers including Azure AD, Okta, Ping Identity, and LDAP/Active Directory systems.",
    },
  ],
}

export default function AdvancedZTNAPage() {
  return <ServiceDetailTemplate service={service} />
}
