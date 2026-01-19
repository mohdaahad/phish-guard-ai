export default function CybersecurityWorkImpactSection() {
  const caseStudies = [
    {
      title: "Agentic SOC Implementation",
      description:
        "Automated SOC playbooks reduced mean-time-to-respond by over 55% while improving detection rates.",
      image:
        "https://images.unsplash.com/photo-1581091870626-3efb6b8a1b4a?w=800&h=600&fit=crop",
    },
    {
      title: "Enterprise-wide Threat Intelligence",
      description:
        "Integrated threat intelligence pipelines led to earlier detection of emerging campaigns and faster containment.",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
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
