"use client"

import Link from "next/link"

export default function SolutionsMegaMenu() {
  const solutions = [
    {
      category: "Intelligence & AI",
      description: "AI-powered solutions that automate workflows and drive intelligent decisions.",
      items: [
        {
          name: "Custom AI Solutions",
          description: "AI that automates workflows and drives smarter decisions.",
          link: "",
        },
        {
          name: "Edge AI Solutions",
          description: "Real-time intelligence deployed directly on your devices.",
          link: "",
        },
        {
          name: "Digital Twin",
          description: "Simulate, optimize, and modernize mission-critical operations.",
          link: "",
        },
      ],
    },
    {
      category: "Infrastructure & Control",
      description: "Enterprise grade security and custom software for mission-critical operations.",
      items: [
        {
          name: "Cybersecurity",
          description: "Continuous security with built-in compliance.",
          link: "",
        },
        {
          name: "Custom Software",
          description: "Tailored software engineered for performance, scale, and reliability.",
          link: "",
        },
        {
          name: "IoT & Automations",
          description: "Connected devices for smarter operations",
          link: "",
        },
      ],
    },
    {
      category: "Immersive & Field Tech",
      description: "Next-generation technology for monitoring, training, and field operations.",
      items: [
        {
          name: "Drones (Air & Water)",
          description: "Live intelligence for mission-critical operations.",
          link: "",
        },
        {
          name: "AR/VR Solutions",
          description: "Immersive 3D experiences for training, visualization, and simulation",
          link: "",
        },
      ],
    },
  ]

  return (
    <div className="sol9x-mega-menu">
      <div className="sol9x-mega-menu-content">
        {solutions.map((section, idx) => (
          <div key={idx} className="sol9x-mega-menu-section">
            <div className="sol9x-mega-menu-category">
              <h3 className="sol9x-mega-menu-category-title">{section.category}</h3>
              <p className="sol9x-mega-menu-category-desc">{section.description}</p>
            </div>
            <div className="sol9x-mega-menu-items">
              {section.items.map((item, itemIdx) => (
                <Link
                  key={itemIdx}
                  href={`/contact-us?interest=${encodeURIComponent(item.name)}`}
                  className="sol9x-mega-menu-item"
                >
                  <div className="sol9x-mega-menu-item-title">{item.name}</div>
                  <div className="sol9x-mega-menu-item-desc">{item.description}</div>
                  <span className="sol9x-mega-menu-arrow">&gt;</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
