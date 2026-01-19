import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Index from "@/pages/Index";
import About from "@/pages/About";
import ContactUs from "@/pages/ContactUs";
import Defence from "@/pages/Defence";
import Healthcare from "@/pages/Healthcare";
import Manufacturing from "@/pages/Manufacturing";
import Education from "@/pages/Education";
import Cybersecurity from "@/pages/Cybersecurity";
import MediaEntertainment from "@/pages/MediaEntertainment";
import ForStartups from "@/pages/ForStartups";
import Careers from "@/pages/Careers";
import TermsAndConditions from "@/pages/TermsAndConditions";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import CancellationPolicy from "@/pages/CancellationPolicy";
import RefundPolicy from "@/pages/RefundPolicy";
import NotFound from "@/pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/defence" element={<Defence />} />
        <Route path="/healthcare" element={<Healthcare />} />
        <Route path="/manufacturing" element={<Manufacturing />} />
        <Route path="/education" element={<Education />} />
        <Route path="/cybersecurity" element={<Cybersecurity />} />
        <Route path="/media-entertainment" element={<MediaEntertainment />} />
        <Route path="/for-startups" element={<ForStartups />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cancellation-policy" element={<CancellationPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
