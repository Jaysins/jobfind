import { useEffect } from 'react';
import { triggerBase } from '../services/waitlist';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import JobFeatures from '../components/JobFeatures';
import HowItWorksSection from '../components/HowItWorksSection';
import AboutUs from '../components/AboutUs';
import WhyJobFindDifferent from '../components/WhyJobFindDifferent';
import UniversityDashboard from '../components/UniversityDashboard';
import Testimonials from '../components/Testimonials';
import WaitlistSignup from '../components/WaitlistSignup';
import FaqSection from '../components/FaqSection'
import CtaSection from '../components/CtaSection';
import Footer from '../components/Footer';

const LandingPage = () => {
  useEffect(() => {
    triggerBase();
  }, []);

  return (
    <div className="font-sans bg-[#fbfbfb]">
      <Navbar />
      <HeroSection />
      <JobFeatures /> 
      <HowItWorksSection />
      <AboutUs />
      <WhyJobFindDifferent />
      <WaitlistSignup />
      <UniversityDashboard />
      <FaqSection />
      {/* <Testimonials /> */}
      <CtaSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
