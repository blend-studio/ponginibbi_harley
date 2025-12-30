import React, { useState } from 'react';
import { Calendar, CheckCircle } from 'lucide-react';

const RentalsBooking = () => {
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
                <h2 className="text-4xl font-condensed font-bold text-white uppercase mb-4">Prenotazione Inviata!</h2>
                <p className="text-gray-300 text-lg mb-8">
                    La tua richiesta di noleggio è stata ricevuta. 
                    Ti invieremo un preventivo e la conferma della disponibilità via email.
                </p>
                <button onClick={() => setSubmitted(false)} className="text-hd-orange font-bold uppercase hover:text-white underline">
                    Nuova prenotazione
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
                Prenota <span className="text-hd-orange">Noleggio</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Scegli le date, scegli la moto, parti.
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-gray-400 text-sm font-bold mb-2 uppercase">Data Inizio</label>
                        <div className="relative">
                            <input type="date" required className="w-full bg-black/50 border border-white/20 p-3 text-white focus:border-hd-orange outline-none transition-colors" />
                            <Calendar className="absolute right-3 top-3 text-gray-500 pointer-events-none" size={20} />
                        </div>
                    </div>
                    <div>
                        <label className="block text-gray-400 text-sm font-bold mb-2 uppercase">Data Fine</label>
                        <div className="relative">
                            <input type="date" required className="w-full bg-black/50 border border-white/20 p-3 text-white focus:border-hd-orange outline-none transition-colors" />
                            <Calendar className="absolute right-3 top-3 text-gray-500 pointer-events-none" size={20} />
                        </div>
                    </div>
                </div>

                <div>
                    <label className="block text-gray-400 text-sm font-bold mb-2 uppercase">Modello Preferito</label>
                    <select className="w-full bg-black/50 border border-white/20 p-3 text-white focus:border-hd-orange outline-none transition-colors">
                        <option>Qualsiasi Touring</option>
                        <option>Street Glide</option>
                        <option>Road Glide</option>
                        <option>Heritage Classic</option>
                        <option>Pan America 1250</option>
                    </select>
                </div>

                <div className="flex items-start gap-3 mt-4">
                    <input type="checkbox" required id="license" className="mt-1" />
                    <label htmlFor="license" className="text-gray-400 text-sm">
                        Dichiaro di essere in possesso di patente A valida da almeno 3 anni.
                    </label>
                </div>

                <button type="submit" className="w-full bg-hd-orange text-white py-4 font-bold font-condensed uppercase hover:bg-white hover:text-black transition-all clip-slant mt-8 text-xl">
                    Richiedi Prenotazione
                </button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default RentalsBooking;
