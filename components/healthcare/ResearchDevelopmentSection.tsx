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

export default function HealthcareResearchDevelopmentSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const research: ResearchItem[] = [
    {
      id: "cardiovascular",
      number: "01",
      title: "AI for Cardiovascular Risk Prediction",
      description: "Advanced AI models predicting cardiovascular risks and enabling preventive care strategies.",
      colSpan: "span-6",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: "imaging-ai",
      number: "02",
      title: "Imaging AI for Disease Detection",
      description: "Deep learning algorithms detecting cancer, lung, and heart diseases in medical images.",
      colSpan: "span-6",
      icon: (
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" strokeLinecap="round" />
          <line x1="12" y1="16" x2="12.01" y2="16" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: "remote-monitoring",
      number: "03",
      title: "Remote Patient Monitoring",
      description: "Real-time monitoring platforms predicting patient deterioration and enabling early intervention.",
      colSpan: "span-4",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      id: "clinical-decision",
      number: "04",
      title: "AI Clinical Decision Support",
      description: "Intelligent systems assisting hospital clinicians with evidence-based recommendations.",
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
      id: "tropical-diseases",
      number: "05",
      title: "Diagnostics for Tropical Diseases",
      description: "AI tools diagnosing neglected and tropical diseases with high accuracy and accessibility.",
      colSpan: "span-4",
      icon: (
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeLinejoin="round" strokeLinecap="round" />
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
