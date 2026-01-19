import React from 'react';
import { Play } from 'lucide-react';

const VideoTestimonials: React.FC = () => {
  // החלף את ה-src בתוך ה-iframe לקישורים האמיתיים של הסרטונים שלך (YouTube/Vimeo)
  // או תחליף את כל ה-iframe בתגית <video> אם הקובץ יושב אצלך
  const videos = [
    {
      id: 1,
      name: "מיכל, בת 42",
      title: "״אחרי שנים של כדורים, הכאב נעלם״",
      embedHtml: (
        <div className="w-full h-full bg-slate-200 flex flex-col items-center justify-center text-slate-400">
            <Play size={48} className="opacity-50 mb-2" />
            <span className="text-sm">כאן להטמיע וידאו 1</span>
        </div>
      )
    },
    {
      id: 2,
      name: "דני, בן 55",
      title: "״הרופאים אמרו שאין מה לעשות, שי הוכיח אחרת״",
      embedHtml: (
         <div className="w-full h-full bg-slate-200 flex flex-col items-center justify-center text-slate-400">
            <Play size={48} className="opacity-50 mb-2" />
            <span className="text-sm">כאן להטמיע וידאו 2</span>
        </div>
      )
    },
    {
      id: 3,
      name: "רונית, בת 38",
      title: "״חזרתי לישון לילה שלם״",
      embedHtml: (
         <div className="w-full h-full bg-slate-200 flex flex-col items-center justify-center text-slate-400">
            <Play size={48} className="opacity-50 mb-2" />
            <span className="text-sm">כאן להטמיע וידאו 3</span>
        </div>
      )
    }
  ];

  return (
    <section className="section section--cream" id="video-testimonials">
      <div className="container">
        <h2 className="!mb-8 md:!mb-12 text-center font-bold text-[#2D5A42]">
          לא צריך להאמין לי - תראו בעצמכם
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {videos.map((video) => (
            <div key={video.id} className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden border border-[#A8D4B8]/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              {/* Video Container - 16:9 Aspect Ratio */}
              <div className="relative w-full pt-[56.25%] bg-black">
                <div className="absolute top-0 right-0 w-full h-full">
                  {/* כאן נכנס הוידאו */}
                  {video.embedHtml}
                </div>
              </div>
              
              {/* Text Content */}
              <div className="p-5 text-right flex-grow flex flex-col justify-between">
                <div>
                    <h3 className="text-lg font-bold text-[#2D5A42] leading-tight mb-2">
                    {video.title}
                    </h3>
                    <p className="text-slate-600 text-sm font-medium">
                    {video.name}
                    </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-center mt-8 text-[#2D5A42] font-medium opacity-80">
            *אלו רק חלק קטן מהסיפורים המרגשים שאני פוגש בקליניקה יום יום
        </p>
      </div>
    </section>
  );
};

export default VideoTestimonials;