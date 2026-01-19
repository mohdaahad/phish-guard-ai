"use client"

import { useState, useEffect, useRef } from "react"

export default function EducationProductsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const autoScrollTimerRef = useRef<NodeJS.Timeout>()

  const products = [
    {
      title: "VR-Based Stories for Creativity Enhancement",
      description:
        "Immersive storytelling experiences that improve imagination, comprehension, and engagement through virtual reality.",
      image: "https://images.unsplash.com/photo-1576091160550-112173fdf967?w=800&h=600&fit=crop",
    },
    {
      title: "Rank Predictors for IIT-JEE & NEET",
      description:
        "AI models trained on historical data to estimate rank ranges, performance trends, and preparation gaps.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f70db4397?w=800&h=600&fit=crop",
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
          Education Products for <span className="defence-products-title-highlight">Modern Institutions</span>
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
