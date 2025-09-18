// SEO Constants for B&B אישורי הגעה והושבה
export const SEO_CONSTANTS = {
  // Site Information
  SITE_NAME: 'B&B אישורי הגעה והושבה',
  SITE_URL: 'https://www.bnb-rsvp.com',
  SITE_DESCRIPTION: 'B&B RSVP מספקת שירותי אישורי הגעה והושבה מקצועיים, ניהול אורחים וצוות קבלת פנים לאירועים ברמה הגבוהה ביותר.',
  
  // Business Information
  BUSINESS_PHONE: '+972-50-488-4840',
  BUSINESS_EMAIL: 'bnbeventsmanagement@gmail.com',
  BUSINESS_ADDRESS: 'ישראל',
  
  // Social Links
  SOCIAL_LINKS: {
    website: 'https://www.bnb-rsvp.com',
    instagram: 'https://instagram.com/bnb_rsvp',
    whatsapp: 'https://wa.me/972504884840',
    facebook: 'https://facebook.com/bnb.rsvp'
  },
  
  // Default Images
  DEFAULT_OG_IMAGE: '/images/og-default.jpg',
  DEFAULT_LOGO: '/images/logo-bnb.svg',
  FAVICON: '/favicon.svg',
  
  // Meta Tags
  DEFAULT_TITLE: 'B&B אישורי הגעה והושבה - שירותי אירועים מקצועיים',
  TITLE_TEMPLATE: '%s | B&B אישורי הגעה והושבה',
  
  // Locale
  LOCALE: 'he_IL',
  LANGUAGE: 'he',
  DIRECTION: 'rtl',
  
  // Theme
  THEME_COLOR: '#1e40af',
  
  // Keywords
  KEYWORDS: [
    'אישורי הגעה',
    'ניהול אורחים',
    'סידור הושבה',
    'אירועים',
    'חתונה',
    'בר מצווה',
    'ברית',
    'RSVP',
    'B&B',
    'שירותי אירועים'
  ]
} as const;

// Page-specific SEO data
export const PAGE_SEO = {
  home: {
    title: 'B&B אישורי הגעה והושבה - שירותי אירועים מקצועיים',
    description: 'B&B RSVP מספקת שירותי אישורי הגעה והושבה מקצועיים, ניהול אורחים וצוות קבלת פנים לאירועים ברמה הגבוהה ביותר.',
    keywords: ['אישורי הגעה לחתונה', 'סידור הושבה', 'ניהול אורחים', 'סידור שולחנות', 'צוות קבלת פנים']
  },
  about: {
    title: 'אודות B&B אישורי הגעה והושבה',
    description: 'למדו על B&B RSVP - החברה המובילה בישראל לשירותי אישורי הגעה, ניהול אורחים וצוות קבלת פנים לאירועים.',
    keywords: ['אודות B&B', 'חברת אירועים', 'שירותי RSVP', 'ניהול אירועים']
  },
  packages: {
    title: 'החבילות שלנו - B&B אישורי הגעה והושבה',
    description: 'גלו את מגוון החבילות של B&B RSVP לשירותי אישורי הגעה, ניהול אורחים וצוות קבלת פנים לאירועים.',
    keywords: ['חבילות אישורי הגעה', 'מחירים', 'שירותים לאירועים', 'חבילת RSVP']
  },
  contact: {
    title: 'צור קשר - B&B אישורי הגעה והושבה',
    description: 'צרו איתנו קשר לקבלת הצעת מחיר מותאמת אישית לאירוע שלכם. B&B RSVP - שירותי אירועים מקצועיים.',
    keywords: ['צור קשר', 'הצעת מחיר', 'ייעוץ אירועים', 'B&B קשר']
  },
  faq: {
    title: 'שאלות נפוצות - B&B אישורי הגעה והושבה',
    description: 'כל מה שאתם צריכים לדעת על שירותי B&B RSVP. שאלות ותשובות על אישורי הגעה, ניהול אורחים וצוות קבלת פנים.',
    keywords: ['שאלות נפוצות', 'FAQ', 'מידע על שירותים', 'תשובות']
  },
  process: {
    title: 'תהליך העבודה - B&B אישורי הגעה והושבה',
    description: 'למדו על תהליך העבודה של B&B RSVP - מההזמנה ועד לאירוע המושלם. שירותי אישורי הגעה והושבה מקצועיים.',
    keywords: ['תהליך עבודה', 'איך זה עובד', 'שירותי RSVP', 'תהליך אירוע']
  },
  testimonials: {
    title: 'המלצות לקוחות - B&B אישורי הגעה והושבה',
    description: 'קראו המלצות אמיתיות מלקוחותינו המרוצים על שירותי B&B RSVP. ביקורות על אישורי הגעה וניהול אירועים.',
    keywords: ['המלצות לקוחות', 'ביקורות', 'חוות דעת', 'לקוחות מרוצים']
  },
  vendors: {
    title: 'הספקים שלנו - B&B אישורי הגעה והושבה',
    description: 'הכירו את רשת הספקים המקצועיים של B&B RSVP. שותפים מובילים בתחום האירועים והשירותים.',
    keywords: ['ספקים', 'שותפים', 'רשת ספקים', 'שירותי אירועים']
  },
  accessibility: {
    title: 'נגישות - B&B אישורי הגעה והושבה',
    description: 'B&B RSVP מחויבת לנגישות מלאה. מידע על הנגישות באתר ובשירותים שלנו.',
    keywords: ['נגישות', 'שירות נגיש', 'נגישות אירועים', 'שוויון זכויות']
  },
  'legal/terms': {
    title: 'תנאי שימוש - B&B אישורי הגעה והושבה',
    description: 'תנאי השימוש של B&B אישורי הגעה והושבה בע״מ. מידע משפטי על השימוש באתר ובשירותים.',
    keywords: ['תנאי שימוש', 'מידע משפטי', 'תקנון', 'חוקים']
  },
  'legal/privacy': {
    title: 'מדיניות פרטיות - B&B אישורי הגעה והושבה',
    description: 'מדיניות הפרטיות של B&B אישורי הגעה והושבה בע״מ. הגנה על פרטיות המשתמשים והמידע האישי.',
    keywords: ['מדיניות פרטיות', 'הגנת מידע', 'פרטיות', 'מידע אישי']
  }
} as const;
