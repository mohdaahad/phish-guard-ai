"use client";

import Link from "next/link"
import { useState, useEffect } from "react"

interface Industry {
  id: string;
  number: string;
  name: string;
  description: string;
  accentColor: string;
  colSpan: string;
  href: string;
  icon: React.ReactNode;
}

export default function IndustriesSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const industries: Industry[] = [
    {
      id: "defence",
      number: "01",
      name: "Defence",
      description: "Advanced defense technologies and strategic solutions ensuring national security through innovation",
      accentColor: "#0197ff",
      colSpan: "span-6",
      href: "/defence",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 2L4 6v4c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V6l-8-4z" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: "manufacturing",
      number: "02",
      name: "Manufacturing",
      description: "Smart manufacturing ecosystems leveraging IoT, AI, and automation for Industry 4.0 transformation",
      accentColor: "#0197ff",
      colSpan: "span-6",
      href: "/manufacturing",
      icon: (
        <svg viewBox="0 0 24 24">
          <rect x="2" y="3" width="20" height="14" rx="2" strokeLinejoin="round" strokeLinecap="round" />
          <path d="M8 21h8M12 17v4" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: "education",
      number: "03",
      name: "Education",
      description: "Next-gen learning platforms revolutionizing education delivery through personalized technology",
      accentColor: "#0197ff",
      colSpan: "span-4",
      href: "/education",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" strokeLinejoin="round" strokeLinecap="round" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: "fintech",
      number: "04",
      name: "Fintech",
      description: "Revolutionary financial technology enabling secure digital transactions and financial inclusion",
      accentColor: "#0197ff",
      colSpan: "span-4",
      href: "/fintech",
      icon: (
        <svg viewBox="0 0 24 24">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2" strokeLinejoin="round" strokeLinecap="round" />
          <line x1="1" y1="10" x2="23" y2="10" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: "healthcare",
      number: "05",
      name: "Healthcare",
      description: "Innovative health systems improving patient outcomes globally with predictive diagnostics",
      accentColor: "#0197ff",
      colSpan: "span-4",
      href: "/healthcare",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: "media",
      number: "06",
      name: "Media & Entertainment",
      description: "Immersive content platforms and streaming solutions captivating modern audiences worldwide",
      accentColor: "#0197ff",
      colSpan: "span-6",
      href: "/media-entertainment",
      icon: (
        <svg viewBox="0 0 24 24">
          <polygon points="5 3 19 12 5 21 5 3" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: "cybersecurity",
      number: "07",
      name: "Cybersecurity",
      description: "Comprehensive security frameworks safeguarding critical digital infrastructure and enterprise assets",
      accentColor: "#0197ff",
      colSpan: "span-6",
      href: "/cybersecurity",
      icon: (
        <svg viewBox="0 0 24 24">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" strokeLinejoin="round" strokeLinecap="round" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  ];

  return (
    <section className="industries-section">
      <div className="bg-animation">
        <div className="bg-circle"></div>
      </div>

      <div className="sol9x-industries-container">
        <div className="sol9x-industries-header">
          <h2 className="sol9x-industries-title">
            Industries We <span className="sol9x-industries-title-highlight">Empower</span>
          </h2>
        </div>

        <div className="industries-bento-grid">
          {industries.map((industry) => (
            <Link
              key={industry.id}
              href={industry.href}
              className={`industry-item ${industry.colSpan}`}
              style={{ "--accent-color": industry.accentColor } as React.CSSProperties}
            >
              <div className="industry-content-wrap">
                <div className="industry-number">{industry.number}</div>
                <div className="industry-icon-box">
                  {industry.icon}
                </div>
                <h3 className="industry-title-text">{industry.name}</h3>
                <p className="industry-desc-text">{industry.description}</p>
                <span className="industry-action-link">Explore solutions</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
