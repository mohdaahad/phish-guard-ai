'use client';

export default function TrustedBySection() {
  const logos = [
    {
      src: "/assets/stpi.jpeg",
      alt: "STPI",
      name: "Software Technology Parks of India",
      width: 78,
      height: 44.383,
    },
    {
      src: "/assets/siemac.jpeg",
      alt: "Siemac",
      name: "Siemac",
      width: 78,
      height: 44.383,
    },
    {
      src: "/assets/wadhwani.jpeg",
      alt: "Wadhwani",
      name: "Wadhwani Foundation",
      width: 78,
      height: 44.383,
    },
    {
      src: "/assets/fpt.jpeg",
      alt: "FPT",
      name: "FPT",
      width: 78,
      height: 44.383,
    },
    {
      src: "/assets/wespark.jpeg",
      alt: "WeSpark",
      name: "WeSpark",
      width: 78,
      height: 44.383,
    },
    {
      src: "/assets/msme-logo-500x500.jpeg",
      alt: "MSME",
      name: "Ministry of MSME",
      width: 61,
      height: 48.19,
    },
    {
      src: "/assets/DTU_Delhi_official_logo.jpeg",
      alt: "DTU Delhi",
      name: "Delhi Technological University",
      width: 60,
      height: 60,
    },
    {
      src: "/assets/CDOT- 1.jpeg",
      alt: "CDOT",
      name: "Centre for Development of Telematics",
      width: 52,
      height: 52,
    },
    {
      src: "/assets/startup-india-initiative-logo-vector-260nw-2327360117.jpeg",
      alt: "Startup India",
      name: "Startup India Initiative",
      width: 141,
      height: 40.733,
    },
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="sol9x-trusted-section">
      <div className="sol9x-trusted-container">
        {/* Header - matching SolutionsSection structure */}
        

        {/* Logos Carousel with glassmorphism */}
        <div className="sol9x-trusted-logos-wrapper">
          <div className="sol9x-trusted-logos-gradient-left"></div>
          <div className="sol9x-trusted-logos-gradient-right"></div>

          <div className="sol9x-trusted-logos-track">
            {duplicatedLogos.map((logo, index) => (
              <div key={index} className="sol9x-trusted-logo-card">
                <div className="sol9x-trusted-logo-card-inner">
                  <div className="sol9x-trusted-logo-card-glow"></div>
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="sol9x-trusted-logo-img"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
