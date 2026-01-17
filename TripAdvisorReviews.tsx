import React from 'react';
import { MessageCircle } from 'lucide-react';

interface TripAdvisorReviewsProps {
  language: 'en' | 'pt';
}

export const TripAdvisorReviews: React.FC<TripAdvisorReviewsProps> = ({ language }) => {
  const reviewsEn = [
    {
      id: 1,
      title: "Unforgettable Sunset Dinner",
      content: "The location is simply unbeatable. Watching the sunset over Luanda Bay while enjoying the freshest lobster I've ever had was a highlight of our trip. The service was impeccable and the wine list is extensive.",
      author: "Sarah Jenkins",
      date: "October 2023",
      rating: 5
    },
    {
      id: 2,
      title: "Authentic & Elegant",
      content: "A perfect blend of Portuguese tradition and Angolan hospitality. The Octopus Lagareiro was cooked to perfection—tender and flavorful. Highly recommend booking in advance as it gets quite popular.",
      author: "Miguel Santos",
      date: "December 2023",
      rating: 5
    },
    {
      id: 3,
      title: "Best Seafood in Luanda",
      content: "If you are looking for high-end dining in Luanda, this is the place. The ambiance is sophisticated yet relaxing. The staff are knowledgeable about the menu and provided excellent recommendations.",
      author: "David Chen",
      date: "January 2024",
      rating: 5
    }
  ];

  const reviewsPt = [
    {
      id: 1,
      title: "Jantar ao Pôr do Sol Inesquecível",
      content: "A localização é simplesmente imbatível. Ver o pôr do sol sobre a Baía de Luanda enquanto desfrutava da lagosta mais fresca que já comi foi o ponto alto da nossa viagem. O serviço foi impecável e a carta de vinhos é extensa.",
      author: "Sarah Jenkins",
      date: "Outubro 2023",
      rating: 5
    },
    {
      id: 2,
      title: "Autêntico e Elegante",
      content: "Uma mistura perfeita da tradição portuguesa e hospitalidade angolana. O Polvo à Lagareiro estava cozinhado na perfeição—tenro e saboroso. Recomendo vivamente reservar com antecedência, pois é bastante popular.",
      author: "Miguel Santos",
      date: "Dezembro 2023",
      rating: 5
    },
    {
      id: 3,
      title: "O Melhor Marisco em Luanda",
      content: "Se procura um jantar de alta qualidade em Luanda, este é o lugar. O ambiente é sofisticado mas relaxante. A equipa conhece bem o menu e deu excelentes recomendações.",
      author: "David Chen",
      date: "Janeiro 2024",
      rating: 5
    }
  ];

  const reviews = language === 'en' ? reviewsEn : reviewsPt;
  
  const t = {
    en: {
        excellent: "Excellent",
        whatGuestsSay: "What Our Guests Say",
        verified: "Verified Reviews from TripAdvisor",
        visitedIn: "Visited in",
        readAll: "Read All Reviews on TripAdvisor"
    },
    pt: {
        excellent: "Excelente",
        whatGuestsSay: "O Que Dizem os Clientes",
        verified: "Avaliações Verificadas do TripAdvisor",
        visitedIn: "Visitou em",
        readAll: "Ler Todas as Avaliações no TripAdvisor"
    }
  }[language];

  return (
    <section className="py-24 bg-white border-t border-slate-50">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-6">
                <span className="font-bold text-slate-900 text-xl">{t.excellent}</span>
                 <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="w-6 h-6 rounded-full bg-[#00AA6C] flex items-center justify-center">
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                    ))}
                 </div>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-slate-800 mb-4">{t.whatGuestsSay}</h2>
            <p className="text-slate-400 uppercase tracking-widest text-base font-bold">{t.verified}</p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review) => (
                <div key={review.id} className="bg-slate-50 p-8 rounded-lg border border-slate-100 relative group hover:shadow-lg transition-all duration-300">
                    {/* Quote Decor */}
                    <div className="absolute top-6 right-6 text-slate-200 group-hover:text-slate-300 transition-colors">
                        <MessageCircle size={36} strokeWidth={1} />
                    </div>

                    {/* Rating Dots */}
                    <div className="flex gap-1.5 mb-5">
                        {[...Array(review.rating)].map((_, i) => (
                             <div key={i} className="w-3.5 h-3.5 rounded-full bg-[#00AA6C]"></div>
                        ))}
                    </div>

                    <h3 className="font-bold text-slate-800 text-2xl mb-4">"{review.title}"</h3>
                    <p className="text-slate-600 font-light text-lg leading-relaxed italic mb-8 line-clamp-4">
                        {review.content}
                    </p>
                    
                    <div className="mt-auto pt-4 border-t border-slate-200/60">
                        <p className="text-base font-bold text-slate-900 uppercase tracking-wider">{review.author}</p>
                        <p className="text-sm text-slate-400 mt-1">{t.visitedIn} {review.date}</p>
                    </div>
                </div>
            ))}
        </div>
        
        <div className="text-center mt-12">
            <a 
              href="https://www.tripadvisor.com/Restaurant_Review-g293763-d23755522-Reviews-Restaurante_O_Naval-Luanda_Luanda_Province.html" 
              target="_blank" 
              rel="noreferrer"
              className="inline-block px-10 py-4 bg-white border border-slate-200 rounded-full text-slate-700 font-bold text-base uppercase tracking-widest hover:bg-[#00AA6C] hover:text-white hover:border-[#00AA6C] transition-all shadow-sm"
            >
                {t.readAll}
            </a>
        </div>

      </div>
    </section>
  );
};