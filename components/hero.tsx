import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background to-muted py-20 lg:py-32 flex flex-col items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/subtle-network-mesh-pattern.jpg')] bg-repeat opacity-20" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 opacity-10" />
      <div className="absolute bottom-20 right-10 opacity-10" />

      <div className="container relative px-4 max-w-[1685px] w-full">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl lg:leading-[72px] lg:tracking-[-0.025em] text-balance">
            Managed Security. Web & Digital Services. <span className="text-primary">Integrated Outcomes.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground text-pretty">
            PartanX delivers end-to-end cybersecurity, cloud, web services and social media marketing (SMM) as
            your MSP + Digital partner. Single SLA, unified monitoring, measurable risk reduction and measurable
            marketing outcomes.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="w-full sm:w-auto">
              <Link href="/security-assessment">
                Get a Security Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              asChild
              className="w-full sm:w-auto bg-transparent dark:bg-green text-primary border-2 border-primary dark:border-white rounded-lg shadow hover:bg-primary hover:text-white dark:hover:text--white hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 px-6 py-3"
            >
              <Link href="/services">
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">SOC Monitoring</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime SLA</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">&lt;15min</div>
              <div className="text-sm text-muted-foreground">Mean Response Time</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Coverage</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
