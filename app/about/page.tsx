import Section from "@/components/section";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/reveal";

export default function AboutPage() {
  const black = "#111";
  const white = "#fff";
  const yellow = "#fac203";
  const values = [
    {
      icon: "🌍",
      title: "Global Pathways",
      description: "Connecting BITSians to top universities worldwide"
    },
    {
      icon: "📚",
      title: "Guidance",
      description: "Access to study material and guidance for 2+2 examinations at respective universities"
    },
    {
      icon: "💡",
      title: "Expertise",
      description: "Practical tips on academics, applications & visas"
    },
    {
      icon: "💬",
      title: "Counseling",
      description: "Personalized one-on-one sessions to shape your journey"
    },
    {
      icon: "🚀",
      title: "Opportunities",
      description: "Opening doors to internships, careers & international exposure"
    },
    {
      icon: "🤝",
      title: "Alumni Connect",
      description: "Learn directly from seniors who’ve walked the same path"
    },
    {
      icon: "📈",
      title: "Career Growth",
      description: "Guiding you toward better prospects and global opportunities"
    },
    {
      icon: "📝",
      title: "Test Prep",
      description: "Focused support for IELTS, TOEFL, and other English proficiency exams"
    },
    {
      icon: "🎓",
      title: "Smooth Transfers",
      description: "Step-by-step help through the entire application and transfer process"
    }
  ];

  const nextSteps = [
    {
      icon: "🚀",
      title: "Study Programs",
      description: "Adding more universities and transfer pathways",
      link: "/programs"
    },
    {
      icon: "👥",
      title: "Mentorship Program",
      description: "One-on-one guidance from successful transfers",
      link: "/contact"
    },
    {
      icon: "📱",
      title: "Mobile App",
      description: "Access resources on-the-go",
      link: "#"
    }
  ];

  return (
  <div className="mt-32 min-h-screen" style={{ background: black, color: white, fontFamily: 'Inter, Montserrat, Arial, sans-serif' }}>
      <div className="fixed top-[-16px] left-6 z-50 hidden md:block">
        <Link href="/">
          <Image
            src="/logos/b2b_logo.svg"
            alt="Bridge to BITS Logo"
            width={180}
            height={180}
            className="w-44 h-44 drop-shadow-2xl"
            priority
          />
        </Link>
      </div>
      {/* Hero Section */}
  <Section className="home-blackwhite">
        <div className="text-center">
          <Reveal>
            <h1 className="h1 yellow-gradient" style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 'bold' }}>About Bridge to BITS</h1>
          </Reveal>
          <Reveal delay={120} variant="fade">
              <p className="hero-sub mt-14 mb-6 max-w-3xl mx-auto" style={{ color: white, fontSize: '1.2rem' }}>
              Bridge To BITS is a BITSians-led platform that guides aspirants to their dream International destinations through dedicated Counseling and English proficiency preparation.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Our Story Section */}
      <div className="py-section-sm">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <Reveal>
              <div>
                <h2 className="h2 yellow-gradient mb-6" style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 'bold' }}>Our Story</h2>
                
                <div className="space-y-4 leading-relaxed" style={{ color: white, fontFamily: 'Poppins, Arial, sans-serif' }}>
                  <p>
                    Bridge to BITS started as a YouTube channel to spread awareness about the new BITS 2+2 programs, where information was very less and uncertainties were high. What began with sharing knowledge soon grew into a full platform offering 1-on-1 mentorship, counselling, test prep, and alumni guidance. Today with 100+ success stories, we continue to bridge the gap and help students step confidently into global opportunities.
                  </p>
                  <p>
                    At Bridge To BITS, we are dedicated to guiding ambitious students toward a brighter academic future. We provide <strong style={{ color: "var(--tn-accent)" }}>1 to 1 Counseling</strong>, and <strong style={{ color: "var(--tn-accent)" }}>English Proficiency</strong> for the prestigious BITS 2+2 programs , helping students understand every step of the journey from applications to admissions.
                  </p>
                  <p>
                    Our mentorship doesn't stop at counseling. We also prepare students for English proficiency exams such as <strong style={{ color: "var(--tn-accent)" }}>IELTS, PTE and TOEFL</strong> and other English Proficiency exams ensuring they meet International academic requirements with confidence. With a proven track record of <strong style={{ color: "var(--tn-accent)" }}>90% success stories,</strong> our students have consistently achieved exceptional results <strong style={{ color: "var(--tn-accent)" }}>IELTS Band 8+, PTE 90/90 and TOEFL 110+/120.</strong>
                  </p>
                  <p>
                    What sets us apart is our unique blend of experience and empathy. Our team includes <strong style={{ color: "var(--tn-accent)" }}>past aspirants</strong> who have walked the same path, faced the same challenges, and emerged successful. We provide not just resources, but also personalized mentorship that addresses the real struggles students face.
                  </p>
                  
                  <p>
                    At Bridge To BITS, we believe in creating more than just exam ready candidates, we build future-ready individuals. Whether you're preparing for <strong style={{ color: "var(--tn-accent)" }}>BITS 2+2 programs</strong> or aiming for excellence in <strong style={{ color: "var(--tn-accent)" }}>English Proficiency exams</strong>, we're here to make your journey smoother, smarter, and more successfully.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="space-y-6">
                {values.map((value, index) => (
                  <div key={value.title} className="flex items-start gap-4">
                    <div 
                      className="w-12 h-12 flex items-center justify-center text-2xl flex-shrink-0"
                      style={{ color: white, fontWeight: 700, background: 'none' }}
                    >
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1" style={{ color: yellow, fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 'bold' }}>
                        {value.title}
                      </h3>
                      <p style={{ color: white, opacity: 0.85, fontFamily: 'Poppins, Arial, sans-serif' }}>
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="py-section-sm">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8">
            <Reveal>
              <div className="card h-full">
                <h2 className="h3 yellow-gradient mb-4" style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 'bold' }}>Our Mission</h2>
                <p className="leading-relaxed" style={{ color: white, opacity: 0.9, fontFamily: 'Poppins, Arial, sans-serif' }}>
                 Our mission is to guide students through the BITS 2+2 journey with complete end to end mentorship from personalised counselling and 24/7 support to English test preparation, alumni insights, and application guidance. We exist to bridge the information gap, simplify the process, and empower students with the confidence to achieve their global education dreams.


                </p>
              </div>
            </Reveal>
            
            <Reveal delay={120}>
              <div className="card h-full">
                <h2 className="h3 yellow-gradient mb-4" style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 'bold' }}>Our Vision</h2>
                <p className="leading-relaxed" style={{ color: white, opacity: 0.9, fontFamily: 'Poppins, Arial, sans-serif' }}>
                  Our vision is to be the most trusted platform for BITS 2+2 guidance, enabling every aspirant to access world-class education without confusion or barriers. We strive to build a strong community of mentors, alumni, and achievers, ensuring students not only reach international universities but also thrive as confident global leaders.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* User Journey Section */}
      <div className="py-section-sm">
        <div className="container">
          <Reveal>
            <h2 className="h2 yellow-gradient text-center mb-8" style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 'bold' }}>Your Journey with Us</h2>
          </Reveal>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 relative">
            {/* Card 1 */}
            <div className="group relative bg-[#181818] border border-[#333] rounded-xl p-6 w-full md:w-64 text-center shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="text-4xl mb-3" style={{ color: yellow }}>🎥</div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: yellow, fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 'bold' }}>Explore Free Content</h3>
              <p className="mb-2" style={{ color: white, opacity: 0.85, fontFamily: 'Poppins, Arial, sans-serif' }}>Start with our YouTube channel full of free resources and tips.</p>
              <a href="https://www.youtube.com/@BridgeToBITS22" target="_blank" rel="noopener noreferrer" className="underline text-sm" style={{ color: yellow }}>Watch Now</a>
            </div>
            {/* Arrow 1 */}
            <div className="hidden md:block text-3xl text-[var(--tn-accent)]">→</div>
            {/* Card 2 */}
            <div className="group relative bg-[#181818] border border-[#333] rounded-xl p-6 w-full md:w-64 text-center shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="text-4xl mb-3" style={{ color: yellow }}>🌐</div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: yellow, fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 'bold' }}>Discover Your Path</h3>
              <p className="mb-2" style={{ color: white, opacity: 0.85, fontFamily: 'Poppins, Arial, sans-serif' }}>Browse our website to understand your preferences and options.</p>
              <a href="/programs" className="underline text-sm" style={{ color: yellow }}>See Programs</a>
            </div>
            {/* Arrow 2 */}
            <div className="hidden md:block text-3xl text-[var(--tn-accent)]">→</div>
            {/* Card 3 */}
            <div className="group relative bg-[#181818] border border-[#333] rounded-xl p-6 w-full md:w-64 text-center shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="text-4xl mb-3" style={{ color: yellow }}>🎓</div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: yellow, fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 'bold' }}>Enroll in Courses</h3>
              <p className="mb-2" style={{ color: white, opacity: 0.85, fontFamily: 'Poppins, Arial, sans-serif' }}>Join our courses at a student-friendly price for clear guidance and test prep.</p>
              <a href="/contact" className="underline text-sm" style={{ color: yellow }}>Get Started</a>
            </div>
            {/* Arrow 3 */}
            <div className="hidden md:block text-3xl text-[var(--tn-accent)]">→</div>
            {/* Card 4 */}
            <div className="group relative bg-[#181818] border border-[#333] rounded-xl p-6 w-full md:w-64 text-center shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="text-4xl mb-3" style={{ color: yellow }}>💛</div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: yellow, fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 'bold' }}>Join the Community</h3>
              <p className="mb-2" style={{ color: white, opacity: 0.85, fontFamily: 'Poppins, Arial, sans-serif' }}>Try out our free community first and then decide — no worries!</p>
              <a href="https://chat.whatsapp.com/KSJOsC4JbQC7pVKbrqGzLf?mode=ems_copy_t" target="_blank" rel="noopener noreferrer" className="underline text-sm" style={{ color: yellow }}>Join WhatsApp</a>
            </div>
          </div>
          {/* Progress indicator for mobile */}
          <div className="flex md:hidden justify-center mt-4 gap-2">
            <span className="w-3 h-3 rounded-full" style={{ background: yellow, opacity: 0.8 }}></span>
            <span className="w-3 h-3 rounded-full" style={{ background: yellow, opacity: 0.6 }}></span>
            <span className="w-3 h-3 rounded-full" style={{ background: yellow, opacity: 0.4 }}></span>
            <span className="w-3 h-3 rounded-full" style={{ background: yellow, opacity: 0.2 }}></span>
          </div>
          <div className="text-center mt-6 text-sm max-w-2xl mx-auto" style={{ color: white, opacity: 0.7, fontFamily: 'Poppins, Arial, sans-serif' }}>
            We focus on student welfare first—explore, learn, and join us at your own pace. No pressure, just support!
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-section-sm">
        <div className="container">
          <div className="text-center">
            <Reveal>
              <h2 className="h2 yellow-gradient mb-4" style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 'bold' }}>
                Ready to Start Your Journey?
              </h2>
            </Reveal>
            <Reveal delay={120} variant="fade">
              <p className="mb-6 max-w-2xl mx-auto" style={{ color: white, opacity: 0.9, fontFamily: 'Poppins, Arial, sans-serif' }}>
                Join our community of successful BITS transfers and let us guide you through every step of your international education journey.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="flex justify-center gap-4">
                <a href="/programs" className="btn btn-primary" style={{ background: yellow, color: black, border: 'none' }}>
                  Explore Programs
                </a>
                <a href="/contact" className="btn btn-ghost" style={{ color: yellow, borderColor: yellow }}>
                  Get Started
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
