import { ServiceDetailTemplate } from "@/components/service-detail-template"
import { Bug } from "lucide-react"

export const metadata = {
  title: "Penetration Testing | PartanX",
  description:
    "Ethical hacking and security assessments to identify vulnerabilities before attackers do with comprehensive testing methodologies.",
}

const service = {
  name: "Penetration Testing",
  tagline: "Ethical hacking and security assessments to identify vulnerabilities before attackers do.",
  description:
    "Comprehensive penetration testing services that simulate real-world attacks to identify security weaknesses and provide actionable remediation guidance.",
  icon: Bug,
  problems: [
    "Unknown security vulnerabilities in applications and infrastructure",
    "Compliance requirements for regular security testing",
    "Lack of validation for existing security controls and defenses",
    "Need to understand real-world attack scenarios and impact",
    "Difficulty prioritizing security investments and improvements",
    "Limited internal expertise for advanced security testing",
  ],
  howItWorks: [
    {
      step: "Step 1",
      title: "Plan",
      description:
        "Define testing scope, objectives, and methodology while establishing rules of engagement and communication protocols to ensure safe and effective testing.",
    },
    {
      step: "Step 2",
      title: "Test",
      description:
        "Execute comprehensive penetration testing using manual techniques and automated tools to identify vulnerabilities and simulate real-world attack scenarios.",
    },
    {
      step: "Step 3",
      title: "Report",
      description:
        "Deliver detailed findings with risk ratings, proof-of-concept demonstrations, and prioritized remediation recommendations with executive and technical reports.",
    },
  ],
  deliverables: [
    "Penetration testing methodology and scope definition",
    "Network and infrastructure security assessment",
    "Web application security testing",
    "Wireless network security evaluation",
    "Social engineering and phishing simulations",
    "Detailed vulnerability analysis and risk ratings",
    "Proof-of-concept demonstrations",
    "Executive summary and technical reports",
    "Remediation roadmap and recommendations",
    "Post-remediation validation testing",
  ],
  integrations: ["Metasploit", "Burp Suite", "Nmap", "OWASP ZAP", "Cobalt Strike", "Custom Tools"],
  plans: [
    {
      name: "Basic Pentest",
      price: "Contact Us",
      description: "Essential security testing",
      features: [
        "Network security assessment",
        "Basic web application testing",
        "Vulnerability identification",
        "Technical report",
        "Email support",
      ],
    },
    {
      name: "Comprehensive Pentest",
      price: "Contact Us",
      description: "Advanced security assessment",
      popular: true,
      features: [
        "Full infrastructure testing",
        "Advanced web app assessment",
        "Wireless security testing",
        "Social engineering simulation",
        "Executive and technical reports",
        "Remediation consultation",
        "Priority support",
      ],
    },
    {
      name: "Enterprise Pentest",
      price: "Contact Us",
      description: "Complete security validation program",
      features: [
        "Comprehensive testing program",
        "Advanced persistent threat simulation",
        "Custom attack scenarios",
        "Continuous testing program",
        "Dedicated testing team",
        "Executive briefings",
        "SLA guarantees",
      ],
    },
  ],
  faqs: [
    {
      question: "How often should penetration testing be performed?",
      answer:
        "We recommend annual comprehensive testing with quarterly focused assessments for critical applications, or after significant infrastructure changes and before major deployments.",
    },
    {
      question: "Will penetration testing disrupt our operations?",
      answer:
        "We carefully plan testing activities to minimize operational impact and can perform testing during maintenance windows or use non-disruptive techniques as required.",
    },
    {
      question: "What types of penetration testing do you offer?",
      answer:
        "We offer network, web application, wireless, mobile application, cloud infrastructure, and social engineering testing using black-box, white-box, and gray-box methodologies.",
    },
    {
      question: "How do you ensure testing is safe and controlled?",
      answer:
        "We follow strict rules of engagement, use controlled testing environments when possible, and maintain constant communication with your team throughout the testing process.",
    },
  ],
}

export default function PenetrationTestingPage() {
  return <ServiceDetailTemplate service={service} />
}
