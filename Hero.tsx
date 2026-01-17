import React, { useState, useEffect, useRef } from 'react';
import { Anchor, Utensils, ScrollText, Waves } from 'lucide-react';

interface HeroProps {
  onReserve: () => void;
  language: 'en' | 'pt';
}

// Configuration for background images
const HERO_IMAGES = {
  default: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=1920&auto=format&fit=crop", // Base Ocean View
  fineDining: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1920&auto=format&fit=crop", // Seafood Platter
  menu: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1920&auto=format&fit=crop", // Dark Restaurant Atmosphere
  ocean: "https://images.unsplash.com/photo-1596525166299-136458561d5f?q=80&w=1920&auto=format&fit=crop", // Waves/Water texture
  heritage: "https://images.unsplash.com/photo-1550951298-5c7b95a66b6a?q=80&w=1920&auto=format&fit=crop", // Heritage Placeholder
};

export const Hero: React.FC<HeroProps> = ({ onReserve, language }) => {
  // Start with the first feature active instead of null
  const [activeFeature, setActiveFeature] = useState<number>(0);
  const [isPaused, setIsPaused] = useState(false);
  const [shouldLoadImages, setShouldLoadImages] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  const labels = {
    en: {
        fineDining: { label: "Fine Dining", desc: "Modern Fusion" },
        menu: { label: "Menu Highlights", desc: "Signature Selections" },
        ocean: { label: "Bay View", desc: "Ilha de Luanda" },
        heritage: { label: "Est. 1998", desc: "Family Heritage" },
        reserve: "Reserve A Table"
    },
    pt: {
        fineDining: { label: "Alta Gastronomia", desc: "Fusão Moderna" },
        menu: { label: "Destaques", desc: "Selecção de Assinatura" },
        ocean: { label: "Vista Mar", desc: "Ilha de Luanda" },
        heritage: { label: "Desde 1998", desc: "Herança Familiar" },
        reserve: "Reservar Mesa"
    }
  };

  const t = labels[language];

  const features = [
    { 
      id: 'fineDining',
      icon: Utensils, 
      label: t.fineDining.label, 
      desc: t.fineDining.desc 
    },
    { 
      id: 'menu',
      icon: ScrollText, 
      label: t.menu.label, 
      desc: t.menu.desc 
    },
    { 
      id: 'ocean',
      icon: Waves, 
      label: t.ocean.label, 
      desc: t.ocean.desc 
    },
    { 
      id: 'heritage',
      icon: Anchor, 
      label: t.heritage.label, 
      desc: t.heritage.desc 
    },
  ];

  // Intersection Observer for image loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoadImages(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px', // Start loading slightly before the element is in view
        threshold: 0.1
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Auto-rotation effect
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [isPaused, features.length]);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative h-screen w-full flex flex-col overflow-hidden bg-slate-900"
    >
      
      {/* Background Layer System */}
      <div className="absolute inset-0 z-0">
        {/* Default Image (Base Layer) - serves as a fallback background color/image */}
        {shouldLoadImages && (
          <img 
            src={HERO_IMAGES.default}
            alt="Default Background" 
            className="absolute inset-0 w-full h-full object-cover animate-fade-in"
          />
        )}
        
        {/* Feature Images (Overlay Layers) */}
        {shouldLoadImages && features.map((feature, index) => (
          <img 
            key={feature.id}
            src={HERO_IMAGES[feature.id as keyof typeof HERO_IMAGES]}
            alt={feature.label}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${activeFeature === index ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}

        {/* Global Gradient Overlay - Ensures text is always readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/90 pointer-events-none"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 flex-grow flex flex-col justify-center items-center text-center">
        
        {/* Conditional Center Content based on Feature */}
        {features[activeFeature].id === 'menu' ? (
             <div 
               className="bg-slate-900/80 backdrop-blur-md p-8 md:p-12 rounded-sm border border-naval-500/30 max-w-3xl w-full mx-auto animate-fade-in-down text-left shadow-2xl relative"
               onMouseEnter={() => setIsPaused(true)}
               onMouseLeave={() => setIsPaused(false)}
             >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-naval-400 to-transparent"></div>
                <h3 className="text-white font-serif text-3xl md:text-4xl mb-8 text-center italic tracking-wide">{t.menu.desc}</h3>
                
                <div className="space-y-6">
                    <div className="flex justify-between items-baseline border-b border-white/10 pb-3 group cursor-default">
                        <div className="flex-1">
                            <span className="text-white text-xl font-serif block group-hover:text-naval-300 transition-colors">Arroz de Lavagante</span>
                            <span className="text-slate-400 text-sm italic font-light">Lobster Rice, Carolino, Seafood Broth</span>
                        </div>
                        <span className="text-naval-300 font-bold text-xl ml-4 whitespace-nowrap">98.000 Kz</span>
                    </div>
                    
                    <div className="flex justify-between items-baseline border-b border-white/10 pb-3 group cursor-default">
                        <div className="flex-1">
                            <span className="text-white text-xl font-serif block group-hover:text-naval-300 transition-colors">Garoupa Grelhada</span>
                            <span className="text-slate-400 text-sm italic font-light">Charcoal Grilled Grouper, Vegetables</span>
                        </div>
                        <span className="text-naval-300 font-bold text-xl ml-4 whitespace-nowrap">45.000 Kz</span>
                    </div>

                    <div className="flex justify-between items-baseline border-b border-white/10 pb-3 group cursor-default">
                         <div className="flex-1">
                            <span className="text-white text-xl font-serif block group-hover:text-naval-300 transition-colors">Tiger Prawns</span>
                            <span className="text-slate-400 text-sm italic font-light">Giant Prawns, Garlic Butter</span>
                        </div>
                        <span className="text-naval-300 font-bold text-xl ml-4 whitespace-nowrap">75.000 Kz</span>
                    </div>
                </div>
                
                <div className="mt-8 text-center">
                    <p className="text-slate-500 text-xs uppercase tracking-widest">Prices include VAT</p>
                </div>
             </div>
        ) : (
            <>
                <div className="mb-8 opacity-90 animate-fade-in">
                    <Anchor className="w-16 h-16 text-white drop-shadow-md" strokeWidth={1} />
                </div>
                <div className="mb-14 drop-shadow-2xl">
                    {/* H1: The Hook / Value Proposition */}
                    <h1 className="text-white font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-wide leading-tight animate-fade-in-down max-w-5xl mx-auto">
                    {language === 'en' ? "Luanda's Premier Coastal Dining" : "O Jantar Costeiro de Elite em Luanda"}
                    </h1>
                    
                    {/* H2: The Slogan / Emotional Connection */}
                    <h2 className="text-naval-100 font-serif text-xl md:text-2xl lg:text-3xl italic font-light tracking-widest mt-6 animate-fade-in-down" style={{ animationDelay: '0.2s' }}>
                    {language === 'en' ? "Elegance on the Horizon" : "Elegância no Horizonte"}
                    </h2>
                </div>
            </>
        )}

        {/* Elegant Button CTA */}
        <button 
          onClick={onReserve}
          className={`group relative px-12 py-4 border border-white/40 bg-white/5 backdrop-blur-[2px] overflow-hidden transition-all duration-500 hover:bg-white hover:border-white animate-fade-in ${features[activeFeature].id === 'menu' ? 'mt-8' : ''}`}
          style={{ animationDelay: '0.4s' }}
        >
          <span className="relative z-10 font-serif text-lg md:text-xl tracking-[0.2em] uppercase text-white group-hover:text-naval-900 transition-colors duration-500">
            {t.reserve}
          </span>
        </button>
      </div>

      {/* Bottom Features Strip */}
      <div className="relative z-20 w-full border-t border-white/10 bg-black/40 backdrop-blur-md">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            
            {features.map((feature, index) => (
              <button 
                key={feature.id}
                className="py-8 px-4 flex flex-col items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer group relative w-full bg-transparent border-none"
                onMouseEnter={() => {
                  setActiveFeature(index);
                  setIsPaused(true);
                }}
                onMouseLeave={() => setIsPaused(false)}
                onClick={() => setActiveFeature(index)}
              >
                {/* Active Indicator Line */}
                <div className={`absolute top-0 left-0 w-full h-[2px] bg-white transition-all duration-500 ${activeFeature === index ? 'opacity-100' : 'opacity-0'}`}></div>

                <feature.icon 
                  className={`w-7 h-7 mb-3 transition-all duration-500 ${activeFeature === index ? 'text-white scale-110' : 'text-white/70'}`} 
                  strokeWidth={1.5} 
                />
                <span className={`text-xs md:text-sm uppercase tracking-[0.2em] font-bold transition-opacity duration-300 ${activeFeature === index ? 'text-white' : 'text-white/90'}`}>
                  {feature.label}
                </span>
              </button>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};