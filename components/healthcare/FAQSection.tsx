'use client';

import { useState } from 'react';

export default function HealthcareFAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs = [
    {
      question: "How does your AI assist healthcare professionals?",
      answer: "Our Health AI Assistant provides real-time clinical decision support, diagnostic recommendations, and predictive analytics to help doctors make informed treatment decisions and improve patient outcomes.",
    },
    {
      question: "What data does the predictive model use?",
      answer: "Our predictive models leverage electronic health records (EHR), claims data, and time-series health metrics to forecast patient risks including readmission, mortality, and disease progression.",
    },
    {
      question: "Is the health band suitable for chronic disease monitoring?",
      answer: "Yes, our Smart Continuous Health Band is specifically designed for long-term patient monitoring with up to 1-year battery life, making it ideal for chronic disease management and continuous health tracking.",
    },
    {
      question: "How does your imaging AI detect diseases?",
      answer: "Our imaging AI uses deep learning algorithms trained on large medical imaging datasets to detect early signs of cancer, cardiovascular disease, and lung conditions with high accuracy and sensitivity.",
    },
    {
      question: "What hospital processes can be automated?",
      answer: "Our Hospital Process Automation Systems streamline administrative workflows, appointment scheduling, billing, inventory management, and patient communication to improve operational efficiency.",
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
