
"use client";
import Link from "next/link";

export default function ApplyFrontendDeveloper() {
  return (
    <main className="min-h-screen bg-background py-16 px-4 flex flex-col items-center">
      <div className="max-w-xl w-full mx-auto bg-white dark:bg-background rounded-xl shadow-lg p-8 border border-primary/10">
        <h1 className="text-3xl font-bold text-primary mb-4 text-center">Apply: Frontend Developer</h1>
        <p className="text-base text-muted-foreground mb-6 text-center">Remote | Full-time</p>
        <form className="space-y-6" onSubmit={e => {
          e.preventDefault();
          const form = e.target as HTMLFormElement;
          const name = (form[0] as HTMLInputElement).value;
          const email = (form[1] as HTMLInputElement).value;
          const linkedin = (form[2] as HTMLInputElement).value;
          const fit = (form[3] as HTMLTextAreaElement).value;
          if (typeof window !== "undefined") {
            let submissions = [];
            try {
              submissions = JSON.parse(localStorage.getItem("submissions") || "[]");
            } catch {}
            submissions.push({
              type: "Job Application: Frontend Developer",
              name,
              email,
              linkedin,
              fit,
              submitted: new Date().toISOString(),
            });
            localStorage.setItem("submissions", JSON.stringify(submissions));
          }
          form.reset();
          alert("Application submitted!");
        }}>
          <input type="text" placeholder="Full Name" className="w-full px-4 py-2 rounded-lg border" required />
          <input type="email" placeholder="Email Address" className="w-full px-4 py-2 rounded-lg border" required />
          <input type="text" placeholder="LinkedIn Profile (optional)" className="w-full px-4 py-2 rounded-lg border" />
          <textarea placeholder="Why are you a great fit?" className="w-full px-4 py-2 rounded-lg border" rows={4} required />
          <button type="submit" className="w-full px-6 py-2 rounded-lg bg-primary text-white font-semibold hover:bg-primary/80 transition-colors">Submit Application</button>
        </form>
        <div className="mt-6 text-center">
          <Link href="/careers" className="text-primary underline">← Back to Careers</Link>
        </div>
      </div>
    </main>
  );
}
