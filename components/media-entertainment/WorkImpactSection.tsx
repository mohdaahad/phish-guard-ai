export default function MediaEntertainmentWorkImpactSection() {
  const caseStudies = [
    {
      title: "Autonomous Aerial Filming",
      description:
        "Cinematic drone systems reduced shoot times and enabled complex shots with fewer crew.",
      image:
        "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=800&h=600&fit=crop",
    },
    {
      title: "Synthetic Talent Prototype",
      description:
        "Synthetic characters and performance capture workflows accelerated content pipelines and lowered production costs.",
      image:
        "https://images.unsplash.com/photo-1504203700687-34d0b0d9e6a5?w=800&h=600&fit=crop",
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
