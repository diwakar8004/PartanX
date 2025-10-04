import { WhyChooseUs } from "@/components/why-choose-us"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Users, Award, Target, Headphones, Clock, Shield, TrendingUp } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Why Choose PartanX - MSP & Systems Integrator",
  description:
    "Discover why organizations choose PartanX for managed security services. OEM-backed solutions, 24/7 SOC, and measurable outcomes.",
}

const differentiators = [
  {
    title: "Unified MSP + Integrator Model",
    description:
      "Unlike traditional MSPs or integrators, we combine both capabilities under a single SLA, providing seamless service delivery and accountability.",
    icon: Users,
    benefits: [
      "Single point of contact for all security needs",
      "Unified SLA across all services and technologies",
      "Seamless integration between security tools",
      "Consistent service delivery and support",
    ],
  },
      {
        title: "Certified Expertise",
        description:
          "Our team holds leading industry certifications, ensuring expert implementation and ongoing optimization.",
        icon: Award,
        benefits: [
          "Certified experts across major platforms",
          "Direct access to engineering resources",
          "Priority support and early access to new features",
          "Best-practice implementations based on vendor guidelines",
        ],
      },
  {
    title: "Outcomes-Driven Approach",
    description:
      "We focus on measurable security outcomes, not just tool deployment. Every service is designed to reduce risk and improve your security posture.",
    icon: Target,
    benefits: [
      "Clear KPIs and success metrics",
      "Regular security posture assessments",
      "Risk reduction tracking and reporting",
      "Continuous improvement processes",
    ],
  },
  {
    title: "24/7 Expert Support",
    description:
      "Our Security Operations Center provides round-the-clock monitoring and response with documented playbooks and clear escalation procedures.",
    icon: Headphones,
    benefits: [
      "24/7/365 SOC monitoring and response",
      "Expert security analysts and threat hunters",
      "Documented incident response playbooks",
      "Clear escalation and communication procedures",
    ],
  },
]

const competitiveAdvantages = [
  {
    title: "Faster Implementation",
    description: "Pre-built integrations and proven methodologies reduce deployment time by 60%",
    icon: Clock,
  },
  {
    title: "Better Security Outcomes",
    description: "Integrated approach delivers 40% better threat detection and response times",
    icon: Shield,
  },
  {
    title: "Lower Total Cost",
    description: "Unified service model reduces overhead and eliminates vendor management complexity",
    icon: TrendingUp,
  },
]

export default function WhyChooseUsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-muted py-20 flex flex-col items-center">
        <div className="container px-4 max-w-[1536px] w-full">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Why Choose PartanX
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground text-pretty">
              We're not just another MSP or systems integrator. We're your strategic security partner, combining the
              best of both worlds to deliver superior outcomes for your organization.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <Link href="/security-assessment">Get Security Assessment</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="w-full sm:w-auto border-2 border-green-600 dark:border-white text-primary rounded-lg shadow-md hover:bg-primary hover:text-white dark:hover:text-white dark:hover:bg-green-800 hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 px-6 py-3 bg-transparent"
              >
                <Link href="/contact">
                  Talk to an Expert
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 12h14m-7-7l7 7-7 7"
                    />
                  </svg>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-20 bg-background flex flex-col items-center">
        <div className="container px-4 max-w-[1536px] w-full">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-16">What Sets Us Apart</h2>
            <div className="space-y-16">
              {differentiators.map((diff, index) => {
                const IconComponent = diff.icon
                return (
                  <div
                    key={diff.title}
                    className={`flex flex-col lg:flex-row items-center gap-12 ${
                      index % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold">{diff.title}</h3>
                      </div>
                      <p className="text-lg text-muted-foreground mb-6">{diff.description}</p>
                      <div className="space-y-3">
                        {diff.benefits.map((benefit) => (
                          <div key={benefit} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex-1">
                      <Card className="bg-muted/30 border-none">
                        <CardContent className="p-8">
                          <div className="text-center">
                            <div className="text-4xl font-bold text-primary mb-2">
                              {index === 0 && "1"}
                              {index === 1 && "6+"}
                              {index === 2 && "40%"}
                              {index === 3 && "24/7"}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {index === 0 && "Single SLA for all services"}
                              {index === 1 && "Industry certifications"}
                              {index === 2 && "Risk reduction average"}
                              {index === 3 && "SOC monitoring"}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-20 bg-muted/30 flex flex-col items-center">
        <div className="container px-4 max-w-[1536px] w-full">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Competitive Advantages</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {competitiveAdvantages.map((advantage) => {
                const IconComponent = advantage.icon
                return (
                  <Card key={advantage.title} className="text-center">
                    <CardHeader>
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 mb-4">
                        <IconComponent className="h-6 w-6 text-secondary" />
                      </div>
                      <CardTitle className="text-xl">{advantage.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="leading-relaxed">{advantage.description}</CardDescription>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <WhyChooseUs />

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground flex flex-col items-center">
        <div className="container px-4 text-center max-w-[1536px] w-full">
          <h2 className="text-3xl font-bold mb-4">Experience the PartanX Difference</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join over 100 organizations that trust PartanX to protect their most critical assets and enable
            business growth through security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/security-assessment">Get Free Assessment</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
