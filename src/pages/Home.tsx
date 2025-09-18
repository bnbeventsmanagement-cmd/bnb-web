import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UsersIcon, LayoutGridIcon, ArrowLeft, Sparkles, CheckCircle, Mail, Gift, MapPin, MessageSquare, Bell, Users, Star as StarIcon, CreditCard, FileText, Download, Smartphone, DollarSign, Briefcase, Baby, Star as StarIcon2, Heart, ArrowRight } from 'lucide-react';
import Seo from '../components/Seo';
import AnimateOnScroll from '../components/AnimateOnScroll';
import { scrollToTop } from '../utils/scrollToTop';
// Import home data
import homeData from '../cms/data/home.json';

// Counter component for animated numbers
const AnimatedCounter = ({ target, duration = 2000 }: { target: number; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * target);
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [target, duration]);

  return <span>{count.toLocaleString()}</span>;
};

const Home = () => {
  const [data, setData] = useState(homeData);
  
  // In a real implementation, this would fetch data from Sanity CMS
  useEffect(() => {
    // Simulate data fetching
    setData(homeData);
  }, []);

  // Map icon names to components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'CheckCircle':
        return <CheckCircle className="h-8 w-8 text-sky-400 animate-pulse" />;
      case 'Users':
        return <UsersIcon className="h-8 w-8 text-sky-400 animate-float" />;
      case 'LayoutGrid':
        return <LayoutGridIcon className="h-8 w-8 text-sky-400 animate-float" />;
      case 'Mail':
        return <Mail className="h-8 w-8 text-sky-400 animate-float" />;
      default:
        return <div className="h-8 w-8 text-sky-400 animate-pulse" />;
    }
  };

  return (
    <>
      <Seo
        title={data.seo?.title}
        description={data.seo?.description}
        keywords={data.seo?.keywords}
        image={data.seo?.ogImage}
        url="https://www.bnb-rsvp.com/"
        type="website"
        structuredData={{
          type: 'faq',
          data: { faqs: [
            {
              question: "עפ\"י מה המחיר נקבע?",
              answer: "המחיר נקבע לפי מספר הרשומות (כמות מספרי הטלפון) שיש לך וצריך לאשר ולבדוק איתם הגעה."
            },
            {
              question: "האם יש אפשרות להעלות למערכת אנשים שאני יודע שמגיעים?",
              answer: "כמובן! כל עוד לא מתקשרים או שולחים להם הודעות, אפשר להעלות אותם למערכת."
            }
          ]}
        }}
      />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-white">
        {/* Animated White Sparkly Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-indigo-50">
          {/* Floating geometric shapes - colorful but subtle */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-sky-200/30 to-blue-300/30 rounded-full animate-float-slow"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-purple-200/30 to-pink-300/30 rounded-full animate-float-delayed"></div>
          <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-gradient-to-r from-cyan-200/30 to-teal-300/30 rounded-full animate-float-slow"></div>
          <div className="absolute bottom-20 right-1/3 w-12 h-12 bg-gradient-to-r from-yellow-200/30 to-orange-300/30 rounded-full animate-float-delayed"></div>
          
          {/* Additional geometric shapes */}
          <div className="absolute top-1/3 left-1/5 w-8 h-8 bg-gradient-to-r from-emerald-200/40 to-green-300/40 transform rotate-45 animate-float-slow"></div>
          <div className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-gradient-to-r from-rose-200/40 to-pink-300/40 transform rotate-12 animate-float-delayed"></div>
          <div className="absolute top-1/2 right-1/6 w-10 h-10 bg-gradient-to-r from-violet-200/40 to-purple-300/40 rounded-full animate-float-slow"></div>
          
          {/* Sparkling particles - white and colorful */}
          <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-white/80 rounded-full animate-ping shadow-lg"></div>
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-sky-300/90 rounded-full animate-ping delay-1000 shadow-md"></div>
          <div className="absolute bottom-1/3 left-1/5 w-2.5 h-2.5 bg-blue-300/80 rounded-full animate-ping delay-2000 shadow-md"></div>
          <div className="absolute bottom-1/4 right-1/5 w-1.5 h-1.5 bg-cyan-300/90 rounded-full animate-ping delay-3000 shadow-md"></div>
          <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-purple-300/90 rounded-full animate-ping delay-4000 shadow-sm"></div>
          <div className="absolute bottom-1/2 right-1/2 w-2 h-2 bg-pink-300/80 rounded-full animate-ping delay-5000 shadow-md"></div>
          
          {/* Additional sparkles with different animations */}
          <div className="absolute top-1/6 right-1/3 w-1.5 h-1.5 bg-white/90 rounded-full animate-white-sparkle shadow-lg"></div>
          <div className="absolute bottom-1/6 left-1/3 w-2 h-2 bg-sky-400/80 rounded-full animate-diamond-sparkle shadow-md"></div>
          <div className="absolute top-2/3 left-1/6 w-1 h-1 bg-blue-400/90 rounded-full animate-floating-sparkle shadow-sm"></div>
          <div className="absolute bottom-2/3 right-1/6 w-1.5 h-1.5 bg-cyan-400/80 rounded-full animate-white-sparkle delay-1000 shadow-md"></div>
          <div className="absolute top-1/5 left-2/3 w-1 h-1 bg-purple-400/90 rounded-full animate-diamond-sparkle delay-2000 shadow-sm"></div>
          <div className="absolute bottom-1/5 right-2/3 w-2 h-2 bg-pink-400/80 rounded-full animate-floating-sparkle delay-3000 shadow-md"></div>
          
          {/* Subtle gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/20"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1 animate-fadeInUp text-gray-800 text-center md:text-right">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4 animate-slideInRight group">
                <Sparkles className="h-6 w-6 text-sky-600 animate-pulse group-hover:animate-spin group-hover:text-purple-500 transition-all duration-500" aria-hidden="true" />
                <span className="text-sky-700 font-medium hover:text-purple-600 hover:scale-110 hover:font-bold transition-all duration-300 cursor-pointer">שירותי אירועים מקצועיים</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fadeInUp delay-100 group">
                <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent animate-gradient-x hover:scale-110 hover:text-purple-600 transition-all duration-500 cursor-pointer inline-block">אישורי</span>
                <span className="text-gray-800 hover:text-sky-600 hover:scale-105 transition-all duration-300 cursor-pointer inline-block mx-2">הגעה והושבה</span>
                <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-sky-600 bg-clip-text text-transparent animate-gradient-x hover:scale-110 hover:text-pink-600 transition-all duration-500 cursor-pointer inline-block">לאירועים</span>
              </h1>
              <p className="text-lg sm:text-xl mb-8 opacity-90 text-gray-700 leading-relaxed animate-fadeInUp delay-200 hover:text-sky-600 hover:scale-105 hover:font-semibold transition-all duration-500 cursor-pointer">שירות מקצועי לניהול הזמנות, אישורי הגעה וסידור הושבה לאירועים</p>
              <div className="flex justify-center md:justify-start">
              <Link 
                to="/contact" 
                onClick={scrollToTop}
                  className="btn btn-primary inline-flex items-center gap-3 animate-bounceIn glow hover:animate-glow animate-slideInLeft delay-300 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {data.ctaButton}
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </div>
            </div>
            <div className="order-1 md:order-2 animate-scaleIn delay-200 flex justify-center">
              <div className="relative animate-fadeInUp delay-300 max-w-md md:max-w-lg lg:max-w-xl">
                
                {/* Main logo with effects */}
                <div className="relative animate-fadeInUp delay-400 group">
                  {/* Glowing background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500 group-hover:scale-110"></div>
                  
                  {/* Rotating ring around logo */}
                  <div className="absolute inset-0 border-2 border-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full animate-spin-slow group-hover:animate-spin"></div>
                  
                  {/* Logo with hover effects */}
                  <img 
                    src="./images/logo-bnb.svg" 
                    alt="B&B אישורי הגעה לאירועים - לוגו החברה" 
                    className="relative w-full h-auto animate-spin-slow group-hover:scale-110 group-hover:animate-spin transition-all duration-500 ease-out filter group-hover:brightness-110 group-hover:contrast-110 group-hover:drop-shadow-2xl" 
                    loading="eager"
                    decoding="async"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = './logo-bb.svg';
                    }}
                  />
                  
                  {/* Floating particles around logo */}
                  <div className="absolute -top-4 -left-4 w-2 h-2 bg-blue-400/60 rounded-full animate-bounce delay-500 group-hover:animate-ping"></div>
                  <div className="absolute -top-2 -right-6 w-1.5 h-1.5 bg-purple-400/60 rounded-full animate-bounce delay-1000 group-hover:animate-ping"></div>
                  <div className="absolute -bottom-4 -left-2 w-2 h-2 bg-pink-400/60 rounded-full animate-bounce delay-1500 group-hover:animate-ping"></div>
                  <div className="absolute -bottom-2 -right-4 w-1.5 h-1.5 bg-cyan-400/60 rounded-full animate-bounce delay-2000 group-hover:animate-ping"></div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Counter Section */}
      <section className="py-16 bg-gradient-to-r from-sky-600 via-blue-700 to-indigo-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 via-blue-600/20 to-indigo-700/20"></div>
        <div className="container-custom relative z-10">
          <AnimateOnScroll>
            <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8 lg:gap-12 items-center">
              {/* Left Counter - Calls */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 sm:gap-2 md:gap-3 mb-2 sm:mb-3">
                  <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white animate-pulse" aria-hidden="true" />
                  <h3 className="text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white">
                    <AnimatedCounter target={2000000} duration={3500} />
                  </h3>
                </div>
                <p className="text-xs sm:text-sm md:text-lg lg:text-xl text-blue-100 font-medium text-center">
                  שיחות שבוצעו
                </p>
              </div>

              {/* Center Counter - Events */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 sm:gap-2 md:gap-4 mb-2 sm:mb-3 md:mb-4">
                  <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 md:h-8 md:w-8 text-white animate-pulse" aria-hidden="true" />
                  <h2 className="text-sm sm:text-lg md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
                    <AnimatedCounter target={98976} duration={3000} />
                  </h2>
                  <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 md:h-8 md:w-8 text-white animate-pulse" aria-hidden="true" />
                </div>
                <p className="text-xs sm:text-sm md:text-xl lg:text-2xl text-blue-100 font-medium">
                  אירועים כבר הצטרפו אלינו!
                </p>
                <div className="mt-2 sm:mt-4 md:mt-6 flex justify-center">
                  <div className="w-12 sm:w-16 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-white/60 to-white/20 rounded-full"></div>
                </div>
              </div>

              {/* Right Counter - Messages */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 sm:gap-2 md:gap-3 mb-2 sm:mb-3">
                  <h3 className="text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white">
                    <AnimatedCounter target={12000000} duration={4000} />
                  </h3>
                  <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white animate-pulse" aria-hidden="true" />
                </div>
                <p className="text-xs sm:text-sm md:text-lg lg:text-xl text-blue-100 font-medium text-center">
                  הודעות שנשלחו
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 via-blue-900/50 to-slate-900 relative">
        <div className="absolute inset-0 bg-blue-pattern opacity-5"></div>
        <div className="container-custom relative z-10">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-6 gradient-text hover:scale-110 hover:text-purple-600 transition-all duration-500 cursor-pointer">
                השירותים שלנו
              </h2>
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-sky-400 to-blue-600 mx-auto rounded-full"></div>
            </div>
          </AnimateOnScroll>
          {/* Responsive grid: 2 on mobile, 4 on desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {data.features.map((feature, index) => (
              <AnimateOnScroll key={index}>
                <div className="glass-card p-4 sm:p-6 lg:p-8 hover:animate-float group min-h-[240px] lg:min-h-[280px] flex flex-col justify-between">
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <div className="p-2 sm:p-3 lg:p-4 bg-gradient-to-br from-sky-500/20 to-blue-600/20 rounded-2xl group-hover:animate-glow">
                      {getIcon(feature.icon)}
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3 lg:mb-4 text-white group-hover:text-sky-300 group-hover:scale-110 group-hover:font-extrabold transition-all duration-300 text-center cursor-pointer">
                    {feature.title}
                  </h3>
                  <p className="text-blue-100 leading-relaxed text-xs sm:text-sm lg:text-base text-center">{feature.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Animated White Sparkly Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-indigo-50">
          {/* Floating geometric shapes - colorful but subtle */}
          <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-yellow-200/30 to-orange-300/30 rounded-full animate-float-slow"></div>
          <div className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-r from-pink-200/30 to-purple-300/30 rounded-full animate-float-delayed"></div>
          <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-r from-green-200/30 to-emerald-300/30 rounded-full animate-float-slow"></div>
          <div className="absolute bottom-20 right-1/3 w-10 h-10 bg-gradient-to-r from-blue-200/30 to-cyan-300/30 rounded-full animate-float-delayed"></div>
          
          {/* Additional geometric shapes */}
          <div className="absolute top-1/3 left-1/5 w-6 h-6 bg-gradient-to-r from-purple-200/40 to-pink-300/40 transform rotate-45 animate-float-slow"></div>
          <div className="absolute bottom-1/3 right-1/4 w-5 h-5 bg-gradient-to-r from-orange-200/40 to-yellow-300/40 transform rotate-12 animate-float-delayed"></div>
          <div className="absolute top-1/2 right-1/6 w-8 h-8 bg-gradient-to-r from-cyan-200/40 to-blue-300/40 rounded-full animate-float-slow"></div>
          
          {/* Sparkling particles - white and colorful */}
          <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-white/80 rounded-full animate-ping shadow-lg"></div>
          <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-yellow-300/90 rounded-full animate-ping delay-1000 shadow-md"></div>
          <div className="absolute bottom-1/3 left-1/5 w-2 h-2 bg-pink-300/80 rounded-full animate-ping delay-2000 shadow-md"></div>
          <div className="absolute bottom-1/4 right-1/5 w-1 h-1 bg-green-300/90 rounded-full animate-ping delay-3000 shadow-md"></div>
          <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-purple-300/90 rounded-full animate-ping delay-4000 shadow-sm"></div>
          <div className="absolute bottom-1/2 right-1/2 w-1 h-1 bg-blue-300/80 rounded-full animate-ping delay-5000 shadow-md"></div>
          
          {/* Additional sparkles with different animations */}
          <div className="absolute top-1/6 right-1/3 w-1 h-1 bg-white/90 rounded-full animate-white-sparkle shadow-lg"></div>
          <div className="absolute bottom-1/6 left-1/3 w-1.5 h-1.5 bg-orange-400/80 rounded-full animate-diamond-sparkle shadow-md"></div>
          <div className="absolute top-2/3 left-1/6 w-1 h-1 bg-pink-400/90 rounded-full animate-floating-sparkle shadow-sm"></div>
          <div className="absolute bottom-2/3 right-1/6 w-1 h-1 bg-green-400/80 rounded-full animate-white-sparkle delay-1000 shadow-md"></div>
          <div className="absolute top-1/5 left-2/3 w-1 h-1 bg-purple-400/90 rounded-full animate-diamond-sparkle delay-2000 shadow-sm"></div>
          <div className="absolute bottom-1/5 right-2/3 w-1.5 h-1.5 bg-blue-400/80 rounded-full animate-floating-sparkle delay-3000 shadow-md"></div>
          
          {/* Subtle gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/20"></div>
        </div>
        <div className="container-custom relative z-10">
          <AnimateOnScroll>
            <div className="text-center mb-8 sm:mb-16">
              <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-800 hover:text-sky-600 hover:scale-110 hover:font-extrabold transition-all duration-500 cursor-pointer">
                שירותים נוספים
              </h2>
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-yellow-400 to-pink-500 mx-auto rounded-full"></div>
            </div>
          </AnimateOnScroll>
          
          <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 justify-items-center max-w-4xl mx-auto">
            {[
              { name: "מתנות באשראי", icon: Gift, color: "from-yellow-400 to-orange-500" },
              { name: "ניווט לאולם", icon: MapPin, color: "from-blue-400 to-cyan-500" },
              { name: "הודעות סמס & וואצפ", icon: MessageSquare, color: "from-green-400 to-emerald-500" },
              { name: "הודעת תזכורת ביום האירוע", icon: Bell, color: "from-purple-400 to-pink-500" },
              { name: "מערכת הושבה מתקדמת", icon: Users, color: "from-indigo-400 to-blue-500" },
              { name: "המלצות על ספקים", icon: StarIcon, color: "from-pink-400 to-rose-500" }
            ].map((service, index) => (
              <AnimateOnScroll key={index}>
                {/* Fixed Size Card - Always Same Dimensions */}
                <div className="relative bg-gradient-to-br from-gray-800/95 via-gray-900/90 to-black/95 backdrop-blur-xl rounded-lg sm:rounded-xl md:rounded-3xl p-2 sm:p-5 md:p-6 lg:p-8 hover:animate-float group border border-gray-600/30 hover:border-gray-500/50 transition-all duration-500 shadow-lg sm:shadow-xl md:shadow-2xl hover:shadow-3xl overflow-hidden w-[90px] h-[90px] sm:w-[180px] sm:h-[180px] md:w-[210px] md:h-[210px] lg:w-[240px] lg:h-[240px] xl:w-[270px] xl:h-[270px] flex flex-col justify-center items-center">
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-700/20 via-transparent to-gray-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content - Fixed Layout */}
                  <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                    {/* Icon - Fixed Size */}
                    <div className={`relative p-1 sm:p-3 md:p-4 lg:p-5 bg-gradient-to-br ${service.color} rounded-lg sm:rounded-xl md:rounded-2xl group-hover:animate-glow shadow-md sm:shadow-lg md:shadow-xl group-hover:shadow-2xl transition-all duration-300 mb-1 sm:mb-3 md:mb-4`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-lg sm:rounded-xl md:rounded-2xl"></div>
                      <service.icon className="relative h-3 w-3 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 text-white animate-pulse group-hover:scale-110 transition-transform duration-300" />
                      {/* Sparkle effect */}
                      <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-0.5 h-0.5 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-white/80 rounded-full animate-ping"></div>
                    </div>
                    
                    {/* Title - Fixed Size Container */}
                    <div className="w-full h-[24px] sm:h-[54px] md:h-[60px] lg:h-[66px] flex items-center justify-center px-1">
                      <h3 className="text-[8px] sm:text-base md:text-lg lg:text-xl font-bold text-white group-hover:text-yellow-300 group-hover:scale-110 group-hover:font-extrabold transition-all duration-300 leading-tight text-center cursor-pointer">
                        {service.name}
                      </h3>
                    </div>
                    
                    {/* Decorative line - Fixed Size */}
                    <div className="w-4 sm:w-10 md:w-12 lg:w-16 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent group-hover:via-yellow-400 transition-colors duration-300 mt-1"></div>
                  </div>
                  
                  {/* Corner decorations */}
                  <div className="absolute top-1 right-1 sm:top-2 sm:right-2 md:top-4 md:right-4 w-0.5 h-0.5 sm:w-1 sm:h-1 md:w-2 md:h-2 bg-gradient-to-br from-yellow-400/60 to-orange-500/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-1 left-1 sm:bottom-2 sm:left-2 md:bottom-4 md:left-4 w-0.5 h-0.5 sm:w-1 sm:h-1 md:w-1.5 md:h-1.5 bg-gradient-to-br from-pink-400/60 to-purple-500/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* What Are You Celebrating Section */}
      <section className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Background Effects */}
        <div className="absolute inset-0">
          {/* Floating geometric shapes */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-cyan-200/20 to-blue-300/20 rounded-full animate-float-slow"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-purple-200/20 to-pink-300/20 rounded-lg animate-float-delayed"></div>
          <div className="absolute bottom-32 left-20 w-24 h-24 bg-gradient-to-r from-green-200/20 to-emerald-300/20 rounded-full animate-float-slow"></div>
          <div className="absolute bottom-20 right-10 w-18 h-18 bg-gradient-to-r from-yellow-200/20 to-orange-300/20 rounded-lg animate-float-delayed"></div>
          
          {/* Sparkling particles */}
          <div className="absolute top-32 left-1/4 w-3 h-3 bg-cyan-400/40 rounded-full animate-white-sparkle"></div>
          <div className="absolute top-60 right-1/3 w-2 h-2 bg-purple-400/40 rounded-full animate-diamond-sparkle"></div>
          <div className="absolute bottom-40 left-1/3 w-2.5 h-2.5 bg-green-400/40 rounded-full animate-floating-sparkle"></div>
          <div className="absolute bottom-60 right-1/4 w-1.5 h-1.5 bg-yellow-400/40 rounded-full animate-white-sparkle"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-6 whitespace-nowrap hover:scale-110 transition-all duration-500 cursor-pointer">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x hover:from-pink-400 hover:via-purple-400 hover:to-cyan-400 transition-all duration-500">אז מה אתם חוגגים?</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                ב-B&B ההזמנה הדיגיטלית מותאמת בדיוק לסוג האירוע שלכם
              </p>
              <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mt-6"></div>
            </div>
          </AnimateOnScroll>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 md:gap-6 lg:gap-8">
            {[
              { 
                title: "אירועים עסקיים", 
                description: "מערכת מתקדמת ודינמית לניהול אירוע עסקי מקטן ועד גדול", 
                icon: Briefcase, 
                color: "from-blue-500 to-cyan-500",
                buttonText: "להרשמה בחינם",
                image: "./images/logo-bnb.svg"
              },
              { 
                title: "בריתות", 
                description: "הבייבי שלכם נולד? גלו כמה פשוט לארגן אירוע אפילו בטווח קצר מאוד", 
                icon: Baby, 
                color: "from-pink-500 to-rose-500",
                buttonText: "למידע נוסף",
                image: "./images/logo-bnb.svg"
              },
              { 
                title: "בר/ת מצווה", 
                description: "גיל המצוות הגיע וזה הזמן לתכנן נכון ביחד עם ההורים את האירוע בקלות", 
                icon: StarIcon2, 
                color: "from-purple-500 to-indigo-500",
                buttonText: "למידע נוסף",
                image: "./images/logo-bnb.svg"
              },
              { 
                title: "חתונות", 
                description: "התארסתם? מזל טוב! אנחנו כאן כדי לעזור לכם לנהל את החתונה בקלות", 
                icon: Heart, 
                color: "from-red-500 to-pink-500",
                buttonText: "למידע נוסף",
                image: "./images/logo-bnb.svg"
              }
            ].map((event, index) => (
              <AnimateOnScroll key={index}>
                <div className="relative bg-gradient-to-br from-gray-800/90 via-gray-900/95 to-black/90 backdrop-blur-xl rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-5 lg:p-6 hover:animate-float group border border-gray-600/30 hover:border-gray-500/50 transition-all duration-500 shadow-lg sm:shadow-xl md:shadow-2xl hover:shadow-3xl overflow-hidden w-full h-[200px] sm:h-[220px] md:h-[280px] lg:h-[320px] flex flex-col">
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-700/20 via-transparent to-gray-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Image - Optimized for 2 columns on mobile */}
                  <div className="relative mb-2 sm:mb-2 md:mb-3 rounded-lg sm:rounded-xl overflow-hidden flex-shrink-0">
                    <img 
                      src={event.image} 
                      alt={`${event.title} - דוגמת אירוע של B&B אישורי הגעה`}
                      className="w-full h-14 sm:h-16 md:h-24 lg:h-28 object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 text-center flex-1 flex flex-col justify-between">
                    <div className="space-y-1 sm:space-y-1 md:space-y-2 px-1 sm:px-0">
                      {/* Title */}
                      <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors duration-300 leading-tight">
                        {event.title}
                      </h3>
                      
                      {/* Description - visible on all screens */}
                      <p className="text-xs sm:text-xs md:text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                    
                    {/* Button */}
                    <div className="mt-1 sm:mt-2 md:mt-3 px-1 sm:px-0">
                      <Link 
                        to="/process" 
                        onClick={scrollToTop}
                        className={`inline-flex items-center gap-1 sm:gap-1 md:gap-2 px-2 py-1 sm:px-2 sm:py-1 md:px-3 md:py-1.5 lg:px-4 lg:py-2 bg-gradient-to-r ${event.color} text-white font-semibold rounded-lg sm:rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 group-hover:animate-glow text-xs sm:text-xs md:text-sm lg:text-base w-full sm:w-auto justify-center`}
                        aria-label={`לפרטים על ${event.title}`}
                      >
                        <span>לפרטים</span>
                        <ArrowRight className="h-2 w-2 sm:h-2 sm:w-2 md:h-3 md:w-3 lg:h-4 lg:w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                  
                  {/* Corner decorations */}
                  <div className="absolute top-2 right-2 w-1 h-1 bg-gradient-to-br from-cyan-400/60 to-blue-500/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-gradient-to-br from-purple-400/60 to-pink-500/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          
          {/* Bottom CTA Button */}
          <div className="text-center mt-12">
            <AnimateOnScroll>
              <Link 
                to="/packages" 
                onClick={scrollToTop}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold text-lg rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-red-400 hover:border-red-300 group"
              >
                לכל החבילות והמחירים
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* B&B Gift Section */}
      <section className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
        {/* Background Effects */}
        <div className="absolute inset-0">
          {/* Floating geometric shapes */}
          <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-purple-200/40 to-pink-300/40 rounded-full animate-float-slow"></div>
          <div className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-r from-blue-200/40 to-cyan-300/40 rounded-lg animate-float-delayed"></div>
          <div className="absolute bottom-32 left-20 w-20 h-20 bg-gradient-to-r from-green-200/40 to-emerald-300/40 rounded-full animate-float-slow"></div>
          <div className="absolute bottom-20 right-10 w-14 h-14 bg-gradient-to-r from-yellow-200/40 to-orange-300/40 rounded-lg animate-float-delayed"></div>
          
          {/* Sparkling particles */}
          <div className="absolute top-32 left-1/4 w-2 h-2 bg-purple-400/60 rounded-full animate-white-sparkle"></div>
          <div className="absolute top-60 right-1/3 w-1.5 h-1.5 bg-blue-400/60 rounded-full animate-diamond-sparkle"></div>
          <div className="absolute bottom-40 left-1/3 w-2.5 h-2.5 bg-green-400/60 rounded-full animate-floating-sparkle"></div>
          <div className="absolute bottom-60 right-1/4 w-1 h-1 bg-yellow-400/60 rounded-full animate-white-sparkle"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6 hover:scale-110 transition-all duration-500 cursor-pointer">
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-gradient-x hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 transition-all duration-500">הענקת מתנה</span>
                <span className="text-gray-800 hover:text-sky-600 hover:scale-105 transition-all duration-300"> באמצעות </span>
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x hover:from-blue-600 hover:via-pink-600 hover:to-purple-600 transition-all duration-500">B&B</span>
              </h2>
              <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto rounded-full"></div>
            </div>
          </AnimateOnScroll>
          
          <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 justify-items-center max-w-5xl mx-auto">
            {[
              { 
                title: "אימות 3DS לתשלומים", 
                description: "הגנה ואימות לכרטיסי האשראי של האורחים שלכם", 
                icon: DollarSign, 
                color: "from-green-400 to-emerald-500" 
              },
              { 
                title: "שיטת תשלום", 
                description: "ניתן לבחור להעניק מתנה בכרטיסי אשראי שונים", 
                icon: CreditCard, 
                color: "from-blue-400 to-cyan-500" 
              },
              { 
                title: "עמוד מתנה", 
                description: "עמוד הענקת מתנה באשראי לאורחי האירוע עם כתיבת ברכה", 
                icon: Gift, 
                color: "from-purple-400 to-pink-500" 
              },
              { 
                title: "העברת הכספים", 
                description: "העברת כספי המתנות תתבצע עד 5 ימי עסקים החל מיומיים לאחר מועד האירוע", 
                icon: FileText, 
                color: "from-indigo-400 to-blue-500" 
              },
              { 
                title: "סיכום המתנות", 
                description: "סיכום כספי המתנות והברכות עם אפשרות הורדה לקובץ אקסל", 
                icon: Download, 
                color: "from-orange-400 to-red-500" 
              },
              { 
                title: "תזמון אוטומטי", 
                description: "שליחה אוטומטית בהודעות SMS לכל האורחים ביום האירוע", 
                icon: Smartphone, 
                color: "from-teal-400 to-green-500" 
              }
            ].map((feature, index) => (
              <AnimateOnScroll key={index}>
                {/* Fixed Size Card - Always Same Dimensions */}
                <div className="relative bg-gradient-to-br from-gray-800/95 via-gray-900/90 to-black/95 backdrop-blur-xl rounded-lg sm:rounded-xl md:rounded-3xl p-2 sm:p-5 md:p-6 lg:p-8 hover:animate-float group border border-gray-600/30 hover:border-gray-500/50 transition-all duration-500 shadow-lg sm:shadow-xl md:shadow-2xl hover:shadow-3xl overflow-hidden w-[90px] h-[90px] sm:w-[180px] sm:h-[180px] md:w-[210px] md:h-[210px] lg:w-[240px] lg:h-[240px] xl:w-[270px] xl:h-[270px] flex flex-col justify-center items-center">
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-700/20 via-transparent to-gray-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content - Fixed Layout */}
                  <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center justify-center text-center w-full h-full space-y-1.5 sm:space-y-2 md:space-y-3">
                      {/* Icon - Fixed Size */}
                      <div className={`relative p-1 sm:p-3 md:p-4 lg:p-5 bg-gradient-to-br ${feature.color} rounded-lg sm:rounded-xl md:rounded-2xl group-hover:animate-glow shadow-md sm:shadow-lg md:shadow-xl group-hover:shadow-2xl transition-all duration-300 mb-1 sm:mb-3 md:mb-4`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-lg sm:rounded-xl md:rounded-2xl"></div>
                        <feature.icon className="relative h-3 w-3 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-8 lg:w-8 text-white animate-pulse group-hover:scale-110 transition-transform duration-300" />
                        {/* Sparkle effect */}
                        <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-0.5 h-0.5 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-white/80 rounded-full animate-ping"></div>
                      </div>
                      
                      {/* Title - Fixed Size Container */}
                      <div className="w-full h-[20px] sm:h-[48px] md:h-[54px] lg:h-[60px] flex items-center justify-center px-1">
                        <h3 className="text-[7px] sm:text-base md:text-lg lg:text-xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300 leading-tight text-center">
                          {feature.title}
                        </h3>
                      </div>
                      
                      {/* Description - Hidden on mobile, shown on larger screens */}
                      <div className="w-full h-[16px] sm:h-[36px] md:h-[42px] lg:h-[48px] flex items-center justify-center px-1 hidden sm:flex">
                        <p className="text-[6px] sm:text-sm md:text-base lg:text-lg text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-tight text-center">
                          {feature.description}
                        </p>
                      </div>
                      
                      {/* Decorative line - Fixed Size */}
                      <div className="w-4 sm:w-10 md:w-12 lg:w-16 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent group-hover:via-yellow-400 transition-colors duration-300 mt-1"></div>
                    </div>
                  </div>
                  
                  {/* Corner decorations */}
                  <div className="absolute top-1 right-1 sm:top-2 sm:right-2 md:top-4 md:right-4 w-0.5 h-0.5 sm:w-1 sm:h-1 md:w-2 md:h-2 bg-gradient-to-br from-yellow-400/60 to-orange-500/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-1 left-1 sm:bottom-2 sm:left-2 md:bottom-4 md:left-4 w-0.5 h-0.5 sm:w-1 sm:h-1 md:w-1.5 md:h-1.5 bg-gradient-to-br from-pink-400/60 to-purple-500/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Live Reviews Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-green-200/30 to-emerald-300/30 rounded-full animate-float-slow"></div>
          <div className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-r from-blue-200/30 to-cyan-300/30 rounded-lg animate-float-delayed"></div>
          <div className="absolute bottom-32 left-20 w-20 h-20 bg-gradient-to-r from-purple-200/30 to-pink-300/30 rounded-full animate-float-slow"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6 hover:scale-110 transition-all duration-500 cursor-pointer">
                <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient-x hover:from-purple-600 hover:via-green-600 hover:to-blue-600 transition-all duration-500">חגגו ונשארו כדי לספר...</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                ביקורות אמיתיות מלקוחותינו המרוצים
              </p>
              <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full mt-6"></div>
            </div>
          </AnimateOnScroll>
          
          {/* Live Reviews Widget from Mit4Mit - Full Screen Design */}
          <div className="w-full">
            {/* Elegant Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-100/80 via-blue-100/80 to-purple-100/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">💬</span>
                </div>
                <div className="text-left">
                  <div className="text-lg font-bold text-gray-800">מדברים עלינו באתר</div>
                  <a 
                    href="https://www.mit4mit.co.il" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 font-medium text-sm transition-colors duration-300 hover:underline"
                  >
                    מתחתנים למען מתחתנים
                  </a>
                </div>
              </div>
            </div>
            
            {/* Full Width Reviews Widget */}
            <div className="relative">
              {/* Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-green-50/30 to-blue-50/30 rounded-3xl blur-sm"></div>
              
              {/* Widget Container */}
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
                {/* Decorative Top Border */}
                <div className="h-2 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400"></div>
                
                {/* Widget Content */}
                <div className="p-6 sm:p-8">
                  <iframe 
                    src="https://www.mit4mit.co.il/widgets/reviews_iframe/small/100816" 
                    width="100%" 
                    height="800" 
                    frameBorder="0"
                    className="w-full rounded-2xl shadow-inner border border-gray-100"
                    title="ביקורות מיט פור מיט"
                    style={{ minHeight: '600px' }}
                  />
                </div>
                
                {/* Elegant Bottom Decoration */}
                <div className="h-1 bg-gradient-to-r from-purple-400 via-blue-400 to-green-400"></div>
              </div>
            </div>
            
            {/* Subtle Footer */}
            <div className="text-center mt-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/50 shadow-sm">
                <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-sm font-medium text-gray-600">ביקורות אמיתיות ומאומתות</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 via-blue-900/30 to-slate-900 relative">
        <div className="absolute inset-0 bg-blue-pattern opacity-5"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <AnimateOnScroll>
              <div className="flex justify-center mb-6 animate-fadeInUp">
                <Heart className="h-12 w-12 text-sky-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text hover:scale-110 hover:text-purple-600 transition-all duration-500 cursor-pointer">
                שאלות נפוצות
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                כל מה שאתם צריכים לדעת על השירותים שלנו
              </p>
            </AnimateOnScroll>
          </div>

          <div className="max-w-3xl mx-auto">
            <AnimateOnScroll>
              <div className="glass-card p-6 sm:p-8 mb-16">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg font-bold">?</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white hover:text-sky-300 hover:scale-105 hover:font-extrabold transition-all duration-300 cursor-pointer">
                    עפ"י מה המחיר נקבע?
                  </h3>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-lg font-bold">✓</span>
                  </div>
                  <p className="text-blue-100 leading-relaxed text-sm sm:text-base">
                    המחיר נקבע לפי מספר הרשומות (כמות מספרי הטלפון) שיש לך וצריך לאשר ולבדוק איתם הגעה.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            <div className="mb-8"></div>

            <AnimateOnScroll>
              <div className="glass-card p-6 sm:p-8 mb-16">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg font-bold">?</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white hover:text-sky-300 hover:scale-105 hover:font-extrabold transition-all duration-300 cursor-pointer">
                    האם יש אפשרות להעלות למערכת אנשים שאני יודע שמגיעים?
                  </h3>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-lg font-bold">✓</span>
                  </div>
                  <p className="text-blue-100 leading-relaxed text-sm sm:text-base">
                    כמובן! כל עוד לא מתקשרים או שולחים להם הודעות, אפשר להעלות אותם למערכת.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            <div className="text-center">
              <Link 
                to="/faq" 
                onClick={scrollToTop}
                className="btn btn-primary text-lg px-8 py-4 animate-bounceIn glow hover:animate-glow"
              >
                צפו בכל השאלות והתשובות
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 blue-gradient-bg text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-600/20 via-blue-600/20 to-indigo-600/20 animate-pulse"></div>
        <div className="container-custom text-center relative z-10">
          <AnimateOnScroll>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 hover:scale-110 hover:text-sky-300 transition-all duration-500 cursor-pointer">מוכנים להתחיל?</h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90 text-blue-100 leading-relaxed">
              צרו איתנו קשר עוד היום כדי לקבל הצעת מחיר מותאמת אישית לאירוע שלכם.
            </p>
            <Link 
              to="/contact" 
              onClick={scrollToTop}
              className="btn btn-primary text-lg px-8 py-4 animate-bounceIn glow hover:animate-glow"
            >
              צרו קשר עכשיו
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

    </>
  );
};

export default Home;