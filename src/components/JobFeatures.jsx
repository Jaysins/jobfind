import React from "react";
import { Link } from "react-router-dom";

const JobFeatures = () => {
  const features = [
    {
      title: "Career Mapping Engine",
      desc: "AI-powered career path prediction",
      img: "/images/career-mapping.png",
    },
    {
      title: "Application Tracker",
      desc: "Track resume views, rejections, assessments, interview dates",
      img: "/images/application-tracker.png",
    },
    {
      title: "FitScore",
      desc: "Get instant compatibility ratings for every role.",
      img: "/images/fitscore.png",
    },
    {
      title: "Visa Filter",
      desc: "Navigate international opportunities with confidence.",
      img: "/images/visa-filter.png",
    },
    {
      title: "Clarity Engine",
      desc: "Daily micro-actions and suggested learning to close gaps",
      img: "/images/clarity-engine.png",
    },
  ];

  return (
    <section className="bg-[#F8F9FC] py-20 px-6 md:px-16">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Smart Features for Career Growth
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Our AI technology revolutionizes how you discover and apply to
          opportunities that match your unique profile and career aspirations
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#0E0E2C] rounded-xl p-6 text-white text-center w-full max-w-[340px] shadow-md hover:shadow-xl transition"
            style={{
              backgroundImage:
                "url('https://www.transparenttextures.com/patterns/dark-mosaic.png')",
              backgroundSize: "cover",
            }}
          >
            <img
              src={feature.img}
              alt={feature.title}
              className="w-full mb-4 rounded-lg"
            />
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="text-gray-300 text-sm mt-2">{feature.desc}</p>
          </div>
        ))}

        {/* Call to Action Box */}
        <div
          className="bg-[#0E0E2C] rounded-xl p-8 text-white flex flex-col items-center justify-center text-center w-full max-w-[340px]"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/dark-mosaic.png')",
            backgroundSize: "cover",
          }}
        >
          <h3 className="text-lg font-semibold mb-3">
            Ready to begin your <br /> career journey?
          </h3>
          <Link
            to="/waitlist"
            className="bg-[#4E5CF3] text-white px-6 py-2 rounded-md font-medium hover:bg-[#3b4ad9] transition"
          >
            Join the Waitlist
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JobFeatures;
