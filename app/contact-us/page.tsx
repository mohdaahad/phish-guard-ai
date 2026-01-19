"use client"

import Header from "@/components/Header"
import Image from "next/image"
import { ArrowRight, MapPin, Mail, Phone } from "lucide-react"
import Footer from "@/components/Footer"
import { useState, FormEvent, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"

function ContactFormContent() {
  const searchParams = useSearchParams()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    website: "", // Honeypot field (hidden from users, bots will fill it)
  })
  const [loading, setLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    const interest = searchParams.get("interest")
    if (interest) {
      setFormData((prev) => ({
        ...prev,
        message: `I am interested in this service: ${interest}`,
      }))
    }
  }, [searchParams])

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[\d\s\-\+\(\)]{7,}$/
    return phoneRegex.test(phone.replace(/\s/g, ""))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrorMessage("")

    // Client-side validation
    if (!formData.name.trim()) {
      setErrorMessage("Please enter your name")
      setSubmitStatus("error")
      return
    }

    if (!formData.email.trim() || !validateEmail(formData.email)) {
      setErrorMessage("Please enter a valid email address")
      setSubmitStatus("error")
      return
    }

    if (!formData.phone.trim() || !validatePhone(formData.phone)) {
      setErrorMessage("Please enter a valid phone number")
      setSubmitStatus("error")
      return
    }

    // Honeypot check - if this field is filled, it's a bot
    if (formData.website.trim()) {
      // Silently reject (don't show error to bot)
      return
    }

    setLoading(true)

    try {
      // Submit to our API route (keeps access key secure on server)
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          website: "",
        })
        setTimeout(() => {
          setSubmitStatus("idle")
        }, 5000)
      } else {
        setErrorMessage(data.message || "Failed to send message. Please try again.")
        setSubmitStatus("error")
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again later.")
      setSubmitStatus("error")
      console.error("Form submission error:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="sol9x-contact-section">
        {/* Background Map Asset */}
        <div className="sol9x-contact-background-map">
          <Image
            src="/assets/contact-us.png"
            alt="image"
            width={600}
            height={600}
            className="sol9x-contact-map-img"
          />
        </div>

        <div className="sol9x-contact-container">
          <div className="sol9x-contact-header">
            <div className="sol9x-contact-accent-bar" />
            <div className="sol9x-contact-header-content">
              <h1 className="sol9x-contact-title">
                Let's build something{" "}
                <span className="sol9x-contact-title-highlight">
                  remarkable.
                  <span className="sol9x-contact-wavy-underline" />
                </span>
              </h1>
              <p className="sol9x-contact-subtitle">Got something in mind? We'd love to help.</p>
            </div>
          </div>

          <div className="sol9x-contact-content-wrapper">
            <form className="sol9x-contact-form" onSubmit={handleSubmit}>
              <div className="sol9x-form-group">
                <label htmlFor="name" className="sol9x-form-label">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="sol9x-form-input"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="sol9x-form-row">
                <div className="sol9x-form-group">
                  <label htmlFor="email" className="sol9x-form-label">
                    Email address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@org.com"
                    required
                    className="sol9x-form-input"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="sol9x-form-group">
                  <label htmlFor="phone" className="sol9x-form-label">
                    Phone No *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+91 9999999999"
                    required
                    className="sol9x-form-input"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="sol9x-form-group">
                <label htmlFor="message" className="sol9x-form-label">
                  How can we help you?
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Describe your project..."
                  className="sol9x-form-textarea"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              {/* Honeypot field - hidden from users, bots will fill it */}
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              {submitStatus === "error" && (
                <div className="sol9x-form-error">
                  {errorMessage}
                </div>
              )}

              {submitStatus === "success" && (
                <div className="sol9x-form-success">
                  Thank you! We've received your message and will get back to you soon.
                </div>
              )}

              <div className="sol9x-form-submit-wrapper">
                <button
                  type="submit"
                  className="sol9x-btn-submit"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Start the Conversation"}
                  {!loading && <ArrowRight size={20} />}
                </button>
              </div>
            </form>

            {/* Company Contact Information */}
            <div className="sol9x-contact-info">
              <h2 className="sol9x-contact-info-title">Get in Touch</h2>
              <div className="sol9x-contact-info-items">
                <div className="sol9x-contact-info-item">
                  <div className="sol9x-contact-info-icon">
                    <MapPin size={24} />
                  </div>
                  <div className="sol9x-contact-info-content">
                    <h3 className="sol9x-contact-info-label">Address</h3>
                    <p className="sol9x-contact-info-text">
                      10th floor, Surya Kiran Building, Atul Grove Road,<br />
                      Janpath, Connaught Place,<br />
                      New Delhi, Delhi-110001
                    </p>
                  </div>
                </div>

                <div className="sol9x-contact-info-item">
                  <div className="sol9x-contact-info-icon">
                    <Mail size={24} />
                  </div>
                  <div className="sol9x-contact-info-content">
                    <h3 className="sol9x-contact-info-label">Email</h3>
                    <a href="mailto:Sol9x.contact@gmail.com" className="sol9x-contact-info-link">
                      Contact@sol9x.in
                    </a>
                  </div>
                </div>

                <div className="sol9x-contact-info-item">
                  <div className="sol9x-contact-info-icon">
                    <Phone size={24} />
                  </div>
                  <div className="sol9x-contact-info-content">
                    <h3 className="sol9x-contact-info-label">Phone</h3>
                    <a href="tel:+918920950949" className="sol9x-contact-info-link">
                      +91 8920950949
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <ContactFormContent />
    </Suspense>
  )
}
