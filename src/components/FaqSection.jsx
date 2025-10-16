import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is JobFind?",
      answer:
        "JobFind is an AI-powered platform that helps you discover, apply, and track job opportunities that match your unique skills, goals, and career aspirations.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply sign up with your email or connect your LinkedIn profile. Our AI will instantly analyze your experience and recommend suitable roles and actions to take next.",
    },
    {
      question: "What makes JobFind different from others?",
      answer:
        "Unlike traditional job boards, JobFind uses advanced AI to predict your career trajectory, match you to roles that fit your long-term goals, and provide actionable insights to grow your career.",
    },
    {
      question: "How accurate is the job matching?",
      answer:
        "Our AI algorithm analyzes millions of data points to provide highly accurate matches based on your skills, interests, and job history. However, you can always refine your preferences for better results.",
    },
    {
      question: "Do you support international candidates?",
      answer:
        "Yes! JobFind’s Visa Filter feature helps international candidates find roles that align with their eligibility and visa requirements.",
    },
    {
      question: "How does AI-generated cover-letter training work?",
      answer:
        "Our system reviews your resume, job description, and writing style to generate a tailored cover letter and suggest improvements that make your application stand out.",
    },
  ];

  return (
    <section className="bg-[#F8F9FC] py-20 px-6 md:px-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Got Questions? We’ve Got Answers
        </h2>
      </div>

      {/* FAQ Items */}
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className=" border-b border-gray-500"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-5 text-left"
            >
              <span className="font-medium text-gray-800">{faq.question}</span>
              {openIndex === index ? (
                <FiChevronUp className="text-gray-600" />
              ) : (
                <FiChevronDown className="text-gray-600" />
              )}
            </button>

            {openIndex === index && (
              <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed animate-fadeIn">
                {faq.answer || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel nulla at libero tincidunt finibus."}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
