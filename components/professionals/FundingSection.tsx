"use client"

import Image from "next/image"

export default function FundingSection() {
  return (
    <section className="professionals-funding-section">
      <div className="professionals-funding-container">
        {/* Desktop Layout */}
        <div className="professionals-funding-desktop">
          {/* LEFT: Text Content */}
          <div className="professional-funding-content">
            <div className="professionals-funding-text-wrapper">
              <h2 className="professionals-funding-title ">
                Funding That Helps You <span className="professionals-funding-title-highlight">Build and Scale</span>
              </h2>

              <p className="professionals-funding-description sp-body">
                Our funding is designed to help founders move forward at critical stages from product development and
                team building to go to market execution.
              </p>

              <p className="professionals-funding-list-label sp-body">
                Funding can be used for:
              </p>

              <ul className="professionals-funding-list sp-body">
                <li>Product and technology development</li>
                <li>Hiring key team members</li>
                <li>Market validation and customer acquisition</li>
                <li>Operational and growth expenses</li>
              </ul>
            </div>
          </div>

          {/* RIGHT: Staircase with Image */}
          <div className="professionals-funding-image-wrapper">
            <div className="professionals-funding-staircase">
              {/* STEP 3 - Bottom Step (Below Text) */}
              <div className="staircase-step step-3">
                <div className="step-content" />
              </div>

              {/* STEP 2 - Middle Step */}
              <div className="staircase-step step-2">
                <div className="step-content" />
              </div>

              {/* STEP 1 - Top Step */}
              <div className="staircase-step step-1">
                <div className="step-content" />
              </div>

              {/* IMAGE - Positioned over steps */}
              <div className="professionals-funding-image-overlay">
                <div className="professionals-funding-image-inner">
                  <Image src="/assets/professionals-funding.svg" alt="Funding" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="professionals-funding-mobile">
          {/* Text Content */}
          <div className="professional-funding-content-mobile">
            <h2 className="professionals-funding-title-mobile">
              Funding That Helps You <span className="professionals-funding-title-highlight"> <br />Build and Scale</span>
            </h2>

            <p className="professionals-funding-description-mobile sp-body">
              Our funding is designed to help founders move forward at critical stages from product development and team
              building to go to market execution.
            </p>

            <p className="professionals-funding-list-label-mobile sp-body">
              Funding can be used for:
            </p>

            <ul className="professionals-funding-list-mobile sp-body">
              <li>Product and technology development</li>
              <li>Hiring key team members</li>
              <li>Market validation and customer acquisition</li>
              <li>Operational and growth expenses</li>
            </ul>
          </div>

          {/* Image with Staircase - Mobile */}
          <div className="professionals-funding-image-wrapper-mobile">
            <div className="professionals-funding-staircase-mobile">
              {/* STEP 3 - Bottom Step */}
              <div className="staircase-step-mobile step-3-mobile">
                <div className="step-content-mobile" />
              </div>

              {/* STEP 2 - Middle Step */}
              <div className="staircase-step-mobile step-2-mobile">
                <div className="step-content-mobile" />
              </div>

              {/* STEP 1 - Top Step */}
              <div className="staircase-step-mobile step-1-mobile">
                <div className="step-content-mobile" />
              </div>

              {/* IMAGE */}
              <div className="professionals-funding-image-overlay-mobile">
                <div className="professionals-funding-image-inner-mobile">
                  <Image src="/assets/professionals-funding.svg" alt="Funding" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
