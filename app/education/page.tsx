import Header from '@/components/Header';
import TrustedBySection from '@/components/TrustedBySection';
import Footer from '@/components/Footer';
import '@/public/css/defence.css';
import EducationHeroSection from '@/components/education/HeroSection';
import EducationProductsSection from '@/components/education/ProductsSection';
import EducationSoftwareCapabilitiesSection from '@/components/education/SoftwareCapabilitiesSection';
import EducationHardwareSystemsSection from '@/components/education/HardwareSystemsSection';
import EducationResearchDevelopmentSection from '@/components/education/ResearchDevelopmentSection';
import EducationWorkImpactSection from '@/components/education/WorkImpactSection';
import EducationWhyChooseUsSection from '@/components/education/WhyChooseUsSection';
import EducationFAQSection from '@/components/education/FAQSection';
import EducationCTASection from '@/components/education/CTASection';

export default function EducationPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <EducationHeroSection />
      <TrustedBySection />
      <EducationProductsSection />
      <EducationSoftwareCapabilitiesSection />
      <EducationHardwareSystemsSection />
      <EducationResearchDevelopmentSection />
      <EducationWorkImpactSection />
      <EducationWhyChooseUsSection />
      <EducationFAQSection />
      <EducationCTASection />
      <Footer />
    </main>
  );
}
