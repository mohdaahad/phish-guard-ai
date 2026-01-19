import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="professionals-hero">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <Image src="/assets/hero-section.svg" alt="Doctors collaboration" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="professionals-hero-content">
        <div className="professionals-hero-text-group">
          <div className="professionals-hero-headline-wrapper">
            <h1 className="professionals-hero-headline poppins-font">
              Turn Your Startup Idea Into a Funded Reality
            </h1>
            <p className="professionals-hero-description poppins-font">
              We support bold founders with funding up to <span className="font-semibold">₹50Lacs</span>, hands-on
              mentorship, and execution-focused guidance to build scalable startups.
            </p>
          </div>
          <button className="professionals-hero-button poppins-font">
            <span>Apply for funding</span>
          </button>
        </div>

        <p className="professionals-hero-disclaimer poppins-font">
          *From early ideas to growth-ready ventures, Sol9X partners with you to move from vision to real-world impact.
        </p>
      </div>
    </section>
  )
}
