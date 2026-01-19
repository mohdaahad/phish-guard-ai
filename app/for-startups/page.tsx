"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import "@/Styles/startupPage.css";
import { useState } from "react"

// Import all tab components
import ProfessorsHeroSection from "@/components/professors/HeroSection"
import ProfessorsAboutSection from "@/components/professors/AboutSection"
import ProfessorsFundingSection from "@/components/professors/FundingSection"
import ProfessorsWhoProgramSection from "@/components/professors/WhoProgramSection"
import ProfessorsOfferSection from "@/components/professors/OfferSection"
import ProfessorsProcessSection from "@/components/professors/ProcessSection"
import ProfessorsCTASection from "@/components/professors/CTASection"

import DoctorsHeroSection from "@/components/professors/HeroSection"
import DoctorsAboutSection from "@/components/doctors/AboutSection"
import DoctorsFundingSection from "@/components/doctors/FundingSection"
import DoctorsWhoProgramSection from "@/components/professors/WhoProgramSection"
import DoctorsOfferSection from "@/components/doctors/OfferSection"
import DoctorsProcessSection from "@/components/professors/ProcessSection"
import DoctorsCTASection from "@/components/doctors/CTASection"

import ProfessionalsHeroSection from "@/components/professors/HeroSection"
import ProfessionalsAboutSection from "@/components/professionals/AboutSection"
import ProfessionalsFundingSection from "@/components/professionals/FundingSection"
import ProfessionalsWhoProgramSection from "@/components/professors/WhoProgramSection"
import ProfessionalsOfferSection from "@/components/professionals/OfferSection"
import ProfessionalsProcessSection from "@/components/professors/ProcessSection"
import ProfessionalsCTASection from "@/components/professionals/CTASection"

export default function ForStartupsPage() {
  const [activeTab, setActiveTab] = useState("professors")

  const renderTabContent = () => {
    switch (activeTab) {
      case "doctors":
        return (
          <>
            <DoctorsHeroSection />
            <DoctorsAboutSection activeTab={activeTab} setActiveTab={setActiveTab} />
            <DoctorsFundingSection />
            <DoctorsWhoProgramSection />
            <DoctorsOfferSection />
            <DoctorsProcessSection />
            <DoctorsCTASection />
          </>
        )
      case "professionals":
        return (
          <>
            <ProfessionalsHeroSection />
            <ProfessionalsAboutSection activeTab={activeTab} setActiveTab={setActiveTab} />
            <ProfessionalsFundingSection />
            <ProfessionalsWhoProgramSection />
            <ProfessionalsOfferSection />
            <ProfessionalsProcessSection />
            <ProfessionalsCTASection />
          </>
        )
      case "professors":
      default:
        return (
          <>
            <ProfessorsHeroSection />
            <ProfessorsAboutSection activeTab={activeTab} setActiveTab={setActiveTab} />
            <ProfessorsFundingSection />
            <ProfessorsWhoProgramSection />
            <ProfessorsOfferSection />
            <ProfessorsProcessSection />
            <ProfessorsCTASection />
          </>
        )
    }
  }

  return (
    <main className=" startups-root flex flex-col items-center bg-white overflow-hidden">
      <Header />
      {renderTabContent()}
      <Footer />
    </main>
  )
}
