import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Col 1: Brand & Social */}
        <div>
          <img src="/images/ponginibbi-logo.png" alt="Ponginibbi" className="h-12 mb-4" />
          <h3 className="font-condensed text-2xl font-bold text-white mb-2">PONGINIBBI GROUP</h3>
          <p className="text-gray-500 text-sm mb-6">
            Concessionaria ufficiale Harley-Davidson. Vivi il sogno americano a Piacenza.
          </p>
          <div className="flex gap-4">
             {/* Social Placeholders */}
             <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-hd-orange transition-colors cursor-pointer">FB</div>
             <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-hd-orange transition-colors cursor-pointer">IG</div>
          </div>
        </div>

        {/* Col 2: Moto & Servizi */}
        <div>
            <h4 className="font-bold text-hd-orange mb-4 uppercase text-sm tracking-wider">Mondo H-D</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/inventory" className="hover:text-white transition-colors">Moto Nuove</a></li>
                <li><a href="/inventory" className="hover:text-white transition-colors">Usato Garantito</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">Assistenza & Service</a></li>
                <li><a href="/shop" className="hover:text-white transition-colors">Parts & Accessories</a></li>
                <li><a href="/shop" className="hover:text-white transition-colors">Abbigliamento</a></li>
            </ul>
        </div>

        {/* Col 3: Link Utili */}
        <div>
            <h4 className="font-bold text-hd-orange mb-4 uppercase text-sm tracking-wider">Link Rapidi</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/events" className="hover:text-white transition-colors">Eventi & News</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Chi Siamo</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contatti</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="https://www.harley-davidson.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Harley-Davidson.com</a></li>
            </ul>
        </div>

        {/* Col 4: Orari & Info */}
        <div>
          <h4 className="font-bold text-hd-orange mb-4 uppercase text-sm tracking-wider">Showroom</h4>
          <p className="text-gray-400 text-sm mb-2"><span className="text-white block">Via Emilia Pavese, Piacenza</span></p>
          <p className="text-gray-400 text-sm mb-4">Tel: 0523 123456</p>
          
          <h5 className="font-bold text-white text-xs uppercase mb-2">Orari Apertura</h5>
          <ul className="space-y-1 text-gray-500 text-xs">
             <li className="flex justify-between"><span>Lun - Ven:</span> <span>08:30 - 12:30 / 14:30 - 19:00</span></li>
             <li className="flex justify-between"><span>Sabato:</span> <span>09:00 - 12:30 / 15:00 - 18:00</span></li>
          </ul>
        </div>

      </div>
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-gray-900 text-center text-xs text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>© 2025 Ponginibbi Group - P.IVA 12345678901 - All Rights Reserved.</div>
        <div className="flex items-center gap-4">
           <span>Official Dealer</span>
           <img src="/images/harley/2021 H-D_BAR AND SHIELD_CMYK WHITE.png" alt="Harley-Davidson" className="h-10 md:h-12 w-auto opacity-90" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;