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
  "name": "אישורי הגעה לחתונה ואירועים",
  "alternateName": "RSVP services for weddings and events",
  "provider": { "@type": "Organization", "name": "B&B אישורי הגעה" },
  "areaServed": "IL",
  "serviceType": "Wedding RSVP Management",
  "description": "אישורי הגעה לחתונה מקצועיים: מערכת מתקדמת לניהול רשימות אורחים, תזכורות חכמות, דוחות בזמן אמת וליווי שירותי מלא עד לחתונה",
  "keywords": "אישורי הגעה לחתונה, אישורים לחתונה, RSVP לחתונה, ניהול אורחים"
};

export const serviceSeating = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "דיילות להושבה וניהול הושבה",
  "alternateName": "Hostesses for seating and seating management",
  "provider": { "@type": "Organization", "name": "B&B אישורי הגעה" },
  "areaServed": "IL",
  "serviceType": "Wedding Seating Management",
  "description": "דיילות להושבה מקצועיות: תכנון הושבה מדויק לחתונות, סידור שולחנות לפי קבוצות משפחה, העדפות ושינויים בזמן אמת",
  "keywords": "דיילות להושבה, סידור הושבה, ניהול הושבה, סידור שולחנות, צוות קבלת פנים"
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
  "description": "שירותי אישורי הגעה לחתונה, דיילות להושבה וניהול אורחים מקצועי",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.bnb-rsvp.com/search?q={query}",
    "query-input": "required name=query"
  }
};

// Wedding Services specific structured data
export const weddingServices = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "שירותי חתונה מקצועיים",
  "description": "אישורי הגעה לחתונה, דיילות להושבה, ניהול אורחים וצוות קבלת פנים לחתונות",
  "provider": {
    "@type": "Organization",
    "name": "B&B אישורי הגעה"
  },
  "serviceType": "Wedding Services",
  "areaServed": "IL",
  "offers": {
    "@type": "Offer",
    "description": "שירותי אישורי הגעה לחתונה ודיילות להושבה",
    "availability": "https://schema.org/InStock"
  }
};

// FAQ Page structured data
export const faqPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "איך עובד שירות אישורי הגעה לחתונה?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "אנו מספקים מערכת מתקדמת לאישורי הגעה לחתונה הכוללת שליחת הזמנות דיגיטליות, מעקב אחר תגובות אורחים, תזכורות אוטומטיות ודוחות מפורטים לזוג."
      }
    },
    {
      "@type": "Question", 
      "name": "מה כולל שירות דיילות להושבה?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "שירות דיילות להושבה כולל תכנון מדויק של הושבה לחתונה לפי קבוצות משפחה, העדפות אישיות, סידור שולחנות, שינויים בזמן אמת וליווי מקצועי של צוות קבלת פנים ביום החתונה."
      }
    },
    {
      "@type": "Question",
      "name": "איך עובד ניהול אורחים בחתונה?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ניהול אורחים בחתונה כולל רישום מפורט של כל האורחים, מעקב אחר אישורי הגעה, תזכורות SMS, ניהול רשימות לפי קבוצות משפחה ודוחות עדכניים לזוג."
      }
    }
  ]
};
