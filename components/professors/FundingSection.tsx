import Image from "next/image";

export default function FundingSection() {
  return (

    <section className="professionals-funding-section">
      <div className="professionals-funding-container">
        <div className="professionals-funding-desktop">

          {/* Text Content */}
          <div className="professional-funding-content">
            <div className="professionals-funding-text-wrapper">

              <h2>
                Funding for{" "}
                <span className="sp-accent">Research Driven</span> Innovation
                <br />
                Funding support of up to{" "}
                <span className="sp-accent">₹50,00,000</span>
              </h2>
              <p className="sp-body">
                Your ideas deserve the resources to become something tangible.
                Sol9X provides funding to move from theory to application
                supporting prototyping, validation, and commercialization.
              </p>

              <p className="sp-body-medium">
                Funding can be used for:
              </p>
              <ul className="sp-body funding-list-item">
                <li>Productizing research or academic concepts</li>
                <li>Building prototypes or pilot programs</li>
                <li>Market testing and early adoption</li>
                <li>Forming teams and venture structures</li>
              </ul>

            </div>
          </div>

          {/* Image */}
          <div className="professionals-funding-image-wrapper">
            <div className="professionals-funding-staircase">
              <div className="professionals-funding-image-overlay">
                <div className="professionals-funding-image-inner">
                  <Image
                    src="/assets/Professors Funding.png"
                    alt="Funding support"
                    fill
                    className="object-cover"
                    objectPosition="10% Center"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Mobile */}
        <div className="professionals-funding-mobile">
          <div className="professional-funding-content-mobile">

            <h2>
              Funding for{" "}
              <span className="sp-accent">Research Driven</span> Innovation

              Funding support of up to{" "}
              <span className="sp-accent">₹50,00,000</span>
            </h2>

            <p className="sp-body">
              Your ideas deserve the resources to become something tangible.
              Sol9X provides funding to move from theory to application
              supporting prototyping, validation, and commercialization.
            </p>

            <div className="professional-funding-list-mobile-wrapper">
              <p className="sp-body-semibold">
                Funding can be used for:
              </p>
              <ul className="sp-body funding-list-item">
                <li>Productizing research or academic concepts</li>
                <li>Building prototypes or pilot programs</li>
                <li>Market testing and early adoption</li>
                <li>Forming teams and venture structures</li>
              </ul>
            </div>
          </div>

          <div className="professionals-funding-image-wrapper-mobile">
            <div className="professionals-funding-staircase-mobile">
              <div className="professionals-funding-image-overlay-mobile">
                <div className="professionals-funding-image-inner-mobile">
                  <Image
                    src="/assets/Professors Funding.png"
                    alt="Funding support"
                    fill
                    className="object-cover"
                    objectPosition="Right 20%"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
