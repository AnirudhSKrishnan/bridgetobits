import Link from "next/link";
import Section from "@/components/section";
import FeatureCard from "@/components/feature-card";
import Reveal from "@/components/reveal";

export default function HomePage() {
  const testimonials = [
    { name: "A.S.", text: "Clear guidance and practical tips—exactly what I needed." },
    { name: "P.P.", text: "Made the process simple and stress-free." },
    { name: "R.K.", text: "Actionable advice that actually works." },
    { name: "T.M.", text: "Great clarity on timelines and paperwork." },
    { name: "S.K.", text: "The university shortlist was spot-on." },
  ];
  const loop = [...testimonials, ...testimonials];

  return (
    <div>
      {/* HERO */}
      <Section className="relative">
        <div className="text-center space-y-8">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1 text-sm"
            style={{ border: "1px solid var(--tn-border)", background: "#0f111a", color: "var(--tn-muted)" }}
          >
            <span>🎓 Trusted by BITS students</span>
          </div>

          <h1 className="hero-display">
            <span className="hero-gradient-blue hero-flow">Study abroad, simplified.</span>
          </h1>

          <p className="hero-sub">
            Navigate 2+2 and 3+1 transfer programs with confidence. Get expert guidance,
            peer support, and exclusive resources designed specifically for BITS students.
          </p>

          <div className="flex justify-center gap-3">
            <Link href="/universities" className="btn btn-primary btn-hero">Get Started Free</Link>
            <Link href="/contact" className="btn btn-ghost btn-hero">Watch Videos</Link>
          </div>
        </div>
      </Section>

      {/* FEATURES */}
      <Section>
        <div className="text-center mb-10">
          <Reveal>
            <h2 className="h2" style={{ color: "var(--tn-text)" }}>Why this scaffold</h2>
          </Reveal>
          <Reveal delay={120} variant="fade">
            <p className="muted mt-2">Everything you need to ship a marketing site quickly.</p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "⚡ Fast", desc: "Next.js App Router + Tailwind for rapid iteration." },
            { title: "🧩 Flexible", desc: "JSON/MDX friendly; upgrade to a CMS any time." },
            { title: "🚀 Deployable", desc: "Optimized for Vercel; analytics/SEO ready." },
          ].map((f, i) => (
            <Reveal key={f.title} delay={80 * i}>
              <FeatureCard title={f.title} desc={f.desc} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS — marquee */}
      <Section>
        <div className="text-center">
          <Reveal>
            <h2 className="h2" style={{ color: "var(--tn-text)" }}>Join hundreds of students</h2>
          </Reveal>
          <Reveal delay={120} variant="fade">
            <p className="muted mt-2">Testimonials area (sample content).</p>
          </Reveal>

          <Reveal delay={180} variant="scale">
            <div className="mt-8 marquee" aria-label="Student testimonials">
              <div className="marquee__track">
                {loop.map((t, i) => (
                  <div key={i} className="card card-focusable testimonial-card" tabIndex={0}>
                    <div className="font-semibold" style={{ color: "var(--tn-text)" }}>{t.name}</div>
                    <p className="muted mt-2">“{t.text}”</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-10">
              <Link href="/contact" className="btn btn-primary">Book a free call</Link>
            </div>
          </Reveal>
        </div>
      </Section>
    </div>
  );
}
