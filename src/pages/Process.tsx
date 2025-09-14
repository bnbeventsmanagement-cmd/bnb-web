import { useEffect, useState } from 'react';
import { CoffeeIcon, ClipboardListIcon, UsersIcon, PhoneCallIcon, LayoutGridIcon, CalendarIcon, Play } from 'lucide-react';
import Seo from '../components/Seo';
import { organization, localBusiness, serviceRSVP, breadcrumbsFor } from '../seo/structuredData';
import AnimateOnScroll from '../components/AnimateOnScroll';
// Import process data
import processData from '../cms/data/process.json';

const Process = () => {
  const [data, setData] = useState(processData);
  
  // In a real implementation, this would fetch data from Sanity CMS
  useEffect(() => {
    // Simulate data fetching
    setData(processData);
  }, []);

  // Map icon names to components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Coffee':
        return <CoffeeIcon className="h-10 w-10 text-sky-400 animate-float" />;
      case 'ClipboardList':
        return <ClipboardListIcon className="h-10 w-10 text-sky-400 animate-float" />;
      case 'Users':
        return <UsersIcon className="h-10 w-10 text-sky-400 animate-float" />;
      case 'PhoneCall':
        return <PhoneCallIcon className="h-10 w-10 text-sky-400 animate-float" />;
      case 'LayoutGrid':
        return <LayoutGridIcon className="h-10 w-10 text-sky-400 animate-float" />;
      case 'Calendar':
        return <CalendarIcon className="h-10 w-10 text-sky-400 animate-float" />;
      default:
        return <CoffeeIcon className="h-10 w-10 text-sky-400 animate-float" />;
    }
  };

  return (
    <>
      <Seo 
        title="תהליך העבודה | B&B אישורי הגעה"
        description="גלו איך אנחנו עובדים: משלב הייעוץ הראשוני ועד ליום האירוע - תהליך מקצועי ומסודר לשירותי אישורי הגעה וניהול אירועים."
        keywords={[
          "תהליך עבודה",
          "שירותי אישורי הגעה",
          "ניהול אירועים",
          "תהליך מקצועי",
          "ייעוץ אירועים"
        ]}
        canonical="/process"
        image="/og-default.jpg"
        structuredData={[
          organization,
          localBusiness,
          serviceRSVP,
          breadcrumbsFor([
            { name: "בית", url: "/" },
            { name: "תהליך העבודה", url: "/process" }
          ])
        ]}
      />
      
      {/* Header */}
      <section className="bg-white text-[#1e293b] py-20 md:py-32 relative overflow-hidden border-b border-slate-100">
        <div className="container-custom text-center relative z-10">
          <AnimateOnScroll>
            <div className="flex justify-center mb-6 animate-fadeInUp">
              <Play className="h-12 w-12 text-sky-700" />
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

      {/* Process Steps */}
      <section className="py-20 bg-gradient-to-b from-slate-900 via-blue-900/30 to-slate-900 relative overflow-hidden">
        {/* Background Effects with Dynamic Movement */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large floating shapes */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-cyan-200/20 to-blue-300/20 rounded-full animate-float-slow transition-all duration-1000 hover:scale-125"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-purple-200/20 to-pink-300/20 rounded-lg animate-float-delayed transition-all duration-1000 hover:rotate-45"></div>
          <div className="absolute bottom-32 left-20 w-24 h-24 bg-gradient-to-r from-green-200/20 to-emerald-300/20 rounded-full animate-float-slow transition-all duration-1000 hover:scale-110"></div>
          <div className="absolute bottom-20 right-10 w-18 h-18 bg-gradient-to-r from-yellow-200/20 to-orange-300/20 rounded-lg animate-float-delayed transition-all duration-1000 hover:-rotate-12"></div>
          
          {/* Additional floating elements */}
          <div className="absolute top-60 left-1/3 w-12 h-12 bg-gradient-to-r from-indigo-200/15 to-purple-300/15 rounded-full animate-float-slow delay-1000"></div>
          <div className="absolute bottom-60 right-1/3 w-14 h-14 bg-gradient-to-r from-teal-200/15 to-cyan-300/15 rounded-lg animate-float-delayed delay-500"></div>
          
          {/* Sparkling particles with enhanced effects */}
          <div className="absolute top-32 left-1/4 w-3 h-3 bg-cyan-400/40 rounded-full animate-white-sparkle transition-all duration-500 hover:scale-150"></div>
          <div className="absolute top-60 right-1/3 w-2 h-2 bg-purple-400/40 rounded-full animate-diamond-sparkle transition-all duration-500 hover:scale-200"></div>
          <div className="absolute bottom-40 left-1/3 w-2.5 h-2.5 bg-green-400/40 rounded-full animate-floating-sparkle transition-all duration-500 hover:scale-150"></div>
          <div className="absolute bottom-60 right-1/4 w-1.5 h-1.5 bg-yellow-400/40 rounded-full animate-white-sparkle transition-all duration-500 hover:scale-200"></div>
          
          {/* Additional sparkles */}
          <div className="absolute top-80 left-1/5 w-2 h-2 bg-blue-400/30 rounded-full animate-white-sparkle delay-2000"></div>
          <div className="absolute bottom-80 right-1/5 w-1.5 h-1.5 bg-pink-400/30 rounded-full animate-diamond-sparkle delay-1500"></div>
          
          {/* Energy waves */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-300/10 to-transparent animate-pulse"></div>
          <div className="absolute top-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-300/10 to-transparent animate-pulse delay-1000"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto flex flex-col gap-8 sm:gap-12">
            {data.steps.map((step, index) => (
              <AnimateOnScroll key={index}>
                <div 
                  className={`glass-card p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 mb-4 sm:mb-16 last:mb-0 group transition-all duration-700 ease-out transform hover:scale-105 hover:shadow-2xl relative overflow-hidden ${
                    index % 2 === 0 
                      ? 'animate-slideInLeft hover:translate-x-2' 
                      : 'animate-slideInRight hover:-translate-x-2'
                  }`}
                  style={{
                    animationDelay: `${index * 200}ms`,
                    transitionDelay: `${index * 100}ms`
                  }}
                >
                  {/* Background gradient that changes with scroll and index */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                    style={{
                      background: `linear-gradient(135deg, 
                        rgba(14, 165, 233, ${0.1 + index * 0.05}) 0%, 
                        rgba(59, 130, 246, ${0.15 + index * 0.05}) 50%, 
                        rgba(147, 51, 234, ${0.1 + index * 0.05}) 100%)`
                    }}
                  ></div>
                  
                  {/* Animated border that grows with index */}
                  <div 
                    className="absolute inset-0 rounded-2xl sm:rounded-3xl md:rounded-4xl border-2 border-transparent bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 bg-clip-border opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                    style={{
                      borderWidth: `${2 + index}px`
                    }}
                  ></div>
                  
                  {/* Progress indicator */}
                  <div 
                    className="absolute top-0 left-0 h-1 bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 transition-all duration-1000"
                    style={{
                      width: `${(index + 1) * 20}%`
                    }}
                  ></div>
                  
                  {/* Icon Section - Centered on mobile */}
                  <div className="relative flex-shrink-0 z-10">
                    <div className="bg-gradient-to-br from-sky-500/20 to-blue-600/20 p-4 sm:p-6 rounded-2xl group-hover:animate-glow transition-all duration-500 hover:scale-110 hover:rotate-3">
                      {getIcon(step.icon)}
                    </div>
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-sm sm:text-base animate-pulse shadow-lg group-hover:scale-125 transition-transform duration-300">
                      {step.number}
                    </div>
                  </div>
                  
                  {/* Content Section - Centered on mobile */}
                  <div className="flex-1 text-center sm:text-right z-10">
                    <h3 className="text-xl sm:text-3xl font-bold text-white group-hover:text-sky-300 transition-all duration-500 mb-3 sm:mb-4 group-hover:scale-105">
                      {step.title}
                    </h3>
                    <p className="text-blue-100 leading-relaxed text-sm sm:text-lg group-hover:text-white transition-colors duration-500">{step.description}</p>
                  </div>
                  
                  {/* Floating particles inside card - more with each step */}
                  {Array.from({ length: 4 + index }).map((_, i) => (
                    <div 
                      key={i}
                      className="absolute rounded-full animate-white-sparkle"
                      style={{
                        width: `${1.5 + i * 0.5}px`,
                        height: `${1.5 + i * 0.5}px`,
                        top: `${10 + i * 15}%`,
                        left: `${10 + i * 20}%`,
                        background: `rgba(${i % 4 === 0 ? '34, 211, 238' : i % 4 === 1 ? '168, 85, 247' : i % 4 === 2 ? '34, 197, 94' : '251, 191, 36'}, 0.6)`,
                        animationDelay: `${i * 200}ms`
                      }}
                    ></div>
                  ))}
                  
                  {/* Energy rings around the card */}
                  <div 
                    className="absolute inset-0 rounded-2xl sm:rounded-3xl md:rounded-4xl border border-sky-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                    style={{
                      borderWidth: `${1 + index}px`
                    }}
                  ></div>
                  
                  {/* Glow effect that intensifies with index */}
                  <div 
                    className="absolute inset-0 rounded-2xl sm:rounded-3xl md:rounded-4xl bg-gradient-to-r from-sky-400/10 via-blue-500/15 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-sm"
                    style={{
                      filter: `blur(${2 + index}px)`
                    }}
                  ></div>
                </div>
                
                {/* Beautiful Arrow Connector */}
                {index < data.steps.length - 1 && (
                  <div className="flex justify-center mt-6 sm:mt-10 mb-6 sm:mb-10">
                    <div className="relative group">
                      {/* Main arrow line */}
                      <div className="relative">
                        {/* Arrow shaft with gradient */}
                        <div className="w-1 h-16 sm:h-24 bg-gradient-to-b from-sky-400 via-blue-500 to-blue-600 rounded-full shadow-lg transition-all duration-500 group-hover:scale-y-110 group-hover:shadow-2xl"></div>
                        
                        {/* Animated shimmer effect on arrow */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/60 to-transparent animate-white-shimmer rounded-full"></div>
                        
                        {/* Glowing effect around arrow */}
                        <div className="absolute inset-0 bg-gradient-to-b from-sky-300/40 via-blue-400/50 to-blue-500/40 rounded-full animate-pulse blur-sm"></div>
                        
                        {/* Energy particles flowing down the arrow */}
                        <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full animate-bounce shadow-lg"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full animate-bounce delay-200 shadow-lg"></div>
                        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full animate-bounce delay-400 shadow-lg"></div>
                      </div>
                      
                      {/* Beautiful arrow head pointing down */}
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                        <div className="relative">
                          {/* Main arrow head */}
                          <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-t-[16px] border-l-transparent border-r-transparent border-t-blue-500 shadow-lg transition-all duration-300 group-hover:scale-125 group-hover:border-t-blue-400"></div>
                          
                          {/* Glowing arrow head effect */}
                          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[12px] border-l-transparent border-r-transparent border-t-white/80 animate-pulse"></div>
                          
                          {/* Sparkle effects around arrow head */}
                          <div className="absolute -top-3 -left-2 w-1 h-1 bg-cyan-300 rounded-full animate-ping"></div>
                          <div className="absolute -top-3 -right-2 w-1 h-1 bg-blue-300 rounded-full animate-ping delay-300"></div>
                          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-0.5 bg-white rounded-full animate-ping delay-150"></div>
                        </div>
                      </div>
                      
                      {/* Floating decorative elements around arrow */}
                      <div className="absolute -top-6 -left-3 w-2 h-2 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full animate-float-slow opacity-70 group-hover:opacity-100"></div>
                      <div className="absolute -top-4 -right-4 w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-float-delayed opacity-70 group-hover:opacity-100"></div>
                      <div className="absolute -bottom-8 -left-2 w-1.5 h-1.5 bg-gradient-to-r from-purple-300 to-pink-400 rounded-full animate-float-slow delay-1000 opacity-70 group-hover:opacity-100"></div>
                      <div className="absolute -bottom-6 -right-3 w-2 h-2 bg-gradient-to-r from-pink-300 to-rose-400 rounded-full animate-float-delayed delay-500 opacity-70 group-hover:opacity-100"></div>
                      
                      {/* Energy rings around the arrow */}
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 border border-sky-400/30 rounded-full animate-ping"></div>
                      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 border border-blue-400/20 rounded-full animate-ping delay-1000"></div>
                    </div>
                  </div>
                )}
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 blue-gradient-bg text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="container-custom text-center relative z-10">
          <AnimateOnScroll>
            <div className="glass-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">מוכנים להתחיל?</h2>
              <p className="mb-8 text-blue-100 leading-relaxed text-lg">
                צרו איתנו קשר כדי לדון בפרטי האירוע שלכם ולהתחיל את התהליך.
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

export default Process;