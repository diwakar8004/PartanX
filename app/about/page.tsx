import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Footer } from "@/components/footer"
import { Users, Award, Target, ArrowRight, Calendar } from "lucide-react"

export const metadata = {
  title: "About PartanX - MSP & Systems Integrator",
  description:
  "Learn about PartanX's mission to deliver end-to-end cybersecurity and cloud solutions as your trusted MSP and systems integrator.",
}

const leadership = [
  {
    name: "Diwakar Gupta",
    role: "Frontend Developer of the website",
    bio: "A passionate Frontend Developer who designed and built the website’s user interface, focusing on clean design, responsiveness, and a seamless user experience across all devices.",
    image: "/professional-headshot-of-sarah-chen--ceo.jpg",
  },
  {
    name: "Aniket Verma",
    role: "FullStack Developer",
    bio: "Security architect and former penetration tester. Expert in zero trust implementations and cloud security.",
    image: "/professional-headshot-of-michael-rodriguez--cto.jpg",
  },
  {
    name: "Dr. Emily",
    role: "Chief Security Officer",
    bio: "PhD in Cybersecurity, former NSA analyst. Specializes in threat intelligence and incident response.",
    image: "/professional-headshot-of-dr--emily-watson--cso.jpg",
  },
  {
    name: "James Park",
    role: "VP of Operations",
    bio: "MSP veteran with 12+ years managing security operations. Expert in service delivery and client success.",
    image: "/professional-headshot-of-james-park--vp-operations.jpg",
  },
]

const milestones = [
  {
    year: "2018",
    title: "Company Founded",
  description: "PartanX established with a mission to simplify enterprise security through integration.",
  },
  {
    year: "2019",
    title: "First Major Integrations",
    description: "Established major integrations with Cloudflare, AWS, and Rapid7.",
  },
  {
    year: "2020",
    title: "SOC Launch",
    description: "Launched 24/7 Security Operations Center with expert analysts and threat hunters.",
  },
  {
    year: "2022",
    title: "100+ Clients",
    description: "Reached milestone of serving over 100 organizations across multiple industries.",
  },
  {
    year: "2023",
    title: "Advanced Threat Intelligence",
    description: "Launched proprietary threat intelligence platform with machine learning capabilities.",
  },
  {
    year: "2024",
    title: "Global Expansion",
    description: "Expanded operations internationally with 24/7 follow-the-sun support model.",
  },
]

const certifications = [
  "AWS Advanced Consulting Partner",
  "Cloudflare Partner Network",
  "Rapid7 Certified Partner",
  "Palo Alto Networks Authorized Partner",
  "Check Point Certified Partner",
  "Emsisoft Technology Partner",
]

const values = [
  {
    title: "Security First",
    description: "Every decision is made with security as the primary consideration.",
    icon: Award,
  },
  {
    title: "Client Success",
    description: "Our success is measured by the security outcomes we deliver for clients.",
    icon: Target,
  },
  {
    title: "Continuous Learning",
    description: "We stay ahead of threats through constant education and skill development.",
    icon: Users,
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-muted py-20 flex flex-col items-center">
        <div className="container px-4 max-w-[1536px] w-full">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              About PartanX
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground text-pretty">
              We're on a mission to make enterprise security simple, effective, and accessible. As your MSP and systems
              integrator, we deliver unified security solutions that protect what matters most.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-background flex flex-col items-center">
        <div className="container px-4 max-w-[1536px] w-full">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p>
                PartanX was founded in 2018 by a team of security professionals who recognized a critical gap
                in the market: organizations needed integrated security solutions, not just point products. Too many
                companies were struggling with complex, disconnected security tools that created more problems than they
                solved.
              </p>
              <p>
                Our founders, coming from backgrounds in enterprise security, government cybersecurity, and managed
                services, understood that the future of security lay in integration, automation, and expert human
                oversight. We set out to build a company that could serve as both a trusted MSP and a skilled systems
                integrator.
              </p>
              <p>
                Today, we protect over 100 organizations worldwide, from growing startups to established enterprises.
                Our approach combines cutting-edge technology with human expertise, delivering security outcomes that
                enable business growth rather than hindering it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30 flex flex-col items-center">
        <div className="container px-4 max-w-[1536px] w-full">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value) => {
                const IconComponent = value.icon
                return (
                  <Card key={value.title} className="text-center">
                    <CardHeader>
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="leading-relaxed">{value.description}</CardDescription>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-background flex flex-col items-center">
        <div className="container px-4 max-w-[1536px] w-full">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadership.map((leader) => (
                <Card key={leader.name} className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4">
                      <Image
                        src={leader.image || "/placeholder.svg"}
                        alt={leader.name}
                        width={200}
                        height={200}
                        className="rounded-lg mx-auto"
                      />
                    </div>
                    <CardTitle className="text-lg">{leader.name}</CardTitle>
                    <CardDescription className="text-primary font-medium">{leader.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{leader.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted/30 flex flex-col items-center">
        <div className="container px-4 max-w-[1536px] w-full flex flex-col items-center">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="flex items-start space-x-4">
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                      <Calendar className="h-4 w-4" />
                    </div>
                    {index < milestones.length - 1 && <div className="w-px h-16 bg-border mt-4" />}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="secondary">{milestone.year}</Badge>
                      <h3 className="text-lg font-semibold">{milestone.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-background flex flex-col items-center">
        <div className="container px-4 max-w-[1536px] w-full">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-8">Certifications</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Our commitment to excellence is demonstrated through industry certifications and technical integrations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert) => (
                <Badge key={cert} variant="secondary" className="p-3 text-sm justify-center">
                  {cert}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Careers Teaser */}
      <section className="py-20 bg-primary text-primary-foreground flex flex-col items-center">
        <div className="container px-4 text-center max-w-[1536px] w-full">
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            We're always looking for talented security professionals who share our passion for protecting organizations
            and enabling business growth through security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/careers">
                View Open Positions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
