"use client";

import Section from "@/components/section";
import Reveal from "@/components/reveal";
import { useEffect, useState, useRef } from "react";

// Counter animation component
function AnimatedCounter({ 
  target, 
  suffix = "", 
  duration = 2000,
  delay = 0 
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
      className="text-5xl font-bold"
      style={{ color: "var(--tn-text)" }}
    >
      {count}{suffix}
    </div>
  );
}

export default function StoriesPage() {
  const stats = [
    { number: 500, suffix: "+", label: "Students Helped" },
    { number: 50, suffix: "+", label: "Partner Universities" },
    { number: 95, suffix: "%", label: "Success Rate" }
  ];

  const stories = [
    {
      id: "01",
      name: "Arjun Sharma",
      program: "2+2 to UC Berkeley",
      class: "Class of 2023",
      rating: 5,
      testimonial: "Bridge to BITS made my transfer journey so much easier. The step-by-step guides and peer support were invaluable. I'm now studying Computer Science at UC Berkeley!"
    },
    {
      id: "02", 
      name: "Priya Patel",
      program: "3+1 to University of Toronto",
      class: "Class of 2023",
      rating: 5,
      testimonial: "The documentation checklist and deadline tracker saved me from missing important dates. The community support was amazing throughout the process."
    },
    {
      id: "03",
      name: "Rohit Kumar", 
      program: "2+2 to University of Melbourne",
      class: "Class of 2022",
      rating: 5,
      testimonial: "I was completely lost about the transfer process until I found Bridge to BITS. Their YouTube videos and resources made everything clear and achievable."
    },
    {
      id: "04",
      name: "Sneha Reddy",
      program: "Direct Transfer to NYU", 
      class: "Class of 2023",
      rating: 5,
      testimonial: "The personalized guidance and real experiences shared by the team helped me make informed decisions. Now I'm pursuing my dream at NYU!"
    },
    {
      id: "05",
      name: "Vikram Singh",
      program: "2+2 to University of Waterloo",
      class: "Class of 2022", 
      rating: 5,
      testimonial: "Bridge to BITS doesn't just provide information - they provide hope and confidence. The peer network is incredibly supportive and knowledgeable."
    },
    {
      id: "06",
      name: "Ananya Gupta",
      program: "3+1 to Imperial College London",
      class: "Class of 2023",
      rating: 5,
      testimonial: "The detailed university guides and application tips were spot-on. I successfully transferred to Imperial College and couldn't be happier with my decision."
    }
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
      <div className="py-section-sm">
        <div className="container">
          <div className="text-center">
            <Reveal>
              <h1 className="h1" style={{ color: "var(--tn-text)" }}>Success Stories</h1>
            </Reveal>
            <Reveal delay={120} variant="fade">
              <p className="hero-sub mt-3 mb-4 max-w-3xl mx-auto">
                Real stories from BITS students who successfully transferred to their dream universities through our guidance and support.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-section-sm">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
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
                    className="text-lg"
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

      {/* Stories Grid */}
      <div className="py-section-sm">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {stories.map((story, index) => (
              <Reveal key={story.id} delay={index * 100}>
                <div className="card card-focusable h-full">
                  {/* Story Header */}
                  <div className="flex items-start gap-3 mb-3">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0"
                      style={{ 
                        background: "linear-gradient(135deg, var(--tn-accent), var(--tn-accent-2))",
                        color: "#0d1726"
                      }}
                    >
                      {story.id}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start gap-2">
                        <div className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0"></div>
                        <div className="min-w-0">
                          <h3 className="font-semibold text-base" style={{ color: "var(--tn-text)" }}>
                            {story.name}
                          </h3>
                          <div className="text-sm mb-1" style={{ color: "var(--tn-accent)" }}>
                            {story.program}
                          </div>
                          <div className="text-xs" style={{ color: "var(--tn-muted)" }}>
                            {story.class}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">
                      {renderStars(story.rating)}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="mb-3">
                    <blockquote 
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--tn-muted)" }}
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
              <h2 className="h2 mb-3" style={{ color: "var(--tn-text)" }}>
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
                <a href="/contact" className="btn btn-primary">
                  Start Your Journey
                </a>
                <a href="/programs" className="btn btn-ghost">
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
