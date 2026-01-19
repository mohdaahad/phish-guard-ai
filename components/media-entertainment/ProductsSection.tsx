"use client"

import { useState, useEffect, useRef } from "react"

export default function MediaEntertainmentProductsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const autoScrollTimerRef = useRef<NodeJS.Timeout>()

  const products = [
    {
      title: "Content Intelligence Platform",
      description: "AI-powered deepfake detection, automated blog portals, and social media monitoring for content safety and brand protection.",
      image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&h=600&fit=crop",
    },
    {
      title: "Cinematic Robotics & Production",
      description: "Aerial and underwater drones for cinematic recording, plus AI-powered film production and story generation tools.",
      image: "https://images.unsplash.com/photo-1533928298208-27ff66555d0d?w=800&h=600&fit=crop",
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
          Media & Entertainment Solutions for <span className="defence-products-title-highlight">Creative Innovation</span>
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
