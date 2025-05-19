import React from 'react';
import { Users, TrendingUp } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About Us</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mt-4"></div>
        </div>

        {/* The main flex container for the two columns */}
        <div className="flex flex-col md:flex-row gap-8 items-center">

          {/* Column 1: */}
          <div className="md:w-1/2">
            <p className="text-lg text-gray-700 leading-relaxed">
              <span className='font-bold'>Leadobase</span> is a <span className='font-bold'>B2B lead generation</span> agency. We helped 68 clients generate over $12M in closed deals
              in the past two years. We specialize in <span className='font-bold'>sustainable cold outreach</span> strategies optimized to deliver
              a consistent flow of <span className='font-bold'>qualified leads</span> and drive stable growth for your business.
            </p>
          </div>

          {/* Column 2: */}
          <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform hover:scale-105">
              <Users className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">68 Clients</h3>
              <p className="text-gray-700">Trusted us with their lead generation needs</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform hover:scale-105">
              <TrendingUp className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">$12M+</h3>
              <p className="text-gray-700">In closed deals for our clients</p>
            </div>
          </div>



        </div>
      </div>
    </section>
  );
};

export default AboutUs;