"use client";


import Section from "@/components/section";
import Reveal from "@/components/reveal";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

// Counter animation component
function AnimatedCounter({ 
  target, 
  suffix = "", 
  duration = 4000,
  delay = 12
}: { 
  target: number; 
  suffix?: string; 
  duration?: number;
  delay?: number;
}) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          
          setTimeout(() => {
            const startTime = Date.now();
            const startValue = 0;
            
            const updateCount = () => {
              const now = Date.now();
              const progress = Math.min((now - startTime) / duration, 1);
              
              // Easing function for smooth animation
              const easeOutQuart = 1 - Math.pow(1 - progress, 4);
              const currentCount = Math.floor(startValue + (target - startValue) * easeOutQuart);
              
              setCount(currentCount);
              
              if (progress < 1) {
                requestAnimationFrame(updateCount);
              } else {
                setCount(target);
              }
            };
            
            requestAnimationFrame(updateCount);
          }, delay);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target, duration, delay, hasStarted]);

  return (
    <div 
      ref={elementRef}
  className="text-4xl md:text-3xl font-bold"
      style={{ color: "var(--tn-text)" }}
    >
      {count}{suffix}
    </div>
  );
}

export default function StoriesPage() {
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
      {/* ...existing code... */}
      <StoriesPageContent />
    </div>
  );
}

