import Image from "next/image"

const partners = [
  { name: "Cloudflare", logo: "/cloudflare-logo.jpg" },
  { name: "AWS", logo: "/aws-logo.png" },
  { name: "Rapid7", logo: "/rapid7-logo.png" },
  { name: "Emsisoft", logo: "/emsisoft-logo.jpg" },
  { name: "Palo Alto Networks", logo: "/palo-alto-networks-logo.png" },
  { name: "Check Point", logo: "/check-point-logo.jpg" },
]

export function TrustBar() {
  return (
    <section className="bg-card py-12 border-y flex flex-col items-center">
      <div className="container px-4 max-w-[1536px] w-full">
        <div className="text-center mb-8">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Trusted OEM Partnerships</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {partners.map((partner) => (
            <div key={partner.name} className="flex items-center justify-center">
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={`${partner.name} logo`}
                width={120}
                height={60}
                className="opacity-60 hover:opacity-100 transition-none max-h-12 w-auto motion-safe:transform-gpu hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
