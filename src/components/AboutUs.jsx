import React from 'react';
import aboutImage from '../assets/images/about-us-team.svg';

export default function AboutUs() {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-16 lg:px-28">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Us</h2>
        <p className="text-gray-600 max-w-md mx-auto">
          We are not another job board. We are your career acceleration partner, using the <span className="font-bold">CARES</span> framework.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center text-center gap-10">
        <div className="bg-[#F7F9FF] shadow-md rounded-3xl w-full p-10 text-center md:text-left">
          <h3 className="text-2xl font-semibold text-center  text-gray-800 mb-4">
            <span className="text-gray-400 font-semibold">The Stripe of</span>{' '}
            <span className="font-bold text-gray-800"> Career Services</span>
          </h3>
          <p className="text-center text-gray-600 mb-8">
            An AI infrastructure layer powering career development across institutions, individuals, and enterprises.
          </p>

          <div className="mb-6">
            <h4 className="text-blue-600 font-semibold mb-2 text-center underline ">Our Mission</h4>
            <p className="text-gray-700 text-center ">
              To become the Stripe of Career Services by providing institutions and individuals an AI infrastructure layer for end-to-end career guidance.
            </p>
          </div>

          <div>
            <h4 className="text-blue-600 font-semibold mb-2 text-center underline">Our Vision</h4>
            <p className="text-gray-700 text-center">
              To power career journeys globally with data-driven intelligence—so everyone, everywhere, knows exactly what’s next.
            </p>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src={aboutImage}
            alt="Team working together"
            className="rounded-3xl shadow-lg w-full max-w-md object-cover"
          />
        </div>
      </div>
    </section>
  );
}
