'use client';

import { useRouter } from "next/navigation";

  export default function CTASection() {
    const router = useRouter();
  return (
    <section className="sol9x-cta-section">
      <div className="sol9x-cta-container">
        {/* Text Content */}
        <div className="sol9x-cta-content">
          <h2 className="sol9x-cta-title">
            Ready to Build <span className="sol9x-cta-title-highlight">Smarter?</span>
          </h2>
          <p className="sol9x-cta-description">
            Let's create technology that transforms your operations and drives measurable results.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="sol9x-cta-buttons">
          <button className="sol9x-cta-btn-primary">
            <span className="sol9x-cta-btn-text" onClick={() =>router.push("/contact-us")}>Start Project</span>
            <svg className="sol9x-cta-btn-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="sol9x-cta-btn-secondary">
            <span className="sol9x-cta-btn-text" onClick={() =>router.push("/contact-us")}>Contact Our Team</span>
            <svg className="sol9x-cta-btn-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 3V8M8 8V13M8 8H13M8 8H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
