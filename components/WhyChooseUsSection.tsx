"use client";

import Image from "next/image";
import { useState } from "react";

interface Benefit {
  id: number;
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  colSpan: string;
}

export default function WhyChooseUsSection() {
  const benefits: Benefit[] = [
    {
      id: 1,
      number: "01",
      title: "National Recognition",
      description: "Recognized by Times of India as growth drivers of the nation, showcasing our commitment to innovation and excellence.",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 15l-2 5L9 9l11-1-5 2 5 10z" strokeLinejoin="round" strokeLinecap="round" />
          <path d="M12 15l2 5 1-11-11-1 5 2-5 10z" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
      ),
      colSpan: "span-6",
    },
    {
      id: 2,
      number: "02",
      title: "High Stake Ready",
      description: "Built for mission-critical environments where downtime isn't an option. Reliable and robust infrastructure.",
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
      description: "Engineering solutions aligned with your business KPIs and goals. We deliver results that matter.",
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
      title: "Global Research",
      description: "Strategic partnerships with leading institutions that drive innovation and experimental R&D.",
      icon: (
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
      ),
      colSpan: "span-4",
    },
    {
      id: 5,
      number: "05",
      title: "Security & Compliance First",
      description: "Enterprise-grade security for high-stakes environments where failure is not an option.",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinejoin="round" strokeLinecap="round" />
          <path d="M9 12l2 2 4-4" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
      ),
      colSpan: "span-4",
    },
  ];

  return (
    <section className="sol9x-why-choose-section">
      <div className="bg-animation">
        <div className="bg-circle"></div>
      </div>

      <div className="sol9x-why-choose-container">
        {/* Header */}
        <div className="sol9x-why-choose-header">
          <h2 className="sol9x-why-choose-title">
            Why <span className="sol9x-why-choose-title-highlight">Choose</span> Us?
          </h2>
        </div>

        {/* Benefits Bento Grid */}
        <div className="sol9x-why-choose-grid">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className={`why-choose-item ${benefit.colSpan}`}
              style={{ "--accent-color": "#0197ff" } as React.CSSProperties}
            >
              <div className="why-choose-content-wrap">
                <div className="why-choose-number">{benefit.number}</div>
                <div className="why-choose-icon-box">
                  {benefit.icon}
                </div>
                <h3 className="why-choose-title-text">{benefit.title}</h3>
                <p className="why-choose-desc-text">{benefit.description}</p>
              </div>

              {/* <div className="why-choose-card-indicator">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
