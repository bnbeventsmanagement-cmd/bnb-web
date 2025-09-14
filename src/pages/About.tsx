import { useEffect, useState } from 'react';
import { AwardIcon, ShieldIcon, HeartIcon, TargetIcon, Star } from 'lucide-react';
// import Seo from '../components/Seo';
// import { organization, localBusiness, breadcrumbsFor } from '../seo/structuredData';
import AnimateOnScroll from '../components/AnimateOnScroll';
// Import about data
import aboutData from '../cms/data/about.json';

const About = () => {
  const [data, setData] = useState(aboutData);
  
  // In a real implementation, this would fetch data from Sanity CMS
  useEffect(() => {
    // Simulate data fetching
    setData(aboutData);
  }, []);

  // Map icon names to components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <AwardIcon className="h-8 w-8 text-sky-400 animate-float" />;
      case 'Shield':
        return <ShieldIcon className="h-8 w-8 text-sky-400 animate-float" />;
      case 'Heart':
        return <HeartIcon className="h-8 w-8 text-sky-400 animate-float" />;
      case 'Target':
        return <TargetIcon className="h-8 w-8 text-sky-400 animate-float" />;
      default:
        return <AwardIcon className="h-8 w-8 text-sky-400 animate-float" />;
    }
  };

  return (
    <>
      {/* SEO temporarily disabled for build */}
      
      {/* Header */}
      <section className="bg-white text-[#1e293b] py-20 md:py-32 relative overflow-hidden border-b border-slate-100">
        <div className="container-custom text-center relative z-10">
          <AnimateOnScroll>
            <div className="flex justify-center mb-6 animate-fadeInUp">
              <Star className="h-12 w-12 text-sky-700" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fadeInUp delay-100">
              <span className="bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] bg-clip-text text-transparent">{data.title.split(' ')[0]}</span>
              <span className="text-[#111]"> {data.title.split(' ').slice(1).join(' ')} </span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-sky-400 to-blue-600 mx-auto rounded-full animate-slideInLeft delay-200"></div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-gradient-to-b from-slate-900 via-blue-900/30 to-slate-900 relative">
        <div className="absolute inset-0 bg-blue-pattern opacity-5"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimateOnScroll>
              <div className="prose prose-xl max-w-none text-blue-100 leading-relaxed">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl space-y-6 sm:space-y-8">
                  <p className="animate-fadeInUp delay-100">
                    <span className="text-sky-300 font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">B&B אישורי הגעה</span> הוקמה מתוך <span className="text-white font-semibold">חזון</span> להפוך את חוויית האירוע ל<span className="text-sky-300 font-semibold">חכמה</span>, <span className="text-blue-300 font-semibold">מסודרת</span> ו<span className="text-cyan-300 font-semibold">נטולת דאגות</span>.
                  </p>
                  <p className="animate-fadeInUp delay-200">
                    אנו משלבים בין <span className="text-sky-300 font-semibold">מערכת מתקדמת</span> לניהול אישורי הגעה וסידורי הושבה, לבין <span className="text-white font-semibold">שירות לקוחות אישי וזמין</span> שמלווה את הלקוח לכל אורך הדרך.
                  </p>
                  <p className="animate-fadeInUp delay-300">
                    הצוות שלנו כולל <span className="text-blue-300 font-semibold">דיילות מנוסות ומקצועיות</span> שמעניקות מענה מלא באירוע עצמו, יחד עם <span className="text-cyan-300 font-semibold">טכנולוגיה חדשנית</span> שמבטיחה דיוק ושליטה מלאה בכל שלב.
                  </p>
                  <p className="animate-fadeInUp delay-400">
                    השילוב בין <span className="text-sky-300 font-semibold">יחס אישי</span>, <span className="text-white font-semibold">מקצועיות בלתי מתפשרת</span> ו<span className="text-blue-300 font-semibold">כלים מתקדמים</span> הוא מה שמבדיל אותנו מחברות אחרות – ומאפשר לך ליהנות מהאירוע ב<span className="text-cyan-300 font-bold text-xl sm:text-2xl">ראש שקט</span>, בידיעה שהכול מנוהל בצורה מושלמת.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-slate-900 to-blue-800 relative">
        <div className="absolute inset-0 bg-gradient-radial from-sky-500/10 via-transparent to-transparent"></div>
        <div className="container-custom relative z-10">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-6 gradient-text">
                הערכים שלנו
              </h2>
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-sky-400 to-blue-600 mx-auto rounded-full"></div>
            </div>
          </AnimateOnScroll>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 overflow-x-auto">
            {data.values.map((value, index) => (
              <AnimateOnScroll key={index}>
                <div className="glass-card p-4 sm:p-8 text-center hover:animate-float group min-h-[220px] flex flex-col justify-between">
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <div className="p-2 sm:p-4 bg-gradient-to-br from-sky-500/20 to-blue-600/20 rounded-2xl group-hover:animate-glow">
                      {getIcon(value.icon)}
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4 text-white group-hover:text-sky-300 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-blue-100 leading-relaxed text-xs sm:text-base">{value.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

    </>
  );
};

export default About;