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

export default function ManufacturingWhyChooseUsSection() {
  const features: Feature[] = [
    {
      id: 1,
      number: "01",
      title: "Industry 4.0 Ready",
      description: "Solutions designed for smart manufacturing with IoT, AI, and real-time analytics at the core.",
      icon: (
        <svg viewBox="0 0 24 24">
          <rect x="3" y="3" width="7" height="7" strokeLinejoin="round" />
          <rect x="14" y="3" width="7" height="7" strokeLinejoin="round" />
          <rect x="3" y="14" width="7" height="7" strokeLinejoin="round" />
          <rect x="14" y="14" width="7" height="7" strokeLinejoin="round" />
        </svg>
      ),
      colSpan: "span-6",
    },
    {
      id: 2,
      number: "02",
      title: "Production Optimized",
      description: "Systems engineered to maximize throughput, minimize downtime, and drive operational efficiency.",
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
      title: "Quality First",
      description: "AI-powered inspection and quality management ensuring zero-defect manufacturing.",
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
      title: "Scalable Infrastructure",
      description: "Cloud-native solutions that grow with your production demands and global operations.",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5z" strokeLinejoin="round" strokeLinecap="round" />
          <path d="M2 17l10 5 10-5" strokeLinejoin="round" strokeLinecap="round" />
          <path d="M2 12l10 5 10-5" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
      ),
      colSpan: "span-4",
    },
    {
      id: 5,
      number: "05",
      title: "Sustainable Manufacturing",
      description: "Solutions focused on reducing waste, emissions, and energy consumption.",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 2a10 10 0 1 0 10 10" strokeLinejoin="round" strokeLinecap="round" />
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
