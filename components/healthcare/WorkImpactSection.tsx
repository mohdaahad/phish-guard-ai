export default function HealthcareWorkImpactSection() {
  const caseStudies = [
    {
      title: "AI-Assisted Imaging Pilot",
      description:
        "AI imaging assistance reduced diagnostic time by 42% while improving detection sensitivity.",
      image:
        "https://images.unsplash.com/photo-1580281657523-0a0c4b0b1b6b?w=800&h=600&fit=crop",
    },
    {
      title: "Remote Monitoring Deployment",
      description:
        "Continuous monitoring platform lowered readmission rates and enabled early interventions.",
      image:
        "https://images.unsplash.com/photo-1586773860413-7a4a1b0b3a99?w=800&h=600&fit=crop",
    },
  ];

  return (
    <section className="defence-work-impact-section">
      <div className="defence-work-impact-container">
        {/* Header */}
        <h2 className="defence-work-impact-title">
          Work That Delivers <span className="defence-work-impact-title-highlight">Real</span> Impact
        </h2>

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
                    <h3 className="defence-work-impact-card-title">{study.title}</h3>
                    <p className="defence-work-impact-card-description">{study.description}</p>
                  </div>

                  {/* CTA */}
                  <button className="defence-work-impact-cta">
                    <span className="defence-work-impact-cta-text">View Case Study →</span>
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
