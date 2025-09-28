import { useEffect } from 'react';
import { scrollToTop } from '../../utils/scrollToTop';
import { Shield, Eye, Database, Lock, Users, Mail, Cookie } from 'lucide-react';
import Seo from '../../components/SEO';

const Privacy = () => {
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
        title="מדיניות פרטיות - B&B אישורי הגעה והושבה"
        description="מדיניות הפרטיות של B&B אישורי הגעה והושבה בע״מ. הגנה על פרטיות המשתמשים והמידע האישי."
        keywords={['מדיניות פרטיות', 'הגנת מידע', 'פרטיות', 'מידע אישי']}
        url="https://www.bnb-rsvp.com/legal/privacy"
        type="website"
        structuredData={{
          type: 'breadcrumb',
          breadcrumbs: [
            { name: 'בית', url: '/' },
            { name: 'מידע משפטי', url: '/legal' },
            { name: 'מדיניות פרטיות', url: '/legal/privacy' }
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
              <div className="p-4 bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-2xl">
                <Shield className="h-12 w-12 text-green-400" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 gradient-text">
              מדיניות פרטיות – B&B אישורי הגעה והושבה
            </h1>
            <div className="flex items-center justify-center gap-2 text-blue-200">
              <Eye className="h-5 w-5" />
              <span>עדכון אחרון: {lastUpdated}</span>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 space-y-8">
              
              {/* Introduction */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">הקדמה</h2>
                <div className="text-blue-100 leading-relaxed space-y-4">
                  <p>
                    ב-B&B אישורי הגעה והושבה בע״מ (להלן: "החברה" או "אנו"), אנו מחויבים להגן על הפרטיות 
                    והמידע האישי של לקוחותינו. מדיניות זו מסבירה כיצד אנו אוספים, משתמשים, מגנים ומשתפים 
                    את המידע האישי שלכם.
                  </p>
                  <p>
                    השימוש בשירותים שלנו מהווה הסכמה לאיסוף ועיבוד המידע האישי שלכם בהתאם למדיניות זו.
                  </p>
                </div>
              </section>

              {/* Data Collection */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Database className="h-6 w-6 text-blue-400" />
                  <h2 className="text-2xl font-bold text-white">אילו נתונים נאספים</h2>
                </div>
                <div className="text-blue-100 leading-relaxed space-y-4">
                  <h3 className="text-xl font-semibold text-sky-300">נתונים אישיים</h3>
                  <p>אנו אוספים את הנתונים הבאים:</p>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li><strong>פרטי המזמין:</strong> שם מלא, מספר טלפון, כתובת אימייל</li>
                    <li><strong>פרטי האירוע:</strong> תאריך האירוע, סוג האירוע, מיקום האירוע</li>
                    <li><strong>רשימת אורחים:</strong> שמות, מספרי טלפון, סטטוס הגעה</li>
                    <li><strong>העדפות הושבה:</strong> סידור שולחנות, העדפות מיוחדות</li>
                    <li><strong>תקשורת:</strong> הודעות, בקשות תמיכה, הערות</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-sky-300 mt-6">נתוני שימוש</h3>
                  <p>אנו אוספים גם נתונים טכניים:</p>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>כתובת IP, סוג דפדפן ומכשיר</li>
                    <li>דפים שנצפו באתר, זמן ביקור</li>
                    <li>מיקום גיאוגרפי כללי (אם ניתן)</li>
                    <li>נתוני אנליטיקס ואבטחה</li>
                  </ul>
                </div>
              </section>

              {/* Processing Purposes */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-6 w-6 text-purple-400" />
                  <h2 className="text-2xl font-bold text-white">מטרות עיבוד הנתונים</h2>
                </div>
                <div className="text-blue-100 leading-relaxed space-y-4">
                  <p>אנו מעבדים את הנתונים האישיים למטרות הבאות:</p>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li><strong>מתן שירותי RSVP:</strong> שליחת הזמנות, מעקב אחר תגובות, ניהול רשימות אורחים</li>
                    <li><strong>ניהול הושבה:</strong> תכנון וסידור שולחנות, התאמה אישית</li>
                    <li><strong>תמיכה ללקוח:</strong> מענה לשאלות, פתרון בעיות, ליווי מקצועי</li>
                    <li><strong>שיפור השירות:</strong> ניתוח דפוסי שימוש, פיתוח תכונות חדשות</li>
                    <li><strong>אבטחת מידע:</strong> הגנה מפני הונאות, זיהוי פעילות חשודה</li>
                    <li><strong>דיוור:</strong> שליחת עדכונים על השירות (רק בהסכמה מפורשת)</li>
                  </ul>
                </div>
              </section>

              {/* Legal Basis */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">בסיס חוקי לעיבוד</h2>
                <div className="text-blue-100 leading-relaxed space-y-4">
                  <p>עיבוד הנתונים מבוסס על:</p>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li><strong>הסכמה:</strong> הסכמה מפורשת לשימוש בנתונים למטרות מסוימות</li>
                    <li><strong>קיום חוזה:</strong> עיבוד נדרש לביצוע השירותים המבוקשים</li>
                    <li><strong>אינטרס לגיטימי:</strong> שיפור השירותים ואבטחת המערכת</li>
                    <li><strong>עמידה בחוק:</strong> מילוי חובות משפטיות ורגולטוריות</li>
                  </ul>
                </div>
              </section>

              {/* Third Party Sharing */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">שיתוף עם צדדים שלישיים</h2>
                <div className="text-blue-100 leading-relaxed space-y-4">
                  <p>אנו עשויים לשתף נתונים עם:</p>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li><strong>ספקי תשתית:</strong> שירותי אחסון, אבטחה ושרתים</li>
                    <li><strong>ספקי תקשורת:</strong> שליחת SMS, אימיילים והודעות</li>
                    <li><strong>ספקי אנליטיקס:</strong> ניתוח שימוש ושיפור השירות</li>
                    <li><strong>ספקי תשלום:</strong> עיבוד תשלומים (אם רלוונטי)</li>
                  </ul>
                  <p>
                    כל הספקים מחויבים בחוזים לשמירת סודיות ואבטחת הנתונים בהתאם לתקנים מחמירים.
                  </p>
                </div>
              </section>

              {/* Cookies */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Cookie className="h-6 w-6 text-yellow-400" />
                  <h2 className="text-2xl font-bold text-white">Cookies וטכנולוגיות דומות</h2>
                </div>
                <div className="text-blue-100 leading-relaxed space-y-4">
                  <p>אנו משתמשים ב-Cookies למטרות:</p>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li><strong>Cookies חיוניים:</strong> פעולת האתר הבסיסית</li>
                    <li><strong>Cookies אנליטיים:</strong> הבנת דפוסי שימוש ושיפור השירות</li>
                    <li><strong>Cookies פונקציונליים:</strong> שמירת העדפות והגדרות</li>
                    <li><strong>Cookies שיווקיים:</strong> הצגת תוכן מותאם (רק בהסכמה)</li>
                  </ul>
                  <p>
                    ניתן לבטל או להגביל Cookies בהגדרות הדפדפן. שימו לב כי ביטול Cookies חיוניים 
                    עלול לפגוע בפעולת האתר.
                  </p>
                </div>
              </section>

              {/* Data Security */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="h-6 w-6 text-red-400" />
                  <h2 className="text-2xl font-bold text-white">אבטחת מידע</h2>
                </div>
                <div className="text-blue-100 leading-relaxed space-y-4">
                  <p>אנו נוקטים אמצעי אבטחה מתקדמים:</p>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>הצפנה של נתונים רגישים (SSL/TLS)</li>
                    <li>גישה מוגבלת לנתונים רק לעובדים מורשים</li>
                    <li>גיבויים קבועים ומאובטחים</li>
                    <li>מעקב אחר גישה ופעילות חשודה</li>
                    <li>עדכונים קבועים של מערכות האבטחה</li>
                  </ul>
                  <p>
                    למרות המאמצים שלנו, אין אבטחה מוחלטת באינטרנט. אנו פועלים להגנה מקסימלית 
                    אך איננו יכולים להבטיח חסינות מוחלטת מפני פריצות או תקלות.
                  </p>
                </div>
              </section>

              {/* Data Retention */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">שמירה ומחיקה</h2>
                <div className="text-blue-100 leading-relaxed space-y-4">
                  <h3 className="text-xl font-semibold text-sky-300">מדיניות שמירה</h3>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li><strong>נתוני אירוע:</strong> נשמרים עד שנה לאחר האירוע</li>
                    <li><strong>נתוני לקוח:</strong> נשמרים כל עוד קיים קשר עסקי</li>
                    <li><strong>נתוני תקשורת:</strong> נשמרים למטרות תמיכה ושיפור השירות</li>
                    <li><strong>נתוני אנליטיקס:</strong> נשמרים בצורה אנונימית</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-sky-300 mt-6">זכות למחיקה</h3>
                  <p>
                    יש לכם זכות לבקש מחיקה או עדכון של הנתונים האישיים שלכם. 
                    פנו אלינו בכתובת <a href="mailto:bnbeventsmanagement@gmail.com" className="text-sky-300 hover:text-sky-200 underline">bnbeventsmanagement@gmail.com</a> 
                    ונטפל בבקשה בהתאם לחוק.
                  </p>
                </div>
              </section>

              {/* User Rights */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">זכויות משתמש</h2>
                <div className="text-blue-100 leading-relaxed space-y-4">
                  <p>לפי החוק הישראלי והתקנות האירופיות, יש לכם הזכויות הבאות:</p>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li><strong>זכות גישה:</strong> לקבל עותק של הנתונים האישיים שלכם</li>
                    <li><strong>זכות תיקון:</strong> לתקן נתונים לא מדויקים או לא מעודכנים</li>
                    <li><strong>זכות מחיקה:</strong> למחוק נתונים אישיים בנסיבות מסוימות</li>
                    <li><strong>זכות הגבלה:</strong> להגביל עיבוד נתונים בנסיבות מסוימות</li>
                    <li><strong>זכות התנגדות:</strong> להתנגד לעיבוד למטרות שיווקיות</li>
                    <li><strong>זכות ניידות:</strong> לקבל את הנתונים בפורמט מובנה</li>
                  </ul>
                  <p>
                    למימוש הזכויות, פנו אלינו בכתובת <a href="mailto:bnbeventsmanagement@gmail.com" className="text-sky-300 hover:text-sky-200 underline">bnbeventsmanagement@gmail.com</a> 
                    ונטפל בבקשה תוך 30 יום.
                  </p>
                </div>
              </section>



              {/* Policy Updates */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">עדכונים למדיניות</h2>
                <div className="text-blue-100 leading-relaxed">
                  <p>
                    אנו עשויים לעדכן את מדיניות הפרטיות מעת לעת. שינויים מהותיים 
                    יפורסמו באתר עם הודעה מתאימה. מומלץ לעיין במדיניות מעת לעת 
                    כדי להישאר מעודכנים.
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
                    לכל שאלה או בקשה בנוגע למדיניות הפרטיות או הנתונים האישיים שלכם:
                  </p>
                  <div className="mt-4 p-4 bg-slate-800/50 rounded-lg">
                    <p><strong>אימייל משפטי:</strong> <a href="mailto:bnbeventsmanagement@gmail.com" className="text-sky-300 hover:text-sky-200 underline">bnbeventsmanagement@gmail.com</a></p>
                    <p><strong>אתר החברה:</strong> <a href="https://www.bnb-rsvp.com" className="text-sky-300 hover:text-sky-200 underline">www.bnb-rsvp.com</a></p>
                    <p><strong>חברה:</strong> B&B אישורי הגעה והושבה בע״מ</p>
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

export default Privacy;
