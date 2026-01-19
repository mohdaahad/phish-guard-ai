'use client';

import { useState } from 'react';

export default function MediaEntertainmentFAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs = [
    {
      question: "How does deepfake detection protect content creators?",
      answer: "Our advanced deepfake detection uses AI to identify manipulated videos and audio, protecting creators' intellectual property and maintaining audience trust in authentic content.",
    },
    {
      question: "What are the capabilities of your cinematic drones?",
      answer: "Our aerial and underwater drones provide 4K/8K recording capabilities with advanced stabilization, enabling filmmakers to capture cinematic shots in challenging environments.",
    },
    {
      question: "How does AI-powered story generation work?",
      answer: "Our AI analyzes narrative patterns and creative elements to assist in story development, character creation, and plot structuring, accelerating the creative process.",
    },
    {
      question: "What is synthetic talent and how can it be used?",
      answer: "Our 3D synthetic characters and virtual talent can be used for films, games, and virtual events, providing cost-effective solutions without geographical limitations.",
    },
    {
      question: "How does social media monitoring protect your brand?",
      answer: "Our social media monitoring tool tracks mentions, analyzes sentiment, detects phishing attempts, and monitors unauthorized content distribution in real-time.",
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
