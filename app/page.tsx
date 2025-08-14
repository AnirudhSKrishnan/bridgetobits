import Link from "next/link";
import Section from "@/components/section";
import FeatureCard from "@/components/feature-card";

export default function HomePage() {
  return (
    <div>
      <Section className="relative overflow-hidden">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1 text-sm" style={{ border: "1px solid var(--tn-border)", background: "#0f111a", color: "var(--tn-muted)" }}>
            <span>🎓 Admissions Guidance</span>
            <span style={{ color: "#585f86" }}>•</span>
            <span>Tokyo Night — Yellow accent</span>
          </div>
          <h1 className="h1" style={{ color: "var(--tn-text)" }}>Study abroad, simplified.</h1>
          <p className="muted max-w-2xl mx-auto">
            A full Next.js scaffold mirroring the sections of the original site, themed like Tokyo Night with a yellow accent.
          </p>
          <div className="flex justify-center gap-3">
            <Link href="/universities" className="btn btn-primary">Explore Universities</Link>
            <Link href="/contact" className="btn btn-ghost">Contact Us</Link>
          </div>
        </div>
      </Section>

      <Section>
        <div className="text-center mb-10">
          <h2 className="h2" style={{ color: "var(--tn-text)" }}>Why this scaffold</h2>
          <p className="muted mt-2">Everything you need to ship a marketing site quickly.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard title="Fast" desc="Next.js App Router + Tailwind for rapid iteration." />
          <FeatureCard title="Flexible" desc="JSON/MDX friendly; upgrade to a CMS any time." />
          <FeatureCard title="Deployable" desc="Optimized for Vercel; analytics/SEO ready." />
        </div>
      </Section>

      <Section>
        <div className="text-center">
          <h2 className="h2" style={{ color: "var(--tn-text)" }}>Join hundreds of students</h2>
          <p className="muted mt-2">Testimonials area (sample content).</p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {["A.S.", "P.P.", "R.K."].map((initials) => (
              <div key={initials} className="card">
                <div className="font-semibold" style={{ color: "var(--tn-text)" }}>{initials}</div>
                <p className="muted mt-2">
                  “Clear guidance and practical tips—exactly what I needed.”
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/contact" className="btn btn-primary">Book a free call</Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
