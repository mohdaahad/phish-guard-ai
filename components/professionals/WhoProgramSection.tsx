export default function WhoProgramSection() {
  const criteria = [
    "Are solving real professional challenges",
    "Are ready to transition from expertise to execution",
    "Want strategic support beyond just capital",
    "Have innovative professional solutions",
  ]

  return (
    <section className="professionals-whoprogram-section">
      <div className="absolute left-0 top-10 w-full h-[260px] bg-[#EBF7FF]" />

      <div className="professionals-whoprogram-content">
        <div className="professionals-whoprogram-header">
          <h2 className="professionals-whoprogram-title poppins-font">
            <span className="professionals-whoprogram-title-part">Who This</span>
            <span className="professionals-whoprogram-title-highlight"> Program</span>
            <span className="professionals-whoprogram-title-part"> Is For</span>
          </h2>

          <div className="professionals-whoprogram-criteria">
            {criteria.map((criterion, index) => (
              <div key={index} className="professionals-whoprogram-item">
                <div className="professionals-whoprogram-line" />
                <p className="professionals-whoprogram-text poppins-font">
                  {criterion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
