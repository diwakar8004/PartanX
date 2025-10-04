import { ServiceDetailTemplate } from "@/components/service-detail-template"
import { Zap } from "lucide-react"

export const metadata = {
  title: "Next-Gen Firewalls (NGFW) | PartanX",
  description:
    "Advanced firewall protection with deep packet inspection, threat intelligence, and application control.",
}

const service = {
  name: "Next-Gen Firewalls (NGFW)",
  tagline: "Advanced Firewall Protection with Intelligence-Driven Security",
  description:
    "Deploy next-generation firewalls that go beyond traditional port-based filtering with deep packet inspection, application awareness, and integrated threat intelligence.",
  icon: Zap,
  problems: [
    "Traditional firewalls lack visibility into modern applications and encrypted traffic",
    "Advanced threats bypass legacy firewall rules and detection methods",
    "Managing multiple security appliances increases complexity and costs",
    "Lack of integration between firewall and threat intelligence feeds",
    "Difficulty in implementing granular application control policies",
    "Limited visibility into user behavior and application usage patterns",
  ],
  howItWorks: [
    {
      step: "Step 1",
      title: "Design",
      description:
        "Analyze network architecture, traffic patterns, and security requirements to design optimal NGFW deployment with high availability and performance.",
    },
    {
      step: "Step 2",
      title: "Deploy",
      description:
        "Install and configure NGFW appliances, implement security policies, integrate threat intelligence feeds, and establish monitoring and management procedures.",
    },
    {
      step: "Step 3",
      title: "Optimize",
      description:
        "Continuously tune policies, update threat signatures, monitor performance metrics, and provide ongoing optimization with 24/7 SOC support.",
    },
  ],
  deliverables: [
    "NGFW architecture design and sizing recommendations",
    "High availability deployment with failover capabilities",
    "Application identification and control policies",
    "Intrusion prevention system (IPS) configuration",
    "Threat intelligence integration and automated updates",
    "SSL/TLS inspection and decryption policies",
    "User identification and access control integration",
    "Centralized management and reporting platform",
    "24/7 monitoring and threat response",
    "Monthly security reports and policy optimization",
  ],
  integrations: ["Palo Alto Networks", "Fortinet FortiGate", "Check Point", "Cisco ASA", "SonicWall", "Juniper SRX"],
  plans: [
    {
      name: "Essential",
      price: "Contact Us",
      description: "Basic NGFW for small networks",
      features: [
        "Up to 500 Mbps throughput",
        "Basic application control",
        "IPS and anti-malware",
        "Standard support",
        "Monthly reporting",
      ],
    },
    {
      name: "Professional",
      price: "Contact Us",
      description: "Advanced NGFW with threat intelligence",
      popular: true,
      features: [
        "Up to 2 Gbps throughput",
        "Advanced threat prevention",
        "SSL inspection",
        "User identification",
        "24/7 SOC monitoring",
        "Real-time threat feeds",
        "Priority support",
      ],
    },
    {
      name: "Enterprise",
      price: "Contact Us",
      description: "High-performance NGFW for large networks",
      features: [
        "10+ Gbps throughput",
        "Advanced analytics",
        "Custom threat intelligence",
        "API integrations",
        "Dedicated support team",
        "Custom reporting",
        "SLA guarantees",
      ],
    },
  ],
  faqs: [
    {
      question: "How does NGFW differ from traditional firewalls?",
      answer:
        "NGFWs provide application awareness, deep packet inspection, integrated IPS, and threat intelligence, while traditional firewalls only filter based on ports and protocols.",
    },
    {
      question: "What is the performance impact of SSL inspection?",
      answer:
        "Modern NGFWs are designed to handle SSL inspection with minimal performance impact, typically reducing throughput by 10-20% while providing critical visibility into encrypted traffic.",
    },
    {
      question: "Can NGFW integrate with our existing security tools?",
      answer:
        "Yes, NGFWs integrate with SIEM platforms, threat intelligence feeds, identity management systems, and security orchestration tools for comprehensive security operations.",
    },
    {
      question: "How often are threat signatures updated?",
      answer:
        "Threat signatures are updated continuously, often multiple times per day, with automatic updates ensuring protection against the latest threats and vulnerabilities.",
    },
  ],
}

export default function NGFWPage() {
  return <ServiceDetailTemplate service={service} />
}
