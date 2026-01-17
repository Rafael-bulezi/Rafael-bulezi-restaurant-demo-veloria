import React from 'react';
import { X, Phone, Clock } from 'lucide-react';

interface Props {
  onClose: () => void;
  language: 'en' | 'pt';
}

export const ReservationModal: React.FC<Props> = ({ onClose, language }) => {
  const t = {
    en: {
        title: "Reservations",
        desc: "We prefer a personal touch. To book your table at Veloria, please contact us directly.",
        call: "Call",
        serviceHours: "Service Hours",
        openDaily: "Open Daily, 12:00 - 23:30"
    },
    pt: {
        title: "Reservas",
        desc: "Preferimos um toque pessoal. Para reservar a sua mesa no Veloria, por favor contacte-nos directamente.",
        call: "Ligar",
        serviceHours: "Horário de Serviço",
        openDaily: "Aberto Diariamente, 12:00 - 23:30"
    }
  }[language];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-naval-900/60 backdrop-blur-sm p-4 animate-fade-in" onClick={onClose}>
      <div className="bg-white w-full max-w-sm rounded-xl shadow-2xl relative overflow-hidden" onClick={(e) => e.stopPropagation()}>
        
        {/* Close Button */}
        <div className="absolute top-4 right-4 z-10">
          <button onClick={onClose} aria-label="Close" className="text-slate-400 hover:text-naval-600 transition-colors bg-slate-50 rounded-full p-2 hover:bg-slate-100">
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-col items-center text-center p-8 pt-10">
          <div className="w-16 h-16 bg-naval-50 rounded-full flex items-center justify-center mb-6 shadow-inner">
            <Phone className="text-naval-600 w-8 h-8" strokeWidth={1.5} />
          </div>
          
          <h3 className="font-serif text-3xl text-naval-900 mb-2">{t.title}</h3>
          
          <p className="text-slate-600 text-base leading-relaxed mb-8 px-4 font-light">
            {t.desc}
          </p>

          <a 
            href="tel:+244923111222"
            className="w-full bg-naval-600 text-white font-bold py-4 rounded-lg uppercase tracking-widest hover:bg-naval-700 transition-all shadow-lg shadow-naval-200/50 flex items-center justify-center gap-3 text-base transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>{t.call} +244 923 111 222</span>
          </a>

          <div className="mt-8 pt-6 border-t border-slate-100 w-full">
            <div className="flex items-center justify-center gap-2 text-naval-400 text-xs uppercase tracking-[0.2em] font-bold mb-2">
              <Clock size={14} />
              <span>{t.serviceHours}</span>
            </div>
            <p className="text-slate-700 text-base font-serif italic">{t.openDaily}</p>
          </div>
        </div>
      </div>
    </div>
  );
};