export default function ManufacturingSoftwareCapabilitiesSection() {
  const capabilities = [
    {
      title: "Digital Twin of Process / Production Line",
      description: "Simulate, analyze, and optimize production with time and historical data.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <circle cx="28" cy="28" r="20" stroke="#0197FF" strokeWidth="3"/>
          <circle cx="28" cy="24" r="6" stroke="#0197FF" strokeWidth="3"/>
          <path d="M16 40C16 35 20 32 28 32C36 32 40 35 40 40" stroke="#0197FF" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      title: "Predictive Maintenance & Machine Health Monitoring",
      description: "AI models that predict failures and reduce downtime.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <path d="M28 14L32 22L28 26L24 22L28 14Z" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 28L22 24L26 28L22 32L14 28Z" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M28 42L24 34L28 30L32 34L28 42Z" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M42 28L34 32L30 28L34 24L42 28Z" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="28" cy="28" r="4" stroke="#0197FF" strokeWidth="3"/>
        </svg>
      ),
    },
    {
      title: "AI-Powered Visual Quality Inspection",
      description: "Automated defect detection using computer vision for consistent quality.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <rect x="14" y="18" width="28" height="20" rx="2" stroke="#0197FF" strokeWidth="3"/>
          <path d="M14 24L28 32L42 24" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M28 28L28 32" stroke="#0197FF" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      title: "Real-Time Production Analytics ",
      description: "Live performance metrics to identify inefficiencies and improve throughput.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <path d="M28 14V28L35 35" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="28" cy="28" r="18" stroke="#0197FF" strokeWidth="3"/>
        </svg>
      ),
    },
    {
      title: "CRM with AI-Driven Demand Forecasting",
      description: "Predictive intelligence for integrated sales, demand, and production planning.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <path d="M18 28C18 23.5817 21.5817 20 26 20C30.4183 20 34 23.5817 34 28C34 32.4183 30.4183 36 26 36C21.5817 36 18 32.4183 18 28Z" stroke="#0197FF" strokeWidth="3"/>
          <path d="M22 28H30" stroke="#0197FF" strokeWidth="3" strokeLinecap="round"/>
          <path d="M26 24V32" stroke="#0197FF" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      title: "Worker Safety Analytics & Risk Detection",
      description: "Detect unsafe conditions and behaviors to reduce incidents.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <rect x="16" y="20" width="24" height="16" rx="2" stroke="#0197FF" strokeWidth="3"/>
          <path d="M20 20L28 14L36 20" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="28" cy="28" r="4" stroke="#0197FF" strokeWidth="3"/>
        </svg>
      ),
    },
    {
      title: "AI-Based Root Cause Analysis",
      description: "Diagnose recurring machine and process issues with data-backed explanations.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <path d="M28 18V38M18 28H38" stroke="#0197FF" strokeWidth="3" strokeLinecap="round"/>
          <circle cx="28" cy="28" r="18" stroke="#0197FF" strokeWidth="3"/>
        </svg>
      ),
    },
    {
      title: "Someting Someting",
      description: "something",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <rect x="16" y="20" width="24" height="20" rx="2" stroke="#0197FF" strokeWidth="3"/>
          <path d="M20 20V16C20 14.3431 21.3431 13 23 13H33C34.6569 13 36 14.3431 36 16V20" stroke="#0197FF" strokeWidth="3"/>
          <path d="M24 28H32M28 24V32" stroke="#0197FF" strokeWidth="3" strokeLinecap="round"/>
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

