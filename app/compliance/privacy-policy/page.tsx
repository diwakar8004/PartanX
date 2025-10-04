import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Eye, Lock, Users, FileText, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy | PartanX",
  description: "Learn how PartanX protects your personal information and respects your privacy rights.",
}

const privacyPrinciples = [
  {
    icon: Shield,
    title: "Data Protection",
    description:
      "We implement industry-leading security measures to protect your personal information from unauthorized access, disclosure, or misuse.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "We are clear about what data we collect, how we use it, and with whom we share it. No hidden practices or unclear terms.",
  },
  {
    icon: Lock,
    title: "Data Minimization",
    description:
      "We only collect and process personal data that is necessary for providing our services and fulfilling our legitimate business purposes.",
  },
  {
    icon: Users,
    title: "User Control",
    description:
      "You have the right to access, correct, delete, or restrict the processing of your personal information at any time.",
  },
]

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Privacy Policy</h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Your privacy is fundamental to our mission. Learn how we protect your personal information and respect
              your rights.
            </p>
            <div className="text-sm text-muted-foreground">Last updated: January 15, 2024</div>
          </div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Privacy Principles</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {privacyPrinciples.map((principle, index) => {
                const IconComponent = principle.icon
                return (
                  <Card key={index} className="text-center">
                    <CardHeader>
                      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{principle.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{principle.description}</CardDescription>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-gray max-w-none">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    1. Information We Collect
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Personal Information</h4>
                    <p className="text-muted-foreground">
                      We collect information you provide directly to us, such as when you create an account, request
                      services, or contact us. This may include your name, email address, phone number, company
                      information, and professional details.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Technical Information</h4>
                    <p className="text-muted-foreground">
                      We automatically collect certain technical information when you use our services, including IP
                      addresses, browser type, device information, and usage patterns to improve our services and ensure
                      security.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Security Assessment Data</h4>
                    <p className="text-muted-foreground">
                      When you engage our security services, we may collect information about your IT infrastructure,
                      security configurations, and vulnerabilities solely for the purpose of providing our services.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    2. How We Use Your Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Provide, maintain, and improve our cybersecurity services</li>
                    <li>• Communicate with you about our services, updates, and security alerts</li>
                    <li>• Conduct security assessments and provide recommendations</li>
                    <li>• Comply with legal obligations and regulatory requirements</li>
                    <li>• Protect against fraud, abuse, and security threats</li>
                    <li>• Analyze usage patterns to enhance user experience</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    3. Information Sharing and Disclosure
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    We do not sell, trade, or otherwise transfer your personal information to third parties except in
                    the following circumstances:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• With your explicit consent</li>
                    <li>
                      • To trusted service providers who assist in our operations (under strict confidentiality
                      agreements)
                    </li>
                    <li>• When required by law or to protect our legal rights</li>
                    <li>• In connection with a business transfer or acquisition</li>
                    <li>• To prevent fraud or security threats</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lock className="h-5 w-5" />
                    4. Data Security and Retention
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Security Measures</h4>
                    <p className="text-muted-foreground">
                      We implement comprehensive security measures including encryption, access controls, regular
                      security assessments, and employee training to protect your personal information.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Data Retention</h4>
                    <p className="text-muted-foreground">
                      We retain personal information only as long as necessary to fulfill the purposes outlined in this
                      policy, comply with legal obligations, or resolve disputes.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="h-5 w-5" />
                    5. Your Rights and Choices
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Depending on your location, you may have the following rights regarding your personal information:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Access and receive a copy of your personal information</li>
                    <li>• Correct inaccurate or incomplete information</li>
                    <li>• Delete your personal information (subject to legal requirements)</li>
                    <li>• Restrict or object to certain processing activities</li>
                    <li>• Data portability (receive your data in a structured format)</li>
                    <li>• Withdraw consent where processing is based on consent</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>6. International Data Transfers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    If you are located outside the United States, please note that we may transfer your personal
                    information to and process it in the United States and other countries. We ensure appropriate
                    safeguards are in place to protect your information in accordance with applicable data protection
                    laws.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>7. Changes to This Privacy Policy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We may update this Privacy Policy from time to time. We will notify you of any material changes by
                    posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you
                    to review this Privacy Policy periodically.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Questions About Your Privacy?</h2>
            <p className="text-muted-foreground mb-8">
              If you have any questions about this Privacy Policy or our data practices, please don't hesitate to
              contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Privacy Team
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/compliance">View All Compliance Info</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
