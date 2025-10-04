import { ServiceDetailTemplate } from "@/components/service-detail-template"
import { AlertTriangle } from "lucide-react"

export const metadata = {
  title: "Threat Intelligence Services | PartanX",
  description: "Real-time threat intelligence feeds and analysis for proactive defense strategies and threat hunting.",
}

const service = {
  name: "Threat Intelligence Services",
  tagline: "Stay Ahead of Threats with Real-Time Intelligence and Analysis",
  description:
    "Leverage comprehensive threat intelligence to proactively defend against emerging threats with real-time feeds, expert analysis, and actionable insights.",
  icon: AlertTriangle,
  problems: [
    "Organizations lack visibility into emerging threats and attack campaigns",
    "Generic threat feeds provide too much noise and not enough actionable intelligence",
    "Security teams struggle to prioritize threats relevant to their industry and infrastructure",
    "Lack of context around threat actors, tactics, techniques, and procedures (TTPs)",
    "Difficulty in correlating internal security events with external threat intelligence",
    "Manual threat hunting processes are time-consuming and resource-intensive",
  ],
  howItWorks: [
    {
      step: "Step 1",
      title: "Collect",
      description:
        "Gather threat intelligence from multiple sources including commercial feeds, open source intelligence, dark web monitoring, and industry-specific sources.",
    },
    {
      step: "Step 2",
      title: "Analyze",
      description:
        "Process and analyze threat data using AI and expert analysis to identify relevant threats, attack patterns, and indicators of compromise specific to your environment.",
    },
    {
      step: "Step 3",
      title: "Act",
      description:
        "Deliver actionable intelligence through automated feeds, custom reports, and proactive threat hunting to strengthen your security posture and incident response.",
    },
  ],
  deliverables: [
    "Real-time threat intelligence feeds and IOCs",
    "Industry-specific threat landscape analysis",
    "Threat actor profiling and campaign tracking",
    "Dark web monitoring and brand protection",
    "Vulnerability intelligence and exploit tracking",
    "Custom threat hunting and investigation support",
    "Integration with SIEM and security tools",
    "Weekly threat intelligence briefings",
    "Monthly threat landscape reports",
    "Quarterly strategic threat assessments",
  ],
  integrations: [
    "Recorded Future",
    "CrowdStrike Falcon X",
    "FireEye Mandiant",
    "IBM X-Force",
    "Anomali",
    "ThreatConnect",
  ],
  plans: [
    {
      name: "Essential",
      price: "$2,500/month",
      description: "Basic threat intelligence feeds",
      features: ["Standard IOC feeds", "Basic threat reports", "Email alerts", "Monthly briefings", "Standard support"],
    },
    {
      name: "Professional",
      price: "$7,500/month",
      description: "Advanced intelligence with analysis",
      popular: true,
      features: [
        "Premium threat feeds",
        "Industry-specific intelligence",
        "Dark web monitoring",
        "Custom threat hunting",
        "Weekly briefings",
        "Priority support",
        "API access",
      ],
    },
    {
      name: "Enterprise",
      price: "Contact Us",
      description: "Comprehensive intelligence program",
      features: [
        "Custom intelligence collection",
        "Dedicated threat analyst",
        "Advanced threat hunting",
        "Executive briefings",
        "Custom integrations",
        "24/7 support",
        "SLA guarantees",
      ],
    },
  ],
  faqs: [
    {
      question: "What sources do you use for threat intelligence?",
      answer:
        "We aggregate intelligence from commercial feeds, government sources, industry sharing groups, dark web monitoring, honeypots, and our global SOC network.",
    },
    {
      question: "How is threat intelligence customized for our organization?",
      answer:
        "We tailor intelligence based on your industry, technology stack, geographic location, and specific threat landscape to provide relevant and actionable insights.",
    },
    {
      question: "Can threat intelligence integrate with our existing security tools?",
      answer:
        "Yes, we provide threat intelligence in multiple formats including STIX/TAXII, JSON, XML, and direct API integrations with major SIEM and security platforms.",
    },
    {
      question: "How quickly is new threat intelligence delivered?",
      answer:
        "Critical threats are delivered within minutes of identification, with automated feeds updating continuously and detailed analysis provided within hours.",
    },
  ],
}

export default function ThreatIntelligencePage() {
  return <ServiceDetailTemplate service={service} />
}
