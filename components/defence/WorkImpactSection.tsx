export default function DefenceWorkImpactSection() {
  const caseStudies = [
    {
      title: "AI-Driven Surveillance Modernization",
      description: "Faster threat detection, reduced human monitoring load, improved response time.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
    },
    {
      title: "Predictive Maintenance for Critical Assets",
      description: "Reduced downtime by 45% and extended asset lifespan with ML-powered predictive analytics.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
    },
  ];

  return (
    <section className="defence-work-impact-section">
      <div className="defence-work-impact-container">
        {/* Header - matching other sections */}
        <div className="defence-work-impact-header">
          <h2 className="defence-work-impact-title">
            Work That Delivers <span className="defence-work-impact-title-highlight">Real</span> Impact
          </h2>
        </div>

        {/* Case Studies Grid */}
        <div className="defence-work-impact-grid">
          {caseStudies.map((study, index) => (
            <div key={index} className="defence-work-impact-item">
              <div className="defence-work-impact-bar"></div>
              <div className="defence-work-impact-card">
                {/* Image */}
                <div
                  className="defence-work-impact-image"
                  style={{
                    backgroundImage: `url('${study.image}')`,
                  }}
                ></div>

                {/* Content */}
                <div className="defence-work-impact-content">
                  <div className="defence-work-impact-text-wrapper">
                    <h3 className="defence-work-impact-card-title">
                      {study.title}
                    </h3>
                    <p className="defence-work-impact-card-description">
                      {study.description}
                    </p>
                  </div>

                  {/* CTA */}
                  <button className="defence-work-impact-cta">
                    <span className="defence-work-impact-cta-text">
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

