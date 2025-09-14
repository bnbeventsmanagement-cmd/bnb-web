import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckIcon, Package, Star, Crown, Shield, Zap } from 'lucide-react';
// import Seo from '../components/Seo';
// import { organization, localBusiness, breadcrumbsFor } from '../seo/structuredData';
import AnimateOnScroll from '../components/AnimateOnScroll';
import { scrollToTop } from '../utils/scrollToTop';
// Import packages data
import packagesData from '../cms/data/packages.json';

const Packages = () => {
  const [data, setData] = useState(packagesData);
  
  // In a real implementation, this would fetch data from Sanity CMS
  useEffect(() => {
    // Simulate data fetching
    setData(packagesData);
  }, []);

  return (
    <>
      {/* SEO temporarily disabled for build */}
      
      {/* Header */}
      <section className="bg-white text-[#1e293b] py-20 md:py-32 relative overflow-hidden border-b border-slate-100">
        <div className="container-custom text-center relative z-10">
          <AnimateOnScroll>
            <div className="flex justify-center mb-6 animate-fadeInUp">
              <Package className="h-12 w-12 text-sky-700" />
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

      {/* Packages */}
      <section className="py-20 bg-gradient-to-b from-slate-900 via-blue-900/30 to-slate-900 relative">
        <div className="absolute inset-0 bg-blue-pattern opacity-5"></div>
        <div className="container-custom relative z-10">
          {/* Responsive grid: 1 col on mobile, 2 on sm, 3 on md+ */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {data.items.map((item, index) => (
              <AnimateOnScroll key={index}>
                <div
                  className={`glass-card overflow-hidden transition-all duration-500 hover:animate-float group relative flex flex-col h-[450px] sm:h-[550px] md:h-[650px] lg:h-[700px] xl:h-[750px] ${
                    item.popular 
                      ? 'ring-2 ring-sky-400 ring-opacity-50' 
                      : item.bestseller 
                      ? 'ring-2 ring-yellow-400 ring-opacity-50'
                      : item.value
                      ? 'ring-2 ring-green-400 ring-opacity-50'
                      : ''
                  }`}
                >
                  {item.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-sky-500 to-blue-600 text-white text-center py-2 sm:py-2.5 lg:py-3 font-bold flex items-center justify-center gap-1.5 sm:gap-2 text-sm sm:text-base lg:text-lg">
                      <Crown className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
                      החבילה המומלצת
                    </div>
                  )}
                  {item.bestseller && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-center py-2 sm:py-2.5 lg:py-3 font-bold flex items-center justify-center gap-1.5 sm:gap-2 text-sm sm:text-base lg:text-lg">
                      <Star className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
                      החבילה הנמכרת
                    </div>
                  )}
                  {item.value && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-center py-2 sm:py-2.5 lg:py-3 font-bold flex items-center justify-center gap-1.5 sm:gap-2 text-sm sm:text-base lg:text-lg">
                      <Crown className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
                      החבילה המשתלמת
                    </div>
                  )}
                  <div className={`flex-1 flex flex-col p-4 sm:p-6 lg:p-8 ${item.popular || item.bestseller || item.value ? 'pt-10 sm:pt-12 lg:pt-16' : ''}`}> 
                    <div className="flex flex-col items-center text-center mb-4 sm:mb-6">
                      {item.name === "חבילת אישורי הגעה" ? (
                        <Zap className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-yellow-400 animate-float mb-2" />
                      ) : item.name === "חבילה לראש שקט" ? (
                        <Shield className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-green-400 animate-float mb-2" />
                      ) : (
                        <Package className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-sky-400 animate-float mb-2" />
                      )}
                      <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white group-hover:text-sky-300 transition-colors mb-2">
                        {item.name}
                      </h3>
                      <p className="text-blue-100 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base lg:text-lg">{item.description}</p>
                      <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-sky-300 mb-4 sm:mb-6 flex items-center gap-2 whitespace-nowrap">
                        <span className="whitespace-nowrap">{item.price}</span>
                      </div>
                    </div>
                    <ul className="space-y-1.5 sm:space-y-2 lg:space-y-2.5 mb-3 sm:mb-4 lg:mb-5 flex-1">
                      {item.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 sm:gap-2.5">
                          {!feature.includes('❌') && (
                            <div className="p-0.5 sm:p-1 bg-gradient-to-br from-sky-500/20 to-blue-600/20 rounded-full">
                              <CheckIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5 lg:h-4 lg:w-4 text-sky-400 flex-shrink-0" />
                            </div>
                          )}
                          <span className="text-blue-100 text-xs sm:text-sm lg:text-base leading-tight">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-3 sm:p-4 lg:p-6 pt-0 mt-auto">
                    <Link
                      to="/contact"
                      onClick={scrollToTop}
                      className={`block text-center py-2.5 sm:py-3 lg:py-4 rounded-lg sm:rounded-xl font-medium transition-all duration-300 w-full text-sm sm:text-base lg:text-lg ${
                        item.popular
                          ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white hover:from-sky-400 hover:to-blue-500 hover:shadow-lg hover:scale-105'
                          : item.bestseller
                          ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:from-yellow-400 hover:to-orange-400 hover:shadow-lg hover:scale-105'
                          : item.value
                          ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-400 hover:to-emerald-500 hover:shadow-lg hover:scale-105'
                          : 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 hover:border-white/40 hover:scale-105'
                      }`}
                      aria-label={`לפרטים נוספים על חבילת ${item.name}`}
                    >
                      לפרטים נוספים
                    </Link>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Packages */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-slate-900 to-blue-800 relative">
        <div className="absolute inset-0 bg-gradient-radial from-sky-500/10 via-transparent to-transparent"></div>
        <div className="container-custom text-center relative z-10">
          <AnimateOnScroll>
            <div className="glass-card p-12 max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                <Crown className="h-12 w-12 text-sky-300 animate-glow" aria-hidden="true" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                מחפשים חבילה מותאמת אישית?
              </h2>
              <p className="mb-8 max-w-2xl mx-auto text-blue-100 leading-relaxed text-lg">
                אנו מציעים גם חבילות מותאמות אישית לפי הצרכים הספציפיים של האירוע שלכם. 
                צרו איתנו קשר כדי לדון באפשרויות.
              </p>
              <Link 
                to="/contact" 
                onClick={scrollToTop}
                className="btn btn-primary text-lg px-8 py-4 animate-bounceIn glow hover:animate-glow"
              >
                צרו קשר לקבלת הצעת מחיר
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
};

export default Packages;