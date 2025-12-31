import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SectionTitle from '../components/ui/SectionTitle';
import news from '../data/news.json';
import AnimatedPage from '../components/AnimatedPage';

const NewsDetail = () => {
  const { id } = useParams();
  const item = news.find(n => n.id === id);

  if (!item) {
    return (
      <AnimatedPage>
        <div className="min-h-screen flex items-center justify-center bg-hd-dark text-white">
          <div className="max-w-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Articolo non trovato</h2>
            <p className="text-gray-400 mb-6">L'articolo che stai cercando non è disponibile o è stato rimosso.</p>
            <Link to="/news" className="inline-block bg-hd-orange text-white px-6 py-2 font-bold uppercase">Torna alle news</Link>
          </div>
        </div>
      </AnimatedPage>
    );
  }

  return (
    <AnimatedPage>
      <div className="bg-hd-dark min-h-screen pb-20">
        <div className="max-w-5xl mx-auto px-4 pt-12">
          <SectionTitle title={item.title} subtitle={item.category} />
          <div className="mt-6 text-gray-500 text-sm flex items-center gap-4">
            <span>{item.date}</span>
            <span>|</span>
            <span>Ponginibbi Team</span>
          </div>
          <div className="mt-8">
            <img src={item.image} alt={item.title} className="w-full h-96 object-cover rounded-lg shadow-md" />
            <div className="mt-6 text-gray-300 leading-relaxed text-lg">
              {item.content}
            </div>
            <div className="mt-8">
              <Link to="/news" className="text-hd-orange font-bold uppercase">← Torna alle news</Link>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default NewsDetail;
