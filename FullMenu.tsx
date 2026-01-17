import React, { useState } from 'react';
import { Star, Phone } from 'lucide-react';
import { getDishes } from '../data';

interface FullMenuProps {
  onReserve: () => void;
  language: 'en' | 'pt';
}

export const FullMenu: React.FC<FullMenuProps> = ({ onReserve, language }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  
  const dishes = getDishes(language);

  const t = {
    en: {
        culinaryExcellence: "Culinary Excellence",
        completeMenu: "Our Complete Menu",
        all: "All",
        starter: "Starter",
        main: "Main",
        dessert: "Dessert",
        cocktail: "Cocktail",
        reserve: "Reserve Table"
    },
    pt: {
        culinaryExcellence: "Excelência Culinária",
        completeMenu: "O Nosso Menu Completo",
        all: "Todos",
        starter: "Entradas",
        main: "Pratos Principais",
        dessert: "Sobremesas",
        cocktail: "Cocktails",
        reserve: "Reservar Mesa"
    }
  }[language];

  // Map internal category keys to display labels
  const categoryLabels: Record<string, string> = {
    'All': t.all,
    'Starter': t.starter,
    'Main': t.main,
    'Dessert': t.dessert,
    'Cocktail': t.cocktail
  };

  const categories = ['All', 'Starter', 'Main', 'Dessert', 'Cocktail'];

  const filteredDishes = activeCategory === 'All' 
    ? dishes 
    : dishes.filter(d => d.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-12 animate-fade-in relative">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-naval-600 uppercase tracking-widest text-sm font-bold block mb-3">{t.culinaryExcellence}</span>
          <h1 className="font-serif text-4xl md:text-5xl text-slate-800">{t.completeMenu}</h1>
          <div className="w-16 h-0.5 bg-naval-900 mx-auto mt-6"></div>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 border-b border-gray-200 pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`pb-4 px-5 text-base font-bold tracking-widest uppercase transition-all relative ${
                activeCategory === cat 
                  ? 'text-naval-900' 
                  : 'text-slate-400 hover:text-naval-600'
              }`}
            >
              {categoryLabels[cat]}
              {activeCategory === cat && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-naval-900 animate-fade-in"></span>
              )}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredDishes.map((dish) => (
            <div 
              key={dish.id} 
              className="group relative h-[450px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-default bg-gray-900"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={dish.image} 
                  alt={dish.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop";
                    e.currentTarget.className = "w-full h-full object-cover grayscale opacity-50";
                  }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent transition-opacity duration-300" />
              </div>

              {/* Price Tag (Glass Effect) */}
              <div className="absolute top-4 right-4 z-20">
                <div className="bg-black/30 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 text-white shadow-lg">
                  <span className="text-xs font-bold text-naval-300 uppercase mr-1">Kz</span>
                  <span className="text-2xl font-serif font-bold tracking-wide">
                    {dish.price.toLocaleString('pt-AO')}
                  </span>
                </div>
              </div>

              {/* Content (Glassy overlay feel created by gradient + text) */}
              <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex flex-col justify-end h-full pointer-events-none">
                 <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-3xl font-serif text-white mb-2 leading-tight drop-shadow-md group-hover:text-naval-200 transition-colors">
                      {dish.name}
                    </h3>
                    
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          fill="currentColor" 
                          className={`${i < dish.rating ? "text-amber-400" : "text-gray-600"} drop-shadow-sm`} 
                        />
                      ))}
                    </div>

                    <div className="relative overflow-hidden">
                      <p className="text-gray-200 text-base leading-relaxed font-light line-clamp-3 mb-4 group-hover:text-white transition-colors duration-300">
                        {dish.description}
                      </p>
                      
                      {/* Decorative Line */}
                      <div className="w-12 h-0.5 bg-naval-500 group-hover:w-full transition-all duration-700 ease-out"></div>
                    </div>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sticky Floating Action Button (Vertical Side Tab) */}
      <div className="fixed top-1/2 right-0 z-50 -translate-y-1/2 animate-fade-in">
        <button 
          onClick={onReserve}
          className="group bg-naval-900 text-white py-6 px-3 rounded-l-lg shadow-2xl hover:bg-naval-800 transition-all duration-300 animate-pulse-slow flex flex-col items-center gap-4 border-l border-t border-b border-white/20"
          aria-label="Reserve"
        >
          <span className="[writing-mode:vertical-rl] rotate-180 text-sm font-bold tracking-[0.2em] uppercase whitespace-nowrap">
            {t.reserve}
          </span>
          <Phone size={18} className="text-naval-200" />
        </button>
      </div>

    </div>
  );
};