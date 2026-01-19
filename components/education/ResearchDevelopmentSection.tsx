"use client";

import { useState, useEffect } from "react";

interface ResearchItem {
  id: string;
  number: string;
  title: string;
  description: string;
  colSpan: string;
  icon: React.ReactNode;
}

export default function EducationResearchDevelopmentSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const research: ResearchItem[] = [
    {
      id: "adaptive-learning",
      number: "01",
      title: "AI-Powered Personalized Learning",
      description: "Intelligent systems that adapt to each student's learning pace and style for optimal outcomes.",
      colSpan: "span-6",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" strokeLinejoin="round" strokeLinecap="round" />
          <circle cx="8" cy="14" r="1" />
          <circle cx="16" cy="14" r="1" />
        </svg>
      )
    },
    {
      id: "microlearning",
      number: "02",
      title: "Microlearning & Nanolearning",
      description: "Bite-sized learning modules for quick skill acquisition and knowledge retention.",
      colSpan: "span-6",
      icon: (
        <svg viewBox="0 0 24 24">
          <rect x="3" y="3" width="7" height="7" strokeLinejoin="round" />
          <rect x="14" y="3" width="7" height="7" strokeLinejoin="round" />
          <rect x="3" y="14" width="7" height="7" strokeLinejoin="round" />
          <rect x="14" y="14" width="7" height="7" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      id: "credentials",
      number: "03",
      title: "Modular Credentials",
      description: "Stackable, industry-recognized credentials that students can earn progressively.",
      colSpan: "span-4",
      icon: (
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="8" r="6" />
          <path d="M12 14v8M8 22l4-2 4 2" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: "vr-learning",
      number: "04",
      title: "VR-Based Immersive Learning",
      description: "Virtual reality experiences that transform how students engage with educational content.",
      colSpan: "span-4",
      icon: (
        <svg viewBox="0 0 24 24">
          <rect x="2" y="7" width="20" height="12" rx="2" strokeLinejoin="round" strokeLinecap="round" />
          <circle cx="8" cy="13" r="2" />
          <circle cx="16" cy="13" r="2" />
          <path d="M10 13h4" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: "analytics",
      number: "05",
      title: "Learning Analytics Platform",
      description: "Data-driven insights to track student progress and optimize educational outcomes.",
      colSpan: "span-4",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M3 3v18h18" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 16l4-4 4 4 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
  ];

  return (
    <section className="defence-research-section-v2">
      <div className="bg-animation">
        <div className="bg-circle"></div>
      </div>

      <div className="defence-research-container-v2">
        <div className="defence-research-header-v2">
          <h2 className="defence-research-title-v2">
            Research & <span className="defence-research-title-highlight-v2">Development</span>
          </h2>
        </div>

        <div className="defence-research-bento-grid">
          {research.map((item) => (
            <div
              key={item.id}
              className={`defence-research-item ${item.colSpan}`}
              style={{ "--accent-color": "#0197ff" } as React.CSSProperties}
            >
              <div className="defence-research-content-wrap">
                <div className="defence-research-number">{item.number}</div>
                <div className="defence-research-icon-box">
                  {item.icon}
                </div>
                <h3 className="defence-research-title-text">{item.title}</h3>
                <p className="defence-research-desc-text">{item.description}</p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
