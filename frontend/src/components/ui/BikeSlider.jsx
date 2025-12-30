import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import BikeCard from './BikeCard';

const BikeSlider = ({ bikes }) => {
  const sliderRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(progress);
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', handleScroll);
      return () => slider.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const { current } = sliderRef;
      const scrollAmount = direction === 'left' ? -350 : 350;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative group -mx-4 px-4 overflow-visible">
        {/* Nav Buttons - Hidden on small mobile, visible on tablets/desktop */}
        <button 
            onClick={() => scroll('left')}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/80 border border-white/10 hover:bg-hd-orange p-3 text-white backdrop-blur-sm transition-all -ml-2 opacity-0 group-hover:opacity-100 hidden md:flex clip-slant"
            aria-label="Scroll Left"
        >
            <ChevronLeft size={24} />
        </button>
        <button 
            onClick={() => scroll('right')}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/80 border border-white/10 hover:bg-hd-orange p-3 text-white backdrop-blur-sm transition-all -mr-2 opacity-0 group-hover:opacity-100 hidden md:flex clip-slant"
            aria-label="Scroll Right"
        >
            <ChevronRight size={24} />
        </button>

        {/* Scroll Container */}
        <div 
            ref={sliderRef}
            className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-6 pt-2 px-1 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
            {bikes.map((bike) => (
                <div key={bike.vid} className="w-[280px] sm:w-[320px] md:w-[400px] snap-start flex-shrink-0">
                    <BikeCard bike={bike} />
                </div>
            ))}
            {/* Spacer for ending */}
            <div className="min-w-[20px] md:min-w-[100px] flex-shrink-0"></div>
        </div>

        {/* Scroll Indicator / Progress Bar */}
        <div className="max-w-[200px] mx-auto h-[2px] bg-white/10 mt-4 rounded-full overflow-hidden">
            <div 
                className="h-full bg-hd-orange transition-all duration-300"
                style={{ width: `${Math.max(5, scrollProgress)}%` }}
            ></div>
        </div>
        
        {/* Mobile Swipe Tip */}
        <div className="text-center mt-4 md:hidden">
            <span className="text-[10px] text-gray-600 uppercase tracking-[0.2em] font-bold">Swipe to explore</span>
        </div>
    </div>
  );
};

export default BikeSlider;