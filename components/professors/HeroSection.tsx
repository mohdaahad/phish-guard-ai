import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="professionals-hero">
      {/* Background Image */}
      <div className="professionals-hero-bg">
        <Image
          src="/assets/Hero-bg.png"
          alt="Professors collaboration"
          fill
          className="professionals-hero-image"
          priority
        />
        <div className="professionals-hero-overlay" />
      </div>

      {/* Content */}
      <div className="professionals-hero-content">
        <div className="professionals-hero-text-group">
          <div className="professionals-hero-headline-wrapper">
            <h1 className="professionals-hero-headline poppins-font">
              Turn Your Startup Idea Into a Funded Reality
            </h1>
            <p className="professionals-hero-subtext sp-lead">
              We support bold founders with funding up to{" "}
              <span className="professionals-hero-highlight-text ">₹50Lacs</span>, hands-on mentorship,
              and execution-focused guidance to build scalable startups.
            </p>
          </div>
          <button className="professionals-hero-button">
            <span className="sp-button">
              Apply for funding
            </span>
          </button>
        </div>

        <p className="professionals-hero-footnote sp-body-sm">
          *From early ideas to growth-ready ventures, Sol9X partners with you to
          move from vision to real-world impact.
        </p>
      </div>
    </section>
  );
}
