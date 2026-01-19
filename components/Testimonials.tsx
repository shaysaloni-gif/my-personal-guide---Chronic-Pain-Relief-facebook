import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="section section--white" id="social-proof">
      <div className="container">
        <h2>מה אומרים מי שעברו את התהליך</h2>
        <div className="max-w-4xl mx-auto flex justify-center">
          <img 
            src="https://firebasestorage.googleapis.com/v0/b/my-personal-guide-172369-24655.firebasestorage.app/o/20bc8d0d1497460270fcb4540c0e073f.png?alt=media&token=126a4ff3-bee8-4116-a17b-d1af89df5a18" 
            alt="לקוחות מספרים" 
            className="w-full md:w-3/4 h-auto rounded-xl shadow-sm"
          />
        </div>
        <p className="social-proof-text">עשרות מטופלים כבר השיגו שליטה על הבריאות שלהם, מה איתך?</p>
      </div>
    </section>
  );
};

export default Testimonials;