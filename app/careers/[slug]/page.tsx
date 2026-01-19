"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"
import { useParams } from "next/navigation"

// Mock data based on the provided reference image
const jobData: Record<string, any> = {
    "ai-developer": {
        title: "AI Developer",
        about:
            "SOL9X builds secure, intelligent systems for real-world operations where failure is not an option. We work across defense, infrastructure, cybersecurity, and enterprise platforms, turning complex data into decisions that matter. As an AI Developer at SOL9X, you will design and deploy models that power automation, prediction, and mission-critical intelligence at scale.",
        keyResponsibilitiesSummary:
            "We are looking for an AI Developer who can translate data into reliable intelligence. You will build, train, and deploy models that operate in production environments, not just experiments. From data pipelines to inference systems, your work will directly impact how organizations predict, respond, and operate.",
        responsibilities: [
            "Design, train, and deploy machine learning and deep learning models for real-world applications",
            "Build and optimize data pipelines for training and inference",
            "Work with structured and unstructured data from enterprise and sensor-driven systems",
            "Deploy models into scalable, production-grade APIs and services",
            "Collaborate with backend and DevOps teams to ensure reliable model serving",
            "Monitor model performance, accuracy, and drift over time",
            "Research and implement modern ML and AI techniques",
            "Document models, assumptions, and system behavior clearly",
        ],
        requirements: [
            "2+ years of experience working with machine learning or AI systems",
            "Strong knowledge of Python, PyTorch or TensorFlow",
            "Experience with data preprocessing, training, and evaluation",
            "Understanding of model deployment and inference pipelines",
            "Comfort working in Linux and cloud environments",
            "Ability to translate business problems into ML solutions",
        ],
    },

    "node-js-developer": {
        title: "Node.js Developer",
        about:
            "At SOL9X, our backend systems power secure data pipelines, AI services, and mission-critical platforms. As a Node.js Developer, you will build the APIs and services that form the backbone of our intelligent systems.",
        keyResponsibilitiesSummary:
            "You will design, build, and maintain backend services that are fast, reliable, and secure. Your work will support real-time applications, data processing, and AI-driven workflows.",
        responsibilities: [
            "Develop scalable REST and GraphQL APIs",
            "Build backend services for data, authentication, and system integrations",
            "Design and maintain database schemas and queries",
            "Ensure system reliability, performance, and security",
            "Integrate AI and automation services into production systems",
            "Write clean, maintainable, and well-documented code",
        ],
        requirements: [
            "2+ years of Node.js backend development experience",
            "Strong knowledge of Express, Fastify, or similar frameworks",
            "Experience with SQL or NoSQL databases",
            "Understanding of API security and authentication",
            "Experience deploying and maintaining backend services",
        ],
    },

    "mern-stack-developer": {
        title: "MERN Stack Developer",
        about:
            "SOL9X builds full-stack platforms that combine powerful interfaces with secure, intelligent backends. As a MERN Stack Developer, you will work across the entire product stack, from user experience to core system logic.",
        keyResponsibilitiesSummary:
            "You will build complete web applications that connect intuitive interfaces with robust backend services and data systems.",
        responsibilities: [
            "Build modern web interfaces using React",
            "Develop backend services using Node.js and MongoDB",
            "Integrate APIs, authentication, and data flows",
            "Optimize applications for speed and scalability",
            "Collaborate with designers and system architects",
        ],
        requirements: [
            "Strong experience with React and JavaScript",
            "Node.js and MongoDB backend experience",
            "Understanding of full-stack architecture",
            "Ability to build and deploy production-grade web apps",
        ],
    },

    "flutter-developer": {
        title: "Flutter Developer",
        about:
            "SOL9X delivers intelligent systems across web, mobile, and embedded platforms. As a Flutter Developer, you will build high-performance mobile applications that connect to secure enterprise and AI systems.",
        keyResponsibilitiesSummary:
            "You will design and develop mobile apps that are fast, reliable, and tightly integrated with backend and AI services.",
        responsibilities: [
            "Build cross-platform mobile applications using Flutter",
            "Integrate APIs, authentication, and real-time data",
            "Implement smooth UI and state management",
            "Optimize performance and stability",
            "Collaborate with backend and design teams",
        ],
        requirements: [
            "Experience building apps with Flutter and Dart",
            "Knowledge of mobile UI and performance optimization",
            "Experience consuming REST APIs",
            "Ability to ship production mobile apps",
        ],
    },

    "devops-engineer": {
        title: "DevOps Engineer",
        about:
            "SOL9X runs high-availability systems for security-sensitive and mission-critical operations. As a DevOps Engineer, you will ensure that our platforms are reliable, scalable, and secure.",
        keyResponsibilitiesSummary:
            "You will build the infrastructure and pipelines that keep SOL9X systems running smoothly in production.",
        responsibilities: [
            "Manage cloud infrastructure and deployments",
            "Build CI/CD pipelines",
            "Monitor system health, uptime, and performance",
            "Implement security and compliance best practices",
            "Support scalable AI and data platforms",
        ],
        requirements: [
            "Experience with cloud platforms (AWS, GCP, or Azure)",
            "CI/CD and containerization experience",
            "Knowledge of Linux systems",
            "Strong understanding of system reliability and security",
        ],
    },

    "qa-engineer": {
        title: "QA Engineer",
        about:
            "At SOL9X, quality is mission-critical. As a QA Engineer, you ensure that our systems perform reliably under real-world conditions.",
        keyResponsibilitiesSummary:
            "You will test, validate, and safeguard the reliability of complex digital systems.",
        responsibilities: [
            "Design and execute test plans",
            "Perform functional, regression, and performance testing",
            "Identify and document defects",
            "Work closely with developers to resolve issues",
            "Automate testing where possible",
        ],
        requirements: [
            "Experience in software testing",
            "Understanding of test frameworks and QA processes",
            "Ability to think in edge cases and failure scenarios",
        ],
    },

    "ml-research-scientist": {
        title: "ML Research Scientist",
        about:
            "SOL9X develops next-generation intelligence systems. As an ML Research Scientist, you will explore and develop advanced algorithms that push the limits of prediction, automation, and decision-making.",
        keyResponsibilitiesSummary:
            "You will research, prototype, and validate new machine learning techniques that can be deployed into real-world systems.",
        responsibilities: [
            "Research and develop advanced ML algorithms",
            "Prototype experimental models",
            "Work with large and complex datasets",
            "Publish or document research findings",
            "Collaborate with engineering teams to move research into production",
        ],
        requirements: [
            "Strong background in machine learning or data science",
            "Experience with PyTorch or TensorFlow",
            "Solid math and statistics foundation",
            "Ability to translate research into working systems",
        ],
    },
}


