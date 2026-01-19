import Header from '@/components/Header';
import TrustedBySection from '@/components/TrustedBySection';
import Footer from '@/components/Footer';
import '@/public/css/defence.css';
import MediaEntertainmentHeroSection from '@/components/media-entertainment/HeroSection';
import MediaEntertainmentProductsSection from '@/components/media-entertainment/ProductsSection';
import MediaEntertainmentSoftwareCapabilitiesSection from '@/components/media-entertainment/SoftwareCapabilitiesSection';
import MediaEntertainmentHardwareSystemsSection from '@/components/media-entertainment/HardwareSystemsSection';
import MediaEntertainmentResearchDevelopmentSection from '@/components/media-entertainment/ResearchDevelopmentSection';
import MediaEntertainmentWorkImpactSection from '@/components/media-entertainment/WorkImpactSection';
import MediaEntertainmentWhyChooseUsSection from '@/components/media-entertainment/WhyChooseUsSection';
import MediaEntertainmentFAQSection from '@/components/media-entertainment/FAQSection';
import MediaEntertainmentCTASection from '@/components/media-entertainment/CTASection';

export default function MediaEntertainmentPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <MediaEntertainmentHeroSection />
      <TrustedBySection />
      <MediaEntertainmentProductsSection />
      <MediaEntertainmentSoftwareCapabilitiesSection />
      <MediaEntertainmentHardwareSystemsSection />
      <MediaEntertainmentResearchDevelopmentSection />
      <MediaEntertainmentWorkImpactSection />
      <MediaEntertainmentWhyChooseUsSection />
      <MediaEntertainmentFAQSection />
      <MediaEntertainmentCTASection />
      <Footer />
    </main>
  );
}
