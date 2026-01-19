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

export default function WhyChooseUsSection() {
  const features: Feature[] = [
    {
      id: 1,
      number: "01",
      title: "Security & Compliance First",
      description: "From cybersecurity to compliance readiness, every system is engineered to protect data, infrastructure, and trust at every layer.",
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
      title: "Built for High Stake Environments",
      description: "Solutions designed for environments where failure is not an option. Reliable and robust infrastructure.",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
      ),
      colSpan: "span-6",
    },
    {
      id: 3,
      number: "03",
      title: "Outcome Focused",
      description: "Engineering aligned with business KPIs. We deliver results that matter and drive measurable impact.",
      icon: (
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
      colSpan: "span-4",
    },
    {
      id: 4,
      number: "04",
      title: "Intelligence Over Automation",
      description: "AI systems that assist decisions, not just automate tasks. Smart solutions for complex challenges.",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" strokeLinejoin="round" strokeLinecap="round" />
          <circle cx="8" cy="14" r="1" />
          <circle cx="16" cy="14" r="1" />
        </svg>
      ),
      colSpan: "span-4",
    },
    {
      id: 5,
      number: "05",
      title: "Engineering, Not Experiments",
      description: "Production ready systems built with discipline, testing, and accountability.",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" strokeLinejoin="round" strokeLinecap="round" />
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
