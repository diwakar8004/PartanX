import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Monitor, Ticket, FileText, Calendar, Settings, AlertTriangle } from "lucide-react"

const operations = [
  {
    title: "24×7 Monitoring",
    description:
      "Continuous surveillance of your entire technology stack with proactive alerting and automated response.",
    icon: Monitor,
  },
  {
    title: "Ticketing Integration",
    description: "Seamless integration with your existing workflows and ITSM platforms for efficient issue resolution.",
    icon: Ticket,
  },
  {
    title: "Monthly Reporting",
    description: "Comprehensive security posture reports with actionable insights and trend analysis.",
    icon: FileText,
  },
  {
    title: "Quarterly Security Reviews",
    description: "Strategic assessments of your security program with recommendations for continuous improvement.",
    icon: Calendar,
  },
  {
    title: "Change Management",
    description: "Controlled deployment processes with rollback capabilities and impact assessment.",
    icon: Settings,
  },
  {
    title: "Incident Response Playbooks",
    description: "Documented procedures for rapid containment, investigation, and recovery from security incidents.",
    icon: AlertTriangle,
  },
]

export function MSPOperations() {
  return (
    <section className="py-20 bg-muted/30 flex flex-col items-center">
      <div className="container px-4 max-w-[1536px] w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            How We Run Your Stack
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Our managed service approach ensures your security infrastructure operates at peak performance with minimal
            disruption to your business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {operations.map((operation) => {
            const IconComponent = operation.icon
            return (
              <Card key={operation.title} className="group hover:shadow-lg motion-safe:hover:-translate-y-0.5 motion-safe:transform-gpu transition-none">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-none">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{operation.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{operation.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
