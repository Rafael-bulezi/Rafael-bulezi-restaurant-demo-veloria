import React from 'react';
import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'pt';
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = {
    en: {
        desc: "A landmark of modern gastronomy. Tradition, innovation, and the best view of the ocean.",
        contacts: "Contacts",
        openingHours: "Opening Hours",
        lunch: "Lunch",
        dinner: "Dinner",
        openDaily: "Open every day",
        privacy: "Privacy",
        terms: "Terms",
        rights: "All rights reserved."
    },
    pt: {
        desc: "Um marco da gastronomia moderna. Tradição, inovação e a melhor vista do oceano.",
        contacts: "Contactos",
        openingHours: "Horário",
        lunch: "Almoço",
        dinner: "Jantar",
        openDaily: "Aberto todos os dias",
        privacy: "Privacidade",
        terms: "Termos",
        rights: "Todos os direitos reservados."
    }
  }[language];

  return (
    <footer className="bg-naval-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-center md:text-left">
          
          <div className="md:col-span-1">
            <h2 className="text-4xl font-serif font-bold tracking-wider mb-6">VELORIA</h2>
            <p className="text-naval-200 text-base leading-relaxed max-w-xs mx-auto md:mx-0">
              {t.desc}
            </p>
            <div className="flex justify-center md:justify-start space-x-6 mt-8">
              <a href="#" aria-label="Instagram" className="text-naval-300 hover:text-white transition-colors"><Instagram size={24} /></a>
              <a href="#" aria-label="Facebook" className="text-naval-300 hover:text-white transition-colors"><Facebook size={24} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-naval-300 uppercase tracking-widest text-sm font-bold mb-6">{t.contacts}</h3>
            <ul className="space-y-4 text-gray-300 text-base font-light">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <MapPin size={18} className="text-naval-400 shrink-0" />
                <span>Av. 4 de Fevereiro, Ilha de Luanda, Angola</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Phone size={18} className="text-naval-400 shrink-0" />
                <span>+244 923 111 222</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Mail size={18} className="text-naval-400 shrink-0" />
                <span>reservations@veloria-luanda.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-naval-300 uppercase tracking-widest text-sm font-bold mb-6 flex items-center justify-center md:justify-start gap-2">
              <Clock size={18} className="text-naval-400" />
              <span>{t.openingHours}</span>
            </h3>
            <ul className="space-y-4 text-gray-300 text-base font-light inline-block text-left w-full max-w-[260px]">
              <li className="flex justify-between items-center border-b border-naval-800/50 pb-2">
                <span className="text-white font-medium">{t.lunch}</span> 
                <span>12:00 - 15:00</span>
              </li>
              <li className="flex justify-between items-center pt-1">
                <span className="text-white font-medium">{t.dinner}</span> 
                <span>19:00 - 23:30</span>
              </li>
              <li className="text-sm text-naval-400 mt-2 italic">{t.openDaily}</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-naval-400">
          <p>&copy; 2024 Veloria Coastal Dining. {t.rights}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">{t.privacy}</a>
            <a href="#" className="hover:text-white">{t.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};