import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Doodles from "../assets/images/doodles.svg";
import { submitWaitlist } from "../services/waitlist";
import { Link } from "react-router-dom";

const Waitlist = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!name.trim() || !email.trim()) {
      setError("Please fill both name and email.");
      return;
    }
    setLoading(true);
    try {
      const result = await submitWaitlist({ name: name.trim(), email: email.trim() });
      // Optionally check result.status or result.message
      navigate("/success", { state: { name: name.trim() } });
    } catch (err) {
      console.error(err);
 if (err.code === "ALREADY_EXISTS") {
        setError("You’ve already been added to the waitlist.");
      } else {
        // fallback: use err.message or generic
        setError(err.message || "Submission failed. Please try again.");
      }    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#f0f4fc]">
      <div className="px-10 py-8">
        <Link to="/" className="text-[#576ADF] text-lg font-bold">JobFind</Link>
      </div>
      <div className="flex flex-col items-center justify-center overflow-hidden">
        <div className="bg-[#EFF2F9] shadow-xl rounded-lg p-8 w-[400px] text-center z-10">
          <h1 className="text-4xl font-semibold text-gray-800 mb-2">
            Be first in line
          </h1>
          <p className="text-sm text-gray-500 mb-6">
            Join our waitlist and get exclusive early access before anyone else
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="text-left">
              <label className="text-sm font-semibold text-gray-600 mb-1 block">
                Your name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 bg-white rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g. Doe"
                disabled={loading}
              />
            </div>

            <div className="text-left">
              <label className="text-sm font-semibold text-gray-600 mb-1 block">
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 bg-white rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g. johndoe@gmail.com"
                disabled={loading}
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className={`w-full bg-[#576ADF] hover:bg-blue-700 text-white py-2 rounded-md transition ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
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

export default Waitlist;
