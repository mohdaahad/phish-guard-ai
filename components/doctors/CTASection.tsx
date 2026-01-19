import Image from "next/image"

export default function CTASection() {
  return (
    <section className="professionals-cta-section">
      <div className="professionals-cta-box">
        {/* Left Side - Image */}
        <div className="professionals-cta-image-container">
          <Image
            src="/assets/Doctor CTA.png"
            alt="Team collaboration"
            width={772}
            height={515}
            className="professionals-cta-image"
          />
        </div>

        {/* Right Side - Content */}
        <div className="professionals-cta-content">
          <div className="professionals-cta-text-wrapper">
            <h2 className="professionals-cta-heading">
              <span className="professionals-cta-heading-text">Your Idea</span>
              <span className="professionals-cta-heading-text-white"> Deserves the Right Support</span>
            </h2>
            <p className="professionals-cta-subtext sp-body-on-color">
              If you believe in what you&apos;re building, Sol9X is ready to back you.
            </p>
          </div>

          <button className="professionals-cta-button sp-body">
            <span>Apply for funding</span>
          </button>

          {/* Decorative Image */}
          <Image
            src="/assets/crown.svg"
            alt="Decorative element"
            width={78}
            height={81}
          // className="absolute hidden md:block left-[35px] bottom-[240px] rotate-[-20deg]"
          />
        </div>

        <Image
          src="/assets/Spiral 3.svg"
          alt="spiral"
          width={119}
          height={300}
          className="absolute hidden md:block right-[0px] bottom-[0px] rotate-[10deg]"
        />
      </div>
    </section>
  )
}
