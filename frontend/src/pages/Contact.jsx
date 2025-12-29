import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-hd-dark min-h-screen pt-36 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle title="Chi Siamo" subtitle="Contatti e Info" center={true} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div>
                <h3 className="text-3xl font-condensed font-bold text-white mb-6 uppercase">Ponginibbi Group</h3>
                <p className="text-gray-400 mb-8">
                    La tua concessionaria ufficiale Harley-Davidson di riferimento a Piacenza. 
                    Da anni portiamo avanti la leggenda con passione e professionalità.
                </p>
                
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <MapPin className="text-hd-orange mt-1" />
                        <div>
                            <h4 className="font-bold text-white">Indirizzo</h4>
                            <p className="text-gray-400">Via Emilia Pavese, Piacenza</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Phone className="text-hd-orange mt-1" />
                        <div>
                            <h4 className="font-bold text-white">Telefono</h4>
                            <p className="text-gray-400">0523 123456</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Mail className="text-hd-orange mt-1" />
                        <div>
                            <h4 className="font-bold text-white">Email</h4>
                            <p className="text-gray-400">info@ponginibbi.it</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <Clock className="text-hd-orange mt-1" />
                        <div>
                            <h4 className="font-bold text-white">Orari</h4>
                            <p className="text-gray-400">Lun - Ven: 08:30 - 12:30 / 14:30 - 19:00</p>
                            <p className="text-gray-400">Sabato: 09:00 - 12:30 / 15:00 - 18:00</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="bg-white/5 p-8 border border-white/10">
                 <h3 className="text-2xl font-condensed font-bold text-white mb-6 uppercase">Scrivici</h3>
                 <form className="space-y-4">
                     <div>
                         <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Nome</label>
                         <input type="text" className="w-full bg-black/50 border border-gray-700 text-white p-3 focus:border-hd-orange outline-none" />
                     </div>
                     <div>
                         <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Email</label>
                         <input type="email" className="w-full bg-black/50 border border-gray-700 text-white p-3 focus:border-hd-orange outline-none" />
                     </div>
                     <div>
                         <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Messaggio</label>
                         <textarea rows="4" className="w-full bg-black/50 border border-gray-700 text-white p-3 focus:border-hd-orange outline-none"></textarea>
                     </div>
                     <button className="w-full bg-hd-orange text-white font-condensed font-bold uppercase py-3 hover:bg-white hover:text-black transition-colors">
                         Invia Messaggio
                     </button>
                 </form>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;