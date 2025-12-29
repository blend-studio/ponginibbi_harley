import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
            <h3 className="font-condensed text-2xl font-bold text-white mb-4">PONGINIBBI GROUP</h3>
            <p className="text-gray-500 text-sm">
                Concessionaria ufficiale Harley-Davidson per Piacenza e provincia. Passione, professionalità e stile dal 19XX.
            </p>
        </div>
        <div>
            <h4 className="font-bold text-hd-orange mb-4 uppercase text-sm tracking-wider">Navigazione</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/" className="hover:text-white">Home</a></li>
                <li><a href="/inventory" className="hover:text-white">Moto Nuove & Usate</a></li>
                <li><a href="/services" className="hover:text-white">Service</a></li>
                <li><a href="/contact" className="hover:text-white">Contatti</a></li>
            </ul>
        </div>
        <div>
            <h4 className="font-bold text-hd-orange mb-4 uppercase text-sm tracking-wider">Orari Showroom</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex justify-between"><span>Lun - Ven:</span> <span>08:30 - 12:30 / 14:30 - 19:00</span></li>
                <li className="flex justify-between"><span>Sabato:</span> <span>09:00 - 12:30 / 15:00 - 18:00</span></li>
                <li className="flex justify-between"><span>Domenica:</span> <span>Chiuso</span></li>
            </ul>
        </div>
        <div>
            <h4 className="font-bold text-hd-orange mb-4 uppercase text-sm tracking-wider">Contatti</h4>
            <p className="text-gray-400 text-sm">Via Emilia Pavese, Piacenza</p>
            <p className="text-gray-400 text-sm mt-2">Tel: 0523 123456</p>
            <p className="text-gray-400 text-sm">Email: info@ponginibbi.it</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-gray-900 text-center text-xs text-gray-600">
        © 2025 Ponginibbi Group - P.IVA 12345678901 - Privacy Policy
      </div>
    </footer>
  );
};

export default Footer;