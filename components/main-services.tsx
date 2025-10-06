import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Monitor, Camera, Layout, Server, Search, Wrench, Globe, Target, Image as LucideImage, Users, Megaphone, BarChart } from "lucide-react"

export function MainServices() {
  return (
    <section className="py-20 bg-background flex flex-col items-center">
      <div className="container px-4 max-w-[1536px] w-full">
          <div className="mb-12">
          <h2 className="text-4xl font-extrabold text-foreground text-center mb-4">Our Main Services</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">
            We provide managed cybersecurity alongside digital product services — Web Services and Social Media
            Marketing — so you can secure and grow your online presence from one partner.
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
                <div className="mb-4">
                  <Image
                    src="/web-design-illustration.svg"
                    alt="Web design illustration"
                    width={1200}
                    height={480}
                    className="rounded-md object-cover w-full h-40 md:h-48"
                    priority={false}
                  />
                </div>
                <CardDescription className="mb-4">
                  End-to-end web services including modern responsive design, reliable hosting, SEO, server
                  maintenance, and domain management to keep your site fast, secure and discoverable.
                </CardDescription>
                <div className="flex flex-col gap-2">
                  <Link href="/services/web-design" className="text-primary flex items-center gap-2">
                    <Layout className="h-4 w-4 text-primary" />
                    Web Design
                  </Link>
                  <Link href="/services/web-hosting" className="text-primary flex items-center gap-2">
                    <Server className="h-4 w-4 text-primary" />
                    Web Hosting
                  </Link>
                  <Link href="/services/web-seo" className="text-primary flex items-center gap-2">
                    <Search className="h-4 w-4 text-primary" />
                    Web SEO
                  </Link>
                  <Link href="/services/server-maintenance" className="text-primary flex items-center gap-2">
                    <Wrench className="h-4 w-4 text-primary" />
                    Server Maintenance
                  </Link>
                  <Link href="/services/domain-services" className="text-primary flex items-center gap-2">
                    <Globe className="h-4 w-4 text-primary" />
                    Domain Services
                  </Link>
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
                <div className="mb-4">
                  <Image
                    src="/smm-illustration.svg"
                    alt="Social media marketing illustration"
                    width={1200}
                    height={480}
                    className="rounded-md object-cover w-full h-40 md:h-48"
                    priority={false}
                  />
                </div>
                <CardDescription className="mb-4">
                  Full-service social media marketing: strategy, content creation, community management, paid
                  campaigns and analytics to turn engagement into measurable business results.
                </CardDescription>
                <div className="flex flex-col gap-2">
                  <Link href="/services/smm-strategy" className="text-primary flex items-center gap-2">
                    <Target className="h-4 w-4 text-primary" />
                    SM Strategy Development
                  </Link>
                  <Link href="/services/smm-content" className="text-primary flex items-center gap-2">
                    <LucideImage className="h-4 w-4 text-primary" />
                    Content Creation
                  </Link>
                  <Link href="/services/smm-management" className="text-primary flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    SM Management
                  </Link>
                  <Link href="/services/smm-paid" className="text-primary flex items-center gap-2">
                    <Megaphone className="h-4 w-4 text-primary" />
                    Paid Advertisement
                  </Link>
                  <Link href="/services/smm-analytics" className="text-primary flex items-center gap-2">
                    <BarChart className="h-4 w-4 text-primary" />
                    Analytics & Reporting
                  </Link>
                  <Link href="/services/smm-seo" className="text-primary flex items-center gap-2">
                    <Search className="h-4 w-4 text-primary" />
                    SM SEO
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-12">
        </div>
      </div>
    </section>
  )
}
