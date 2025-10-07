import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className=" px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link 
        to = '/'
        className="text-2xl font-bold text-[#576ADF]">JobFind</Link>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FiX className="text-2xl text-[#576ADF]" />
            ) : (
              <FiMenu className="text-2xl text-[#576ADF]" />
            )}
          </button>
        </div>

        <ul className="hidden md:flex gap-10 text-gray-700">
          <li className="hover:text-blue-700 cursor-pointer">Features</li>
          <li className="hover:text-blue-700 cursor-pointer">Pricing</li>
          <li className="hover:text-blue-700 cursor-pointer">About us</li>
          <li className="hover:text-blue-700 cursor-pointer">Contact</li>
        </ul>

        <div className="hidden md:flex gap-4">
          <Link 
          to="/waitlist"
          className="px-6 py-2 border border-[#576ADF] text-[#576ADF] rounded-lg hover:bg-blue-50">
            Login
          </Link>
         
          <Link 
           to="/waitlist"
           className="px-8 py-2 bg-[#576ADF] text-white rounded-lg hover:bg-blue-700">
            Sign up
          </Link>

          {/* <Link
            to="/waitlist"
            className="px-6 py-2 bg-[#576ADF] text-white rounded hover:bg-blue-700"
          >
            Join The Waitlist
          </Link> */}
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 text-center text-gray-700">
          <ul className="space-y-2">
            <li className="hover:text-blue-700 cursor-pointer">Features</li>
            <li className="hover:text-blue-700 cursor-pointer">Pricing</li>
            <li className="hover:text-blue-700 cursor-pointer">About us</li>
            <li className="hover:text-blue-700 cursor-pointer">Contact</li>
          </ul>
          <div className="flex flex-col items-center gap-2 pt-4">
            <Link
              to="/waitlist"
              className="w-4/5 px-6 py-2 bg-[#576ADF] text-white rounded hover:bg-blue-700"
            >
              Join The Waitlist
            </Link>
            {/* <button className="w-4/5 px-4 py-2 border border-[#576ADF] text-[#576ADF] rounded hover:bg-blue-50">
              Login
            </button>
            <button className="w-4/5 px-6 py-2 bg-[#576ADF] text-white rounded hover:bg-blue-700">
              Sign up
            </button> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
