export default function TrustedBySection() {
  const logos = [
    { name: "CDOT", src: "/assets/CDOT- 1.png" },
    { name: "DTU", src: "/assets/DTU_Delhi_official_logo.png" },
    { name: "MSME", src: "/assets/msme-logo-500x500.png" },
    { name: "Startup India", src: "/assets/startup-india-initiative-logo-vector-260nw-2327360117.png" },
    { name: "Wadhwani", src: "/assets/wadhwani.png" },
  ];

  return (
    <section className="py-10 px-10 bg-gradient-to-b from-[#fdfcfc] via-white to-[#fdfcfc] relative overflow-hidden max-md:px-4">
      <div className="flex flex-col items-center gap-12 max-w-[1440px] mx-auto">
        <h2 className="font-jakarta text-[clamp(28px,4vw,48px)] font-bold text-center text-foreground">
          Trusted by <span className="text-gradient-brand">Industry Leaders</span>
        </h2>

        <div className="w-full overflow-hidden relative py-5">
          <div className="absolute top-0 bottom-0 left-0 w-[150px] bg-gradient-to-r from-[#fdfcfc] to-transparent z-10 pointer-events-none max-md:w-20" />
          <div className="absolute top-0 bottom-0 right-0 w-[150px] bg-gradient-to-l from-[#fdfcfc] to-transparent z-10 pointer-events-none max-md:w-20" />

          <div className="flex items-center gap-6 animate-scroll-logos hover:[animation-play-state:paused]">
            {[...logos, ...logos, ...logos].map((logo, i) => (
              <div key={i} className="flex-shrink-0 w-40 h-24 p-0.5 rounded-2xl bg-glass-gradient transition-all duration-300 hover:-translate-y-2 hover:scale-105 max-md:w-28 max-md:h-20">
                <div className="w-full h-full flex items-center justify-center p-5 rounded-[14px] bg-white border border-border/50 shadow-card transition-all duration-300 hover:shadow-card-hover">
                  <img src={logo.src} alt={logo.name} className="max-h-14 max-w-28 object-contain transition-all duration-300 hover:scale-105 max-md:max-h-10 max-md:max-w-20" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
