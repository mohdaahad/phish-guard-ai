import Header from "@/components/Header";
import Footer from "@/components/Footer";

const MediaEntertainment = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[var(--header-height)]">
        <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
          <h1 className="font-jakarta text-4xl md:text-5xl font-bold text-foreground mb-6">
            Media & Entertainment <span className="text-gradient-brand">Solutions</span>
          </h1>
          <p className="font-dm-sans text-lg text-text-secondary max-w-3xl">
            AI and robotics for next-generation entertainment.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MediaEntertainment;
