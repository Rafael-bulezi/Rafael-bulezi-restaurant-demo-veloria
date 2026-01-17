import React, { useState, useEffect } from 'react';
import { Star, ArrowRight, Trophy, Medal, Info } from 'lucide-react';
import { getDishes } from '../data';

interface MenuGridProps {
  onViewFullMenu: () => void;
  onReserve: () => void;
  language: 'en' | 'pt';
}

export const MenuGrid: React.FC<MenuGridProps> = ({ onViewFullMenu, onReserve, language }) => {
  // Default to the first item (Rank #1) being active.
  const [activeIndex, setActiveIndex] = useState(0); 
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  
  const dishes = getDishes(language);
  const topPicks = dishes.slice(0, 3);

  const t = {
    en: {
        guestFavorites: "Guest Favorites",
        desc: "Our most celebrated dishes, ranked by popularity and critic acclaim. Click to explore details.",
        place1: "1st Place",
        place2: "2nd Place",
        place3: "3rd Place",
        reserve: "Reserve Table",
        viewComplete: "View Complete Menu"
    },
    pt: {
        guestFavorites: "Favoritos dos Clientes",
        desc: "Os nossos pratos mais celebrados, classificados por popularidade e crítica. Clique para ver detalhes.",
        place1: "1º Lugar",
        place2: "2º Lugar",
        place3: "3º Lugar",
        reserve: "Reservar Mesa",
        viewComplete: "Ver Menu Completo"
    }
  }[language];

  // Reset description visibility when changing active dish
  useEffect(() => {
    setIsDescriptionVisible(false);
  }, [activeIndex]);

  const getRankingBadge = (index: number) => {
    switch(index) {
      case 0: return { 
        bg: 'bg-yellow-400', 
        text: 'text-yellow-950', 
        label: t.place1,
        icon: Trophy 
      };
      case 1: return { 
        bg: 'bg-slate-300', 
        text: 'text-slate-900', 
        label: t.place2,
        icon: Medal 
      };
      case 2: return { 
        bg: 'bg-orange-300', 
        text: 'text-orange-950', 
        label: t.place3,
        icon: Medal 
      };
      default: return null;
    }
  };

  return (
    <section id="menu" className="py-24 bg-naval-50">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-6xl text-slate-800 mb-6">{t.guestFavorites}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto font-light leading-relaxed text-lg">
            {t.desc}
          </p>
        </div>

        {/* Carousel / Accordion */}
        <div className="flex flex-col md:flex-row gap-4 mb-16 h-[800px] md:h-[650px] transition-all duration-500">
          {topPicks.map((dish, index) => {
            const isActive = index === activeIndex;
            const badge = getRankingBadge(index);
            const BadgeIcon = badge?.icon || Star;
            
            return (
              <button 
                key={dish.id} 
                onClick={() => setActiveIndex(index)}
                className={`group relative bg-white rounded-3xl overflow-hidden shadow-xl transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] cursor-pointer
                  ${isActive ? 'md:flex-[4] flex-[3]' : 'md:flex-[1] flex-[1]'}
                  flex-shrink-0 flex flex-col text-left border-none p-0
                `}
                aria-label={`View details for ${dish.name}`}
              >
                {/* Ranking Badge */}
                {badge && (
                  <div className={`absolute top-0 left-0 z-30 px-5 py-3 rounded-br-2xl font-bold uppercase tracking-widest text-xs md:text-sm shadow-md flex items-center gap-2 transition-all duration-500 ${badge.bg} ${badge.text} ${isActive ? 'opacity-100' : 'opacity-90 scale-90 origin-top-left'}`}>
                    <BadgeIcon size={16} strokeWidth={2.5} />
                    <span>{badge.label}</span>
                  </div>
                )}

                {/* Image Section - occupies full height, overlaid by content */}
                <div className="absolute inset-0 z-0">
                  {/* Darker gradient for better text contrast */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-70'}`}></div>
                  <img 
                    src={dish.image} 
                    alt={dish.name} 
                    className={`w-full h-full object-cover transition-transform duration-1000 ${isActive ? 'scale-100' : 'scale-110 group-hover:scale-105'}`}
                  />
                </div>
                
                {/* Content Overlay */}
                <div className={`absolute bottom-0 left-0 w-full p-4 md:p-6 z-20 flex flex-col justify-end transition-all duration-500 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 md:opacity-100'}`}>
                    
                    {/* Active State Content - Compact Dark Glass Card */}
                    <div className={`${isActive ? 'block' : 'hidden'} w-full md:w-auto`}>
                      <div 
                        className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-xl transition-all duration-500 ease-in-out w-full md:max-w-md"
                        onMouseLeave={() => setIsDescriptionVisible(false)}
                      >
                        <h3 className="font-serif text-3xl md:text-4xl text-white mb-4 leading-tight drop-shadow-md">
                          {dish.name}
                        </h3>
                        
                        <div className="flex items-center gap-4 mb-4">
                           <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg text-white font-serif text-xl border border-white/20">
                              {dish.price.toLocaleString('pt-AO')} Kz
                           </div>
                           <div className="flex text-amber-400 drop-shadow-sm">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} size={18} fill="currentColor" className={i < dish.rating ? "opacity-100" : "opacity-30"} />
                              ))}
                           </div>
                           
                           {/* Info Icon Button - Triggers Expansion */}
                           <div 
                             role="button"
                             tabIndex={0}
                             className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/40 transition-all ml-auto shadow-lg cursor-pointer"
                             onMouseEnter={() => setIsDescriptionVisible(true)}
                             aria-label="Show description"
                             onClick={(e) => {
                               e.stopPropagation();
                               setIsDescriptionVisible(!isDescriptionVisible);
                             }}
                             onKeyDown={(e) => {
                               if (e.key === 'Enter' || e.key === ' ') {
                                  e.stopPropagation();
                                  setIsDescriptionVisible(!isDescriptionVisible);
                               }
                             }}
                           >
                             <Info size={22} />
                           </div>
                        </div>

                        {/* Expandable Description */}
                        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isDescriptionVisible ? 'max-h-40 opacity-100 mb-6' : 'max-h-0 opacity-0 mb-0'}`}>
                           <p className="text-white/95 text-lg leading-relaxed drop-shadow-sm font-sans border-l-2 border-white/30 pl-4">
                            {dish.description}
                          </p>
                        </div>

                        <button 
                          onClick={(e) => { e.stopPropagation(); onReserve(); }}
                          className="w-full bg-white text-naval-900 hover:bg-naval-50 px-8 py-3.5 rounded-xl font-bold uppercase tracking-widest text-sm transition-colors shadow-lg"
                        >
                          {t.reserve}
                        </button>
                      </div>
                    </div>

                    {/* Inactive State Content (Only visible on desktop/large screens in collapsed state) */}
                    {!isActive && (
                      <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none">
                         <h3 className="font-serif text-white text-3xl tracking-[0.2em] uppercase whitespace-nowrap [writing-mode:vertical-rl] rotate-180 drop-shadow-2xl opacity-95">
                           {dish.name}
                         </h3>
                      </div>
                    )}
                     
                     {/* Inactive State Content (Mobile) */}
                     {!isActive && (
                      <div className="md:hidden absolute bottom-6 left-6 pointer-events-none">
                         <h3 className="font-serif text-white text-2xl font-bold drop-shadow-xl">
                           {dish.name}
                         </h3>
                      </div>
                    )}

                </div>
                
              </button>
            );
          })}
        </div>

        {/* Footer Link */}
        <div className="flex justify-center">
          <button 
            onClick={onViewFullMenu}
            className="group flex items-center gap-3 text-naval-900 font-bold uppercase tracking-widest text-sm transition-colors"
          >
            <span className="border-b border-naval-900 group-hover:border-naval-500 group-hover:text-naval-500 pb-1 transition-all">{t.viewComplete}</span> 
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

      </div>
    </section>
  );
};