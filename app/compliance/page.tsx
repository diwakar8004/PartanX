import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Footer } from "@/components/footer"
import { FileCheck, Shield, CreditCard, Heart, Globe, Settings, CheckCircle } from "lucide-react"

export const metadata = {
  title: "Compliance & Frameworks - PartanX",
  description:
    "Streamline compliance with ISO 27001, SOC 2, PCI DSS, HIPAA, GDPR, and NIST CSF. Map controls to frameworks and prove compliance faster.",
}

const frameworks = [
  {
    name: "ISO 27001",
    description:
      "Information Security Management Systems standard for systematic approach to managing sensitive information",
    icon: Shield,
    href: "/compliance/iso-27001",
    keyControls: ["Access Control", "Cryptography", "Incident Management", "Risk Assessment"],
  },
  {
    name: "SOC 2",
    description:
      "Service Organization Controls for security, availability, processing integrity, confidentiality, and privacy",
    icon: FileCheck,
    href: "/compliance/soc-2",
    keyControls: ["Security", "Availability", "Processing Integrity", "Confidentiality"],
  },
  {
    name: "PCI DSS",
    description: "Payment Card Industry Data Security Standard for organizations handling credit card information",
    icon: CreditCard,
    href: "/compliance/pci-dss",
    keyControls: ["Network Security", "Data Protection", "Access Control", "Monitoring"],
  },
  {
    name: "HIPAA",
    description: "Health Insurance Portability and Accountability Act for protecting healthcare information",
    icon: Heart,
    href: "/compliance/hipaa",
    keyControls: ["Administrative Safeguards", "Physical Safeguards", "Technical Safeguards"],
  },
  {
    name: "GDPR",
    description: "General Data Protection Regulation for data protection and privacy in the European Union",
    icon: Globe,
    href: "/compliance/gdpr",
    keyControls: ["Data Protection", "Privacy by Design", "Breach Notification", "Data Rights"],
  },
  {
    name: "NIST CSF",
    description: "Cybersecurity Framework providing guidelines for managing and reducing cybersecurity risk",
    icon: Settings,
    href: "/compliance/nist-csf",
    keyControls: ["Identify", "Protect", "Detect", "Respond", "Recover"],
  },
]

const benefits = [
  "Streamlined audit preparation and documentation",
  "Automated control mapping and evidence collection",
  "Continuous compliance monitoring and reporting",
  "Expert guidance on framework implementation",
  "Integrated security controls across all frameworks",
  "Risk assessment and gap analysis services",
]

export default function CompliancePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-muted py-20">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Compliance Made Simple
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground text-pretty">
              Map controls to frameworks. Prove compliance faster. Our integrated approach streamlines audit preparation
              and ongoing compliance management across multiple regulatory requirements.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/security-assessment">Get Compliance Assessment</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/compliance/mapping">View Control Mapping</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Compliance Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Frameworks Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Supported Compliance Frameworks
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              We help organizations achieve and maintain compliance across major regulatory frameworks and industry
              standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {frameworks.map((framework) => {
              const IconComponent = framework.icon
              return (
                <Card
                  key={framework.name}
                  className="group hover:shadow-lg motion-safe:hover:-translate-y-0.5 motion-safe:transform-gpu transition-none border-border hover:border-secondary/20"
                >
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-none">
                        <IconComponent className="h-5 w-5 text-secondary" />
                      </div>
                      <CardTitle className="text-lg">{framework.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="leading-relaxed">{framework.description}</CardDescription>
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-foreground">Key Control Areas:</div>
                      <div className="flex flex-wrap gap-2">
                        {framework.keyControls.map((control) => (
                          <Badge key={control} variant="secondary" className="text-xs">
                            {control}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="w-full justify-start p-0 h-auto text-secondary hover:text-secondary"
                    >
                      <Link href={framework.href}>Learn more ��</Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Control Mapping Section */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-8">Services to Controls Mapping</h2>
            <p className="text-lg text-muted-foreground mb-8">
              See how our security services directly map to compliance requirements across all major frameworks.
            </p>
            <div className="bg-muted/50 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Comprehensive Control Coverage</h3>
              <p className="text-muted-foreground mb-6">
                Our integrated security services are designed to address multiple compliance requirements
                simultaneously, reducing complexity and ensuring comprehensive coverage.
              </p>
              <Button size="lg" asChild>
                <Link href="/compliance/mapping">View Detailed Mapping Table</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
