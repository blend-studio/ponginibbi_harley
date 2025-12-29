import React, { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-hd-black text-white border-b-4 border-hd-orange sticky top-0 z-50">
      {/* Top Bar - Info Ponginibbi */}
      <div className="bg-hd-gray py-1 px-4 text-xs font-sans text-gray-400 flex justify-between items-center">
        <div className="flex gap-4">
            <span className="flex items-center gap-1"><Phone size={12} /> 0523 123456</span>
            <span className="flex items-center gap-1"><MapPin size={12} /> Via Emilia Pavese, Piacenza</span>
        </div>
        <div>PONGINIBBI GROUP</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Area */}
          <div className="flex items-center gap-4">
             {/* Qui metterai il logo Bar & Shield */}
             <img src="/images/logo-hd.png" alt="Harley-Davidson" className="h-12 w-auto" />
             <div className="h-8 w-px bg-gray-700 mx-2"></div>
             <div className="flex flex-col">
                <span className="font-condensed font-bold text-xl leading-none tracking-wider text-white">PONGINIBBI</span>
                <span className="font-sans text-xs text-hd-orange tracking-[0.2em]">PIACENZA</span>
             </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className="font-condensed hover:text-hd-orange px-3 py-2 rounded-md text-lg font-bold transition-colors">HOME</Link>
              <Link to="/inventory" className="font-condensed hover:text-hd-orange px-3 py-2 rounded-md text-lg font-bold transition-colors">MOTO</Link>
              <Link to="/services" className="font-condensed hover:text-hd-orange px-3 py-2 rounded-md text-lg font-bold transition-colors">OFFICINA</Link>
              <Link to="/contact" className="bg-hd-orange text-white hover:bg-orange-700 px-4 py-2 rounded-sm font-condensed font-bold transition-colors">CONTATTI</Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-400 hover:text-white p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-hd-gray pb-4">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
            <Link to="/" className="font-condensed text-white block px-3 py-2 rounded-md text-xl font-bold">HOME</Link>
            <Link to="/inventory" className="font-condensed text-white block px-3 py-2 rounded-md text-xl font-bold">MOTO</Link>
            <Link to="/contact" className="font-condensed text-hd-orange block px-3 py-2 rounded-md text-xl font-bold">CONTATTI</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;