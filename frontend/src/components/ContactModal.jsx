import React, { useState, useEffect } from 'react';
import { X, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    privacy: false
  });
  
  const [status, setStatus] = useState('idle');

  // Reset form when modal opens/closes
  useEffect(() => {
    if (!isOpen) {
        setStatus('idle');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '', privacy: false });
    }
  }, [isOpen]);

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
    
    setTimeout(() => {
        setStatus('success');
        setTimeout(() => {
            onClose();
        }, 2000);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            ></motion.div>

            {/* Modal Content */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative bg-hd-charcoal border border-white/10 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl rounded-sm"
            >
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
                >
                    <X size={24} />
                </button>

                <div className="p-8 md:p-10">
                    <h2 className="font-condensed font-bold text-3xl text-white uppercase mb-2">Contattaci</h2>
                    <p className="text-gray-400 mb-8">Compila il form per richiedere informazioni o prenotare un appuntamento.</p>

                    {status === 'success' ? (
                        <div className="bg-green-600/20 border border-green-500 text-green-100 p-8 text-center flex flex-col items-center justify-center gap-4 min-h-[300px]">
                            <CheckCircle size={48} className="text-green-500" />
                            <div>
                                <h3 className="font-bold text-xl uppercase mb-2">Messaggio Inviato!</h3>
                                <p>Grazie per averci scritto. Ti risponderemo al più presto.</p>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Nome *</label>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-black/50 border border-gray-700 text-white p-3 focus:border-hd-orange outline-none" 
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Telefono</label>
                                    <input 
                                        type="tel" 
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange} 
                                        className="w-full bg-black/50 border border-gray-700 text-white p-3 focus:border-hd-orange outline-none" 
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Email *</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-black/50 border border-gray-700 text-white p-3 focus:border-hd-orange outline-none" 
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Oggetto</label>
                                <select 
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full bg-black/50 border border-gray-700 text-white p-3 focus:border-hd-orange outline-none appearance-none"
                                >
                                    <option value="">Seleziona un argomento...</option>
                                    <option value="preventivo">Richiesta Preventivo</option>
                                    <option value="testride">Test Ride</option>
                                    <option value="assistenza">Officina</option>
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
                                    className="w-full bg-black/50 border border-gray-700 text-white p-3 focus:border-hd-orange outline-none"
                                ></textarea>
                            </div>

                            <div className="flex items-start gap-3 my-4">
                                <input 
                                    type="checkbox" 
                                    name="privacy"
                                    id="modal-privacy"
                                    required
                                    checked={formData.privacy}
                                    onChange={handleChange}
                                    className="mt-1 accent-hd-orange w-4 h-4 cursor-pointer" 
                                />
                                <label htmlFor="modal-privacy" className="text-xs text-gray-400 cursor-pointer select-none">
                                    Accetto la privacy policy.
                                </label>
                            </div>

                            <button 
                                type="submit" 
                                disabled={status === 'submitting'}
                                className={`w-full bg-hd-orange text-white font-condensed font-bold uppercase py-3 hover:bg-white hover:text-black transition-all clip-slant ${status === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {status === 'submitting' ? 'Invio...' : 'Invia Messaggio'}
                            </button>
                        </form>
                    )}
                </div>
            </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;