import React from 'react';
import { Building2, Briefcase, CircleUserRound, Laptop, Wrench, Users, BarChart, Factory } from 'lucide-react';

const Industries: React.FC = () => {
  const industries = [
    { name: "EOS Implementers", count: 16, icon: <Building2 className="h-8 w-8 text-purple-600" /> },
    { name: "Marketing/Design/PR Agencies", count: 13, icon: <Briefcase className="h-8 w-8 text-purple-600" /> },
    { name: "Leadership Coaching", count: 8, icon: <CircleUserRound className="h-8 w-8 text-purple-600" /> },
    { name: "B2B SaaS", count: 6, icon: <Laptop className="h-8 w-8 text-purple-600" /> },
    { name: "MSP/IT", count: 6, icon: <Wrench className="h-8 w-8 text-purple-600" /> },
    { name: "HR/Recruiting", count: 4, icon: <Users className="h-8 w-8 text-purple-600" /> },
    { name: "Accounting Firms", count: 3, icon: <BarChart className="h-8 w-8 text-purple-600" /> },
    { name: "Manufacturing", count: 3, icon: <Factory className="h-8 w-8 text-purple-600" /> },
  ];

  return (
    <section id="industries" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Industries We Specialize In</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mt-4"></div>
          <p className="mt-6 text-lg text-gray-700">
            Industries where we helped businesses grow:
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className="bg-purple-50 p-6 rounded-lg shadow-md flex flex-col items-center text-center
              transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="bg-white p-4 rounded-full mb-4">
                {industry.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{industry.name}</h3>
              <p className="text-purple-600 font-medium">
                {industry.count} {industry.count === 1 ? 'Customer' : 'Customers'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;