import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-background py-16 px-4 flex flex-col items-center">
      <div className="max-w-2xl w-full mx-auto bg-white dark:bg-background rounded-xl shadow-lg p-8 border border-primary/10">
        <h1 className="text-4xl font-bold text-primary mb-4 text-center">Open Positions</h1>
        <p className="text-lg text-muted-foreground mb-8 text-center">
          Join PartanX and help us build a safer digital world. Explore our current openings and become part of a passionate, innovative team.
        </p>
        <div className="space-y-6">
          <div className="bg-muted/20 rounded-lg p-6 shadow flex flex-col sm:flex-row sm:items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-foreground">Frontend Developer</h2>
              <p className="text-sm text-muted-foreground">Remote | Full-time</p>
            </div>
            <Button asChild variant="default" className="mt-4 sm:mt-0">
              <Link href="/careers/frontend-developer">Apply Now</Link>
            </Button>
          </div>
          <div className="bg-muted/20 rounded-lg p-6 shadow flex flex-col sm:flex-row sm:items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-foreground">Cloud Security Engineer</h2>
              <p className="text-sm text-muted-foreground">Noida, India | Full-time</p>
            </div>
            <Button asChild variant="default" className="mt-4 sm:mt-0">
              <Link href="/careers/cloud-security-engineer">Apply Now</Link>
            </Button>
          </div>
          <div className="bg-muted/20 rounded-lg p-6 shadow flex flex-col sm:flex-row sm:items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-foreground">Security Analyst</h2>
              <p className="text-sm text-muted-foreground">Remote | Full-time</p>
            </div>
            <Button asChild variant="default" className="mt-4 sm:mt-0">
              <Link href="/careers/security-analyst">Apply Now</Link>
            </Button>
          </div>
          <div className="bg-muted/20 rounded-lg p-6 shadow flex flex-col sm:flex-row sm:items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-foreground">SOC Engineer</h2>
              <p className="text-sm text-muted-foreground">Noida, India | Full-time</p>
            </div>
            <Button asChild variant="default" className="mt-4 sm:mt-0">
              <Link href="/careers/soc-engineer">Apply Now</Link>
            </Button>
          </div>
          <div className="bg-muted/20 rounded-lg p-6 shadow flex flex-col sm:flex-row sm:items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-foreground">Penetration Tester</h2>
              <p className="text-sm text-muted-foreground">Remote | Full-time</p>
            </div>
            <Button asChild variant="default" className="mt-4 sm:mt-0">
              <Link href="/careers/penetration-tester">Apply Now</Link>
            </Button>
          </div>
        </div>
        <div className="mt-10 text-center">
          <p className="text-base text-muted-foreground">Don't see a role that fits? <Link href="/contact" className="text-primary underline">Contact us</Link> to share your resume and interests.</p>
        </div>
      </div>
    </main>
  );
}
