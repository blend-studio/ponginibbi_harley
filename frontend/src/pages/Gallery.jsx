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
        { src: "https://images.unsplash.com/photo-1558981806-ec527fa84c3d?q=80&w=2670&auto=format&fit=crop", category: "Events" },
        { src: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2670&auto=format&fit=crop", category: "Rides" },
        { src: "https://images.unsplash.com/photo-1609630875171-b1321377ee53?q=80&w=2670&auto=format&fit=crop", category: "Custom" },
        { src: "https://images.unsplash.com/photo-1558980394-4c7c9299fe96?q=80&w=2670&auto=format&fit=crop", category: "Lifestyle" },
        { src: "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?q=80&w=2670&auto=format&fit=crop", category: "Events" },
        { src: "https://images.unsplash.com/photo-1558980394-0a06c46e60e7?q=80&w=2670&auto=format&fit=crop", category: "Showroom" },
        { src: "https://images.unsplash.com/photo-1558981852-426c6c22a060?q=80&w=2671&auto=format&fit=crop", category: "Rides" },
        { src: "https://images.unsplash.com/photo-1537368910025-bc005ca23c50?q=80&w=2574&auto=format&fit=crop", category: "Workshop" },
    ];

  return (
    <div className="bg-hd-dark min-h-screen pt-20">
       <div className="relative h-[40vh] flex items-center justify-center overflow-hidden mb-20">
            <div className="absolute inset-0">
                <img 
                    src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2670&auto=format&fit=crop" 
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
