"use client"
import { useState } from "react"

export default function EducationSoftwareCapabilitiesSection() {
  const [expanded, setExpanded] = useState(false)

  const capabilities = [
    {
      title: "VR-Based Stories for Creativity Enhancement",
      description:
        "Immersive storytelling experiences that improve imagination, comprehension, and engagement through virtual reality.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <rect x="16" y="18" width="24" height="20" rx="2" stroke="#0197FF" strokeWidth="3" />
          <path
            d="M28 28C26.8954 28 26 28.8954 26 30C26 31.1046 26.8954 32 28 32C29.1046 32 30 31.1046 30 30C30 28.8954 29.1046 28 28 28Z"
            stroke="#0197FF"
            strokeWidth="3"
          />
          <path d="M20 22H36" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "Rank Predictors for IIT-JEE & NEET",
      description:
        "AI models trained on historical data to estimate rank ranges, performance trends, and preparation gaps.",
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
      title: "NEET-UG Mock Assessment Platforms",
      description: "Full-length mock tests with automated evaluation, difficulty analysis, and personalized feedback.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <rect x="14" y="18" width="28" height="20" rx="2" stroke="#0197FF" strokeWidth="3" />
          <path d="M18 24H38M18 28H38M18 32H30" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "Customized Psychometric Assessments",
      description:
        "AI-driven psychometric tools to evaluate aptitude, personality traits, learning styles, and career alignment.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <circle cx="28" cy="28" r="18" stroke="#0197FF" strokeWidth="3" />
          <path d="M28 18V28L34 34" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: "AI Student Virtual Assistants",
      description:
        "24×7 digital assistants that help students with queries, schedules, learning resources, and academic guidance.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <path
            d="M18 28C18 23.5817 21.5817 20 26 20C30.4183 20 34 23.5817 34 28C34 32.4183 30.4183 36 26 36C21.5817 36 18 32.4183 18 28Z"
            stroke="#0197FF"
            strokeWidth="3"
          />
          <circle cx="26" cy="28" r="3" fill="#0197FF" />
          <circle cx="34" cy="28" r="3" fill="#0197FF" />
          <path d="M28 32C28.6667 33 29.6667 33.3333 31 33" stroke="#0197FF" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
  ]

  const visibleCapabilities = expanded ? capabilities : capabilities.slice(0, 4)

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
        <div className="defence-software-capabilities-grid">
          {visibleCapabilities.map((capability, index) => (
            <div key={index} className="defence-software-capabilities-card">
              <div className="defence-software-capabilities-icon-wrapper">{capability.icon}</div>
              <h3 className="defence-software-capabilities-card-title">{capability.title}</h3>
              <p className="defence-software-capabilities-card-description">{capability.description}</p>
            </div>
          ))}
        </div>

        {!expanded && capabilities.length > 4 && (
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <button
              onClick={() => setExpanded(true)}
              style={{
                padding: "10px 30px",
                border: "2px solid #0197FF",
                color: "#0197FF",
                background: "transparent",
                borderRadius: "25px",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              View All
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
