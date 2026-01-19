export default function HealthcareHardwareSystemsSection() {
  const hardware = [
    {
      title: "Smart Continuous Health Band",
      description: "Wearable for continuous vitals monitoring with clinical-grade sensors.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <circle cx="28" cy="28" r="12" stroke="#0197FF" strokeWidth="3"/>
          <path d="M20 30L26 26L30 30L36 22" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: "Portable Diagnostics Device",
      description: "Point-of-care diagnostics for rapid testing and triage.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <rect x="18" y="16" width="20" height="24" rx="3" stroke="#0197FF" strokeWidth="3"/>
          <circle cx="28" cy="26" r="3" fill="#0197FF"/>
        </svg>
      ),
    },
    {
      title: "Remote Monitoring Hub",
      description: "Edge hub aggregating device data for secure clinician dashboards.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <rect x="14" y="18" width="28" height="18" rx="2" stroke="#0197FF" strokeWidth="3"/>
          <path d="M20 36H36" stroke="#0197FF" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="defence-hardware-systems-section">
      <div className="defence-hardware-systems-container">
        {/* Header */}
        <h2 className="defence-hardware-systems-title">
          Advanced Healthcare <span className="defence-hardware-systems-title-highlight">Hardware</span> Systems
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
  );
}
