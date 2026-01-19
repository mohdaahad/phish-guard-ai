export default function CybersecurityHardwareSystemsSection() {
  const hardware = [
    {
      title: "Secure Communication Devices",
      description: "Quantum-safe communication modules for secure transmission.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <rect x="16" y="18" width="24" height="20" rx="2" stroke="#0197FF" strokeWidth="3"/>
          <path d="M22 26H34" stroke="#0197FF" strokeWidth="3" strokeLinecap="round"/>
          <circle cx="28" cy="30" r="3" fill="#0197FF"/>
        </svg>
      ),
    },
    {
      title: "Hardened Edge Appliances",
      description: "Appliances for on-prem enforcement of security policies with tamper resistance.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <rect x="14" y="16" width="28" height="22" rx="2" stroke="#0197FF" strokeWidth="3"/>
          <circle cx="28" cy="27" r="3" fill="#0197FF"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="defence-hardware-systems-section">
      <div className="defence-hardware-systems-container">
        {/* Header */}
        <h2 className="defence-hardware-systems-title">
          Advanced Security <span className="defence-hardware-systems-title-highlight">Hardware</span> Systems
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
