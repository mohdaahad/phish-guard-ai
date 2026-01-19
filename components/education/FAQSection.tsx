'use client';

import { useState } from 'react';

export default function EducationFAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs = [
    {
      question: "How does your VR-based learning platform enhance creativity?",
      answer: "Our VR-based stories create immersive learning environments that encourage experiential learning, critical thinking, and creative problem-solving through interactive scenarios and narratives.",
    },
    {
      question: "What is the accuracy of your NEET/IIT JEE rank predictors?",
      answer: "Our AI-powered predictors use advanced machine learning models trained on extensive exam data to provide highly accurate performance predictions with continuous improvement through feedback loops.",
    },
    {
      question: "Can your AI assistant help with multiple subjects?",
      answer: "Yes, our AI Student Virtual Assistants are equipped to support learning across multiple subjects with personalized explanations, problem-solving guidance, and 24/7 availability.",
    },
    {
      question: "How does adaptive learning personalize the educational experience?",
      answer: "Our adaptive learning systems analyze student performance, learning patterns, and preferences to dynamically adjust content difficulty, teaching methods, and pacing for optimal learning outcomes.",
    },
    {
      question: "What technical infrastructure is required for drone lab setup?",
      answer: "We provide comprehensive drone lab setup solutions including hardware, software, training, and ongoing support tailored to your institution's specific requirements.",
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
