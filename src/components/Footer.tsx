import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Services */}
          <div>
            <h3 className="font-jakarta text-sm font-semibold mb-4 text-white/60">Services</h3>
            <div className="flex flex-col gap-2">
              {["Custom AI Solutions", "Cybersecurity", "Digital Twin", "Edge AI Solutions", "Custom Software"].map((item) => (
                <Link key={item} to="/contact-us" className="font-dm-sans text-sm text-white/80 hover:text-primary transition-colors">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Sectors */}
          <div>
            <h3 className="font-jakarta text-sm font-semibold mb-4 text-white/60">Sectors</h3>
            <div className="flex flex-col gap-2">
              {[
                { name: "Defense", href: "/defence" },
                { name: "Healthcare", href: "/healthcare" },
                { name: "Manufacturing", href: "/manufacturing" },
                { name: "Education", href: "/education" },
                { name: "Cybersecurity", href: "/cybersecurity" },
              ].map((item) => (
                <Link key={item.name} to={item.href} className="font-dm-sans text-sm text-white/80 hover:text-primary transition-colors">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-jakarta text-sm font-semibold mb-4 text-white/60">Company</h3>
            <div className="flex flex-col gap-2">
              <Link to="/about" className="font-dm-sans text-sm text-white/80 hover:text-primary transition-colors">About Us</Link>
              <Link to="/careers" className="font-dm-sans text-sm text-white/80 hover:text-primary transition-colors">Careers</Link>
              <a href="https://blogs.sol9x.com/" className="font-dm-sans text-sm text-white/80 hover:text-primary transition-colors">Blogs</a>
              <Link to="/privacy-policy" className="font-dm-sans text-sm text-white/80 hover:text-primary transition-colors">Privacy Policy</Link>
            </div>
          </div>

          {/* Logo & Social */}
          <div className="flex flex-col gap-4">
            <img src="/assets/sol9x.png" alt="SOL9X" className="h-6 w-auto invert" />
            <div className="flex gap-4 mt-4">
              <a href="https://www.linkedin.com/company/sol9x-official/" className="text-white/60 hover:text-primary transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0H5C2.239 0 0 2.239 0 5V19C0 21.761 2.239 24 5 24H19C21.762 24 24 21.761 24 19V5C24 2.239 21.762 0 19 0ZM8 19H5V8H8V19ZM6.5 6.732C5.534 6.732 4.75 5.942 4.75 4.968C4.75 3.994 5.534 3.204 6.5 3.204C7.466 3.204 8.25 3.994 8.25 4.968C8.25 5.942 7.467 6.732 6.5 6.732ZM20 19H17V13.396C17 10.028 13 10.283 13 13.396V19H10V8H13V9.765C14.396 7.179 20 6.988 20 12.241V19Z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="font-dm-sans text-sm text-white/60">© 2025, SOL9X. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
