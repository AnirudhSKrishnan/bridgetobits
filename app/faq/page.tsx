"use client";


import Section from "@/components/section";
import Reveal from "@/components/reveal";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function FAQPage() {
  // AnimatedCounter for stat cards
  function AnimatedCounter({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
    const [count, setCount] = useState(0);
    const frame = useRef<number | null>(null);
    useEffect(() => {
      let start = 0;
      const end = target;
      if (start === end) return;
      let startTime: number | null = null;
      function animateCounter(timestamp: number) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * (end - start) + start));
        if (progress < 1) {
          frame.current = requestAnimationFrame(animateCounter);
        } else {
          setCount(end);
        }
      }
      frame.current = requestAnimationFrame(animateCounter);
      return () => { if (frame.current) cancelAnimationFrame(frame.current); };
    }, [target, duration]);
    return <span>{count}{suffix}</span>;
  }

  return (
    <div className="mt-32 min-h-screen" style={{ background: '#111', color: '#fff', fontFamily: 'Inter, Montserrat, Arial, sans-serif' }}>
      <div className="fixed top-[-16px] left-6 z-50 hidden md:block">
        <Link href="/">
          <Image
            src="/logos/b2b_logo.svg"
            alt="Bridge to BITS Logo"
            width={180}
            height={180}
            className="w-44 h-44 drop-shadow-2xl"
            priority
            style={{ background: '#111', borderRadius: '1.5rem', border: '2px solid #fac203' }}
          />
        </Link>
      </div>
      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="h2 yellow-gradient text-center mb-4" style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 'bold', fontSize: 'clamp(2.2rem, 6vw, 4rem)', lineHeight: 1.08, whiteSpace: 'normal' }}>
            Frequently Asked Questions
          </h1>
          <p className="mb-8 text-lg text-center" style={{ color: '#fff', opacity: 0.85, fontFamily: 'Inter, Montserrat, Arial, sans-serif', fontSize: '1.25rem' }}>
            Find answers to the most common questions about international transfers from BITS. Can't find what you're looking for? Reach out to us!
          </p>
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-8 mb-8">
            <div className="bg-[#181818] rounded-xl shadow-lg px-8 py-6 flex flex-col items-center min-w-[180px] border border-yellow-400">
              <span className="text-5xl font-extrabold mb-2" style={{ color: '#fac203', fontFamily: 'Helvetica, Arial, sans-serif' }}>
                <AnimatedCounter target={5000} suffix="+" duration={1800} />
              </span>
              <span className="text-lg font-semibold" style={{ color: '#fff', opacity: 0.95 }}>Questions Answered</span>
            </div>
            <div className="bg-[#181818] rounded-xl shadow-lg px-8 py-6 flex flex-col items-center min-w-[180px] border border-yellow-400">
              <span className="text-5xl font-extrabold mb-2" style={{ color: '#fac203', fontFamily: 'Helvetica, Arial, sans-serif' }}>
                <AnimatedCounter target={24} suffix="h" duration={1800} />
              </span>
              <span className="text-lg font-semibold" style={{ color: '#fff', opacity: 0.95 }}>Average Response Time</span>
            </div>
            <div className="bg-[#181818] rounded-xl shadow-lg px-8 py-6 flex flex-col items-center min-w-[180px] border border-yellow-400">
              <span className="text-5xl font-extrabold mb-2" style={{ color: '#fac203', fontFamily: 'Helvetica, Arial, sans-serif' }}>
                <AnimatedCounter target={100} suffix="%" duration={1800} />
              </span>
              <span className="text-lg font-semibold" style={{ color: '#fff', opacity: 0.95 }}>Questions Resolved</span>
            </div>
          </div>
          <input
            className="input w-full max-w-md mx-auto border-2 border-yellow-400 bg-black text-white text-center"
            placeholder="Search FAQs..."
            style={{ color: '#fff', background: '#111', borderColor: '#fac203', fontFamily: 'Inter, Montserrat, Arial, sans-serif' }}
            // Optionally, wire up to searchQuery state
          />
        </div>
      </Section>
      <FAQPageContent />
    </div>
  );
}

function FAQPageContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const faqCategories = [
    {
      title: "General Transfer Process",
      questions: [
        {
          id: "transfer-program",
          question: "What is a 2+2 transfer program?",
          answer: "A 2+2 transfer program allows you to complete 2 years at BITS and then transfer to complete your final 2 years at an international university, earning degrees from both institutions."
        },
        {
          id: "start-preparing",
          question: "When should I start preparing for transfers?",
          answer: "It's best to start preparing during your first year at BITS. Early preparation gives you more time to build a strong academic record, gain relevant experience, and prepare required documents."
        },
        {
          id: "gpa-requirement",
          question: "What GPA do I need for transfer?",
          answer: "GPA requirements vary by university and program. Generally, competitive transfers require a GPA of 3.2+ for most universities, with top-tier schools requiring 3.5+ or higher."
        },
        {
          id: "transfer-backlogs",
          question: "Can I transfer with backlogs?",
          answer: "Having backlogs can impact your transfer chances, but it's not impossible. You'll need to clear them before applying and demonstrate strong recent academic performance."
        }
      ]
    },
    {
      title: "Documentation & Applications",
      questions: [
        {
          id: "required-documents",
          question: "What documents do I need for transfer applications?",
          answer: "Key documents include academic transcripts, TOEFL/IELTS scores, letters of recommendation, statement of purpose, resume, and financial documents. Specific requirements vary by university."
        },
        {
          id: "bits-transcript",
          question: "How do I get my BITS transcript?",
          answer: "You can request official transcripts through the BITS student portal or registrar's office. Allow 2-3 weeks for processing, and request multiple copies for different applications."
        },
        {
          id: "sat-requirement",
          question: "Do I need to take SATs for transfers?",
          answer: "Most universities don't require SATs for transfer students, especially if you've completed significant college coursework. However, some competitive programs may still require them."
        },
        {
          id: "recommendation-letters",
          question: "How important are Letters of Recommendation?",
          answer: "LoRs are crucial for transfer applications. Get recommendations from professors who know your work well, preferably in your intended field of study."
        }
      ]
    },
    {
      title: "Credit Transfer & Academics",
      questions: [
        {
          id: "credit-evaluation",
          question: "How many credits typically transfer?",
          answer: "Credit transfer varies by university and program. Typically, 50-70% of your BITS credits may transfer, depending on course equivalencies and the receiving institution's policies."
        },
        {
          id: "gpa-carry",
          question: "Will my BITS GPA carry over?",
          answer: "No, your BITS GPA typically doesn't carry over to the new university. You'll start fresh academically, though your BITS grades are considered during the application process."
        },
        {
          id: "change-major",
          question: "Can I change my major during transfer?",
          answer: "Yes, but it may affect credit transfer and extend your graduation timeline. Some programs are more flexible than others, so research specific requirements."
        },
        {
          id: "course-equivalency",
          question: "What if some courses don't have equivalents?",
          answer: "Universities often have processes for evaluating non-equivalent courses. You may need to provide detailed syllabi or course descriptions for evaluation."
        }
      ]
    },
    {
      title: "Financial & Visa",
      questions: [
        {
          id: "cost-study",
          question: "How much does it cost to study abroad?",
          answer: "Costs vary significantly by country and university. US universities typically range from $30,000-$70,000 per year including living expenses. Australia and Canada are generally more affordable."
        },
        {
          id: "scholarships",
          question: "Are scholarships available for transfer students?",
          answer: "Yes, but they're more limited than for first-year students. Research university-specific scholarships, external scholarships, and consider merit-based aid opportunities."
        },
        {
          id: "visa-need",
          question: "What visa do I need?",
          answer: "You'll need a student visa for the US, study permit for Canada, student visa for Australia/UK. The process varies by country, so start early and consult official embassy websites."
        },
        {
          id: "work-while-studying",
          question: "Can I work while studying?",
          answer: "Most countries allow limited part-time work for international students (typically 20 hours/week during studies). Check specific visa regulations for your destination country."
        }
      ]
    }
  ];

  const stats = [
    { number: "5000+", label: "Questions Answered" },
    { number: "24h", label: "Average Response Time" },
    { number: "100%", label: "Questions Resolved" }
  ];

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => 
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  const toggleQuestion = (questionId: string) => {
    setOpenQuestion(openQuestion === questionId ? null : questionId);
  };


  return (
    <div>
      {/* Remove duplicate hero section here, only render FAQ content below */}

      {/* FAQ Categories */}
      <div className="py-section-sm">
        <div className="container">
          <div className="space-y-8">
            {filteredCategories.map((category, categoryIndex) => (
              <Reveal key={category.title} delay={categoryIndex * 100}>
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <h2 className="text-2xl font-bold mb-4 mt-8 yellow-gradient text-left" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                      {category.title}
                    </h2>
                    <div 
                      className="flex-1 h-px"
                      style={{ background: "var(--tn-border)" }}
                    ></div>
                  </div>
                  
                  <div className="space-y-4">
                    {category.questions.map((faq, index) => (
                      <div 
                        key={faq.id}
                        className={`card cursor-pointer mb-4 bg-[#181818] border border-yellow-400 ${openQuestion === faq.id ? 'shadow-lg' : ''}`}
                        onClick={() => toggleQuestion(faq.id)}
                        style={{ color: '#fff' }}
                      >
                        <div className="flex items-center justify-between">
                          <h3 
                            className="font-semibold pr-4 text-lg"
                            style={{ color: openQuestion === faq.id ? '#fac203' : '#fff', fontFamily: 'Helvetica, Arial, sans-serif' }}
                          >
                            {faq.question}
                          </h3>
                          <svg
                            className={`w-5 h-5 flex-shrink-0 transform transition-transform ${openQuestion === faq.id ? 'rotate-180' : ''}`}
                            style={{ color: openQuestion === faq.id ? '#fac203' : '#fff' }}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                        {openQuestion === faq.id && (
                          <div className="mt-4 pt-4 border-t border-yellow-400" style={{ color: '#fff', opacity: 0.95 }}>
                            <p className="leading-relaxed" style={{ fontFamily: 'Inter, Montserrat, Arial, sans-serif' }}>
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="py-section-sm">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <Reveal>
              <h2 className="h2 yellow-gradient text-center mb-3" style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 'bold', fontSize: '2.2rem' }}>
                Still have questions?
              </h2>
            </Reveal>
            <Reveal delay={120} variant="fade">
              <p className="mb-5 max-w-2xl mx-auto text-lg" style={{ color: '#fff', opacity: 0.85, fontFamily: 'Inter, Montserrat, Arial, sans-serif' }}>
                Can't find the answer you're looking for? Our team is here to help you with personalized guidance for your transfer journey.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="flex justify-center gap-4">
                <a href="/contact" className="btn btn-primary" style={{ background: '#FFD600', color: '#111', border: 'none', fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 'bold' }}>
                  Contact Us
                </a>
                <a href="/stories" className="btn btn-ghost" style={{ color: '#FFD600', borderColor: '#FFD600', fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 'bold' }}>
                  Read Success Stories
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
