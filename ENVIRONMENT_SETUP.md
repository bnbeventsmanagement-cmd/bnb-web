# Environment Variables Setup

## הגדרת משתני סביבה לפרויקט B&B RSVP

### שלב 1: יצירת קובץ משתני סביבה

1. העתק את הקובץ `env.example` לקובץ `.env.local`:
```bash
cp env.example .env.local
```

**או ב-Windows:**
```cmd
copy env.example .env.local
```

2. או צור קובץ `.env.local` חדש עם התוכן הבא:

```env
# Environment Variables for B&B RSVP
# This file is for local development only

# Contact Form Configuration
# The contact form uses mailto links for reliability

# Application Configuration
VITE_APP_NAME=B&B אישורי הגעה
VITE_APP_URL=https://www.bnb-rsvp.co.il

# Contact Information
VITE_CONTACT_PHONE=+972-50-488-4840
VITE_CONTACT_EMAIL=bnbeventsmanagement@gmail.com
VITE_WHATSAPP_URL=https://wa.me/972504884840

# Social Media Links
VITE_INSTAGRAM_URL=https://www.instagram.com/bnbevents__?igsh=MWFrY2JxdTF3ZjRyYw%3D%3D&utm_source=qr
VITE_LOGIN_URL=https://eventsmanagment.com/login

# Development Settings
VITE_DEV_MODE=true
VITE_ENABLE_AXE=true
```

### שלב 2: הגדרת משתני סביבה ב-Production

#### עבור Vercel:
1. לך ל-Dashboard של Vercel
2. בחר את הפרויקט
3. לך ל-Settings > Environment Variables
4. הוסף את כל המשתנים מהקובץ `.env.local`

#### עבור Netlify:
1. לך ל-Dashboard של Netlify
2. בחר את הפרויקט
3. לך ל-Site settings > Environment variables
4. הוסף את כל המשתנים מהקובץ `.env.local`

#### עבור GitHub Pages:
1. לך ל-Settings של ה-Repository
2. לך ל-Secrets and variables > Actions
3. הוסף את כל המשתנים כ-Secrets

### שלב 3: משתני סביבה חשובים

#### חובה:
- `VITE_WEB3FORMS_ACCESS_KEY` - מפתח API של Web3Forms לטפסי יצירת קשר

#### אופציונלי (עם ערכי ברירת מחדל):
- `VITE_CONTACT_PHONE` - מספר טלפון ליצירת קשר
- `VITE_CONTACT_EMAIL` - כתובת אימייל
- `VITE_WHATSAPP_URL` - קישור WhatsApp
- `VITE_INSTAGRAM_URL` - קישור אינסטגרם
- `VITE_LOGIN_URL` - קישור למערכת התחברות
- `VITE_ENABLE_AXE` - הפעלת בדיקות נגישות (true/false)

### שלב 4: בדיקה

לאחר הגדרת המשתנים, הפעל:
```bash
npm run dev
```

והתקן שהטפסים עובדים ושהקישורים מובילים לכתובות הנכונות.

### הערות חשובות:

1. **אבטחה**: לעולם אל תעלה את קובץ `.env.local` ל-Git
2. **Vite**: כל משתנה סביבה חייב להתחיל ב-`VITE_` כדי להיות זמין בקוד
3. **Production**: ודא שכל המשתנים מוגדרים בפלטפורמת ה-Deployment שלך
4. **Fallbacks**: הקוד כולל ערכי ברירת מחדל למקרה שמשתנה לא מוגדר
