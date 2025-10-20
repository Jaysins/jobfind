import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/images/hero-dashboard.svg";
import Meta from "../assets/images/meta.svg";
import cocaCola from "../assets/images/coca-cola.svg";
import Google from "../assets/images/google.svg";
import Amazon from "../assets/images/amazon.svg";
import Microsoft from "../assets/images/microsoft.svg";
import Nestle from "../assets/images/nestle.svg";

const HeroSection = () => {
  const [typedTitle, setTypedTitle] = useState("");
  const [typedParagraph, setTypedParagraph] = useState("");
  const [showButton, setShowButton] = useState(false);
  const [showLogos, setShowLogos] = useState(false);

  const fullTitle = "The Smarter Way to Find Opportunities";
  const fullParagraph =
    "Transform your job search with intelligent matching, personalized insights, and visa guidance. Find opportunities that truly fit your skills, goals, and location preferences.";

  useEffect(() => {
    let titleIndex = 0;
    let paraIndex = 0;

    // Step 1: Type Title
    const typeTitle = () => {
      if (titleIndex < fullTitle.length) {
        setTypedTitle((prev) => prev + fullTitle[titleIndex]);
        titleIndex++;
        setTimeout(typeTitle, 100);
      } else {
        setTimeout(() => {
          typeParagraph();
        }, 800);
      }
    };
    const typeParagraph = () => {
      if (paraIndex < fullParagraph.length) {
        setTypedParagraph((prev) => prev + fullParagraph[paraIndex]);
        paraIndex++;
        setTimeout(typeParagraph, 40); 
      } else {
        setTimeout(() => {
          setShowButton(true);
        }, 700);
        setTimeout(() => {
          setShowLogos(true);
        }, 1400);
      }
    };

    typeTitle();
  }, []);

  return (
    <section className="container_padded text-center text-[#1E254E] py-32 transition-all duration-500">
      {/* Title typing */}
      <h1 className="text-4xl md:text-5xl text-gray-800 font-bold h-24">
        {typedTitle}
        <span className="animate-pulse">|</span>
      </h1>

      {/* Paragraph typing */}
      {typedParagraph && (
        <p className="mt-6 text-[#616878] max-w-2xl mx-auto text-lg leading-relaxed">
          {typedParagraph}
          <span className="animate-pulse">|</span>
        </p>
      )}

      {/* Button fade-in */}
      {showButton && (
        <div className="transition-all duration-700 opacity-100 translate-y-0 mt-8">
          <Link
            to="/waitlist"
            className="inline-block px-6 py-3 bg-[#576ADF] text-white rounded hover:bg-blue-700 transition"
          >
            Start Your Journey
          </Link>
        </div>
      )}

      
      {showLogos && (
        <div className="mt-16 w-full px-4 text-center animate-fade-in-slow">
          <p className="text-base sm:text-lg text-[#1E254E] mb-6">
            Job opportunities from over top companies and more
          </p>
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-8 sm:gap-12 my-8">
            {[Meta, Nestle, Google, Amazon, Microsoft, cocaCola].map(
              (logo, i) => (
                <img
                  key={i}
                  src={logo}
                  alt={`logo-${i}`}
                  className="h-10 sm:h-12 md:h-12 object-contain transition-transform hover:scale-105"
                />
              )
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
