"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"

const jobs = [
    { title: "AI Developer", slug: "ai-developer", link: "/careers/ai-developer" },
    { title: "Node Js Developer", slug: "node-js-developer", link: "/careers/node-js-developer" },
    { title: "MERN Stack Developer", slug: "mern-stack-developer", link: "/careers/mern-stack-developer" },
    { title: "Flutter Developer", slug: "flutter-developer", link: "/careers/flutter-developer" },
    { title: "Devops Engineer", slug: "devops-engineer", link: "/careers/devops-engineer" },
    { title: "QA Engineer", slug: "qa-engineer", link: "/careers/qa-engineer" },
    { title: "Ml Research Scientist", slug: "ml-research-scientist", link: "/careers/ml-research-scientist" },
]

export default function CareersPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            <div className="mx-auto py-20">
                {/* Hero Section */}
                <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20 mb-20 flex items-end justify-between gap-8max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20 mb-20 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 lg:gap-8
">
                    <h1 className="text-5xl md:text-7xl font-bold text-[#1A1A1A] tracking-tight font-jakarta">
                        Build what you're meant to <span className="text-[#0197FF] font-dm-sans font-medium italic leading-[130%]">become</span>
                    </h1>
                    <p className="text-[#717171] max-w-lg text-lg leading-relaxed font-dm-sans">
                        At Sol9X, your growth moves in sync with the impact you create on products, people, and the world.
                    </p>
                </div>

                {/* Jobs List */}
                <div className="space-y-0">
                    {jobs.map((job, index) => (
                        <Link
                            key={index}
                            href={job.link}
                            className="group block border-t border-gray-100 last:border-b transition-colors duration-500 ease-out hover:bg-[#0197FF]"
                        >
                            <div className="max-w-[1440px] mx-auto flex items-center justify-between py-10 px-4 md:px-10 lg:px-20">

                                <span className="text-2xl md:text-3xl font-medium text-[#1A1A1A] group-hover:text-white transition-colors duration-300">
                                    {job.title}
                                </span>

                                <div className="transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300">
                                    <svg
                                        width="32"
                                        height="32"
                                        viewBox="0 0 32 32"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="text-[#1A1A1A] group-hover:text-white transition-colors duration-300"
                                    >
                                        <path
                                            d="M5.33331 16H26.6666M26.6666 16L18.6666 8M26.6666 16L18.6666 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>

                            </div>
                        </Link>

                    ))}
                </div>
            </div>

            <Footer />

            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap');
            `}</style>
        </main>
    )
}
