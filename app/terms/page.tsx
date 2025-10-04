import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Terms of Service - PartanX",
  description: "PartanX terms of service and conditions of use.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <section className="py-20 bg-gradient-to-br from-background to-muted">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-4xl font-bold text-center mb-8">Terms of Service</h1>
            <p className="text-center text-muted-foreground mb-12">Last updated: January 1, 2024</p>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Acceptance of Terms</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none">
                  <p>
                    By accessing and using PartanX services, you accept and agree to be bound by the terms
                    and provision of this agreement. If you do not agree to abide by the above, please do not use this
                    service.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Service Description</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none">
                  <p>
                    PartanX provides managed security services, systems integration, and cybersecurity
                    consulting. Our services are provided on a subscription basis or through professional services
                    agreements as specified in individual service agreements.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>User Responsibilities</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none">
                  <p>Users are responsible for:</p>
                  <ul>
                    <li>Providing accurate and complete information</li>
                    <li>Maintaining the confidentiality of account credentials</li>
                    <li>Complying with all applicable laws and regulations</li>
                    <li>Using services only for lawful purposes</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Limitation of Liability</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none">
                  <p>
                    PartanX shall not be liable for any indirect, incidental, special, consequential, or
                    punitive damages, including without limitation, loss of profits, data, use, goodwill, or other
                    intangible losses, resulting from your use of the service.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none">
                  <p>
                    For questions about these Terms of Service, please contact us at legal@partanx.tech or +91 6394237705.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
