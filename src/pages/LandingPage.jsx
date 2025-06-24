import { useEffect } from 'react';
import { triggerBase } from '../services/waitlist';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import JobFeatures from '../components/JobFeatures';
import JobSearchFeature from '../components/JobSearchFeature';
import Testimonials from '../components/Testimonials';
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
      <JobSearchFeature />
      <Testimonials />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
