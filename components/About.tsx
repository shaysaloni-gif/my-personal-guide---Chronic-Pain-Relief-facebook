import React from 'react';

const About: React.FC = () => {
  return (
    <section className="section section--white" id="about">
      <div className="container">
        <div className="about-card">
          <img className="about-photo" src="https://firebasestorage.googleapis.com/v0/b/my-personal-guide-172369-24655.firebasestorage.app/o/bb5a3f7df608b29ed45b330da0377df8.webp?alt=media&token=74ede896-1d44-40db-8705-b2c06fbfda24" alt="שי סלוני" />
          
          <div className="about-text">
            <h2>נעים להכיר, שי סלוני</h2>
            <p>אני לא רק "יועץ לרפואה הוליסטית", אני מישהו שהיה שם בדיוק כמוך.</p>
            <p>כשהתמודדתי עם פריצת דיסק חמורה וכאבים משתקים, הרופאים הציעו ניתוחים ומשככי כאבים. הבנתי שזה רק "לשרוד", לא לחיות. החלטתי לחקור לעומק.</p>
            <p>גיליתי שכשהגוף מקבל את התנאים הנכונים - הוא יודע לרפא את עצמו טוב יותר מכל תרופה. יצאתי מהכאב לחלוטין, ומאז אני מלווה אנשים לאותה עצמאות.</p>
            <p><strong>אני לא כאן כדי להיות המטפל שלך לנצח, אני כאן כדי ללמד אותך להיות המטפל של עצמך.</strong></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;