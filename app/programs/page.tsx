import Section from "@/components/section";
import Reveal from "@/components/reveal";
import Link from "next/link";

export default function ProgramsPage() {
  const programs = [
    {
      id: "2+2",
      title: "2+2 Transfer Program",
      badge: "Most Popular",
      description: "Complete 2 years at BITS, then transfer to complete your degree abroad",
      duration: "2 years at BITS + 2 years abroad",
      timing: "After 4th semester at BITS",
      countries: ["USA", "France", "Australia"],
      benefits: [
        "Cost-effective education",
        "Dual degree experience", 
        "International exposure",
        "Better job prospects"
      ]
    },
    {
      id: "3+1",
      title: "3+1 Transfer Program", 
      description: "Complete 3 years at BITS, then transfer for final year abroad",
      duration: "3 years at BITS + 1 year abroad",
      timing: "After 6th semester at BITS",
      countries: ["USA", "UK", "Germany"],
      benefits: [
        "Shorter abroad duration",
        "Lower overall cost",
        "Specialized final year",
        "International certification"
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <Section>
        <div className="text-center">
          <Reveal>
            <h1 className="h1" style={{ color: "var(--tn-text)" }}>Transfer Programs</h1>
          </Reveal>
          <Reveal delay={120} variant="fade">
            <p className="hero-sub mt-3 mb-6">
              Explore different pathways to international education. Choose the program that best fits your goals and timeline.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Programs Grid */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {programs.map((program, index) => (
            <Reveal key={program.id} delay={index * 120}>
              <div className="card card-focusable h-full relative">
                {program.badge && (
                  <div className="absolute -top-3 left-6">
                    <span
                      className="text-xs px-3 py-1 rounded-full font-semibold"
                      style={{
                        background: "linear-gradient(135deg, var(--tn-accent), var(--tn-accent-2))",
                        color: "#0d1726"
                      }}
                    >
                      {program.badge}
                    </span>
                  </div>
                )}
                
                <div className="flex flex-col h-full">
                  <h3 className="h3 mb-3" style={{ color: "var(--tn-text)" }}>
                    {program.title}
                  </h3>
                  
                  <p className="muted mb-4 flex-grow">
                    {program.description}
                  </p>

                  {/* Program Details */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ background: "rgba(136,192,208,0.2)" }}
                      >
                        <svg className="w-3 h-3" style={{ color: "var(--tn-accent)" }} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm" style={{ color: "var(--tn-text)" }}>
                        {program.duration}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div 
                        className="w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ background: "rgba(163,190,140,0.2)" }}
                      >
                        <svg className="w-3 h-3" style={{ color: "var(--tn-accent-2)" }} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm" style={{ color: "var(--tn-text)" }}>
                        {program.timing}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div 
                        className="w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ background: "rgba(136,192,208,0.2)" }}
                      >
                        <svg className="w-3 h-3" style={{ color: "var(--tn-accent)" }} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {program.countries.map((country) => (
                          <span 
                            key={country}
                            className="text-xs px-2 py-1 rounded"
                            style={{
                              background: "rgba(255,255,255,0.05)",
                              border: "1px solid var(--tn-border)",
                              color: "var(--tn-text)"
                            }}
                          >
                            {country}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Key Benefits */}
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2" style={{ color: "var(--tn-text)" }}>
                      Key Benefits:
                    </h4>
                    <ul className="space-y-1.5">
                      {program.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <div 
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ background: "var(--tn-accent)" }}
                          ></div>
                          <span className="muted">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-auto">
                    <Link 
                      href={`/contact?program=${program.id}`}
                      className="btn btn-ghost w-full justify-center"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Additional Info Section */}
      <Section>
        <div className="text-center">
          <Reveal>
            <h2 className="h2 mb-4" style={{ color: "var(--tn-text)" }}>Ready to Start Your Journey?</h2>
          </Reveal>
          <Reveal delay={120} variant="fade">
            <p className="muted mb-6 max-w-2xl mx-auto">
              Each program offers unique advantages. Our expert advisors can help you choose the best path based on your academic goals, financial situation, and career aspirations.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div className="flex justify-center gap-4">
              <Link href="/contact" className="btn btn-primary">
                Schedule Free Consultation
              </Link>
              <Link href="/universities" className="btn btn-ghost">
                Browse Universities
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>
    </div>
  );
}
