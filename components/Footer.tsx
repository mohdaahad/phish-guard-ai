import Link from "next/link"

export default function Footer() {
  return (
    <footer className="sol9x-footer">
      <div className="sol9x-footer-container">
        {/* Main Footer Content */}
        <div className="sol9x-footer-main">
          <div className="sol9x-footer-content">
            {/* Links Section */}
            <div className="sol9x-footer-links">
              {/* Services */}
              <div className="sol9x-footer-link-group">
                <h3 className="sol9x-footer-link-title">Services</h3>
                <div className="sol9x-footer-link-list">
                  {[
                    "Custom AI Solutions",
                    "Cybersecurity",
                    "Digital Twin & Transformation",
                    "Edge AI Solutions",
                    "Custom Software",
                    "Drones (Air & Water)",
                    "AR/VR Solutions",
                  ].map((item) => (
                    <Link
                      key={item}
                      href={`/contact-us?interest=${encodeURIComponent(item)}`}
                      className="sol9x-footer-link"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Sectors */}
              <div className="sol9x-footer-link-group">
                <h3 className="sol9x-footer-link-title">Sectors</h3>
                <div className="sol9x-footer-link-list">
                  {[
                    { name: "Defense", href: "/defence" },
                    { name: "Manufacturing", href: "/manufacturing" },
                    { name: "Healthcare", href: "/healthcare" },
                    { name: "Education", href: "/education" },
                    { name: "Fintech", href: "/fintech" },
                    { name: "Media", href: "/media-entertainment" },
                    { name: "Cybersecurity", href: "/cybersecurity" },
                  ].map((item) => (
                    <Link key={item.name} href={item.href} className="sol9x-footer-link">
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Company */}
              <div className="sol9x-footer-link-group">
                <h3 className="sol9x-footer-link-title">Company</h3>
                <div className="sol9x-footer-link-list">
                  <Link href="/about-us" className="sol9x-footer-link">
                    About Us
                  </Link>
                  <Link href="/careers" className="sol9x-footer-link">
                    Careers
                  </Link>
                  <Link href="/partners" className="sol9x-footer-link">
                    Partners
                  </Link>
                  <Link href="https://blogs.sol9x.com/" className="sol9x-footer-link">
                    Blogs
                  </Link>
                  <Link href="/terms-and-conditions" className="sol9x-footer-link">
                    Terms & Conditions
                  </Link>
                  <Link href="/cancellation-policy" className="sol9x-footer-link">
                    Cancellation Policy
                  </Link>
                  <Link href="/refund-policy" className="sol9x-footer-link">
                    Refund Policy
                  </Link>
                  <Link href="/privacy-policy" className="sol9x-footer-link">
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>

            {/* Certifications & Social */}
            <div className="sol9x-footer-right">
              {/* Certifications */}
              <div className="sol9x-footer-certifications">
                <h3 className="sol9x-footer-cert-title">Certifications</h3>
                <div className="sol9x-footer-cert-images">
                  <div className="sol9x-footer-cert-box">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/63c5fa2ac30fb3fe32dee5bc877801a8a280b0e9?width=138"
                      alt="Certification 1"
                      className="sol9x-footer-cert-img"
                    />
                  </div>
                  <div className="sol9x-footer-cert-box">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/ba954e7d8ac2ae7e9d10d42e5f732a2e19db1391?width=224"
                      alt="ISO 27001"
                      className="sol9x-footer-cert-img-large"
                    />
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="sol9x-footer-social">
                <Link href="#" className="sol9x-footer-social-link">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M14.2737 10.1635L23.2023 0H21.0872L13.3313 8.82305L7.14125 0H0L9.3626 13.3433L0 24H2.11504L10.3002 14.6806L16.8388 24H23.98M2.8784 1.5619H6.12769L21.0856 22.5148H17.8355"
                      fill="currentColor"
                    />
                  </svg>
                </Link>
                <Link href="#" className="sol9x-footer-social-link">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C20.102 2.381 21.621 3.924 21.769 7.152C21.827 8.417 21.838 8.797 21.838 12.001C21.838 15.206 21.826 15.585 21.769 16.85C21.62 20.075 20.105 21.621 16.85 21.769C15.584 21.827 15.206 21.839 12 21.839C8.796 21.839 8.416 21.827 7.151 21.769C3.891 21.62 2.38 20.07 2.232 16.849C2.174 15.584 2.162 15.205 2.162 12C2.162 8.796 2.175 8.417 2.232 7.151C2.381 3.924 3.896 2.38 7.151 2.232C8.417 2.175 8.796 2.163 12 2.163ZM12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272 0.273 2.69 0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259 0.014 15.668 0.072 16.948C0.272 21.306 2.69 23.728 7.052 23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.668 23.986 16.948 23.928C21.302 23.728 23.73 21.31 23.927 16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986 8.333 23.928 7.053C23.732 2.699 21.311 0.273 16.949 0.073C15.668 0.014 15.259 0 12 0ZM12 5.838C8.597 5.838 5.838 8.597 5.838 12C5.838 15.403 8.597 18.163 12 18.163C15.403 18.163 18.162 15.404 18.162 12C18.162 8.597 15.403 5.838 12 5.838ZM12 16C9.791 16 8 14.21 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.21 14.209 16 12 16ZM18.406 4.155C17.61 4.155 16.965 4.8 16.965 5.595C16.965 6.39 17.61 7.035 18.406 7.035C19.201 7.035 19.845 6.39 19.845 5.595C19.845 4.8 19.201 4.155 18.406 4.155Z"
                      fill="currentColor"
                    />
                  </svg>
                </Link>
                <Link href="https://www.linkedin.com/company/sol9x-official/" className="sol9x-footer-social-link">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M19 0H5C2.239 0 0 2.239 0 5V19C0 21.761 2.239 24 5 24H19C21.762 24 24 21.761 24 19V5C24 2.239 21.762 0 19 0ZM8 19H5V8H8V19ZM6.5 6.732C5.534 6.732 4.75 5.942 4.75 4.968C4.75 3.994 5.534 3.204 6.5 3.204C7.466 3.204 8.25 3.994 8.25 4.968C8.25 5.942 7.467 6.732 6.5 6.732ZM20 19H17V13.396C17 10.028 13 10.283 13 13.396V19H10V8H13V9.765C14.396 7.179 20 6.988 20 12.241V19Z"
                      fill="currentColor"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="sol9x-footer-divider"></div>

        {/* Logo Section */}
        <div className="sol9x-footer-logo-section">
          <img src="/assets/sol9x.png" alt="SOL9X" className="sol9x-footer-logo" />
        </div>

        {/* Copyright */}
        <div className="sol9x-footer-copyright">
          <span className="sol9x-footer-copyright-text">Copyright</span>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path
              d="M4.99991 0C2.24311 0 0 2.242 0 4.9995C0 7.75591 2.24311 9.99902 4.99991 9.99902C7.75702 9.99902 10 7.75591 10 4.9995C10 2.242 7.75702 0 4.99991 0ZM4.99991 8.88515C2.85705 8.88515 1.1139 7.14208 1.1139 4.99952C1.1139 2.85604 2.85705 1.113 4.99991 1.113C7.14301 1.113 8.88616 2.85607 8.88616 4.99952C8.88613 7.14208 7.14298 8.88515 4.99991 8.88515Z"
              fill="black"
            />
            <path
              d="M6.64001 5.90489C6.3206 6.45299 5.72667 6.79299 5.09004 6.79299C4.10141 6.79299 3.29611 5.98789 3.29611 4.99923C3.29611 4.00975 4.10141 3.20437 5.09004 3.20437C5.7267 3.20437 6.3206 3.54563 6.64001 4.09264L6.68129 4.16413H7.8863L7.81396 3.97013C7.60428 3.41462 7.23636 2.94231 6.74932 2.60519C6.26106 2.2672 5.68754 2.08789 5.09004 2.08789C3.48497 2.08789 2.17969 3.39429 2.17969 4.99923C2.17969 6.60427 3.48497 7.90945 5.09004 7.90945C5.68754 7.90945 6.26103 7.73074 6.74932 7.39223C7.23636 7.05503 7.60428 6.58288 7.81396 6.02737L7.8863 5.83326H6.68129L6.64001 5.90489Z"
              fill="black"
            />
          </svg>
          <span className="sol9x-footer-copyright-text">2025, SOL9X. All right reserved.</span>
        </div>
      </div>
    </footer>
  )
}