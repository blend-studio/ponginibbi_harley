import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import { ArrowRight, ShoppingBag } from 'lucide-react';

const CategoryCard = ({ title, subtitle, image, link }) => (
  <div className="group relative h-[600px] overflow-hidden cursor-pointer border border-white/10">
    <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
    
    <div className="absolute bottom-0 left-0 p-8 w-full">
        <span className="text-hd-orange font-bold tracking-widest uppercase text-sm mb-2 block">{subtitle}</span>
        <h3 className="font-condensed font-bold text-5xl text-white uppercase mb-6 leading-none">{title}</h3>
        <div className="flex items-center gap-2 text-white font-bold uppercase tracking-wider group-hover:text-hd-orange transition-colors">
            Scopri collezione <ArrowRight size={20} />
        </div>
    </div>
  </div>
);

const Shop = () => {
  return (
    <div className="bg-hd-dark min-h-screen pt-36 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
             <SectionTitle title="Negozio & Lifestyle" subtitle="MOTORCLOTHES & PARTS" />
             <p className="text-gray-400 max-w-md text-right hidden md:block mb-12">
                Non si tratta solo di vestiti. È un modo di essere. 
                Scopri l'ultima collezione Genuine MotorClothes® e Accessori.
             </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
             <CategoryCard 
                title="Uomo" 
                subtitle="Collezione"
                image="https://images.unsplash.com/photo-1558980394-4c7c9299fe96?q=80&w=2670&auto=format&fit=crop"
             />
             <CategoryCard 
                title="Donna" 
                subtitle="Collezione"
                image="https://images.unsplash.com/photo-1558981285-6f0c94958bb6?q=80&w=2670&auto=format&fit=crop" // Placeholder image
             />
             <CategoryCard 
                title="Parts" 
                subtitle="Accessori"
                image="https://images.unsplash.com/photo-1609630875171-b1321377ee53?q=80&w=2670&auto=format&fit=crop"
             />
        </div>

        {/* ONLINE SHOP TEASER */}
        <div className="bg-white text-black p-12 text-center relative overflow-hidden clip-diagonal-reverse">
             <ShoppingBag size={48} className="mx-auto mb-6 text-hd-orange" />
             <h3 className="font-condensed font-bold text-4xl uppercase mb-4">Shop Online In Arrivo</h3>
             <p className="max-w-xl mx-auto mb-8 text-lg">
                Stiamo lavorando per portare l'esperienza Ponginibbi direttamente a casa tua. 
                Nel frattempo, vieni a trovarci in showroom per provare i capi della nuova collezione.
             </p>
             <button className="bg-black text-white px-10 py-4 font-condensed font-bold uppercase clip-slant hover:bg-hd-orange transition-colors">
                Visita lo Showroom
             </button>
        </div>

      </div>
    </div>
  );
};

export default Shop;