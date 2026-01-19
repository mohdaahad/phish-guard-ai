'use client';

import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs = [
    {
      question: "Do you offer long-term support?",
      answer: "We primarily serve Defense, Manufacturing, Healthcare, Education, and Fintech sectors, focusing on high-stakes environments requiring precision and security.",
    },
    {
      question: "How does a project begin?",
      answer: "We start with a consultation to understand your goals and constraints, then design a solution that meets your needs.",
    },
    {
      question: "Can Sol9X handle mission-critical systems?",
      answer: "Yes, we specialize in mission-critical systems with 99.9% uptime and zero-trust security architecture.",
    },
    {
      question: "Do you offer long-term support?",
      answer: "Yes, we provide long-term support and maintenance for all our solutions.",
    },
  ];

  return (
    <section className="sol9x-faq-section">
      <div className="sol9x-faq-container">
        <div className="sol9x-faq-sidebar">
          {/* Title */}
          <h2 className="sol9x-faq-title">
            Frequently Asked <span className="sol9x-faq-title-highlight">Questions</span>
          </h2>

          {/* Contact */}
          <div className="sol9x-faq-contact">
            <p className="sol9x-faq-contact-text">
              Can't find what you're looking for?
            </p>
            <a href="#" className="sol9x-faq-contact-link">
              Contact our support team.
            </a>
          </div>
        </div>

        {/* FAQ List */}
        <div className="sol9x-faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="sol9x-faq-item">
              <div className="sol9x-faq-question-wrapper" onClick={() => setOpenIndex(openIndex === index ? -1 : index)}>
                <div className="sol9x-faq-question-content">
                  <h3 className="sol9x-faq-question">
                    {faq.question}
                  </h3>
                  {openIndex === index && (
                    <p className="sol9x-faq-answer">
                      {faq.answer}
                    </p>
                  )}
                </div>

                {/* Icon */}
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="sol9x-faq-icon">
                  <path d="M4.16797 10H15.8346" stroke="#404040" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  {openIndex !== index && (
                    <path d="M10 4.16602V15.8327" stroke="#404040" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  )}
                </svg>
              </div>

              {/* Divider */}
              <div className="sol9x-faq-divider"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
