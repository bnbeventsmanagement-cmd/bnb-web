// Structured Data helpers for SEO

export const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "B&B אישורי הגעה",
  "alternateName": "B&B RSVP",
  "url": "https://www.bnb-rsvp.com/",
  "logo": "./images/logo-bnb.svg",
  "contactPoint": [{
    "@type": "ContactPoint",
    "telephone": import.meta.env.VITE_CONTACT_PHONE || "+972-50-488-4840",
    "contactType": "customer service",
    "areaServed": "IL",
    "availableLanguage": ["he", "en"]
  }],
  "sameAs": [
    import.meta.env.VITE_INSTAGRAM_URL || "https://www.instagram.com/bnbevents__",
    import.meta.env.VITE_WHATSAPP_URL || "https://wa.me/972504884840"
  ]
};

export const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "B&B אישורי הגעה",
  "url": "https://www.bnb-rsvp.com/",
  "image": "./images/logo-bnb.svg",
  "telephone": "+972-50-488-4840",
  "address": { 
    "@type": "PostalAddress", 
    "addressCountry": "IL" 
  },
  "areaServed": "IL",
  "serviceArea": {
    "@type": "Country",
    "name": "Israel"
  }
};

// Services
export const serviceRSVP = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "אישורי הגעה לאירועים וחתונות",
  "alternateName": "RSVP services for events and weddings",
  "provider": { "@type": "Organization", "name": "B&B אישורי הגעה" },
  "areaServed": "IL",
  "serviceType": "RSVP Management",
  "description": "מערכת מתקדמת לאישורי הגעה: ניהול רשימות, תזכורות חכמות, דוחות בזמן אמת וליווי שירותי מלא עד לאירוע"
};

export const serviceSeating = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "ניהול הושבה חכם לאירועים",
  "alternateName": "Smart seating management for events",
  "provider": { "@type": "Organization", "name": "B&B אישורי הגעה" },
  "areaServed": "IL",
  "serviceType": "Seating Management",
  "description": "תכנון הושבה מדויק לפי קבוצות, העדפות ושינויים בזמן אמת – שירות מלא לראש שקט באירוע"
};

export const serviceHosts = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "דיילות ומנהלי אירוע מקצועיים",
  "alternateName": "Professional event hostesses and managers",
  "provider": { "@type": "Organization", "name": "B&B אישורי הגעה" },
  "areaServed": "IL",
  "serviceType": "Event Management",
  "description": "צוות דיילות מנוסה ומנהלי אירוע מלווים אתכם ביום האירוע, מקבלים אורחים ומוודאים שכל פרט מתבצע בצורה מושלמת"
};

export const serviceSuppliers = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "ספקים ואטרקציות לאירועים",
  "alternateName": "Event suppliers and attractions",
  "provider": { "@type": "Organization", "name": "B&B אישורי הגעה" },
  "areaServed": "IL",
  "serviceType": "Event Suppliers",
  "description": "חיבור לאטרקציות מובילות ולספקים אמינים – צילום, מוזיקה, עמדות מיוחדות ועוד"
};

export const serviceDigitalInvites = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "עיצוב הזמנות דיגיטליות לאירועים",
  "alternateName": "Digital invitation design for events",
  "provider": { "@type": "Organization", "name": "B&B אישורי הגעה" },
  "areaServed": "IL",
  "serviceType": "Digital Invitations",
  "description": "עיצוב הזמנות דיגיטליות מעוצבות בהתאמה אישית – שיתוף קל, מעקב, וטפסי RSVP חכמים"
};

// Breadcrumbs helper
export const breadcrumbsFor = (items: {name: string, url: string}[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://www.bnb-rsvp.com${item.url}`
  }))
});

// Website with search action
export const webSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "B&B אישורי הגעה",
  "url": "https://www.bnb-rsvp.com/",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.bnb-rsvp.com/search?q={query}",
    "query-input": "required name=query"
  }
};

// FAQ Page structured data
export const faqPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "איך עובד שירות אישורי הגעה?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "אנו מספקים מערכת מתקדמת לניהול אישורי הגעה הכוללת שליחת הזמנות, מעקב אחר תגובות, תזכורות אוטומטיות ודוחות מפורטים."
      }
    },
    {
      "@type": "Question", 
      "name": "מה כולל שירות ניהול הושבה?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "שירות ניהול הושבה כולל תכנון מדויק של הושבה לפי קבוצות משפחה, העדפות אישיות, שינויים בזמן אמת וליווי מקצועי ביום האירוע."
      }
    }
  ]
};
