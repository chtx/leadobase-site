import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  type FAQCategory = {
    title: string;
    questions: {
      question: string;
      answer: string;
    }[];
  };

  const faqCategories: FAQCategory[] = [
    {
      title: "General Questions",
      questions: [
        {
          question: "What is Leadobase?",
          answer: "Leadobase is a B2B lead generation agency specializing in sustainable cold email outreach. We help businesses generate a consistent flow of qualified leads and drive sustainable revenue growth. We've helped over 68 clients close more than $12M in deals in the past two years."
        },
        {
          question: "What makes your approach different from other lead generation agencies?",
          answer: "We're not a \"spray and pray\" agency. We focus on quality over quantity. This includes deep target market research, strategic audience segmentation, iterative A/B testing, and crafting authentic, personalized emails in your voice. We prioritize long-term results and protecting your reputation."
        },
        {
          question: "What types of businesses do you work with?",
          answer: "We primarily work with B2B (business-to-business) companies that offer high-ticket products or services. Our strategies are particularly effective for businesses with longer sales cycles and those seeking to build relationships with key decision-makers."
        }
      ]
    },
    {
      title: "The Process",
      questions: [
        {
          question: "What is the typical timeline for seeing results?",
          answer: "You can expect to see initial leads flowing into your inbox within the first 2-3 months. Month 1 is focused on strategic setup, research, and launching your first campaign. Months 2-3 are about refinement and optimization based on real-world data. By Month 4 and beyond, we've identified the highest-converting messaging and are focused on scaling volume while maintaining peak deliverability."
        },
        {
          question: "How involved do I need to be in the process?",
          answer: "We require your input during the initial strategy phase (two key calls in the first month) to ensure we deeply understand your business and target market. We also meet bi-weekly to review results and discuss any necessary adjustments. Beyond that, we handle the heavy lifting, crafting emails, managing campaigns, and optimizing for performance. You'll have full approval of all email copy before it's sent."
        },
        {
          question: "What is A/B testing, and why is it important?",
          answer: "A/B testing is a method of comparing two versions of an email (e.g., different subject lines, calls-to-action) to see which performs better. We use A/B testing to continuously refine our messaging and identify what resonates most strongly with your target audience, maximizing your response rates."
        },
        {
          question: "How do you ensure my emails don't end up in spam folders?",
          answer: "We have an email deliverability expert in our staff. During the first month we'll set up and optimize email infrastructure, including authentication protocols (SPF, DKIM, DMARC) and warm-up processes, to maximize deliverability to your prospects' primary inboxes. We also continuously monitor deliverability and adjust our strategies as needed."
        },
        {
          question: "How do you personalize the emails?",
          answer: "We go beyond just using a prospect's name. We leverage our deep research into your target market and segment your audience based on shared characteristics. This allows us to tailor the messaging, offers, and tone to resonate with each specific group, making the emails feel more relevant and engaging. We'll also incorporate details specific to each prospect whenever possible."
        }
      ]
    },
    {
      title: "Results & Reporting",
      questions: [
        {
          question: "How do you measure success?",
          answer: "We track key metrics, including open rates, click-through rates, response rates, and, most importantly, the number of qualified leads generated and deals closed. We provide regular reports during our bi-weekly meetings, and we're always transparent about our progress. Our ultimate goal is to drive revenue growth for your business."
        },
        {
          question: "What if I'm not happy with the results?",
          answer: "We're committed to your satisfaction. We'll work closely with you throughout the process, making adjustments based on your feedback and the data we collect. Our focus is on building long-term partnerships, and we're confident in our ability to deliver results. We have a month-to-month contract."
        }
      ]
    },
    {
      title: "Pricing & Contracts",
      questions: [
        {
          question: "How does your pricing works?",
          answer: "Contact us to learn more about pricing."
        },
        {
          question: "What is your contract length?",
          answer: "We work on a month-to-month contract."
        }
      ]
    }
  ];

  const [activeCategory, setActiveCategory] = useState<number>(0);
  const [activeQuestions, setActiveQuestions] = useState<Record<number, Record<number, boolean>>>({});

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    setActiveQuestions(prev => {
      const categoryQuestions = prev[categoryIndex] || {};
      return {
        ...prev,
        [categoryIndex]: {
          ...categoryQuestions,
          [questionIndex]: !categoryQuestions[questionIndex]
        }
      };
    });
  };

  const isQuestionActive = (categoryIndex: number, questionIndex: number) => {
    return activeQuestions[categoryIndex]?.[questionIndex] || false;
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mt-4"></div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Categories */}
          <div className="md:w-1/4">
            <div className="sticky top-24 space-y-2">
              {faqCategories.map((category, categoryIndex) => (
                <button
                  key={categoryIndex}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    activeCategory === categoryIndex 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-purple-100 text-gray-700 hover:bg-purple-200'
                  }`}
                  onClick={() => setActiveCategory(categoryIndex)}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>
          
          {/* Questions and Answers */}
          <div className="md:w-3/4">
            <div className="space-y-6">
              {faqCategories[activeCategory].questions.map((item, questionIndex) => (
                <div 
                  key={questionIndex}
                  className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <button
                    className="w-full flex items-center justify-between p-5 bg-purple-50 hover:bg-purple-100 transition-colors text-left"
                    onClick={() => toggleQuestion(activeCategory, questionIndex)}
                  >
                    <h3 className="text-lg font-medium text-gray-900">{item.question}</h3>
                    {isQuestionActive(activeCategory, questionIndex) ? (
                      <ChevronUp className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    )}
                  </button>
                  
                  {isQuestionActive(activeCategory, questionIndex) && (
                    <div className="p-5 bg-white">
                      <p className="text-gray-700">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;