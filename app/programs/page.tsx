import Section from "@/components/section";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/reveal";

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
        "Better job prospect"
      ]
    },
    {
      id: "3+2",
      title: "3+2 Integrated B.E. + MBA", 
      description: "Complete 3 years at BITS, then remaining 2 years at BITSoM",
      duration: "3 years at BITS + 2 years at BITSoM",
      timing: "After 6th semester at BITS",
      countries: ["India , Mumbai Campus"],
      benefits: [
        "Shorter degree duration",
        "Lower overall cost",
        "Specialized final two years",
        "Seamless blend of technology and management skills."
      ]
    }
  ];

  return (
  <div className="mt-20 sm:mt-32 min-h-screen px-4 sm:px-6" style={{ background: '#111', color: '#fff', fontFamily: 'Inter, Montserrat, Arial, sans-serif' }}>
      <div className="fixed top-[-16px] left-4 sm:left-6 z-50 hidden md:block">
        <Link href="/">
          <Image
            src="/logos/b2b_logo.svg"
            alt="Bridge to BITS Logo"
            width={180}
            height={180}
            className="w-32 h-32 sm:w-44 sm:h-44 drop-shadow-2xl"
            priority
          />
        </Link>
      </div>
      {/* Hero Section */}
      <Section>
        <div className="text-center">
          <Reveal>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold yellow-gradient mb-4" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
              Transfer Programs
            </h1>
          </Reveal>
          <Reveal delay={120} variant="fade">
            <p className="text-base sm:text-lg lg:text-xl mt-4 sm:mt-8 mb-4 sm:mb-6 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, Montserrat, Arial, sans-serif', color: '#fff' }}>
              Explore diverse transfer programs at BITS, designed to match your goals and timeline, 
              both programs offer cost-effective, flexible, and career-focused opportunities.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Programs Grid */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <Reveal key={program.id} delay={index * 120}>
              <div className="card card-focusable h-full relative p-4 sm:p-6" style={{ background: '#181818', border: '1.5px solid #333' }}>
                {program.badge && (
                  <div className="absolute -top-3 left-4 sm:left-6">
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
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3" style={{ color: '#fac203', fontFamily: 'Helvetica, Arial, sans-serif' }}>
                    {program.title}
                  </h3>
                  
                  <p className="mb-4 flex-grow text-sm sm:text-base leading-relaxed" style={{ color: '#fff', fontFamily: 'Inter, Montserrat, Arial, sans-serif', opacity: 0.85 }}>
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
                    <h4 className="font-semibold mb-2" style={{ color: '#fac203', fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 'bold' }}>
                      Key Benefits:
                    </h4>
                    <ul className="space-y-1.5">
                      {program.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <div 
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ background: "var(--tn-accent)" }}
                          ></div>
                          <span style={{ color: '#fff', fontFamily: 'Inter, Montserrat, Arial, sans-serif', opacity: 0.85 }}>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-auto flex flex-col gap-2">
                    {program.id === "3+2" ? (
                      <>
                        <Link 
                          href="https://www.youtube.com/watch?v=cBdndQ-FkCw&list=PLoBCRIeHc-vsjNQradLECiqcb3X-rlUZ4"
                          className="btn btn-ghost w-full justify-center"
                        >
                          Learn More(3+2)
                        </Link>
                      
                      </>
                    ) : (
                      <Link 
                        href="https://www.youtube.com/playlist?list=PLoBCRIeHc-vuiKr8gk5JwZpvFylh64JqS"
                        className="btn btn-ghost w-full justify-center"
                      >
                        Learn More (2+2)
                      </Link>
                    )}
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
            <h2 className="h2 yellow-gradient mb-4" style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 'bold' }}>Ready to Start Your Journey?</h2>
          </Reveal>
          <Reveal delay={120} variant="fade">
            <p className="mb-6 max-w-2xl mx-auto" style={{ color: '#fff', fontFamily: 'Inter, Montserrat, Arial, sans-serif', opacity: 0.9 }}>
              Each program comes with its own set of advantages, and you don’t have to figure it out alone. A dedicated team of 2+2 BITSians  who’ve already gone through the journey and experienced it firsthand will guide you. They’ll help you choose the path that best fits your academic goals, financial plans, and career aspirations.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div className="flex justify-center gap-4">
              <Link href="/contact" className="btn" style={{ background: '#fac203', color: '#111', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', fontWeight: '600' }}>
                Schedule Free Consultation
              </Link>
              <Link href="/universities" className="btn" style={{ border: '1px solid #fac203', color: '#fac203', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', fontWeight: '600' }}>
                Browse Universities
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>
    </div>
  );
}
