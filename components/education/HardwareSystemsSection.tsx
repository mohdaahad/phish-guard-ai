export default function EducationHardwareSystemsSection() {
  const hardware = [
    {
      title: "AI Receptionist for Educational Campuses",
      description:
        "Smart AI-powered reception systems that handle visitor inquiries, student directions, admissions queries, and campus navigation.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <rect x="16" y="18" width="24" height="20" rx="2" stroke="#0197FF" strokeWidth="3" />
          <path d="M22 30H34" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" />
          <circle cx="28" cy="24" r="3" fill="#0197FF" />
        </svg>
      ),
    },
    {
      title: "Drone Lab Setup for Learning & Research",
      description: "Hands-on drone labs designed for STEM education, aeronautics, robotics, and AI learning.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <path
            d="M28 14L32 22L28 26L24 22L28 14Z"
            stroke="#0197FF"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="28" cy="34" r="6" stroke="#0197FF" strokeWidth="3" />
        </svg>
      ),
    },
    {
      title: "Virtual Lab Infrastructure",
      description: "Immersive hardware kits for virtual labs and experiential learning across STEM disciplines.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <rect x="14" y="18" width="28" height="18" rx="3" stroke="#0197FF" strokeWidth="3" />
          <path d="M20 26H36" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "Smart Interactive Classrooms",
      description: "Integrated displays, sensors and IoT controls for adaptive teaching environments.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <rect x="12" y="16" width="32" height="20" rx="2" stroke="#0197FF" strokeWidth="3" />
          <path d="M20 36H36" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ),
    },
  ]

  return (
    <section className="defence-hardware-systems-section">
      <div className="defence-hardware-systems-container">
        {/* Header */}
        <h2 className="defence-hardware-systems-title">
          Education <span className="defence-hardware-systems-title-highlight">Hardware</span> Systems
        </h2>

        {/* Hardware Grid */}
        <div className="defence-hardware-systems-grid">
          {hardware.map((item, index) => (
            <div key={index} className="defence-hardware-systems-card">
              <div className="defence-hardware-systems-icon-wrapper">{item.icon}</div>
              <h3 className="defence-hardware-systems-card-title">{item.title}</h3>
              <p className="defence-hardware-systems-card-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
