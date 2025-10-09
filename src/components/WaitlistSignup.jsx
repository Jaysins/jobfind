import React from "react";
import groupImg from "../assets/images/group_photo.svg"; 

const WaitlistSignup = () => {
  return (
    <section className="bg-[#F7F9FF] py-16 px-6 md:px-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Join the Waitlist –
          <br />
          <span className="text-gray-800">First month free for early signups</span>
        </h2>
        <p className="text-gray-600 mt-3">
          Get priority access to pilots and exclusive early-bird pricing. Refer friends to move up the list.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-5xl mx-auto">
        <img
          src={groupImg}
          alt="Happy group"
          className="w-full md:w-1/2 rounded-2xl object-cover"
        />

        <div className="bg-[#3E5CF4] text-white rounded-2xl p-8 w-full md:w-1/2">
          <form className="flex flex-col gap-5">
            <div>
              <label className="block mb-1 text-sm font-medium">First name</label>
              <input
                type="text"
                placeholder="e.g. Doe"
                className="w-full placeholder-grey bg-white px-4 py-2 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Last name</label>
              <input
                type="text"
                placeholder="e.g. Doe"
                className="w-full placeholder-grey bg-white  px-4 py-2 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Email address</label>
              <input
                type="email"
                placeholder="e.g. johndoe22@gmail.com"
                className="w-full placeholder-grey bg-white  px-4 py-2 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none"
              />
            </div>
            <button
              type="button"
              className="bg-[#FF8243] hover:bg-[#ff965f] transition-colors py-3 rounded-lg font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSignup;
