export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Step 1 : Apply",
      description: "Submit your professional idea with basic details no complex paperwork.",
      iconType: "document",
    },
    {
      number: "02",
      title: "Step 2 : Review",
      description: "Our team evaluates viability, market potential, and growth scalability.",
      iconType: "validation",
      reverse: true,
    },
    {
      number: "03",
      title: "Step 3 : Selection",
      description: "Shortlisted founders are invited for discussions and onboarding.",
      iconType: "user-check",
    },
    {
      number: "04",
      title: "Step 4 : Build & Scale",
      description: "Receive funding, mentorship, and continuous support as you grow.",
      iconType: "coins",
      reverse: true,
    },
  ]

  return (
    <section className="professionals-process-section">
      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-16 w-[2694px] h-[629px] bg-[#F5F5F5]" />

      <div className="relative z-10 py-6 md:py-10 flex flex-col items-center gap-8 md:gap-14 w-full">
        <div className="professionals-process-header">
          <h2 className="professionals-process-title poppins-font">
            <span className="font-semibold text-black">Our Simple, </span>
            <span className="professionals-process-title-highlight">Founder-First</span>
            <span className="font-semibold text-black"> Process</span>
          </h2>
        </div>

        <div className="professionals-process-steps">
          {steps.map((step, index) => (
            <div key={index} className="professionals-process-step">
              <svg
                className={`hidden md:block absolute left-0 ${step.reverse ? "top-[52px]" : "top-[56px]"} w-[320px] h-[320px]`}
                viewBox="0 0 320 320"
                fill="none"
              >
                {index % 2 === 0 ? (
                  <path
                    d="M0.5 160C0.500006 117.698 17.3044 77.1285 47.2165 47.2165C77.1285 17.3044 117.698 0.499997 160 0.5C202.302 0.500003 242.871 17.3044 272.784 47.2165C302.696 77.1285 319.5 117.698 319.5 160"
                    stroke="#C2C2C2"
                    strokeDasharray="5 5"
                  />
                ) : (
                  <path
                    d="M319.5 160C319.5 180.946 315.374 201.687 307.359 221.038C299.343 240.389 287.594 257.973 272.784 272.784C257.973 287.594 240.389 299.343 221.038 307.359C201.687 315.374 180.946 319.5 160 319.5C139.054 319.5 118.313 315.374 98.962 307.359C79.6106 299.343 62.0274 287.594 47.2165 272.784C32.4055 257.973 20.6568 240.389 12.6412 221.038C4.62559 201.687 0.499998 180.946 0.5 160"
                    stroke="#C2C2C2"
                    strokeDasharray="5 5"
                  />
                )}
              </svg>

              <div
                className={`absolute left-1/2 -translate-x-1/2 md:left-[120px] md:translate-x-0 ${step.reverse ? "md:top-[172px]" : index === 2 ? "md:top-[202px]" : "md:top-[176px]"} top-0 w-16 md:w-20 h-16 md:h-20`}
              >
                <div className="professionals-process-icon-circle">
                  <svg width="32" height="32" viewBox="0 0 42 42" fill="none">
                    <path
                      d="M26.2305 4.37305V6.996C26.2305 9.46893 26.2305 10.7054 26.9986 11.4737C27.767 12.2419 29.0035 12.2419 31.4764 12.2419H34.0993"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.99219 27.9789V13.9898C6.99219 9.04396 6.99219 6.57103 8.52868 5.03454C10.0652 3.49805 12.5381 3.49805 17.484 3.49805H24.7786C25.4933 3.49805 25.8507 3.49805 26.1721 3.63115C26.4933 3.76426 26.7462 4.01697 27.2515 4.52238L33.946 11.2169C34.4513 11.7223 34.7042 11.975 34.8373 12.2963C34.9703 12.6177 34.9703 12.9751 34.9703 13.6898V27.9789C34.9703 32.9248 34.9703 35.3977 33.4338 36.9342C31.8973 38.4707 29.4244 38.4707 24.4785 38.4707H17.484C12.5381 38.4707 10.0652 38.4707 8.52868 36.9342C6.99219 35.3977 6.99219 32.9248 6.99219 27.9789Z"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.9883 19.2363H27.9774M13.9883 24.4822H27.9774M13.9883 29.7281H21.2815"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div
                className={`absolute left-1/2 -translate-x-1/2 md:left-[23px] md:translate-x-0 ${step.reverse ? "md:top-[356px]" : "md:top-0"} top-20 md:top-auto w-full md:w-[273px] px-4 md:px-0 flex flex-col items-center gap-3`}
              >
                {step.reverse ? (
                  <>
                    <div className="professionals-process-step-label poppins-font">
                      <span>{step.title}</span>
                    </div>
                    <p className="professionals-process-step-text poppins-font">
                      {step.description}
                    </p>
                  </>
                ) : (
                  <>
                    <p className="professionals-process-step-text poppins-font">
                      {step.description}
                    </p>
                    <div className="professionals-process-step-label poppins-font">
                      <span>{step.title}</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
