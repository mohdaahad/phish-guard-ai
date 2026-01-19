"use client"

import { useState, useEffect, useRef } from "react"

export default function DefenceProductsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const autoScrollTimerRef = useRef<NodeJS.Timeout>()

  const products = [
    {
      title: "Secure Intelligence Platform",
      description: "AI-powered surveillance, analytics, and decision support for defense and security operations.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
    },
    {
      title: "Autonomous Systems Suite",
      description: "Integrated control systems for drones, robotic units, and remote autonomous assets.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
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
    // Reset auto-scroll timer
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
        {/* Header */}
        <h2 className="defence-products-title">
          Defence Products for <span className="defence-products-title-highlight">Critical Missions</span>
        </h2>

        {/* Products Grid/Carousel */}
        <div className="defence-products-grid" ref={carouselRef}>
          {products.map((product, index) => (
            <div key={index} className="defence-products-card">
              {/* Image */}
              <div
                className="defence-products-image"
                style={{
                  backgroundImage: `url('${product.image}')`,
                }}
              ></div>

              {/* Content */}
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

        {/* Carousel Indicators - Mobile only */}
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
