'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
const industries = [
  "Defense",
  "Healthcare",
  "Education",
  "Fintech",
  "Manufacturing",
  "Media & Entertainment"
];

export default function HeroSection() {
    const router = useRouter();
  const [currentIndustry, setCurrentIndustry] = useState(0);
  const [particles, setParticles] = useState<Array<{ id: number, x: number, y: number, delay: number, duration: number }>>([]);

  const getIndustryClass = (index: number) => {
    const totalIndustries = industries.length;
    if (totalIndustries === 0) return 'next';
    const distance = (index - currentIndustry + totalIndustries) % totalIndustries;
    if (distance === 0) return 'active';
    return distance === totalIndustries - 1 ? 'prev' : 'next';
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndustry((prev) => (prev + 1) % industries.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Generate floating particles
  useEffect(() => {
    const particleArray = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 15 + Math.random() * 10
    }));
    setParticles(particleArray);
  }, []);

  return (
    <section className="sol9x-hero">
      {/* Animated Particles Background */}
      <div className="sol9x-hero-particles">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="sol9x-hero-particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }}
          />
        ))}
      </div>

      {/* Background Gradient */}
      <div className="sol9x-hero-gradient"></div>

      {/* Animated Blue Ring */}
      <div className="sol9x-hero-ring"></div>

      {/* Content */}
      <div className="sol9x-hero-container relative z-20">

        {/* Premium Badge */}
        <div className="sol9x-hero-badge">
          <div className="sol9x-hero-badge-dot"></div>
          <span className="sol9x-hero-badge-text">
            Growth Drivers of the Nation by The Times of India
          </span>
        </div>

        {/* Main Content */}
        <div className="sol9x-hero-content">

          <div className="sol9x-hero-headlines">
            <div className="sol9x-hero-headline-wrapper">
              <h1 className="sol9x-hero-headline">
                Build Sustainable Secure
                AI Solutions for
              </h1>

              <div className="sol9x-hero-industry-container">
                {industries.map((industry, index) => (
                  <div
                    key={industry}
                    className={`sol9x-hero-industry-item ${getIndustryClass(index)}`}
                  >
                    <span className="sol9x-hero-industry-text">
                      <span className="sol9x-hero-industry-text-gradient">{industry}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <p className="sol9x-hero-description">
              Intelligent systems and secure infrastructure that accelerate

              operations, reduce costs, and eliminate manual workloads.
            </p>
          </div>

          <div className="sol9x-hero-cta">
            <button className="sol9x-hero-btn-primary" >
              <span className="sol9x-hero-btn-text" onClick={() =>router.push("/contact-us")}>Book Consultation</span>
              <svg className="sol9x-hero-btn-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button> 
            <button className="sol9x-hero-btn-secondary">
              <span className="sol9x-hero-btn-text">Our Products</span>
              <svg className="sol9x-hero-btn-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 3V8M8 8V13M8 8H13M8 8H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
