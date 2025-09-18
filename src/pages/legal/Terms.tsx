import { useEffect } from 'react';
import { scrollToTop } from '../../utils/scrollToTop';
import { FileText, Shield, AlertTriangle, Mail, Scale } from 'lucide-react';
import Seo from '../../components/Seo';

const Terms = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  const lastUpdated = new Date().toLocaleDateString('he-IL', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  return (
    <>
      <Seo
        title="תנאי שימוש - B&B אישורי הגעה והושבה"
        description="תנאי השימוש של B&B אישורי הגעה והושבה בע״מ. מידע משפטי על השימוש באתר ובשירותים."
        keywords={['תנאי שימוש', 'מידע משפטי', 'תקנון', 'חוקים']}
        url="https://www.bnb-rsvp.com/legal/terms"
        type="website"
        structuredData={{
          type: 'breadcrumb',
          breadcrumbs: [
            { name: 'בית', url: '/' },
            { name: 'מידע משפטי', url: '/legal' },
            { name: 'תנאי שימוש', url: '/legal/terms' }
          ]
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-blue-pattern opacity-5"></div>
        
        <div className="container-custom py-16 relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-br from-sky-500/20 to-blue-600/20 rounded-2xl">
                <FileText className="h-12 w-12 text-sky-400" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 gradient-text">
              תקנון ותנאי שימוש באתר B&B אישורי הגעה והושבה
            </h1>
            <div className="flex items-center justify-center gap-2 text-blue-200">
              <Scale className="h-5 w-5" />
              <span>עדכון אחרון: {lastUpdated}</span>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 space-y-8">
              
              {/* Introduction */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="h-6 w-6 text-yellow-400" />
                  <h2 className="text-2xl font-bold text-white">הצהרת פתיחה</h2>
                </div>
                <div className="text-blue-100 leading-relaxed space-y-4">
                  <p>
                    ברוכים הבאים לאתר B&B אישורי הגעה והושבה בע״מ (להלן: "החברה" או "אנו"). 
                    האתר מיועד לספק מידע כללי בלבד אודות השירותים שלנו ואינו מהווה ייעוץ מקצועי או התחייבות משפטית.
                  </p>
                  <p>
                    השימוש באתר זה מהווה הסכמה מלאה לתקנון זה ולכל התנאים המפורטים בו. 
                    אם אינכם מסכימים לתנאים אלו, אנא הימנעו משימוש באתר.
                  </p>
                </div>
              </section>

              {/* Services and Usage */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-6 w-6 text-green-400" />
                  <h2 className="text-2xl font-bold text-white">שימוש ושירותים</h2>
                </div>
                <div className="text-blue-100 leading-relaxed space-y-4">
                  <h3 className="text-xl font-semibold text-sky-300">היקף השירות</h3>
                  <p>
                    אנו מספקים שירותי ניהול אירועים הכוללים:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>שירותי אישורי הגעה לאירועים וחתונות</li>
                    <li>ניהול הושבה מתקדם וסידור שולחנות</li>
                    <li>עיצוב והפצת הזמנות דיגיטליות</li>
                    <li>שירותי דיילות ומנהלי אירוע מקצועיים</li>
                    <li>מערכת ניהול אורחים ומעקב אחר תגובות</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-sky-300 mt-6">אחריות המשתמש</h3>
                  <p>
                    המשתמש נושא באחריות מלאה לכל התוכן שהוא מזין למערכת, כולל פרטי אורחים, 
                    מידע על האירוע וכל נתון אחר. המשתמש מתחייב לספק מידע מדויק ועדכני.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-sky-300 mt-6">איסורי שימוש</h3>
                  <p>
                    אסור להשתמש באתר או בשירותים שלנו למטרות:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>פעילות לא חוקית או בלתי מוסרית</li>
                    <li>הפצת תוכן מזיק, פוגעני או מפר זכויות יוצרים</li>
                    <li>ניסיון לפגוע באבטחת המערכת או לגרום נזק</li>
                    <li>שימוש מסחרי ללא רשות בכתב</li>
                  </ul>
                </div>
              </section>

              {/* Limitation of Liability */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="h-6 w-6 text-red-400" />
                  <h2 className="text-2xl font-bold text-white">הגבלת אחריות</h2>
                </div>
                <div className="text-blue-100 leading-relaxed space-y-4">
                  <p>
                    החברה אינה נושאת באחריות לנזקים עקיפים, תוצאתיים או מיוחדים העלולים להיגרם 
                    כתוצאה משימוש באתר או בשירותים שלנו.
                  </p>
                  <p>
                    אנו פועלים לספק שירות איכותי ומדויק, אך איננו יכולים להבטיח כי:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>המידע באתר יהיה מדויק לחלוטין או מעודכן בכל עת</li>
                    <li>השירותים יהיו זמינים ללא הפרעה או תקלות</li>
                    <li>לא יתרחשו שגיאות טכניות או בעיות תשתית</li>
                    <li>שירותי צד שלישי (כגון ספקי SMS או אימייל) יפעלו ללא תקלות</li>
                  </ul>
                  <p>
                    המשתמש נושא בסיכון המלא לשימוש באתר ובשירותים, ומוסכם כי השימוש נעשה על אחריותו הבלעדית.
                  </p>
                </div>
              </section>

              {/* External Links */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">קישורים חיצוניים</h2>
                <div className="text-blue-100 leading-relaxed">
                  <p>
                    האתר שלנו עשוי להכיל קישורים לאתרים חיצוניים. אנו איננו אחראים לתכנים, 
                    מדיניות הפרטיות או פרקטיקות של אתרים אלו. השימוש באתרים חיצוניים נעשה על אחריות המשתמש בלבד.
                  </p>
                </div>
              </section>

              {/* Intellectual Property */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">קניין רוחני</h2>
                <div className="text-blue-100 leading-relaxed space-y-4">
                  <p>
                    כל הזכויות בתכני האתר, לוגו, עיצוב, קוד מקור, מסדי נתונים וכל חומר אחר 
                    המופיע באתר שייכות לחברה או לבעלי זכויות צד שלישי.
                  </p>
                  <p>
                    השימוש המותר הינו שימוש הוגן אישי בלבד. אסור להעתיק, לשכפל, להפיץ, 
                    לשנות או להשתמש בחומרים אלו למטרות מסחריות ללא רשות בכתב מהחברה.
                  </p>
                  <p>
                    כל הפרה של זכויות קניין רוחני תהווה הפרה של החוק ותגרור פעולות משפטיות.
                  </p>
                </div>
              </section>

              {/* Privacy */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">פרטיות</h2>
                <div className="text-blue-100 leading-relaxed">
                  <p>
                    הגנת הפרטיות חשובה לנו מאוד. למידע מפורט על איסוף, עיבוד ושימוש בנתונים האישיים שלכם, 
                    אנא עיינו ב<a href="/legal/privacy" className="text-sky-300 hover:text-sky-200 underline">מדיניות הפרטיות</a> שלנו.
                  </p>
                </div>
              </section>

              {/* Changes to Terms */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">שינויים בתקנון</h2>
                <div className="text-blue-100 leading-relaxed">
                  <p>
                    אנו שומרים לעצמנו את הזכות לעדכן את התקנון מעת לעת. שינויים מהותיים יפורסמו באתר 
                    עם הודעה מתאימה. המשך השימוש באתר לאחר פרסום השינויים מהווה הסכמה לגרסה המעודכנת של התקנון.
                  </p>
                </div>
              </section>

              {/* Governing Law */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">תחולת דין ושיפוט</h2>
                <div className="text-blue-100 leading-relaxed">
                  <p>
                    התקנון הזה כפוף לדיני מדינת ישראל. כל מחלוקת או תביעה הנובעת מהשימוש באתר 
                    או מהתקנון הזה תהיה בסמכות השיפוט הבלעדית של בתי המשפט המוסמכים במחוז תל אביב.
                  </p>
                </div>
              </section>

              {/* Contact */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="h-6 w-6 text-blue-400" />
                  <h2 className="text-2xl font-bold text-white">יצירת קשר</h2>
                </div>
                <div className="text-blue-100 leading-relaxed">
                  <p>
                    לכל שאלה או הבהרה בנוגע לתקנון זה, אנא פנו אלינו:
                  </p>
                  <div className="mt-4 p-4 bg-slate-800/50 rounded-lg">
                    <p><strong>אימייל:</strong> <a href="mailto:bnbeventsmanagement@gmail.com" className="text-sky-300 hover:text-sky-200 underline">bnbeventsmanagement@gmail.com</a></p>
                    <p><strong>אתר:</strong> <a href="https://www.bnb-rsvp.com" className="text-sky-300 hover:text-sky-200 underline">www.bnb-rsvp.com</a></p>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
