import Image from "next/image"

export default function CTASection() {
  return (
    <section className="professionals-cta-section">
      <div className="professionals-cta-box">
        <div className="professionals-cta-image-container">
          <Image
            src="/assets/Professional-CTA.png"
            alt="Team collaboration"
            width={772}
            height={615}
            className="professionals-cta-image"
          />
        </div>

        <div className="professionals-cta-content">
          <div className="professionals-cta-text-wrapper">
            <h2 className="professionals-cta-heading poppins-font">
              <span className="professionals-cta-heading-bold">Your Idea</span>
              <span className="professionals-cta-heading-white"> Deserves the Right Support</span>
            </h2>
            <p className="professionals-cta-subtext sp-body-on-color">
              If you believe in what you&apos;re building, Sol9X is ready to back you.
            </p>
          </div>

          <button className="professionals-cta-button sp-body">
            <span className="professionals-cta-button-text">Apply for funding</span>
          </button>

          <Image
            src="/assets/crown.svg"
            alt="Decorative element"
            width={78}
            height={81}
            className="professionals-cta-crown"
          />
        </div>

        <Image
          src="/assets/Spiral 3.svg"
          alt="spiral"
          width={119}
          height={300}
          className="professionals-cta-spiral"
          style={{ strokeWidth: 3, stroke: "#FFF" }}
        />
      </div>
    </section>
  )
}
