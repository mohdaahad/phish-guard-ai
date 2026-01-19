export default function CybersecuritySoftwareCapabilitiesSection() {
  const capabilities = [
    {
      title: "CyberFabric™ Platform",
      description: "Comprehensive cybersecurity fabric enabling zero-trust architecture and continuous monitoring.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <path d="M28 16L36 20V28C36 36 28 42 28 42C28 42 20 36 20 28V20L28 16Z" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M24 28L28 32L36 24" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: "Threat Detection & Prevention",
      description: "Real-time detection and automated response to cyber threats and attacks.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <circle cx="28" cy="28" r="14" stroke="#0197FF" strokeWidth="3"/>
          <path d="M28 20V36M20 28H36" stroke="#0197FF" strokeWidth="3" strokeLinecap="round"/>
          <circle cx="28" cy="28" r="4" fill="#0197FF"/>
        </svg>
      ),
    },
    {
      title: "Vulnerability Assessment & Management",
      description: "Comprehensive vulnerability scanning and prioritized remediation strategies.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <rect x="18" y="20" width="20" height="24" rx="2" stroke="#0197FF" strokeWidth="3"/>
          <path d="M28 24V28M28 32V36" stroke="#0197FF" strokeWidth="3" strokeLinecap="round"/>
          <circle cx="28" cy="28" r="2" fill="#0197FF"/>
        </svg>
      ),
    },
    {
      title: "Network Segmentation & Micro-segmentation",
      description: "Advanced network isolation preventing lateral movement of threats.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <rect x="16" y="18" width="24" height="20" rx="2" stroke="#0197FF" strokeWidth="3"/>
          <line x1="22" y1="18" x2="22" y2="38" stroke="#0197FF" strokeWidth="3"/>
          <line x1="28" y1="18" x2="28" y2="38" stroke="#0197FF" strokeWidth="3"/>
          <line x1="34" y1="18" x2="34" y2="38" stroke="#0197FF" strokeWidth="3"/>
        </svg>
      ),
    },
    {
      title: "Security Operations Center (SOC) Automation",
      description: "Intelligent SOC automation reducing response times and improving threat detection.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <rect x="16" y="18" width="24" height="20" rx="2" stroke="#0197FF" strokeWidth="3"/>
          <circle cx="22" cy="24" r="2" fill="#0197FF"/>
          <circle cx="28" cy="24" r="2" fill="#0197FF"/>
          <circle cx="34" cy="24" r="2" fill="#0197FF"/>
          <path d="M18 32H38" stroke="#0197FF" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="defence-software-capabilities-section">
      <div className="defence-software-capabilities-container">
        {/* Header */}
        <div className="defence-software-capabilities-header">
          <h2 className="defence-software-capabilities-title">
            Software <span className="defence-software-capabilities-title-highlight">Capabilities</span>
          </h2>
          <p className="defence-software-capabilities-subtitle">
            Enterprise-grade cybersecurity solutions and platforms.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="defence-software-capabilities-grid">
          {capabilities.map((capability, index) => (
            <div key={index} className="defence-software-capabilities-card">
              <div className="defence-software-capabilities-icon-wrapper">
                {capability.icon}
              </div>
              <h3 className="defence-software-capabilities-card-title">
                {capability.title}
              </h3>
              <p className="defence-software-capabilities-card-description">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
