"use client"
import Image from "next/image"

export default function AboutSection({ activeTab, setActiveTab }: any) {
  const doctorImages = [
    "/assets/doctors-main.svg",
  ]

  return (
    <div className="doctor-about-container">
      {/* Tab Navigation */}
      <div className="professionals-tab-navigation">
        <div className="professionals-tab-container">
          <div className="professionals-tab-divider" />
          <div className="professionals-tab-wrapper">
            <button
              onClick={() => setActiveTab("doctors")}
              className={`professionals-tab-button  sp-body-sm ${activeTab === "doctors" ? "active" : ""
                }`}
            >
              <span className="professionals-tab-text">
                Doctors
              </span>
            </button>

            <button
              onClick={() => setActiveTab("professors")}
              className={`professionals-tab-button sp-body-sm ${activeTab === "professors" ? "active" : ""
                }`}
            >
              <span className="professionals-tab-text">
                Professors
              </span>
            </button>

            <button
              onClick={() => setActiveTab("professionals")}
              className={`professionals-tab-button sp-body-sm ${activeTab === "professionals" ? "active" : ""
                }`}
            >
              <span className="professionals-tab-text">
                Professionals
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* About Content */}
      <section className="professionals-about-section">
        <div className="professionals-about-inner">
          <div className="professionals-about-content">
            {/* Images on Left */}
            <div className="professionals-about-image-container">
              <Image
                src="/assets/DoctorU-WHY.png"
                alt="Doctors"
                width={720}
                height={720}
                className="object-contain"
                priority
              />
            </div>

            {/* Text Content on Right */}
            <div className="professionals-about-text-container">
              <h2 className="professionals-about-title poppins-font">
                <span className="professionals-about-title-highlight">Sol9X Startup</span>
                <span> Program Built for Doctors Driving Healthcare Innovation</span>
              </h2>

              <div className="professionals-about-description sp-body">
                <p>
                  Doctors and healthcare professionals generate powerful ideas, insights, and innovations but many never
                  leave the clinical world. Sol9X exists to bridge that gap.
                  <br />
                  <br />
                  We help healthcare professionals turn medical research, clinical frameworks, and healthcare
                  innovations into real products, platforms, and ventures that create measurable impact beyond hospitals
                  and clinics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
