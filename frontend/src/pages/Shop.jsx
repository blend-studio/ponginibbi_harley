import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import { ArrowRight, ShoppingBag, Star, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ title, subtitle, image, link, size = 'normal' }) => (
  <Link to={link} className={`group relative overflow-hidden cursor-pointer border border-white/10 block ${size === 'large' ? 'md:col-span-2 h-[600px]' : 'h-[600px] md:h-[600px]'}`}>
    <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
    
    <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
        <span className="text-hd-orange font-bold tracking-widest uppercase text-sm mb-3 block animate-fade-in-up">{subtitle}</span>
        <h3 className="font-condensed font-bold text-5xl md:text-6xl text-white uppercase mb-6 leading-none animate-fade-in-up delay-100">{title}</h3>
        <div className="flex items-center gap-2 text-white font-bold uppercase tracking-wider group-hover:text-hd-orange transition-colors animate-fade-in-up delay-200">
            Scopri collezione <ArrowRight size={20} />
        </div>
    </div>
  </Link>
);

const ProductCard = ({ image, title, price, category, tag }) => (
    <div className="group">
        <div className="relative overflow-hidden aspect-[4/5] mb-4 bg-white/5 border border-white/10">
            {tag && (
                <div className="absolute top-2 left-2 bg-hd-orange text-white text-xs font-bold uppercase px-2 py-1 z-10">
                    {tag}
                </div>
            )}
            <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button className="bg-white text-black px-6 py-3 font-bold uppercase text-sm hover:bg-hd-orange hover:text-white transition-colors">
                    Vedi Dettagli
                </button>
            </div>
        </div>
        <div className="text-gray-500 text-xs font-bold uppercase mb-1">{category}</div>
        <h4 className="text-white font-condensed font-bold text-lg uppercase mb-1 group-hover:text-hd-orange transition-colors">{title}</h4>
        <div className="text-gray-300 font-bold">€ {price}</div>
    </div>
);

const Shop = () => {
  return (
    <div className="bg-hd-dark min-h-screen pt-24 md:pt-36 pb-20">
      
      {/* Hero */}
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden mb-12 md:mb-20">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2670&auto=format&fit=crop" 
            alt="Shop Hero" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-hd-dark via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-8xl font-condensed font-bold text-white mb-4 uppercase tracking-tight leading-none">
            Motor<span className="text-hd-orange">Clothes</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto uppercase tracking-widest">
            Stile. Protezione. Attitudine.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        
        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16 md:mb-24">
             <CategoryCard 
                title="Uomo" 
                subtitle="Nuova Collezione"
                image="https://images.unsplash.com/photo-1558980394-4c7c9299fe96?q=80&w=2670&auto=format&fit=crop"
                link="/shop/apparel?cat=men"
             />
             <CategoryCard 
                title="Donna" 
                subtitle="Nuova Collezione"
                image="https://images.unsplash.com/photo-1558981285-6f0c94958bb6?q=80&w=2670&auto=format&fit=crop"
                link="/shop/apparel?cat=women"
             />
             <CategoryCard 
                title="Caschi" 
                subtitle="Sicurezza & Stile"
                image="https://images.unsplash.com/photo-1558981852-426c6c22a060?q=80&w=2671&auto=format&fit=crop"
                link="/shop/apparel?cat=helmets"
             />
             <CategoryCard 
                title="Accessori" 
                subtitle="Parts & More"
                image="https://images.unsplash.com/photo-1609630875171-b1321377ee53?q=80&w=2670&auto=format&fit=crop"
                link="/parts-request"
             />
        </div>

        {/* New Arrivals Preview */}
        <div className="mb-16 md:mb-24">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 md:mb-12 border-b border-white/10 pb-6 gap-4">
                 <div>
                    <h3 className="font-condensed font-bold text-3xl md:text-4xl text-white uppercase mb-2">Nuovi Arrivi</h3>
                    <p className="text-gray-400 text-sm md:text-base">Le ultime novità disponibili in showroom.</p>
                 </div>
                 <Link to="/shop/apparel" className="text-hd-orange font-bold uppercase hover:text-white transition-colors flex items-center gap-2 text-sm">
                    Vedi Tutto <ArrowRight size={18} />
                 </Link>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                <ProductCard 
                    image="https://images.unsplash.com/photo-1558980394-4c7c9299fe96?q=80&w=2670&auto=format&fit=crop"
                    title="Willie G. Leather Jacket"
                    price="650,00"
                    category="Uomo"
                    tag="New"
                />
                <ProductCard 
                    image="https://images.unsplash.com/photo-1558981285-6f0c94958bb6?q=80&w=2670&auto=format&fit=crop"
                    title="Bar & Shield Hoodie"
                    price="120,00"
                    category="Donna"
                />
                <ProductCard 
                    image="https://images.unsplash.com/photo-1558981852-426c6c22a060?q=80&w=2671&auto=format&fit=crop"
                    title="Pilot 3-in-1 Helmet"
                    price="350,00"
                    category="Caschi"
                    tag="Best Seller"
                />
                <ProductCard 
                    image="https://images.unsplash.com/photo-1558980394-0a06c46e60e7?q=80&w=2670&auto=format&fit=crop"
                    title="Eagle Tee"
                    price="45,00"
                    category="Uomo"
                />
            </div>
        </div>

        {/* ONLINE SHOP TEASER */}
        <div className="bg-gradient-to-r from-white/10 to-transparent border border-white/10 p-8 md:p-16 text-center relative overflow-hidden mb-20">
             <ShoppingBag size={64} className="mx-auto mb-6 text-hd-orange opacity-80 hidden sm:block" />
             <h3 className="font-condensed font-bold text-3xl md:text-5xl uppercase mb-6 text-white leading-tight">Shop Online In Arrivo</h3>
             <p className="max-w-2xl mx-auto mb-10 text-base md:text-xl text-gray-300">
                Stiamo lavorando per portare l'esperienza Ponginibbi direttamente a casa tua. 
                Presto potrai acquistare abbigliamento, accessori e gift card comodamente online.
             </p>
             <div className="flex justify-center">
                <Link to="/contact" className="bg-hd-orange text-white px-8 md:px-10 py-3 md:py-4 font-condensed font-bold uppercase clip-slant hover:bg-white hover:text-black transition-colors text-sm md:text-base">
                    Iscriviti alla Newsletter
                </Link>
             </div>
        </div>

      </div>
    </div>
  );
};

export default Shop;