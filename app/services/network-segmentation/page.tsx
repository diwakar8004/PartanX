import { ServiceDetailTemplate } from "@/components/service-detail-template"
import { Network } from "lucide-react"

export const metadata = {
  title: "Network Segmentation & Microsegmentation | PartanX",
  description: "Advanced network isolation and zero-trust microsegmentation strategies for enhanced security.",
}

const service = {
  name: "Network Segmentation & Microsegmentation",
  tagline: "Advanced Network Isolation for Zero-Trust Security",
  description:
    "Implement sophisticated network segmentation and microsegmentation strategies to limit attack spread, improve compliance, and enable zero-trust architecture.",
  icon: Network,
  problems: [
    "Flat networks allow lateral movement and widespread compromise",
    "Legacy segmentation approaches are difficult to manage and maintain",
    "Compliance requirements demand network isolation and access controls",
    "Cloud and hybrid environments complicate traditional segmentation",
    "Lack of visibility into network traffic and communication patterns",
    "Manual network changes are slow and error-prone",
  ],
  howItWorks: [
    {
      step: "Step 1",
      title: "Map",
      description:
        "Analyze network topology, traffic flows, and communication patterns to design optimal segmentation strategy with minimal business disruption.",
    },
    {
      step: "Step 2",
      title: "Segment",
      description:
        "Implement network segmentation using software-defined networking, VLANs, and microsegmentation technologies with automated policy enforcement.",
    },
    {
      step: "Step 3",
      title: "Monitor",
      description:
        "Continuously monitor network traffic, enforce segmentation policies, and provide ongoing optimization with automated threat response capabilities.",
    },
  ],
  deliverables: [
    "Network topology analysis and segmentation design",
    "Traffic flow mapping and communication requirements",
    "Segmentation policy framework and rule configuration",
    "Software-defined perimeter (SDP) implementation",
    "Microsegmentation deployment and management",
    "Automated policy enforcement and monitoring",
    "Network access control (NAC) integration",
    "Compliance reporting and audit support",
    "Monthly network security reports",
    "Quarterly segmentation optimization reviews",
  ],
  integrations: ["Cisco ACI", "VMware NSX", "Illumio", "Guardicore", "Palo Alto Prisma", "Fortinet Fabric"],
  plans: [
    {
      name: "Essential",
      price: "Contact Us",
      description: "Basic network segmentation",
      features: [
        "VLAN-based segmentation",
        "Basic policy enforcement",
        "Network monitoring",
        "Standard support",
        "Quarterly reviews",
      ],
    },
    {
      name: "Professional",
      price: "Contact Us",
      description: "Advanced microsegmentation",
      popular: true,
      features: [
        "Software-defined segmentation",
        "Automated policy enforcement",
        "Real-time monitoring",
        "Threat response integration",
        "24/7 SOC support",
        "Priority support",
        "Monthly optimization",
      ],
    },
    {
      name: "Enterprise",
      price: "Contact Us",
      description: "Zero-trust network architecture",
      features: [
        "Advanced microsegmentation",
        "AI-powered policy optimization",
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
      question: "What's the difference between segmentation and microsegmentation?",
      answer:
        "Traditional segmentation creates broad network zones, while microsegmentation provides granular, application-level isolation with dynamic policy enforcement based on identity and context.",
    },
    {
      question: "How does segmentation impact network performance?",
      answer:
        "Modern software-defined segmentation has minimal performance impact, typically less than 5% latency increase, while providing significant security benefits.",
    },
    {
      question: "Can segmentation work in cloud environments?",
      answer:
        "Yes, our solutions support cloud-native segmentation using security groups, network policies, and software-defined perimeters across AWS, Azure, and Google Cloud.",
    },
    {
      question: "How long does segmentation implementation take?",
      answer:
        "Implementation typically takes 4-8 weeks depending on network complexity, with phased rollouts to minimize business disruption and ensure proper testing.",
    },
  ],
}

export default function NetworkSegmentationPage() {
  return <ServiceDetailTemplate service={service} />
}
