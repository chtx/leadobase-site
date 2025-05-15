import React from 'react';
import { Handshake, Award, Lightbulb, Target } from 'lucide-react';

const Values: React.FC = () => {
  const values = [
    {
      icon: <Handshake className="h-12 w-12 text-purple-600" />,
      title: "Partnership",
      description: "We prioritize the relationship – we will always strive to do what's best for you."
    },
    {
      icon: <Award className="h-12 w-12 text-purple-600" />,
      title: "Professionalism",
      description: "We are reliable and we do what we say. We are experts in our field."
    },
    {
      icon: <Lightbulb className="h-12 w-12 text-purple-600" />,
      title: "Innovation",
      description: "We work on your behalf to find better ways and stay ahead of industry trends."
    },
    {
      icon: <Target className="h-12 w-12 text-purple-600" />,
      title: "Ownership",
      description: "Your goals are our goals; we take full ownership to ensure they are met."
    }
  ];

  return (
    <section id="values" className="py-16 md:py-24 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Values</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-md text-center transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex justify-center mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-700">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;