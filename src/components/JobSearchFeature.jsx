import { BsBarChartFill } from "react-icons/bs";
import Chess from '../assets/images/chess.svg';

const JobSearchFeature = () => (
  <div className=" container_padded">
    <div className="max-w-6xl bg-[#F4F7FE] mx-auto px-10 py-20 rounded-xl">
      <h2 className="text-center text-3xl md:text-4xl font-semibold text-[#1E1E57] mb-12">Leading the Future Job Search</h2>
      <div className="grid  gap-6 items-start">
        <div className="flex space-y-6">
           <div className="bg-white p-6 rounded-lg shadow-sm">
            <BsBarChartFill className="text-[#757AF0] text-xl mb-4" />
            <h3 className="font-semibold text-[#1E1E57] mb-2">Insight Before Opportunity</h3>
            <p className="text-sm text-[#4A4A68] leading-relaxed">Most platforms bombard you with listings. We start by illuminating who you are—your strengths, gaps, and career DNA—so every role you see is a strategic next step</p>
          </div>
           <img src={Chess} alt="chess" className="rounded-[2rem] max-w-xl  ml-20 object-cover" />
          
        </div>
        <div className="flex ">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <BsBarChartFill className="text-[#757AF0] text-xl mb-4" />
            <h3 className="font-semibold text-[#1E1E57] mb-2">Matches You Can Trust</h3>
            <p className="text-sm text-[#4A4A68] leading-relaxed">With FitScore’s deep-learning algorithms, you won’t chase wild goose listings. Instead, you’ll invest time in roles where success is statistically on your side</p>
          </div>
          <div className="bg-white p-6 rounded-lg mx-10 shadow-sm">
            <BsBarChartFill className="text-[#757AF0] text-xl mb-4" />
            <h3 className="font-semibold text-[#1E1E57] mb-2">Growth as a Built-in Feature</h3>
            <p className="text-sm text-[#4A4A68] leading-relaxed">Beyond job hunting, we offer personalized upskilling paths and data-driven milestones so every placement is just the beginning of your upward trajectory</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <BsBarChartFill className="text-[#757AF0] text-xl mb-4" />
            <h3 className="font-semibold text-[#1E1E57] mb-2">Borders Don’t Block You</h3>
            <p className="text-sm text-[#4A4A68] leading-relaxed">Our Visa Filters break down red tape. Explore global openings you’re actually qualified for, turning international dreams into actionable applications</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default JobSearchFeature;
