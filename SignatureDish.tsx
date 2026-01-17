import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { FlavorProfileData } from '../types';

const data: FlavorProfileData[] = [
  { subject: 'Umami', A: 95, fullMark: 100 },
  { subject: 'Sweet', A: 30, fullMark: 100 },
  { subject: 'Sour', A: 20, fullMark: 100 },
  { subject: 'Salty', A: 60, fullMark: 100 },
  { subject: 'Bitter', A: 40, fullMark: 100 },
  { subject: 'Spicy', A: 10, fullMark: 100 },
];

export const SignatureDish: React.FC = () => {
  return (
    <section id="signature" className="py-24 bg-dark-900 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <span className="text-gold-500 uppercase tracking-widest text-xs font-bold mb-4 block">Signature Selection</span>
            <h2 className="font-serif text-4xl md:text-6xl text-white mb-6">
              Wagyu Truffle <span className="italic text-gold-300">Risotto</span>
            </h2>
            <p className="text-gray-400 leading-loose mb-8 text-lg font-light">
              Our Wagyu Truffle Risotto combines richness of creamy Arborio rice with earthy aroma of Black Truffle. Each bite is elevated with tender slices of Premium A5 Wagyu, Parmesan Shavings, and a delicate drizzle of White Truffle Oil. A dish designed to deliver depth, comfort, and pure elegance in every spoonful.
            </p>
            
            <div className="mb-8">
              <h3 className="text-white uppercase tracking-wider text-sm mb-4 border-b border-dark-700 pb-2 inline-block">Flavor Profile</h3>
              <div className="h-[250px] w-full max-w-md bg-dark-800/50 rounded-xl p-4 border border-dark-700">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
                    <PolarGrid stroke="#444" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#9CA3AF', fontSize: 12 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                    <Radar
                      name="Wagyu Risotto"
                      dataKey="A"
                      stroke="#D4AF37"
                      strokeWidth={2}
                      fill="#D4AF37"
                      fillOpacity={0.4}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <button className="text-gold-500 hover:text-white transition-colors border-b border-gold-500 hover:border-white pb-1 uppercase text-xs tracking-widest">
              View Full Menu Details
            </button>
          </div>

          {/* Image Side */}
          <div className="lg:w-1/2 order-1 lg:order-2 relative">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
              <div className="absolute inset-0 border border-gold-500/30 transform translate-x-4 translate-y-4"></div>
              <img 
                src="https://picsum.photos/600/800?random=1" 
                alt="Wagyu Risotto" 
                className="w-full h-full object-cover relative z-10 shadow-2xl"
              />
              <div className="absolute -bottom-10 -left-10 bg-dark-800 p-6 shadow-xl border border-dark-700 z-20 hidden md:block">
                <p className="font-serif text-3xl text-gold-500 italic">$85</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Market Price</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};