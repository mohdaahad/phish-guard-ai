"use client"

import { useState } from "react"

export default function ManufacturingHardwareSystemsSection() {
  const [isExpanded, setIsExpanded] = useState(false)

  const hardware = [
    {
      title: "Industrial IoT Sensors",
      description: "Connected sensors for real-time monitoring of equipment, environment, and production metrics.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <circle cx="28" cy="28" r="18" stroke="#0197FF" strokeWidth="3" />
          <circle cx="28" cy="28" r="8" stroke="#0197FF" strokeWidth="3" />
          <circle cx="28" cy="28" r="2" fill="#0197FF" />
        </svg>
      ),
    },
    {
      title: "Robotic Arms & Automation",
      description: "Precision robotic systems for assembly, packaging, and material handling operations.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <path d="M20 36L28 28L36 36" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M28 28V14" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" />
          <path d="M14 42H42" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "Vision Inspection Systems",
      description: "High-speed cameras and AI for automated quality inspection and defect detection.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <rect x="18" y="20" width="20" height="16" rx="2" stroke="#0197FF" strokeWidth="3" />
          <circle cx="28" cy="28" r="6" stroke="#0197FF" strokeWidth="3" />
          <circle cx="28" cy="28" r="2" fill="#0197FF" />
        </svg>
      ),
    },
    {
      title: "Smart Conveyor Systems",
      description: "Intelligent material handling with real-time tracking and automated routing.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <path d="M14 28H42" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" />
          <circle cx="20" cy="28" r="4" stroke="#0197FF" strokeWidth="3" />
          <circle cx="36" cy="28" r="4" stroke="#0197FF" strokeWidth="3" />
          <path d="M24 20H32V28" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <section className="defence-hardware-systems-section">
      <div className="defence-hardware-systems-container">
        {/* Header */}
        <h2 className="defence-hardware-systems-title">
          Advanced Manufacturing <span className="defence-hardware-systems-title-highlight">Hardware</span> Systems
        </h2>

        {/* Hardware Grid */}
        <div className={`defence-hardware-systems-grid ${isExpanded ? "expanded" : ""}`}>
          {hardware.map((item, index) => (
            <div key={index} className="defence-hardware-systems-card">
              <div className="defence-hardware-systems-icon-wrapper">
                {item.icon}
              </div>
              <h3 className="defence-hardware-systems-card-title">
                {item.title}
              </h3>
              <p className="defence-hardware-systems-card-description">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* View All Button - Mobile only */}
        <div className="defence-hardware-view-all-wrapper">
          <button className="defence-hardware-systems-view-all-btn" onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? "View Less" : "View All"}
          </button>
        </div>
      </div>
    </section>
  );
}
