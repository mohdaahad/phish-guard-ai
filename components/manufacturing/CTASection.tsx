'use client';

import { useRouter } from "next/navigation";

export default function ManufacturingCTASection() {
    const router = useRouter();
    return (
    <section className="defence-cta-section">
      <div className="defence-cta-container">
        {/* Text Content */}
        <div className="defence-cta-content">
          <h2 className="defence-cta-title">
            Ready to Transform Your <span className="defence-cta-title-highlight">Manufacturing Operations</span>?
          </h2>
          <p className="defence-cta-description">
            Let's build smart, connected systems that optimize production, reduce costs, and drive Industry 4.0 transformation.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="defence-cta-buttons">
          <button className="defence-cta-btn-primary">
            <span className="defence-cta-btn-text" onClick={() => router.push("/contact-us")}>Book Consultation</span>
            <svg className="defence-cta-btn-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="defence-cta-btn-secondary">
            <span className="defence-cta-btn-text" onClick={() => router.push("/contact-us")}>Contact Our Team</span>
            <svg className="defence-cta-btn-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 3V8M8 8V13M8 8H13M8 8H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
