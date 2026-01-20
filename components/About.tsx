import React from 'react';

const About: React.FC = () => {
  const scrollToSuitability = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('fit')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section section--white !py-16 md:!py-24" id="about">
      <div className="container">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12 md:gap-16 text-right">
          
          {/* Photo & Info Unit */}
          <div className="w-full md:w-1/3 flex-shrink-0 flex flex-row items-center justify-center md:flex-col md:items-start md:justify-start gap-6 md:gap-8">
            {/* The unit container above is flex-row on mobile and flex-col on desktop */}
            
            {/* Photo Section */}
            <div className="relative group shrink-0">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#2D5A42] to-[#E8B86D] rounded-[30px] md:rounded-[40px] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                {/* Medium sized image on mobile (w-44) and responsive on desktop */}
                <img 
                    className="relative w-44 h-44 md:w-full md:h-auto md:aspect-[3/4] rounded-[30px] md:rounded-[40px] object-cover shadow-2xl border-4 border-white" 
                    src="https://firebasestorage.googleapis.com/v0/b/studio-2971283909-2f4b3.firebasestorage.app/o/IMG_7399.jpg?alt=media&token=acfc5874-93c1-43a4-bc9e-e7a09bdaba8b" 
                    alt="שי סלוני" 
                />
            </div>

            {/* Name and Title Section - appears to the left of the photo on mobile in RTL */}
            <div className="flex flex-col text-right">
                <p className="text-[#2D5A42] font-black text-2xl md:text-4xl leading-tight">שי סלוני</p>
                <p className="text-slate-600 font-bold text-lg md:text-2xl mt-1">מומחה לרפואה הוליסטית</p>
            </div>
          </div>
          
          {/* Text Section */}
          <div className="w-full md:w-2/3 flex flex-col gap-6">
            <h2 className="!text-3xl md:!text-5xl !mb-2 font-black !text-[#2D5A42] after:!right-0 md:after:!right-0 after:!transform-none md:after:!transform-none after:!left-auto">היי! אני שי, ולפני 8 שנים, החיים שלי נעצרו.</h2>
            
            <div className="space-y-5 text-lg md:text-xl leading-relaxed text-slate-700 font-medium">
                <p>אובחנתי עם פריצת דיסק חריפה מאוד. האורטופדים לא האמינו שאני מצליח לעמוד וללכת בכלל, והציעו לי או ניתוח או זריקה, אבל החלטתי שלא לקבל את גזירת הגורל וללכת על כיוונים אחרים.</p>
                
                <p>אחרי שנתיים של כאב, סבל, אינספור שיטות טיפול שיצרו הקלה זמנית בלבד ותסכול עמוק, נחשפתי לראשונה לנטורולוגיה (הרפואה ההוליסטית).</p>
                
                <p className="text-[#2D5A42] font-bold">הבנתי שלא צריך לעצור את הכאב, שהגוף לא טועה ושכוחות הריפוי נמצאים בפנים, עברתי שינוי תזונתי מעמיק ותוך חודשיים הכאבים נעלמו ועד היום, כבר 6 שנים, לא חזרו.</p>
                
                <p>ומצילומים שנעשו לאחרונה אכן הפריצת דיסק כבר לא קיימת. מה אתם יודעים… הגוף באמת מסוגל לרפא את עצמו!</p>
                
                <p>בשנים האחרונות למדתי, התמקצעתי, חקרתי, הקמתי חוות בריאות (כמו חוות יוניק המפורסמת ביער הסודי בקפריסין), וזיקקתי את הכל לשיטה אחת שעובדת.</p>
                
                <p className="text-2xl font-bold text-[#2D5A42] mt-6">אני לא כאן כדי להיות המטפל שלך לנצח, אני כאן כדי ללמד אותך איך להיות המטפל של עצמך.</p>
            </div>

            <div className="mt-8 flex justify-center md:justify-start">
                <button onClick={scrollToSuitability} className="cta !px-8 md:!px-12 !py-5 md:!py-6 !text-lg md:!text-2xl shadow-xl w-full md:w-auto">
                    אני רוצה לבדוק התאמה לליווי ולהשתחרר מהכאב
                </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;