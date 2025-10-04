import { ServiceDetailTemplate } from "@/components/service-detail-template"
import { ShieldCheck } from "lucide-react"

export const metadata = {
  title: "WAF / DDoS Protection | PartanX",
  description:
    "Web Application Firewall and distributed denial-of-service attack mitigation with real-time threat protection.",
}

const service = {
  name: "WAF / DDoS Protection",
  tagline: "Web Application Firewall and distributed denial-of-service attack mitigation.",
  description:
    "Comprehensive web application security and DDoS protection that safeguards your applications from attacks while ensuring optimal performance and availability.",
  icon: ShieldCheck,
  problems: [
    "Web applications vulnerable to OWASP Top 10 attacks and zero-day exploits",
    "DDoS attacks can overwhelm infrastructure and cause service outages",
    "Traditional network firewalls don't protect against application-layer attacks",
    "Difficulty distinguishing between legitimate traffic and malicious requests",
    "Compliance requirements for web application security controls",
    "Performance impact from security solutions affecting user experience",
  ],
  howItWorks: [
    {
      step: "Step 1",
      title: "Deploy",
      description:
        "Implement cloud-based WAF and DDoS protection in front of your applications with minimal configuration changes and zero downtime deployment.",
    },
    {
      step: "Step 2",
      title: "Protect",
      description:
        "Apply intelligent filtering rules, rate limiting, and behavioral analysis to block malicious traffic while allowing legitimate users seamless access.",
    },
    {
      step: "Step 3",
      title: "Optimize",
      description:
        "Continuously tune protection rules, analyze attack patterns, and optimize performance with real-time monitoring and automated threat response.",
    },
  ],
  deliverables: [
    "WAF deployment and rule configuration",
    "DDoS protection and mitigation setup",
    "Custom security policies and rules",
    "SSL/TLS certificate management",
    "Bot management and rate limiting",
    "Real-time attack monitoring and alerting",
    "Performance optimization and caching",
    "Security incident response and analysis",
    "Monthly security and performance reports",
    "Quarterly security posture reviews",
  ],
  integrations: ["Cloudflare", "AWS WAF", "Azure Application Gateway", "F5 BIG-IP", "Imperva", "Akamai"],
  plans: [
    {
      name: "Essential WAF",
      price: "Contact Us",
      description: "Basic web application protection",
      features: [
        "Up to 3 applications",
        "OWASP Top 10 protection",
        "Basic DDoS mitigation",
        "SSL termination",
        "Email support",
      ],
    },
    {
      name: "Professional WAF/DDoS",
      price: "Contact Us",
      description: "Advanced application security",
      popular: true,
      features: [
        "Up to 25 applications",
        "Advanced threat protection",
        "Volumetric DDoS protection",
        "Bot management",
        "24/7 monitoring",
        "Real-time analytics",
        "Priority support",
      ],
    },
    {
      name: "Enterprise WAF/DDoS",
      price: "Contact Us",
      description: "Complete application security solution",
      features: [
        "Unlimited applications",
        "Custom security rules",
        "Advanced DDoS protection",
        "API security",
        "Dedicated support team",
        "Executive reporting",
        "SLA guarantees",
      ],
    },
  ],
  faqs: [
    {
      question: "How quickly can WAF/DDoS protection be deployed?",
      answer:
        "Cloud-based deployment typically takes 24-48 hours with DNS changes. On-premises solutions may take 1-2 weeks depending on infrastructure complexity.",
    },
    {
      question: "Will WAF protection impact application performance?",
      answer:
        "Our cloud-based WAF actually improves performance through global CDN capabilities and caching, while adding minimal latency (typically <5ms) for security processing.",
    },
    {
      question: "What types of DDoS attacks can be mitigated?",
      answer:
        "We protect against all types of DDoS attacks including volumetric, protocol, and application-layer attacks with multi-terabit mitigation capacity and intelligent filtering.",
    },
    {
      question: "Can you protect APIs and mobile applications?",
      answer:
        "Yes, our solution includes specialized protection for REST APIs, GraphQL, and mobile application backends with API-specific security rules and rate limiting.",
    },
  ],
}

export default function WAFDDoSProtectionPage() {
  return <ServiceDetailTemplate service={service} />
}
