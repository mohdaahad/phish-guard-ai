export default function WorkflowSection() {
  const steps = [
    {
      number: "01",
      title: "Understand",
      description: "Deep dive into goals & constraints.",
    },
    {
      number: "02",
      title: "Design",
      description: "Architect secure & scalable systems.",
    },
    {
      number: "03",
      title: "Build",
      description: "Agile development & rigorous testing.",
    },
    {
      number: "04",
      title: "Deploy",
      description: "Launch with long-term support.",
    },
  ];

  return (
    <section className="sol9x-workflow-section">
      <div className="sol9x-workflow-container">
        {/* Header - matching other sections */}
        <div className="sol9x-workflow-header">
          <h2 className="sol9x-workflow-title">
            A Proven Engineering <span className="sol9x-workflow-title-highlight">Workflow</span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="sol9x-workflow-steps">
          {steps.map((step, index) => (
            <div
              key={index}
              className="sol9x-workflow-step"
            >
              {/* Number Badge */}
              <div className="sol9x-workflow-badge">
                <span className="sol9x-workflow-badge-text">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div className="sol9x-workflow-step-content">
                <h3 className="sol9x-workflow-step-title">
                  {step.title}
                </h3>
                <p className="sol9x-workflow-step-description">
                  {step.description}
                </p>
              </div>

              {/* Connector Image */}
              <img
                src="/assets/Vector.svg"
                alt=""
                className="sol9x-workflow-connector"
              />

              {/* Bottom Blue Bar */}
              <div className="sol9x-workflow-bar"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
