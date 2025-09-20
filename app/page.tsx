import "../app/marquee.css";
import Link from "next/link";
import Image from "next/image";
import Section from "@/components/section";
import FeatureCard from "@/components/feature-card";
import Reveal from "@/components/reveal";

export default function HomePage() {
  // Theme colors
  const black = "#111";
  const white = "#fff";
  const yellow = "#fac203";
  const yellowGrad = "linear-gradient(90deg, #fac203 0%, #fffbe6 100%)";
  const testimonials = [
    { name: "A.S.", text: "Clear guidance and practical tips—exactly what I needed." },
    { name: "P.P.", text: "Made the process simple and stress-free." },
    { name: "R.K.", text: "Actionable advice that actually works." },
    { name: "T.M.", text: "Great clarity on timelines and paperwork." },
    { name: "S.K.", text: "The university shortlist was spot-on." },
  ];
  const loop = [...testimonials, ...testimonials];

  return (
  <div className="pt-16 sm:pt-24 min-h-screen px-4 sm:px-6" style={{ background: black, color: white, fontFamily: 'Inter, Montserrat, Arial, sans-serif' }}>
      {/* B2B Logo on the leftmost side, only for home page */}
      <div className="fixed top-[-16px] left-4 sm:left-6 z-50 hidden md:block">
        <Link href="/">
          <Image
            src="/logos/b2b_logo.svg"
            alt="Bridge to BITS Logo"
            width={180}
            height={180}
            className="w-44 h-44 drop-shadow-2xl"
            priority
            style={{ background: black, borderRadius: '1.5rem', border: `2px solid ${yellow}` }}
          />
        </Link>
      </div>
      {/* HERO */}
  <Section className="relative home-blackwhite">
        <div className="text-center space-y-2 md:space-y-3">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1 text-sm border-2 font-semibold"
            style={{ borderColor: yellow, background: black, color: yellow, borderWidth: 2, borderStyle: 'solid' }}
          >
            <span>🎓 Trusted by BITSians</span>
          </div>

          {/* SEO/AT-friendly real heading (hidden visually) */}
          <h1 className="sr-only">Your bridge to International education</h1>

          {/* Gradient-only ripple headline using clipPath */}
          <svg
            className="heroClip"
            viewBox="0 0 1600 430"
            role="img"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              {/* flowing yellow gradient for 'International' */}
              <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fac203" />
                <stop offset="100%" stopColor="#fffbe6" />
              </linearGradient>
              {/* white gradient for other text */}
              <linearGradient id="heroWhite" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fff" />
                <stop offset="100%" stopColor="#fff" />
              </linearGradient>

              {/* Water ripple filter */}
              <filter id="hero-water" x="0%" y="0%" width="100%" height="100%">
                <feTurbulence baseFrequency="0.02 0.06" numOctaves="3" result="noise">
                  <animate attributeName="baseFrequency" values="0.018 0.05;0.028 0.08;0.018 0.05" dur="4s" repeatCount="indefinite" />
                </feTurbulence>
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="10">
                  <animate attributeName="scale" values="9;12;9" dur="5s" repeatCount="indefinite" />
                </feDisplacementMap>
              </filter>

              {/* IMPORTANT: user space units so text coords match the viewBox */}
              <clipPath id="heroClipPath" clipPathUnits="userSpaceOnUse">
                <text
                  x="50%"
                  y="120"
                  textAnchor="middle"
                  className="heroClip__text"
                  fill="url(#heroWhite)"
                >
                  Your bridge to
                </text>
                <text
                  x="50%"
                  y="240"
                  textAnchor="middle"
                  className="heroClip__text"
                  fill="url(#heroGrad)"
                >
                  International
                </text>
                <text
                  x="50%"
                  y="360"
                  textAnchor="middle"
                  className="heroClip__text"
                  fill="url(#heroWhite)"
                >
                  education
                </text>
              </clipPath>
            </defs>

            {/* Apply gradients to each text part using separate text elements */}
            <g>
              <text
                x="50%"
                y="120"
                textAnchor="middle"
                className="heroClip__text"
                fill="url(#heroWhite)"
              >
                Your Bridge to
              </text>
              <text
                x="50%"
                y="240"
                textAnchor="middle"
                className="heroClip__text yellow-gradient"
                fill="url(#heroGrad)"
              >
                International
              </text>
              <text
                x="50%"
                y="360"
                textAnchor="middle"
                className="heroClip__text"
                fill="url(#heroWhite)"
              >
                Education
              </text>
            </g>
          </svg>

          <p className="hero-sub">
            Navigate 2+2 and 3+2 transfer programs with confidence. Get expert guidance,
            peer support, and exclusive resources designed specifically for BITS students.
          </p>

          <div className="flex justify-center gap-3">
            <Link href="/universities" className="btn btn-primary btn-hero" style={{ background: '#FFD600', color: '#111', border: 'none' }}>Get Started Free</Link>
            <Link href="/contact" className="btn btn-ghost btn-hero" style={{ color: '#FFD600', borderColor: '#FFD600' }}>Watch Videos</Link>
          </div>
        </div>
      </Section>

      {/* FEATURES */}
  <Section className="home-blackwhite">
        <div className="text-center mb-12">
          <Reveal>
            <h2 className="h2 yellow-text" style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 'bold' }}>Everything You Need to Succeed</h2>
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
              icon: "🎥",
              title: "Comprehensive Video Guides",
              desc: "Step-by-step video tutorials covering every aspect of the transfer process from application to visa."
            },
            {
              icon: "📥",
              title: "Downloadable Resources",
              desc: "Checklists, templates, and guides you can download and access throughout your journey."
            },
            {
              icon: "🗓️",
              title: "Timeline Planning",
              desc: "Detailed timelines and deadline trackers to ensure you never miss important dates."
            },
            {
              icon: "👥",
              title: "Peer Community",
              desc: "Connect with fellow BITS students who are going through or have completed the transfer process."
            },
            
            {
              icon: "🏫",
              title: "University Database",
              desc: "Comprehensive database of partner universities with detailed requirements and program overviews across 15 countries."
            },
            {
              icon: "👨🏻‍💻",
              title: "Expert Support",
              desc: "Get your questions answered by our experienced team and successful students who have successfully transferred before."
            },
            {
              icon: "🗓️",
              title: "Success Tracking",
              desc: "Track your progress with personalized recommendations based on your profile and goals."
            },
            {
              icon: "📚",
              title: "BITS-Specific Content",
              desc: "Content tailored specifically for BITS students, including credit mappings and course equivalencies."
              },
          ].map((feature, i) => (
            <Reveal key={feature.title} delay={60 * i}>
              <div className="card card-focusable text-center p-6 w-64 h-64 flex flex-col justify-between" style={{ background: '#181818', border: `1.5px solid #333` }}>
                <div 
                  className="w-20 h-20 mx-auto mb-4 rounded-lg flex items-center justify-center border border-black"
                  style={{ background: 'transparent', color: '#111', fontWeight: 700 }}
                >
                  <span style={{ fontSize: '2.5rem', lineHeight: 1 }}>{feature.icon}</span>
                </div>
                <h3 className="font-semibold text-lg mb-3" style={{ color: yellow, fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 'bold' }}>
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: white, opacity: 0.85 }}>
                  {feature.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
      <Section className="home-blackwhite">
        <div className="text-center mb-12">
          <Reveal>
            <h2 className="h2 yellow-text" style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 'bold' }}>Why Choose Bridge to BITS?</h2>
          </Reveal>
          <Reveal delay={120} variant="fade">
            <p className="muted mt-2 max-w-2xl mx-auto">
              We understand the unique challenges BITS students face when transferring internationally. 
              Our platform is designed to address these challenges with tailored resources and support.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: "🎓",
              title: "BITSians-Led Platform",
              desc: "Founded and run by BITS alumni who have successfully navigated the transfer process themselves."
            },
            {
              icon: "🌐",
              title: "Global University Partnerships",
              desc: "Access to a wide network of top universities worldwide through exclusive partnerships."
            },
            {
              icon: "📝",
              title: "Personalized Guidance",
              desc: "Receive one-on-one support tailored to your academic background and goals."
            },
            {
              icon: "💡",
              title: "Proven Strategies",
              desc: "Benefit from strategies and tips that have helped hundreds of BITSians transfer successfully."
            }
          ].map((feature, i) => (
            <Reveal key={feature.title} delay={60 * i}>
              <div className="card card-focusable text-center p-6 w-64 h-64 flex flex-col justify-between" style={{ background: '#181818', border: `1.5px solid #333` }}>
                <div 
                  className="w-20 h-20 mx-auto mb-4 rounded-lg flex items-center justify-center border border-black"
                  style={{ background: 'transparent', color: '#111', fontWeight: 700 }}
                >
                  <span style={{ fontSize: '2.5rem', lineHeight: 1 }}>{feature.icon}</span>
                </div>
                <h3 className="font-semibold text-lg mb-3" style={{ color: yellow, fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 'bold' }}>
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: white, opacity: 0.85 }}>
                  {feature.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS — marquee */}
  <Section className="home-blackwhite">
        <div className="text-center">

          <Reveal>
            <h2 className="h2 yellow-gradient" style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 'bold' }}>Study at your dream university</h2>
          </Reveal>
          <Reveal delay={120} variant="fade">
            <p className="muted mt-2 mb-large" style={{ fontSize: '1.35rem', lineHeight: 1.6, color: '#fff' }}>
              BITS 2+2 has forged some of the finest global collaborations, with our students successfully continuing their studies at world-class universities through these pathways.
            </p>
          </Reveal>

          <Reveal delay={180} variant="scale">
            <div className="py-6">
              <div className="flex flex-wrap justify-center gap-12 items-center" style={{ minHeight: 128 }}>
                {/* University logos, no animation */}
                {[
                  '/logos/rmit.svg',
                  '/logos/ub.svg',
                  '/logos/rpi.svg',
                  '/logos/usc.svg',
                  '/logos/isu.svg',
                  '/logos/csp_logo.svg',
                  '/logos/bitsom.png',
                ].map((src, i) => (
                  <div key={src + i} className="flex items-center justify-center h-44 w-72 p-2 mx-6">
                    <Image src={src} alt="University logo" width={320} height={180} className="object-contain h-40 w-auto" />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-large">
              <Link href="/contact" className="btn btn-primary" style={{ background: '#FFD600', color: '#111', border: 'none' }}>Book a free call</Link>
            </div>
          </Reveal>
        </div>
      </Section>
    </div>
  );
}