function StoriesPageContent() {
  const stats = [
    { number: 1000, suffix: "+", label: "Students Helped" },
    { number: 100, suffix: "+", label: "Joined BITS Pilani" },
    { number: 5, suffix: "+", label: "Partner Universities" },
    { number: 95, suffix: "%", label: "Success Rate" }
  ];

  const stories = [
    {
      id: "01",
      name: "Aditi Pradhan Singh  ",
      program: "BITS-RMIT CSE",
      class: "Class of 2025",
      rating: 5,
      testimonial: "The detailed university guides and application tips were spot-on. I successfully transferred to Imperial College and couldn't be happier with my decision."
    },
    {
      id: "02",
      name: "Khushi Arora",
      program: "BITS-ISU CSE",
      class: "Class of 2025",
      rating: 5,
      testimonial: "The detailed university guides and application tips were spot-on. I successfully transferred to Imperial College and couldn't be happier with my decision."
    },
     {
      id: "03",
      name: "Kush Gupta",
      program: "BITS-ISU CSE",
      class: "Class of 2025",
      rating: 5,
      testimonial: "The detailed university guides and application tips were spot-on. I successfully transferred to Imperial College and couldn't be happier with my decision."
    },
    {
      id: "04",
      name: "Kavish Sethi",
      program: "BITS-RMIT EEE",
      class: "Class of 2025",
      rating: 5,
      testimonial: "B2B was super helpful with updated info & even sorted issues like invalid credentials by directly coordinating with RMIT."
    },
    {
      id: "05",
      name: "Veena Gautam",
      program: "BITS-CSP CSE", 
      class: "Class of 2025",
      rating: 5,
      testimonial: "Super grateful to B2B 2+2 for guiding me through counselling, admissions & cutoffs. Thanks to their timely updates and mentorship, I achieved my dream CS at BITS Pilani!"
    },
    
    {
      id: "06",
      name: "Raghuvir Singh", 
      program: "BITS-UB ECE",
      class: "Class of 2025",
      rating: 5,
      testimonial: "Bridge to BITS provided timely cutoff information, which was extremely helpful since no details were available elsewhere. Their in-depth guides on BITS 2+2 collaborations uploaded for free on YouTube, simplified a process that was otherwise very complex to understand."
    },
    {
      id: "07",
      name: "Vihaan Gehlot",
      program: "BITS-RMIT ECE",
      class: "Class of 2025",
      rating: 5,
      testimonial: "Bridge To BITS provided timely information, regular updates, and cutoff data after each iteration. They shared detailed guides about every BITS 2+2 program, offered 1-on-1 mentorship, and even connected me with seniors and students already studying at the respective foreign universities."
    },
    {
      id: "08",
      name: "Hirak Jyoti Kalita",
      program: "BITS-RMIT ECE",
      class: "Class of 2025", 
      rating: 5,
      testimonial: " B2B cleared all my doubts about RMIT, kept info updated, and even helped with forms, deadlines, and issues from BITS & the university. Super helpful! "
    },
    {
      id: "09",
      name: "Divy Luharuka",
program: "BITS Goa FD Program",
      class: "Class of 2025", 
      rating: 5,
      testimonial: " Super thankful to the B2B team . Got all info about 2+2, FD programs & campuses. Mentors guided me every step (even at 2 AM ). Process was super smooth & I ended up with the best choice "
    },
    {
      id: "10",
      name: "Ayushman Thakur",
      program: "BITS-RMIT Mechanical",
      class: "Class of 2025", 
      rating: 5,
      testimonial: " Thanks to you, Sarthak bhaiya, I’ve reached BITS. If it wasn’t for your support and patience, I really wouldn’t be here. Thank you for reassuring me and clearing my doubts at 2 AM. I’ll forever be grateful to you, Aaryansh bhaiya, Prachi didi, Abhisht bhaiya, and Purab bhaiya — the entire team of Bridge to BITS."

    },
{
      id: "11",
      name: "Tanya ",
      program: "BITS-RMIT EEE",
      class: "Class of 2025", 
      rating: 5,
      testimonial: "Bridge to BITS provided iteration-wise cutoffs, important deadlines, and guided us at every step of the process."

    },
    {
      id: "12",
      name: "Ishan Maurya ",
      program: "BITS-RMIT ECE",
      class: "Class of 2025", 
      rating: 5,
      testimonial: " Bridge to BITS shared timely cutoff info when it wasn’t available anywhere else. Their free YouTube guides simplified the complex 2+2 process, while the WhatsApp community and weekly Google Meets with seniors gave me the right guidance at every stage."

    },
];
const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className="w-4 h-4"
        fill={i < rating ? "currentColor" : "none"}
        stroke="currentColor"
        viewBox="0 0 24 24"
        style={{ color: i < rating ? "#fbbf24" : "#374151" }}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ));
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="py-section-sm" style={{ background: '#111' }}>
        <div className="container">
          <div className="text-center">
            <Reveal>
              <h1 className="h1 yellow-gradient text-center" style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 'bold' }}>Success Stories</h1>
            </Reveal>
            <Reveal delay={120} variant="fade">
              <p className="hero-sub mt-3 mb-4 max-w-3xl mx-auto" style={{ color: '#fff', opacity: 0.85 }}>
                Real stories from aspirants who successfully made it into the BITS 2+2 program through our guidance and support. Let's hear what they have to say about us.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-section-sm">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 120}>
                <div className="space-y-1">
                  <AnimatedCounter
                    target={stat.number}
                    suffix={stat.suffix}
                    duration={2000}
                    delay={index * 200}
                  />
                  <div 
                    className="text-lg font-semibold"
                    style={{ color: '#fac203' }}
                  >
                    {stat.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Stories Grid */}
      <div className="py-section-sm">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {stories.map((story, index) => (
              <Reveal key={story.id} delay={index * 100}>
                <div className="card card-focusable h-full" style={{ background: '#181818', color: '#fff', border: '1.5px solid #333' }}>
                  {/* Story Header */}
                  <div className="flex items-start gap-3 mb-3">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0"
                      style={{ background: '#fff', color: '#111', border: '1.5px solid #fac203' }}
                    >
                      {story.id}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start gap-2">
                        <div className="w-12 h-12 rounded-full bg-white flex-shrink-0 border border-black"></div>
                        <div className="min-w-0">
                          <h3 className="font-semibold text-base" style={{ color: '#fff' }}>
                            {story.name}
                          </h3>
                          <div className="text-sm mb-1" style={{ color: '#fac203' }}>
                            {story.program}
                          </div>
                          <div className="text-xs" style={{ color: '#bbb' }}>
                            {story.class}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Testimonial */}
                  <div className="mb-3">
                    <blockquote 
                      className="text-sm leading-relaxed"
                      style={{ color: '#eee' }}
                    >
                      "{story.testimonial}"
                    </blockquote>
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
              <h2 className="h2 mb-3 yellow-gradient text-center" style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 'bold' }}>
                Ready to Write Your Success Story?
              </h2>
            </Reveal>
            <Reveal delay={120} variant="fade">
              <p className="muted mb-5 max-w-2xl mx-auto">
                Join hundreds of BITS students who have successfully transferred to their dream universities. 
                Start your journey today with personalized guidance and expert support.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="flex justify-center gap-4">
                <a href="/contact" className="btn btn-primary" style={{ background: '#FFD600', color: '#111', border: 'none', fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 'bold' }}>
                  Start Your Journey
                </a>
                <a href="/programs" className="btn btn-ghost" style={{ color: '#FFD600', borderColor: '#FFD600', fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 'bold' }}>
                  Explore Programs
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
