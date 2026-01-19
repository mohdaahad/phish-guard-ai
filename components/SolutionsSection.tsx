export default function SolutionsSection() {
  const solutions = [
    {
      title: "Custom AI Solutions",
      description: "AI that automates workflows and drives smarter decisions.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <path d="M28 41.9993V11.666" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M35 30.3333C32.9812 29.7432 31.208 28.5148 29.946 26.8322C28.684 25.1495 28.0013 23.1033 28 21C27.9987 23.1033 27.316 25.1495 26.054 26.8322C24.792 28.5148 23.0188 29.7432 21 30.3333" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M41.062 15.1663C41.5989 14.2365 41.9147 13.1955 41.985 12.1241C42.0553 11.0527 41.8781 9.97943 41.4672 8.98741C41.0564 7.99539 40.4228 7.11119 39.6155 6.40321C38.8082 5.69523 37.8489 5.18245 36.8118 4.90454C35.7746 4.62663 34.6874 4.59104 33.6343 4.80053C32.5812 5.01002 31.5904 5.45896 30.7386 6.11263C29.8867 6.7663 29.1967 7.60717 28.7218 8.5702C28.2469 9.53322 28 10.5926 28 11.6663C28 10.5926 27.7531 9.53322 27.2782 8.5702C26.8033 7.60717 26.1133 6.7663 25.2614 6.11263C24.4096 5.45896 23.4188 5.01002 22.3657 4.80053C21.3126 4.59104 20.2254 4.62663 19.1882 4.90454C18.1511 5.18245 17.1918 5.69523 16.3845 6.40321C15.5772 7.11119 14.9436 7.99539 14.5328 8.98741C14.1219 9.97943 13.9447 11.0527 14.015 12.1241C14.0853 13.1955 14.4011 14.2365 14.938 15.1663" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M41.9922 11.959C43.3637 12.3116 44.637 12.9718 45.7157 13.8894C46.7943 14.807 47.65 15.958 48.2179 17.2553C48.7858 18.5526 49.0511 19.9621 48.9936 21.377C48.9361 22.792 48.5574 24.1754 47.8862 25.4223" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M42 42C44.0545 41.9999 46.0516 41.3219 47.6815 40.0712C49.3114 38.8204 50.4831 37.0668 51.0149 35.0823C51.5466 33.0978 51.4087 30.9933 50.6226 29.0952C49.8364 27.197 48.4459 25.6113 46.6667 24.584" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M46.5884 40.793C46.7519 42.0582 46.6543 43.3435 46.3016 44.5695C45.9489 45.7956 45.3487 46.9363 44.5379 47.9212C43.7271 48.9061 42.7229 49.7144 41.5875 50.2961C40.4521 50.8777 39.2095 51.2205 37.9364 51.3031C36.6633 51.3857 35.3869 51.2064 34.1858 50.7764C32.9847 50.3463 31.8846 49.6746 30.9533 48.8027C30.022 47.9308 29.2793 46.8773 28.7711 45.7071C28.2629 44.537 28.0001 43.275 27.9987 41.9993C27.9973 43.275 27.7344 44.537 27.2263 45.7071C26.7181 46.8773 25.9754 47.9308 25.0441 48.8027C24.1128 49.6746 23.0127 50.3463 21.8116 50.7764C20.6105 51.2064 19.334 51.3857 18.061 51.3031C16.7879 51.2205 15.5453 50.8777 14.4099 50.2961C13.2745 49.7144 12.2703 48.9061 11.4595 47.9212C10.6487 46.9363 10.0484 45.7956 9.69576 44.5695C9.34309 43.3435 9.2455 42.0582 9.40903 40.793" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14.0009 42C11.9464 41.9999 9.94931 41.3219 8.31938 40.0712C6.68945 38.8204 5.51776 37.0668 4.98601 35.0823C4.45425 33.0978 4.59216 30.9933 5.37833 29.0952C6.16451 27.197 7.55502 25.6113 9.33423 24.584" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14.0052 11.959C12.6337 12.3116 11.3604 12.9718 10.2817 13.8894C9.20311 14.807 8.34743 15.958 7.77951 17.2553C7.21159 18.5526 6.94631 19.9621 7.00378 21.377C7.06125 22.792 7.43995 24.1754 8.11121 25.4223" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: "Edge AI Solutions",
      description: "Real-time intelligence deployed directly on your devices.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <path d="M27.9993 11.6671C28.002 10.7338 27.8181 9.80946 27.4584 8.94831C27.0987 8.08716 26.5704 7.30664 25.9046 6.65265C25.2388 5.99866 24.4489 5.48441 23.5815 5.14015C22.714 4.79588 21.7865 4.62856 20.8534 4.648C19.9204 4.66745 19.0006 4.87329 18.1483 5.2534C17.2959 5.63351 16.5282 6.18022 15.8902 6.86139C15.2522 7.54255 14.7569 8.34441 14.4334 9.2198C14.1099 10.0952 13.9646 11.0264 14.0063 11.9588C12.6347 12.3114 11.3614 12.9716 10.2828 13.8892C9.20418 14.8068 8.3485 15.9578 7.78058 17.2551C7.21266 18.5524 6.94738 19.9619 7.00485 21.3768C7.06232 22.7918 7.44102 24.1752 8.11228 25.4221C6.93203 26.3809 6.00394 27.6136 5.40874 29.013C4.81353 30.4123 4.56925 31.9358 4.69713 33.4511C4.82501 34.9663 5.32118 36.4274 6.14249 37.7072C6.9638 38.9869 8.08536 40.0466 9.40961 40.7941C9.24608 42.0593 9.34367 43.3446 9.69635 44.5707C10.049 45.7967 10.6493 46.9374 11.4601 47.9223C12.2709 48.9073 13.275 49.7155 14.4105 50.2972C15.5459 50.8789 16.7885 51.2216 18.0616 51.3042C19.3346 51.3868 20.6111 51.2076 21.8122 50.7775C23.0133 50.3475 24.1134 49.6758 25.0447 48.8039C25.976 47.932 26.7187 46.8784 27.2269 45.7083C27.735 44.5381 27.9979 43.2762 27.9993 42.0004V11.6671Z" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 30.3333C22.959 29.6442 24.6696 28.3897 25.9156 26.7283C27.1616 25.067 27.8869 23.0736 28 21" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14.0078 11.959C14.054 13.0877 14.3726 14.1885 14.9365 15.1673" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8.11328 25.424C8.54014 25.0763 8.99692 24.7671 9.47828 24.5" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M13.9998 42.0009C12.3918 42.0016 10.8108 41.5869 9.41016 40.7969" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M28 30.334H37.3333" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M28 42H42C43.2377 42 44.4247 42.4917 45.2998 43.3668C46.175 44.242 46.6667 45.429 46.6667 46.6667V49" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M28 18.666H46.6667" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M37.332 18.6667V11.6667C37.332 10.429 37.8237 9.242 38.6989 8.36683C39.574 7.49167 40.761 7 41.9987 7" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: "Digital Twin",
      description: "Simulate, optimize, and modernize mission-critical operations.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <path d="M28.0013 51.3333C28.5713 51.3333 29.1012 51.0694 30.161 50.5419L38.68 46.3008C42.4498 44.4243 44.3346 43.4859 44.3346 42V23.3333M28.0013 51.3333C27.4313 51.3333 26.9014 51.0694 25.8416 50.5419L17.3225 46.3008C13.5528 44.4243 11.668 43.4859 11.668 42V23.3333M28.0013 51.3333V32.6667M44.3346 23.3333C44.3346 21.8474 42.4498 20.9091 38.68 19.0324L30.161 14.7914C29.1012 14.2638 28.5713 14 28.0013 14C27.4313 14 26.9014 14.2638 25.8416 14.7914L17.3225 19.0324C13.5528 20.9091 11.668 21.8474 11.668 23.3333M44.3346 23.3333C44.3346 24.8192 42.4498 25.7577 38.68 27.6341L30.161 31.8752C29.1012 32.4028 28.5713 32.6667 28.0013 32.6667M11.668 23.3333C11.668 24.8192 13.5528 25.7577 17.3225 27.6341L25.8416 31.8752C26.9014 32.4028 27.4313 32.6667 28.0013 32.6667" stroke="#0197FF" strokeWidth="3" strokeLinejoin="round" />
          <path d="M51.332 48.9993L44.332 43.166" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M28 4.66602V13.9993" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4.66797 48.9993L11.668 43.166" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: "Cybersecurity",
      description: "Secure architectures and continuous protection with compliance readiness.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <path d="M46.6654 30.3337C46.6654 42.0004 38.4987 47.8337 28.792 51.2171C28.2837 51.3893 27.7316 51.3811 27.2287 51.1937C17.4987 47.8337 9.33203 42.0004 9.33203 30.3337V14.0004C9.33203 13.3816 9.57786 12.7881 10.0154 12.3505C10.453 11.9129 11.0465 11.6671 11.6654 11.6671C16.332 11.6671 22.1654 8.86706 26.2254 5.3204C26.7197 4.89806 27.3485 4.66602 27.9987 4.66602C28.6489 4.66602 29.2777 4.89806 29.772 5.3204C33.8554 8.8904 39.6654 11.6671 44.332 11.6671C44.9509 11.6671 45.5444 11.9129 45.9819 12.3505C46.4195 12.7881 46.6654 13.3816 46.6654 14.0004V30.3337Z" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 28.0007L25.6667 32.6673L35 23.334" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: "Custom Software",
      description: "Tailored software engineered for performance, scale, and reliability.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <path d="M42.0013 18.6673V14.0007C42.0013 12.763 41.5096 11.576 40.6345 10.7008C39.7593 9.82565 38.5723 9.33398 37.3346 9.33398H9.33464C8.09696 9.33398 6.90997 9.82565 6.0348 10.7008C5.15963 11.576 4.66797 12.763 4.66797 14.0007V30.334C4.66797 31.5717 5.15963 32.7586 6.0348 33.6338C6.90997 34.509 8.09696 35.0007 9.33464 35.0007H28.0013" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M23.332 44.3337V35.0938V42.4438" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16.332 44.334H27.9987" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M46.6654 28H41.9987C39.4214 28 37.332 30.0893 37.332 32.6667V46.6667C37.332 49.244 39.4214 51.3333 41.9987 51.3333H46.6654C49.2427 51.3333 51.332 49.244 51.332 46.6667V32.6667C51.332 30.0893 49.2427 28 46.6654 28Z" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: "IOT & Automations",
      description: "Connected devices and automated workflows for smarter operations.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <path d="M9.33464 36.1673C6.75731 36.1673 4.66797 34.0781 4.66797 31.5007C4.66797 28.9233 6.75731 26.834 9.33464 26.834" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M46.668 36.1673C49.2454 36.1673 51.3346 34.0781 51.3346 31.5007C51.3346 28.9233 49.2454 26.834 46.668 26.834" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16.332 16.334V9.33398" stroke="#0197FF" strokeWidth="3" strokeLinejoin="round" />
          <path d="M39.668 16.334V9.33398" stroke="#0197FF" strokeWidth="3" strokeLinejoin="round" />
          <path d="M16.3333 9.33268C17.622 9.33268 18.6667 8.28801 18.6667 6.99935C18.6667 5.71068 17.622 4.66602 16.3333 4.66602C15.0447 4.66602 14 5.71068 14 6.99935C14 8.28801 15.0447 9.33268 16.3333 9.33268Z" stroke="#0197FF" strokeWidth="3" strokeLinejoin="round" />
          <path d="M31.5 16.334H24.5C17.9003 16.334 14.6005 16.334 12.5503 18.4549C10.5 20.5759 10.5 23.9894 10.5 30.8167C10.5 37.6441 10.5 41.0575 12.5503 43.1785C14.6005 45.2995 17.9003 45.2995 24.5 45.2995H26.8924C28.7394 45.2995 29.3911 45.681 30.664 47.067C32.0717 48.6 34.2512 50.6456 36.2231 51.1219C39.0259 51.7992 39.3398 50.8624 38.7144 48.1912C38.5364 47.4303 38.0921 46.2137 38.5607 45.5049C38.8232 45.1077 39.2604 45.0102 40.1352 44.8149C41.5151 44.5067 42.6529 44.0029 43.4497 43.1785C45.5 41.0575 45.5 37.6441 45.5 30.8167C45.5 23.9894 45.5 20.5759 43.4497 18.4549C41.3994 16.334 38.0996 16.334 31.5 16.334Z" stroke="#0197FF" strokeWidth="3" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: "Drones (Air & Water)",
      description: "Real-time intelligence deployed directly on your devices.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <path d="M23.332 23.334L16.332 16.334" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M23.332 32.666L16.332 39.666" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M32.668 23.334L39.668 16.334" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M32.668 32.666L39.668 39.666" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: "AR / VR Solutions",
      description: "Immersive 3D experiences for training, visualization, and simulation.",
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <path d="M46.668 14C47.9056 14 49.0926 14.4917 49.9678 15.3668C50.843 16.242 51.3346 17.429 51.3346 18.6667V37.3333C51.3346 38.571 50.843 39.758 49.9678 40.6332C49.0926 41.5083 47.9056 42 46.668 42H37.3346C36.6102 42 35.8956 41.8313 35.2476 41.5073C34.5996 41.1833 34.036 40.7129 33.6013 40.1333L29.868 35.1633C29.6506 34.8735 29.3688 34.6383 29.0448 34.4763C28.7208 34.3143 28.3635 34.23 28.0013 34.23C27.6391 34.23 27.2818 34.3143 26.9578 34.4763C26.6338 34.6383 26.352 34.8735 26.1346 35.1633L22.4013 40.1333C21.9666 40.7129 21.403 41.1833 20.755 41.5073C20.107 41.8313 19.3924 42 18.668 42H9.33464C8.09696 42 6.90997 41.5083 6.0348 40.6332C5.15963 39.758 4.66797 38.571 4.66797 37.3333V18.6667C4.66797 17.429 5.15963 16.242 6.0348 15.3668C6.90997 14.4917 8.09696 14 9.33464 14H46.668Z" stroke="#0197FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <section className="sol9x-solutions-section">
      <div className="sol9x-solutions-container">
        {/* Header */}
        <div className="sol9x-solutions-header">
          <h2 className="sol9x-solutions-title">
            Solutions Engineered for <span className="sol9x-solutions-title-highlight">Performance</span>, <span className="sol9x-solutions-title-highlight">Security</span> & <span className="sol9x-solutions-title-highlight">Scale</span>
          </h2>
        </div>

        {/* Solutions Grid */}
        <div className="sol9x-solutions-grid">
          {solutions.map((solution, index) => (
            <div key={solution.title} className="sol9x-solutions-card">
              <div
                className={
                  index < 4
                    ? "sol9x-solutions-icon-wrapper"
                    : "sol9x-solutions-icon-wrapper-alt"
                }
              >
                {solution.icon}
              </div>
              <div className="sol9x-solutions-content">
                <h3 className="sol9x-solutions-card-title">
                  {solution.title}
                </h3>
                <p className="sol9x-solutions-card-description">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
