import { AiOutlineRobot } from "react-icons/ai";
import { FiZap } from "react-icons/fi";
import { FaGlobe } from "react-icons/fa";

const JobFeatures = () => (
  <div className=" container_padded  ">
    <div className="max-w-6xl mx-auto bg-[#1E1E57] text-white text-center px-10 py-20 rounded-xl">
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">Power Features for Smarter Job Hunting</h2>
      <p className="text-sm md:text-base max-w-2xl mx-auto mb-12">Our proprietary AI technology revolutionizes how you discover and apply&nbsp; to opportunities that match your unique profile and career aspirations</p>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-[#2A2A6E] rounded-lg p-6 text-left">
          <AiOutlineRobot className="text-white text-2xl mb-4" />
          <h3 className="font-semibold text-lg mb-2">Clarity Engine</h3>
          <p className="text-sm leading-relaxed py-6">Our proprietary AI analyzes job descriptions and your profile to surface the most relevant opportunities, cutting through the noise of generic&nbsp; job boards</p>
        </div>
        <div className="bg-[#2A2A6E] rounded-lg p-6 text-left">
          <FiZap className="text-white text-2xl mb-4" />
          <h3 className="font-semibold text-lg mb-2">FitScore</h3>
          <p className="text-sm leading-relaxed py-6">Get instant compatibility ratings for every role. Our advanced algorithm considers skills, experience, culture fit, and career trajectory to&nbsp; show your match percentage</p>
        </div>
        <div className="bg-[#2A2A6E] rounded-lg p-6 text-left">
          <FaGlobe className="text-white text-2xl mb-4" />
          <h3 className="font-semibold text-lg mb-2">Visa Filters</h3>
          <p className="text-sm leading-relaxed py-6">Navigate international opportunities with confidence. Filter jobs by&nbsp; visa sponsorship availability and get guidance on requirements for your target countries</p>
        </div>
      </div>
      
    </div>

    <div className="grid md:grid-cols-3 gap-6 mt-16 text-center text-[#4C4CFC]">
        <div>
          <h4 className="text-3xl font-semibold">50,000+</h4>
          <p className="text-md text-[#1E254E] mt-2">Active Job Seekers</p>
        </div>
        <div>
          <h4 className="text-3xl font-semibold">95%</h4>
          <p className="text-md text-[#1E254E] mt-2">Match Accuracy</p>
        </div>
        <div>
          <h4 className="text-3xl font-semibold">35,000+</h4>
          <p className="text-md text-[#1E254E] mt-2">Successful Placements</p>
        </div>
      </div>
  </div>
);

export default JobFeatures;
