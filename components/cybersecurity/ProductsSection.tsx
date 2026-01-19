"use client"

import { useState, useEffect, useRef } from "react"

export default function CybersecurityProductsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const autoScrollTimerRef = useRef<NodeJS.Timeout>()

  const products = [
    {
      title: "CyberFabric Security Platform",
      description: "AI-powered network security tool for comprehensive threat detection, prevention, and real-time network monitoring.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
    },
    {
      title: "Behavioral Security & Compliance",
      description: "Chitraksha behavioral biometrics system with continuous authentication and AI-powered compliance monitoring.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13e763b?w=800&h=600&fit=crop",
    },
  ]

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (!isMobile) return

    const startAutoScroll = () => {
      autoScrollTimerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % products.length)
      }, 4000)
    }

    startAutoScroll()

    return () => {
      if (autoScrollTimerRef.current) {
        clearInterval(autoScrollTimerRef.current)
      }
    }
  }, [isMobile, products.length])

  useEffect(() => {
    if (isMobile && carouselRef.current) {
      const scrollWidth = carouselRef.current.scrollWidth / products.length
      carouselRef.current.scrollTo({
        left: scrollWidth * currentSlide,
        behavior: "smooth",
      })
    }
  }, [currentSlide, isMobile, products.length])

  const handleDotClick = (index: number) => {
    setCurrentSlide(index)
    if (autoScrollTimerRef.current) {
      clearInterval(autoScrollTimerRef.current)
    }
    autoScrollTimerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % products.length)
    }, 4000)
  }

  return (
    <section className="defence-products-section">
      <div className="defence-products-container">
        <h2 className="defence-products-title">
          Cybersecurity Solutions for <span className="defence-products-title-highlight">Total Protection</span>
        </h2>

        <div className="defence-products-grid" ref={carouselRef}>
          {products.map((product, index) => (
            <div key={index} className="defence-products-card">
              <div
                className="defence-products-image"
                style={{
                  backgroundImage: `url('${product.image}')`,
                }}
              ></div>

              <div className="defence-products-content">
                <h3 className="defence-products-card-title">{product.title}</h3>
                <p className="defence-products-card-description">{product.description}</p>
                <button className="defence-products-cta">
                  <span>Explore more</span>
                  <span className="defence-products-cta-arrow">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {isMobile && (
          <div className="defence-products-carousel-indicators">
            {products.map((_, index) => (
              <div
                key={index}
                className={`defence-products-dot ${currentSlide === index ? "active" : ""}`}
                onClick={() => handleDotClick(index)}
              ></div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
