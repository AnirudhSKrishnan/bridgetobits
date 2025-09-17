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

          {/* SEO/AT-friendly real heading (hidden visually) */}
          <h1 className="sr-only">Your bridge to international education</h1>

          {/* Simple gradient text headline */}
          <div className="hero-gradient-text">
            <span>Your bridge to</span>
            <span>international education</span>
          </div>

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
        <div className="text-center mb-12">
          <Reveal>
            <h2 className="h2" style={{ color: "var(--tn-text)" }}>Everything You Need to Succeed</h2>
          </Reveal>
          <Reveal delay={120} variant="fade">
            <p className="muted mt-2 max-w-2xl mx-auto">
              Our comprehensive platform provides all the tools, resources, and support you 
              need to navigate your international transfer journey successfully.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              ),
              title: "Comprehensive Video Guides", 
              desc: "Step-by-step video tutorials covering every aspect of the transfer process from application to visa."
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              ),
              title: "Downloadable Resources",
              desc: "Checklists, templates, and guides you can download and access throughout your journey."
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 8V7m6 4v8M9 17h6" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
                </svg>
              ),
              title: "Timeline Planning",
              desc: "Detailed timelines and deadline trackers to ensure you never miss important dates."
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              ),
              title: "Peer Community",
              desc: "Connect with fellow BITS students who are going through or have completed the transfer process."
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              ),
              title: "University Database",
              desc: "Comprehensive database of partner universities with detailed requirements and program overviews across 15 countries."
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: "Expert Support",
              desc: "Get your questions answered by our experienced team and successful students who have successfully transferred before."
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              ),
              title: "Success Tracking",
              desc: "Track your progress with personalized recommendations based on your profile and goals."
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              ),
              title: "BITS-Specific Content",
              desc: "Content tailored specifically for BITS students, including credit mappings and course equivalencies."
            }
          ].map((feature, i) => (
            <Reveal key={feature.title} delay={60 * i}>
              <div className="card card-focusable text-center p-6">
                <div 
                  className="w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, var(--tn-accent), var(--tn-accent-2))" }}
                >
                  <div style={{ color: "#0d1726" }}>
                    {feature.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-3" style={{ color: "var(--tn-text)" }}>
                  {feature.title}
                </h3>
                <p className="muted text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
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
            <p className="muted mt-2 mb-large">Testimonials area (sample content).</p>
          </Reveal>

          <Reveal delay={180} variant="scale">
            <div className="marquee" aria-label="Student testimonials">
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
            <div className="mt-large">
              <Link href="/contact" className="btn btn-primary">Book a free call</Link>
            </div>
          </Reveal>
        </div>
      </Section>
    </div>
  );
}
