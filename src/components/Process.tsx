import React from 'react';
import { Target, LineChart, Users, MessageSquare } from 'lucide-react';

const Process: React.FC = () => {
  const pillars = [
    {
      icon: <Target className="h-10 w-10 text-purple-600" />,
      title: "Target Market Intelligence",
      description: "We go beyond surface-level understanding. Through in-depth analysis, we uncover your ideal customers' core needs, preferences, pain points, and motivations. This foundational research informs every aspect of your campaigns."
    },
    {
      icon: <LineChart className="h-10 w-10 text-purple-600" />,
      title: "Data-Driven Optimization",
      description: "We don't guess; we test. We employ an iterative process of A/B testing to identify the messaging, offers, and calls-to-action that generate the highest engagement and conversion rates with your target audience."
    },
    {
      icon: <Users className="h-10 w-10 text-purple-600" />,
      title: "Strategic Audience Segmentation",
      description: "One-size-fits-all doesn't work. We segment your target market into distinct groups based on shared characteristics, allowing us to craft highly personalized and relevant messaging that resonates deeply with each segment. This maximizes the impact of every email."
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-purple-600" />,
      title: "Authentic Communication ('Your Voice')",
      description: "We craft emails that feel personal and authentic, like a one-to-one conversation, not a generic sales pitch. Every email is written in your voice, reflecting your brand's personality and building genuine connections. You'll have full approval of all copy before it's sent, ensuring it perfectly aligns with your brand."
    }
  ];

  return (
    <section id="process" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Proven Process</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mt-4"></div>
          <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
            <span className="font-bold">The Perpetual Pipeline™</span> is our proven process that focuses on sustainability. 
            Our goal is to deliver qualified leads to your inbox indefinitely to fuel the growth of your business.
          </p>
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            The Four Pillars of The Perpetual Pipeline™
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => (
              <div key={index} className="bg-purple-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-white p-3 rounded-full mr-4">
                    {pillar.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900">{pillar.title}</h4>
                </div>
                <p className="text-gray-700">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-purple-600 text-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-6">What We <em>Won't</em> Do:</h3>
          <p className="text-lg leading-relaxed">
            We are <em>not</em> a "spray and pray" agency. We will never sacrifice your reputation by blasting 
            thousands of prospects with ineffective, generic messaging. We believe in quality over quantity, 
            and our Perpetual Pipeline™ process ensures that every email we send is crafted to maximize results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;