import Header from '@/components/Header';
import TrustedBySection from '@/components/TrustedBySection';
import Footer from '@/components/Footer';
import "@/public/css/defence.css";
import DefenceHeroSection from '@/components/defence/HeroSection';
import DefenceProductsSection from '@/components/defence/ProductsSection';
import DefenceSoftwareCapabilitiesSection from '@/components/defence/SoftwareCapabilitiesSection';
import DefenceHardwareSystemsSection from '@/components/defence/HardwareSystemsSection';
import DefenceResearchDevelopmentSection from '@/components/defence/ResearchDevelopmentSection';
import DefenceWorkImpactSection from '@/components/defence/WorkImpactSection';
import DefenceWhyChooseUsSection from '@/components/defence/WhyChooseUsSection';
import DefenceFAQSection from '@/components/defence/FAQSection';
import DefenceCTASection from '@/components/defence/CTASection';

export default function DefencePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <DefenceHeroSection />
      <TrustedBySection />
      <DefenceProductsSection />
      <DefenceSoftwareCapabilitiesSection />
      <DefenceHardwareSystemsSection />
      <DefenceResearchDevelopmentSection />
      <DefenceWorkImpactSection />
      <DefenceWhyChooseUsSection />
      <DefenceFAQSection />
      <DefenceCTASection />
      <Footer />
    </main>
  );
}
