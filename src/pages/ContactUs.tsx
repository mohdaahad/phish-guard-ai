import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ContactUs = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[var(--header-height)]">
        <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
          <h1 className="font-jakarta text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact <span className="text-gradient-brand">Us</span>
          </h1>
          <p className="font-dm-sans text-lg text-text-secondary max-w-3xl mb-8">
            Get in touch with our team for consultation and partnership opportunities.
          </p>
          <form className="max-w-xl space-y-6">
            <div>
              <label className="block font-jakarta text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block font-jakarta text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block font-jakarta text-sm font-medium mb-2">Message</label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="px-8 py-3 rounded-full bg-gradient-brand text-white font-jakarta font-semibold hover:shadow-glow-md transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
