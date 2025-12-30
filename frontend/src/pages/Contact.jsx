import React, { useState } from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import { MapPin, Phone, Mail, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    privacy: false
  });
  
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.privacy) return;

    setStatus('submitting');
    
    // Simula invio API
    setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '', privacy: false });
        // Reset status dopo 5 secondi
        setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <div className="bg-hd-dark min-h-screen pt-24 md:pt-36 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        
        <SectionTitle title="Chi Siamo" subtitle="PONGINIBBI GROUP" />

        {/* STORY SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 md:mb-20 items-center">
            <div className="text-base md:text-lg text-gray-300 space-y-6">
                <p>
                    <strong className="text-white text-2xl font-condensed uppercase block mb-2">United We Ride.</strong>
                    La nostra missione è realizzare i sogni di libertà personale. Da oltre 50 anni, il Gruppo Ponginibbi è sinonimo di eccellenza automobilistica e motociclistica a Piacenza.
                </p>
                <p>
                    Essere una concessionaria ufficiale Harley-Davidson® significa molto più che vendere motociclette. 
                    Significa essere custodi di un'eredità centenaria. Significa accogliere ogni motociclista in una famiglia 
                    dove il rombo del motore è l'unica lingua che conta.
                </p>
                <p>
                    Nel nostro showroom di Via Emilia Pavese troverai non solo gli ultimi modelli e l'usato certificato, 
                    ma un team di appassionati pronti a consigliarti, un'officina d'avanguardia e un'area relax dove condividere 
                    le tue storie di viaggio.
                </p>
            </div>
            <div className="relative mt-8 lg:mt-0">
                 <div className="absolute top-4 -left-4 w-full h-full border-2 border-hd-orange z-0 hidden sm:block"></div>
                 <img src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2670&auto=format&fit=crop" className="relative z-10 w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl rounded-sm" alt="Showroom" />
            </div>
        </div>
        
        <div className="h-px bg-white/10 w-full mb-16 md:mb-20"></div>

        <SectionTitle title="Contattaci" subtitle="VIENI A TROVARCI" center={true} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            <div className="order-2 lg:order-1">
                <h3 className="text-2xl md:text-3xl font-condensed font-bold text-white mb-6 uppercase">Info & Contatti</h3>
                <p className="text-gray-400 mb-8 text-sm md:text-base">
                    Siamo a tua disposizione per qualsiasi informazione su moto, assistenza, ricambi o abbigliamento.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6">
                    <div className="flex items-start gap-4 p-4 border border-white/5 bg-white/5 hover:border-hd-orange transition-colors">
                        <MapPin className="text-hd-orange mt-1 shrink-0" />
                        <div>
                            <h4 className="font-bold text-white uppercase text-sm mb-1">Indirizzo</h4>
                            <p className="text-gray-400 text-sm">Via Emilia Pavese, Piacenza</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 border border-white/5 bg-white/5 hover:border-hd-orange transition-colors">
                        <Phone className="text-hd-orange mt-1 shrink-0" />
                        <div>
                            <h4 className="font-bold text-white uppercase text-sm mb-1">Telefono</h4>
                            <p className="text-gray-400 text-sm">0523 123456</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 border border-white/5 bg-white/5 hover:border-hd-orange transition-colors">
                        <Mail className="text-hd-orange mt-1 shrink-0" />
                        <div>
                            <h4 className="font-bold text-white uppercase text-sm mb-1">Email</h4>
                            <p className="text-gray-400 text-sm">info@ponginibbi.it</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4 p-4 border border-white/5 bg-white/5 hover:border-hd-orange transition-colors sm:col-span-2 lg:col-span-1">
                        <Clock className="text-hd-orange mt-1 shrink-0" />
                        <div>
                            <h4 className="font-bold text-white uppercase text-sm mb-1">Orari Showroom</h4>
                            <p className="text-gray-400 text-sm">Lun - Ven: 08:30 - 12:30 / 14:30 - 19:00</p>
                            <p className="text-gray-400 text-sm">Sabato: 09:00 - 12:30 / 15:00 - 18:00</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="bg-white/5 p-6 md:p-8 border border-white/10 h-fit relative order-1 lg:order-2">
                 <h3 className="text-2xl font-condensed font-bold text-white mb-6 uppercase">Scrivici</h3>
                 
                 <AnimatePresence>
                    {status === 'success' && (
                        <motion.div 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="bg-green-600/20 border border-green-500 text-green-100 p-4 mb-6 flex items-center gap-3"
                        >
                            <CheckCircle size={24} />
                            <div>
                                <p className="font-bold uppercase text-sm">Messaggio Inviato</p>
                                <p className="text-xs">Grazie per averci contattato. Ti risponderemo al più presto.</p>
                            </div>
                        </motion.div>
                    )}
                 </AnimatePresence>

                 <form onSubmit={handleSubmit} className="space-y-4">
                     <div>
                         <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Nome e Cognome *</label>
                         <input 
                            type="text" 
                            name="name" 
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-black/50 border border-gray-700 text-white p-3 focus:border-hd-orange outline-none transition-colors" 
                        />
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Email *</label>
                            <input 
                                type="email" 
                                name="email" 
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-black/50 border border-gray-700 text-white p-3 focus:border-hd-orange outline-none transition-colors" 
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Telefono</label>
                            <input 
                                type="tel" 
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange} 
                                className="w-full bg-black/50 border border-gray-700 text-white p-3 focus:border-hd-orange outline-none transition-colors" 
                            />
                        </div>
                     </div>
                     <div>
                         <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Oggetto</label>
                         <select 
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full bg-black/50 border border-gray-700 text-white p-3 focus:border-hd-orange outline-none transition-colors appearance-none"
                        >
                            <option value="">Seleziona un argomento...</option>
                            <option value="preventivo">Richiesta Preventivo Moto</option>
                            <option value="testride">Prenotazione Test Ride</option>
                            <option value="assistenza">Officina & Tagliandi</option>
                            <option value="ricambi">Ricambi & Accessori</option>
                            <option value="altro">Altro</option>
                        </select>
                     </div>
                     <div>
                         <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Messaggio *</label>
                         <textarea 
                            rows="4" 
                            name="message"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full bg-black/50 border border-gray-700 text-white p-3 focus:border-hd-orange outline-none transition-colors"
                        ></textarea>
                     </div>

                     <div className="flex items-start gap-3 my-4">
                        <input 
                            type="checkbox" 
                            name="privacy"
                            id="privacy"
                            required
                            checked={formData.privacy}
                            onChange={handleChange}
                            className="mt-1 accent-hd-orange w-4 h-4 cursor-pointer" 
                        />
                        <label htmlFor="privacy" className="text-xs text-gray-400 cursor-pointer select-none leading-tight">
                            Dichiaro di aver letto l'informativa sulla privacy e acconsento al trattamento dei miei dati personali ai sensi del GDPR.
                        </label>
                     </div>

                     <button 
                        type="submit" 
                        disabled={status === 'submitting'}
                        className={`w-full bg-hd-orange text-white font-condensed font-bold uppercase py-3 hover:bg-white hover:text-black transition-all clip-slant ${status === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                     >
                         {status === 'submitting' ? 'Invio in corso...' : 'Invia Messaggio'}
                     </button>
                 </form>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
