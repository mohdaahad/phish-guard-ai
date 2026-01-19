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

export default function ResearchDevelopmentSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const research: ResearchItem[] = [
    {
      id: "autonomous",
      number: "01",
      title: "Autonomous & Remote Controlled Vehicles",
      description: "Next-gen ground robots designed for surveillance, inspection, and hazardous environments.",
      colSpan: "span-6",
      icon: (
        <svg viewBox="0 0 24 24">
          <rect x="3" y="11" width="18" height="8" rx="2" strokeLinejoin="round" strokeLinecap="round" />
          <circle cx="7" cy="15" r="1.5" />
          <circle cx="17" cy="15" r="1.5" />
          <path d="M5 11V9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2" strokeLinejoin="round" strokeLinecap="round" />
          <path d="M12 7V4" strokeLinecap="round" />
          <circle cx="12" cy="3" r="1" />
        </svg>
      )
    },
    {
      id: "communication",
      number: "02",
      title: "Ultra-Secure Communication Devices",
      description: "Encrypted communication hardware designed for isolated and high-risk environments.",
      colSpan: "span-6",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinejoin="round" strokeLinecap="round" />
          <path d="M9 12l2 2 4-4" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: "robotic-dogs",
      number: "03",
      title: "Gun Mounted Robotic Dogs",
      description: "AI-enabled robotic units built for tactical deployment and remote operations.",
      colSpan: "span-4",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5z" strokeLinejoin="round" strokeLinecap="round" />
          <path d="M2 17l10 5 10-5" strokeLinejoin="round" strokeLinecap="round" />
          <path d="M2 12l10 5 10-5" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: "sea-vessels",
      number: "04",
      title: "Autonomous Long-Range Sea Vessels",
      description: "Unmanned surface vessels for long-duration maritime monitoring and missions.",
      colSpan: "span-4",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M2 20h20" strokeLinecap="round" />
          <path d="M4 17l2-10h12l2 10" strokeLinejoin="round" strokeLinecap="round" />
          <path d="M12 7V3" strokeLinecap="round" />
          <path d="M9 7h6" strokeLinecap="round" />
        </svg>
      )
    },
    {
      id: "drones",
      number: "05",
      title: "Advanced Drone Systems",
      description: "Autonomous aerial platforms for reconnaissance, surveillance, and tactical operations.",
      colSpan: "span-4",
      icon: (
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v4M12 19v4M1 12h4M19 12h4" strokeLinecap="round" />
          <path d="M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" strokeLinecap="round" />
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
