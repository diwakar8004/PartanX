import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, ArrowRight, Search, Settings, Monitor } from "lucide-react"
import { Footer } from "@/components/footer"

interface ServiceDetailProps {
  service: {
    name: string
    tagline: string
    description: string
    icon: React.ComponentType<{ className?: string }>
    problems: string[]
    howItWorks: {
      step: string
      title: string
      description: string
    }[]
    deliverables: string[]
    integrations: string[]
    plans: {
      name: string
      price: string
      description: string
      features: string[]
      popular?: boolean
    }[]
    faqs: {
      question: string
      answer: string
    }[]
  }
}

export function ServiceDetailTemplate({ service }: ServiceDetailProps) {
  const IconComponent = service.icon

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-muted py-20 flex flex-col items-center justify-center">
        <div className="container px-4 max-w-[1536px] w-full">
          <div className="mx-auto max-w-4xl text-center prose">
            <div className="flex justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                <IconComponent className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              {service.name}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl leading-8 text-muted-foreground text-pretty">
              {service.tagline}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" asChild className="w-full sm:w-64">
                  <Link href="/security-assessment">
                    Get a Security Assessment
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="w-full sm:w-64 border-2 border-green-600 dark:border-white text-primary rounded-lg shadow-md hover:bg-primary hover:text-white dark:hover:text-white dark:hover:bg-green-800 hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 bg-transparent"
                >
                  <Link href="/contact">Talk to an Expert</Link>
                </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What it Solves */}
      <section className="py-20 bg-background flex flex-col items-center">
        <div className="container px-4 max-w-[1536px] w-full">
          <div className="mx-auto max-w-4xl prose">
            <h2 className="text-3xl font-bold text-center mb-12">What It Solves</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.problems.map((problem, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">{problem}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/30 flex flex-col items-center">
        <div className="container px-4 max-w-[1536px] w-full">
          <div className="mx-auto max-w-6xl prose">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.howItWorks.map((step, index) => {
                const icons = [Search, Settings, Monitor]
                const StepIcon = icons[index]
                return (
                  <Card key={index} className="text-center">
                    <CardHeader>
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                        <StepIcon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-sm font-medium text-primary mb-2">{step.step}</div>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
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

      {/* Deliverables */}
      <section className="py-20 bg-background flex flex-col items-center">
        <div className="container px-4 max-w-[1536px] w-full">
          <div className="mx-auto max-w-4xl prose">
            <h2 className="text-3xl font-bold text-center mb-12">What You Get</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.deliverables.map((deliverable, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">{deliverable}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-muted/30 flex flex-col items-center">
        <div className="container px-4 max-w-[1536px] w-full">
          <div className="mx-auto max-w-4xl text-center prose">
            <h2 className="text-3xl font-bold mb-8">Technology Integrations</h2>
            <p className="text-muted-foreground mb-8">
              Seamlessly integrates with your existing technology stack and common industry platforms.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {service.integrations.map((integration) => (
                <Badge key={integration} variant="secondary" className="px-4 py-2">
                  {integration}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 bg-background flex flex-col items-center">
        <div className="container px-4 max-w-[1536px] w-full">
          <div className="mx-auto max-w-6xl prose">
            <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.plans.map((plan) => (
                <Card key={plan.name} className={`relative ${plan.popular ? "border-primary shadow-lg" : ""}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <div className="text-3xl font-bold text-primary">{plan.price}</div>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" variant={plan.popular ? "default" : "outline"} asChild>
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-muted/30 flex flex-col items-center">
        <div className="container px-4 max-w-[1536px] w-full">
          <div className="mx-auto max-w-4xl prose">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {service.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-lg px-6">
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-20 bg-primary text-primary-foreground flex flex-col items-center justify-center">
        <div className="container px-4 text-center max-w-[1536px] w-full">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Our security experts are ready to assess your environment and implement {service.name} tailored to your
            organization's needs.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/security-assessment">Get a Security Assessment</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
