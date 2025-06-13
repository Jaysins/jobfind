import React from 'react';

const Navbar = () => {
  return (
    <nav className="container flex items-center justify-between py-4 px-8 ">
      <div className="text-2xl font-bold text-[#576ADF]">JobFind</div>

      <ul className="hidden md:flex gap-20 text-gray-700 ">
        <li className="hover:text-blue-700 cursor-pointer">Features</li>
        <li className="hover:text-blue-700 cursor-pointer">Pricing</li>
        <li className="hover:text-blue-700 cursor-pointer">About us</li>
        <li className="hover:text-blue-700 cursor-pointer">Contact</li>
      </ul>

      <div className="flex gap-4">
        <button className="px-4 py-2 border border-[#576ADF] text-[#576ADF] rounded hover:bg-blue-50">Login</button>
        <button className="px-8 py-2 bg-[#576ADF] text-white rounded hover:bg-blue-700">Sign up</button>
      </div>
    </nav>
  );
};

export default Navbar;
