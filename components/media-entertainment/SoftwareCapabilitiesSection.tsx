export default function MediaEntertainmentSoftwareCapabilitiesSection() {
  const capabilities = [
    {
      title: "Deepfake Detection Engine",
      description: "Advanced AI detecting and authenticating deepfakes in video and audio content.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <rect x="16" y="18" width="24" height="20" rx="2" stroke="#0197FF" strokeWidth="3"/>
          <circle cx="24" cy="26" r="3" fill="#0197FF"/>
          <circle cx="32" cy="26" r="3" fill="#0197FF"/>
          <path d="M24 32C25.333 33.333 27.333 34 29 34C30.667 34 32.667 33.333 34 32" stroke="#0197FF" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      title: "Cinematic Drones & Robotics",
      description: "Autonomous aerial and ground systems for professional cinematography and content creation.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <path d="M28 16L34 20L32 28L28 30L24 28L22 20L28 16Z" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="20" cy="20" r="2" fill="#0197FF"/>
          <circle cx="36" cy="20" r="2" fill="#0197FF"/>
          <circle cx="20" cy="36" r="2" fill="#0197FF"/>
          <circle cx="36" cy="36" r="2" fill="#0197FF"/>
        </svg>
      ),
    },
    {
      title: "Humanoid Robots for Entertainment",
      description: "Sophisticated humanoid robots delivering interactive entertainment and performances.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <circle cx="28" cy="18" r="5" stroke="#0197FF" strokeWidth="3"/>
          <rect x="22" y="26" width="12" height="12" rx="1" stroke="#0197FF" strokeWidth="3"/>
          <line x1="18" y1="30" x2="14" y2="38" stroke="#0197FF" strokeWidth="3" strokeLinecap="round"/>
          <line x1="38" y1="30" x2="42" y2="38" stroke="#0197FF" strokeWidth="3" strokeLinecap="round"/>
          <line x1="22" y1="38" x2="18" y2="46" stroke="#0197FF" strokeWidth="3" strokeLinecap="round"/>
          <line x1="34" y1="38" x2="38" y2="46" stroke="#0197FF" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      title: "Content Creation & Editing Tools",
      description: "AI-powered tools accelerating content creation with intelligent editing and enhancement.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <rect x="16" y="18" width="24" height="20" rx="2" stroke="#0197FF" strokeWidth="3"/>
          <path d="M32 26L22 36" stroke="#0197FF" strokeWidth="3" strokeLinecap="round"/>
          <circle cx="32" cy="26" r="3" fill="#0197FF"/>
          <circle cx="22" cy="36" r="3" fill="#0197FF"/>
        </svg>
      ),
    },
    {
      title: "Real-time 3D Rendering & Graphics",
      description: "High-performance real-time rendering for immersive gaming and virtual entertainment.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <path d="M18 26L28 18L38 26L28 34L18 26Z" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 26L28 34L38 26" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M24 30L28 38L32 30" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
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
            Cutting-edge technologies for media and entertainment.
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
