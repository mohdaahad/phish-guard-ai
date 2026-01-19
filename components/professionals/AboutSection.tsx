"use client"
import Image from "next/image"

export default function AboutSection({ activeTab, setActiveTab }: any) {
  const professionalImages = [
    "/assets/professionals-main.svg",
  ]

  return (
    <div className="w-full max-w-[1440px] flex flex-col items-center">
      {/* Tab Navigation */}
      <div className="professionals-tab-navigation">
        <div className="professionals-tab-container">
          <div className="professionals-tab-divider" />
          <div className="professionals-tab-wrapper">
            <button
              onClick={() => setActiveTab("doctors")}
              className={`professionals-tab-button ${activeTab === "doctors" ? "active" : ""}`}
            >
              <span className={`professionals-tab-text ${activeTab === "doctors" ? "active" : ""}`}>
                Doctors
              </span>
            </button>

            <button
              onClick={() => setActiveTab("professors")}
              className={`professionals-tab-button ${activeTab === "professors" ? "active" : ""}`}
            >
              <span className={`professionals-tab-text ${activeTab === "professors" ? "active" : ""}`}>
                Professors
              </span>
            </button>

            <button
              onClick={() => setActiveTab("professionals")}
              className={`professionals-tab-button ${activeTab === "professionals" ? "active" : ""}`}
            >
              <span className={`professionals-tab-text ${activeTab === "professionals" ? "active" : ""}`}>
                Professionals
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* About Content */}
      <section className="professionals-about-section">
        <div className="professionals-about-container">
          <div className="professionals-about-flex">
            {/* Images on Left */}
            <div className="professionals-about-image-wrapper">
              <Image
                src="/assets/Professional Image.png"
                alt="Professionals"
                width={720}
                height={720}
                className="professionals-about-image-element"
                priority
              />
            </div>

            {/* Text Content on Right */}
            <div className="professionals-about-text-wrapper">
              <h2 className="professionals-about-heading poppins-font">
                <span className="professionals-about-highlight">Sol9X Startup</span>
                <span className="professionals-about-main"> Program Built for Professionals Creating Impact</span>
              </h2>

              <div className="professionals-about-text-group">
                <p className="professionals-about-description sp-body">
                  Professionals across industries generate powerful ideas, insights, and innovations but many never
                  leave their day jobs. Sol9X exists to bridge that gap.
                  <br />
                  <br />
                  We help professionals turn expertise, industry knowledge, and innovative solutions into real products,
                  platforms, and ventures that create measurable impact in their fields.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
