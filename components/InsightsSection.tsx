"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

type Insight = {
  category: string;
  date: string;
  title: string;
  description: string;
  image: string;
};

const INSIGHTS: Insight[] = [
  {
    category: "Technology",
    date: "Oct 24, 2025",
    title: "The Future of Edge AI in Manufacturing",
    description: "How local processing is reducing latency and cost in smart factories.",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/514052276dadee68e2e10b13abf4b1000d4f0237?width=816",
  },
  {
    category: "Security",
    date: "Oct 24, 2025",
    title: "Securing Digital Twins Against Threats",
    description: "Best practices for protecting virtual infrastructure replicas.",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/b56ad179fbcd2c19e1448825922ebd9c089da58c?width=816",
  },
  {
    category: "Fintech",
    date: "Oct 24, 2025",
    title: "Automating Compliance Standards",
    description: "Using AI to navigate the complex landscape of financial regulations.",
    image:
      "/assets/simon-kadula-8gr6bObQLOI-unsplash.jpg",
  },
];

const INSIGHTS_COUNT = INSIGHTS.length;

export default function InsightsSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToNext = useCallback(() => {
    setCurrent((value) => (value + 1) % INSIGHTS_COUNT);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrent((value) => (value - 1 + INSIGHTS_COUNT) % INSIGHTS_COUNT);
  }, []);

  const handleDotClick = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  const handleInteractionStart = useCallback(() => {
    setIsPaused(true);
  }, []);

  const handleInteractionEnd = useCallback(() => {
    setIsPaused(false);
  }, []);

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const interval = setInterval(goToNext, 4000);
    return () => clearInterval(interval);
  }, [goToNext, isPaused]);

  const currentInsight = INSIGHTS[current];

  const trackStyle = useMemo(
    () => ({
      transform: `translateX(-${current * 100}%)`,
      width: `${INSIGHTS_COUNT * 100}%`,
    }),
    [current],
  );

  const announcement = `${currentInsight.category} insight: ${currentInsight.title} published on ${currentInsight.date}.`;

  return (
    <section className="sol9x-insights-section">
      <div className="sol9x-insights-announcement" aria-live="polite">
        {announcement}
      </div>
      <div className="sol9x-insights-container">
        {/* Header */}
        <div className="sol9x-insights-header">
          <h2 className="sol9x-insights-title">
            <span className="sol9x-insights-title-highlight">Insights</span> That Help You Grow
          </h2>

          {/* Insights Grid / Slider */}
          <div
            className="sol9x-insights-grid"
            onMouseEnter={handleInteractionStart}
            onMouseLeave={handleInteractionEnd}
            onTouchStart={handleInteractionStart}
            onTouchEnd={handleInteractionEnd}
          >
            <div className="sol9x-insights-track" style={trackStyle}>
              {INSIGHTS.map((insight, index) => (
                <div key={index} className="sol9x-insights-card">
                  <div
                    className="sol9x-insights-image"
                    style={{
                      backgroundImage: `url('${insight.image}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="sol9x-insights-badge">
                      <span className="sol9x-insights-badge-text">{insight.category}</span>
                    </div>
                  </div>

                  <div className="sol9x-insights-content">
                    <div className="sol9x-insights-text-wrapper">
                      <div className="sol9x-insights-date">
                        <div className="sol9x-insights-date-inner">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path
                              d="M6.66797 1.66602V4.99935"
                              stroke="#768498"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M13.332 1.66602V4.99935"
                              stroke="#768498"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M15.8333 3.33398H4.16667C3.24619 3.33398 2.5 4.08018 2.5 5.00065V16.6673C2.5 17.5878 3.24619 18.334 4.16667 18.334H15.8333C16.7538 18.334 17.5 17.5878 17.5 16.6673V5.00065C17.5 4.08018 16.7538 3.33398 15.8333 3.33398Z"
                              stroke="#768498"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M2.5 8.33398H17.5"
                              stroke="#768498"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="sol9x-insights-date-text">{insight.date}</span>
                        </div>
                      </div>

                      <div className="sol9x-insights-text-content">
                        <h3 className="sol9x-insights-card-title">{insight.title}</h3>
                        <p className="sol9x-insights-card-description">{insight.description}</p>
                      </div>
                    </div>

                    <button className="sol9x-insights-cta">
                      <span className="sol9x-insights-cta-text">Read Article</span>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                          d="M4.16797 10H15.8346"
                          stroke="#0197FF"
                          strokeWidth="1.618"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 4.16602L15.8333 9.99935L10 15.8327"
                          stroke="#0197FF"
                          strokeWidth="1.618"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="sol9x-insights-slider-footer">
            <div className="sol9x-insights-slider-controls">
              <button
                type="button"
                className="sol9x-insights-slider-btn"
                onFocus={handleInteractionStart}
                onBlur={handleInteractionEnd}
                onMouseEnter={handleInteractionStart}
                onMouseLeave={handleInteractionEnd}
                onClick={goToPrevious}
                aria-label="Show previous insight"
              >
                Previous
              </button>
              <button
                type="button"
                className="sol9x-insights-slider-btn"
                onFocus={handleInteractionStart}
                onBlur={handleInteractionEnd}
                onMouseEnter={handleInteractionStart}
                onMouseLeave={handleInteractionEnd}
                onClick={goToNext}
                aria-label="Show next insight"
              >
                Next
              </button>
            </div>

            <div className="sol9x-insights-dots">
              {INSIGHTS.map((_, index) => (
                <button
                  key={index}
                  className={`sol9x-insights-dot ${index === current ? "active" : ""}`}
                  onClick={() => handleDotClick(index)}
                  onFocus={handleInteractionStart}
                  onBlur={handleInteractionEnd}
                  aria-label={`Show insight ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* View All */}
        <button className="sol9x-insights-view-all">
          <span className="sol9x-insights-view-all-text">View All Articles</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M4.16797 10L15.8346 10"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 4.16602L15.8333 9.99935L10 15.8327"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
