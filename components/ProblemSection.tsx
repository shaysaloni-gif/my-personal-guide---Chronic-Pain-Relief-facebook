import React from 'react';
import { AlertCircle, BatteryLow, Activity, HeartCrack } from 'lucide-react';

const ProblemSection: React.FC = () => {
  return (
    <section className="section section--light">
      <div className="container">
        <h2>מרגישים שהגוף שלכם "תקוע"? אתם לא לבד.</h2>
        <p className="lead" style={{ marginBottom: '40px' }}>
            זה יכול להיות כאב שלא מרפה ממך, עייפות כרונית שתמיד איתך, מדדים שיצאו מאיזון או תחושה כללית כאילו הגוף בוגד בכם.
            במשך שנים לימדו אותנו לטפל בסימפטום, אם יש כאב, צריך לעצור אותו מייד.
            אבל התעלמות מהגורמים שהובילו לכאב גורם למצב רק להחמיר.
        </p>

        <div className="vision-grid">
          {[
            { icon: AlertCircle, title: "כאב שלא מרפה", desc: "כאבים שחוזרים שוב ושוב למרות הכדורים." },
            { icon: BatteryLow, title: "עייפות כרונית", desc: "לקום בבוקר עייפים גם אחרי שנת לילה." },
            { icon: Activity, title: "מדדים לא מאוזנים", desc: "סוכר, לחץ דם או דלקתיות גבוהה." },
            { icon: HeartCrack, title: "תחושת בגידה", desc: "הרגשה שהגוף כבר לא עובד בשבילך." },
          ].map((item, index) => (
            <div key={index} className="vision-card">
              <div className="vision-icon flex items-center justify-center bg-green-50">
                <item.icon className="text-[#2D5A42] w-8 h-8 md:w-12 md:h-12" />
              </div>
              <div>
                <div className="vision-text font-bold">{item.title}</div>
                <p className="text-sm text-[#2D5A42]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <p className="lead" style={{ marginTop: '30px' }}>
            הכאב הכרוני הוא לא גזירת גורל. הוא איתות מצוקה של הגוף.<br/>
            <strong>זו הדרך של הגוף לצעוק שמשהו בהרגלים שלנו לא תואם את הביולוגיה שלו.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;