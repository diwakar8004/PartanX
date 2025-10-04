import { ServiceDetailTemplate } from "@/components/service-detail-template"
import { Cloud } from "lucide-react"

export const metadata = {
  title: "SASE / SWG / CASB | PartanX",
  description:
    "Secure Access Service Edge with integrated web gateway and cloud access security broker for comprehensive cloud protection.",
}

const service = {
  name: "SASE / SWG / CASB",
  tagline: "Secure Access Service Edge with integrated web gateway and cloud access security broker.",
  description:
    "Converged network and security solution that combines SD-WAN, secure web gateway, and cloud access security broker into a unified cloud-native platform.",
  icon: Cloud,
  problems: [
    "Complex network architectures with multiple security point solutions",
    "Lack of visibility and control over cloud application usage",
    "Performance issues with backhauling traffic through data centers",
    "Difficulty securing remote workers and branch offices",
    "Shadow IT and unsanctioned cloud application usage",
    "Inconsistent security policies across different locations and users",
  ],
  howItWorks: [
    {
      step: "Step 1",
      title: "Assess",
      description:
        "Evaluate current network architecture, identify cloud applications, and design a SASE deployment strategy that optimizes both security and performance.",
    },
    {
      step: "Step 2",
      title: "Deploy",
      description:
        "Implement SASE edge nodes, configure secure web gateway policies, and deploy cloud access security controls with seamless user experience.",
    },
    {
      step: "Step 3",
      title: "Optimize",
      description:
        "Continuously monitor performance and security metrics, optimize policies, and provide ongoing management with 24/7 SOC support and regular reviews.",
    },
  ],
  deliverables: [
    "SASE architecture design and implementation",
    "Secure web gateway configuration and policies",
    "Cloud access security broker deployment",
    "SD-WAN integration and optimization",
    "Cloud application discovery and classification",
    "Data loss prevention and encryption",
    "User and entity behavior analytics",
    "24/7 monitoring and incident response",
    "Monthly performance and security reports",
    "Quarterly policy optimization reviews",
  ],
  integrations: ["Cloudflare", "Zscaler", "Palo Alto Prisma", "Netskope", "Cato Networks", "Versa Networks"],
  plans: [
    {
      name: "Essential SASE",
      price: "Contact Us",
      description: "Basic secure access for small organizations",
      features: [
        "Up to 100 users",
        "Secure web gateway",
        "Basic CASB functionality",
        "Standard support",
        "Monthly reporting",
      ],
    },
    {
      name: "Professional SASE",
      price: "Contact Us",
      description: "Advanced SASE with full functionality",
      popular: true,
      features: [
        "Up to 1,000 users",
        "Full SASE capabilities",
        "Advanced threat protection",
        "DLP and encryption",
        "24/7 SOC monitoring",
        "Real-time analytics",
        "Priority support",
      ],
    },
    {
      name: "Enterprise SASE",
      price: "Contact Us",
      description: "Complete SASE solution for large enterprises",
      features: [
        "Unlimited users",
        "Custom policy framework",
        "Advanced analytics",
        "API integrations",
        "Dedicated support team",
        "Executive dashboards",
        "SLA guarantees",
      ],
    },
  ],
  faqs: [
    {
      question: "What is SASE and how does it differ from traditional security?",
      answer:
        "SASE converges network and security functions into a cloud-native service, providing better performance, simplified management, and consistent security policies compared to traditional hub-and-spoke architectures.",
    },
    {
      question: "How does SASE improve performance for remote workers?",
      answer:
        "SASE provides direct internet access from edge locations, reducing latency and improving performance while maintaining security through integrated threat protection and policy enforcement.",
    },
    {
      question: "Can SASE replace our existing security tools?",
      answer:
        "SASE can consolidate multiple security functions including firewalls, secure web gateways, and CASB solutions, reducing complexity while improving security posture and management efficiency.",
    },
    {
      question: "What cloud applications can be secured with CASB?",
      answer:
        "Our CASB solution supports thousands of cloud applications including Microsoft 365, Google Workspace, Salesforce, AWS, Azure, and custom applications through API and proxy-based protection.",
    },
  ],
}

export default function SASESWGCASBPage() {
  return <ServiceDetailTemplate service={service} />
}
