export default function HealthcareSoftwareCapabilitiesSection() {
  const capabilities = [
    {
      title: "Health AI Assistant for Doctors",
      description: "Real-time clinical decision support for physicians with AI-powered recommendations.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <path d="M28 18L32 26L28 30L24 26L28 18Z" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 28L26 24L30 28L26 32L18 28Z" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M28 38L24 30L28 26L32 30L28 38Z" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="28" cy="28" r="4" stroke="#0197FF" strokeWidth="3"/>
        </svg>
      ),
    },
    {
      title: "Personal AI Health Assistant",
      description: "24/7 personalized health monitoring and guidance for patients.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <circle cx="28" cy="20" r="6" stroke="#0197FF" strokeWidth="3"/>
          <path d="M16 36C16 31 20 28 28 28C36 28 40 31 40 36" stroke="#0197FF" strokeWidth="3" strokeLinecap="round"/>
          <path d="M28 40V44M24 44H32" stroke="#0197FF" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      title: "Predictive Models on EHR Data",
      description: "Advanced analytics predicting patient risks and outcomes from health records.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <path d="M18 34L24 28L30 32L38 20" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="14" y="18" width="28" height="22" rx="2" stroke="#0197FF" strokeWidth="3"/>
        </svg>
      ),
    },
    {
      title: "Risk Prediction & Readmission Analytics",
      description: "Identify high-risk patients and prevent readmissions with predictive insights.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <rect x="16" y="20" width="24" height="20" rx="2" stroke="#0197FF" strokeWidth="3"/>
          <path d="M20 26H36M20 30H36M20 34H28" stroke="#0197FF" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      title: "Hospital Process Automation",
      description: "Streamline administrative workflows and operational processes in hospitals.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <rect x="16" y="16" width="24" height="24" rx="2" stroke="#0197FF" strokeWidth="3"/>
          <path d="M28 20V24M28 32V36M20 28H24M32 28H36" stroke="#0197FF" strokeWidth="3" strokeLinecap="round"/>
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
            Comprehensive AI solutions for healthcare operations.
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
