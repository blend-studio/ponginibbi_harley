import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import news from '../data/news.json';

const NewsCard = ({ item }) => (
  <Link to={`/news/${item.id}`} className="group block cursor-pointer bg-white/5 border border-white/10 hover:border-hd-orange transition-all duration-300">
    <div className="relative overflow-hidden aspect-video">
       <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
       <div className="absolute top-4 left-4 bg-hd-orange text-white text-xs font-bold uppercase px-3 py-1">
         {item.category}
       </div>
    </div>
    <div className="p-8">
       <div className="flex items-center gap-4 text-gray-500 text-xs font-bold uppercase mb-4">
         <span className="flex items-center gap-1"><Calendar size={12} /> {item.date}</span>
         <span className="flex items-center gap-1"><User size={12} /> Ponginibbi Team</span>
       </div>
       <h3 className="text-2xl font-condensed font-bold text-white uppercase mb-4 leading-none group-hover:text-hd-orange transition-colors">
         {item.title}
       </h3>
       <p className="text-gray-400 mb-6 line-clamp-3">
         {item.excerpt}
       </p>
       <span className="inline-flex items-center gap-2 text-white font-bold uppercase text-sm group-hover:gap-3 transition-all">
         Leggi tutto <ArrowRight size={16} className="text-hd-orange" />
       </span>
    </div>
  </Link>

);

const News = () => {
  return (
    <div className="bg-hd-dark min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-black mb-12 md:mb-20">
        <div className="absolute inset-0">
          <img 
            src="https://img.freepik.com/free-photo/model-career-kit-still-life_23-2150229753.jpg?t=st=1767091952~exp=1767095552~hmac=8c4903869ad282d99558ed1d1d9baeacb89ab5bc8ad59cdde76e1cb93170e051&w=1060" 
            alt="Harley News" 
            className="w-full h-full object-cover opacity-40 grayscale hover:scale-105 transition-transform duration-[10s]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl pt-20">
          <div className="inline-block bg-hd-orange text-white font-bold uppercase tracking-[0.3em] px-6 py-2 mb-6 text-xs md:text-sm animate-fade-in-up">
            Latest Updates
          </div>
          <h1 className="text-6xl md:text-[10rem] font-condensed font-bold text-white uppercase italic leading-[0.85] mb-6 drop-shadow-2xl animate-fade-in-up delay-100">
            H-D <span className="text-transparent bg-clip-text bg-gradient-to-r from-hd-orange to-red-600">Journal</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto font-sans leading-relaxed animate-fade-in-up delay-200">
            Resta sempre aggiornato sulle novità del mondo Harley-Davidson e Ponginibbi Group.
          </p>
        </div>
      </div>

        <div className="max-w-7xl mx-auto px-4 pb-20">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {news.map(item => (
                  <NewsCard key={item.id} item={item} />
                ))}
             </div>
        </div>
    </div>
  );
};

export default News;
