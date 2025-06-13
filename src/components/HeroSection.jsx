
import heroImage from '../assets/images/hero-dashboard.png'; 
import Meta from '../assets/images/meta.svg'; 
import cocaCola from '../assets/images/coca-cola.svg';
import Google from '../assets/images/google.svg';
import Amazon from '../assets/images/amazon.svg';
import Microsoft from '../assets/images/microsoft.svg';
import Nestle from '../assets/images/nestle.svg';
 

const HeroSection = () => {
  return (
    <section className=" container_padded text-center text-[#1E254E] ">
      <h1 className="text-4xl md:text-5xl  text-gray-800">
        JobFind- Your AI Career Pilot
      </h1>
      <p className="mt-6 text-[#616878] max-w-2xl mx-auto text-lg">
        Transform your job search with intelligent matching, personalized insights, and visa guidance. 
        Find opportunities that truly fit your skills, goals, and location preferences.
      </p>
      <button className="mt-8 px-6 py-3 bg-[#576ADF] text-white rounded hover:bg-blue-700">
        Start Your Journey
      </button>
      <div className="my-12 relative flex justify-center items-center">
  <div className="relative bg-[#F4F6FF] rounded-t-2xl pt-2 px-2 pb-0 border-t-8 border-l-8 border-r-8 border-[#576ADF] overflow-hidden">
  <div className="relative max-w-5xl mx-auto overflow-hidden">
    <div className="relative z-10">
      <img
        src={heroImage}
        alt="Dashboard Preview"
        className="rounded-t-xl w-full"
      />
    </div>
    <div className="absolute bottom-0 left-0 w-full h-40 z-20 bg-gradient-to-t from-[#F4F6FF] via-[#F4F6FF]/80 to-transparent blur-2xl pointer-events-none" />
  </div>
</div>




</div>


      <div>
        <p>Job opportunities from over top companies and more</p>
        <div className='flex flex-col md:flex-row gap-16 justify-center my-8'>
            <img src={Meta} />
            <img src={Nestle} />
            <img src={Google} />
            <img src={Amazon} />
            <img src={Microsoft} />
            <img src={cocaCola} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
