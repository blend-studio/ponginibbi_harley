import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';

const GalleryItem = ({ image, category }) => (
    <div className="group relative break-inside-avoid mb-4 overflow-hidden rounded-sm cursor-pointer">
        <img 
            src={image} 
            alt={category} 
            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white font-condensed font-bold uppercase text-xl tracking-wider border-b-2 border-hd-orange pb-1">{category}</span>
        </div>
    </div>
);

const Gallery = () => {
    // Placeholder images - in a real app these would come from an API
    const images = [
        { src: "https://img.freepik.com/free-photo/biking-motorcycle-forest_114579-5198.jpg?t=st=1767091041~exp=1767094641~hmac=eb78590e36e9afcf912609ca73db90bf1d5797444838d34653c3727d46844717&w=1060", category: "Events" },
        { src: "https://img.freepik.com/free-photo/red-motor-biking-road_114579-5071.jpg?t=st=1767091891~exp=1767095491~hmac=6130f968067151f6841975acc6f729a59cd3724a974920c36b6e5d384fa1460b&w=1060", category: "Rides" },
        { src: "https://img.freepik.com/free-photo/full-shot-man-riding-motorbike_23-2150810243.jpg?t=st=1767091891~exp=1767095491~hmac=0a9bfb927248e154cdeffc95977f8aaf69824382204d02e00abd84b80ad87cb9&w=1060", category: "Custom" },
        { src: "https://img.freepik.com/free-psd/white-hard-hat-safety-equipment-construction-work-protection_191095-80944.jpg?t=st=1767091891~exp=1767095491~hmac=6657fc156aca7c6e18010418a21f3b6b7aa62ca0f6a6ec4964166ea27f1523a4&w=1060", category: "Lifestyle" },
        { src: "https://img.freepik.com/free-photo/model-career-kit-still-life_23-2150229753.jpg?t=st=1767091952~exp=1767095552~hmac=8c4903869ad282d99558ed1d1d9baeacb89ab5bc8ad59cdde76e1cb93170e051&w=1060", category: "Events" },
        { src: "https://img.freepik.com/free-photo/biking-motorcycle-forest_114579-5198.jpg?t=st=1767091041~exp=1767094641~hmac=eb78590e36e9afcf912609ca73db90bf1d5797444838d34653c3727d46844717&w=1060", category: "Showroom" },
        { src: "https://img.freepik.com/free-photo/red-motor-biking-road_114579-5071.jpg?t=st=1767091891~exp=1767095491~hmac=6130f968067151f6841975acc6f729a59cd3724a974920c36b6e5d384fa1460b&w=1060", category: "Rides" },
        { src: "https://img.freepik.com/free-photo/model-career-kit-still-life_23-2150229753.jpg?t=st=1767091952~exp=1767095552~hmac=8c4903869ad282d99558ed1d1d9baeacb89ab5bc8ad59cdde76e1cb93170e051&w=1060", category: "Workshop" },
    ];

  return (
    <div className="bg-hd-dark min-h-screen">
      {/* Hero Section */}
      <div className="relative min-h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-black mb-12 md:mb-20">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2670&auto=format&fit=crop" 
            alt="Harley Gallery" 
            className="w-full h-full object-cover opacity-40 grayscale hover:scale-105 transition-transform duration-[10s]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl pt-20">
          <div className="inline-block bg-hd-orange text-white font-bold uppercase tracking-[0.3em] px-6 py-2 mb-6 text-xs md:text-sm animate-fade-in-up">
            Visual Story
          </div>
          <h1 className="text-6xl md:text-[10rem] font-condensed font-bold text-white uppercase italic leading-[0.85] mb-6 drop-shadow-2xl animate-fade-in-up delay-100">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-hd-orange to-red-600">Gallery</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto font-sans leading-relaxed animate-fade-in-up delay-200">
            Momenti di strada, eventi indimenticabili e le custom più belle. Guarda il mito attraverso i nostri occhi.
          </p>
        </div>
      </div>

        <div className="max-w-7xl mx-auto px-4 pb-20">
             <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                 {images.map((img, idx) => (
                     <GalleryItem key={idx} {...img} />
                 ))}
             </div>
        </div>
    </div>
  );
};

export default Gallery;
