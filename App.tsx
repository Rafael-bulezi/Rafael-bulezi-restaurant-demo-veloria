import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { Navbar} from './components/Navbar.tsx';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { MenuGrid } from './components/MenuGrid';
import { MapSection } from './components/MapSection';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { FullMenu } from './components/FullMenu';
import { SocialProof } from './components/SocialProof';
import { TripAdvisorReviews } from './components/TripAdvisorReviews';
import { WhyChooseUs } from './components/WhyChooseUs';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [language, setLanguage] = useState<'en' | 'pt'>('en');
  const [view, setView] = useState<'home' | 'menu' | 'about'>('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openReservation = () => setIsModalOpen(true);
  const closeReservation = () => setIsModalOpen(false);

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-naval-200 selection:text-naval-900">
      <Navbar 
        isScrolled={view !== 'home' || isScrolled} 
        language={language} 
        setLanguage={setLanguage}
        onNavigate={(target) => {
          if (target === 'menu') {
            setView('menu');
          } else if (target === 'about') {
            setView('about');
          } else {
            setView('home');
          }
        }}
      />
      
      <main>
        {view === 'home' && (
          <>
            <Hero 
              onReserve={openReservation} 
              language={language}
            />
            <SocialProof language={language} />
            <MenuGrid 
              onViewFullMenu={() => setView('menu')} 
              onReserve={openReservation}
              language={language}
            />
            <WhyChooseUs language={language} />
            <TripAdvisorReviews language={language} />
            <MapSection language={language} />
            
            {/* Sticky Floating Action Button for Home (Vertical Side Tab) */}
            <div className="fixed top-1/2 right-0 z-50 -translate-y-1/2 animate-fade-in">
              <button 
                onClick={openReservation}
                className="group bg-naval-900 text-white py-6 px-3 rounded-l-lg shadow-2xl hover:bg-naval-800 transition-all duration-300 animate-pulse-slow flex flex-col items-center gap-4 border-l border-t border-b border-white/20"
                aria-label="Reserve"
              >
                <span className="[writing-mode:vertical-rl] rotate-180 text-sm font-bold tracking-[0.2em] uppercase whitespace-nowrap">
                  {language === 'en' ? 'Reserve Table' : 'Reservar Mesa'}
                </span>
                <Phone size={18} className="text-naval-200" />
              </button>
            </div>
          </>
        )}
        
        {view === 'menu' && (
          <FullMenu 
            onReserve={openReservation}
            language={language}
          />
        )}

        {view === 'about' && (
          <About language={language} />
        )}
      </main>

      <Footer language={language} />
      
      {isModalOpen && <ReservationModal onClose={closeReservation} language={language} />}
    </div>
  );
};

export default App;
