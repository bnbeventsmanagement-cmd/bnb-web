import { Shield, CheckCircle, ExternalLink } from 'lucide-react';
// import Seo from '../components/Seo';
// import { organization, localBusiness, breadcrumbsFor } from '../seo/structuredData';
import AnimateOnScroll from '../components/AnimateOnScroll';

const Accessibility = () => {
  return (
    <>
      {/* SEO temporarily disabled for build */}
      
      {/* Header */}
      <section className="bg-white text-[#1e293b] py-12 sm:py-16 md:py-20 lg:py-32 relative overflow-hidden border-b border-slate-100">
        <div className="container-custom text-center relative z-10 px-4 sm:px-6">
          <AnimateOnScroll>
            <div className="flex justify-center mb-4 sm:mb-6 animate-fadeInUp">
              <Shield className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-sky-700" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 animate-fadeInUp delay-100 px-2">
              <span className="bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] bg-clip-text text-transparent">הצהרת</span>
              <span className="text-[#111]"> נגישות</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto text-[#222] leading-relaxed mb-6 sm:mb-8 animate-fadeInUp delay-200 px-4">
              מחויבותנו לנגישות דיגיטלית ולשוויון הזדמנויות לכל המשתמשים
            </p>
            <div className="w-20 sm:w-24 md:w-32 h-1 bg-gradient-to-r from-sky-400 to-blue-600 mx-auto rounded-full animate-slideInLeft delay-300"></div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-slate-900 via-blue-900/30 to-slate-900 relative">
        <div className="absolute inset-0 bg-blue-pattern opacity-5"></div>
        <div className="container-custom relative z-10 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction */}
            <AnimateOnScroll>
              <div className="glass-card p-6 sm:p-8 mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">מבוא</h2>
                <p className="text-blue-100 leading-relaxed text-sm sm:text-base md:text-lg mb-4">
                  B&B אישורי הגעה רואה חשיבות עליונה בהנגשת השירותים והמוצרים הדיגיטליים שלה לכלל הציבור, ובפרט לאנשים עם מוגבלות. אנו פועלים לאפשר חוויית שימוש נגישה, שוויונית ונוחה לכל המשתמשים, בהתאם להוראות תקן ישראלי 5568 המבוסס על תקן בינלאומי WCAG 2.0 ברמה AA.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Accessibility Features */}
            <AnimateOnScroll>
              <div className="glass-card p-6 sm:p-8 mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">התאמות שבוצעו באתר</h2>
                <p className="text-blue-100 leading-relaxed text-sm sm:text-base md:text-lg mb-6">
                  באתר בוצעו, בין היתר, ההתאמות הבאות:
                </p>
                <ul className="space-y-4 text-blue-100 text-sm sm:text-base md:text-lg">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                    <span>ניווט מלא באמצעות מקלדת ו"דלג לתוכן".</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                    <span>מבנה סמנטי תקין וכותרות היררכיות.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                    <span>פוקוס נראה לכל רכיב אינטראקטיבי.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                    <span>טקסט חלופי לתמונות ואייקונים; שימוש ב-ARIA לפי הצורך.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                    <span>טפסים נגישים הכוללים תוויות (Labels), הודעות שגיאה ברורות, ו-aria-live.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                    <span>ווידג׳ט נגישות המאפשר שליטה בגודל טקסט, ניגודיות, הדגשת קישורים, פונט קריא ומרווח שורות.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                    <span>תמיכה בהעדפת הפחתת אנימציה (prefers-reduced-motion).</span>
                  </li>
                </ul>
              </div>
            </AnimateOnScroll>

            {/* Standards Compliance */}
            <AnimateOnScroll>
              <div className="glass-card p-6 sm:p-8 mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">עמידה בתקנים</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-blue-100 text-sm sm:text-base">
                      תקן ישראלי ת״י 5568 (מבוסס על WCAG 2.0 AA)
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-blue-100 text-sm sm:text-base">
                      תמיכה בקוראי מסך (NVDA, JAWS, VoiceOver)
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-blue-100 text-sm sm:text-base">
                      תמיכה בניווט מקלדת מלא
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-blue-100 text-sm sm:text-base">
                      תמיכה בהגדרות נגישות של הדפדפן
                    </span>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Contact for Accessibility Issues */}
            <AnimateOnScroll>
              <div className="glass-card p-6 sm:p-8 mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">דיווח על בעיות נגישות</h2>
                <p className="text-blue-100 leading-relaxed text-sm sm:text-base md:text-lg mb-6">
                  אם נתקלתם בבעיה נגישות באתר שלנו, או שיש לכם הצעות לשיפור, 
                  אנא צרו איתנו קשר. נשמח לשמוע מכם ונעשה כל מאמץ לפתור את הבעיה.
                </p>
                <div className="space-y-4">
                  <a 
                    href={`${import.meta.env.VITE_WHATSAPP_URL || "https://wa.me/972504884840"}/?text=היי, נתקלתי בבעיה נגישות באתר`} 
                    className="flex items-center gap-3 text-sky-300 hover:text-sky-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>דיווח ב-WhatsApp</span>
                  </a>
                  <a 
                    href={`tel:${import.meta.env.VITE_CONTACT_PHONE || "+0504884840"}`} 
                    className="flex items-center gap-3 text-sky-300 hover:text-sky-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>התקשרות: {import.meta.env.VITE_CONTACT_PHONE || "050-488-4840"}</span>
                  </a>
                  <a 
                    href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL || "bnbeventsmanagement@gmail.com"}`} 
                    className="flex items-center gap-3 text-sky-300 hover:text-sky-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>{import.meta.env.VITE_CONTACT_EMAIL || "bnbeventsmanagement@gmail.com"}</span>
                  </a>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Updates */}
            <AnimateOnScroll>
              <div className="glass-card p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">עדכונים</h2>
                <p className="text-blue-100 leading-relaxed text-sm sm:text-base md:text-lg mb-4">
                  הצהרת נגישות זו עודכנה לאחרונה ב-{new Date().toLocaleDateString('he-IL')}.
                </p>
                <p className="text-blue-100 leading-relaxed text-sm sm:text-base md:text-lg">
                  אנו מתחייבים לעדכן הצהרה זו באופן קבוע ולהמשיך לשפר את הנגישות של האתר שלנו.
                </p>
              </div>
            </AnimateOnScroll>

          </div>
        </div>
      </section>
    </>
  );
};

export default Accessibility;
