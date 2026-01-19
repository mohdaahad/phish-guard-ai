export default function SolutionsSection() {
  return (
    <section className="py-20 px-20 max-md:px-4 max-md:py-10">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center gap-16">
        <h2 className="font-jakarta text-[clamp(28px,4vw,48px)] font-bold text-center">
          Our <span className="text-gradient-brand">Solutions</span>
        </h2>
        <div className="grid grid-cols-4 gap-6 w-full max-lg:grid-cols-2 max-md:grid-cols-1">
          {[
            { title: "Custom AI Solutions", desc: "Tailored AI systems for your specific needs" },
            { title: "Cybersecurity", desc: "Enterprise-grade security solutions" },
            { title: "Digital Twin", desc: "Virtual replicas for optimization" },
            { title: "Edge AI", desc: "AI at the edge for real-time processing" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col gap-5 p-8 rounded-[20px] bg-white/80 backdrop-blur-xl border border-primary/10 shadow-card transition-all duration-400 cursor-pointer hover:-translate-y-2 hover:shadow-card-hover hover:border-primary/30">
              <div className="w-[72px] h-[72px] flex items-center justify-center rounded-2xl bg-glass-gradient transition-all duration-400 group-hover:scale-110 group-hover:bg-gradient-brand">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-primary">
                  <rect x="8" y="8" width="24" height="24" rx="4" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="font-jakarta text-xl font-bold text-foreground">{item.title}</h3>
                <p className="font-dm-sans text-sm leading-relaxed text-text-secondary">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
