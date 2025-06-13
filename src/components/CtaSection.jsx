import React from "react";

const CtaSection = () => (
  <div className="w-full flex justify-center items-center py-16 px-4 bg-white">
    <div className="bg-gradient-to-br from-[#B1C8FF] to-[#576ADF] p-4 rounded-3xl shadow-lg w-full max-w-5xl">
      <div className="bg-white rounded-3xl py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#1E254E] mb-4">
          Ready to Transform Your Career?
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-6">
          Join thousands of professionals who've discovered their perfect role through
          intelligent job matching. Your next opportunity is waiting.
        </p>
        <button className="px-6 py-3 bg-[#576ADF] text-white rounded-md hover:bg-[#3f51b5] transition">
          Get Started Today
        </button>
      </div>
    </div>
  </div>
);

export default CtaSection;
