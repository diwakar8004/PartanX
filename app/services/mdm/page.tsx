import { ServiceDetailTemplate } from "@/components/service-detail-template"
import { Smartphone } from "lucide-react"

export const metadata = {
  title: "Mobile Device Management (MDM) | PartanX",
  description:
    "Complete mobile security with device policies, app management, and compliance controls for iOS, Android, and Windows devices.",
}

const service = {
  name: "Mobile Device Management (MDM)",
  tagline: "Complete mobile security with device policies, app management, and compliance controls.",
  description:
    "Secure and manage mobile devices across your organization with comprehensive policy enforcement, app management, and compliance monitoring.",
  icon: Smartphone,
  problems: [
    "BYOD policies create security risks and compliance challenges",
    "Lack of visibility and control over mobile device usage",
    "Difficulty managing and securing mobile applications",
    "Data leakage risks from unmanaged personal devices",
    "Complex compliance requirements for mobile device security",
    "Inconsistent security policies across different device types",
  ],
  howItWorks: [
    {
      step: "Step 1",
      title: "Enroll",
      description:
        "Deploy MDM profiles and enroll devices through automated processes, establishing secure communication channels and baseline security configurations.",
    },
    {
      step: "Step 2",
      title: "Manage",
      description:
        "Implement device policies, manage applications, and enforce security controls while maintaining user privacy and productivity across all mobile platforms.",
    },
    {
      step: "Step 3",
      title: "Monitor",
      description:
        "Continuously monitor device compliance, track security events, and provide real-time reporting with automated remediation for policy violations.",
    },
  ],
  deliverables: [
    "MDM platform deployment and configuration",
    "Device enrollment and profile management",
    "Application management and distribution",
    "Security policy creation and enforcement",
    "Compliance monitoring and reporting",
    "Remote wipe and device management capabilities",
    "User training and support documentation",
    "Integration with identity and access management",
    "Monthly compliance reports",
    "Quarterly policy reviews and updates",
  ],
  integrations: [
    "Microsoft Intune",
    "VMware Workspace ONE",
    "Jamf Pro",
    "MobileIron",
    "Citrix Endpoint Management",
    "Google Workspace",
  ],
  plans: [
    {
      name: "Basic MDM",
      price: "Contact Us",
      description: "Essential mobile device management",
      features: [
        "Up to 100 devices",
        "Basic policy enforcement",
        "App management",
        "Remote wipe capability",
        "Email support",
      ],
    },
    {
      name: "Professional MDM",
      price: "Contact Us",
      description: "Advanced mobile security and management",
      popular: true,
      features: [
        "Up to 1,000 devices",
        "Advanced security policies",
        "Conditional access controls",
        "Compliance reporting",
        "24/7 support",
        "Integration capabilities",
        "Custom configurations",
      ],
    },
    {
      name: "Enterprise MDM",
      price: "Contact Us",
      description: "Complete mobile security solution",
      features: [
        "Unlimited devices",
        "Advanced threat protection",
        "Custom policy frameworks",
        "API integrations",
        "Dedicated support team",
        "Executive dashboards",
        "SLA guarantees",
      ],
    },
  ],
  faqs: [
    {
      question: "What devices and platforms are supported?",
      answer:
        "Our MDM solution supports iOS, Android, Windows, and macOS devices with comprehensive management capabilities across all major mobile platforms.",
    },
    {
      question: "How does MDM handle employee privacy?",
      answer:
        "We implement privacy-focused policies that separate personal and corporate data, ensuring employee privacy while maintaining corporate security requirements.",
    },
    {
      question: "Can we manage both company-owned and personal devices?",
      answer:
        "Yes, our solution supports both corporate-owned and BYOD scenarios with different policy sets and privacy controls appropriate for each use case.",
    },
    {
      question: "What happens if a device is lost or stolen?",
      answer:
        "Devices can be immediately located, locked, or remotely wiped to protect corporate data. We also provide detailed audit trails for compliance reporting.",
    },
  ],
}

export default function MDMPage() {
  return <ServiceDetailTemplate service={service} />
}
