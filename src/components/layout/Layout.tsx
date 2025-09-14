import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import AccessibilityWidget from '../AccessibilityWidget';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
  children
}) => {
  // Set RTL direction and Hebrew language for the document
  useEffect(() => {
    document.documentElement.setAttribute('dir', 'rtl');
    document.documentElement.setAttribute('lang', 'he');
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Skip Link for accessibility */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:bg-white focus:text-black focus:p-2 focus:rounded focus:shadow-lg focus:z-50 focus:outline-none"
      >
        דלג לתוכן
      </a>
      
      <Header />
      <main id="main" className="flex-grow pt-20">{children}</main>
      <Footer />
      <AccessibilityWidget />
    </div>
  );
};

export default Layout;