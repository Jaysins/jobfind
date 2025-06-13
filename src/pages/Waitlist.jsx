import Doodles from "../assets/images/doodles.svg";

const Waitlist = () => {
  return (
    <section className="min-h-screen bg-[#f0f4fc]">
         <div className="px-10 py-8">
          <p className="text-[#576ADF]  text-lg font-bold">JobFind</p>
        </div>
      <div className=" flex flex-col items-center justify-center overflow-hidden">
       
        <div className="bg-[#EFF2F9] shadow-xl rounded-lg p-8 w-[400px] text-center z-10">
          <h1 className="text-2xl text-4xl font-semibold text-gray-800 mb-2">
            Be first in line
          </h1>
          <p className="text-sm/6 text-gray-500 mb-6">
            Join our waitlist and get exclusive early access before anyone else
          </p>

          <form className="space-y-4">
            <div className="text-left">
              <label className="text-sm font-semibold text-gray-600 mb-1 block">
                Your name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2  bg-white rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g. Doe"
              />
            </div>

            <div className="text-left my-4">
              <label className="text-sm font-semibold text-gray-600 mb-1 block">
                Email address
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 bg-white  rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g. johndoe@gmail.com"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#576ADF] hover:bg-blue-700 text-white py-2 rounded-md transition"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="hidden md:block w-full h-80  pointer-events-none">
          <div className="flex justify-center items-end h-full space-x-6 opacity-50 px-8 text-[#d3d8e2]">
            <img src={Doodles} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
