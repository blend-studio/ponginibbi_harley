import React from 'react';
import { useParams, Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import SectionTitle from '../components/ui/SectionTitle';
import products from '../data/shop_products.json';
import { ArrowLeft } from 'lucide-react';

const ProductCard = ({ product }) => (
    <div className="group flex flex-col h-full">
        <div className="relative overflow-hidden aspect-[4/5] mb-4 bg-white/5 border border-white/10">
            {product.tag && (
                <div className="absolute top-2 left-2 bg-hd-orange text-white text-xs font-bold uppercase px-2 py-1 z-10">
                    {product.tag}
                </div>
            )}
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
        <div className="flex-grow">
            <div className="text-gray-500 text-xs font-bold uppercase mb-1">{product.category}</div>
            <h4 className="text-white font-condensed font-bold text-lg uppercase mb-1 group-hover:text-hd-orange transition-colors">{product.name}</h4>
        </div>
        <div className="text-gray-300 font-bold mt-2">€ {product.price}</div>
    </div>
);

const ShopCategory = ({ category: propCategory, title: propTitle, subtitle: propSubtitle }) => {
    // If used as a route component with props
    let category = propCategory;
    let title = propTitle;
    let subtitle = propSubtitle;

    const categoryMap = {
        men: { title: "Uomo", subtitle: "APPAREL" },
        women: { title: "Donna", subtitle: "APPAREL" },
        helmets: { title: "Caschi", subtitle: "SAFETY" },
        accessories: { title: "Accessori", subtitle: "LIFESTYLE" }
    };

    // If no props, verify if we can get from URL params (if we were using a dynamic route)
    // But for this implementation, we will use separate routes in App.jsx passing props.
    
    // Filter products
    const filteredProducts = products.filter(p => p.category === category);

    return (
        <AnimatedPage>
            <div className="bg-hd-dark min-h-screen pt-24 md:pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-4">
                    
                    <div className="mb-8 md:mb-12">
                        <Link to="/shop" className="inline-flex items-center gap-2 text-gray-400 hover:text-hd-orange transition-colors mb-6 text-sm uppercase font-bold">
                            <ArrowLeft size={16} /> Torna allo Shop
                        </Link>
                        <SectionTitle title={title} subtitle={subtitle} />
                    </div>

                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                            {filteredProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 border border-white/10 bg-white/5">
                            <p className="text-xl text-gray-400">Nessun prodotto trovato in questa categoria al momento.</p>
                            <Link to="/contact" className="inline-block mt-4 text-hd-orange font-bold uppercase hover:text-white">
                                Contattaci per disponibilità
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </AnimatedPage>
    );
};

export default ShopCategory;
