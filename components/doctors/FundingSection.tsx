import Image from "next/image"

export default function FundingSection() {
  return (
    <section className="professional-funding-section">
      <div className="professionals-funding-container">
        <div className="professionals-funding-desktop">
          <div className="professional-funding-content">
            <div className="professionals-funding-text-wrapper">
              <h2 className="professionals-funding-title poppins-font">
                Funding that Respects <span className="professionals-funding-title-highlight">Healthcare Innovation</span>
                <br />
                Funding support of up to <span className="professionals-funding-title-highlight">₹50,00,000</span>
              </h2>

              <p className="professionals-funding-description sp-body">
                Your medical ideas deserve the resources to become something tangible. Sol9X provides funding to move from clinical concepts to scalable ventures supporting innovation, validation, and commercialization.
              </p>

              <p className="professionals-funding-list-label sp-body">
                Funding can be used for:
              </p>

              <ul className="professionals-funding-list sp-body">
                <li>Developing healthcare products or diagnostic tools</li>
                <li>Clinical validation and research</li>
                <li>Market testing and regulatory compliance</li>
                <li>Forming healthcare ventures and clinical teams</li>
              </ul>
            </div>
          </div>

          <div className="professionals-funding-image-wrapper">
            <div className="professionals-funding-staircase">
              <div className="professionals-funding-image-overlay">
                <div className="professionals-funding-image-inner">
                  <Image
                    src="/assets/Doctor Funding.png"
                    alt="Doctors"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="professionals-funding-mobile">
          <div className="professional-funding-content-mobile">
            <h2 className="professionals-funding-title-mobile ">
              Funding that Respects <span className="professionals-funding-title-highlight">Healthcare Innovation</span>
              <br />
              Funding support of up to <span className="professionals-funding-title-highlight">₹50,00,000</span>
            </h2>

            <p className="professionals-funding-description-mobile sp-body">
              Your medical ideas deserve the resources to become something tangible. Sol9X provides funding to move from clinical concepts to scalable ventures supporting innovation, validation, and commercialization.
            </p>

            <p className="professionals-funding-list-label-mobile sp-body">
              Funding can be used for:
            </p>

            <ul className="professionals-funding-list-mobile sp-body">
              <li>Developing healthcare products or diagnostic tools</li>
              <li>Clinical validation and research</li>
              <li>Market testing and regulatory compliance</li>
              <li>Forming healthcare ventures and clinical teams</li>
            </ul>
          </div>

          <div className="professionals-funding-image-wrapper-mobile">
            <div className="professionals-funding-staircase-mobile">
              <div className="professionals-funding-image-overlay-mobile">
                <div className="professionals-funding-image-inner-mobile">
                  <Image
                    src="/assets/Doctor Funding.png"
                    alt="Doctors"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
