import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Award, Target, Headphones } from "lucide-react"

const pillars = [
  {
    title: "MSP + Integrator",
    description: "Single SLA, unified monitoring, and seamless integration across your entire technology stack.",
    icon: Building2,
    features: ["Unified SLA", "24/7 Monitoring", "Integrated Stack"],
  },
  {
    title: "OEM-backed",
    description: "Industry-backed certifications ensure best-in-class implementations and support.",
    icon: Award,
    features: ["Certified", "Proven Solutions", "Expert Implementation"],
  },
  {
    title: "Outcomes-driven",
    description: "Measurable risk reduction with clear KPIs and continuous improvement processes.",
    icon: Target,
    features: ["Risk Metrics", "Clear KPIs", "Continuous Improvement"],
  },
  {
    title: "24×7 Support",
    description: "Global response capabilities with documented playbooks and escalation procedures.",
    icon: Headphones,
    features: ["Global Coverage", "Clear Playbooks", "Rapid Response"],
  },
]

const kpis = [
  { metric: "Mean Time to Detect", value: "<5min", description: "Average threat detection time" },
  { metric: "Mean Time to Respond", value: "<15min", description: "Average incident response time" },
  { metric: "Coverage %", value: "99.9%", description: "Infrastructure monitoring coverage" },
  { metric: "CSAT", value: "4.8/5", description: "Customer satisfaction rating" },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-muted/30 flex flex-col items-center">
      <div className="container px-4 max-w-[1536px] w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Why Choose PartanX
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We combine the expertise of a managed service provider with the integration capabilities of a systems
            integrator to deliver superior outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar) => {
            const IconComponent = pillar.icon
            return (
              <Card key={pillar.title} className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {pillar.features.map((feature) => (
                      <Badge key={feature} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* KPI Strip */}
        <div className="bg-card rounded-lg p-8 shadow-sm border">
          <h3 className="text-xl font-semibold text-center mb-8 text-foreground">Performance Metrics That Matter</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {kpis.map((kpi) => (
              <div key={kpi.metric} className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{kpi.value}</div>
                <div className="text-sm font-medium text-foreground mb-1">{kpi.metric}</div>
                <div className="text-xs text-muted-foreground">{kpi.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
