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

export default function MediaEntertainmentResearchDevelopmentSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const research: ResearchItem[] = [
    {
      id: "deepfake",
      number: "01",
      title: "Advanced Deepfake Detection",
      description: "Sophisticated AI-based systems detecting manipulated media and authenticating genuine content.",
      colSpan: "span-6",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinejoin="round" strokeLinecap="round" />
          <path d="M9 12l2 2 4-4" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: "cinematic",
      number: "02",
      title: "Autonomous Cinematic Systems",
      description: "Self-piloting drones and robotic rigs creating cinematic footage with minimal human intervention.",
      colSpan: "span-6",
      icon: (
        <svg viewBox="0 0 24 24">
          <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
          <polyline points="17 2 12 7 7 2" />
        </svg>
      )
    },
    {
      id: "motion-capture",
      number: "03",
      title: "Performance Capture & Motion Synthesis",
      description: "Real-time motion capture and AI-driven synthesis for realistic character animation.",
      colSpan: "span-4",
      icon: (
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="5" r="3" />
          <line x1="12" y1="8" x2="12" y2="14" />
          <path d="M6 14l6 3 6-3" strokeLinejoin="round" strokeLinecap="round" />
          <line x1="12" y1="17" x2="12" y2="22" />
          <line x1="9" y1="22" x2="15" y2="22" />
        </svg>
      )
    },
    {
      id: "ai-storytelling",
      number: "04",
      title: "AI-Powered Story Generation",
      description: "Intelligent systems that assist in narrative development and creative content creation.",
      colSpan: "span-4",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" strokeLinejoin="round" strokeLinecap="round" />
          <circle cx="8" cy="14" r="1" />
          <circle cx="16" cy="14" r="1" />
        </svg>
      )
    },
    {
      id: "synthetic-talent",
      number: "05",
      title: "3D Synthetic Characters",
      description: "Virtual talent and humanoid robots for innovative and immersive entertainment experiences.",
      colSpan: "span-4",
      icon: (
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="8" r="4" />
          <path d="M20 21a8 8 0 1 0-16 0" strokeLinejoin="round" strokeLinecap="round" />
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
