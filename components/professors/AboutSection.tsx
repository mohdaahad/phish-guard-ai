"use client"

import Image from "next/image"

export default function AboutSection({ activeTab, setActiveTab }: any) {
  return (
    <div className="w-full max-w-[1440px] flex flex-col items-center">
      {/* Tab Navigation */}
      <div className="professionals-tab-navigation">
        <div className="professionals-tab-container">
          <div className="professionals-tab-divider" />
          <div className="professionals-tab-wrapper">
            {/* Doctors Tab */}
            <button
              onClick={() => setActiveTab("doctors")}
              className={`professionals-tab-button sp-body-semibold ${activeTab === "doctors" ? "active" : ""}`}
            >
              <span className={`professionals-tab-text sp-body-semibold ${activeTab === "doctors" ? "active" : ""}`}>
                Doctors
              </span>
            </button>

            {/* Professors Tab */}
            <button
              onClick={() => setActiveTab("professors")}
              className={`professionals-tab-button sp-body-semibold ${activeTab === "professors" ? "active" : ""}`}
            >
              <span className={`professionals-tab-text sp-body-semibold ${activeTab === "professors" ? "active" : ""}`}>
                Professors
              </span>
            </button>

            {/* Professionals Tab */}
            <button
              onClick={() => setActiveTab("professionals")}
              className={`professionals-tab-button sp-body-semibold ${activeTab === "professionals" ? "active" : ""}`}
            >
              <span className={`professionals-tab-text sp-body-semibold ${activeTab === "professionals" ? "active" : ""}`}>
                Professionals
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* About Content */}
      <section className="professionals-about-section">
        <div className="professionals-about-container">
          {/* Text Content */}
          <div className="professionals-about-content-wrapper">
            <h2 className="professionals-about-heading h2">
              <span className="professionals-about-highlight">Sol9X Startup</span>
              <span className="professionals-about-main"> Built for Professors Driving Real-World Impact</span>
            </h2>
            <div className="professionals-about-text-group">
              <p className="professionals-about-description sp-body">
                Professors and researchers generate powerful ideas, insights, and innovations but many never leave the
                academic world. Sol9X exists to bridge that gap.
                <br />
                <br />
                We help academic professionals turn research, frameworks, and intellectual work into real products,
                platforms, and ventures that create measurable impact beyond classrooms and journals.
              </p>
            </div>
          </div>

          {/* Background Image */}
          <div className="professionals-about-image-bg">
            <Image
              src="/assets/Professors Why.png"
              alt="Professors in classroom"
              width={1266}
              height={563}
              className="professionals-about-image"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
