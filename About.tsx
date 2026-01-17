import React from 'react';
import { Anchor, Trophy, Medal, GraduationCap } from 'lucide-react';

interface AboutProps {
  language: 'en' | 'pt';
}

export const About: React.FC<AboutProps> = ({ language }) => {
  const t = {
    en: {
        since: "Est. 1998",
        ourStory: "The Veloria Story",
        yearsHistory: "Years of Culinary Art",
        heritage: "The Heritage",
        title: <>A Symphony of Flavors. <br /><span className="italic text-naval-500">A Legacy of Elegance.</span></>,
        desc: <>Veloria was born from the vision of the Silva family in 1998, transforming a historic seaside villa into Luanda's most exquisite dining destination. We blend traditional Angolan ingredients with modern Mediterranean techniques to create a unique coastal gastronomy.</>,
        excellenceTitle: "Award Winning Cuisine",
        excellenceDesc: "Recognized as the 'Best Modern Seafood' establishment in Luanda for three consecutive years. Our kitchen is a laboratory of taste where innovation meets tradition.",
        communityTitle: "Sustainable Future",
        communityDesc: "We are committed to the ocean that sustains us. Veloria partners with local sustainable fisheries and supports marine conservation projects along the Angolan coast.",
        ourPeople: "Our Artisans",
        meetTeam: "Meet The Team",
        teamDesc: "The passionate visionaries who curate every detail of the Veloria experience."
    },
    pt: {
        since: "Est. 1998",
        ourStory: "A História Veloria",
        yearsHistory: "Anos de Arte Culinária",
        heritage: "A Herança",
        title: <>Uma Sinfonia de Sabores. <br /><span className="italic text-naval-500">Um Legado de Elegância.</span></>,
        desc: <>O Veloria nasceu da visão da família Silva em 1998, transformando uma villa histórica à beira-mar no destino gastronómico mais requintado de Luanda. Combinamos ingredientes tradicionais angolanos com técnicas mediterrânicas modernas para criar uma gastronomia costeira única.</>,
        excellenceTitle: "Culinária Premiada",
        excellenceDesc: "Reconhecido como o estabelecimento de 'Melhor Marisco Moderno' em Luanda por três anos consecutivos. A nossa cozinha é um laboratório de sabor onde a inovação encontra a tradição.",
        communityTitle: "Futuro Sustentável",
        communityDesc: "Estamos comprometidos com o oceano que nos sustenta. O Veloria tem parceria com pescarias sustentáveis locais e apoia projectos de conservação marinha ao longo da costa angolana.",
        ourPeople: "Os Nossos Artesãos",
        meetTeam: "Conheça a Equipa",
        teamDesc: "Os visionários apaixonados que cuidam de cada detalhe da experiência Veloria."
    }
  }[language];

  const team = [
    {
      id: 1,
      name: "Marco Costa",
      role: language === 'en' ? "Executive Chef" : "Chef Executivo",
      image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Elena Silva",
      role: language === 'en' ? "Restaurant Director" : "Directora de Restaurante",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Paulo Santos",
      role: language === 'en' ? "Head Sommelier" : "Sommelier Chefe",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <section className="pt-32 pb-12 bg-white overflow-hidden animate-fade-in">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-naval-600 uppercase tracking-widest text-sm font-bold block mb-3">{t.since}</span>
          <h1 className="font-serif text-4xl md:text-5xl text-slate-800">{t.ourStory}</h1>
          <div className="w-16 h-0.5 bg-naval-900 mx-auto mt-6"></div>
        </div>
        
        {/* Heritage Section */}
        <div className="flex flex-col lg:flex-row gap-16 mb-24">
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-naval-200"></div>
            <img 
              src="https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000&auto=format&fit=crop" 
              alt="Dining Heritage" 
              className="w-full h-[600px] object-cover rounded-sm shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-8 shadow-xl z-20 max-w-xs border border-naval-50 hidden md:block">
              <div className="flex items-center gap-4 mb-2">
                <Trophy className="text-amber-500 w-8 h-8" />
                <span className="font-serif text-3xl font-bold text-naval-900">25+</span>
              </div>
              <p className="text-slate-500 uppercase tracking-widest text-sm">{t.yearsHistory}</p>
            </div>
          </div>

          <div className="lg:w-1/2 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-6">
              <Anchor className="text-naval-600 w-5 h-5" />
              <span className="text-naval-600 uppercase tracking-widest text-sm font-bold">{t.heritage}</span>
            </div>
            
            <h2 className="font-serif text-4xl lg:text-5xl text-slate-800 mb-8 leading-tight">
              {t.title}
            </h2>

            <p className="text-slate-600 leading-relaxed mb-6 font-light text-xl">
              {t.desc}
            </p>

            <div className="space-y-8 mt-4">
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-amber-600">
                  <Medal size={24} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-slate-800 text-lg">{t.excellenceTitle}</h4>
                  <p className="text-slate-600 text-base leading-relaxed mt-1">
                    {t.excellenceDesc}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-naval-50 rounded-full flex items-center justify-center text-naval-600">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-slate-800 text-lg">{t.communityTitle}</h4>
                  <p className="text-slate-600 text-base leading-relaxed mt-1">
                    {t.communityDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="border-t border-slate-100 pt-20">
          <div className="text-center mb-16">
            <span className="text-naval-600 uppercase tracking-widest text-sm font-bold block mb-3">{t.ourPeople}</span>
            <h2 className="font-serif text-4xl text-slate-800">{t.meetTeam}</h2>
            <p className="text-slate-600 mt-4 font-light max-w-2xl mx-auto text-lg">
              {t.teamDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.id} className="group relative">
                <div className="overflow-hidden rounded-xl h-[450px] mb-6 relative">
                  <div className="absolute inset-0 bg-naval-900/20 group-hover:bg-naval-900/0 transition-colors duration-500 z-10"></div>
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-serif text-2xl text-slate-800 mb-1">{member.name}</h3>
                  <p className="text-naval-600 uppercase tracking-widest text-sm font-bold">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};