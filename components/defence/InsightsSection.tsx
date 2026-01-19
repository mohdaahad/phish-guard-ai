export default function DefenceInsightsSection() {
  const insights = [
    {
      category: "Defense",
      date: "Nov 15, 2025",
      title: "AI in Modern Defense Operations",
      description: "How artificial intelligence is revolutionizing command and control systems for enhanced situational awareness.",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/514052276dadee68e2e10b13abf4b1000d4f0237?width=816",
    },
    {
      category: "Security",
      date: "Nov 10, 2025",
      title: "Zero-Trust Architecture for Defense",
      description: "Implementing military-grade security protocols in defense AI systems to protect critical infrastructure.",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/b56ad179fbcd2c19e1448825922ebd9c089da58c?width=816",
    },
    {
      category: "Technology",
      date: "Nov 5, 2025",
      title: "Real-Time Intelligence Systems",
      description: "Building AI-powered platforms that provide instant threat detection and response capabilities.",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/32d5bda255d47fda39f55002cc77c6058f33d70d?width=816",
    },
  ];

  return (
    <section className="defence-insights-section">
      <div className="defence-insights-container">
        {/* Header */}
        <div className="defence-insights-header">
          <h2 className="defence-insights-title">
            Defense <span className="defence-insights-title-highlight">Insights</span> & Innovations
          </h2>

          {/* Insights Grid */}
          <div className="defence-insights-grid">
            {insights.map((insight, index) => (
              <div key={index} className="defence-insights-card">
                {/* Image */}
                <div
                  className="defence-insights-image"
                  style={{
                    backgroundImage: `url('${insight.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="defence-insights-badge">
                    <span className="defence-insights-badge-text">
                      {insight.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="defence-insights-content">
                  <div className="defence-insights-text-wrapper">
                    {/* Date */}
                    <div className="defence-insights-date">
                      <div className="defence-insights-date-inner">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M6.66797 1.66602V4.99935" stroke="#768498" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M13.332 1.66602V4.99935" stroke="#768498" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M15.8333 3.33398H4.16667C3.24619 3.33398 2.5 4.08018 2.5 5.00065V16.6673C2.5 17.5878 3.24619 18.334 4.16667 18.334H15.8333C16.7538 18.334 17.5 17.5878 17.5 16.6673V5.00065C17.5 4.08018 16.7538 3.33398 15.8333 3.33398Z" stroke="#768498" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M2.5 8.33398H17.5" stroke="#768498" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="defence-insights-date-text">
                          {insight.date}
                        </span>
                      </div>
                    </div>

                    {/* Title & Description */}
                    <div className="defence-insights-text-content">
                      <h3 className="defence-insights-card-title">
                        {insight.title}
                      </h3>
                      <p className="defence-insights-card-description">
                        {insight.description}
                      </p>
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="defence-insights-cta">
                    <span className="defence-insights-cta-text">
                      Read Article
                    </span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4.16797 10H15.8346" stroke="#0197FF" strokeWidth="1.618" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 4.16602L15.8333 9.99935L10 15.8327" stroke="#0197FF" strokeWidth="1.618" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All */}
        <button className="defence-insights-view-all">
          <span className="defence-insights-view-all-text">
            View All Articles
          </span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4.16797 10L15.8346 10" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 4.16602L15.8333 9.99935L10 15.8327" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  );
}

