import React from 'react';
import { Leaf, RefreshCw, ShieldCheck } from 'lucide-react';

const SolutionSection: React.FC = () => {
  return (
    <section className="section section--white" id="method">
      <div className="container">
        <h2>אז מה בעצם אנחנו עושים בליווי?</h2>
        <p className="lead" style={{ color: 'var(--muted-color)', marginBottom: '30px' }}>
          הכאב הוא רק נורת האזהרה. כדי לכבות אותה, אנחנו לא מכבים את הנורה, אלא מטפלים במה שהדליק אותה.
        </p>

        <div className="vision-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            <div className="vision-card">
                <div className="vision-icon flex items-center justify-center bg-green-50">
                  <Leaf className="text-[#2D5A42] w-8 h-8 md:w-10 md:h-10" />
                </div>
                <div>
                    <h3 style={{ color: 'var(--primary)' }}>1. מזהים את שורש הבעיה</h3>
                    <p>בפגישת האבחון נבין מה מונע מהגוף שלך להחלים: האם זה סטרס? תזונה מעודדת דלקת? חוסר שינה? או רעלנים בסביבה שלך?</p>
                </div>
            </div>
            <div className="vision-card">
                <div className="vision-icon flex items-center justify-center bg-blue-50">
                  <RefreshCw className="text-[#2D5A42] w-8 h-8 md:w-10 md:h-10" />
                </div>
                <div>
                    <h3 style={{ color: 'var(--primary)' }}>2. בונים תוכנית הדרגתית</h3>
                    <p>בלי שינויים קיצוניים ובלי דיאטות רעב. אנחנו יוצרים התאמות קטנות בשגרה שלך, כאלו שתוכל/י להחזיק בהן לאורך שנים.</p>
                </div>
            </div>
            <div className="vision-card">
                <div className="vision-icon flex items-center justify-center bg-purple-50">
                  <ShieldCheck className="text-[#2D5A42] w-8 h-8 md:w-10 md:h-10" />
                </div>
                <div>
                    <h3 style={{ color: 'var(--primary)' }}>3. יוצרים ארגז כלים לחיים</h3>
                    <p>המטרה היא לא שתהיה תלוי בי, אלא שתהיה הרופא של עצמך. אם הכאב ינסה לחזור בעתיד, אתה תדע בדיוק איך לטפל בו.</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;