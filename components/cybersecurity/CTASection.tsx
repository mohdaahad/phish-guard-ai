'use client'
import { useRouter } from "next/navigation";
export default function CybersecurityCTASection() {
  const router = useRouter();
  return (
    <section className="defence-cta-section">
      <div className="defence-cta-container">
        {/* Text Content */}
        <div className="defence-cta-content">
          <h2 className="defence-cta-title">
            Secure Your <span className="defence-cta-title-highlight">Organization</span>
          </h2>
          <p className="defence-cta-description">
            Implement enterprise-grade AI-powered cybersecurity to protect against evolving threats
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="defence-cta-buttons">
          <button className="defence-cta-btn-primary" onClick={() => router.push("/contact-us")}>
            <span className="defence-cta-btn-text">Schedule Demo</span>
            <svg className="defence-cta-btn-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="defence-cta-btn-secondary" onClick={() => router.push("/contact-us")}>
            <span className="defence-cta-btn-text">Contact Our Team</span>
            <svg className="defence-cta-btn-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 3V8M8 8V13M8 8H13M8 8H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
