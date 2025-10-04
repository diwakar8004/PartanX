import { ServicesOverview } from "@/components/services-overview"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "Security Services - PartanX",
  description:
    "Comprehensive cybersecurity and cloud solutions including ZTNA, EDR, XDR, SIEM, and managed SOC services.",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-muted py-20 flex flex-col items-center justify-center">
        <div className="container px-4 max-w-[1536px] w-full">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Comprehensive Security Services
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground text-pretty">
              From endpoint protection to cloud security, we deliver integrated solutions that reduce complexity while
              strengthening your security posture. Every service is backed by our 24/7 SOC and expert support team.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <Link href="/security-assessment">Get a Security Assessment</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="w-full sm:w-auto border-2 border-green-600 dark:border-white text-primary rounded-lg shadow-md hover:bg-primary hover:text-white dark:hover:text-white dark:hover:bg-green-800 hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 px-6 py-3 bg-transparent"
              >
                <Link href="/contact">Talk to an Expert</Link>
              </Button>

            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <ServicesOverview />

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground flex flex-col items-center justify-center">
        <div className="container px-4 text-center max-w-[1536px] w-full">
          <h2 className="text-3xl font-bold mb-4">Ready to Strengthen Your Security Posture?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Our security experts are ready to assess your current environment and recommend the right combination of
            services for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/security-assessment">Get Free Assessment</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary dark:hover:bg-white dark:hover:text-green-800 dark:border-white"
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
