# מדריך אינטגרציה עם Meet for Meet API

## הגדרת ה-API

### 1. קבלת מפתח API
- צור קשר עם צוות Meet for Meet לקבלת מפתח API
- החלף את `YOUR_API_KEY_HERE` בקובץ `src/pages/Testimonials.tsx`

### 2. הגדרת ה-Endpoint
```javascript
const response = await fetch('https://api.meetformeet.com/reviews/bnb-rsvp', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY_HERE',
    'Content-Type': 'application/json',
  },
});
```

### 3. מבנה הנתונים הצפוי
```json
{
  "reviews": [
    {
      "id": "unique_id",
      "rating": 5,
      "text": "ביקורת הלקוח",
      "author": "שם הלקוח",
      "date": "2024-01-15T10:30:00Z",
      "event_type": "חתונה",
      "verified": true
    }
  ]
}
```

## תכונות המערכת

### ✅ ביקורות חיות
- שליפה אוטומטית כל 5 דקות
- רענון ידני עם כפתור
- הצגת זמן עדכון אחרון

### ✅ סימון ביקורות חיות
- תג "חיה" לביקורות מה-API
- תג "ביקורת חיה" בתצוגת מחשב
- דירוג דינמי לפי ה-API

### ✅ Fallback
- אם ה-API נכשל, מציג ביקורות סטטיות
- הודעות שגיאה בקונסול
- אינדיקטור טעינה

### ✅ רספונסיביות
- מסך מובייל מדמה אפליקציה
- תצוגת מחשב עם רשת כרטיסיות
- כפתורי רענון נפרדים לכל פלטפורמה

## הגדרות נוספות

### שינוי תדירות העדכון
```javascript
// שינוי מ-5 דקות ל-10 דקות
const interval = setInterval(fetchLiveReviews, 10 * 60 * 1000);
```

### הוספת פילטרים
```javascript
// הוספת פילטר לביקורות מאומתות בלבד
const verifiedReviews = reviewsData.reviews.filter(review => review.verified);
```

### הוספת Cache
```javascript
// שמירת ביקורות ב-localStorage
localStorage.setItem('cachedReviews', JSON.stringify(reviewsData.reviews));
```

## בדיקות

### בדיקת חיבור API
1. פתח Developer Tools (F12)
2. עבור לטאב Network
3. רענן את דף המלצות
4. בדוק שהבקשה ל-API נשלחת בהצלחה

### בדיקת Fallback
1. שנה את ה-URL ל-URL שגוי
2. בדוק שהביקורות הסטטיות מוצגות
3. בדוק שאין שגיאות בקונסול

## תמיכה

לשאלות או בעיות עם האינטגרציה, צור קשר עם צוות הפיתוח.
