import React from 'react';
import { CheckCircle } from 'lucide-react';

const Timeline: React.FC = () => {
  const timelineItems = [
    {
      title: "Month 1: Strategic Foundation & Launch",
      items: [
        "**Deep Dive into Your Business:** Our first priority is understanding your unique value proposition and ideal customer. We'll learn about your business, target market, and specific goals.",
        "**Strategy Session:** We'll schedule a one-hour session focused on defining your ideal customer profile and understanding who your business is targeting.",
        "**Copywriting Session:** We'll also schedule a session dedicated to developing the specific messaging that will be used to communicate with your target audience.",
        "**Technical Setup:** Behind the scenes, our team will set up your cold email optimized infrastructure. We configure everything to ensure maximum deliverability, so your emails land directly in your prospects' primary inboxes, not their spam folders.",
        "**Campaign Launch:** Around the 30-day mark, we'll launch your first campaign."
      ]
    },
    {
      title: "Months 2-3: Refinement & Early Results",
      items: [
        "**First Leads:** You'll begin to see interested leads flowing into your inbox.",
        "**Optimization Begins (A/B Testing):** We'll constantly analyze your campaign performance. We'll A/B test different subject lines, email body copy, and calls-to-action to pinpoint the messaging that resonates most with your target audience.",
        "**Weekly Performance Reviews:** We'll meet with you every week to review campaign results, discuss insights, and refine our approach."
      ]
    },
    {
      title: "Month 4 & Beyond: Sustainable Growth",
      items: [
        "**Optimized Messaging:** By this stage, we've identified the highest-converting messaging and have a deep understanding of your ideal customer profile.",
        "**Sustained Deliverability:** Our focus shifts to maintaining peak email deliverability. This ensures a consistent and predictable flow of high-quality leads into your pipeline.",
        "**Bi-Weekly Performance Reviews:** We'll switch to a bi-weekly review model, with the same objectives: review campaign results, discuss insights, and refine our approach."
      ]
    }
  ];

  return (
    <section id="timeline" className="py-16 md:py-24 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Timeline</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mt-4"></div>
          <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
            Here's a realistic timeline of what you can expect when partnering with us to fuel your growth with lead generation:
          </p>
        </div>
        
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-200"></div>
          
          {timelineItems.map((period, index) => (
            <div key={index} className={`relative mb-16 md:mb-0 md:pb-16 ${index === timelineItems.length - 1 ? 'mb-0 pb-0' : ''}`}>
              <div className="md:flex items-center justify-between">
                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto' : 'md:order-1 md:ml-auto'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-md relative transform transition-transform hover:scale-[1.02]">
                    <h3 className="text-xl font-bold text-purple-800 mb-4">{period.title}</h3>
                    <ul className="space-y-3">
                      {period.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex">
                          <CheckCircle className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0 mt-1" />
                          <span className="text-gray-700" dangerouslySetInnerHTML={{ 
                            __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                          }} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;