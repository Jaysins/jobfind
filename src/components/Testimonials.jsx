import { FaQuoteRight, FaStar } from "react-icons/fa";
import Sarah from '../assets/images/image.svg';

const Testimonials = () => (
  <div className="bg-white py-20 px-4">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#1E1E57] mb-12">Our customers sharing their experiences</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((_, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-md p-6 text-left">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-lg text-[#1E1E57]">FitScore is the best</h3>
              <FaQuoteRight className="text-[#C0C0C0] text-xl" />
            </div>
            <div className="flex mb-3 text-yellow-400">
              {Array(5).fill(0).map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <p className="text-sm text-[#4A4A68] mb-4">"JobFind.ai’s FitScore™ was incredibly accurate. I found my perfect role in just 2 weeks - a position I never would have discovered on my own. And in my dream company Google"</p>
            <div className="flex items-center gap-3">
              <img src={Sarah} alt="Sarah Chen" className="w-10 h-10 rounded-full" />
              <div>
                <p className="text-sm font-semibold text-[#1E1E57]">Sarah Chen</p>
                <p className="text-xs text-[#757AF0]">Software Engineer at Google</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end gap-3 mt-6 pr-2">
        <button className="w-10 h-10 rounded-md bg-gray-100 text-xl text-gray-500">&larr;</button>
        <button className="w-10 h-10 rounded-md bg-gray-100 text-xl text-gray-500">&rarr;</button>
      </div>
    </div>
  </div>
);

export default Testimonials;
