import React from 'react';
import { Link } from 'react-router-dom';

const SimplePage = ({ title, subtitle, image, children, ctaLink, ctaText }) => {
  return (
    <div className="bg-hd-dark min-h-screen pt-20">
       {/* Hero */}
       <div className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={image || "https://img.freepik.com/free-photo/full-shot-man-riding-motorbike_23-2150810243.jpg?t=st=1767091891~exp=1767095491~hmac=0a9bfb927248e154cdeffc95977f8aaf69824382204d02e00abd84b80ad87cb9&w=1060"} 
            alt={title} 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-hd-dark via-hd-dark/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-condensed font-bold text-white mb-2 uppercase">
            {title}
          </h1>
          {subtitle && <p className="text-xl text-hd-orange font-bold tracking-widest uppercase">{subtitle}</p>}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
         <div className="prose prose-invert prose-lg max-w-none text-gray-300">
            {children}
         </div>

         {ctaLink && ctaText && (
             <div className="mt-12 text-center">
                 <Link to={ctaLink} className="bg-hd-orange text-white px-8 py-3 font-bold font-condensed uppercase hover:bg-white hover:text-black transition-all clip-slant inline-block">
                    {ctaText}
                 </Link>
             </div>
         )}
      </div>
    </div>
  );
};

export default SimplePage;
