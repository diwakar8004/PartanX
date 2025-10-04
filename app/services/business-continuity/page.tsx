import { ServiceDetailTemplate } from "@/components/service-detail-template"
import { LifeBuoy } from "lucide-react"

export const metadata = {
  title: "Business Continuity Solutions | PartanX",
  description: "End-to-end business continuity planning and implementation for operational resilience.",
}

const service = {
  name: "Business Continuity Solutions",
  tagline: "Comprehensive Business Continuity and Resilience Planning",
  description:
    "Develop and implement comprehensive business continuity plans that ensure operational resilience and rapid recovery from any disruption or disaster.",
  icon: LifeBuoy,
  problems: [
    "Organizations lack comprehensive business continuity plans for various disruption scenarios",
    "Existing plans are outdated and haven't been tested or validated",
    "Lack of coordination between IT disaster recovery and business continuity",
    "Remote work and cloud adoption require new continuity strategies",
    "Regulatory requirements demand documented business continuity capabilities",
    "Supply chain disruptions and dependencies aren't adequately addressed",
  ],
  howItWorks: [
    {
      step: "Step 1",
      title: "Plan",
      description:
        "Conduct business impact analysis, identify critical processes, and develop comprehensive continuity plans with recovery strategies and procedures.",
    },
    {
      step: "Step 2",
      title: "Implement",
      description:
        "Deploy continuity solutions, establish alternate work arrangements, implement communication systems, and train staff on procedures.",
    },
    {
      step: "Step 3",
      title: "Test",
      description:
        "Conduct regular testing and exercises, maintain plan currency, and provide ongoing optimization with continuous improvement processes.",
    },
  ],
  deliverables: [
    "Business impact analysis and risk assessment",
    "Comprehensive business continuity plan development",
    "Crisis management and communication procedures",
    "Alternate site and remote work capabilities",
    "Supply chain continuity and vendor management",
    "Employee safety and notification systems",
    "Regular testing and exercise programs",
    "Plan maintenance and update procedures",
    "Compliance reporting and audit support",
    "Annual continuity assessments and improvements",
  ],
  integrations: [
    "All Business Systems",
    "Communication Platforms",
    "Cloud Services",
    "Backup Solutions",
    "Monitoring Tools",
    "Notification Systems",
  ],
  plans: [
    {
      name: "Essential",
      price: "$5,000/month",
      description: "Basic continuity planning",
      features: [
        "Business impact analysis",
        "Basic continuity plan",
        "Annual testing",
        "Email support",
        "Standard documentation",
      ],
    },
    {
      name: "Professional",
      price: "$15,000/month",
      description: "Comprehensive continuity program",
      popular: true,
      features: [
        "Advanced continuity planning",
        "Crisis management procedures",
        "Quarterly testing",
        "Training programs",
        "24/7 support",
        "Priority response",
        "Regular plan updates",
      ],
    },
    {
      name: "Enterprise",
      price: "Contact Us",
      description: "Full-scale resilience program",
      features: [
        "Enterprise-wide continuity",
        "Advanced crisis management",
        "Continuous monitoring",
        "Dedicated continuity team",
        "Executive support",
        "Custom solutions",
        "SLA guarantees",
      ],
    },
  ],
  faqs: [
    {
      question: "What types of disruptions does business continuity planning address?",
      answer:
        "Our plans address natural disasters, cyber attacks, pandemics, supply chain disruptions, key personnel loss, and any event that could impact business operations.",
    },
    {
      question: "How often should business continuity plans be updated?",
      answer:
        "Plans should be reviewed quarterly and updated annually, or whenever there are significant changes to business processes, technology, or organizational structure.",
    },
    {
      question: "What is the difference between business continuity and disaster recovery?",
      answer:
        "Disaster recovery focuses on IT systems and data recovery, while business continuity encompasses all aspects of maintaining business operations during and after a disruption.",
    },
    {
      question: "How do you test business continuity plans?",
      answer:
        "We conduct tabletop exercises, functional tests, and full-scale simulations to validate plans, identify gaps, and ensure staff are prepared to execute procedures effectively.",
    },
  ],
}

export default function BusinessContinuityPage() {
  return <ServiceDetailTemplate service={service} />
}
