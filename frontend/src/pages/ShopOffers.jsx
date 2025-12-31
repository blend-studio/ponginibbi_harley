import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import SectionTitle from '../components/ui/SectionTitle';
import products from '../data/shop_products.json';
import { Percent, ArrowRight } from 'lucide-react';

const OfferCard = ({ product }) => {
    // Simulate a discount for display (e.g., 20% off)
    const originalPrice = parseFloat(product.price.replace(',', '.'));
    const discountedPrice = (originalPrice * 0.8).toFixed(2).replace('.', ',');

    return (
        <div className="group flex flex-col h-full bg-white/5 border border-white/10 hover:border-hd-orange transition-all duration-300">
            <div className="relative overflow-hidden aspect-[4/5] bg-white/5">
                <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold uppercase px-2 py-1 z-10 animate-pulse">
                    -20% SALE
                </div>
                <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                     <Link to="/contact" className="bg-white text-black px-6 py-3 font-bold uppercase text-sm hover:bg-hd-orange hover:text-white transition-colors">
                        Richiedi Info
                    </Link>
                </div>
            </div>
            <div className="p-4 flex flex-col flex-grow">
                <div className="text-gray-500 text-xs font-bold uppercase mb-1">{product.category}</div>
                <h4 className="text-white font-condensed font-bold text-lg uppercase mb-2 group-hover:text-hd-orange transition-colors line-clamp-2">{product.name}</h4>
                <div className="mt-auto flex items-baseline gap-3">
                    <span className="text-red-500 font-bold text-xl">€ {discountedPrice}</span>
                    <span className="text-gray-500 text-sm line-through">€ {product.price}</span>
                </div>
            </div>
        </div>
    );
};

const ShopOffers = () => {
    // Select a mix of products to feature as offers
    // We'll take the first 4 items from each category for this demo page
    const offerProducts = [
        ...products.filter(p => p.category === 'men').slice(0, 4),
        ...products.filter(p => p.category === 'women').slice(0, 4),
        ...products.filter(p => p.category === 'helmets').slice(0, 4),
        ...products.filter(p => p.category === 'accessories').slice(0, 4),
    ];

    return (
        <AnimatedPage>
            <div className="bg-hd-dark min-h-screen pt-24 md:pt-32 pb-20">
                {/* Hero Banner for Offers */}
                <div className="relative h-[40vh] mb-16 overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0">
                        <img 
                            src="https://images.unsplash.com/photo-1558980394-4c7c9299fe96?q=80&w=2670&auto=format&fit=crop" 
                            alt="Sale" 
                            className="w-full h-full object-cover opacity-50 grayscale"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-hd-dark via-hd-dark/50 to-transparent"></div>
                    </div>
                    <div className="relative z-10 text-center px-4">
                        <div className="inline-block bg-red-600 text-white font-bold uppercase tracking-widest px-4 py-1 mb-4 text-sm transform -rotate-2">
                            Limited Time Only
                        </div>
                        <h1 className="text-5xl md:text-8xl font-condensed font-bold text-white uppercase leading-none mb-4">
                            Season <span className="text-hd-orange">Sale</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Sconti esclusivi su una selezione di abbigliamento e accessori. Approfittane ora.
                        </p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4 border-b border-white/10 pb-6">
                        <SectionTitle title="Offerte Speciali" subtitle="OUTLET" />
                        <div className="flex items-center gap-2 text-hd-orange font-bold uppercase text-sm">
                            <Percent size={18} /> Sconti fino al 50%
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                        {offerProducts.map(product => (
                            <OfferCard key={product.id} product={product} />
                        ))}
                    </div>

                    {/* Newsletter CTA */}
                    <div className="mt-20 bg-white/5 border border-white/10 p-8 md:p-12 text-center relative overflow-hidden">
                         <div className="absolute -top-10 -right-10 text-white/5 rotate-12">
                             <Percent size={200} />
                         </div>
                         <h3 className="text-2xl md:text-3xl font-condensed font-bold text-white uppercase mb-4 relative z-10">
                             Non perdere le prossime offerte
                         </h3>
                         <p className="text-gray-400 mb-8 max-w-xl mx-auto relative z-10">
                             Iscriviti alla nostra newsletter per ricevere in anteprima codici sconto e promozioni dedicate ai membri.
                         </p>
                         <Link to="/contact" className="inline-block bg-hd-orange text-white px-8 py-3 font-bold font-condensed uppercase clip-slant hover:bg-white hover:text-black transition-colors relative z-10">
                             Iscriviti Ora
                         </Link>
                    </div>
                </div>
            </div>
        </AnimatedPage>
    );
};

export default ShopOffers;
