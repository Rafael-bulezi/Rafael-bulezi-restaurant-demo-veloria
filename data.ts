import { Dish } from './types';

const dishesEn: Dish[] = [
  // --- Signature / Top Rated ---
  {
    id: 1,
    name: "Arroz de Lavagante",
    description: "Our legendary Lobster Rice. Succulent Atlantic lobster cooked in a rich, aromatic seafood broth with Carolino rice. Served in a traditional iron pot.",
    price: 98000,
    rating: 5,
    category: "Main",
    image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Polvo à Lagareiro",
    description: "Tender octopus tentacles roasted with abundant olive oil, garlic, and 'punched' baked potatoes. A national icon.",
    price: 48000,
    rating: 5,
    category: "Main",
    image: "https://images.unsplash.com/photo-1599321955726-9048b5b930dc?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Lagosta Grelhada",
    description: "Fresh Spiny Lobster, grilled to perfection with a lemon and herb butter sauce. Served with steamed seasonal vegetables.",
    price: 85000,
    rating: 5,
    category: "Main",
    image: "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&w=800&auto=format&fit=crop"
  },

  // --- Starters ---
  {
    id: 4,
    name: "Couvert Veloria",
    description: "Selection of artisanal breads, marinated olives, tuna pâté, and regional butter.",
    price: 4500,
    rating: 4,
    category: "Starter",
    image: "https://images.unsplash.com/photo-1576615278693-f7e0b1e45797?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Sopa de Peixe",
    description: "Rich and comforting fish soup, prepared with the catch of the day, croutons, and a hint of coriander.",
    price: 8000,
    rating: 4,
    category: "Starter",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    name: "Ameijoas à Bulhão Pato",
    description: "Fresh clams sautéed in olive oil, garlic, white wine, and fresh coriander. The quintessential starter.",
    price: 24000,
    rating: 5,
    category: "Starter",
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 7,
    name: "Gambas à Guilho",
    description: "Prawns sautéed in spicy garlic oil, chili, and brandy.",
    price: 22000,
    rating: 4,
    category: "Starter",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 8,
    name: "Ostras do Namibe",
    description: "Half-dozen fresh oysters from the Namibe coast, served on ice with lemon.",
    price: 18000,
    rating: 5,
    category: "Starter",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 9,
    name: "Salada de Polvo",
    description: "Refreshing octopus salad with chopped onions, peppers, and vinaigrette.",
    price: 16000,
    rating: 4,
    category: "Starter",
    image: "https://images.unsplash.com/photo-1553163147-622ab57be1c7?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 10,
    name: "Carpaccio de Novilho",
    description: "Thinly sliced beef tenderloin with arugula, capers, parmesan shavings, and truffle oil.",
    price: 26000,
    rating: 4,
    category: "Starter",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop"
  },

  // --- Mains (Fish & Seafood) ---
  {
    id: 11,
    name: "Arroz de Marisco",
    description: "Traditional seafood rice stew with shrimp, clams, mussels, and crab.",
    price: 65000,
    rating: 5,
    category: "Main",
    image: "https://images.unsplash.com/photo-1560684352-8497838a2229?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 12,
    name: "Garoupa Grelhada",
    description: "Fresh Grouper fillet grilled over charcoal, served with boiled potatoes and vegetables.",
    price: 45000,
    rating: 5,
    category: "Main",
    image: "https://images.unsplash.com/photo-1580476262798-bddd9dd90d3e?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 13,
    name: "Robalo ao Sal",
    description: "Wild Seabass baked in a sea salt crust to preserve moisture and flavor. Served tableside.",
    price: 55000,
    rating: 5,
    category: "Main",
    image: "https://images.unsplash.com/photo-1615141982880-1313d41813f1?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 14,
    name: "Tiger Prawns (Tigres)",
    description: "Giant Tiger Prawns (approx 300g each) grilled with garlic butter and piripiri sauce.",
    price: 75000,
    rating: 5,
    category: "Main",
    image: "https://images.unsplash.com/photo-1625937751876-4515cd8e78bd?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 15,
    name: "Massada de Cherne",
    description: "Rich pasta stew with chunks of Wreckfish (Cherne), mint, and prawns.",
    price: 42000,
    rating: 4,
    category: "Main",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 16,
    name: "Bacalhau à Lagareiro",
    description: "Salted codfish loin roasted with olive oil, garlic, and onions. A Portuguese classic.",
    price: 46000,
    rating: 5,
    category: "Main",
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 17,
    name: "Bacalhau com Natas",
    description: "Oven-baked shredded codfish with cream, onions, and potato dice gratin.",
    price: 38000,
    rating: 5,
    category: "Main",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd43ea?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 18,
    name: "Cataplana de Marisco",
    description: "A steamed seafood stew (clams, shrimp, fish) cooked in the traditional copper Cataplana.",
    price: 70000,
    rating: 5,
    category: "Main",
    image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?q=80&w=800&auto=format&fit=crop"
  },

  // --- Mains (Meat) ---
  {
    id: 19,
    name: "Bife à Portuguesa",
    description: "Sirloin steak pan-fried in garlic and wine sauce, topped with ham and a fried egg. Served with round fries.",
    price: 38000,
    rating: 4,
    category: "Main",
    image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 20,
    name: "Bife da Vazia Grelhado",
    description: "Grilled Sirloin steak with coarse salt, served with fries and cream spinach.",
    price: 36000,
    rating: 4,
    category: "Main",
    image: "https://images.unsplash.com/photo-1558030006-d35974212719?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 21,
    name: "Picanha Fatiada",
    description: "Sliced Picanha (Rump Cap) grilled, served with black beans, rice, and farofa.",
    price: 34000,
    rating: 4,
    category: "Main",
    image: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?q=80&w=800&auto=format&fit=crop"
  },

  // --- Desserts ---
  {
    id: 22,
    name: "Pastel de Nata",
    description: "Warm Portuguese custard tart.",
    price: 2500,
    rating: 5,
    category: "Dessert",
    image: "https://images.unsplash.com/photo-1584278860047-22db9ff82bed?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 23,
    name: "Mousse de Chocolate",
    description: "Rich and airy dark chocolate mousse.",
    price: 10000,
    rating: 5,
    category: "Dessert",
    image: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 24,
    name: "Mousse de Maracujá",
    description: "Fresh passion fruit mousse.",
    price: 12000,
    rating: 5,
    category: "Dessert",
    image: "https://images.unsplash.com/photo-1517325240228-566b6c703b6d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 25,
    name: "Serradura",
    description: "'Sawdust' pudding - layers of vanilla cream and crushed tea biscuits.",
    price: 11000,
    rating: 4,
    category: "Dessert",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 26,
    name: "Leite Creme",
    description: "Portuguese crème brûlée with a burnt sugar crust.",
    price: 12000,
    rating: 5,
    category: "Dessert",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 27,
    name: "Petit Gâteau",
    description: "Chocolate fondant cake served with vanilla ice cream.",
    price: 14000,
    rating: 5,
    category: "Dessert",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 28,
    name: "Fruta Laminada",
    description: "Seasonal tropical fruit platter.",
    price: 9000,
    rating: 4,
    category: "Dessert",
    image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=800&auto=format&fit=crop"
  },

  // --- Cocktails ---
  {
    id: 29,
    name: "Caipirinha",
    description: "Sugar, Lime, Cachaça/Vodka.",
    price: 5000,
    rating: 5,
    category: "Cocktail",
    image: "https://images.unsplash.com/photo-1563223771-334a6136e4f1?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 30,
    name: "Sangria (Jar)",
    description: "Red, White or Sparkling Wine Sangria with fresh fruits (1L).",
    price: 18000,
    rating: 5,
    category: "Cocktail",
    image: "https://images.unsplash.com/photo-1606253457187-573133333333?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 31,
    name: "Gin Tonic Premium",
    description: "Selection of premium gins (Hendrick's, Bulldog, Sharish) with tonic.",
    price: 12000,
    rating: 5,
    category: "Cocktail",
    image: "https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?q=80&w=800&auto=format&fit=crop"
  }
];

