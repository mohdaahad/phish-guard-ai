export default function MediaEntertainmentHardwareSystemsSection() {
  const hardware = [
    {
      title: "Aerial Cinematic Drones",
      description: "High-performance drones for stabilized cinematic footage.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <path d="M28 14L32 22L28 26L24 22L28 14Z" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="28" cy="34" r="6" stroke="#0197FF" strokeWidth="3"/>
        </svg>
      ),
    },
    {
      title: "Underwater Filming Drones",
      description: "Specialized submersible drones for cinematic underwater capture.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <path d="M28 20C24.6863 20 22 22.6863 22 26C22 29.3137 24.6863 32 28 32C31.3137 32 34 29.3137 34 26C34 22.6863 31.3137 20 28 20Z" stroke="#0197FF" strokeWidth="3"/>
          <path d="M18 36C18 32.6863 20.6863 30 24 30H32C35.3137 30 38 32.6863 38 36" stroke="#0197FF" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      title: "Robotic Camera Rigs",
      description: "Precision robotic rigs enabling repeatable motion control and complex shots.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <rect x="18" y="18" width="20" height="20" rx="2" stroke="#0197FF" strokeWidth="3"/>
          <path d="M22 30H34" stroke="#0197FF" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="defence-hardware-systems-section">
      <div className="defence-hardware-systems-container">
        {/* Header */}
        <h2 className="defence-hardware-systems-title">
          Advanced Media <span className="defence-hardware-systems-title-highlight">Hardware</span> Systems
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
