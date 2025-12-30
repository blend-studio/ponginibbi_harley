import React, { useState } from 'react';
import { CheckCircle, Settings } from 'lucide-react';

const PartsRequest = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
        <div className="min-h-screen bg-hd-dark pt-32 flex items-center justify-center px-4">
            <div className="bg-white/5 p-12 text-center border border-hd-orange max-w-2xl">
                <CheckCircle size={64} className="text-hd-orange mx-auto mb-6" />
                <h2 className="text-4xl font-condensed font-bold text-white uppercase mb-4">Richiesta Ricevuta!</h2>
                <p className="text-gray-300 text-lg mb-8">
                    La tua richiesta ricambi è stata presa in carico. 
                    Verificheremo la disponibilità e ti invieremo una quotazione al più presto.
                </p>
                <button onClick={() => setSubmitted(false)} className="text-hd-orange font-bold uppercase hover:text-white underline">
                    Nuova richiesta
                </button>
            </div>
        </div>
    );
  }

  return (
    <div className="bg-hd-dark min-h-screen pt-20 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-condensed font-bold text-white uppercase mb-4">
                Richiesta <span className="text-hd-orange">Ricambi</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Cerchi un pezzo specifico? Accessori originali, ricambi Screamin' Eagle® o aftermarket.
                Compila il modulo con i dettagli.
            </p>
        </div>

        <div className="bg-white/5 border border-white/10 p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-gray-400 text-sm font-bold mb-2 uppercase">Nome</label>
                        <input type="text" required className="w-full bg-black/50 border border-white/20 p-3 text-white focus:border-hd-orange outline-none transition-colors" />
                    </div>
                    <div>
                        <label className="block text-gray-400 text-sm font-bold mb-2 uppercase">Cognome</label>
                        <input type="text" required className="w-full bg-black/50 border border-white/20 p-3 text-white focus:border-hd-orange outline-none transition-colors" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-gray-400 text-sm font-bold mb-2 uppercase">Email</label>
                        <input type="email" required className="w-full bg-black/50 border border-white/20 p-3 text-white focus:border-hd-orange outline-none transition-colors" />
                    </div>
                    <div>
                        <label className="block text-gray-400 text-sm font-bold mb-2 uppercase">Telefono</label>
                        <input type="tel" required className="w-full bg-black/50 border border-white/20 p-3 text-white focus:border-hd-orange outline-none transition-colors" />
                    </div>
                </div>

                <div className="border-t border-white/10 my-8 pt-8">
                    <h3 className="text-xl font-condensed font-bold text-white uppercase mb-6 flex items-center gap-2">
                        <Settings className="text-hd-orange" size={20} /> Dettagli Ricambio
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-gray-400 text-sm font-bold mb-2 uppercase">Modello Moto</label>
                            <input type="text" required placeholder="es. Road Glide" className="w-full bg-black/50 border border-white/20 p-3 text-white focus:border-hd-orange outline-none transition-colors" />
                        </div>
                        <div>
                            <label className="block text-gray-400 text-sm font-bold mb-2 uppercase">Anno</label>
                            <input type="number" required placeholder="es. 2023" className="w-full bg-black/50 border border-white/20 p-3 text-white focus:border-hd-orange outline-none transition-colors" />
                        </div>
                        <div className="md:col-span-2">
                             <label className="block text-gray-400 text-sm font-bold mb-2 uppercase">Codice Ricambio (se noto)</label>
                             <input type="text" className="w-full bg-black/50 border border-white/20 p-3 text-white focus:border-hd-orange outline-none transition-colors" />
                        </div>
                    </div>
                </div>

                <div>
                    <label className="block text-gray-400 text-sm font-bold mb-2 uppercase">Descrizione Richiesta</label>
                    <textarea rows="4" required placeholder="Descrivi il pezzo che stai cercando..." className="w-full bg-black/50 border border-white/20 p-3 text-white focus:border-hd-orange outline-none transition-colors"></textarea>
                </div>

                <button type="submit" className="w-full bg-hd-orange text-white py-4 font-bold font-condensed uppercase hover:bg-white hover:text-black transition-all clip-slant mt-8 text-xl">
                    Invia Richiesta
                </button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default PartsRequest;
