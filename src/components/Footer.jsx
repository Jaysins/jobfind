import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => (
  <footer className="">
    <div className="bg-[#f3f4ff] p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h1 className="text-2xl font-bold text-blue-700">JobFind</h1>
        <p className="text-sm text-slate-600 my-2">
          JobFind is the right platform for job seekers searching for jobs
        </p>
      </div>

      <div className="text-center">
        <h4 className="text-md font-medium text-slate-900 mb-2">Company</h4>
        <ul className="space-y-1 text-slate-700 text-sm">
          <li className="py-2">About</li>
          <li className="py-2">Features</li>
          <li className="py-2">Pricing</li>
          <li className="py-2">FAQs</li>
        </ul>
      </div>

      <div>
        <h4 className="text-md font-medium text-slate-900 mb-2">Contact</h4>
        <p className="text-sm grid text-slate-700">
          <span className="font-semibold">123 Bay Street, Toronto, Canada M4Y 0A7</span> 
          <span className="my-2">+1 444 999 7400</span>
          <span>info@jobfindai.com</span>
          
        </p>
        <div className="flex space-x-4 mt-3 text-blue-700 text-lg">
          <FaLinkedin className="cursor-pointer" />
          <FaInstagram className="cursor-pointer" />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
