"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface Service {
  id: string
  title: string
  description: string
  icon: string
  category: string
}

const services: Service[] = [
  // Cybersecurity
  {
    id: "ztna",
    title: "Advanced ZTNA",
    description:
      "Zero Trust Network Access with granular policy controls and continuous verification for secure remote access.",
    icon: "🛡️",
    category: "Cybersecurity",
  },
  {
    id: "edr",
    title: "EDR Solutions",
    description:
      "Endpoint Detection and Response with real-time threat hunting and automated incident response capabilities.",
    icon: "🔍",
    category: "Cybersecurity",
  },
  {
    id: "xdr",
    title: "Extended XDR",
    description:
      "Cross-platform detection and response integrating endpoints, networks, and cloud workloads for unified security.",
    icon: "⚡",
    category: "Cybersecurity",
  },
  {
    id: "soc",
    title: "Managed SOC",
    description:
      "24/7 Security Operations Center with expert analysts providing continuous monitoring and threat response.",
    icon: "👁️",
    category: "Cybersecurity",
  },

  // Cloud & Infrastructure
  {
    id: "cloud-security",
    title: "Cloud Security",
    description:
      "Comprehensive cloud security posture management with automated compliance and threat detection across multi-cloud environments.",
    icon: "☁️",
    category: "Cloud & Infrastructure",
  },
  {
    id: "infrastructure",
    title: "Infrastructure Management",
    description:
      "Complete infrastructure monitoring, optimization, and management with proactive maintenance and scaling capabilities.",
    icon: "🏗️",
    category: "Cloud & Infrastructure",
  },
  {
    id: "backup",
    title: "Backup & Recovery",
    description:
      "Enterprise-grade backup solutions with rapid recovery capabilities and comprehensive disaster recovery planning.",
    icon: "💾",
    category: "Cloud & Infrastructure",
  },
  {
    id: "network",
    title: "Network Security",
    description:
      "Advanced network protection with next-generation firewalls, intrusion detection, and network segmentation.",
    icon: "🌐",
    category: "Cloud & Infrastructure",
  },

  // Partner Solutions
  {
    id: "integration",
    title: "Systems Integration",
    description:
      "Seamless integration of security tools and platforms with custom APIs and automated workflows for unified operations.",
    icon: "🔗",
    category: "Partner Solutions",
  },
  {
    id: "consulting",
    title: "Security Consulting",
    description:
      "Expert cybersecurity consulting services including risk assessments, compliance audits, and strategic security planning.",
    icon: "💼",
    category: "Partner Solutions",
  },
  {
    id: "training",
    title: "Security Training",
    description:
      "Comprehensive cybersecurity awareness training and certification programs for your team and end users.",
    icon: "🎓",
    category: "Partner Solutions",
  },
  {
    id: "compliance",
    title: "Compliance Management",
    description:
      "End-to-end compliance management for ISO 27001, SOC 2, HIPAA, PCI DSS, and other regulatory frameworks.",
    icon: "📋",
    category: "Partner Solutions",
  },

  // Managed Operations
  {
    id: "incident-response",
    title: "Incident Response",
    description:
      "Rapid incident response services with forensic analysis, containment strategies, and recovery planning.",
    icon: "🚨",
    category: "Managed Operations",
  },
  {
    id: "threat-hunting",
    title: "Threat Hunting",
    description:
      "Proactive threat hunting services using advanced analytics and threat intelligence to identify hidden threats.",
    icon: "🎯",
    category: "Managed Operations",
  },
  {
    id: "vulnerability",
    title: "Vulnerability Management",
    description:
      "Continuous vulnerability assessment and management with prioritized remediation and patch management.",
    icon: "🔧",
    category: "Managed Operations",
  },
  {
    id: "monitoring",
    title: "24/7 Monitoring",
    description:
      "Round-the-clock security monitoring with real-time alerting and immediate response to security incidents.",
    icon: "📊",
    category: "Managed Operations",
  },
]

const categories = ["Cybersecurity", "Cloud & Infrastructure", "Partner Solutions", "Managed Operations"]

const serviceUrlMap: Record<string, string> = {
  ztna: "/services/advanced-ztna",
  edr: "/services/endpoint-protection",
  xdr: "/services/endpoint-protection", // Using endpoint protection as closest match
  soc: "/services/managed-soc",
  "cloud-security": "/services/cloud-security-aws",
  infrastructure: "/services/backup-dr", // Using backup-dr as infrastructure service
  backup: "/services/backup-dr",
  network: "/services/ngfw",
  integration: "/services/siem-soar", // Using SIEM/SOAR as integration service
  consulting: "/services/penetration-testing", // Using pen testing as consulting service
  training: "/services/security-awareness-training",
  compliance: "/compliance",
  "incident-response": "/services/incident-response",
  "threat-hunting": "/services/threat-intelligence",
  vulnerability: "/services/vulnerability-management",
  monitoring: "/services/managed-soc", // Using managed SOC for monitoring
}

export function Services() {
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set())

  const handleCardClick = (serviceId: string) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(serviceId)) {
        newSet.delete(serviceId)
      } else {
        newSet.add(serviceId)
      }
      return newSet
    })
  }

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Comprehensive cybersecurity and managed services designed to protect, monitor, and optimize your digital
            infrastructure with enterprise-grade solutions.
          </p>
        </div>

        {categories.map((category, categoryIndex) => (
          <div key={category} className="mb-16 last:mb-0">
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center">{category}</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services
                .filter((service) => service.category === category)
                .map((service, index) => (
                  <div
                    key={service.id}
                    className={`flip-card h-64 animate-fade-up border-2 border-border rounded-xl ${flippedCards.has(service.id) ? "flipped" : ""}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => handleCardClick(service.id)}
                  >
                    <div className="flip-card-inner cursor-pointer">
                      <div className="flip-card-front bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center p-6 rounded-xl">
                        <div className="text-4xl mb-4">{service.icon}</div>
                        <h4 className="text-lg font-semibold text-card-foreground text-center text-balance">
                          {service.title}
                        </h4>
                      </div>

                      <div className="flip-card-back bg-primary shadow-lg flex flex-col justify-between p-6 rounded-xl">
                        <div>
                          <h4 className="text-lg font-semibold text-primary-foreground mb-3 text-balance">
                            {service.title}
                          </h4>
                          <p className="text-sm text-primary-foreground/90 text-pretty leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                        <Link
                          href={serviceUrlMap[service.id] || "/services"}
                          className="mt-4 inline-flex items-center text-sm font-medium text-primary-foreground bg-transparent rounded-lg px-4 py-2 border border-transparent hover:text-green-600 transition-colors duration-200 group"
                          onClick={(e) => e.stopPropagation()} // Prevent card flip when clicking link
                        >
                          Learn More
                          <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
