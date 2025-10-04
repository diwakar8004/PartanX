import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Award, CheckCircle, FileCheck, Globe, Lock, Users, Building } from "lucide-react"

export const metadata: Metadata = {
  title: "Security Certifications | PartanX",
  description:
  "View PartanX's security certifications, compliance achievements, and industry accreditations.",
}

const certifications = [
  {
    name: "ISO 27001:2013",
    category: "Information Security",
    status: "Certified",
    validUntil: "2025-03-15",
    description: "International standard for information security management systems",
    icon: Shield,
    benefits: ["Systematic security approach", "Risk management framework", "Continuous improvement"],
  },
  {
    name: "SOC 2 Type II",
    category: "Service Organization Controls",
    status: "Certified",
    validUntil: "2024-12-31",
    description: "Audited controls for security, availability, and confidentiality",
    icon: FileCheck,
    benefits: ["Operational effectiveness", "Security controls validation", "Trust and transparency"],
  },
  {
    name: "CISSP",
    category: "Professional Certification",
    status: "Team Certified",
    validUntil: "Ongoing",
    description: "Certified Information Systems Security Professional",
    icon: Award,
    benefits: ["Expert knowledge validation", "Industry recognition", "Best practices adherence"],
  },
  {
    name: "CISM",
    category: "Management Certification",
    status: "Team Certified",
    validUntil: "Ongoing",
    description: "Certified Information Security Manager",
    icon: Users,
    benefits: ["Management expertise", "Strategic security planning", "Risk governance"],
  },
  {
    name: "PCI DSS Level 1",
    category: "Payment Security",
    status: "Compliant",
    validUntil: "2024-09-30",
    description: "Payment Card Industry Data Security Standard compliance",
    icon: Lock,
    benefits: ["Payment data protection", "Secure transactions", "Industry compliance"],
  },
  {
    name: "GDPR Compliance",
    category: "Data Protection",
    status: "Compliant",
    validUntil: "Ongoing",
    description: "General Data Protection Regulation compliance",
    icon: Globe,
    benefits: ["Privacy protection", "Data rights respect", "EU market access"],
  },
]

const complianceFrameworks = [
  {
    name: "NIST Cybersecurity Framework",
    description: "Comprehensive cybersecurity risk management approach",
    status: "Implemented",
  },
  {
    name: "HIPAA Security Rule",
    description: "Healthcare information protection standards",
    status: "Compliant",
  },
  {
    name: "FedRAMP",
    description: "Federal Risk and Authorization Management Program",
    status: "In Progress",
  },
  {
    name: "CMMC",
    description: "Cybersecurity Maturity Model Certification",
    status: "Level 3 Ready",
  },
]

const auditReports = [
  {
    title: "SOC 2 Type II Report",
    period: "January 1, 2023 - December 31, 2023",
    status: "Clean Opinion",
    available: true,
  },
  {
    title: "ISO 27001 Surveillance Audit",
    period: "March 2024",
    status: "No Non-Conformities",
    available: true,
  },
  {
    title: "PCI DSS Assessment",
    period: "September 2024",
    status: "Compliant",
    available: false,
  },
]

export default function CertificationsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Security Certifications & Compliance
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Our commitment to security excellence is validated through rigorous certifications and continuous
              compliance monitoring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/security-assessment">Request Compliance Report</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Verify Certifications</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Current Certifications</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {certifications.map((cert, index) => {
                const IconComponent = cert.icon
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <Badge variant={cert.status === "Certified" ? "default" : "secondary"}>{cert.status}</Badge>
                      </div>
                      <CardTitle className="text-lg">{cert.name}</CardTitle>
                      <CardDescription>{cert.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="text-sm">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-muted-foreground">Category:</span>
                          <span className="font-medium">{cert.category}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Valid Until:</span>
                          <span className="font-medium">{cert.validUntil}</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-sm">Key Benefits:</h4>
                        <ul className="space-y-1">
                          {cert.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center text-sm text-muted-foreground">
                              <CheckCircle className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Compliance Frameworks</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {complianceFrameworks.map((framework, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{framework.name}</CardTitle>
                      <Badge variant="outline">{framework.status}</Badge>
                    </div>
                    <CardDescription>{framework.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Audit Reports */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Recent Audit Reports</h2>
            <div className="space-y-4">
              {auditReports.map((report, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <h3 className="font-semibold">{report.title}</h3>
                        <p className="text-sm text-muted-foreground">{report.period}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge
                          variant={
                            report.status.includes("Clean") || report.status.includes("No Non")
                              ? "default"
                              : "secondary"
                          }
                        >
                          {report.status}
                        </Badge>
                        {report.available && (
                          <Button variant="outline" size="sm" asChild>
                            <Link href="/contact">Request Copy</Link>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Continuous Monitoring */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Building className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4">Continuous Compliance Monitoring</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We maintain continuous monitoring of our security controls and compliance status to ensure ongoing
              adherence to all applicable standards and regulations.
            </p>
            <div className="grid gap-6 md:grid-cols-3 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Security Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">Quarterly</div>
                <div className="text-sm text-muted-foreground">Internal Audits</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">Annual</div>
                <div className="text-sm text-muted-foreground">External Assessments</div>
              </div>
            </div>
            <Button size="lg" asChild>
              <Link href="/security-assessment">Get Your Compliance Assessment</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
