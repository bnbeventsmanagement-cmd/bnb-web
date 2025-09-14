import { useEffect, useState } from 'react';
import { PhoneIcon, MailIcon, MessageCircle, Send } from 'lucide-react';
import Seo from '../components/Seo';
import { organization, localBusiness, breadcrumbsFor } from '../seo/structuredData';
import ContactForm from '../components/ContactForm';
import AnimateOnScroll from '../components/AnimateOnScroll';
// Import contact data
import contactData from '../cms/data/contact.json';

const Contact = () => {
  const [data, setData] = useState(contactData);
  
  // In a real implementation, this would fetch data from Sanity CMS
  useEffect(() => {
    // Simulate data fetching
    setData(contactData);
  }, []);

  return (
    <>
      <Seo 
        title="צור קשר | B&B אישורי הגעה"
        description="דברו איתנו לכל שאלה: ייעוץ, הצעת מחיר והתאמה אישית לשירותי אישורי הגעה, הושבה ודיילות."
        keywords={[
          "צור קשר",
          "ייעוץ אירועים",
          "הצעת מחיר",
          "שירותי אישורי הגעה",
          "ניהול אירועים"
        ]}
        canonical="/contact"
        image="/og-default.jpg"
        structuredData={[
          organization,
          localBusiness,
          breadcrumbsFor([
            { name: "בית", url: "/" },
            { name: "צור קשר", url: "/contact" }
          ])
        ]}
      />
      
      {/* Header */}
      <section className="bg-white text-[#1e293b] py-20 md:py-32 relative overflow-hidden border-b border-slate-100">
        <div className="container-custom text-center relative z-10">
          <AnimateOnScroll>
            <div className="flex justify-center mb-6 animate-fadeInUp">
              <MessageCircle className="h-12 w-12 text-green-600" />
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

      {/* Contact Content */}
      <section className="py-20 bg-gradient-to-b from-slate-900 via-blue-900/30 to-slate-900 relative">
        <div className="absolute inset-0 bg-blue-pattern opacity-5"></div>
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Contact Info */}
            <AnimateOnScroll>
              <div className="md:col-span-1">
                <div className="glass-card p-8 h-full">
                  <div className="flex items-center gap-3 mb-8">
                    <Send className="h-8 w-8 text-sky-400 animate-float" />
                    <h2 className="text-3xl font-bold text-white">
                      דרכי התקשרות
                    </h2>
                  </div>
                  <div className="space-y-8">
                    <div className="flex items-start gap-4 group">
                      <div className="p-3 bg-gradient-to-br from-sky-500/20 to-blue-600/20 rounded-xl group-hover:animate-glow">
                        <MessageCircle className="h-6 w-6 text-green-400" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2 text-white group-hover:text-sky-300 transition-colors">WhatsApp</h3>
                        <a 
                          href={`https://wa.me/${data.whatsappNumber}/?text=היי הגעתי דרך האתר אפשר פרטים ?`} 
                          className="text-sky-300 hover:text-white transition-colors" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          שלחו הודעה
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 group">
                      <div className="p-3 bg-gradient-to-br from-sky-500/20 to-blue-600/20 rounded-xl group-hover:animate-glow">
                        <PhoneIcon className="h-6 w-6 text-sky-400" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2 text-white group-hover:text-sky-300 transition-colors">טלפון</h3>
                        <a 
                          href={`tel:+${data.phoneNumber}`} 
                          className="text-sky-300 hover:text-white transition-colors"
                        >
                          {data.phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 group">
                      <div className="p-3 bg-gradient-to-br from-sky-500/20 to-blue-600/20 rounded-xl group-hover:animate-glow">
                        <MailIcon className="h-6 w-6 text-sky-400" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2 text-white group-hover:text-sky-300 transition-colors">דוא"ל</h3>
                        <a 
                          href={`mailto:${data.email}`} 
                          className="text-sky-300 hover:text-white transition-colors"
                        >
                          {data.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Contact Form */}
            <AnimateOnScroll>
              <div className="md:col-span-2">
                <div className="glass-card p-8">
                  <div className="flex items-center gap-3 mb-8">
                    <Send className="h-8 w-8 text-sky-400 animate-float" />
                    <h2 className="text-3xl font-bold text-white">
                      השאירו פרטים ונחזור אליכם
                    </h2>
                  </div>
                  <ContactForm formFields={data.formFields} />
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;