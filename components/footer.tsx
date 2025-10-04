import Link from "next/link"
import { Shield, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-card border-t flex flex-col items-center justify-center">
      <div className="container px-4 py-12 max-w-[1536px] w-full flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold">PartanX</span>
            </div>
            <p className="text-sm text-muted-foreground">
              End-to-end cybersecurity and cloud solutions as your MSP + Systems Integrator.
            </p>
            <p className="text-sm text-muted-foreground">Also providing Web Services and Social Media Marketing (SMM) to grow your online presence.</p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4" />
                <span>+91 6394237705</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4" />
                <span>tech.partanx@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4" />
                <span>NH‑24, Sitapur Road, Bakshi Ka Talab, Bhaisamau, Lucknow, Uttar Pradesh – 226201</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-foreground">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/why-choose-us" className="text-muted-foreground hover:text-foreground">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>

            <div className="flex items-center space-x-3 mt-3">
              <a href="#" aria-label="Facebook placeholder" className="text-muted-foreground hover:text-foreground">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect width="24" height="24" rx="4" /></svg>
              </a>
              <a href="#" aria-label="Twitter placeholder" className="text-muted-foreground hover:text-foreground">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="12" r="10" /></svg>
              </a>
              <a href="#" aria-label="LinkedIn placeholder" className="text-muted-foreground hover:text-foreground">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" /></svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/advanced-ztna" className="text-muted-foreground hover:text-foreground">
                  Advanced ZTNA
                </Link>
              </li>
              <li>
                <Link href="/services/edr" className="text-muted-foreground hover:text-foreground">
                  EDR
                </Link>
              </li>
              <li>
                <Link href="/services/xdr" className="text-muted-foreground hover:text-foreground">
                  XDR
                </Link>
              </li>
              <li>
                <Link href="/services/managed-soc" className="text-muted-foreground hover:text-foreground">
                  Managed SOC
                </Link>
              </li>
              <li>
                <Link href="/services/cloud-security-aws" className="text-muted-foreground hover:text-foreground">
                  Cloud Security
                </Link>
              </li>
              <li>
                <Link href="/services/penetration-testing" className="text-muted-foreground hover:text-foreground">
                  Penetration Testing
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">Get the latest security insights and updates.</p>
            <div className="flex space-x-2">
              <Input placeholder="Enter your email" className="flex-1" />
              <Button size="sm">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© 2025 PartanX. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
