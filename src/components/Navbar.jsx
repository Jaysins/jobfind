
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Left Logo */}
        <div className="flex items-center space-x-2">
          <div className="bg-[#4E5CF3] text-white px-3 py-2 rounded-full flex items-center space-x-1">
            <FiSearch className="text-white text-lg" />
            <span className="font-semibold text-sm">JOBFIND AI</span>
          </div>
        </div>
        <div className=" flex items-center mx-2 justify-between ">
          <ul className="hidden md:flex space-x-10 text-gray-700 font-medium">
          <li>
            <Link to="/" className="hover:text-[#4E5CF3] transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/features" className="hover:text-[#4E5CF3] transition">
              Features
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-[#4E5CF3] transition">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/faqs" className="hover:text-[#4E5CF3] transition">
              FAQs
            </Link>
          </li>
        </ul>

        {/* Right Button */}
        <Link
          to="/waitlist"
          className="hidden md:block bg-[#4E5CF3] text-white ml-20 px-12 py-2 rounded-md hover:bg-[#576ADF] transition font-medium"
        >
          Join the Waitlist
        </Link>
        </div>
        {/* Center Links */}
        
      </div>
    </nav>
  );
};

export default Navbar;
