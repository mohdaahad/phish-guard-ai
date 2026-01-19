'use client';

import { useState } from "react";

export default function DefenceFAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs = [
    {
      question: "Can Sol9X handle mission-critical defence systems?",
      answer: "Yes. Our solutions are designed for environments where failure is not an option. We engineer systems with redundancy, secure architectures, and operational resilience to support real-world defence and security deployments.",
    },
    {
      question: "How do you ensure security and compliance across defence solutions?",
      answer: "We implement military-grade security protocols, zero-trust architectures, and continuous compliance monitoring. All solutions undergo rigorous security audits and penetration testing before deployment.",
    },
    {
      question: "Do your solutions work in low-connectivity or offline environments?",
      answer: "Yes, many of our solutions are designed for offline and low-connectivity environments. We offer on-device AI processing, edge computing capabilities, and air-gapped deployment options for classified operations.",
    },
    {
      question: "How customizable are your defence solutions?",
      answer: "Our solutions are highly customizable to meet specific mission requirements. We work closely with defence organizations to tailor systems for their unique operational needs, from hardware integration to software customization.",
    },
  ];

  return (
    <section className="defence-faq-section">
      <div className="defence-faq-container">
        {/* Sidebar */}
        <div className="defence-faq-sidebar">
          {/* Title */}
          <h2 className="defence-faq-title">
            Frequently Asked <span className="defence-faq-title-highlight">Questions</span>
          </h2>

          {/* Contact */}
          <div className="defence-faq-contact">
            <p className="defence-faq-contact-text">
              Can't find what you're looking for?
            </p>
            <a href="#" className="defence-faq-contact-link">
              Contact our support team.
            </a>
          </div>
        </div>

        {/* FAQ List */}
        <div className="defence-faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="defence-faq-item">
            <div className="defence-faq-question-wrapper" onClick={() => setOpenIndex(openIndex === index ? -1 : index)}>
              <div className="defence-faq-question-content">
                <h3 className="defence-faq-question">
                  {faq.question}
                </h3>
                {openIndex === index && (
                  <p className="defence-faq-answer">
                    {faq.answer}
                  </p>
                )}
              </div>
              
              {/* Icon */}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="defence-faq-icon">
                <path d="M4.16797 10H15.8346" stroke="#404040" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                {openIndex !== index && (
                  <path d="M10 4.16602V15.8327" stroke="#404040" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                )}
              </svg>
            </div>

            {/* Divider */}
            <div className="defence-faq-divider"></div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}
