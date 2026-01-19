"use client";

import { useState } from "react";

interface Feature {
  id: number;
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  colSpan: string;
}

export default function CybersecurityWhyChooseUsSection() {
  const features: Feature[] = [
    {
      id: 1,
      number: "01",
      title: "AI-Powered Detection",
      description: "Advanced machine learning algorithms detect sophisticated threats and zero-day exploits in real-time.",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinejoin="round" strokeLinecap="round" />
          <path d="M9 12l2 2 4-4" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
      ),
      colSpan: "span-6",
    },
    {
      id: 2,
      number: "02",
      title: "Behavioral Intelligence",
      description: "Biometric systems provide continuous authentication and detect unauthorized access patterns.",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      colSpan: "span-6",
    },
    {
      id: 3,
      number: "03",
      title: "Enterprise Compliance",
      description: "Comprehensive tools for regulatory compliance, policy management, and audit trail maintenance.",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeLinejoin="round" strokeLinecap="round" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      ),
      colSpan: "span-4",
    },
    {
      id: 4,
      number: "04",
      title: "Future-Ready Security",
      description: "Quantum-secure communications and AI-SecOps protect against emerging advanced threats.",
      icon: (
        <svg viewBox="0 0 24 24">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
      colSpan: "span-4",
    },
    {
      id: 5,
      number: "05",
      title: "24/7 SOC Operations",
      description: "Round-the-clock security operations center with expert analysts and automated response.",
      icon: (
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
      ),
      colSpan: "span-4",
    },
  ];

  return (
    <section className="defence-why-choose-section-v2">
      <div className="bg-animation">
        <div className="bg-circle"></div>
      </div>

      <div className="defence-why-choose-container-v2">
        {/* Header */}
        <div className="defence-why-choose-header-v2">
          <h2 className="defence-why-choose-title-v2">
            Why <span className="defence-why-choose-title-highlight-v2">Choose</span> Us?
          </h2>
        </div>

        {/* Benefits Bento Grid */}
        <div className="defence-why-choose-grid-v2">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`defence-why-choose-item ${feature.colSpan}`}
              style={{ "--accent-color": "#0197ff" } as React.CSSProperties}
            >
              <div className="defence-why-choose-content-wrap">
                <div className="defence-why-choose-number">{feature.number}</div>
                <div className="defence-why-choose-icon-box">
                  {feature.icon}
                </div>
                <h3 className="defence-why-choose-title-text">{feature.title}</h3>
                <p className="defence-why-choose-desc-text">{feature.description}</p>
              </div>


            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
