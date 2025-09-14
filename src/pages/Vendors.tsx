import { useEffect, useState } from 'react';
import { Building2, Handshake, ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
// import Seo from '../components/Seo';
// import { organization, localBusiness, serviceSuppliers, breadcrumbsFor } from '../seo/structuredData';
import AnimateOnScroll from '../components/AnimateOnScroll';
// Import vendors data
import vendorsData from '../cms/data/vendors.json';

const Vendors = () => {
  const [data, setData] = useState(vendorsData);
  const [expandedCategories, setExpandedCategories] = useState<number[]>([]);
  
  // In a real implementation, this would fetch data from Sanity CMS
  useEffect(() => {
    // Simulate data fetching
    setData(vendorsData);
  }, []);

  const toggleCategory = (index: number) => {
    setExpandedCategories(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <>
      {/* SEO temporarily disabled for build */}
      
      {/* Header */}
      <section className="bg-white text-[#1e293b] py-20 md:py-32 relative overflow-hidden border-b border-slate-100">
        <div className="container-custom text-center relative z-10">
          <AnimateOnScroll>
            <div className="flex justify-center mb-6 animate-fadeInUp">
              <Building2 className="h-12 w-12 text-sky-700" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fadeInUp delay-100">
              <span className="bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] bg-clip-text text-transparent">{data.title.split(' ')[0]}</span>
              <span className="text-[#111]"> {data.title.split(' ').slice(1).join(' ')} </span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-[#222] leading-relaxed mb-8 animate-fadeInUp delay-200">
              {data.subtitle}
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-sky-400 to-blue-600 mx-auto rounded-full animate-slideInLeft delay-300"></div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Vendors */}
      <section className="py-20 bg-gradient-to-b from-slate-900 via-blue-900/30 to-slate-900 relative">
        <div className="absolute inset-0 bg-blue-pattern opacity-5"></div>
        <div className="container-custom relative z-10">
          {data.vendors.map((category, index) => (
            <AnimateOnScroll key={index}>
              <div className="mb-8 last:mb-0">
                {/* Collapsible Category Header */}
                <button
                  onClick={() => toggleCategory(index)}
                  className="w-full glass-card p-4 sm:p-6 mb-4 hover:animate-float group transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <Handshake className="h-6 w-6 sm:h-8 sm:w-8 text-sky-400 animate-float" />
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white group-hover:text-sky-300 transition-colors">
                        {category.name}
                      </h2>
                    </div>
                    <div className="flex items-center">
                      {expandedCategories.includes(index) ? (
                        <ChevronUpIcon className="h-5 w-5 sm:h-6 sm:w-6 text-sky-400 transition-transform duration-300" />
                      ) : (
                        <ChevronDownIcon className="h-5 w-5 sm:h-6 sm:w-6 text-sky-400 transition-transform duration-300" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Collapsible Content */}
                {expandedCategories.includes(index) && (
                  <div className="glass-card p-8 text-center mb-8">
                    <div className="flex flex-col items-center justify-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full flex items-center justify-center mb-4 animate-pulse">
                        <span className="text-white text-2xl font-bold">⏳</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                        בקרוב...
                      </h3>
                      <p className="text-blue-100 text-sm sm:text-base max-w-md">
                        אנחנו עובדים על הוספת ספקים איכותיים לקטגוריה זו. בקרוב תוכלו לראות כאן המלצות מקצועיות.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-slate-900 to-blue-800 relative">
        <div className="absolute inset-0 bg-gradient-radial from-sky-500/10 via-transparent to-transparent"></div>
        <div className="container-custom text-center relative z-10">
          <AnimateOnScroll>
            <div className="glass-card p-12 max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                <Handshake className="h-12 w-12 text-sky-300 animate-glow" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                מחפשים המלצות נוספות?
              </h2>
              <p className="mb-8 max-w-2xl mx-auto text-blue-100 leading-relaxed text-lg">
                צרו איתנו קשר לקבלת המלצות מותאמות אישית לאירוע שלכם.
              </p>
              <a 
                href="/contact" 
                className="btn btn-primary text-lg px-8 py-4 animate-bounceIn glow hover:animate-glow"
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

export default Vendors;