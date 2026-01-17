import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Savannah Nguyen",
    role: "Food Critic",
    content: "The atmosphere is chill and cool but the staff is also really friendly. They know what they're doing and what they're talking about, and you can tell making the customers happy is their main priority.",
    avatar: "https://picsum.photos/100/100?random=10"
  },
  {
    id: 2,
    name: "Esther Howard",
    role: "Sommelier",
    content: "An absolute gem in the city. The wine pairing with the Wagyu Risotto was a revelation. It's rare to find such attention to detail in every single element of the service.",
    avatar: "https://picsum.photos/100/100?random=11"
  },
  {
    id: 3,
    name: "Cameron Williamson",
    role: "Chef",
    content: "Inspiring flavors and presentation. Veloura doesn't just serve food; they serve art. The flavor profile of the signature dish was balanced to perfection.",
    avatar: "https://picsum.photos/100/100?random=12"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-dark-900 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold-500 uppercase tracking-widest text-xs font-bold block mb-4">Guest Stories</span>
          <h2 className="font-serif text-4xl text-white">What Our Patrons Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-dark-800 p-8 rounded-tr-[3rem] rounded-bl-[3rem] border border-dark-700 relative hover:border-gold-500/30 transition-colors">
              <Quote className="absolute top-6 left-6 text-gold-900 w-12 h-12 rotate-180" />
              <p className="text-gray-400 font-light italic leading-relaxed mb-8 relative z-10 pt-4">
                "{t.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover border border-gold-500/50" />
                <div>
                  <h4 className="text-white font-serif tracking-wide">{t.name}</h4>
                  <p className="text-gold-500 text-xs uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};