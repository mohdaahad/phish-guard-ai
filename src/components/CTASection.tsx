import { useNavigate } from "react-router-dom";

export default function CTASection() {
  const navigate = useNavigate();
  return (
    <section className="py-20 px-20 max-md:px-4">
      <div className="max-w-[680px] mx-auto flex flex-col items-center gap-12 text-center">
        <div className="flex flex-col items-center gap-5">
          <h2 className="font-jakarta text-[clamp(32px,5vw,56px)] font-bold leading-tight tracking-tight">
            Ready to Build <span className="text-gradient-brand-animated">Smarter?</span>
          </h2>
          <p className="font-dm-sans text-base leading-relaxed text-text-secondary">
            Let's create technology that transforms your operations and drives measurable results.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-5 max-md:flex-col max-md:w-full">
          <button onClick={() => navigate("/contact-us")} className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-brand text-white font-jakarta font-semibold shadow-glow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-lg max-md:w-full max-md:justify-center">
            Start Project
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button onClick={() => navigate("/contact-us")} className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-white text-primary border-2 border-primary font-jakarta font-semibold shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-md max-md:w-full max-md:justify-center">
            Contact Our Team
          </button>
        </div>
      </div>
    </section>
  );
}
