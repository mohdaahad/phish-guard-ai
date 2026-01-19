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

export default function HealthcareWhyChooseUsSection() {
  const features: Feature[] = [
    {
      id: 1,
      number: "01",
      title: "Clinical Expertise",
      description: "Solutions developed with deep healthcare industry knowledge and clinical best practices integration.",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      colSpan: "span-6",
    },
    {
      id: 2,
      number: "02",
      title: "Proven Diagnostics",
      description: "Advanced AI imaging and predictive models validated across multiple disease conditions and patient populations.",
      icon: (
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <path d="M9 12l2 2 4-4" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
      ),
      colSpan: "span-6",
    },
    {
      id: 3,
      number: "03",
      title: "Real-Time Monitoring",
      description: "Continuous health tracking with wearable technology and cloud-based analytics for proactive intervention.",
      icon: (
        <svg viewBox="0 0 24 24">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" strokeLinecap="round" />
        </svg>
      ),
      colSpan: "span-4",
    },
    {
      id: 4,
      number: "04",
      title: "Secure & Compliant",
      description: "HIPAA-compliant solutions ensuring patient data privacy and security in all healthcare operations.",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
      ),
      colSpan: "span-4",
    },
    {
      id: 5,
      number: "05",
      title: "24/7 Patient Care",
      description: "Round-the-clock AI-powered patient support and monitoring for continuous healthcare delivery.",
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
