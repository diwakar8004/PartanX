import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Shield,
  Eye,
  Smartphone,
  Mail,
  Cloud,
  Search,
  Activity,
  ShieldCheck,
  CloudCog,
  Key,
  HardDrive,
  Bug,
  GraduationCap,
  Monitor,
  Zap,
  AlertTriangle,
  Database,
  Users,
  Network,
  Settings,
  Wifi,
  LifeBuoy,
  Camera,
  Target,
} from "lucide-react"

const serviceCategories = [
  {
    title: "Cybersecurity Services",
    services: [
      {
        name: "Advanced ZTNA",
        description: "Zero Trust Network Access with granular policy controls and continuous verification.",
        icon: Shield,
        href: "/services/advanced-ztna",
      },
      {
        name: "Endpoint Protection (EDR, XDR)",
        description: "Comprehensive endpoint detection, response, and extended detection across all environments.",
        icon: Eye,
        href: "/services/endpoint-protection",
      },
      {
        name: "Mobile Device Management (MDM)",
        description: "Complete mobile security with device policies, app management, and compliance controls.",
        icon: Smartphone,
        href: "/services/mdm",
      },
      {
        name: "Email Security & Phishing Defense",
        description: "Advanced threat protection against phishing, malware, and business email compromise.",
        icon: Mail,
        href: "/services/email-security",
      },
      {
        name: "SASE / SWG / CASB",
        description: "Secure Access Service Edge with integrated web gateway and cloud access security.",
        icon: Cloud,
        href: "/services/sase-swg-casb",
      },
      {
        name: "Vulnerability Management",
        description: "Continuous asset discovery, vulnerability assessment, and prioritized remediation.",
        icon: Search,
        href: "/services/vulnerability-management",
      },
      {
        name: "SIEM / SOAR",
        description: "Security Information and Event Management with automated orchestration and response.",
        icon: Activity,
        href: "/services/siem-soar",
      },
      {
        name: "WAF / DDoS Protection",
        description: "Web Application Firewall and distributed denial-of-service attack mitigation.",
        icon: ShieldCheck,
        href: "/services/waf-ddos-protection",
      },
      {
        name: "Identity & Access (MFA, SSO, PAM)",
        description: "Multi-factor authentication, single sign-on, and privileged access management.",
        icon: Key,
        href: "/services/identity-access",
      },
      {
        name: "Penetration Testing",
        description: "Ethical hacking and security assessments to identify vulnerabilities before attackers do.",
        icon: Bug,
        href: "/services/penetration-testing",
      },
      {
        name: "Security Awareness Training",
        description: "Interactive training programs to build a human firewall against social engineering.",
        icon: GraduationCap,
        href: "/services/security-awareness-training",
      },
      {
        name: "Managed SOC (24×7)",
        description: "Round-the-clock Security Operations Center with expert analysts and incident response.",
        icon: Monitor,
        href: "/services/managed-soc",
      },
      {
        name: "Next-Gen Firewalls (NGFW)",
        description: "Advanced firewall protection with deep packet inspection and threat intelligence.",
        icon: Zap,
        href: "/services/ngfw",
      },
      {
        name: "Threat Intelligence Services",
        description: "Real-time threat intelligence feeds and analysis for proactive defense strategies.",
        icon: AlertTriangle,
        href: "/services/threat-intelligence",
      },
      {
        name: "Data Loss Prevention (DLP)",
        description: "Comprehensive data protection with classification, monitoring, and loss prevention.",
        icon: Database,
        href: "/services/dlp",
      },
      {
        name: "Incident Response & Forensics",
        description: "Expert incident response team with digital forensics and breach investigation capabilities.",
        icon: Users,
        href: "/services/incident-response",
      },
      {
        name: "Network Segmentation & Microsegmentation",
        description: "Advanced network isolation and zero-trust microsegmentation strategies.",
        icon: Network,
        href: "/services/network-segmentation",
      },
      {
        name: "Patch & Configuration Management",
        description: "Automated patch deployment and security configuration management across all systems.",
        icon: Settings,
        href: "/services/patch-management",
      },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    services: [
      {
        name: "Cloud Security (AWS Stack)",
        description: "Comprehensive AWS security with GuardDuty, Security Hub, IAM, and Shield integration.",
        icon: CloudCog,
        href: "/services/cloud-security-aws",
      },
      {
        name: "Secure SD-WAN",
        description: "Software-defined wide area networking with integrated security and performance optimization.",
        icon: Wifi,
        href: "/services/secure-sd-wan",
      },
      {
        name: "Backup & Disaster Recovery",
        description: "Business continuity with automated backup and comprehensive disaster recovery solutions.",
        icon: HardDrive,
        href: "/services/backup-dr",
      },
      {
        name: "Business Continuity Solutions",
        description: "End-to-end business continuity planning and implementation for operational resilience.",
        icon: LifeBuoy,
        href: "/services/business-continuity",
      },
    ],
  },
  {
    title: "Web Services",
    services: [
      {
        name: "Web Design",
        description: "Modern, responsive web design focused on performance and accessibility.",
        icon: Monitor,
        href: "/services/web-design",
      },
      {
        name: "Web Hosting",
        description: "Reliable hosting with managed backups, monitoring, and scaling.",
        icon: HardDrive,
        href: "/services/web-hosting",
      },
      {
        name: "Web SEO",
        description: "Search engine optimization to increase visibility and organic traffic.",
        icon: Search,
        href: "/services/web-seo",
      },
      {
        name: "Server Maintenance",
        description: "Ongoing server maintenance, patching, and performance tuning.",
        icon: Settings,
        href: "/services/server-maintenance",
      },
      {
        name: "Domain Services",
        description: "Domain registration and DNS management services.",
        icon: Key,
        href: "/services/domain-services",
      },
    ],
  },
  {
    title: "Social Media Marketing (SMM)",
    services: [
      {
        name: "SM Strategy Development",
        description: "Strategic social media planning aligned with business goals.",
        icon: Activity,
        href: "/services/smm-strategy",
      },
      {
        name: "Content Creation",
        description: "High-quality content production: copy, graphics, and video.",
        icon: Camera,
        href: "/services/smm-content",
      },
      {
        name: "SM Management",
        description: "Day-to-day social account management and community engagement.",
        icon: Users,
        href: "/services/smm-management",
      },
      {
        name: "Paid Advertisement",
        description: "Paid social campaigns on major platforms with conversion tracking.",
        icon: Target,
        href: "/services/smm-paid",
      },
      {
        name: "Analytics and Reporting",
        description: "Detailed performance reporting and optimization recommendations.",
        icon: Database,
        href: "/services/smm-analytics",
      },
      {
        name: "SM SEO",
        description: "Social media optimization to improve discoverability and engagement.",
        icon: Search,
        href: "/services/smm-seo",
      },
    ],
  },
]

export function ServicesOverview() {
  return (
    <section className="py-20 bg-background flex flex-col items-center">
      <div className="container px-4 max-w-[1536px] w-full">
        {/* Featured / Main Services */}
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold text-foreground text-center mb-4">Our Main Services</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
            We combine enterprise-grade cybersecurity with web engineering and social media marketing to both
            secure and grow your digital business. Explore Web Services and Social Media Marketing as primary
            pillars of our offering.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-2 border-primary/20 hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Monitor className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Web Services</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  End-to-end web services including design, hosting, SEO, server maintenance, and domain
                  management.
                </CardDescription>
                <div className="flex flex-col gap-2">
                  <Link href="/services/web-design" className="text-primary">Web Design</Link>
                  <Link href="/services/web-hosting" className="text-primary">Web Hosting</Link>
                  <Link href="/services/web-seo" className="text-primary">Web SEO</Link>
                  <Link href="/services/server-maintenance" className="text-primary">Server Maintenance</Link>
                  <Link href="/services/domain-services" className="text-primary">Domain Services</Link>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Camera className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Social Media Marketing (SMM)</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Full-service social media strategy, content creation, management, paid campaigns, and analytics.
                </CardDescription>
                <div className="flex flex-col gap-2">
                  <Link href="/services/smm-strategy" className="text-primary">SM Strategy Development</Link>
                  <Link href="/services/smm-content" className="text-primary">Content Creation</Link>
                  <Link href="/services/smm-management" className="text-primary">SM Management</Link>
                  <Link href="/services/smm-paid" className="text-primary">Paid Advertisement</Link>
                  <Link href="/services/smm-analytics" className="text-primary">Analytics & Reporting</Link>
                  <Link href="/services/smm-seo" className="text-primary">SM SEO</Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Comprehensive Security Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            From endpoint protection to cloud security, we deliver integrated solutions that reduce complexity while
            strengthening your security posture.
          </p>
        </div>

        <div className="space-y-16">
          {serviceCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">{category.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service) => {
                  const IconComponent = service.icon
                  return (
                    <Card
                      key={service.name}
                      className="group hover:shadow-lg motion-safe:hover:-translate-y-0.5 motion-safe:transform-gpu transition-none border-border hover:border-primary/20"
                    >
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-none">
                            <IconComponent className="h-5 w-5 text-primary" />
                          </div>
                          <CardTitle className="text-lg">{service.name}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <CardDescription className="text-sm leading-relaxed">{service.description}</CardDescription>
                        <Button
                          variant="ghost"
                          size="sm"
                          asChild
                          className="w-full justify-start p-0 h-auto text-primary hover:text-primary dark:hover:bg-green-800 dark:hover:text-white px-5"
                        >
                          <Link href={service.href}>Learn more→</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild className=" border-2 border-green-600 dark:border-white text-primary rounded-lg shadow-md hover:bg-primary hover:text-white dark:hover:text-white dark:hover:bg-green-800 hover:shadow-lg">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
