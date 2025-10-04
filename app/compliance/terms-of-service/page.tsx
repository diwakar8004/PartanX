import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Scale, Shield, AlertTriangle, Mail } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service | PartanX",
  description: "Review the terms and conditions for using PartanX's cybersecurity services and platform.",
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Terms of Service</h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              These terms govern your use of PartanX's services and platform. Please read them carefully.
            </p>
            <div className="text-sm text-muted-foreground">Last updated: January 15, 2024</div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  1. Acceptance of Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  By accessing or using PartanX's services, website, or platform ("Services"), you agree to be bound by
                  these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Services.
                </p>
                <p className="text-muted-foreground">
                  These Terms constitute a legally binding agreement between you and PartanX Inc. ("PartanX," "we," "us,"
                  or "our").
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  2. Description of Services
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  PartanX provides comprehensive cybersecurity services including but not limited to:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Security assessments and penetration testing</li>
                  <li>• Managed security services and SOC operations</li>
                  <li>• Compliance consulting and audit support</li>
                  <li>• Incident response and forensic services</li>
                  <li>• Security awareness training and education</li>
                  <li>• Cloud security and infrastructure protection</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="h-5 w-5" />
                  3. User Responsibilities
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Account Security</h4>
                  <p className="text-muted-foreground">
                    You are responsible for maintaining the confidentiality of your account credentials and for all
                    activities that occur under your account.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Lawful Use</h4>
                  <p className="text-muted-foreground">
                    You agree to use our Services only for lawful purposes and in accordance with these Terms. You will
                    not use our Services to engage in any illegal, harmful, or unauthorized activities.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Information Accuracy</h4>
                  <p className="text-muted-foreground">
                    You agree to provide accurate, current, and complete information when using our Services and to
                    update such information as necessary.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>4. Service Availability and Modifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We strive to provide reliable and continuous access to our Services. However, we do not guarantee that
                  our Services will be available at all times or that they will be error-free.
                </p>
                <p className="text-muted-foreground">
                  We reserve the right to modify, suspend, or discontinue any aspect of our Services at any time, with
                  or without notice. We may also impose limits on certain features or restrict access to parts of our
                  Services.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>5. Intellectual Property Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                  All content, features, and functionality of our Services, including but not limited to text, graphics,
                  logos, software, and methodologies, are owned by PartanX or our licensors and are protected by
                  copyright, trademark, and other intellectual property laws.
                </p>
                <p className="text-muted-foreground">
                  You may not reproduce, distribute, modify, or create derivative works of our content without our
                  express written permission.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>6. Confidentiality and Data Protection</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We understand the sensitive nature of cybersecurity information. We maintain strict confidentiality
                  regarding all client information and implement appropriate security measures to protect your data.
                </p>
                <p className="text-muted-foreground">
                  Our data handling practices are governed by our Privacy Policy, which is incorporated into these Terms
                  by reference.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  7. Limitation of Liability
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  To the fullest extent permitted by law, PartanX shall not be liable for any indirect, incidental,
                  special, consequential, or punitive damages, including but not limited to loss of profits, data, or
                  business opportunities.
                </p>
                <p className="text-muted-foreground">
                  Our total liability for any claims arising from or related to these Terms or our Services shall not
                  exceed the amount paid by you to PartanX in the twelve (12) months preceding the claim.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>8. Indemnification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  You agree to indemnify, defend, and hold harmless PartanX and its officers, directors, employees,
                  and agents from any claims, damages, losses, or expenses arising from your use of our Services or
                  violation of these Terms.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>9. Termination</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Either party may terminate the service relationship at any time with appropriate notice as specified
                  in individual service agreements.
                </p>
                <p className="text-muted-foreground">
                  We reserve the right to suspend or terminate your access to our Services immediately if you violate
                  these Terms or engage in any harmful or illegal activities.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>10. Governing Law and Dispute Resolution</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  These Terms shall be governed by and construed in accordance with the laws of the State of Delaware,
                  without regard to its conflict of law principles.
                </p>
                <p className="text-muted-foreground">
                  Any disputes arising from these Terms or our Services shall be resolved through binding arbitration in
                  accordance with the rules of the American Arbitration Association.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>11. Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We may update these Terms from time to time. We will notify you of any material changes by posting the
                  updated Terms on our website and updating the "Last updated" date. Your continued use of our Services
                  after such changes constitutes acceptance of the new Terms.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Questions About These Terms?</h2>
            <p className="text-muted-foreground mb-8">
              If you have any questions about these Terms of Service, please contact our legal team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Legal Team
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
