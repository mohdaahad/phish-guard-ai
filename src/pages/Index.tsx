import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustedBySection from "@/components/TrustedBySection";
import SolutionsSection from "@/components/SolutionsSection";
import IndustriesSection from "@/components/IndustriesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import WorkImpactSection from "@/components/WorkImpactSection";
import WorkflowSection from "@/components/WorkflowSection";
import InsightsSection from "@/components/InsightsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <TrustedBySection />
      <SolutionsSection />
      <IndustriesSection />
      <WhyChooseUsSection />
      <WorkImpactSection />
      <WorkflowSection />
      <InsightsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
