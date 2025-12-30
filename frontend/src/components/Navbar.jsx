import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, ChevronDown, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ContactModal from './ContactModal';

const NAV_ITEMS = [
  {
    name: 'MOTO',
    path: '/inventory',
    submenu: [
      { name: 'Model Year corrente', path: '/inventory?type=new&year=current' },
      { name: 'Inventario motociclette nuove', path: '/inventory?type=new' },
      { name: 'Inventario usato', path: '/inventory?type=used' },
      { name: 'Noleggia una motocicletta', path: '/rentals', submenu: [
          { name: 'Prenotazione online', path: '/rentals/booking' }
      ]},
      { name: 'Finanzia la tua motocicletta', path: '/finance', submenu: [
          { name: 'Richiesta di finanziamento', path: '/finance/request' }
      ]},
      { name: 'Personalizzazione', path: '/customization' },
      { name: 'Programma una prova su strada', path: '/test-ride' },
      { name: 'Ottieni un preventivo', path: '/quote' },
      { name: 'Impara a guidare', path: '/learn-to-ride', submenu: [
          { name: 'Corso di guida per neofiti', path: '/learn-to-ride/new-rider' },
          { name: 'Corso di guida per piloti esperti', path: '/learn-to-ride/skilled' },
          { name: 'Workshop informativo', path: '/learn-to-ride/workshop' },
          { name: 'Garage Party', path: '/learn-to-ride/garage-party' },
          { name: 'Jumpstart™', path: '/learn-to-ride/jumpstart' }
      ]}
    ]
  },
  {
    name: 'ASSISTENZA',
    path: '/services',
    submenu: [
        { name: 'Offerte di assistenza', path: '/services/offers' },
        { name: 'Ore di manutenzione', path: '/services/hours' },
        { name: 'Richiedi appuntamento', path: '/service-appointment' },
        { name: 'Promozioni', path: '/services/promos' },
        { name: 'Richiesta di ricambi', path: '/parts-request' },
        { name: 'Express Lane', path: '/services/express-lane' },
        { name: 'Rimessaggio invernale', path: '/winter-storage' }
    ]
  },
  {
      name: 'NEGOZIO',
      path: '/shop',
      submenu: [
          { name: 'Online Shop', path: '/shop' },
          { name: 'Gift Cards', path: '/shop/gift-cards' },
          { name: 'Reparto ricambi', path: '/parts' },
          { name: 'Richiesta ricambi', path: '/parts-request' },
          { name: 'Abbigliamento', path: '/shop/apparel' },
          { name: 'Offerte/Promozioni', path: '/shop/offers' }
      ]
  },
  {
      name: 'EVENTI',
      path: '/events',
      submenu: [
          { name: 'Eventi', path: '/events' },
          { name: 'Gallery foto e video', path: '/gallery' },
          { name: 'Novità', path: '/news' },
          { name: 'Chapter', path: 'https://www.hog.com', external: true },
          { name: 'Mondo Touring', path: '/touring' },
          { name: 'Blog', path: 'https://greatestrides.eu', external: true }
      ]
  },
  {
      name: 'CHI SIAMO',
      path: '/contact',
      submenu: [
          { name: 'Contatti', path: '/contact' },
          { name: 'Mappa e indicazioni', path: '/contact#map' },
          { name: 'Conosci il Team', path: '/team' },
          { name: 'Testimonianze', path: '/testimonials' },
          { name: 'Community', path: '/community' },
          { name: 'Programma fedeltà', path: '/loyalty' },
          { name: 'Carriere', path: '/careers' },
          { name: 'Storia', path: '/history' }
      ]
  }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState({}); // Track expanded items in mobile
  const location = useLocation();

  // Chiudi menu mobile al cambio rotta
  useEffect(() => {
    setIsOpen(false);
    setMobileExpanded({});
  }, [location]);

  const toggleMobileSubmenu = (name) => {
    setMobileExpanded(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  return (
    <>
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />

      {/* Top Bar - Info Ponginibbi */}
      <div className="bg-hd-gray text-xs font-sans text-gray-400 overflow-hidden relative z-50 border-b border-white/5">
         <div className="max-w-7xl mx-auto py-1 px-4 flex justify-between items-center">
            <div className="flex gap-4">
                <span className="flex items-center gap-1"><Phone size={12} /> 0523 123456</span>
                <span className="flex items-center gap-1"><MapPin size={12} /> Via Emilia Pavese, Piacenza</span>
            </div>
              <div className="flex items-center gap-4">
                <Link to="/" className="text-gray-300 hover:text-white uppercase font-bold">Home</Link>
                <div className="hidden sm:block">PONGINIBBI GROUP</div>
              </div>
         </div>
      </div>

      <nav className="sticky top-0 w-full z-40 bg-black border-b border-hd-orange transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
             {/* Logo Area */}
             <div className="flex items-center gap-3">
               <Link to="/">
                 <img src="/images/ponginibbi-logo.png" alt="Ponginibbi" className="h-9 w-auto" />
               </Link>
               <div className="h-6 w-px bg-white/30 mx-1"></div>
               <div className="flex flex-col">
                 <img src="/images/harley/2020-HDMC-horizon-wordmark CMYK-White.png" alt="Harley-Davidson" className="h-3 md:h-4 w-auto object-contain" />
               </div>
             </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="ml-6 flex items-baseline space-x-4">
                {NAV_ITEMS.map((item) => {
                    const isActive = location.pathname.startsWith(item.path) && item.path !== '/';
                    const hasSubmenu = item.submenu && item.submenu.length > 0;

                    return (
                        <div 
                          key={item.name} 
                          className="relative group"
                          onMouseEnter={() => setHoveredMenu(item.name)}
                          onMouseLeave={() => setHoveredMenu(null)}
                        >
                            <Link 
                                to={item.path} 
                                className={`flex items-center gap-1 font-condensed text-base font-bold transition-all hover:text-hd-orange py-5 ${isActive ? 'text-hd-orange' : 'text-white'}`}
                            >
                                {item.name}
                                {hasSubmenu && <ChevronDown size={14} className={`transition-transform duration-200 ${hoveredMenu === item.name ? 'rotate-180' : ''}`} />}
                            </Link>
                            
                            {/* Desktop Dropdown */}
                            <AnimatePresence>
                              {hasSubmenu && hoveredMenu === item.name && (
                                <motion.div
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: 10 }}
                                  transition={{ duration: 0.2 }}
                                  className="absolute left-0 top-full w-64 bg-black/95 backdrop-blur-md border border-white/10 shadow-xl rounded-b-sm overflow-hidden z-50"
                                >
                                  <div className="py-2 flex flex-col">
                                    {item.submenu.map((subItem, idx) => (
                                      <div key={idx} className="group/sub relative">
                                          {subItem.external ? (
                                              <a 
                                                href={subItem.path}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-hd-orange transition-colors border-l-2 border-transparent hover:border-hd-orange"
                                              >
                                                {subItem.name}
                                              </a>
                                          ) : (
                                              <Link 
                                                to={subItem.path}
                                                className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-hd-orange transition-colors border-l-2 border-transparent hover:border-hd-orange flex justify-between items-center"
                                              >
                                                {subItem.name}
                                                {subItem.submenu && <ChevronRight size={12} />}
                                              </Link>
                                          )}
                                          
                                          {/* Nested Submenu (2nd level) */}
                                          {subItem.submenu && (
                                            <div className="hidden group-hover/sub:block absolute left-full top-0 w-64 bg-black/95 backdrop-blur-md border border-white/10 shadow-xl rounded-r-sm -ml-1">
                                                {subItem.submenu.map((nestedItem, nIdx) => (
                                                    <Link 
                                                      key={nIdx}
                                                      to={nestedItem.path}
                                                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-hd-orange transition-colors border-l-2 border-transparent hover:border-hd-orange"
                                                    >
                                                      {nestedItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                          )}
                                      </div>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                        </div>
                    )
                })}
                <button 
                    onClick={() => setIsContactModalOpen(true)}
                    className="bg-hd-orange text-white hover:bg-white hover:text-black px-4 py-1.5 rounded-sm font-condensed font-bold transition-all duration-300 clip-slant text-sm ml-4"
                >
                    CONTATTI
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="-mr-2 flex lg:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-hd-orange p-2 transition-colors">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl lg:hidden flex flex-col pt-24 px-6 overflow-y-auto"
          >
            <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-white hover:text-hd-orange">
                <X size={32} />
            </button>
            
            <div className="flex flex-col gap-4">
              {NAV_ITEMS.map((item, idx) => (
                <div key={idx} className="border-b border-white/10 pb-2">
                    <div className="flex justify-between items-center">
                        <Link 
                            to={item.path} 
                            onClick={(e) => {
                                if (item.submenu) {
                                    e.preventDefault();
                                    toggleMobileSubmenu(item.name);
                                }
                            }}
                            className="font-condensed text-white text-3xl font-bold hover:text-hd-orange transition-colors flex-1"
                        >
                            {item.name}
                        </Link>
                        {item.submenu && (
                            <button onClick={() => toggleMobileSubmenu(item.name)} className="p-2 text-white/50">
                                <ChevronDown size={20} className={`transition-transform ${mobileExpanded[item.name] ? 'rotate-180' : ''}`} />
                            </button>
                        )}
                    </div>
                    
                    {/* Mobile Submenu */}
                    <AnimatePresence>
                        {item.submenu && mobileExpanded[item.name] && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden pl-4 flex flex-col gap-2 mt-2"
                            >
                                {item.submenu.map((subItem, sIdx) => (
                                    <div key={sIdx}>
                                        {subItem.external ? (
                                            <a href={subItem.path} className="text-gray-400 text-lg font-condensed hover:text-hd-orange block py-1">{subItem.name}</a>
                                        ) : (
                                            <Link to={subItem.path} className="text-gray-400 text-lg font-condensed hover:text-hd-orange block py-1">
                                                {subItem.name}
                                            </Link>
                                        )}
                                        
                                        {/* Mobile Nested Submenu */}
                                        {subItem.submenu && (
                                            <div className="pl-4 border-l border-white/10 mt-1">
                                                {subItem.submenu.map((nested, nIdx) => (
                                                    <Link key={nIdx} to={nested.path} className="text-gray-500 text-base font-condensed hover:text-hd-orange block py-1">
                                                        {nested.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
              ))}

              <button 
                  onClick={() => { setIsContactModalOpen(true); setIsOpen(false); }}
                  className="font-condensed text-hd-orange text-3xl font-bold mt-8 text-left"
              >
                  CONTATTI
              </button>
            </div>

            <div className="mt-10 mb-10 text-center text-gray-500 text-sm">
                <p>PONGINIBBI GROUP</p>
                <p>Official Harley-Davidson Dealer</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;