import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { MdLocationOn, MdEmail } from "react-icons/md";

const Footer = () => (
  <footer className="bg-[#090F1A] text-white py-12 px-8 md:px-20">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* Left Section */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="bg-[#5E6AE1] px-4 py-1 rounded-full text-sm font-semibold">
            <span className="flex items-center gap-1">
               <CiSearch className="text-lg text-white" />  <span>JOBFIND AI</span>
            </span>
          </div>
        </div>
        <p className="text-gray-300 text-sm leading-relaxed">
          AI-powered career progression platform helping students and professionals
          navigate their career journey with predictive insights and personalized guidance.
        </p>
      </div>

      {/* Middle Section */}
      <div>
        <h4 className="font-semibold text-white mb-4">Company</h4>
        <ul className="space-y-2 text-gray-300 text-sm">
          <li>About us</li>
          <li>Features</li>
          <li>How it works</li>
          <li>FAQs</li>
          <li>Terms</li>
        </ul>
      </div>

      {/* Right Section */}
      <div>
        <h4 className="font-semibold text-white mb-4">Contact</h4>
        <div className="space-y-2 text-gray-300 text-sm">
          <p className="flex items-start gap-2">
            <MdLocationOn className="text-lg mt-1" />
            8 The Green, Ste E Dover, Delaware. <br />
            Zip code 19901, USA
          </p>
          <p className="flex items-center gap-2">
            <MdEmail className="text-lg" /> info@jobfindai.io
          </p>
          <div className="flex space-x-4 text-lg mt-3">
            <FaLinkedin className="hover:text-[#5E6AE1] cursor-pointer" />
            <FaInstagram className="hover:text-[#5E6AE1] cursor-pointer" />
          </div>
        </div>
      </div>
    </div>

    
  </footer>
);

export default Footer;
