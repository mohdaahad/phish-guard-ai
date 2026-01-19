import Image from "next/image";

export default function OfferSection() {
  const offers = [
    {
      title: "Capital Support",
      description: "Funding to move ideas from research to application.",
      image1: "/assets/Professors Capital Support.png",
      image2: "/assets/Professors Capital Support.png"
    },
    {
      title: "Commercialization Guidance",
      description: "Help in transforming academic work into usable, market-ready solutions.",
      image1: "/assets/Professors Guidance.png",
      image2: "/assets/Professors Guidance.png"
    },
    {
      title: "Startup & Execution Support",
      description: "Support in structuring ventures, defining audiences, and building products.",
      image1: "/assets/Startup and Execution Support.png",
      image2: "/assets/Startup and Execution Support.png"
    },
    {
      title: "Industry Connections",
      description: "Access to partners who can bring academic innovation into the real world.",
      image1: "/assets/Professors connections.png",
      image2: "/assets/Professors connections.png"
    }
  ];

  return (
    <section className="professionals-offer-section">
      <div className="professionals-offer-header">
        <h2 className="professionals-offer-title ">
          <span className="professionals-offer-title-normal">What Sol9X </span>
          <span className="professionals-offer-title-highlight">Offer</span>
          <span className="professionals-offer-title-normal"> to Professors</span>
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
              <div className="professionals-offer-image-container">
                {offer.image2 && (
                  <Image
                    src={offer.image2}
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

        {/* Row 2 */}
        <div className="professionals-offer-row">
          {offers.slice(2, 4).map((offer, index) => (
            <div key={index} className="professionals-offer-card">
              <div className="professionals-offer-image-container">
                {offer.image1 && (
                  <Image
                    src={offer.image1}
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
      </div>
    </section>
  );
}
