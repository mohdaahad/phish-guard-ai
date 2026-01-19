import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Manufacturing = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[var(--header-height)]">
        <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
          <h1 className="font-jakarta text-4xl md:text-5xl font-bold text-foreground mb-6">
            Manufacturing <span className="text-gradient-brand">Solutions</span>
          </h1>
          <p className="font-dm-sans text-lg text-text-secondary max-w-3xl">
            Industry 4.0 solutions for smart manufacturing.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Manufacturing;
