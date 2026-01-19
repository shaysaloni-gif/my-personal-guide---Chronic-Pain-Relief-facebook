import React, { useState } from 'react';
import { Play } from 'lucide-react';

const Hero: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const scrollToSuitability = () => {
    document.getElementById('fit')?.scrollIntoView({ behavior: 'smooth' });
  };

  const testimonials = [
    { 
      id: 'uiLn_YLrKoU', // Keren
      badge: "דלקת מפרקים",
      name: "קרן, שנות ה-40", 
      details: "דלקת מפרקים (ארתריטיס) - מעל 20 שנה",
      text: "״אני יכולה סוף סוף ללכת יחפה!״",
    },
    { 
      id: 'npWR-Aga74g', // Michal
      badge: "דלקות כרוניות",
      name: "מיכל, שנות ה-60", 
      details: "דלקות באצבעות הידיים ומפרק הירך - מעל 20 שנה",
      text: "״הדלקות באצבעות פשוט נעלמו״",
    },
    { 
      id: 'tGwDSPupAL8', // Daniel
      badge: "מעי רגיז חריף",
      name: "דניאל, שנות ה-30", 
      details: "מעי רגיז חריף עם תסמינים נלווים - 4 שנים",
      text: "״חזרתי לעכל, וזה קרה מהר משחשבתי״",
    }
  ];

  return (
    <section className="section section--dark hero !pb-8 md:!pb-12" id="top">
      <div className="container flex flex-col items-center">
        <div className="logo-wrap !mb-6">
          <img src="https://firebasestorage.googleapis.com/v0/b/studio-2971283909-2f4b3.firebasestorage.app/o/d4d1b2673a36cc47eef7bf407f7e2357.webp?alt=media&token=96cd43eb-ca8f-40c8-b9e3-690fe5c29eed" alt="שי סלוני – לוגו" />
        </div>
        
        <h1 style={{ fontSize: 'clamp(26px, 5.5vw, 48px)' }} className="!mb-4 text-center leading-tight">
          נמאס לך מטיפולים שמתמקדים רק בסימפטומים?
          <br />
          הגעת למקום הנכון.
        </h1>
        
        <div className="hero-text !mb-6 text-center">
          <p className="!text-xl md:!text-3xl opacity-90 leading-relaxed">בוא נגלה את <strong>הגורמים האמיתיים</strong> לכאב שלך וניתן לגוף שלך את התנאים לרפא את עצמו.</p>
        </div>
        
        <div className="cta-row mb-10 flex flex-col items-center">
          <button onClick={scrollToSuitability} className="cta">קבל.י פגישת אבחון ללא עלות!</button>
          <p style={{ marginTop: '10px', color: 'var(--warm)', fontSize: '14px' }}>*הליווי מותנה בבדיקת התאמה ראשונית</p>
        </div>

        <div className="w-full max-w-6xl mx-auto mt-2">
             <p className="text-white text-lg md:text-xl mb-6 font-bold text-center drop-shadow-md">
                הן כבר השתחררו מהכאב. <span className="text-[#E8B86D]">ומה איתך?</span>
             </p>
             
             <div 
               className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible pb-8 snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide"
               style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
             >
                {testimonials.map((t) => (
                    <div 
                        key={t.id} 
                        className="flex-none w-[300px] md:w-auto snap-center bg-[#5D7B6D] rounded-[24px] overflow-hidden shadow-2xl flex flex-col h-full border border-white/5 transition-transform hover:scale-[1.02]"
                        onClick={() => setActiveVideo(t.id)}
                    >
                        {/* Video Container */}
                        <div className="aspect-video bg-black relative flex items-center justify-center overflow-hidden">
                            {/* Prominent Badge */}
                            <div className="absolute top-3 right-3 z-10 bg-[#E8B86D] text-[#1A2B1F] text-[11px] md:text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                                {t.badge}
                            </div>

                            {activeVideo === t.id ? (
                                <iframe 
                                    width="100%" 
                                    height="100%" 
                                    src={`https://www.youtube.com/embed/${t.id}?autoplay=1&rel=0`} 
                                    title={t.name}
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen
                                    className="absolute inset-0"
                                ></iframe>
                            ) : (
                                <div className="relative w-full h-full cursor-pointer group">
                                    <img 
                                        src={`https://img.youtube.com/vi/${t.id}/hqdefault.jpg`} 
                                        alt={t.name}
                                        className="w-full h-full object-cover transition-opacity group-hover:opacity-70"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                                        <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-xl group-hover:scale-110 transition-transform">
                                            <Play className="text-white ml-1" size={32} fill="currentColor" />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        
                        <div className="p-6 text-right flex-grow flex flex-col justify-start gap-1">
                            {/* Quote line */}
                            <p className="text-[#E8B86D] font-bold text-xl md:text-2xl leading-tight mb-2">
                                {t.text}
                            </p>
                            {/* Name line */}
                            <p className="text-white font-bold text-lg leading-snug">
                                {t.name}
                            </p>
                            {/* Condition line */}
                            <p className="text-white/70 text-sm md:text-base leading-snug font-medium">
                                {t.details}
                            </p>
                        </div>
                    </div>
                ))}
             </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;