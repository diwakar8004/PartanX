import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { CheckCircle, Shield, Search, FileText, Users, Clock } from "lucide-react"

export const metadata = {
  title: "Free Security Assessment - PartanX",
  description:
    "Get a comprehensive security assessment of your organization's current posture and receive actionable recommendations from our experts.",
}

const assessmentIncludes = [
  "Network security architecture review",
  "Endpoint protection evaluation",
  "Identity and access management audit",
  "Cloud security posture assessment",
  "Compliance gap analysis",
  "Vulnerability assessment summary",
  "Risk prioritization matrix",
  "Actionable remediation roadmap",
]

const process = [
  {
    step: "1",
    title: "Initial Consultation",
    description: "30-minute call to understand your environment, challenges, and objectives.",
    icon: Users,
  },
  {
    step: "2",
    title: "Security Scan",
    description: "Non-intrusive assessment of your external and internal security posture.",
    icon: Search,
  },
  {
    step: "3",
    title: "Analysis & Report",
    description: "Comprehensive report with findings, risk ratings, and prioritized recommendations.",
    icon: FileText,
  },
  {
    step: "4",
    title: "Results Review",
    description: "60-minute session to review findings and discuss implementation strategies.",
    icon: Shield,
  },
]

export default function SecurityAssessmentPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-muted py-20 flex flex-col items-center justify-center">
        <div className="container px-4 max-w-[1536px] w-full">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Free Security Assessment
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground text-pretty">
              Get a comprehensive evaluation of your organization's security posture. Our experts will identify
              vulnerabilities, assess risks, and provide actionable recommendations to strengthen your defenses.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <Link href="/security-assessment">Get a Security Assessment</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto  border-green-600 dark:border-white text-primary rounded-lg shadow-md hover:bg-primary hover:text-white dark:hover:text-white dark:hover:bg-green-800 hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 px-6 py-3 bg-transparent">
                <Link href="/contact">Talk to an Expert</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-background flex flex-col items-center">
        <div className="container px-4 max-w-[1536px] w-full">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">What's Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {assessmentIncludes.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-muted/30 flex flex-col items-center">
        <div className="container px-4 max-w-[1536px] w-full">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Assessment Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step) => {
                const IconComponent = step.icon
                return (
                  <Card key={step.step} className="text-center">
                    <CardHeader>
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-sm font-medium text-primary mb-2">Step {step.step}</div>
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="leading-relaxed">{step.description}</CardDescription>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background flex flex-col items-center">
        <div className="container px-4 max-w-[1536px] w-full">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-8">Timeline & Commitment</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 mb-4">
                    <Clock className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle>2-3 Weeks</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Complete assessment timeline from initial call to final report delivery
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 mb-4">
                    <Shield className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle>No Obligation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Completely free assessment with no commitment to purchase services</CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 mb-4">
                    <FileText className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle>Actionable Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Detailed report with specific recommendations you can implement immediately
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground flex flex-col items-center justify-center">
        <div className="container px-4 text-center max-w-[1536px] w-full">
          <h2 className="text-3xl font-bold mb-4">Ready to Assess Your Security?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Take the first step toward stronger security. Our assessment will give you clear visibility into your
            current posture and a roadmap for improvement.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Get Your Free Assessment</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
