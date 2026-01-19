import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TrustedBySection from '@/components/TrustedBySection';
import SolutionsSection from '@/components/SolutionsSection';
import IndustriesSection from '@/components/IndustriesSection';
import WorkImpactSection from '@/components/WorkImpactSection';
import WorkflowSection from '@/components/WorkflowSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import InsightsSection from '@/components/InsightsSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import IntroLoader from "@/components/ui/IntroLoader"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <IntroLoader variant="home" trigger={1} />
      <Header />
      <HeroSection />
      <TrustedBySection />
      <SolutionsSection />
      <IndustriesSection />
      <WorkImpactSection />
      <WorkflowSection />
      <WhyChooseUsSection />
      <InsightsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
