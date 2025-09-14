import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
// import Seo from '../components/Seo';
// import { organization, localBusiness, breadcrumbsFor } from '../seo/structuredData';
import AnimateOnScroll from '../components/AnimateOnScroll';
// Import testimonials data
import testimonialsData from '../cms/data/testimonials.json';

const Testimonials = () => {
  const [data, setData] = useState(testimonialsData);
  
  // In a real implementation, this would fetch data from Sanity CMS
  useEffect(() => {
    // Simulate data fetching
    setData(testimonialsData);
  }, []);

  return (
    <>
      {/* SEO temporarily disabled for build */}
      
      {/* Header */}
      <section className="bg-white text-[#1e293b] py-12 sm:py-16 md:py-20 lg:py-32 relative overflow-hidden border-b border-slate-100">
        <div className="container-custom text-center relative z-10 px-4 sm:px-6">
          <AnimateOnScroll>
            <div className="flex justify-center mb-4 sm:mb-6 animate-fadeInUp">
              <Heart className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-sky-700" />
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

      {/* Testimonials */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-slate-900 via-blue-900/30 to-slate-900 relative">
        <div className="absolute inset-0 bg-blue-pattern opacity-5"></div>
        <div className="container-custom relative z-10 px-4 sm:px-6">
          {/* Meet for Meet Reviews Widget */}
          <div className="max-w-7xl mx-auto">
            <AnimateOnScroll>
              <div className="glass-card p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 rounded-2xl sm:rounded-3xl shadow-2xl">
                {/* Elegant Top Decoration */}
                <div className="flex justify-center mb-6 sm:mb-8 lg:mb-10 xl:mb-12">
                  <div className="w-20 sm:w-24 md:w-32 lg:w-40 xl:w-48 2xl:w-56 h-1 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 rounded-full"></div>
                </div>
                
                {/* Widget Content */}
                <div className="p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
                  <iframe 
                    src="https://www.mit4mit.co.il/widgets/reviews_iframe/small/100816" 
                    width="100%" 
                    height="400"
                    frameBorder="0"
                    className="w-full rounded-xl sm:rounded-2xl shadow-inner border border-gray-100 sm:h-[600px] md:h-[700px] lg:h-[800px] xl:h-[900px] 2xl:h-[1000px]"
                    title="ביקורות מיט פור מיט"
                    style={{ 
                      minHeight: '300px',
                      height: '400px'
                    }}
                    onLoad={() => {
                      // Dynamic height adjustment for larger screens
                      const iframe = document.querySelector('iframe[title="ביקורות מיט פור מיט"]') as HTMLIFrameElement;
                      if (iframe) {
                        const updateHeight = () => {
                          if (window.innerWidth >= 640) iframe.style.height = '600px';
                          if (window.innerWidth >= 768) iframe.style.height = '700px';
                          if (window.innerWidth >= 1024) iframe.style.height = '800px';
                          if (window.innerWidth >= 1280) iframe.style.height = '900px';
                          if (window.innerWidth >= 1536) iframe.style.height = '1000px';
                        };
                        updateHeight();
                        window.addEventListener('resize', updateHeight);
                      }
                    }}
                  />
                </div>
                
                {/* Elegant Bottom Decoration */}
                <div className="flex justify-center mt-6 sm:mt-8 lg:mt-10 xl:mt-12">
                  <div className="w-20 sm:w-24 md:w-32 lg:w-40 xl:w-48 2xl:w-56 h-1 bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 rounded-full"></div>
                </div>
              </div>
            </AnimateOnScroll>
            
            <div className="text-center mt-8 sm:mt-10 lg:mt-12 xl:mt-14">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/50 shadow-sm">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-[10px] sm:text-xs">✓</span>
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-600">ביקורות אמיתיות ומאומתות</span>
              </div>
            </div>
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
                <Heart className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-sky-300 animate-glow" aria-hidden="true" />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 gradient-text px-2">
                רוצים להיות הלקוחות המרוצים הבאים שלנו?
              </h2>
              <p className="mb-6 sm:mb-8 max-w-2xl mx-auto text-blue-100 leading-relaxed text-sm sm:text-base md:text-lg px-4">
                צרו איתנו קשר כדי לדון בפרטי האירוע שלכם ולראות איך אנחנו יכולים לעזור.
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

export default Testimonials;