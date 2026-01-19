import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const industries = ["Defense", "Healthcare", "Education", "Fintech", "Manufacturing", "Media & Entertainment"];

export default function HeroSection() {
  const navigate = useNavigate();
  const [currentIndustry, setCurrentIndustry] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndustry((prev) => (prev + 1) % industries.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[95vh] flex items-center justify-center overflow-hidden">
      {/* Background Ring Animation */}
      <div className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 w-[300px] h-[150px] border-[25px] border-primary rounded-t-full border-b-0 blur-[30px] opacity-0 animate-ring-expand pointer-events-none z-[1]" />
      
      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-[154px] bg-gradient-to-b from-white to-[#fdfcfc] blur-[37px]" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-[1400px] flex flex-col items-center gap-5 px-10 py-8 mt-[-32px] max-md:px-4">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/90 border border-primary/30 shadow-glow-sm backdrop-blur-lg animate-slide-up">
          <div className="w-2 h-2 rounded-full bg-gradient-brand shadow-glow-sm animate-pulse-glow" />
          <span className="font-dm-sans text-xs font-medium tracking-wide text-text-secondary">
            Growth Drivers of the Nation by The Times of India
          </span>
        </div>

        {/* Headlines */}
        <div className="flex flex-col items-center gap-4 w-full">
          <div className="flex flex-col items-center w-[90%] max-w-[1200px]">
            <h1 className="font-jakarta text-[clamp(32px,6vw,68px)] font-bold leading-[1.15] tracking-tight text-center text-foreground animate-slide-up">
              Build Sustainable Secure
              <br />
              AI Solutions for
            </h1>

            {/* Rotating Industry */}
            <div className="relative h-[85px] w-full overflow-hidden max-md:h-[50px]">
              {industries.map((industry, index) => (
                <div
                  key={industry}
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                    index === currentIndustry
                      ? "opacity-100 translate-y-0"
                      : index === (currentIndustry - 1 + industries.length) % industries.length
                      ? "opacity-0 -translate-y-full"
                      : "opacity-0 translate-y-full"
                  }`}
                >
                  <span className="font-jakarta text-[clamp(24px,6.5vw,68px)] font-bold leading-[1.2] tracking-tight whitespace-nowrap text-gradient-brand-animated">
                    {industry}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <p className="font-dm-sans text-lg leading-relaxed text-center text-text-secondary max-w-[720px] animate-slide-up max-md:text-sm">
            Intelligent systems and secure infrastructure that accelerate operations, reduce costs, and eliminate manual workloads.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-5 animate-slide-up max-md:flex-col max-md:w-full">
          <button
            onClick={() => navigate("/contact-us")}
            className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-gradient-brand shadow-glow-md font-jakarta text-[15px] font-bold text-white border-none cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-lg max-md:w-full max-md:justify-center"
          >
            Book Consultation
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="inline-flex items-center gap-2 h-12 px-7 rounded-full border-2 border-primary font-jakarta text-[15px] font-bold text-primary bg-white/80 backdrop-blur-lg cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-md max-md:w-full max-md:justify-center">
            Our Products
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 3V8M8 8V13M8 8H13M8 8H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
