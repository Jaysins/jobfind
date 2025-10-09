import { FiUserPlus, FiUpload, FiBarChart, FiTarget } from "react-icons/fi";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <FiUserPlus className="text-[#FF6B00] text-3xl mb-4" />,
      title: "Sign up with a new Gmail Account",
      desc: "Sign up with a new Gmail account or let us create one for you. This lets us support you from application to job offer.",
    },
    {
      icon: <FiUpload className="text-[#FF6B00] text-3xl mb-4" />,
      title: "Upload or Connect LinkedIn",
      desc: "Share your resume or LinkedIn profile. We'll analyze your experience, skills, and career trajectory in seconds.",
    },
    {
      icon: <FiBarChart className="text-[#FF6B00] text-3xl mb-4" />,
      title: "We Analyze & Show Your FitScore",
      desc: "Our AI evaluates your profile against millions of career paths and current market signals to calculate your opportunities.",
    },
    {
      icon: <FiTarget className="text-[#FF6B00] text-3xl mb-4" />,
      title: "Get Action Plan + Track Applications",
      desc: "Receive a personalized roadmap with specific steps, then track your progress and applications in one unified dashboard.",
    },
  ];

  return (
    <section className="bg-[#2338B7] text-white text-center px-6 py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-2">
        How JobFind.AI Works
      </h2>
      <p className="text-gray-300 mb-10">
        From profile analysis to career acceleration in three simple steps
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center px-4">
            {step.icon}
            <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
            <p className="text-sm text-gray-300 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;
