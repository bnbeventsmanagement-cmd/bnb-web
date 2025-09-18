import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon, LogIn } from 'lucide-react';
import { scrollToTop } from '../../utils/scrollToTop';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'בית', href: '/' },
    { name: 'תהליך העבודה', href: '/process' },
    { name: 'החבילות שלנו', href: '/packages' },
    { name: 'אודות', href: '/about' },
    { name: 'שאלות ותשובות', href: '/faq' },
    { name: 'יצירת קשר', href: '/contact' },
    { name: 'הספקים שלנו', href: '/vendors' },
    { name: 'המלצות', href: '/testimonials' }
  ];


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = () => {
    scrollToTop();
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 overflow-x-hidden ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-lg shadow-2xl border-b border-sky-500/20' 
        : 'bg-transparent'
    }`}>
      <div className="container-custom w-full">
        <div className="flex items-center justify-between py-4 w-full">
          {/* Login Button - Left side (Desktop & Mobile) */}
          <div className="flex items-center">
            <a 
              href={import.meta.env.VITE_LOGIN_URL || "https://eventsmanagment.com/login"} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 whitespace-nowrap ${
                window.innerWidth < 768 ? 'text-sm' : 'text-base'
              }`}
            >
              <LogIn className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              <span className="hidden sm:inline">התחברות למערכת</span>
              <span className="sm:hidden">התחברות</span>
            </a>
          </div>

          {/* Desktop Navigation - Centered with Equal Spacing */}
          <nav className="hidden md:flex items-center justify-center flex-1 px-4" aria-label="ניווט ראשי">
            <div className="flex items-center justify-center space-x-6 space-x-reverse">
              {navigation.map(item => (
                <Link 
                  key={item.name} 
                  to={item.href} 
                  onClick={handleNavigation}
                  className={`text-base font-medium transition-all duration-300 relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 whitespace-nowrap px-2 py-1 ${
                    location.pathname === item.href 
                      ? 'text-sky-400 font-bold' 
                      : 'text-white hover:text-sky-300'
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-blue-600 transition-all duration-300 group-hover:w-full ${
                    location.pathname === item.href ? 'w-full' : ''
                  }`}></span>
                </Link>
              ))}
            </div>
          </nav>


          {/* Mobile menu button */}
          <div className="md:hidden order-first">
            <button 
              type="button" 
              onClick={toggleMenu} 
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-white hover:text-sky-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 transition-colors duration-300 hover:bg-white/10"
            >
              <span className="sr-only">פתח תפריט</span>
              {isMenuOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
              <span className="text-base font-medium">תפריט</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-4 pb-6 bg-slate-900/95 backdrop-blur-lg shadow-2xl border-t border-sky-500/20">
            
            {/* Main Navigation Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {navigation.map(item => (
                <Link 
                  key={item.name} 
                  to={item.href} 
                  onClick={handleNavigation}
                  className={`flex items-center justify-center px-4 py-4 rounded-lg text-base font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 ${
                    location.pathname === item.href 
                      ? 'text-sky-400 bg-sky-500/10 font-bold border border-sky-500/20' 
                      : 'text-white hover:text-sky-300 hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
              
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;