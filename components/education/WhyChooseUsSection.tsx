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

export default function EducationWhyChooseUsSection() {
  const features: Feature[] = [
    {
      id: 1,
      number: "01",
      title: "VR Innovation",
      description: "Immersive virtual reality experiences that transform how students learn and engage with educational content.",
      icon: (
        <svg viewBox="0 0 24 24">
          <rect x="2" y="7" width="20" height="12" rx="2" strokeLinejoin="round" strokeLinecap="round" />
          <circle cx="8" cy="13" r="2" />
          <circle cx="16" cy="13" r="2" />
          <path d="M10 13h4" strokeLinecap="round" />
        </svg>
      ),
      colSpan: "span-6",
    },
    {
      id: 2,
      number: "02",
      title: "AI-Powered Personalization",
      description: "Adaptive learning systems that customize educational content to each student's unique learning style and pace.",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" strokeLinejoin="round" strokeLinecap="round" />
          <circle cx="8" cy="14" r="1" />
          <circle cx="16" cy="14" r="1" />
        </svg>
      ),
      colSpan: "span-6",
    },
    {
      id: 3,
      number: "03",
      title: "Proven Exam Success",
      description: "Advanced prediction and assessment tools that significantly improve student performance in competitive exams.",
      icon: (
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <path d="M9 12l2 2 4-4" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
      ),
      colSpan: "span-4",
    },
    {
      id: 4,
      number: "04",
      title: "Institutional Support",
      description: "Comprehensive solutions for schools and institutions including AI receptionists and drone labs.",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M3 21h18M5 21V7l7-4 7 4v14" strokeLinejoin="round" strokeLinecap="round" />
          <path d="M9 21v-6h6v6" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
      ),
      colSpan: "span-4",
    },
    {
      id: 5,
      number: "05",
      title: "Global Reach",
      description: "Trusted by leading educational institutions worldwide with localized content and multilingual support.",
      icon: (
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeLinejoin="round" strokeLinecap="round" />
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
