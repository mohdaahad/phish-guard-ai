"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
    const stats = [
        {
            value: "100+",
            label: "Project Completed",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0197FF" strokeWidth="2">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                </svg>
            ),
        },
        {
            value: "10M+",
            label: "Lines of Code",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0197FF" strokeWidth="2">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                </svg>
            ),
        },
        {
            value: "10+",
            label: "Fabricated Drones",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0197FF" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
            ),
        },
        {
            value: "5000+",
            label: "Hours of AI Training",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0197FF" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                </svg>
            ),
        },
    ]

    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="pt-12 pb-16 px-4 md:px-0 max-w-7xl mx-auto

">
                <div className="grid grid-cols-1  gap-8 items-start">
                    <div className="flex flex-col mt-10">
                        <div className="relative h-[400px] lg:h-[500px] w-full overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
                                alt="VR Technology"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Mobile only small image */}
                        <div className="relative h-[200px] w-full rounded-2xl overflow-hidden shadow-lg lg:hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
                                alt="Technology Lab"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className=" grid grid-cols-1 lg:grid-cols-2">
                        <h1 className="text-2xl md:text-4xl font-bold font-jakarta mb-8 tracking-tight text-black">ABOUT US</h1>
                        <div className=" flex flex-col">
                            <p className="text-gray-600 mb-8 max-w-full font-dm-sans leading-relaxed">
                                We architect customized IT solutions and growth-focused execution strategies. Sol9X builds future-ready
                                systems designed to adapt, scale, and perform in complex environments.
                            </p>
                            <Link href="/contact-us">
                                <button className="bg-[#0197FF] text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors mb-12">
                                    Talk to Us
                                </button>
                            </Link>
                        </div>


                        {/* Small Image moved here */}
                        {/* <div className="relative h-[200px] w-full max-w-sm rounded-bl-2xl rounded-tl-none rounded-r-none overflow-hidden shadow-lg mt-2 lg:mt-4 hidden lg:block">
                            <Image
                                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
                                alt="Technology Lab"
                                fill
                                className="object-cover"
                            />
                        </div> */}
                    </div>


                </div>
            </section>

            {/* Mission Statement */}
            <section className="pt-0 pb-16 md:pb-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto
">
                <div className="relative max-w-5xl mx-auto text-center bg-[#E0F2FF] rounded-2xl px-8 py-14 md:px-14 md:py-20">

                    {/* Opening quote */}
                    <span className="absolute -top-6 left-6 text-6xl text-[#0197FF] opacity-30 font-serif">
                        “
                    </span>

                    {/* Closing quote */}
                    <span className="absolute -bottom-10 right-6 text-6xl text-[#0197FF] opacity-30 font-serif">
                        ”
                    </span>

                    <h2 className="text-[24px] md:text-[24px] lg:text-[24px] font-dm-sans italic leading-relaxed text-black max-w-4xl mx-auto">
                        Our mission is to{" "}
                        <span className="text-[#0197FF] font-semibold">
                            build secure, intelligent systems
                        </span>{" "}
                        that make organizations faster, safer, and more resilient — especially in
                        environments where failure is not an option.
                    </h2>
                </div>
            </section>


            {/* Impact Section */}
            <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-3 mb-12">
                        <div className="w-1 h-8 bg-[#0197FF]"></div>
                        <h2 className="text-2xl md:text-3xl font-bold font-jakarta text-black">
                            Impact By The <span className="text-[#0197FF]">Numbers</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="flex flex-col items-start p-6 bg-white rounded-2xl shadow-sm">
                                <div className="mb-4 text-[#0197FF]">{stat.icon}</div>
                                <h3 className="text-3xl font-bold font-jakarta mb-1 text-black">{stat.value}</h3>
                                <p className="text-sm text-gray-500 font-dm-sans">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who We Are Section */}
            <section className="py-16 md:py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="order-1 lg:order-1">
                        <h2 className="text-3xl md:text-4xl font-bold font-jakarta mb-6 text-gray-900">WHO WE ARE</h2>
                        <p className="text-gray-600 mb-8 font-dm-sans leading-relaxed text-base md:text-lg">
                            We're a team of tech-makers, problem-solvers, and dreamers. Whether it's AI, web, or automation we turn
                            complex challenges into simple, smart solutions.
                        </p>
                        <div className="mb-8 lg:mb-0">
                            <Link href="/work">
                                <button className="border border-[#0197FF] text-[#0197FF] px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-50 transition-colors">
                                    Explore Our Work
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden order-2 lg:order-2">
                        <Image
                            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                            alt="Office Meeting"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* <div className="mt-20 max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-dm-sans leading-normal text-gray-900">
                        Organizations don't lack tools they lack clarity. Sol9X builds secure, intelligent systems that{" "}
                        <span className="text-[#0197FF] font-semibold">connect workflows, reduce manual effort, lower risk</span>,
                        and enable confident decisions.
                    </h2>
                </div> */}

            </section>

            {/* Bottom CTA */}
            <section className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto border-t border-gray-100">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div>
                        <h2 className="text-2xl font-bold font-jakarta mb-2 text-black">
                            Ready to build something <span className="text-[#0197FF]">future</span> ready?
                        </h2>
                        <p className="text-gray-500 font-dm-sans text-sm">
                            Let's create technology that transforms your operations and drives measurable results.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <Link href="/start-project">
                            <button className="bg-[#0197FF] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-600 transition-colors">
                                Start Project
                            </button>
                        </Link>
                        <Link href="/contact-us">
                            <button className="border border-[#0197FF] text-[#0197FF] px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-50 transition-colors">
                                Contact Our Team
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}