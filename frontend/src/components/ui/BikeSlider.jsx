import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import BikeCard from './BikeCard';

const BikeSlider = ({ bikes }) => {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const { current } = sliderRef;
      // Scroll by one card width (approx 400px + gap)
      const scrollAmount = direction === 'left' ? -420 : 420;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative group">
        {/* Nav Buttons (Visible on hover on desktop, always visible on mobile if tweaked, but here kept standard) */}
        <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-black/80 border border-white/10 hover:bg-hd-orange p-3 text-white backdrop-blur-sm transition-all md:-ml-6 opacity-100 md:opacity-0 md:group-hover:opacity-100 clip-slant"
            aria-label="Scroll Left"
        >
            <ChevronLeft size={24} />
        </button>
        <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-black/80 border border-white/10 hover:bg-hd-orange p-3 text-white backdrop-blur-sm transition-all md:-mr-6 opacity-100 md:opacity-0 md:group-hover:opacity-100 clip-slant"
            aria-label="Scroll Right"
        >
            <ChevronRight size={24} />
        </button>

        {/* Scroll Container */}
        <div 
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 pt-4 px-1"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
            {bikes.map((bike) => (
                <div key={bike.vid} className="min-w-[85vw] md:min-w-[400px] snap-center flex-shrink-0">
                    <BikeCard bike={bike} />
                </div>
            ))}
        </div>
    </div>
  );
};

export default BikeSlider;