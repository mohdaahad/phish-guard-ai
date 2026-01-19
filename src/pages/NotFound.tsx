import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[var(--header-height)] flex items-center justify-center min-h-[80vh]">
        <div className="text-center px-6">
          <h1 className="font-jakarta text-6xl md:text-8xl font-bold text-gradient-brand mb-4">
            404
          </h1>
          <p className="font-dm-sans text-xl text-text-secondary mb-8">
            Page not found
          </p>
          <Link
            to="/"
            className="inline-flex px-8 py-3 rounded-full bg-gradient-brand text-white font-jakarta font-semibold hover:shadow-glow-md transition-all duration-300"
          >
            Go Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
