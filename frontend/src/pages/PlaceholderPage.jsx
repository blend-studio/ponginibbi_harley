import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';

const PlaceholderPage = () => {
  const location = useLocation();
  
  const getTitle = (path) => {
    const segments = path.split('/').filter(Boolean);
    if (segments.length === 0) return 'Home';
    return segments.map(s => s.charAt(0).toUpperCase() + s.slice(1).replace(/-/g, ' ')).join(' - ');
  };

  return (
    <AnimatedPage>
      <div className="min-h-screen bg-black text-white pt-20">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl md:text-7xl font-condensed font-bold text-white mb-6 uppercase">
            {getTitle(location.pathname)}
          </h1>
          <div className="w-24 h-1 bg-hd-orange mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Questa sezione è attualmente in fase di sviluppo. 
            Stiamo lavorando per portarti la migliore esperienza Harley-Davidson possibile.
          </p>
          <div className="flex justify-center gap-4">
             <Link to="/" className="bg-hd-orange text-white px-8 py-3 font-bold font-condensed uppercase hover:bg-white hover:text-black transition-all clip-slant">
                Torna alla Home
             </Link>
             <Link to="/contact" className="border border-white text-white px-8 py-3 font-bold font-condensed uppercase hover:bg-white hover:text-black transition-all clip-slant">
                Contattaci
             </Link>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default PlaceholderPage;
