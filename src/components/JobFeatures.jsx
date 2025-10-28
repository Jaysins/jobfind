import bestJob from "../assets/images/best_job.svg";
import June from "../assets/images/june_12.svg";
import smartNudges from "../assets/images/smart_nudges.svg";
import fiftyFour from "../assets/images/fifty-four.png";
import Dod from "../assets/images/director_of_designs.svg";
import LoadingScore from "../assets/images/loading_bar.svg";

export default function JobFeatures() {
  return (
    <section className="bg-[#F8FAFF] py-20 px-6 md:px-16 lg:px-28">
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B0C10] mb-4">
          Smart Features for Career Growth
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our AI technology revolutionizes how you discover and apply to opportunities that
          match your unique profile and career aspirations.
        </p>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Career Mapping Engine */}
        <div className="bg-[#0B0C10] rounded-2xl p-6 text-white flex flex-col items-center shadow-lg hover:-translate-y-1 transition-transform">
          <div className="relative w-full h-44 flex items-center justify-center mb-4">
            <img
              src={Dod}
              alt="Career Mapping Front"
              className="absolute w-full max-w-[370px]"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">Career Mapping Engine</h3>
          <p className="text-gray-300 text-center text-sm">
            AI-powered career path prediction.
          </p>
        </div>

        {/* Application Tracker */}
        <div className="bg-[#0B0C10] rounded-2xl p-6 text-white flex flex-col items-center shadow-lg hover:-translate-y-1 transition-transform">
          <div className="relative w-full h-44 flex items-center justify-center mb-4">
            <img
              src={fiftyFour}
              alt="Application Tracker Back"
              className="absolute w-[90%] max-w-[280px] -translate-x-4 translate-y-6 opacity-90"
            />
            <img
              src={June}
              alt="Application Tracker Front"
              className="absolute w-[90%] max-w-[320px] translate-x-10 -translate-y-3 z-10"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">Application Tracker</h3>
          <p className="text-gray-300 text-center text-sm">
            Track resume views, rejections, assessments, interview dates.
          </p>
        </div>

        {/* FitScore */}
        <div className="bg-[#0B0C10] rounded-2xl p-6 text-white flex flex-col items-center shadow-lg hover:-translate-y-1 transition-transform">
          <div className="relative w-full h-44 flex items-center justify-center mb-4">
             <img
              src={LoadingScore}
              alt="LoadingScore"
              className="absolute w-[100%] max-w-[280px] translate-x-2 translate-y-6 opacity-90"
            />
            <img
              src={LoadingScore}
              alt="LoadingScore"
              className="absolute w-[100%] max-w-[320px] -translate-x-4 -translate-y-3 z-10"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">Fit Score</h3>
          <p className="text-gray-300 text-center text-sm">
            Get instant compatibility ratings for every role.
          </p>
        </div>

        {/* Visa Filter */}
        <div className="bg-[#0B0C10] rounded-2xl p-6 text-white flex flex-col items-center shadow-lg hover:-translate-y-1 transition-transform">
          <div className="relative w-full h-44 flex items-center justify-center mb-4">
            <img
              src={bestJob}
              alt="Visa Filter"
              className="w-[85%] max-w-[320px] rounded-xl shadow-xl"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">Visa Filter</h3>
          <p className="text-gray-300 text-center text-sm">
            Navigate international opportunities with confidence.
          </p>
        </div>

        {/* Clarity Engine */}
        <div className="bg-[#0B0C10] rounded-2xl p-6 text-white flex flex-col items-center shadow-lg hover:-translate-y-1 transition-transform">
          <div className="relative w-full h-44 flex items-center justify-center mb-4">
            <img
              src={smartNudges}
              alt="Clarity Engine"
              className="w-[80%] max-w-[340px] rounded-xl shadow-xl"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">Clarity Engine</h3>
          <p className="text-gray-300 text-center text-sm">
            Daily micro-actions and suggested learning to close gaps.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-[#0B0C10] rounded-2xl p-8 flex flex-col items-center justify-center shadow-lg hover:-translate-y-1 transition-transform">
          <h3 className="text-2xl font-semibold mb-6 text-white text-center">
            Ready to begin your career journey?
          </h3>
          <button className="bg-[#576ADF] hover:bg-[#4A5ED1] transition-all text-white px-12 py-2 rounded-md font-medium">
            Join the Waitlist
          </button>
        </div>
      </div>
    </section>
  );
}
