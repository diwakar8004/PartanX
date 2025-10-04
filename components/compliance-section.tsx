import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileCheck, Shield, CreditCard, Heart, Globe, Settings } from "lucide-react"

const frameworks = [
  {
    name: "ISO 27001",
    description: "Information security management systems standard",
    icon: Shield,
    href: "/compliance/iso-27001",
  },
  {
    name: "SOC 2",
    description: "Service organization controls for security and availability",
    icon: FileCheck,
    href: "/compliance/soc-2",
  },
  {
    name: "PCI DSS",
    description: "Payment card industry data security standard",
    icon: CreditCard,
    href: "/compliance/pci-dss",
  },
  {
    name: "HIPAA",
    description: "Healthcare information privacy and security requirements",
    icon: Heart,
    href: "/compliance/hipaa",
  },
  {
    name: "GDPR",
    description: "General data protection regulation compliance",
    icon: Globe,
    href: "/compliance/gdpr",
  },
  {
    name: "NIST CSF",
    description: "Cybersecurity framework for risk management",
    icon: Settings,
    href: "/compliance/nist-csf",
  },
]

export function ComplianceSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Compliance Made Simple
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Map controls to frameworks. Prove compliance faster. Our integrated approach streamlines audit preparation
            and ongoing compliance management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {frameworks.map((framework) => {
            const IconComponent = framework.icon
            return (
              <Card
                key={framework.name}
                className="group hover:shadow-lg motion-safe:hover:-translate-y-0.5 motion-safe:transform-gpu transition-none border-border hover:border-primary/20"
              >
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                      <IconComponent className="h-5 w-5 text-secondary" />
                    </div>
                    <CardTitle className="text-lg">{framework.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{framework.description}</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="w-full justify-start p-0 h-auto text-secondary hover:text-secondary"
                  >
                    <Link href={framework.href}>View framework details →</Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="bg-muted/50 rounded-lg p-8">
          <h3 className="text-xl font-semibold mb-4 text-center">Services to Controls Mapping</h3>
          <p className="text-center text-muted-foreground mb-6">
            See how our security services map to specific compliance controls and requirements.
          </p>
          <div className="text-center">
            <Button asChild>
              <Link href="/compliance/mapping">View Mapping Table</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
