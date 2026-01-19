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

export default function ManufacturingResearchDevelopmentSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const research: ResearchItem[] = [
    {
      id: "ar-maintenance",
      number: "01",
      title: "Remote Assistance & AR for Maintenance",
      description: "Augmented reality solutions for guided maintenance, remote troubleshooting, and commissioning.",
      colSpan: "span-6",
      icon: (
        <svg viewBox="0 0 24 24">
          <rect x="2" y="3" width="20" height="14" rx="2" strokeLinejoin="round" strokeLinecap="round" />
          <path d="M8 21h8M12 17v4" strokeLinecap="round" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      )
    },
    {
      id: "supply-chain",
      number: "02",
      title: "Supply Chain Risk & Resilience Analytics",
      description: "Predict disruptions, assess supplier risk, and improve supply chain robustness.",
      colSpan: "span-6",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5z" strokeLinejoin="round" strokeLinecap="round" />
          <path d="M2 17l10 5 10-5" strokeLinejoin="round" strokeLinecap="round" />
          <path d="M2 12l10 5 10-5" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: "quality-management",
      number: "03",
      title: "AI-Driven Quality Management Systems",
      description: "Automated quality control with AI-powered defect detection and process optimization.",
      colSpan: "span-4",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinejoin="round" strokeLinecap="round" />
          <path d="M9 12l2 2 4-4" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: "sustainability",
      number: "04",
      title: "Sustainability & Emissions Intelligence",
      description: "Monitor energy usage, emissions, and carbon metrics to support sustainability goals.",
      colSpan: "span-4",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 2a10 10 0 1 0 10 10" strokeLinejoin="round" strokeLinecap="round" />
          <path d="M12 2v10l6.5-6.5" strokeLinejoin="round" strokeLinecap="round" />
          <path d="M12 12l7 3" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: "automation",
      number: "05",
      title: "Smart Factory Automation",
      description: "End-to-end automation solutions for production lines with real-time monitoring and control.",
      colSpan: "span-4",
      icon: (
        <svg viewBox="0 0 24 24">
          <rect x="3" y="3" width="7" height="7" strokeLinejoin="round" />
          <rect x="14" y="3" width="7" height="7" strokeLinejoin="round" />
          <rect x="3" y="14" width="7" height="7" strokeLinejoin="round" />
          <rect x="14" y="14" width="7" height="7" strokeLinejoin="round" />
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
