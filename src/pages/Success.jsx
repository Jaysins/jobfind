import { useLocation, Link } from "react-router-dom";
import Doodles from "../assets/images/doodles.svg";

const Success = () => {
    const { state } = useLocation();
    const name = state?.name || "";
  return (
    <section className="min-h-screen bg-[#f0f4fc] flex flex-col">
      <div className="px-10 py-8">
        <p className="text-[#576ADF] text-lg font-bold">JobFind</p>
      </div>
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="bg-[#EFF2F9] shadow-xl rounded-lg p-8 w-[400px] text-center z-10">
          <h1 className="text-4xl font-semibold text-gray-800 mb-4">
                  Thank you{ name ? `, ${name}` : "" }!
          </h1>
          <p className="text-sm text-gray-500 mb-6">
            You’re on the list. We’ll send you an email once we’re ready.
          </p>
          <Link
            to="/"
            className="inline-block mt-2 bg-[#576ADF] hover:bg-blue-700 text-white py-2 px-4 rounded-md transition"
          >
            Back to Home
          </Link>
        </div>
        <div className="hidden md:block w-full h-80 pointer-events-none">
          <div className="flex justify-center items-end h-full space-x-6 opacity-50 px-8 text-[#d3d8e2]">
            <img src={Doodles} alt="decorative doodles" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Success;
