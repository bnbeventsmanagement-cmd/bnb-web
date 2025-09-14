import { useEffect, useState } from 'react';
import { HelpCircle, ChevronDownIcon, ChevronUpIcon, MessageCircle } from 'lucide-react';
// import Seo from '../components/Seo';
// import { organization, localBusiness, faqPage, breadcrumbsFor } from '../seo/structuredData';
import AnimateOnScroll from '../components/AnimateOnScroll';
// Import FAQ data
import faqData from '../cms/data/faq.json';

const FAQ = () => {
  const [data, setData] = useState(faqData);
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  
  // In a real implementation, this would fetch data from Sanity CMS
  useEffect(() => {
    // Simulate data fetching
    setData(faqData);
  }, []);

  const toggleItem = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <>
      {/* SEO temporarily disabled for build */}
      
      {/* Header */}
      <section className="bg-white text-[#1e293b] py-12 sm:py-16 md:py-20 lg:py-32 relative overflow-hidden border-b border-slate-100">
        <div className="container-custom text-center relative z-10 px-4 sm:px-6">
          <AnimateOnScroll>
            <div className="flex justify-center mb-4 sm:mb-6 animate-fadeInUp">
              <HelpCircle className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-sky-700" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 animate-fadeInUp delay-100 px-2">
              <span className="bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] bg-clip-text text-transparent">{data.title.split(' ')[0]}</span>
              <span className="text-[#111]"> {data.title.split(' ').slice(1).join(' ')} </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-[#222] leading-relaxed mb-6 sm:mb-8 animate-fadeInUp delay-200 px-4">
              {data.subtitle}
            </p>
            <div className="w-20 sm:w-24 md:w-32 h-1 bg-gradient-to-r from-sky-400 to-blue-600 mx-auto rounded-full animate-slideInLeft delay-300"></div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-slate-900 via-blue-900/30 to-slate-900 relative">
        <div className="absolute inset-0 bg-blue-pattern opacity-5"></div>
        <div className="container-custom relative z-10 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            {data.faqs.map((faq, index) => (
              <AnimateOnScroll key={index}>
                <div className="mb-6 last:mb-0">
                  {/* FAQ Item */}
                  <div className="glass-card overflow-hidden hover:animate-float group transition-all duration-300">
                    {/* Question Header */}
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full p-4 sm:p-6 text-left hover:bg-white/5 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 sm:gap-4 flex-1">
                          <div className="w-8 h-8 sm:w-10 sm:w-10 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-sm sm:text-base font-bold">?</span>
                          </div>
                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-white group-hover:text-sky-300 transition-colors leading-tight">
                            {faq.question}
                          </h3>
                        </div>
                        <div className="flex items-center ml-4">
                          {expandedItems.includes(index) ? (
                            <ChevronUpIcon className="h-5 w-5 sm:h-6 sm:w-6 text-sky-400 transition-transform duration-300" />
                          ) : (
                            <ChevronDownIcon className="h-5 w-5 sm:h-6 sm:w-6 text-sky-400 transition-transform duration-300" />
                          )}
                        </div>
                      </div>
                    </button>

                    {/* Answer Content */}
                    {expandedItems.includes(index) && (
                      <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                        <div className="border-t border-white/10 pt-4 sm:pt-6">
                          <div className="flex items-start gap-3 sm:gap-4">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                              <span className="text-white text-sm sm:text-base font-bold">✓</span>
                            </div>
                            <div className="flex-1">
                              <p className="text-blue-100 leading-relaxed text-sm sm:text-base md:text-lg">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-900 via-slate-900 to-blue-800 relative">
        <div className="absolute inset-0 bg-gradient-radial from-sky-500/10 via-transparent to-transparent"></div>
        <div className="container-custom text-center relative z-10 px-4 sm:px-6">
          <AnimateOnScroll>
            <div className="glass-card p-6 sm:p-8 md:p-10 lg:p-12 max-w-4xl mx-auto">
              <div className="flex justify-center mb-4 sm:mb-6">
                <MessageCircle className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-sky-300 animate-glow" />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 gradient-text px-2">
                עדיין יש לכם שאלות?
              </h2>
              <p className="mb-6 sm:mb-8 max-w-2xl mx-auto text-blue-100 leading-relaxed text-sm sm:text-base md:text-lg px-4">
                אנחנו כאן לענות על כל השאלות שלכם ולעזור לכם לתכנן את האירוע המושלם.
              </p>
              <a 
                href="/contact" 
                className="btn btn-primary text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 animate-bounceIn glow hover:animate-glow"
              >
                צרו קשר עכשיו
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
};

export default FAQ;
