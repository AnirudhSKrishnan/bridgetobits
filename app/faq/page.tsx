"use client";

import Section from "@/components/section";
import Reveal from "@/components/reveal";
import { useState } from "react";

export default function FAQPage() {
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
    { number: "50+", label: "Questions Answered" },
    { number: "24h", label: "Average Response Time" },
    { number: "95%", label: "Questions Resolved" }
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
      {/* Hero Section */}
      <Section>
        <div className="text-center">
          <Reveal>
            <h1 className="h1" style={{ color: "var(--tn-text)" }}>Frequently Asked Questions</h1>
          </Reveal>
          <Reveal delay={120} variant="fade">
            <p className="hero-sub mt-3 mb-6 max-w-3xl mx-auto">
              Find answers to the most common questions about international transfers from BITS. Can't find what you're looking for? Reach out to us!
            </p>
          </Reveal>
          
          {/* Search Bar */}
          <Reveal delay={180}>
            <div className="max-w-md mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="input w-full pl-10"
                />
                <svg 
                  className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2"
                  style={{ color: "var(--tn-muted)" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* FAQ Categories */}
      <div className="py-section-sm">
        <div className="container">
          <div className="space-y-8">
            {filteredCategories.map((category, categoryIndex) => (
              <Reveal key={category.title} delay={categoryIndex * 100}>
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <h2 className="h3" style={{ color: "var(--tn-text)" }}>
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
                        className="card cursor-pointer"
                        onClick={() => toggleQuestion(faq.id)}
                      >
                        <div className="flex items-center justify-between">
                          <h3 
                            className="font-medium pr-4"
                            style={{ color: "var(--tn-text)" }}
                          >
                            {faq.question}
                          </h3>
                          <svg
                            className={`w-5 h-5 flex-shrink-0 transform transition-transform ${
                              openQuestion === faq.id ? 'rotate-180' : ''
                            }`}
                            style={{ color: "var(--tn-muted)" }}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                        
                        {openQuestion === faq.id && (
                          <div className="mt-4 pt-4" style={{ borderTop: "1px solid var(--tn-border)" }}>
                            <p className="muted leading-relaxed">
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

      {/* Stats Section */}
      <div className="py-section-sm">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 120}>
                <div className="space-y-1">
                  <div 
                    className="text-4xl font-bold"
                    style={{ color: "var(--tn-text)" }}
                  >
                    {stat.number}
                  </div>
                  <div 
                    className="text-base"
                    style={{ color: "var(--tn-accent)" }}
                  >
                    {stat.label}
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
          <div className="text-center">
            <Reveal>
              <h2 className="h2 mb-3" style={{ color: "var(--tn-text)" }}>
                Still have questions?
              </h2>
            </Reveal>
            <Reveal delay={120} variant="fade">
              <p className="muted mb-5 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Our team is here to help you with personalized guidance for your transfer journey.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="flex justify-center gap-4">
                <a href="/contact" className="btn btn-primary">
                  Contact Us
                </a>
                <a href="/stories" className="btn btn-ghost">
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
