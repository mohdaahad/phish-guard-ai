"use client"

import { useState } from "react"

export default function DefenceHardwareSystemsSection() {
  const [isExpanded, setIsExpanded] = useState(false)

  const hardware = [
    {
      title: "Arial Drones",
      description: "Intelligent detection and facial recognition from CCTV surveillance.",
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
      title: "Underwater Drones",
      description: "Intelligent detection and facial recognition from CCTV surveillance.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <path
            d="M28 20C24.6863 20 22 22.6863 22 26C22 29.3137 24.6863 32 28 32C31.3137 32 34 29.3137 34 26C34 22.6863 31.3137 20 28 20Z"
            stroke="#0197FF"
            strokeWidth="3"
          />
          <path
            d="M18 36C18 32.6863 20.6863 30 24 30H32C35.3137 30 38 32.6863 38 36"
            stroke="#0197FF"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Spy Cameras",
      description: "Intelligent detection and facial recognition from CCTV surveillance.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <rect x="18" y="20" width="20" height="16" rx="2" stroke="#0197FF" strokeWidth="3" />
          <circle cx="28" cy="28" r="6" stroke="#0197FF" strokeWidth="3" />
          <circle cx="28" cy="28" r="2" fill="#0197FF" />
        </svg>
      ),
    },
    {
      title: "IR Light based communication system",
      description: "Secure infrared data transfer for short-range, low-visibility use.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <path
            d="M28 14L35 28L28 42L21 28L28 14Z"
            stroke="#0197FF"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 28L28 21L42 28L28 35L14 28Z"
            stroke="#0197FF"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ]

  return (
    <section className="defence-hardware-systems-section">
      <div className="defence-hardware-systems-container">
        {/* Header */}
        <h2 className="defence-hardware-systems-title">
          Advanced Defence <span className="defence-hardware-systems-title-highlight">Hardware</span> Systems
        </h2>

        {/* Hardware Grid */}
        <div className={`defence-hardware-systems-grid ${isExpanded ? "expanded" : ""}`}>
          {hardware.map((item, index) => (
            <div key={index} className="defence-hardware-systems-card">
              <div className="defence-hardware-systems-icon-wrapper">{item.icon}</div>
              <h3 className="defence-hardware-systems-card-title">{item.title}</h3>
              <p className="defence-hardware-systems-card-description">{item.description}</p>
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
  )
}
