import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[var(--header-height)]">
        <section className="py-20 px-6 md:px-20 max-w-4xl mx-auto">
          <h1 className="font-jakarta text-4xl font-bold text-foreground mb-6">
            Privacy Policy
          </h1>
          <div className="prose prose-lg max-w-none font-dm-sans text-text-secondary">
            <p>Privacy policy content goes here.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
