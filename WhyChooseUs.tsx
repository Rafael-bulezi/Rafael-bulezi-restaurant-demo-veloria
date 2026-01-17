import React from 'react';
import { ShieldCheck, Languages, CreditCard, Fish, Globe, Sun } from 'lucide-react';

interface WhyChooseUsProps {
  language: 'en' | 'pt';
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ language }) => {
  const content = {
    en: {
      tagline: "International Standards",
      title: "Why Global Travelers Choose Veloria",
      description: "Visiting Angola? Experience the perfect blend of safety, convenience, and authentic flavor. We are the top-rated choice for expats, diplomats, and tourists in Luanda.",
      features: [
        {
          icon: ShieldCheck,
          title: "Safe & Secure Location",
          desc: "Located within the private Veloria Estate, offering 24/7 security and valet parking in the heart of the Ilha."
        },
        {
          icon: Languages,
          title: "English Speaking Staff",
          desc: "Our hospitality team is fluent in English and Portuguese, ensuring a smooth and welcoming dining experience."
        },
        {
          icon: CreditCard,
          title: "International Payments",
          desc: "We accept major international credit cards (Visa, Mastercard) and foreign currency, removing payment friction."
        },
        {
          icon: Fish,
          title: "Hygiene Certified",
          desc: "We adhere to strict international food safety and hygiene standards. Fresh seafood, safely prepared."
        }
      ]
    },
    pt: {
      tagline: "Padrões Internacionais",
      title: "A Escolha dos Viajantes Globais",
      description: "A visitar Angola? Experimente a mistura perfeita de segurança, conveniência e sabor autêntico. Somos a escolha preferida de expatriados, diplomatas e turistas em Luanda.",
      features: [
        {
          icon: ShieldCheck,
          title: "Localização Segura",
          desc: "Localizado dentro da propriedade privada Veloria, com segurança 24/7 e valet parking no coração da Ilha."
        },
        {
          icon: Languages,
          title: "Equipa Bilingue",
          desc: "A nossa equipa de hospitalidade é fluente em Inglês e Português, garantindo uma experiência acolhedora."
        },
        {
          icon: CreditCard,
          title: "Pagamentos Internacionais",
          desc: "Aceitamos os principais cartões de crédito internacionais (Visa, Mastercard) e moeda estrangeira."
        },
        {
          icon: Fish,
          title: "Certificado de Higiene",
          desc: "Cumprimos rigorosos padrões internacionais de segurança alimentar e higiene. Marisco fresco, preparado com segurança."
        }
      ]
    }
  }[language];

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-naval-800/20 skew-x-12 transform translate-x-20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-naval-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-naval-300 font-bold uppercase tracking-widest text-sm mb-4">
              <Globe size={16} />
              <span>{content.tagline}</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">
              {content.title}
            </h2>
            <p className="text-slate-300 text-lg font-light leading-relaxed">
              {content.description}
            </p>
          </div>
          
          {/* SEO Badge */}
          <div className="hidden md:flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10">
             <div className="bg-amber-400 rounded-full p-2 text-naval-900">
                <Sun size={24} fill="currentColor" />
             </div>
             <div>
                <p className="text-white font-bold text-sm">#1 Seafood Destination</p>
                <p className="text-slate-400 text-xs">Luanda Travel Guide 2024</p>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.features.map((feature, idx) => (
            <div key={idx} className="bg-slate-800/50 hover:bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-naval-500 transition-all duration-300 group">
              <div className="w-14 h-14 bg-naval-900 rounded-xl flex items-center justify-center text-naval-300 group-hover:bg-naval-500 group-hover:text-white transition-colors mb-6">
                <feature.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif text-white mb-3 group-hover:text-naval-200 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-400 text-base leading-relaxed group-hover:text-slate-300">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};