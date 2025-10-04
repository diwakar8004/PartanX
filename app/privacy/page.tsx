import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Privacy Policy - PartanX",
  description: "PartanX privacy policy and data protection practices.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <section className="py-20 bg-gradient-to-br from-background to-muted">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>
            <p className="text-center text-muted-foreground mb-12">Last updated: January 1, 2024</p>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Information We Collect</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none">
                  <p>
                    We collect information you provide directly to us, such as when you create an account, request
                    services, or contact us for support. This may include your name, email address, phone number,
                    company information, and any other information you choose to provide.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>How We Use Your Information</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none">
                  <p>We use the information we collect to:</p>
                  <ul>
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send technical notices, updates, and support messages</li>
                    <li>Respond to your comments, questions, and customer service requests</li>
                    <li>Monitor and analyze trends, usage, and activities</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Information Sharing</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none">
                  <p>
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your
                    consent, except as described in this policy. We may share your information with service providers who
                    assist us in operating our website and conducting our business, provided they agree to keep this
                    information confidential.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Data Security</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none">
                  <p>
                    We implement appropriate security measures to protect your personal information against unauthorized
                    access, alteration, disclosure, or destruction. However, no method of transmission over the Internet
                    or electronic storage is 100% secure.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contact Us</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none">
                  <p>
                    If you have any questions about this Privacy Policy, please contact us at privacy@partanx.tech or
                    (555) 123-4567.
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
