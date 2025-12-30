import React, { useState } from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import { Calendar, CheckCircle } from 'lucide-react';

const TestRide = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically send the data to the backend
  };

  if (submitted) {
    return (
        <div className="min-h-screen bg-hd-dark pt-32 flex items-center justify-center px-4">
            <div className="bg-white/5 p-12 text-center border border-hd-orange max-w-2xl">
                <CheckCircle size={64} className="text-hd-orange mx-auto mb-6" />
                <h2 className="text-4xl font-condensed font-bold text-white uppercase mb-4">Richiesta Ricevuta!</h2>
                <p className="text-gray-300 text-lg mb-8">
                    Il nostro team ti contatterà al più presto per confermare la disponibilità della moto e l'orario del tuo Test Ride.
                    Preparati a sentire il rombo.
                </p>
                <button onClick={() => setSubmitted(false)} className="text-hd-orange font-bold uppercase hover:text-white underline">
                    Prenota un altro test ride
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
                Prova su <span className="text-hd-orange">Strada</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                L'unico modo per capire una Harley-Davidson è guidarla. 
                Prenota oggi il tuo test ride gratuito e senza impegno.
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

                <div>
                    <label className="block text-gray-400 text-sm font-bold mb-2 uppercase">Modello di interesse</label>
                    <select className="w-full bg-black/50 border border-white/20 p-3 text-white focus:border-hd-orange outline-none transition-colors">
                        <option value="">Seleziona una moto...</option>
                        <optgroup label="Grand American Touring">
                            <option>Street Glide Special</option>
                            <option>Road Glide Special</option>
                            <option>Road King Special</option>
                        </optgroup>
                        <optgroup label="Cruiser">
                            <option>Softail Standard</option>
                            <option>Street Bob 114</option>
                            <option>Fat Bob 114</option>
                            <option>Low Rider S</option>
                            <option>Breakout 117</option>
                        </optgroup>
                        <optgroup label="Adventure Touring">
                            <option>Pan America 1250</option>
                            <option>Pan America 1250 Special</option>
                        </optgroup>
                        <optgroup label="Sport">
                            <option>Sportster S</option>
                            <option>Nightster</option>
                        </optgroup>
                    </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-gray-400 text-sm font-bold mb-2 uppercase">Data Preferita</label>
                        <div className="relative">
                            <input type="date" required className="w-full bg-black/50 border border-white/20 p-3 text-white focus:border-hd-orange outline-none transition-colors" />
                            <Calendar className="absolute right-3 top-3 text-gray-500 pointer-events-none" size={20} />
                        </div>
                    </div>
                    <div>
                        <label className="block text-gray-400 text-sm font-bold mb-2 uppercase">Patente</label>
                        <select className="w-full bg-black/50 border border-white/20 p-3 text-white focus:border-hd-orange outline-none transition-colors">
                            <option>Patente A (Illimitata)</option>
                            <option>Patente A2</option>
                            <option>Patente A1</option>
                        </select>
                    </div>
                </div>

                <div className="flex items-start gap-3 mt-4">
                    <input type="checkbox" required id="privacy" className="mt-1" />
                    <label htmlFor="privacy" className="text-gray-400 text-sm">
                        Acconsento al trattamento dei dati personali secondo la <a href="#" className="text-hd-orange hover:underline">Privacy Policy</a>.
                    </label>
                </div>

                <button type="submit" className="w-full bg-hd-orange text-white py-4 font-bold font-condensed uppercase hover:bg-white hover:text-black transition-all clip-slant mt-8 text-xl">
                    Richiedi Test Ride
                </button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default TestRide;
