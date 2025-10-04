import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: {
  default: "PartanX - Managed Security & Systems Integration",
  template: "%s | PartanX",
  },
  description:
    "End-to-end cybersecurity, cloud, web services and social media marketing (SMM) as your MSP + Digital partner. Advanced ZTNA, EDR, XDR, web design, hosting, SEO, and full-service SMM with measurable outcomes.",
  generator: "v0.app",
  keywords: [
    "MSP",
    "managed security",
    "cybersecurity",
    "systems integration",
    "ZTNA",
    "EDR",
    "XDR",
    "cloud security",
    "SOC",
    "incident response",
    "compliance",
    "ISO 27001",
    "SOC 2",
    "HIPAA",
    "PCI DSS",
    "web services",
    "web design",
    "web hosting",
    "social media marketing",
    "SMM",
    "digital marketing",
  ],
  authors: [{ name: "PartanX" }],
  creator: "PartanX",
  publisher: "PartanX",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://partanx.tech"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PartanX - Managed Security & Systems Integration",
    description:
      "End-to-end cybersecurity, cloud, web services and social media marketing (SMM). Managed security plus web engineering and digital marketing to secure and grow your business.",
    url: "https://partanx.tech",
    siteName: "PartanX",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PartanX - Managed Security & Systems Integration",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PartanX - Managed Security & Systems Integration",
    description:
      "End-to-end cybersecurity, web services and social media marketing (SMM). Managed security and digital services to protect and grow your online presence.",
    images: ["/og-image.jpg"],
    creator: "@partanx",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    yahoo: "yahoo-site-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://partanx.tech/#organization",
                  name: "PartanX",
                  url: "https://partanx.tech",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://partanx.tech/logo.png",
                    width: 200,
                    height: 60,
                  },
                  description:
                    "End-to-end cybersecurity, cloud, web services and social media marketing (SMM) as your MSP + Digital partner. Advanced ZTNA, EDR, XDR, web engineering (design, hosting, SEO) and full-service SMM.",
                  foundingDate: "2018",
                  founders: [
                    {
                      "@type": "Person",
                      name: "Sarah Chen",
                      jobTitle: "Chief Executive Officer",
                    },
                  ],
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+91 6394237705",
                    contactType: "customer service",
                    email: "tech.partanx@gmail.com",
                    availableLanguage: "English",
                  },
                  sameAs: ["https://linkedin.com/company/partanx", "https://twitter.com/partanx"],
                  serviceArea: {
                    "@type": "Place",
                    name: "Global",
                  },
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Security Services",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Advanced ZTNA",
                          description: "Zero Trust Network Access with granular policy controls",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Managed SOC",
                          description: "24/7 Security Operations Center with expert analysts",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "EDR",
                          description: "Endpoint Detection and Response with real-time threat hunting",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Web Design",
                          description: "Modern responsive web design and UX for performance and accessibility",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Web Hosting",
                          description: "Secure, managed hosting and server maintenance",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Social Media Marketing (SMM)",
                          description: "Strategy, content, paid campaigns and analytics to grow your brand",
                        },
                      },
                    ],
                  },
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://partanx.tech/#localbusiness",
                  name: "PartanX",
                  image: "https://partanx.tech/logo.png",
                  telephone: "+91 6394237705",
                  email: "tech.partanx@gmail.com",
                  url: "https://partanx.tech",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "NH‑24, Sitapur Road, Bakshi Ka Talab, Bhaisamau",
                    addressLocality: "Lucknow",
                    addressRegion: "Uttar Pradesh",
                    postalCode: "226201",
                    addressCountry: "IN",
                  },
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: "19.0760",
                    longitude: "72.8777",
                  },
                  openingHoursSpecification: {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    opens: "09:00",
                    closes: "17:00",
                  },
                  priceRange: "$$$$",
                  servedCuisine: "Cybersecurity, Web Services, Social Media Marketing",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Suspense fallback={<div>Loading...</div>}>
            <Navigation />
            {children}
          </Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
