import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

interface FormField {
  name: string;
  label: string;
  type: string;
  required: boolean;
  options?: string[];
}

interface ContactFormProps {
  formFields: FormField[];
}

const ContactForm: React.FC<ContactFormProps> = ({
  formFields
}) => {
  const [formData, setFormData] = useState<Record<string, string | string[]>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setFormData(prev => {
      const currentValues = prev[name] || [];
      if (checked) {
        return {
          ...prev,
          [name]: [...currentValues, value]
        };
      } else {
        return {
          ...prev,
          [name]: Array.isArray(currentValues) 
            ? currentValues.filter((item: string) => item !== value)
            : currentValues
        };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if privacy agreement is checked
    const privacyCheckbox = document.getElementById('privacy-agreement') as HTMLInputElement;
    if (!privacyCheckbox?.checked) {
      alert('אנא סמן/י את תיבת ההסכמה לקבלת מידע נוסף');
      return;
    }
    
    console.log('Form submitted!', formData);
    setIsSubmitting(true);
    try {
      // Create email content with all form data
      const content = createEmailContent(formData);
      console.log('Email content created:', content);
      
      // Send email automatically using EmailJS (free service)
      await sendEmailAutomatically(formData, content);
      
      setSubmitStatus('success');
      setFormData({});
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const sendEmailAutomatically = async (data: Record<string, string | string[]>, content: string) => {
    try {
      // Debug: Log what we're sending
      console.log('Sending form data:', data);
      console.log('Form content:', content);
      
      // Method 1: Web3Forms (primary method - works in production)
      const web3formsResponse = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: '7d7dcc9e-3c6a-4768-b0fa-1bb4da118da6', // Web3Forms access key
          'שם מלא': data.fullName || '',
          'מספר טלפון': data.phone || '',
          'סוג האירוע': data.eventType || '',
          'מספר מוזמנים': data.guestCount || '',
          'תאריך האירוע': data.eventDate || '',
          'שירותים': Array.isArray(data.services) ? data.services.join(', ') : data.services || '',
          'הערות נוספות': data.notes || '',
          'תוכן מלא': content,
          subject: 'פנייה חדשה מאתר B&B אישורי הגעה',
          to: 'bnbeventsmanagement@gmail.com',
          from_name: 'B&B Website Contact Form'
        })
      });
      
      const web3formsResult = await web3formsResponse.json();
      
      if (web3formsResponse.ok && web3formsResult.success) {
        console.log('Email sent successfully via Web3Forms:', web3formsResult);
        return;
      }
      
      console.log('Web3Forms failed, trying Formspree...');
      
      // Method 2: Formspree (fallback)
      const formspreeResponse = await fetch('https://formspree.io/f/xpwgqkzw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          'שם מלא': data.fullName || '',
          'מספר טלפון': data.phone || '',
          'סוג האירוע': data.eventType || '',
          'מספר מוזמנים': data.guestCount || '',
          'תאריך האירוע': data.eventDate || '',
          'שירותים': Array.isArray(data.services) ? data.services.join(', ') : data.services || '',
          'הערות נוספות': data.notes || '',
          'תוכן מלא': content,
          _subject: 'פנייה חדשה מאתר B&B אישורי הגעה',
          _replyto: 'bnbeventsmanagement@gmail.com'
        })
      });
      
      const formspreeResult = await formspreeResponse.json();
      
      if (formspreeResponse.ok) {
        console.log('Email sent successfully via Formspree:', formspreeResult);
        return;
      }
      
      throw new Error(`All email methods failed. Web3Forms: ${web3formsResult.message || 'Unknown error'}, Formspree: ${formspreeResult.error || 'Unknown error'}`);
      
    } catch (error) {
      console.error('Error sending email:', error);
      throw error; // Re-throw to show error to user
    }
  };

  const createEmailContent = (data: Record<string, string | string[]>) => {
    const currentDate = new Date().toLocaleString('he-IL');
    
    let content = `פנייה חדשה מאתר B&B אישורי הגעה\n`;
    content += `תאריך ושעה: ${currentDate}\n\n`;
    content += `פרטי הפנייה:\n`;
    content += `========================\n\n`;
    
    // Add all form fields (excluding email)
    Object.entries(data).forEach(([key, value]) => {
      if (key !== 'email' && value && value !== '') {
        const field = formFields.find(f => f.name === key);
        const label = field?.label || key;
        
        if (Array.isArray(value)) {
          content += `${label}: ${value.join(', ')}\n`;
        } else {
          content += `${label}: ${value}\n`;
        }
      }
    });
    
    // Add debug info to see what's being sent
    content += `\n--- Debug Info ---\n`;
    content += `Form Data Keys: ${Object.keys(data).join(', ')}\n`;
    content += `Form Data Values: ${JSON.stringify(data)}\n`;
    content += `Full Name: ${data.fullName}\n`;
    content += `Phone: ${data.phone}\n`;
    content += `Event Type: ${data.eventType}\n`;
    content += `Guest Count: ${data.guestCount}\n`;
    content += `Event Date: ${data.eventDate}\n`;
    content += `Services: ${data.services}\n`;
    content += `Notes: ${data.notes}\n`;
    
    content += `\n========================\n`;
    content += `נשלח מאתר B&B אישורי הגעה\n`;
    content += `https://bnb-rsvp.com`;
    
    return content;
  };


  return (
    <div className="relative">
      {submitStatus === 'success' ? (
        <div className="text-center py-12 animate-bounceIn" role="alert" aria-live="polite">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-full animate-glow">
              <CheckCircle className="h-12 w-12 text-green-400" />
            </div>
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">
            תודה על פנייתך!
          </h3>
          <p className="text-blue-100 mb-4 text-lg">הפנייה נשלחה בהצלחה!</p>
          <p className="text-blue-200 mb-8 text-base">נציג שלנו יחזור אליך בהקדם.</p>
          <button 
            onClick={() => setSubmitStatus('idle')} 
            className="btn btn-primary animate-bounceIn"
          >
            שליחת פנייה נוספת
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {formFields.map(field => (
            <div key={field.name} className="form-control">
              <label htmlFor={field.name} className="block text-white font-medium mb-3 text-lg">
                {field.label}
                {field.required && <span className="text-red-400 mr-1">*</span>}
              </label>
              
              {field.type === 'textarea' ? (
                <textarea 
                  id={field.name}
                  name={field.name} 
                  value={formData[field.name] || ''} 
                  onChange={handleChange} 
                  required={field.required} 
                  className="w-full p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-sky-400 focus:border-sky-400 text-white placeholder-blue-200 transition-all duration-300 hover:bg-white/15" 
                  rows={4}
                  placeholder={`הזן/י ${field.label.toLowerCase()}`}
                />
              ) : field.type === 'select' ? (
                <select 
                  id={field.name}
                  name={field.name} 
                  value={formData[field.name] || ''} 
                  onChange={handleChange} 
                  required={field.required} 
                  className="w-full p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-sky-400 focus:border-sky-400 text-white transition-all duration-300 hover:bg-white/15"
                >
                  <option value="" className="text-slate-800">בחר/י {field.label}</option>
                  {field.options?.map(option => (
                    <option key={option} value={option} className="text-slate-800">
                      {option}
                    </option>
                  ))}
                </select>
              ) : field.type === 'checkbox' ? (
                <div className="space-y-3">
                  {field.options?.map(option => (
                    <div key={option} className="flex items-center group">
                      <input 
                        type="checkbox" 
                        id={`${field.name}-${option}`} 
                        name={field.name} 
                        value={option} 
                        checked={formData[field.name]?.includes(option) || false} 
                        onChange={handleCheckboxChange} 
                        className="h-5 w-5 text-sky-500 focus:ring-sky-500 ml-3 bg-white/10 border-white/20 rounded" 
                      />
                      <label htmlFor={`${field.name}-${option}`} className="text-blue-100 group-hover:text-white transition-colors cursor-pointer">
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              ) : (
                <input 
                  id={field.name}
                  type={field.type} 
                  name={field.name} 
                  value={formData[field.name] || ''} 
                  onChange={handleChange} 
                  required={field.required} 
                  className="w-full p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-sky-400 focus:border-sky-400 text-white placeholder-blue-200 transition-all duration-300 hover:bg-white/15" 
                  placeholder={`הזן/י ${field.label.toLowerCase()}`}
                />
              )}
            </div>
          ))}
          
          {/* Privacy Agreement Checkbox */}
          <div className="form-control">
            <div className="flex items-start gap-3 group">
              <input 
                type="checkbox" 
                id="privacy-agreement" 
                name="privacy-agreement" 
                required
                className="h-5 w-5 text-sky-500 focus:ring-sky-500 mt-1 bg-white/10 border-white/20 rounded" 
              />
              <label htmlFor="privacy-agreement" className="text-blue-100 group-hover:text-white transition-colors cursor-pointer text-sm leading-relaxed">
                אני מסכים/ה לקבל מידע נוסף על השירותים והחבילות של B&B אישורי הגעה והושבה בע״מ באמצעות דואר אלקטרוני, הודעות SMS ו/או WhatsApp, בהתאם למדיניות הפרטיות של החברה.
                <span className="text-red-400 mr-1">*</span>
              </label>
            </div>
          </div>
          
          {submitStatus === 'error' && (
            <div className="flex items-center gap-3 text-red-400 text-center py-4 bg-red-500/10 rounded-xl border border-red-500/20" role="alert" aria-live="polite">
              <AlertCircle className="h-5 w-5" />
              <span>אירעה שגיאה בשליחת הטופס. אנא נסו שנית.</span>
            </div>
          )}
          
          <div className="text-center pt-6">
            <button 
              type="submit" 
              disabled={isSubmitting} 
              className={`btn btn-primary px-10 py-4 text-lg inline-flex items-center gap-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'animate-bounceIn'}`}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  שולח...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  שליחה
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;