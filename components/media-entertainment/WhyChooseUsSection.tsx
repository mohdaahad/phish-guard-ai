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

export default function MediaEntertainmentWhyChooseUsSection() {
  const features: Feature[] = [
    {
      id: 1,
      number: "01",
      title: "Advanced Robotics",
      description: "State-of-the-art aerial and underwater drones for cinematic recording with professional-grade quality.",
      icon: (
        <svg viewBox="0 0 24 24">
          <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
          <polyline points="17 2 12 7 7 2" />
        </svg>
      ),
      colSpan: "span-6",
    },
    {
      id: 2,
      number: "02",
      title: "AI Content Tools",
      description: "Intelligent platforms for story generation, deepfake detection, and automated content creation.",
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
      title: "Security First",
      description: "Comprehensive protection against deepfakes, phishing, and unauthorized content distribution.",
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
      ),
      colSpan: "span-4",
    },
    {
      id: 4,
      number: "04",
      title: "Next-Gen Characters",
      description: "3D synthetic talent and virtual performers for innovative entertainment experiences.",
      icon: (
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="8" r="4" />
          <path d="M20 21a8 8 0 1 0-16 0" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
      ),
      colSpan: "span-4",
    },
    {
      id: 5,
      number: "05",
      title: "Global Distribution",
      description: "Seamless content delivery and distribution platforms for worldwide audiences.",
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
