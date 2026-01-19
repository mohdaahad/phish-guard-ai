import Image from "next/image";

export default function ProcessSection() {
  return (
    <section className="startup-process sp-bg-light">
      <h2>
        Our Simple, <span className="sp-accent">Founder-First</span> Process
      </h2>

      <div className="startup-process-image">
        <div className="startup-process-image">
          <Image
            src="/assets/roadmap.png"
            alt="Startup process"
            width={1200}
            height={420}
            className="process-roadmap-desktop"
          />

          <Image
            src="/assets/Mobile-roadmap.png"
            alt="Startup process"
            width={400}
            height={600}
            className="process-roadmap-mobile"
          />
        </div>
      </div>
    </section>
  );
}
