import React from 'react';
import { Check, X } from 'lucide-react';

const Suitability: React.FC = () => {
  return (
    <section className="section section--light !py-10 md:!py-24" id="fit">
      <div className="container">
        <h2 className="!text-3xl md:!text-5xl !mb-4 md:!mb-6 text-center font-bold text-[#2D5A42]">האם הליווי הזה מתאים לך?</h2>
        
        <p className="text-center text-xl md:text-2xl text-slate-700 max-w-3xl mx-auto mb-8 md:mb-16 leading-relaxed font-medium">
          הליווי שלי הוא אישי ומעמיק, ולכן אני בוחר בקפידה את מי שמצטרף לתהליך.
        </p>
        
        {/* Vertical Stack for both Mobile and Desktop */}
        <div className="flex flex-col gap-6 md:gap-12 text-right max-w-3xl mx-auto">
          
          {/* For You Section */}
          <div className="bg-white p-5 md:p-10 rounded-2xl md:rounded-[40px] border-2 border-[#A8D4B8] shadow-lg relative overflow-hidden transition-transform hover:scale-[1.01]">
             <div className="absolute top-0 right-0 w-full h-2 bg-[#A8D4B8]"></div>
             <h3 className="text-2xl md:text-3xl font-bold text-[#2D5A42] mb-4 md:mb-8 flex items-center gap-3">
                <span className="bg-[#E8F5E9] p-2.5 rounded-full"><Check size={24} className="md:w-8 md:h-8 text-[#2D5A42]" /></span>
                זה בול בשבילך אם...
             </h3>
             <ul className="space-y-4 md:space-y-6">
                <li className="flex items-start gap-3">
                    <Check size={20} className="text-[#A8D4B8] mt-1 shrink-0 md:w-6 md:h-6" />
                    <span className="text-sm md:text-lg leading-relaxed font-medium">הבנת שתרופות, תוספי תזונה וטיפולים הן רק ״פלסטר״, ואינם פותרים את הכאב מהשורש.</span>
                </li>
                <li className="flex items-start gap-3">
                    <Check size={20} className="text-[#A8D4B8] mt-1 shrink-0 md:w-6 md:h-6" />
                    <span className="text-sm md:text-lg leading-relaxed font-medium">יש לך נכונות אמיתית לשנות הרגלים כדי להבריא.</span>
                </li>
                <li className="flex items-start gap-3">
                    <Check size={20} className="text-[#A8D4B8] mt-1 shrink-0 md:w-6 md:h-6" />
                    <span className="text-sm md:text-lg leading-relaxed font-medium">את.ה רוצה כלים לחיים ולא להיות תלוי.ה במטפלים.</span>
                </li>
             </ul>
          </div>

          {/* Not For You Section */}
          <div className="bg-slate-50 p-5 md:p-10 rounded-2xl md:rounded-[40px] border-2 border-slate-200 shadow-md relative overflow-hidden opacity-90 transition-transform hover:scale-[1.01]">
             <div className="absolute top-0 right-0 w-full h-2 bg-slate-300"></div>
             <h3 className="text-2xl md:text-3xl font-bold text-slate-600 mb-4 md:mb-8 flex items-center gap-3">
                <span className="bg-slate-200 p-2.5 rounded-full"><X size={24} className="md:w-8 md:h-8 text-slate-600" /></span>
                זה כנראה פחות מתאים אם...
             </h3>
             <ul className="space-y-4 md:space-y-6 text-slate-600">
                <li className="flex items-start gap-3">
                    <X size={24} className="text-red-300 mt-1 shrink-0 md:w-8 md:h-8" />
                    <span className="text-lg md:text-xl leading-relaxed font-medium">
                        את.ה מחפש.ת פתרון קסם שירגיע לך זמנית את הכאב בלי לבצע שום עבודה בכוחות עצמך.
                    </span>
                </li>
             </ul>
          </div>
        </div>
        
        {/* Bottom CTA Section */}
        <div className="cta-row mt-12 md:mt-24 text-center flex flex-col items-center gap-6">
          <p className="text-[#2D5A42] font-extrabold text-2xl md:text-4xl animate-pulse px-4">מצאת את עצמך בצד הירוק? מעולה.</p>
          <a href="#contact-form" className="cta !py-5 !px-10 !text-xl md:!py-6 md:!px-16 md:!text-3xl w-full max-w-sm md:max-w-xl text-center shadow-2xl hover:shadow-primary/30 transition-all transform hover:-translate-y-1">
            לחץ כאן לקבלת שיחת אבחון והתאמה ללא עלות
          </a>
        </div>
      </div>
    </section>
  );
};

export default Suitability;