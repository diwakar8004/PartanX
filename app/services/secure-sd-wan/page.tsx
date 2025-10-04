import { ServiceDetailTemplate } from "@/components/service-detail-template"
import { Wifi } from "lucide-react"

export const metadata = {
  title: "Secure SD-WAN | PartanX",
  description: "Software-defined wide area networking with integrated security and performance optimization.",
}

const service = {
  name: "Secure SD-WAN",
  tagline: "Intelligent Network Connectivity with Built-in Security",
  description:
    "Transform your network infrastructure with software-defined WAN technology that combines connectivity, security, and performance optimization in a single solution.",
  icon: Wifi,
  problems: [
    "Traditional WAN architectures are expensive and inflexible",
    "Multiple point solutions create complexity and management overhead",
    "Branch offices lack adequate security and performance",
    "Cloud application performance suffers over traditional WAN",
    "Network changes require lengthy provisioning and configuration",
    "Lack of centralized visibility and control across distributed locations",
  ],
  howItWorks: [
    {
      step: "Step 1",
      title: "Design",
      description:
        "Analyze current network architecture, traffic patterns, and requirements to design optimal SD-WAN deployment with integrated security services.",
    },
    {
      step: "Step 2",
      title: "Deploy",
      description:
        "Install SD-WAN appliances, configure policies and security services, and establish centralized management with automated provisioning capabilities.",
    },
    {
      step: "Step 3",
      title: "Optimize",
      description:
        "Continuously monitor performance, optimize traffic routing, and provide ongoing management with 24/7 support and proactive optimization.",
    },
  ],
  deliverables: [
    "SD-WAN architecture design and deployment plan",
    "Appliance installation and configuration",
    "Centralized policy management and orchestration",
    "Integrated security services (NGFW, IPS, URL filtering)",
    "Application-aware routing and optimization",
    "WAN optimization and traffic shaping",
    "Centralized monitoring and analytics platform",
    "24/7 network monitoring and support",
    "Monthly performance reports and optimization",
    "Quarterly network reviews and planning",
  ],
  integrations: [
    "Cisco Meraki",
    "VMware VeloCloud",
    "Silver Peak",
    "Fortinet FortiGate",
    "Palo Alto Prisma",
    "Riverbed",
  ],
  plans: [
    {
      name: "Essential",
      price: "Contact Us",
      description: "Basic SD-WAN for small networks",
      features: [
        "Up to 10 sites",
        "Basic routing and optimization",
        "Standard security features",
        "Centralized management",
        "Standard support",
      ],
    },
    {
      name: "Professional",
      price: "Contact Us",
      description: "Advanced SD-WAN with security",
      popular: true,
      features: [
        "Up to 100 sites",
        "Advanced security services",
        "Application optimization",
        "Real-time analytics",
        "24/7 monitoring",
        "Priority support",
        "Performance SLAs",
      ],
    },
    {
      name: "Enterprise",
      price: "Contact Us",
      description: "Global SD-WAN with premium services",
      features: [
        "Unlimited sites",
        "Advanced analytics",
        "Custom integrations",
        "Dedicated support team",
        "Executive reporting",
        "Global support",
        "SLA guarantees",
      ],
    },
  ],
  faqs: [
    {
      question: "How does SD-WAN improve network performance?",
      answer:
        "SD-WAN uses intelligent path selection, application optimization, and WAN optimization techniques to improve performance by up to 50% while reducing costs.",
    },
    {
      question: "What security features are included?",
      answer:
        "Our SD-WAN solutions include integrated NGFW, IPS, URL filtering, anti-malware, and encrypted tunnels for comprehensive security at every location.",
    },
    {
      question: "Can SD-WAN work with our existing internet connections?",
      answer:
        "Yes, SD-WAN works with any internet connection including broadband, LTE, MPLS, and satellite, providing automatic failover and load balancing.",
    },
    {
      question: "How long does SD-WAN deployment take?",
      answer:
        "Typical deployment takes 2-4 weeks per site with minimal disruption. We provide staged rollouts and can deploy multiple sites simultaneously.",
    },
  ],
}

export default function SecureSDWANPage() {
  return <ServiceDetailTemplate service={service} />
}
