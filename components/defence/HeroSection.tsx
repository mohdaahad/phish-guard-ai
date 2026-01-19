'use client';

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const defenceMissions = [
  "Modern Missions",
  "National Security",
  "Strategic Operations",
  "Defence Innovation"
];

export default function DefenceHeroSection() {
  const router = useRouter();
  const [currentMission, setCurrentMission] = useState(0);
  const [particles, setParticles] = useState<Array<{ id: number, x: number, y: number, delay: number, duration: number }>>([]);

  const getMissionClass = (index: number) => {
    const totalMissions = defenceMissions.length;
    if (totalMissions === 0) return 'next';
    const distance = (index - currentMission + totalMissions) % totalMissions;
    if (distance === 0) return 'active';
    return distance === totalMissions - 1 ? 'prev' : 'next';
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMission((prev) => (prev + 1) % defenceMissions.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Generate floating particles
  useEffect(() => {
    const particleArray = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 15 + Math.random() * 10
    }));
    setParticles(particleArray);
  }, []);

  return (
    <section className="sol9x-hero">
      {/* Animated Particles Background */}
      <div className="sol9x-hero-particles">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="sol9x-hero-particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }}
          />
        ))}
      </div>

      {/* Background Gradient */}
      <div className="sol9x-hero-gradient"></div>

      {/* Animated Blue Ring */}
      <div className="sol9x-hero-ring"></div>

      {/* Content */}
      <div className="sol9x-hero-container relative z-20">

        {/* Premium Badge */}
        <div className="sol9x-hero-badge">
          <div className="sol9x-hero-badge-dot"></div>
          <span className="sol9x-hero-badge-text">
            Securing National Defense with Advanced AI Solutions
          </span>
        </div>

        {/* Main Content */}
        <div className="sol9x-hero-content">

          <div className="sol9x-hero-headlines">
            <div className="">
              <h1 className="sol9x-hero-headline">
                Advanced Defence & Security
                <br />
                Technologies for
              </h1>

              <div className="sol9x-hero-industry-container">
                {defenceMissions.map((mission, index) => (
                  <div
                    key={mission}
                    className={`sol9x-hero-industry-item ${getMissionClass(index)}`}
                  >
                    <span className="sol9x-hero-industry-text">
                      <span className="sol9x-hero-industry-text-gradient">{mission}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <p className="sol9x-hero-description">
              Building, innovating, and modernising secure systems that enhance situational awareness, decision-making, and operational readiness.
            </p>
          </div>

          <div className="sol9x-hero-cta">
            <button className="sol9x-hero-btn-primary" onClick={() => router.push("/contact-us")}>
              <span className="sol9x-hero-btn-text">Discuss Solutions</span>
              <svg className="sol9x-hero-btn-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
