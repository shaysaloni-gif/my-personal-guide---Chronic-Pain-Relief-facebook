import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item" data-state={isOpen ? 'open' : 'closed'}>
      <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        {question}
      </button>
      <div className="faq-answer" style={{ maxHeight: isOpen ? '500px' : '0' }}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "זה ידרוש ממני שינויים קיצוניים בחיים?",
      answer: "ממש לא. אנחנו עובדים עם הגוף ולא נגדו. אני לא מאמין בשיטות קיצוניות שקשה להתמיד בהן. אנחנו נמצא יחד את הדרך המאוזנת שמשתלבת בשגרה שלך ומאפשרת לך להחזיק בתוצאות לשנים קדימה."
    },
    {
      question: "למי הטיפול מתאים?",
      answer: "למי שסובל מכאבים כרוניים (פיברומיאלגיה, דלקות, פריצות דיסק וכו') ומבין שטיפול אמיתי דורש טיפול בשורש הבעיה ולא רק בסימפטום. הליווי מתאים רק למי שמוכן לעבור תהליך ולהשקיע בעצמו."
    },
    {
      question: "מה קורה בפגישת האבחון?",
      answer: "זוהי פגישת וידאו ללא עלות, בה נבין את המצב הרפואי שלך, את אורח החיים שלך, ונבדוק האם הגישה שלי יכולה לעזור לך. רק אם אראה שיש התאמה מלאה - נדבר על הצטרפות לליווי."
    },
    {
      question: "תוך כמה זמן רואים תוצאות?",
      answer: "רוב המטופלים מרגישים הקלה משמעותית תוך 3-4 שבועות של עבודה מדויקת. המטרה של 12 השבועות היא לקבע את המצב החדש ולהעניק לך ביטחון מלא בגוף שלך."
    }
  ];

  return (
    <section className="section section--light" id="faq">
      <div className="container">
        <h2>שאלות נפוצות</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;