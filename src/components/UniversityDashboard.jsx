import React from "react";
import campusIcon from "../assets/images/campus.svg";
import ambassadorIcon from "../assets/images/ambassador.svg";
import employerIcon from "../assets/images/employer.svg";

const features = [
  {
    icon: campusIcon,
    title: "Campus Integration",
    desc: "Direct integration with university career centers and academic systems",
  },
  {
    icon: ambassadorIcon,
    title: "Ambassador Program",
    desc: "Student ambassadors to help peers navigate career opportunities",
  },
  {
    icon: employerIcon,
    title: "Employer Partnerships",
    desc: "Direct partnerships with companies for exclusive opportunities and insights",
  },
];

const UniversityDashboard = () => {
  return (
    <section className="bg-[#F7F8FB] border rounded-md md: mx-20 py-16 px-6 md:px-20 rounded-3xl">
      <div className="text-center mb-10">
        <span className="inline-flex items-center gap-2 border border-[#576ADF] text-[#3E5CF4] px-4 py-2 rounded-md text-sm font-medium">
          Coming Soon, Q2 2025
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-4">
          University Dashboard
        </h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Specialized tools for universities to help their students succeed in the global job market.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-8 shadow-md text-center hover:shadow-lg transition-all"
          >
            <div className="w-14 h-14 mx-auto mb-4 bg-[#E8E9FE] flex items-center justify-center rounded-full">
              <img src={feature.icon} alt={feature.title} className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button className="bg-[#3E5CF4] hover:bg-[#324acc] text-white px-6 py-3 rounded-lg font-semibold transition-colors">
          Join University Waitlist
        </button>
      </div>
    </section>
  );
};

export default UniversityDashboard;
