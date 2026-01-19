"use client"

import { useRouter } from "next/navigation";

export default function EducationHeroSection() {
    const router = useRouter();
    return (
    <section className="sol9x-hero">
      {/* Background Gradient */}
      <div className="sol9x-hero-gradient"></div>

      {/* Animated Blue Ring */}
      <div className="sol9x-hero-ring"></div>

      <div className="sol9x-hero-container">
        {/* Badge */}
        <div className="sol9x-hero-badge">
          <div className="sol9x-hero-badge-dot"></div>
          <span className="sol9x-hero-badge-text">GROWTH DRIVERS BY THE TIMES OF INDIA</span>
        </div>

        {/* Main Content */}
        <div className="sol9x-hero-content">
          {/* Headlines */}
          <div className="sol9x-hero-headlines">
            <div className="">
              {/* Main Headline */}
              <h1 className="sol9x-hero-headline">
                Advanced Education <br />
                Technologies for the <br />
                <span className="sol9x-hero-industry-text">Future of Learning</span>
              </h1>
            </div>

            {/* Description */}
            <p className="sol9x-hero-description">
              Sol9X builds intelligent education systems that enhance learning outcomes, improve assessments, and
              modernize institutions using AI, immersive technology, and automation.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="sol9x-hero-cta">
            <button className="sol9x-hero-btn-primary" onClick={() => router.push("/contact-us")}>
              <span>Book Consultation</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="sol9x-hero-btn-secondary" onClick={() => router.push("/contact-us")}>
              <span>Explore Solutions</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 3V13M3 8H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
