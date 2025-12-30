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
    <div className="bg-hd-dark min-h-screen pt-20">
       <div className="relative h-[40vh] flex items-center justify-center overflow-hidden mb-20">
            <div className="absolute inset-0">
                <img 
                    src="https://img.freepik.com/free-photo/full-shot-man-riding-motorbike_23-2150810243.jpg?t=st=1767091891~exp=1767095491~hmac=0a9bfb927248e154cdeffc95977f8aaf69824382204d02e00abd84b80ad87cb9&w=1060" 
                    alt="Gallery Hero" 
                    className="w-full h-full object-cover opacity-50 grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hd-dark via-transparent to-transparent"></div>
            </div>
            <div className="relative z-10 text-center px-4">
                <h1 className="text-5xl md:text-8xl font-condensed font-bold text-white mb-2 uppercase tracking-tight">
                    Gallery
                </h1>
                <p className="text-xl text-gray-300 uppercase tracking-widest">
                    Momenti di Libertà
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
