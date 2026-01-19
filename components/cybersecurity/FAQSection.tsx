'use client';

import { useState } from 'react';

export default function CybersecurityFAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs = [
    {
      question: "How does CyberFabric detect network threats?",
      answer: "CyberFabric uses advanced AI algorithms to analyze network traffic patterns, identify anomalies, and detect known and unknown threats in real-time with minimal false positives.",
    },
    {
      question: "What is behavioral biometrics and how does it work?",
      answer: "Our Chitraksha system learns individual user behavior patterns and continuously authenticates users based on their unique interactions, detecting unauthorized access attempts immediately.",
    },
    {
      question: "How does your compliance monitoring tool help with regulations?",
      answer: "Our AI-powered tool automatically monitors compliance across multiple regulatory frameworks, tracks policy adherence, generates audit reports, and alerts on potential violations.",
    },
    {
      question: "What makes quantum secure communication important?",
      answer: "Quantum secure communications protect against future quantum computing threats, ensuring sensitive communications remain secure even as computing technology evolves.",
    },
    {
      question: "What is AI-SecOps and why is it important?",
      answer: "AI-SecOps applies artificial intelligence to security operations, enabling autonomous threat detection, faster incident response, and continuous risk management at scale.",
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
                  <path d="M4.16797 10H15.8346" stroke="#404040" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  {openIndex !== index && (
                    <path d="M10 4.16602V15.8327" stroke="#404040" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
