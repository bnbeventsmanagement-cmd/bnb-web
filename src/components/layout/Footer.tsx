import { Link } from 'react-router-dom';
import { InstagramIcon, PhoneIcon, MessageCircle, Heart } from 'lucide-react';
import { scrollToTop } from '../../utils/scrollToTop';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-pattern opacity-5"></div>
      <div className="container-custom py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and info */}
          <div className="flex flex-col items-start">
            <Link to="/" onClick={scrollToTop} className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-sky-400/20 to-blue-600/20 rounded-lg blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <img 
                  src="https://bnb-rsvp.com/wp-content/uploads/2024/09/307995278_223217960041190_7001359417631391334_n-1.jpg" 
                  alt="B&B אישורי הגעה לאירועים - לוגו החברה" 
                  className="relative h-16 w-auto bg-white/10 backdrop-blur-sm p-2 rounded-lg mb-6 group-hover:scale-105 transition-transform duration-300" 
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </Link>
            <p className="text-blue-100 leading-relaxed">
              B&B RSVP - שירותי אישורי הגעה וניהול אורחים לאירועים
            </p>
            <div className="flex items-center gap-2 mt-4 text-sky-300">
              <Heart className="h-4 w-4 animate-pulse" aria-hidden="true" />
              <span className="text-sm">עושים אירועים מיוחדים</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">ניווט מהיר</h3>
            <ul className="space-y-3">
              {[
                { name: 'בית', href: '/' },
                { name: 'תהליך העבודה', href: '/process' },
                { name: 'החבילות שלנו', href: '/packages' },
                { name: 'אודות', href: '/about' },
                { name: 'יצירת קשר', href: '/contact' },
                { name: 'הספקים שלנו', href: '/vendors' },
                { name: 'המלצות', href: '/testimonials' }
              ].map(item => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    onClick={scrollToTop}
                    className="text-blue-100 hover:text-sky-300 transition-colors duration-300 hover:translate-x-2 transform inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">צרו קשר</h3>
            <div className="space-y-4">
                      <a
                        href={`${import.meta.env.VITE_WHATSAPP_URL || "https://wa.me/972504884840"}/?text=היי הגעתי דרך האתר אפשר פרטים ?`}
                className="flex items-center gap-3 text-blue-100 hover:text-sky-300 transition-colors duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              >
                <div className="p-2 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-lg group-hover:animate-glow">
                  <MessageCircle className="h-5 w-5 text-green-400" />
                </div>
                <span>WhatsApp</span>
              </a>
                      <a
                        href={`tel:${import.meta.env.VITE_CONTACT_PHONE || "+0504884840"}`}
                className="flex items-center gap-3 text-blue-100 hover:text-sky-300 transition-colors duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              >
                <div className="p-2 bg-gradient-to-br from-sky-500/20 to-blue-600/20 rounded-lg group-hover:animate-glow">
                  <PhoneIcon className="h-5 w-5" />
                </div>
                <span>טלפון</span>
              </a>
                      <a
                        href={import.meta.env.VITE_INSTAGRAM_URL || "https://www.instagram.com/bnbevents__?igsh=MWFrY2JxdTF3ZjRyYw%3D%3D&utm_source=qr"}
                className="flex items-center gap-3 text-blue-100 hover:text-sky-300 transition-colors duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="p-2 bg-gradient-to-br from-sky-500/20 to-blue-600/20 rounded-lg group-hover:animate-glow">
                  <InstagramIcon className="h-5 w-5" />
                </div>
                <span>אינסטגרם</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-sky-500/20 mt-12 pt-8 text-center">
          <p className="text-blue-100">
            © {new Date().getFullYear()} B&B RSVP. כל הזכויות שמורות.
          </p>
          <div className="flex items-center justify-center gap-4 mt-2 text-sky-300">
            <Heart className="h-4 w-4 animate-pulse" />
            <span className="text-sm">נבנה עם אהבה</span>
            <Link 
              to="/accessibility" 
              onClick={scrollToTop}
              className="text-sm hover:text-sky-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              הצהרת נגישות
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;