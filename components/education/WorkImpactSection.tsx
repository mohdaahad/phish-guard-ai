export default function EducationWorkImpactSection() {
  const caseStudies = [
    {
      title: "Adaptive Learning Pilot",
      description:
        "Personalized learning paths increased topic mastery by 32% and reduced dropout rates.",
      image:
        "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&h=600&fit=crop",
    },
    {
      title: "VR Classroom Engagement",
      description:
        "Immersive VR modules boosted student engagement and collaborative problem solving across cohorts.",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
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
