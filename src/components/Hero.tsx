import React from 'react'; // Removed useEffect, useState unless needed for other things
import Lottie from "lottie-react";
// Import your animation JSON from the src directory
import calendarAnimation from "../assets/calendar.json"; // Adjust path as needed

const Hero: React.FC = () => {
  const handleGetStarted = () => {
    window.location.href = 'https://cal.com/patrick-p/15min';
  };

  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-purple-50 to-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            {/* <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"> */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              <span className="text-purple-700">Interested</span> prospects delivered straight to your <span className="text-purple-700">inbox</span>
            </h1>
            <p className="mt-6 text-xl text-gray-700 max-w-2xl">
              We help B2B companies close 3-6 more deals per month by connecting them with interested leads through our Perpetual Pipeline™ email outbound process.
            </p>
            <div className="mt-8">
              <button
                onClick={handleGetStarted}
                className="bg-purple-600 text-white px-8 py-3 rounded-md font-medium hover:bg-purple-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:translate-y-[-2px] text-lg"
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center items-center p-4 md:p-0"> {/* Added some padding for smaller screens, removed on md+ */}
  {/* Container for Lottie, controls max-width and margin */}
  <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl ml-0 md:ml-6 lg:ml-8"> {/* ADJUSTABLE: Max Width and Left Margin */}
    <Lottie
      animationData={calendarAnimation} 
      loop={true}
      className="w-full h-auto" 
    />
  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;