"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Footer } from "@/components/footer"
import { Calendar, FileText, Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react"

const services = [
  "Advanced ZTNA",
  "EDR",
  "XDR",
  "MDM",
  "Email Security",
  "SASE / SWG / CASB",
  "Vulnerability Management",
  "SIEM / SOAR",
  "WAF / DDoS Protection",
  "Cloud Security (AWS)",
  "Identity & Access (MFA, SSO)",
  "Backup & DR",
  "Penetration Testing",
  "Security Awareness Training",
  "Managed SOC",
]

const industries = [
  "Financial Services",
  "Healthcare",
  "Technology",
  "Manufacturing",
  "Retail",
  "Education",
  "Government",
  "Professional Services",
  "Other",
]

const employeeCounts = ["1-10", "11-50", "51-200", "201-500", "501-1000", "1000+"]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    employeeCount: "",
    interests: [] as string[],
    message: "",
  })
    // Modal state for Book a Call
    const [showCallModal, setShowCallModal] = useState(false)
    const [callForm, setCallForm] = useState({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
    })
    const [callSent, setCallSent] = useState(false)

    const handleCallSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Save booking to localStorage for persistence
      if (typeof window !== "undefined") {
        let submissions = [];
        try {
          submissions = JSON.parse(localStorage.getItem("submissions") || "[]");
        } catch {}
        submissions.push({
          type: "Book a Call",
          name: callForm.name,
          email: callForm.email,
          phone: callForm.phone,
          date: callForm.date,
          time: callForm.time,
          submitted: new Date().toISOString(),
        });
        localStorage.setItem("submissions", JSON.stringify(submissions));
      }
      setCallSent(true);
      setTimeout(() => {
        setShowCallModal(false);
        setCallSent(false);
        setCallForm({ name: '', email: '', phone: '', date: '', time: '' });
      }, 1500);
    }
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInterestChange = (service: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      interests: checked ? [...prev.interests, service] : prev.interests.filter((s) => s !== service),
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save proposal request to localStorage for persistence
    if (typeof window !== "undefined") {
      let submissions = [];
      try {
        submissions = JSON.parse(localStorage.getItem("submissions") || "[]");
      } catch {}
      submissions.push({
        type: "Request Proposal",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        industry: formData.industry,
        employeeCount: formData.employeeCount,
        interests: formData.interests.join(", "),
        message: formData.message,
        submitted: new Date().toISOString(),
      });
      localStorage.setItem("submissions", JSON.stringify(submissions));
    }
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <main className="min-h-screen">
        <section className="py-20 bg-gradient-to-br from-background to-muted">
          <div className="container px-4">
            <div className="mx-auto max-w-2xl text-center">
              <div className="flex justify-center mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h1 className="text-3xl font-bold mb-4">Thank You for Your Interest</h1>
              <p className="text-lg text-muted-foreground mb-8">
                We've received your message and will respond within one business day. Our security experts are excited
                to discuss how we can help strengthen your organization's security posture.
              </p>
              <div className="bg-card rounded-lg p-6 border">
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Response SLA: Within 1 business day</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-muted py-20 flex flex-col items-center justify-center">
        <div className="container px-4 max-w-[1536px] w-full">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Get Started Today
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground text-pretty">
              Ready to strengthen your security posture? Our experts are here to help. Choose how you'd like to connect
              with us.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-background flex flex-col items-center justify-center">
        <div className="container px-4 max-w-[1536px] w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Book a Call */}
            <Card className="h-fit">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-2xl">Book a Call</CardTitle>
                <CardDescription>
                  Schedule a 30-minute consultation with our security experts to discuss your specific needs.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-muted/50 rounded-lg p-6 text-center">
                  <div className="text-sm text-muted-foreground mb-4">Calendar integration placeholder</div>
                  <div className="space-y-2 text-sm">
                    <div>📅 Available Monday - Friday</div>
                    <div>🕒 9:00 AM - 5:00 PM EST</div>
                    <div>⏱️ 30-minute sessions</div>
                  </div>
                </div>
                <Button size="lg" className="w-full" onClick={() => setShowCallModal(true)}>
                  Schedule Your Call
                </Button>
                  {showCallModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 px-2 h-full">
                      <div className="w-full max-w-md mx-auto rounded-xl p-0 shadow-2xl">
                        <div className="bg-card text-card-foreground border p-6 sm:p-8">
                          <h2 className="text-2xl font-bold mb-4 text-center">Schedule a Call</h2>
                          {callSent ? (
                            <div className="text-green-600 text-center font-semibold">Your call request has been sent!</div>
                          ) : (
                            <form onSubmit={handleCallSubmit} className="space-y-4">
                              <div>
                                <Label htmlFor="call-name">Name</Label>
                                <Input id="call-name" placeholder="Enter your name" value={callForm.name} onChange={e => setCallForm(f => ({ ...f, name: e.target.value }))} required />
                              </div>
                              <div>
                                <Label htmlFor="call-email">Email</Label>
                                <Input id="call-email" type="email" placeholder="Enter your email address" value={callForm.email} onChange={e => setCallForm(f => ({ ...f, email: e.target.value }))} required />
                              </div>
                              <div>
                                <Label htmlFor="call-phone">Phone</Label>
                                <Input id="call-phone" placeholder="Enter your phone number" value={callForm.phone} onChange={e => setCallForm(f => ({ ...f, phone: e.target.value }))} />
                              </div>
                              <div className="flex flex-col sm:flex-row gap-4">
                                <div className="flex-1">
                                  <Label htmlFor="call-date">Date</Label>
                                  <Input id="call-date" type="date" placeholder="Select date" value={callForm.date} onChange={e => setCallForm(f => ({ ...f, date: e.target.value }))} required />
                                </div>
                                <div className="flex-1">
                                  <Label htmlFor="call-time">Time</Label>
                                  <Input id="call-time" type="time" placeholder="Select time" value={callForm.time} onChange={e => setCallForm(f => ({ ...f, time: e.target.value }))} required />
                                </div>
                              </div>
                              <div className="flex flex-col sm:flex-row justify-end gap-2 mt-6">
                                <Button type="button" variant="outline" onClick={() => setShowCallModal(false)} className="w-full sm:w-auto">Cancel</Button>
                                <Button type="submit" className="w-full sm:w-auto">Send Request</Button>
                              </div>
                            </form>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <span>Or call us directly: +91 6394237705</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Request Proposal */}
            <Card className="h-fit">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                    <FileText className="h-6 w-6 text-secondary" />
                  </div>
                </div>
                <CardTitle className="text-2xl">Request Proposal</CardTitle>
                <CardDescription>
                  Tell us about your requirements and we'll prepare a customized security proposal for your
                  organization.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                    <div className="space-y-2 ">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                        required
                        className="border-black dark:border-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Work Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your work email"
                        value={formData.email}
                        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                        required
                        className="border-black dark:border-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                        className="border-black dark:border-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company *</Label>
                      <Input
                        id="company"
                        placeholder="Enter your company name"
                        value={formData.company}
                        onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                        required
                        className="border-black dark:border-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="industry">Industry</Label>
                      <Select
                        value={formData.industry}
                        onValueChange={(value) => setFormData((prev) => ({ ...prev, industry: value }))}
                        
                      >
                        <SelectTrigger className="border-black dark:border-white">

                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent>
                          {industries.map((industry) => (
                            <SelectItem key={industry} value={industry}>
                              {industry}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="employeeCount">Employee Count</Label>
                      <Select
                        value={formData.employeeCount}
                        onValueChange={(value) => setFormData((prev) => ({ ...prev, employeeCount: value }))}
                      >
                        <SelectTrigger className="border-black dark:border-white">
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          {employeeCounts.map((count) => (
                            <SelectItem key={count} value={count}>
                              {count}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Services of Interest</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-48 overflow-y-auto border rounded-md p-4">
                      {services.map((service) => (
                        <div key={service} className="flex items-center space-x-2">
                          <Checkbox
                            id={service}
                            checked={formData.interests.includes(service)}
                            onCheckedChange={(checked) => handleInterestChange(service, checked as boolean)}
                            className="border-black dark:border-white"
                          />
                          <Label htmlFor={service} className="text-sm">
                            {service}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your security requirements, current challenges, or specific questions..."
                      value={formData.message}
                      onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                      rows={4}
                    />
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4 text-center">
                    <div className="text-sm text-muted-foreground">reCAPTCHA verification placeholder</div>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Proposal Request
                  </Button>

                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>We respond within one business day</span>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-muted/30 flex flex-col items-center justify-center">
        <div className="container px-4 max-w-[1536px] w-full">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Other Ways to Reach Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <a href="https://www.google.com/maps/search/?api=1&query=Majestic+Signia,+Plot+No.+A-27,+Sector+62,+Noida+201309" target="_blank" rel="noopener noreferrer" className="text-center flex flex-col items-center p-6 rounded-xl shadow bg-white dark:bg-background border cursor-pointer hover:bg-muted/30 transition-colors duration-200">
                <div className="flex justify-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-primary">Office</h3>
                <div className="space-y-1">
                  <p className="text-base font-semibold text-foreground">PartanX Pvt Ltd</p>
                  <p className="text-base font-semibold text-foreground">NH‑24, Sitapur Road, Bakshi Ka Talab, Bhaisamau, Lucknow, Uttar Pradesh – 226201</p>
                  <p className="text-sm text-muted-foreground">Mon-Fri, 9 AM - 5 PM IST</p>
                </div>
              </a>
              <a href="tel:5551234567" className="text-center flex flex-col items-center p-6 rounded-xl shadow bg-white dark:bg-background border cursor-pointer hover:bg-muted/30 transition-colors duration-200">
                <div className="flex justify-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-primary">Phone</h3>
                <div className="space-y-1">
                  <p className="text-base font-semibold text-foreground">+91 6394237705</p>
                  <p className="text-sm text-muted-foreground">Mon-Fri, 9 AM - 5 PM EST</p>
                </div>
              </a>
              <a href="mailto:tech.partanx@gmail.com" className="text-center flex flex-col items-center p-6 rounded-xl shadow bg-white dark:bg-background border cursor-pointer hover:bg-muted/30 transition-colors duration-200">
                <div className="flex justify-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-primary">Email</h3>
                <div className="space-y-1">
                  <p className="text-base font-semibold text-foreground">tech.partanx@gmail.com</p>
                  <p className="text-sm text-muted-foreground">24/7 for urgent security matters</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
