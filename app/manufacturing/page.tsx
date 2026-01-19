import Header from '@/components/Header';
import TrustedBySection from '@/components/TrustedBySection';
import IndustriesSection from '@/components/IndustriesSection';
import WorkflowSection from '@/components/WorkflowSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import '@/public/css/defence.css';
import ManufacturingHeroSection from '@/components/manufacturing/HeroSection';
import ManufacturingProductsSection from '@/components/manufacturing/ProductsSection';
import ManufacturingSoftwareCapabilitiesSection from '@/components/manufacturing/SoftwareCapabilitiesSection';
import ManufacturingHardwareSystemsSection from '@/components/manufacturing/HardwareSystemsSection';
import ManufacturingResearchDevelopmentSection from '@/components/manufacturing/ResearchDevelopmentSection';
import ManufacturingWorkImpactSection from '@/components/manufacturing/WorkImpactSection';
import ManufacturingWhyChooseUsSection from '@/components/manufacturing/WhyChooseUsSection';
import ManufacturingFAQSection from '@/components/manufacturing/FAQSection';

export default function ManufacturingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <ManufacturingHeroSection />
      <TrustedBySection />
      <ManufacturingProductsSection />
      <ManufacturingSoftwareCapabilitiesSection />
      <ManufacturingHardwareSystemsSection />
      <ManufacturingResearchDevelopmentSection />
      <ManufacturingWorkImpactSection />
      <ManufacturingWhyChooseUsSection />
      <ManufacturingFAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
