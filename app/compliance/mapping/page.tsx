import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "Services to Controls Mapping - PartanX",
  description: "Comprehensive mapping of security services to compliance framework controls and requirements.",
}

const serviceControlMapping = [
  {
    service: "Advanced ZTNA",
    frameworks: {
      "ISO 27001": ["A.9.1.2 Access to networks", "A.13.1.1 Network controls", "A.9.4.2 Secure log-on"],
      "SOC 2": ["CC6.1 Logical access", "CC6.2 Authentication", "CC6.3 Network security"],
      "NIST CSF": ["PR.AC-1 Identity management", "PR.AC-4 Access permissions", "PR.PT-4 Network integrity"],
    },
  },
  {
    service: "EDR",
    frameworks: {
      "ISO 27001": [
        "A.12.2.1 Malware controls",
        "A.16.1.1 Incident management",
        "A.12.6.1 Technical vulnerability management",
      ],
      "SOC 2": ["CC7.1 System monitoring", "CC7.2 Threat detection", "CC7.3 Incident response"],
      "NIST CSF": ["DE.CM-1 Network monitoring", "DE.AE-1 Baseline establishment", "RS.AN-1 Incident analysis"],
    },
  },
  {
    service: "XDR",
    frameworks: {
      "ISO 27001": [
        "A.16.1.2 Incident reporting",
        "A.12.6.1 Technical vulnerability management",
        "A.16.1.5 Response to incidents",
      ],
      "SOC 2": ["CC7.1 System monitoring", "CC7.4 Response activities", "CC8.1 Change management"],
      "NIST CSF": [
        "DE.AE-2 Event analysis",
        "DE.CM-7 Monitoring for unauthorized personnel",
        "RS.RP-1 Response planning",
      ],
    },
  },
  {
    service: "SIEM / SOAR",
    frameworks: {
      "ISO 27001": [
        "A.12.4.1 Event logging",
        "A.12.4.2 Log information protection",
        "A.16.1.4 Assessment of incidents",
      ],
      "SOC 2": ["CC7.1 System monitoring", "CC7.2 Threat detection", "CC8.1 Change management"],
      "NIST CSF": ["DE.AE-3 Event correlation", "DE.CM-1 Network monitoring", "RS.AN-3 Forensics"],
    },
  },
  {
    service: "Vulnerability Management",
    frameworks: {
      "ISO 27001": [
        "A.12.6.1 Technical vulnerability management",
        "A.14.2.3 Technical review",
        "A.12.1.2 Change management",
      ],
      "SOC 2": ["CC7.1 System monitoring", "CC8.1 Change management", "CC7.2 Threat detection"],
      "NIST CSF": ["ID.RA-1 Asset vulnerabilities", "DE.CM-4 Malicious code detection", "RS.MI-3 Containment"],
      "PCI DSS": ["11.2 Vulnerability scans", "6.1 Security vulnerabilities", "2.2 System hardening"],
    },
  },
  {
    service: "Identity & Access Management",
    frameworks: {
      "ISO 27001": ["A.9.1.1 Access control policy", "A.9.2.1 User registration", "A.9.4.2 Secure log-on"],
      "SOC 2": ["CC6.1 Logical access", "CC6.2 Authentication", "CC6.3 Network security"],
      "NIST CSF": ["PR.AC-1 Identity management", "PR.AC-3 Remote access", "PR.AC-7 Users and devices"],
      HIPAA: ["164.312(a)(1) Access control", "164.312(d) Person authentication", "164.308(a)(3) Workforce access"],
    },
  },
]

export default function ComplianceMappingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-muted py-20">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl text-center prose">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Services to Controls Mapping
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground text-pretty">
              See how our security services directly address compliance requirements across major frameworks. This
              mapping helps streamline audit preparation and demonstrates comprehensive control coverage.
            </p>
          </div>
        </div>
      </section>

      {/* Mapping Table */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <div className="space-y-8">
            {serviceControlMapping.map((item) => (
              <Card key={item.service} className="overflow-hidden">
                <CardHeader className="bg-muted/30">
                  <CardTitle className="text-xl">{item.service}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 sm:p-8">
                  <div className="space-y-6 prose">
                    {Object.entries(item.frameworks).map(([framework, controls]) => (
                      <div key={framework}>
                        <h4 className="text-sm font-semibold text-primary mb-3">{framework}</h4>
                        <div className="flex flex-wrap gap-2">
                          {controls.map((control) => (
                            <Badge
                              key={control}
                              variant="secondary"
                              className="text-xs justify-start px-2 py-1 whitespace-normal break-words"
                            >
                              {control}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-muted/50 rounded-lg p-6 sm:p-8 max-w-4xl mx-auto prose">
              <h3 className="text-xl font-semibold mb-4">Need a Custom Mapping?</h3>
              <p className="text-muted-foreground mb-6">
                We can create detailed control mappings specific to your industry requirements and regulatory
                obligations. Our compliance experts will work with you to ensure comprehensive coverage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="touch-target">
                  <Link href="/security-assessment">Get Compliance Assessment</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="touch-target">
                  <Link href="/contact">Discuss Requirements</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
