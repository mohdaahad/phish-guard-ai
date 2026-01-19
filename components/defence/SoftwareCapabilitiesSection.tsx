"use client"

import { useState } from "react"

export default function DefenceSoftwareCapabilitiesSection() {
  const [isExpanded, setIsExpanded] = useState(false)

  const capabilities = [
    {
      title: "AI-Powered Threat Detection & FRS",
      description: "Intelligent detection and facial recognition from CCTV surveillance.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <circle cx="28" cy="28" r="20" stroke="#0197FF" strokeWidth="3" />
          <circle cx="28" cy="24" r="6" stroke="#0197FF" strokeWidth="3" />
          <path d="M16 40C16 35 20 32 28 32C36 32 40 35 40 40" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "Satellite Image Processing",
      description: "Change detection and strategic terrain intelligence using satellite imagery.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <path
            d="M28 14L32 22L28 26L24 22L28 14Z"
            stroke="#0197FF"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 28L22 24L26 28L22 32L14 28Z"
            stroke="#0197FF"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M28 42L24 34L28 30L32 34L28 42Z"
            stroke="#0197FF"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M42 28L34 32L30 28L34 24L42 28Z"
            stroke="#0197FF"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="28" cy="28" r="4" stroke="#0197FF" strokeWidth="3" />
        </svg>
      ),
    },
    {
      title: "Social Media Monitoring & Activity Tracking",
      description: "Real-time intelligence gathering from open-source digital platforms.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <rect x="14" y="18" width="28" height="20" rx="2" stroke="#0197FF" strokeWidth="3" />
          <path d="M14 24L28 32L42 24" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M28 28L28 32" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "Predictive Maintenance for Defence Equipment",
      description: "AI models that predict failures and reduce costly downtime.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <path d="M28 14V28L35 35" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="28" cy="28" r="18" stroke="#0197FF" strokeWidth="3" />
        </svg>
      ),
    },
    {
      title: "Offline Multilingual Translation System",
      description: "On-device real-time translation for field operations fully offline.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <path
            d="M18 28C18 23.5817 21.5817 20 26 20C30.4183 20 34 23.5817 34 28C34 32.4183 30.4183 36 26 36C21.5817 36 18 32.4183 18 28Z"
            stroke="#0197FF"
            strokeWidth="3"
          />
          <path d="M22 28H30" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" />
          <path d="M26 24V32" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "VR-Based Drone Training & Simulation",
      description: "Immersive training environments for drone pilots and defence operators.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <rect x="16" y="20" width="24" height="16" rx="2" stroke="#0197FF" strokeWidth="3" />
          <path d="M20 20L28 14L36 20" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="28" cy="28" r="4" stroke="#0197FF" strokeWidth="3" />
        </svg>
      ),
    },
    {
      title: "AI Health Assistant for First Aid",
      description: "Instant diagnostic support and emergency medical guidance.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <path d="M28 18V38M18 28H38" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" />
          <circle cx="28" cy="28" r="18" stroke="#0197FF" strokeWidth="3" />
        </svg>
      ),
    },
    {
      title: "Canteen Inventory Forecasting System",
      description: "Demand forecasting for efficient food and supply management across bases.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <rect x="16" y="20" width="24" height="20" rx="2" stroke="#0197FF" strokeWidth="3" />
          <path
            d="M20 20V16C20 14.3431 21.3431 13 23 13H33C34.6569 13 36 14.3431 36 16V20"
            stroke="#0197FF"
            strokeWidth="3"
          />
          <path d="M24 28H32M28 24V32" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ),
    },
  ]

  return (
    <section className="defence-software-capabilities-section">
      <div className="defence-software-capabilities-container">
        {/* Header */}
        <div className="defence-software-capabilities-header">
          <h2 className="defence-software-capabilities-title">
            Software <span className="defence-software-capabilities-title-highlight">Capabilities</span>
          </h2>
          
        </div>

        {/* Capabilities Grid */}
        <div className={`defence-software-capabilities-grid ${isExpanded ? "expanded" : ""}`}>
          {capabilities.map((capability, index) => (
            <div key={index} className="defence-software-capabilities-card">
              <div className="defence-software-capabilities-icon-wrapper">{capability.icon}</div>
              <h3 className="defence-software-capabilities-card-title">{capability.title}</h3>
              <p className="defence-software-capabilities-card-description">{capability.description}</p>
            </div>
          ))}
        </div>

        {/* View All Button - Mobile only */}
        <div className="defence-software-view-all-wrapper">
          <button className="defence-software-capabilities-view-all-btn" onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? "View Less" : "View All"}
          </button>
        </div>
      </div>
    </section>
  )
}
