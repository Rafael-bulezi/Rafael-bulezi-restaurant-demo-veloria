import React from 'react';

interface MapSectionProps {
  language: 'en' | 'pt';
}

export const MapSection: React.FC<MapSectionProps> = ({ language }) => {
  const t = {
    en: {
        findUs: "Find Us",
        getDirections: "Get Directions"
    },
    pt: {
        findUs: "Localização",
        getDirections: "Como Chegar"
    }
  }[language];

  return (
    <section id="location" className="py-0 bg-white border-t border-gray-100">
      <div className="w-full h-[450px] bg-gray-100 relative">
        <iframe 
          width="100%" 
          height="100%" 
          frameBorder="0" 
          scrolling="no" 
          marginHeight={0} 
          marginWidth={0} 
          src="https://maps.google.com/maps?q=-8.780962,13.232773&hl=en&z=15&output=embed"
          title="Veloria Location"
          aria-label="Veloria Location Map"
          className="absolute inset-0"
        >
        </iframe>
      </div>
      <div className="bg-naval-900 py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-white gap-4">
           <div className="text-center md:text-left">
              <h3 className="font-serif text-2xl font-bold mb-1">{t.findUs}</h3>
              <p className="text-naval-200 text-base font-light">Av. 4 de Fevereiro, Ilha de Luanda</p>
           </div>
           <a 
             href="https://www.google.com/maps/search/?api=1&query=-8.780962,13.232773" 
             target="_blank" 
             rel="noopener noreferrer"
             className="px-8 py-3 border border-white/30 hover:bg-white hover:text-naval-900 transition-colors text-base uppercase tracking-widest font-bold"
           >
             {t.getDirections}
           </a>
        </div>
      </div>
    </section>
  );
};