const dishesPt: Dish[] = [
  // --- Signature / Top Rated ---
  {
    id: 1,
    name: "Arroz de Lavagante",
    description: "O nosso lendário Arroz de Lavagante. Lavagante suculento cozinhado num caldo de marisco rico e aromático com arroz Carolino. Servido num tacho de ferro tradicional.",
    price: 98000,
    rating: 5,
    category: "Main",
    image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Polvo à Lagareiro",
    description: "Tentáculos de polvo tenros assados com azeite abundante, alho e batatas a murro. Um ícone nacional.",
    price: 48000,
    rating: 5,
    category: "Main",
    image: "https://images.unsplash.com/photo-1599321955726-9048b5b930dc?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Lagosta Grelhada",
    description: "Lagosta fresca grelhada na perfeição com molho de manteiga de limão e ervas. Servida com legumes da época cozidos a vapor.",
    price: 85000,
    rating: 5,
    category: "Main",
    image: "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&w=800&auto=format&fit=crop"
  },

  // --- Starters ---
  {
    id: 4,
    name: "Couvert Veloria",
    description: "Selecção de pães artesanais, azeitonas marinadas, pasta de atum e manteiga regional.",
    price: 4500,
    rating: 4,
    category: "Starter",
    image: "https://images.unsplash.com/photo-1576615278693-f7e0b1e45797?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Sopa de Peixe",
    description: "Sopa de peixe rica e reconfortante, preparada com o peixe do dia, croutons e um toque de coentros.",
    price: 8000,
    rating: 4,
    category: "Starter",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    name: "Ameijoas à Bulhão Pato",
    description: "Ameijoas frescas salteadas em azeite, alho, vinho branco e coentros frescos. A entrada por excelência.",
    price: 24000,
    rating: 5,
    category: "Starter",
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 7,
    name: "Gambas à Guilho",
    description: "Gambas salteadas em azeite de alho picante, malagueta e brandy.",
    price: 22000,
    rating: 4,
    category: "Starter",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 8,
    name: "Ostras do Namibe",
    description: "Meia dúzia de ostras frescas da costa do Namibe, servidas no gelo com limão.",
    price: 18000,
    rating: 5,
    category: "Starter",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 9,
    name: "Salada de Polvo",
    description: "Salada refrescante de polvo com cebola picada, pimentos e vinagrete.",
    price: 16000,
    rating: 4,
    category: "Starter",
    image: "https://images.unsplash.com/photo-1553163147-622ab57be1c7?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 10,
    name: "Carpaccio de Novilho",
    description: "Lombo de novilho finamente fatiado com rúcula, alcaparras, lascas de parmesão e azeite de trufa.",
    price: 26000,
    rating: 4,
    category: "Starter",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop"
  },

  // --- Mains (Fish & Seafood) ---
  {
    id: 11,
    name: "Arroz de Marisco",
    description: "Arroz de marisco tradicional com camarão, amêijoas, mexilhões e caranguejo.",
    price: 65000,
    rating: 5,
    category: "Main",
    image: "https://images.unsplash.com/photo-1560684352-8497838a2229?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 12,
    name: "Garoupa Grelhada",
    description: "Filete de Garoupa fresca grelhada no carvão, servida com batatas cozidas e legumes.",
    price: 45000,
    rating: 5,
    category: "Main",
    image: "https://images.unsplash.com/photo-1580476262798-bddd9dd90d3e?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 13,
    name: "Robalo ao Sal",
    description: "Robalo selvagem assado em crosta de sal marinho para preservar a suculência e o sabor. Servido à mesa.",
    price: 55000,
    rating: 5,
    category: "Main",
    image: "https://images.unsplash.com/photo-1615141982880-1313d41813f1?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 14,
    name: "Tiger Prawns (Tigres)",
    description: "Camarões Tigre Gigantes (aprox. 300g cada) grelhados com manteiga de alho e molho piripiri.",
    price: 75000,
    rating: 5,
    category: "Main",
    image: "https://images.unsplash.com/photo-1625937751876-4515cd8e78bd?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 15,
    name: "Massada de Cherne",
    description: "Rica massada com pedaços de Cherne, hortelã e gambas.",
    price: 42000,
    rating: 4,
    category: "Main",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 16,
    name: "Bacalhau à Lagareiro",
    description: "Lombo de bacalhau assado com azeite, alho e cebola. Um clássico português.",
    price: 46000,
    rating: 5,
    category: "Main",
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 17,
    name: "Bacalhau com Natas",
    description: "Bacalhau desfiado no forno com natas, cebola e cubos de batata gratinados.",
    price: 38000,
    rating: 5,
    category: "Main",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd43ea?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 18,
    name: "Cataplana de Marisco",
    description: "Caldeirada de marisco cozinhada a vapor (amêijoas, camarão, peixe) na tradicional Cataplana de cobre.",
    price: 70000,
    rating: 5,
    category: "Main",
    image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?q=80&w=800&auto=format&fit=crop"
  },

  // --- Mains (Meat) ---
  {
    id: 19,
    name: "Bife à Portuguesa",
    description: "Bife do lombo frito em molho de alho e vinho, coberto com fiambre e ovo estrelado. Servido com batata às rodelas.",
    price: 38000,
    rating: 4,
    category: "Main",
    image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 20,
    name: "Bife da Vazia Grelhado",
    description: "Bife da vazia grelhado com sal grosso, servido com batatas fritas e esparregado.",
    price: 36000,
    rating: 4,
    category: "Main",
    image: "https://images.unsplash.com/photo-1558030006-d35974212719?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 21,
    name: "Picanha Fatiada",
    description: "Picanha fatiada grelhada, servida com feijão preto, arroz e farofa.",
    price: 34000,
    rating: 4,
    category: "Main",
    image: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?q=80&w=800&auto=format&fit=crop"
  },

  // --- Desserts ---
  {
    id: 22,
    name: "Pastel de Nata",
    description: "Pastel de nata morno.",
    price: 2500,
    rating: 5,
    category: "Dessert",
    image: "https://images.unsplash.com/photo-1584278860047-22db9ff82bed?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 23,
    name: "Mousse de Chocolate",
    description: "Mousse de chocolate negro rica e leve.",
    price: 10000,
    rating: 5,
    category: "Dessert",
    image: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 24,
    name: "Mousse de Maracujá",
    description: "Mousse fresca de maracujá.",
    price: 12000,
    rating: 5,
    category: "Dessert",
    image: "https://images.unsplash.com/photo-1517325240228-566b6c703b6d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 25,
    name: "Serradura",
    description: "Sobremesa de natas e bolacha maria triturada.",
    price: 11000,
    rating: 4,
    category: "Dessert",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 26,
    name: "Leite Creme",
    description: "Leite creme queimado com açúcar.",
    price: 12000,
    rating: 5,
    category: "Dessert",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 27,
    name: "Petit Gâteau",
    description: "Bolo de chocolate com coração derretido servido com gelado de baunilha.",
    price: 14000,
    rating: 5,
    category: "Dessert",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 28,
    name: "Fruta Laminada",
    description: "Prato de frutas tropicais da época.",
    price: 9000,
    rating: 4,
    category: "Dessert",
    image: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=800&auto=format&fit=crop"
  },

  // --- Cocktails ---
  {
    id: 29,
    name: "Caipirinha",
    description: "Açúcar, Lima, Cachaça/Vodka.",
    price: 5000,
    rating: 5,
    category: "Cocktail",
    image: "https://images.unsplash.com/photo-1563223771-334a6136e4f1?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 30,
    name: "Sangria (Jarro)",
    description: "Sangria de Vinho Tinto, Branco ou Espumante com frutas frescas (1L).",
    price: 18000,
    rating: 5,
    category: "Cocktail",
    image: "https://images.unsplash.com/photo-1606253457187-573133333333?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 31,
    name: "Gin Tónico Premium",
    description: "Selecção de gins premium (Hendrick's, Bulldog, Sharish) com tónica.",
    price: 12000,
    rating: 5,
    category: "Cocktail",
    image: "https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?q=80&w=800&auto=format&fit=crop"
  }
];

export const getDishes = (lang: 'en' | 'pt') => {
  return lang === 'en' ? dishesEn : dishesPt;
};

// Default export for backward compatibility if needed, though usually better to use getDishes
export const dishes = dishesEn;