export default function WorkImpactSection() {
  const caseStudies = [
    {
      title: "AI-Powered Digital Twin",
      description: "A real-time simulation platform that reduced downtime by 35% and increased operational efficiency by 20%.",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/0845e7f3bf62a60be76ccf07354c3de71f1d4ff6?width=1238",
    },
    {
      title: "Intelligent Automation Ops",
      description: "Reduced admin workload by 60% and improved patient throughput with intelligent scheduling algorithms.",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/77a7c505147796d415d8f9096f615f1e193dbc55?width=1238",
    },
  ];

  return (
    <section className="sol9x-work-impact-section">
      <div className="sol9x-work-impact-container">
        {/* Header - matching other sections */}
        <div className="sol9x-work-impact-header">
          <h2 className="sol9x-work-impact-title">
            Work That Delivers <span className="sol9x-work-impact-title-highlight">Real</span> Impact
          </h2>
        </div>

        {/* Case Studies Grid */}
        <div className="sol9x-work-impact-grid">
          {caseStudies.map((study, index) => (
            <div key={index} className="sol9x-work-impact-item">
              <div className="sol9x-work-impact-bar"></div>
              <div className="sol9x-work-impact-card">
                {/* Image */}
                <div
                  className="sol9x-work-impact-image"
                  style={{
                    backgroundImage: `url('${study.image}')`,
                  }}
                ></div>

                {/* Content */}
                <div className="sol9x-work-impact-content">
                  <div className="sol9x-work-impact-text-wrapper">
                    <h3 className="sol9x-work-impact-card-title">
                      {study.title}
                    </h3>
                    <p className="sol9x-work-impact-card-description">
                      {study.description}
                    </p>
                  </div>

                  {/* CTA */}
                  <button className="sol9x-work-impact-cta">
                    <span className="sol9x-work-impact-cta-text">
                      View Case Study
                    </span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4.16797 10H15.8346" stroke="#0197FF" strokeWidth="1.618" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M10 4.16602L15.8333 9.99935L10 15.8327" stroke="#0197FF" strokeWidth="1.618" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
