import { Hero } from "@/components/hero"
import { MainServices } from "@/components/main-services"
import { WhyChooseUs } from "@/components/why-choose-us"
import { MSPOperations } from "@/components/msp-operations"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 space-y-12">
        <Hero />
  <MainServices />
        <WhyChooseUs />
        <MSPOperations />
      </div>
      <Footer />
    </main>
  )
}
