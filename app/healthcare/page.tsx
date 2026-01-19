import Header from '@/components/Header';
import TrustedBySection from '@/components/TrustedBySection';
import Footer from '@/components/Footer';
import '@/public/css/defence.css';
import HealthcareHeroSection from '@/components/healthcare/HeroSection';
import HealthcareProductsSection from '@/components/healthcare/ProductsSection';
import HealthcareSoftwareCapabilitiesSection from '@/components/healthcare/SoftwareCapabilitiesSection';
import HealthcareHardwareSystemsSection from '@/components/healthcare/HardwareSystemsSection';
import HealthcareResearchDevelopmentSection from '@/components/healthcare/ResearchDevelopmentSection';
import HealthcareWorkImpactSection from '@/components/healthcare/WorkImpactSection';
import HealthcareWhyChooseUsSection from '@/components/healthcare/WhyChooseUsSection';
import HealthcareFAQSection from '@/components/healthcare/FAQSection';
import HealthcareCTASection from '@/components/healthcare/CTASection';

export default function HealthcarePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HealthcareHeroSection />
      <TrustedBySection />
      <HealthcareProductsSection />
      <HealthcareSoftwareCapabilitiesSection />
      <HealthcareHardwareSystemsSection />
      <HealthcareResearchDevelopmentSection />
      <HealthcareWorkImpactSection />
      <HealthcareWhyChooseUsSection />
      <HealthcareFAQSection />
      <HealthcareCTASection />
      <Footer />
    </main>
  );
}
