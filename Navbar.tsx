import React, { useState } from 'react';
import { Menu, X, Anchor } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
  language: 'en' | 'pt';
  setLanguage: (lang: 'en' | 'pt') => void;
  onNavigate?: (target: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isScrolled, language, setLanguage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Text color logic based on scroll state
  const textColor = isScrolled ? 'text-naval-900' : 'text-white';
  const mutedColor = isScrolled ? 'text-naval-900/40' : 'text-white/40';
  const hoverColor = isScrolled ? 'hover:text-naval-600' : 'hover:text-naval-300';

  const texts = {
    en: { home: 'Home', menu: 'Menu', about: 'About' },
    pt: { home: 'Início', menu: 'Menu', about: 'Sobre' }
  };
  
  const t = texts[language];

  const handleNavClick = (target: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(target);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm border-b border-naval-100' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-1 flex items-center gap-2">
          <button onClick={(e) => handleNavClick('home', e)} className="flex items-center gap-2">
            <Anchor className={`w-7 h-7 ${isScrolled ? 'text-naval-600' : 'text-white'}`} />
            <span className={`text-3xl font-serif font-bold tracking-widest ${textColor}`}>
              VELORIA
            </span>
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className={`hidden md:flex items-center space-x-12 text-base uppercase tracking-widest font-bold ${
          isScrolled ? 'text-slate-600' : 'text-white'
        }`}>
          <button onClick={(e) => handleNavClick('home', e)} className="hover:text-naval-500 transition-colors">{t.home}</button>
          <button onClick={(e) => handleNavClick('menu', e)} className="hover:text-naval-500 transition-colors">{t.menu}</button>
          <button onClick={(e) => handleNavClick('about', e)} className="hover:text-naval-500 transition-colors">{t.about}</button>
        </nav>

        {/* Language Toggle (Replaces CTA) */}
        <div className="flex-1 flex justify-end items-center">
          <div className={`hidden md:flex items-center gap-3 text-sm font-bold tracking-widest ${textColor}`}>
            <button 
              onClick={() => setLanguage('en')}
              className={`${language === 'en' ? 'border-b-2 border-current pb-0.5' : `opacity-60 ${hoverColor}`} transition-all`}
            >
              EN
            </button>
            <span className={mutedColor}>|</span>
            <button 
              onClick={() => setLanguage('pt')}
              className={`${language === 'pt' ? 'border-b-2 border-current pb-0.5' : `opacity-60 ${hoverColor}`} transition-all`}
            >
              PT
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`md:hidden ${textColor}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 p-8 md:hidden flex flex-col space-y-6 animate-fade-in-down shadow-xl">
          <button onClick={(e) => handleNavClick('home', e)} className="text-slate-700 hover:text-naval-600 py-3 border-b border-gray-100 text-left w-full text-lg font-medium">{t.home}</button>
          <button onClick={(e) => handleNavClick('menu', e)} className="text-slate-700 hover:text-naval-600 py-3 border-b border-gray-100 text-left w-full text-lg font-medium">{t.menu}</button>
          <button onClick={(e) => handleNavClick('about', e)} className="text-slate-700 hover:text-naval-600 py-3 border-b border-gray-100 text-left w-full text-lg font-medium">{t.about}</button>
          
          <div className="flex items-center gap-6 pt-4 justify-center">
             <button 
              onClick={() => setLanguage('en')}
              className={`text-base font-bold tracking-widest ${language === 'en' ? 'text-naval-900 border-b-2 border-naval-900' : 'text-slate-400'}`}
            >
              ENGLISH
            </button>
            <button 
              onClick={() => setLanguage('pt')}
              className={`text-base font-bold tracking-widest ${language === 'pt' ? 'text-naval-900 border-b-2 border-naval-900' : 'text-slate-400'}`}
            >
              PORTUGUÊS
            </button>
          </div>
        </div>
      )}
    </header>
  );
};