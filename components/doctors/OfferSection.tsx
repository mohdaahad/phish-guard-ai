import Image from "next/image"

export default function OfferSection() {
  const offers = [
    {
      title: "Capital Support",
      description: "Funding to move medical ideas from concept to commercialization.",
      image1: "/assets/Doctor Capital support.png",
      image2: "/assets/Doctor Capital support.png",
    },
    {
      title: "Clinical Advisory",
      description: "Expert guidance in navigating healthcare regulations and clinical validation.",
      image1: "/assets/Clinical Advisory.png",
      image2: "/assets/Clinical Advisory.png",
    },
    {
      title: "Healthcare Business Support",
      description: "Support in structuring healthcare ventures, understanding markets, and building products.",
      image1: "/assets/Healthcare-Business Support.png",
      image2: "/assets/Healthcare-Business Support.png",
    },
    {
      title: "Healthcare Industry Connections",
      description: "Access to healthcare partners and industry leaders who accelerate healthcare innovation.",
      image1: "/assets/Healthcare-industry connnections.png",
      image2: "/assets/Healthcare-industry connnections.png",
    },
  ]

  return (
    <section className="professionals-offer-section">
      <div className="professionals-offer-header">
        <h2 className="professionals-offer-title poppins-font">
          <span className="font-semibold text-black">What Sol9X </span>
          <span className="professionals-offer-title-highlight">Offer</span>
          <span className="font-semibold text-black"> to Doctors</span>
        </h2>
        <p className="professionals-offer-subtitle sp-body">
          More than funding real support to help you build and scale.
        </p>
      </div>

      <div className="professionals-offer-grid">
        {/* Row 1 */}
        <div className="professionals-offer-row">
          {offers.slice(0, 2).map((offer, index) => (
            <div key={index} className="professionals-offer-card">
              <div className="professionals-offer-card-image">
                {offer.image2 && (
                  <Image
                    src={offer.image2 || "/placeholder.svg"}
                    alt={offer.title}
                    width={598}
                    height={399}
                    className="absolute left-0 top-0 object-cover w-full h-full"
                  />
                )}
              </div>
              <div className="flex flex-col items-start gap-2">
                <h3 className="professionals-offer-card-title poppins-font">
                  {offer.title}
                </h3>
                <p className="professionals-offer-card-description ap-body-sm ">
                  {offer.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="professionals-offer-row">
          {offers.slice(2, 4).map((offer, index) => (
            <div key={index} className="professionals-offer-card">
              <div className="professionals-offer-card-image flex justify-center items-center">
                {offer.image1 && (
                  <Image
                    src={offer.image1 || "/placeholder.svg"}
                    alt={offer.title}
                    width={598}
                    height={399}
                    className="absolute object-cover w-full h-full"
                  />
                )}
              </div>
              <div className="flex flex-col items-start gap-2">
                <h3 className="professionals-offer-card-title poppins-font">
                  {offer.title}
                </h3>
                <p className="professionals-offer-card-description ap-body-sm">
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
