# מדריך הגדרת שליחת מייל אוטומטית

## אפשרות 1: EmailJS (מומלץ - חינמי)

### שלב 1: יצירת חשבון
1. היכנס ל-https://www.emailjs.com/
2. צור חשבון חינמי
3. היכנס לדשבורד

### שלב 2: הגדרת שירות מייל
1. לחץ על "Email Services"
2. בחר "Gmail" או "Outlook"
3. התחבר לחשבון המייל שלך
4. העתק את ה-Service ID

### שלב 3: יצירת תבנית
1. לחץ על "Email Templates"
2. צור תבנית חדשה עם השם "template_contact_form"
3. הגדר את התבנית:

```
Subject: פנייה חדשה מאתר B&B אישורי הגעה

From: {{from_name}} <{{from_email}}>
Phone: {{phone}}
Services: {{services}}
Event Date: {{event_date}}
Guests: {{guests_count}}

Message:
{{message}}

---
Full Details:
{{full_content}}
```

### שלב 4: קבלת מפתח ציבורי
1. לחץ על "Account" → "General"
2. העתק את ה-Public Key

### שלב 5: עדכון הקוד
```javascript
const publicKey = 'YOUR_ACTUAL_PUBLIC_KEY_HERE';
```

## אפשרות 2: Formspree (חינמי)

### שלב 1: יצירת חשבון
1. היכנס ל-https://formspree.io/
2. צור חשבון חינמי
3. צור form חדש

### שלב 2: קבלת Form ID
1. העתק את ה-Form ID (נראה כמו: xyz123abc)

### שלב 3: עדכון הקוד
```javascript
const formspreeResponse = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

## אפשרות 3: שרת מותאם אישית

### יצירת endpoint
צור קובץ `api/send-email.js`:

```javascript
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { to, subject, content, from } = req.body;

  // השתמש בשירות כמו SendGrid, Mailgun, או Nodemailer
  // כאן דוגמה עם Nodemailer:
  
  const nodemailer = require('nodemailer');
  
  const transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: 'bnbeventsmanagement@gmail.com',
      pass: 'YOUR_APP_PASSWORD'
    }
  });

  const mailOptions = {
    from: from,
    to: to,
    subject: subject,
    text: content
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error sending email' });
  }
}
```

## הגדרת Gmail App Password

### שלב 1: הפעלת 2FA
1. היכנס לחשבון Gmail שלך
2. עבור ל-Security
3. הפעל Two-Factor Authentication

### שלב 2: יצירת App Password
1. עבור ל-Security → App passwords
2. בחר "Mail" ו-"Other"
3. הזן "B&B RSVP Website"
4. העתק את הסיסמה שנוצרה

## בדיקת הפעולה

### בדיקה מקומית
1. פתח Developer Tools (F12)
2. עבור לטאב Console
3. מלא את הטופס ושלח
4. בדוק שאין שגיאות

### בדיקת מייל
1. בדוק את תיבת המייל bnbeventsmanagement@gmail.com
2. ודא שהמייל הגיע עם כל הפרטים
3. בדוק שהפורמט נכון

## פתרון בעיות

### שגיאה: "CORS policy"
- ודא שהשירות תומך ב-CORS
- השתמש ב-proxy אם נדרש

### שגיאה: "Invalid API key"
- בדוק שהמפתח נכון
- ודא שהשירות מופעל

### שגיאה: "Template not found"
- בדוק שהתבנית קיימת
- ודא שהשם נכון

## עלויות

- **EmailJS**: 200 מיילים בחודש חינם
- **Formspree**: 50 פניות בחודש חינם
- **שרת מותאם**: תלוי בשירות המייל

## המלצה

השתמש ב-EmailJS כי:
✅ קל להגדרה
✅ חינמי
✅ עובד טוב עם React
✅ תמיכה בעברית
