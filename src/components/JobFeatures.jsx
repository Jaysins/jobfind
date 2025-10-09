import bestJob from "../assets/images/best_job.svg";
import June from "../assets/images/june_12.svg";
import smartNudges from "../assets/images/smart_nudges.svg";
import fiftyFour from "../assets/images/fifty-four.png";
import Dod from "../assets/images/director_of_designs.svg";


const features = [
  {
    title: 'Career Mapping Engine',
    desc: 'AI-powered career path prediction',
    img: Dod,
  },
  {
    title: 'Application Tracker',
    desc: 'Track resume views, rejections, assessments, interview dates',
    img: June,
  },
  {
    title: 'FitScore',
    desc: 'Get instant compatibility ratings for every role.',
    img: '/images/fitscore.png',
  },
  {
    title: 'Visa Filter',
    desc: 'Navigate international opportunities with confidence.',
    img: bestJob,
  },
  {
    title: 'Clarity Engine',
    desc: 'Daily micro-actions and suggested learning to close gaps',
    img: smartNudges,
  },
];

export default function JobFeatures() {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-16 lg:px-28">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Smart Features for Career Growth</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our AI technology revolutionizes how you discover and apply to opportunities that match your unique profile and career aspirations
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-[#0B0C10] text-white rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg">
            <img src={feature.img} alt={feature.title} className="w-full rounded-xl mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-center">{feature.title}</h3>
            <p className="text-gray-300 text-center text-sm">{feature.desc}</p>
          </div>
        ))}

        <div className="bg-[#0B0C10] text-white rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-center">Ready to begin your career journey?</h3>
          <button className="bg-blue-500 hover:bg-blue-600 transition-all text-white px-6 py-2 rounded-xl font-medium">
            Join the Waitlist
          </button>
        </div>
      </div>
    </section>
  );
}
