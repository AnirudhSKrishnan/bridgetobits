import Section from "@/components/section";
import Reveal from "@/components/reveal";

export default function AboutPage() {
  const values = [
    {
      icon: "👥",
      title: "Student-Led",
      description: "By students, for students"
    },
    {
      icon: "🎯",
      title: "Focused",
      description: "Specialized in 2+2 & 3+1 programs"
    },
    {
      icon: "💙",
      title: "Community",
      description: "Building a supportive network"
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
    <div>
      {/* Hero Section */}
      <Section>
        <div className="text-center">
          <Reveal>
            <h1 className="h1" style={{ color: "var(--tn-text)" }}>About Bridge to BITS</h1>
          </Reveal>
          <Reveal delay={120} variant="fade">
            <p className="hero-sub mt-3 mb-6 max-w-3xl mx-auto">
              We're a student-led educational platform dedicated to simplifying international transfer programs for BITS students.
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
                <h2 className="h2 mb-6" style={{ color: "var(--tn-text)" }}>Our Story</h2>
                
                <div className="space-y-4 muted leading-relaxed">
                  <p>
                    At Bridge to BITS, we are dedicated to guiding ambitious students toward a brighter academic future. We specialize in counseling for the prestigious BITS 2+2 programs, helping students understand every step of the journey—from applications to admissions.
                  </p>
                  
                  <p>
                    Our mentorship doesn't stop at counseling. We also prepare students for English proficiency exams such as <strong style={{ color: "var(--tn-accent)" }}>IELTS, TOEFL, and PTE</strong>, ensuring they meet international academic requirements with confidence. With a proven track record of <strong style={{ color: "var(--tn-accent)" }}>90% success stories</strong>, our students have consistently achieved exceptional results—IELTS Band 9, PTE 90/90, and TOEFL 120/120.
                  </p>
                  
                  <p>
                    What sets us apart is our unique blend of experience and empathy. Our team includes <strong style={{ color: "var(--tn-accent)" }}>past aspirants</strong> who have walked the same path, faced the same challenges, and emerged successful. We provide not just resources, but also personalized mentorship that addresses the real struggles students face.
                  </p>
                  
                  <p>
                    At Bridge to BITS, we believe in creating more than just exam-ready candidates—we build <strong style={{ color: "var(--tn-accent)" }}>future-ready individuals</strong>. Whether you're preparing for BITS 2+2 programs or aiming for excellence in English proficiency exams, we're here to make your journey smoother, smarter, and more successful.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="space-y-6">
                {values.map((value, index) => (
                  <div key={value.title} className="flex items-start gap-4">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl flex-shrink-0"
                      style={{ background: "rgba(136,192,208,0.2)" }}
                    >
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1" style={{ color: "var(--tn-text)" }}>
                        {value.title}
                      </h3>
                      <p className="muted">
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
                <h2 className="h3 mb-4" style={{ color: "var(--tn-text)" }}>Our Mission</h2>
                <p className="muted leading-relaxed">
                  To democratize access to international education by providing clear, comprehensive, and peer-verified guidance for transfer programs, making the journey less overwhelming for every BITS student.
                </p>
              </div>
            </Reveal>
            
            <Reveal delay={120}>
              <div className="card h-full">
                <h2 className="h3 mb-4" style={{ color: "var(--tn-text)" }}>Our Vision</h2>
                <p className="muted leading-relaxed">
                  To become the go-to platform for Indian students seeking international transfer opportunities, fostering a global community of successful transfers who give back to future generations.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* What's Next Section */}
      <div className="py-section-sm">
        <div className="container">
          <Reveal>
            <h2 className="h2 text-center mb-8" style={{ color: "var(--tn-text)" }}>What's Next?</h2>
          </Reveal>
          
          <div className="grid md:grid-cols-3 gap-6">
            {nextSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 120}>
                <div className="card card-focusable text-center h-full">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto mb-4"
                    style={{ background: "linear-gradient(135deg, var(--tn-accent), var(--tn-accent-2))" }}
                  >
                    {step.icon}
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-3" style={{ color: "var(--tn-text)" }}>
                    {step.title}
                  </h3>
                  
                  <p className="muted mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="mt-auto">
                    <a 
                      href={step.link}
                      className="text-sm font-medium"
                      style={{ color: "var(--tn-accent)" }}
                    >
                      Coming Soon
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-section-sm">
        <div className="container">
          <div className="text-center">
            <Reveal>
              <h2 className="h2 mb-4" style={{ color: "var(--tn-text)" }}>
                Ready to Start Your Journey?
              </h2>
            </Reveal>
            <Reveal delay={120} variant="fade">
              <p className="muted mb-6 max-w-2xl mx-auto">
                Join our community of successful BITS transfers and let us guide you through every step of your international education journey.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="flex justify-center gap-4">
                <a href="/programs" className="btn btn-primary">
                  Explore Programs
                </a>
                <a href="/contact" className="btn btn-ghost">
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
