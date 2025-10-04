import { ServiceDetailTemplate } from "@/components/service-detail-template"
import { Activity } from "lucide-react"

export const metadata = {
  title: "SIEM / SOAR | PartanX",
  description:
    "Security Information and Event Management with automated orchestration and response for comprehensive threat detection.",
}

const service = {
  name: "SIEM / SOAR",
  tagline: "Security Information and Event Management with automated orchestration and response.",
  description:
    "Advanced security operations platform that combines real-time security monitoring, threat detection, and automated incident response capabilities.",
  icon: Activity,
  problems: [
    "Security events scattered across multiple tools and systems",
    "Manual incident response processes are too slow for modern threats",
    "Lack of correlation between security events and threat intelligence",
    "Alert fatigue from too many false positives and low-priority events",
    "Difficulty in meeting compliance requirements for security monitoring",
    "Limited visibility into advanced persistent threats and insider risks",
  ],
  howItWorks: [
    {
      step: "Step 1",
      title: "Collect",
      description:
        "Aggregate security events from all sources including endpoints, networks, cloud services, and applications into a centralized platform for analysis.",
    },
    {
      step: "Step 2",
      title: "Analyze",
      description:
        "Apply advanced analytics, machine learning, and threat intelligence to correlate events, detect threats, and prioritize security incidents based on risk.",
    },
    {
      step: "Step 3",
      title: "Respond",
      description:
        "Execute automated response playbooks, orchestrate security tools, and provide guided investigation workflows to accelerate incident resolution.",
    },
  ],
  deliverables: [
    "SIEM platform deployment and configuration",
    "Log source integration and normalization",
    "Custom correlation rules and use cases",
    "Automated response playbooks",
    "Threat intelligence integration",
    "Compliance reporting and dashboards",
    "Security analyst training and documentation",
    "24/7 SOC monitoring and analysis",
    "Monthly security operations reports",
    "Quarterly threat landscape assessments",
  ],
  integrations: ["Splunk", "IBM QRadar", "Microsoft Sentinel", "Elastic Security", "LogRhythm", "Phantom SOAR"],
  plans: [
    {
      name: "Essential SIEM",
      price: "Contact Us",
      description: "Basic security monitoring and alerting",
      features: [
        "Up to 1GB/day log ingestion",
        "Basic correlation rules",
        "Standard dashboards",
        "Email alerting",
        "Business hours support",
      ],
    },
    {
      name: "Professional SIEM/SOAR",
      price: "Contact Us",
      description: "Advanced security operations platform",
      popular: true,
      features: [
        "Up to 10GB/day log ingestion",
        "Advanced analytics and ML",
        "Automated response playbooks",
        "Threat intelligence feeds",
        "24/7 SOC monitoring",
        "Custom dashboards",
        "Priority support",
      ],
    },
    {
      name: "Enterprise SIEM/SOAR",
      price: "Contact Us",
      description: "Complete security operations center",
      features: [
        "Unlimited log ingestion",
        "Advanced threat hunting",
        "Custom orchestration workflows",
        "API integrations",
        "Dedicated SOC team",
        "Executive reporting",
        "SLA guarantees",
      ],
    },
  ],
  faqs: [
    {
      question: "What log sources can be integrated with SIEM?",
      answer:
        "Our SIEM solution can ingest logs from virtually any source including firewalls, endpoints, servers, cloud services, applications, and network devices through standard protocols and APIs.",
    },
    {
      question: "How does SOAR improve incident response times?",
      answer:
        "SOAR automates repetitive tasks, orchestrates security tools, and provides guided playbooks that can reduce incident response times from hours to minutes while ensuring consistent processes.",
    },
    {
      question: "Can you customize correlation rules for our environment?",
      answer:
        "Yes, we develop custom correlation rules and use cases specific to your environment, threat landscape, and compliance requirements to minimize false positives and improve detection accuracy.",
    },
    {
      question: "What compliance frameworks does the solution support?",
      answer:
        "Our SIEM/SOAR platform supports compliance reporting for PCI DSS, HIPAA, SOX, ISO 27001, NIST, and other regulatory frameworks with pre-built reports and audit trails.",
    },
  ],
}

export default function SIEMSOARPage() {
  return <ServiceDetailTemplate service={service} />
}