export default function JobDescriptionPage() {
    const params = useParams()
    const slug = params.slug as string

    // Default to 'ai-developer' content for preview/development if slug doesn't match
    const job = jobData[slug] || jobData["not-found"]
    const mailtoLink = `mailto:hr@sol9x.com?subject=${encodeURIComponent(
        `Application for ${job.title} – SOL9X`
    )}&body=${encodeURIComponent(
        `Hi SOL9X Hiring Team,

I would like to apply for the ${job.title} role.
Please find my resume attached.

Thank you,`
    )}`
    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* TOP SECTION: Hero */}
            <section className="pt-40 pb-24 md:pt-48 md:pb-32">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">

                        <h1 className="text-6xl md:text-8xl lg:text-[100px] font-bold text-[#1A1A1A] tracking-tighter leading-[0.9] font-jakarta">
                            {job.title}
                        </h1>
                        <Link
                            href={mailtoLink}
                            className="inline-flex items-center px-8 py-3 rounded-full border border-[#0197FF] text-[#0197FF] font-medium hover:bg-[#0197FF] hover:text-white transition-all duration-500 group whitespace-nowrap mb-2"
                        >
                            Apply Now
                            <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* BOTTOM SECTION: Content */}
            <section className="bg-[#0197FF] text-white py-24 md:py-32">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
                    <div className="max-w-4xl space-y-20">
                        {/* About */}
                        <div className="space-y-6">
                            <h2 className="text-xl md:text-2xl font-bold font-jakarta">About SOL9X</h2>
                            <p className="text-white/90 leading-relaxed text-lg md:text-xl font-dm-sans">
                                {job.about}
                            </p>
                        </div>

                        {/* Key Responsibilities */}
                        <div className="space-y-8">
                            <h2 className="text-xl md:text-2xl font-bold font-jakarta">Key Responsibilities</h2>
                            <p className="text-white/90 leading-relaxed text-lg md:text-xl font-dm-sans">
                                {job.keyResponsibilitiesSummary}
                            </p>
                            <ul className="space-y-4">
                                {job.responsibilities.map((item: string, index: number) => (
                                    <li key={index} className="flex items-start gap-4 text-base md:text-lg text-white/90 font-dm-sans">
                                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
                                        <span className="leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Job Requirements */}
                        <div className="space-y-8">
                            <h2 className="text-xl md:text-2xl font-bold font-jakarta">Job Requirements</h2>
                            <ul className="space-y-4">
                                {job.requirements.map((item: string, index: number) => (
                                    <li key={index} className="flex items-start gap-4 text-base md:text-lg text-white/90 font-dm-sans">
                                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
                                        <span className="leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <a
                            href={mailtoLink}
                            className="inline-flex items-center px-8 py-3 w-full justify-center rounded-full border border-white text-white font-medium hover:bg-[#0197FF] hover:text-white transition-all duration-500 group whitespace-nowrap mb-2"
                        >
                            Apply Now
                            <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
