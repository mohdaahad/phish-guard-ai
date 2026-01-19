import Image from "next/image"

export default function OfferSection() {
  const offers = [
    {
      title: "Capital Support",
      description: "Funding to move professional ideas from concept to market.",
      image1: "/assets/Professional-capital Support.png",
      image2: "/assets/Professional-capital Support.png",
    },
    {
      title: "Business Mentorship",
      description: "Expert guidance in business strategy, product development, and market expansion.",
      image1: "/assets/Business Mentorship.png",
      image2: "/assets/Business Mentorship.png",
    },
    {
      title: "Startup & Execution Support",
      description: "Support in structuring ventures, defining audiences, and building scalable products.",
      image1: "/assets/Startup-exection Support.png",
      image2: "/assets/Startup-exection Support.png",
    },
    {
      title: "Professional Network Access",
      description: "Access to industry leaders and professionals who accelerate growth and expansion.",
      image1: "/assets/Professional Netweok.png",
      image2: "/assets/Professional Netweok.png"
    },
  ]

  return (
    <section className="professionals-offer-section">
      <div className="professionals-offer-header">
        <h2 className="professionals-offer-title poppins-font">
          <span className="professionals-offer-title-normal">What Sol9X </span>
          <span className="professionals-offer-title-highlight">Offer</span>
          <span className="professionals-offer-title-normal"> to Professionals</span>
        </h2>
        <p className="professionals-offer-subtitle sp-body">
          More than funding real support to help you build and scale.
        </p>
      </div>

      <div className="professionals-offer-grid">
        <div className="professionals-offer-row">
          {offers.slice(0, 2).map((offer, index) => (
            <div key={index} className="professionals-offer-card">
              <div className="professionals-offer-image-container">
                {offer.image2 && (
                  <Image
                    src={offer.image2 || "/placeholder.svg"}
                    alt={offer.title}
                    width={598}
                    height={399}
                    className="professionals-offer-image"
                  />
                )}
              </div>
              <div className="professionals-offer-text">
                <h3 className="professionals-offer-card-title">
                  {offer.title}
                </h3>
                <p className="professionals-offer-card-description sp-body-sm">
                  {offer.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="professionals-offer-row">
          {offers.slice(2, 4).map((offer, index) => (
            <div key={index} className="professionals-offer-card">
              <div className="professionals-offer-image-container">
                {offer.image1 && (
                  <Image
                    src={offer.image1 || "/placeholder.svg"}
                    alt={offer.title}
                    width={598}
                    height={399}
                    className="professionals-offer-image"
                  />
                )}
              </div>
              <div className="professionals-offer-text">
                <h3 className="professionals-offer-card-title poppins-font">
                  {offer.title}
                </h3>
                <p className="professionals-offer-card-description sp-body-sm">
                  {offer.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
