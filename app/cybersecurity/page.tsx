import Header from '@/components/Header';
import TrustedBySection from '@/components/TrustedBySection';
import Footer from '@/components/Footer';
import '@/public/css/defence.css';
import CybersecurityHeroSection from '@/components/cybersecurity/HeroSection';
import CybersecurityProductsSection from '@/components/cybersecurity/ProductsSection';
import CybersecuritySoftwareCapabilitiesSection from '@/components/cybersecurity/SoftwareCapabilitiesSection';
import CybersecurityHardwareSystemsSection from '@/components/cybersecurity/HardwareSystemsSection';
import CybersecurityResearchDevelopmentSection from '@/components/cybersecurity/ResearchDevelopmentSection';
import CybersecurityWorkImpactSection from '@/components/cybersecurity/WorkImpactSection';
import CybersecurityWhyChooseUsSection from '@/components/cybersecurity/WhyChooseUsSection';
import CybersecurityFAQSection from '@/components/cybersecurity/FAQSection';
import CybersecurityCTASection from '@/components/cybersecurity/CTASection';

export default function CybersecurityPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <CybersecurityHeroSection />
      <TrustedBySection />
      <CybersecurityProductsSection />
      <CybersecuritySoftwareCapabilitiesSection />
      <CybersecurityHardwareSystemsSection />
      <CybersecurityResearchDevelopmentSection />
      <CybersecurityWorkImpactSection />
      <CybersecurityWhyChooseUsSection />
      <CybersecurityFAQSection />
      <CybersecurityCTASection />
      <Footer />
    </main>
  );
}
