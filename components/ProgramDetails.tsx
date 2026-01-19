import React from 'react';

const ProgramDetails: React.FC = () => {
  const steps = [
    {
      img: "https://firebasestorage.googleapis.com/v0/b/my-personal-guide-172369-24655.firebasestorage.app/o/4b6be720326888f99d92100d910648d7.png?alt=media&token=0eab1a97-8425-4a21-b7b7-6fdd34c822b3",
      text: "קם.ה בבוקר בקלות, הגוף מרגיש קליל ומשוחרר"
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/my-personal-guide-172369-24655.firebasestorage.app/o/44a751549b5e2293418e2bd5a07353e1.png?alt=media&token=361185c9-0b8b-4edd-a74e-88014c996c42",
      text: "שולט.ת בבריאות שלך ולא תלוי.ה בתרופות ורופאים"
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/my-personal-guide-172369-24655.firebasestorage.app/o/27a634450ea68979b430fe9805bf8e43.png?alt=media&token=930d201f-3a86-4ac5-9f0c-dd37de29320a",
      text: "מבין.ה בדיוק מה הגוף צריך כדי לא להגיע לכאב שוב"
    },
    {
      img: "https://firebasestorage.googleapis.com/v0/b/my-personal-guide-172369-24655.firebasestorage.app/o/5da26dcb3c28f8211d3965f8fc81b5a1.png?alt=media&token=8786bf67-e88c-45f7-9f6a-aecab400c7ee",
      text: "אנרגיה וחיוניות שחוזרות לחיים שלך"
    }
  ];

  return (
    <section className="section section--light" id="vision">
      <div className="container">
        <h2>דמיין.י את עצמך בעוד 3 חודשים</h2>
        
        <div className="vision-grid">
          {steps.map((step, index) => (
            <div key={index} className="vision-card">
              <div className="vision-icon">
                <img src={step.img} alt="" />
              </div>
              <div className="vision-text">{step.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramDetails;