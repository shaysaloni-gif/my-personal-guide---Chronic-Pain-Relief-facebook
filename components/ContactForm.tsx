import React, { useState } from 'react';

declare global {
  interface Window {
    fbq: any;
  }
}

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    issue: ''
  });

  const MAKE_WEBHOOK_URL = 'https://hook.eu1.make.com/pbj69ape7dl7wx2g6s7qb0w7so74xicx';
  const FB_ACCESS_TOKEN = 'EAAS0P9lauVgBQPIjVfwwWKZBexYwOJGO0rgv7JROS6o5S6rD820U9fHRtU36DfJa2HmsRPanUtFM2Ab8Xx8cYLQusiFJT4ye8KxBEFTYB3JFXLzZBMhHKbUC9jWjBhpJzw4Br80E2VETmZACeKCVLF4r5Bc4uZAYtMFJsEZCDC32BWDhJFqvRIkbx5yjxbwZDZD';

  const formatPhoneNumber = (phone: string) => {
    return phone.replace(/\D/g, '');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const cleanPhone = formatPhoneNumber(formData.phoneNumber);

    const payload = {
        name: formData.fullName,
        phone: cleanPhone,
        raw_phone: formData.phoneNumber,
        issue: formData.issue,
        date: new Date().toISOString(),
        source: 'Landing Page',
        fb_token: FB_ACCESS_TOKEN 
    };

    try {
        const response = await fetch(MAKE_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
           throw new Error(`Server responded with status: ${response.status}`);
        }

        // FB Pixel Tracking
        if (typeof window.fbq !== 'undefined') {
            window.fbq('track', 'Lead', {
                content_name: 'Consultation Request', 
                value: 0,
                currency: 'ILS',
                ph: cleanPhone, 
                fn: formData.fullName.split(' ')[0] || '',
                ln: formData.fullName.split(' ').slice(1).join(' ') || ''
            });
        }

        setSubmitted(true);
    } catch (error) {
        console.error('Error submitting form:', error);
        alert('אירעה שגיאה בשליחת הטופס, אנא נסה שנית או פנה בוואטסאפ');
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <section className="section section--dark" id="contact-form">
      <div className="container">
        <h2>מוכן/ה לבדוק התאמה לליווי?</h2>
        <p className="lead" style={{marginBottom: '20px'}}>מלאו את הפרטים לקביעת <strong>שיחת אבחון</strong> (ללא עלות וללא התחייבות).</p>
        <p style={{fontSize: '16px', opacity: 0.8, marginBottom: '40px', maxWidth: '600px', marginInline: 'auto'}}>
            *חשוב לדעת: הליווי הוא תהליך עומק המיועד למי שרציני לגבי הבריאות שלו. השיחה נועדה לבדוק האם אנחנו מתאימים לעבודה משותפת.
        </p>

        <div className="form-container">
          {!submitted ? (
            <form id="leadForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName" className="form-label">שם מלא</label>
                <input 
                  type="text" 
                  id="fullName" 
                  name="fullName" 
                  className="form-input" 
                  placeholder="ישראל ישראלי" 
                  required 
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phoneNumber" className="form-label">מספר טלפון</label>
                <input 
                  type="tel" 
                  id="phoneNumber" 
                  name="phoneNumber" 
                  className="form-input" 
                  placeholder="050-1234567" 
                  required 
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                />
              </div>

               <div className="form-group">
                <label htmlFor="issue" className="form-label">בעיה כרונית עיקרית</label>
                <input 
                  type="text" 
                  id="issue" 
                  name="issue" 
                  className="form-input" 
                  placeholder="לדוגמה: כאבי גב, פיברומיאלגיה..." 
                  required 
                  value={formData.issue}
                  onChange={handleInputChange}
                />
              </div>
              
              <button type="submit" className="cta submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'שולח...' : 'שריין לי שיחה'}
              </button>
            </form>
          ) : (
            <div id="thankYouMessage" className="thank-you-message">
              <h3>תודה שהשארת פרטים!</h3>
              <p>ממש בקרוב אפנה אליך לתיאום שיחת אבחון לזמן שיתאים לשנינו.</p>
              <p>עד אז, תרגיש חופשי להצטרף לקבוצה שלי:</p>
              <a href="https://chat.whatsapp.com/Dhm1EcV5dvKABdo3zoI9DE" target="_blank" className="cta wa-group-btn">להצטרפות לקבוצת ה-WhatsApp &larr;</a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;