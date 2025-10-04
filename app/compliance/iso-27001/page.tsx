import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Shield } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "ISO 27001 Compliance - PartanX",
  description:
    "Achieve ISO 27001 certification with our comprehensive information security management system implementation and ongoing compliance support.",
}

const controlDomains = [
  { name: "Information Security Policies", controls: 2 },
  { name: "Organization of Information Security", controls: 7 },
  { name: "Human Resource Security", controls: 6 },
  { name: "Asset Management", controls: 10 },
  { name: "Access Control", controls: 14 },
  { name: "Cryptography", controls: 2 },
  { name: "Physical and Environmental Security", controls: 15 },
  { name: "Operations Security", controls: 14 },
  { name: "Communications Security", controls: 7 },
  { name: "System Acquisition, Development and Maintenance", controls: 13 },
  { name: "Supplier Relationships", controls: 5 },
  { name: "Information Security Incident Management", controls: 7 },
  { name: "Information Security Aspects of Business Continuity Management", controls: 4 },
  { name: "Compliance", controls: 8 },
]

const benefits = [
  "Systematic approach to managing sensitive company information",
  "Improved risk management and threat mitigation",
  "Enhanced customer trust and competitive advantage",
  "Regulatory compliance and legal protection",
  "Structured incident response and business continuity",
  "Continuous improvement of security posture",
]

const faqs = [
  {
    question: "What is ISO 27001 and why is it important?",
    answer:
      "ISO 27001 is an international standard for information security management systems (ISMS). It provides a systematic approach to managing sensitive company information and helps organizations protect their data through risk management processes.",
  },
  {
    question: "How long does ISO 27001 certification take?",
    answer:
      "Typical ISO 27001 implementation takes 6-12 months depending on organization size and current security maturity. The certification process includes gap analysis, ISMS implementation, internal audits, and external certification audit.",
  },
  {
    question: "What are the ongoing requirements for ISO 27001?",
    answer:
      "ISO 27001 requires annual surveillance audits and recertification every three years. Organizations must also conduct regular internal audits, management reviews, and continuous improvement activities.",
  },
  {
    question: "How do your services support ISO 27001 compliance?",
    answer:
      "Our security services directly map to ISO 27001 controls, providing technical implementations, monitoring, and documentation needed for certification and ongoing compliance maintenance.",
  },
]

export default function ISO27001Page() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-muted py-20">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="flex justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-secondary/10">
                <Shield className="h-8 w-8 text-secondary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              ISO 27001 Compliance
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground text-pretty">
              Achieve and maintain ISO 27001 certification with our comprehensive information security management system
              implementation and ongoing compliance support.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/security-assessment">Get ISO 27001 Assessment</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Discuss Implementation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Benefits of ISO 27001 Certification</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Control Domains */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">ISO 27001 Control Domains</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {controlDomains.map((domain) => (
                <Card key={domain.name} className="text-center">
                  <CardHeader>
                    <CardTitle className="text-sm">{domain.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-secondary mb-2">{domain.controls}</div>
                    <div className="text-xs text-muted-foreground">Controls</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Our Implementation Process</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-secondary-foreground text-sm font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Gap Analysis & Risk Assessment</h3>
                  <p className="text-muted-foreground">
                    Comprehensive assessment of current security posture against ISO 27001 requirements, identifying
                    gaps and prioritizing remediation efforts.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-secondary-foreground text-sm font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">ISMS Design & Implementation</h3>
                  <p className="text-muted-foreground">
                    Design and implement information security management system including policies, procedures, and
                    technical controls aligned with business objectives.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-secondary-foreground text-sm font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Training & Awareness</h3>
                  <p className="text-muted-foreground">
                    Comprehensive training program for staff on information security policies, procedures, and their
                    roles in maintaining the ISMS.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-secondary-foreground text-sm font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Certification Support</h3>
                  <p className="text-muted-foreground">
                    Support through the certification process including internal audits, management reviews, and
                    preparation for external certification audit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-lg px-6">
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
