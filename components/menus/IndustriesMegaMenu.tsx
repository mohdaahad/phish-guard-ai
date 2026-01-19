"use client"

import Link from "next/link"

export default function IndustriesMegaMenu() {
  const industries = [
    {
      category: "High-Security",
      description: "Mission critical solutions for defense, cybersecurity, and financial services.",
      items: [
        {
          name: "Defense",
          description: "Secure, mission critical systems for modern operations",
          link: "/defence",
        },
        {
          name: "Cybersecurity",
          description: "Advanced protection for digital infrastructure",
          link: "/cybersecurity",
        },
        {
          name: "FinTech",
          description: "Secure, intelligent financial platforms",
          link: "/fintech",
        },
      ],
    },
    {
      category: "Regulated & Institutional",
      description: "Compliant solutions for healthcare, education, and financial services.",
      items: [
        {
          name: "Education",
          description: "Digital infrastructure for scalable learning",
          link: "/education",
        },
        {
          name: "Healthcare",
          description: "Smart, compliant systems for care and diagnostics",
          link: "/healthcare",
        },
      ],
    },
    {
      category: "Production & Media",
      description: "Advanced technology for manufacturing, media production, and entertainment.",
      items: [
        {
          name: "Manufacturing",
          description: "Automated, data-driven production systems",
          link: "/manufacturing",
        },
        {
          name: "Media",
          description: "Real-time content, data, and immersive experiences",
          link: "/media-entertainment",
        },
      ],
    },
  ]

  return (
    <div className="sol9x-mega-menu">
      <div className="sol9x-mega-menu-content">
        {industries.map((section, idx) => (
          <div key={idx} className="sol9x-mega-menu-section">
            <div className="sol9x-mega-menu-category">
              <h3 className="sol9x-mega-menu-category-title">{section.category}</h3>
              <p className="sol9x-mega-menu-category-desc">{section.description}</p>
            </div>
            <div className="sol9x-mega-menu-items">
              {section.items.map((item, itemIdx) => (
                <a key={itemIdx} href={item.link} className="sol9x-mega-menu-item">
                  <div className="sol9x-mega-menu-item-title">{item.name}</div>
                  <div className="sol9x-mega-menu-item-desc">{item.description}</div>
                  <span className="sol9x-mega-menu-arrow">&gt;</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
