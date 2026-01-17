import React from 'react';
import { Star, MapPin, Award, Anchor } from 'lucide-react';

interface SocialProofProps {
  language: 'en' | 'pt';
}

export const SocialProof: React.FC<SocialProofProps> = ({ language }) => {
  const t = {
    en: {
        google: 'Google Reviews',
        years: 'Years',
        serving: 'Serving Excellence',
        tripadvisor: 'TripAdvisor'
    },
    pt: {
        google: 'Avaliações Google',
        years: 'Anos',
        serving: 'De Excelência',
        tripadvisor: 'TripAdvisor'
    }
  }[language];

  return (
    <section className="relative bg-white py-20 border-b border-naval-100/50 overflow-hidden">
        {/* Decorative background watermark */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] select-none">
             <Anchor className="absolute -left-12 top-1/2 -translate-y-1/2 w-96 h-96 text-naval-900 transform -rotate-12" />
             <div className="absolute right-0 top-0 w-96 h-96 bg-naval-200 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 text-center">
                
                {/* Item 1: Google */}
                <div className="flex flex-col items-center group">
                    <div className="mb-6 p-4 rounded-full bg-naval-50 text-naval-600 group-hover:bg-naval-600 group-hover:text-white transition-all duration-500 shadow-sm ring-1 ring-naval-100 group-hover:ring-naval-600">
                        <MapPin size={28} strokeWidth={1.5} />
                    </div>
                    <div className="flex items-center justify-center gap-3 mb-2">
                        <span className="font-serif text-5xl md:text-6xl font-bold text-naval-900 leading-none">4.5</span>
                    </div>
                    <div className="flex text-amber-400 gap-1 mb-3">
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" className="opacity-40" />
                    </div>
                    <p className="text-xs font-bold tracking-[0.2em] uppercase text-slate-400 group-hover:text-naval-600 transition-colors">
                        {t.google}
                    </p>
                </div>

                {/* Item 2: Heritage (Center with borders) */}
                <div className="flex flex-col items-center group relative md:border-x md:border-slate-100">
                    <div className="mb-6 p-4 rounded-full bg-naval-50 text-naval-600 group-hover:bg-naval-600 group-hover:text-white transition-all duration-500 shadow-sm ring-1 ring-naval-100 group-hover:ring-naval-600">
                        <Anchor size={28} strokeWidth={1.5} />
                    </div>
                    <div className="flex items-baseline justify-center gap-1 mb-3">
                         <span className="font-serif text-5xl md:text-6xl font-bold text-naval-900 leading-none">25+</span>
                         <span className="font-serif text-2xl text-naval-400 italic opacity-80">{t.years}</span>
                    </div>
                    <p className="text-xs font-bold tracking-[0.2em] uppercase text-slate-400 group-hover:text-naval-600 transition-colors mt-1">
                        {t.serving}
                    </p>
                </div>

                {/* Item 3: TripAdvisor */}
                 <div className="flex flex-col items-center group">
                    <div className="mb-6 p-4 rounded-full bg-naval-50 text-naval-600 group-hover:bg-naval-600 group-hover:text-white transition-all duration-500 shadow-sm ring-1 ring-naval-100 group-hover:ring-naval-600">
                        <Award size={28} strokeWidth={1.5} />
                    </div>
                    <div className="flex items-center justify-center gap-3 mb-2">
                        <span className="font-serif text-5xl md:text-6xl font-bold text-naval-900 leading-none">5.0</span>
                    </div>
                    <div className="flex text-[#00AA6C] gap-1 mb-3">
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                    </div>
                    <p className="text-xs font-bold tracking-[0.2em] uppercase text-slate-400 group-hover:text-naval-600 transition-colors">
                        {t.tripadvisor}
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
};