import React, { useState } from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import { Calculator, FileText, CheckCircle, Plus, Minus, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const FinanceOption = ({ title, subtitle, features, recommended }) => (
  <div className={`bg-white/5 border p-6 md:p-8 flex flex-col h-full transition-all duration-300 relative ${recommended ? 'border-hd-orange scale-105 z-10 bg-white/10' : 'border-white/10 hover:border-hd-orange hover:bg-white/5'}`}>
    {recommended && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-hd-orange text-white text-xs font-bold uppercase py-1 px-3 rounded-full shadow-lg">
            Più Popolare
        </div>
    )}
    <div className="mb-6 text-center mt-2">
        <h3 className="text-2xl md:text-3xl font-condensed font-bold uppercase text-white mb-2">{title}</h3>
        <p className="text-hd-orange font-bold uppercase text-xs md:text-sm tracking-wider">{subtitle}</p>
    </div>
    <ul className="space-y-4 mb-8 flex-grow">
        {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm">
                <CheckCircle size={16} className="text-hd-orange shrink-0 mt-0.5" />
                <span className="leading-tight">{feature}</span>
            </li>
        ))}
    </ul>
    <Link 
        to="/finance/request" 
        className={`w-full text-center border py-3 font-condensed font-bold uppercase transition-all clip-slant text-sm md:text-base ${recommended ? 'bg-hd-orange border-hd-orange text-white hover:bg-white hover:text-black hover:border-white' : 'bg-white text-black border-white hover:bg-hd-orange hover:text-white'}`}
    >
        Richiedi Info
    </Link>
  </div>
);

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-white/10 last:border-0">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-5 md:py-6 flex justify-between items-center text-left hover:text-hd-orange transition-colors"
            >
                <span className="text-base md:text-lg font-condensed font-bold uppercase pr-4">{question}</span>
                {isOpen ? <Minus size={20} className="text-hd-orange shrink-0" /> : <Plus size={20} className="shrink-0" />}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-gray-400 leading-relaxed text-sm md:text-base">{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Finance = () => {
  return (
    <div className="bg-hd-dark min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://img.freepik.com/free-photo/red-motor-biking-road_114579-5071.jpg?t=st=1767091891~exp=1767095491~hmac=6130f968067151f6841975acc6f729a59cd3724a974920c36b6e5d384fa1460b&w=1060" 
            alt="Harley Finance" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-hd-dark/50 to-hd-dark"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 pt-20">
          <h1 className="text-4xl md:text-8xl font-condensed font-bold text-white mb-4 uppercase tracking-tight leading-none">
            H-D Financial <br /><span className="text-hd-orange">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Realizza il tuo sogno. Soluzioni flessibili per portarti in sella alla tua Harley-Davidson oggi stesso.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
        
        {/* Intro & Docs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 mb-20 md:mb-24 items-center">
            <div>
                <SectionTitle title="Finanziamenti su misura" subtitle="LA TUA STRADA" />
                <p className="text-gray-400 mt-6 md:mt-8 mb-6 text-base md:text-lg leading-relaxed">
                    Non esiste un unico modo per acquistare una Harley-Davidson®. Offriamo una gamma completa di opzioni di finanziamento flessibili, progettate per adattarsi al tuo budget e al tuo stile di vita. Che tu voglia cambiare moto ogni 3 anni o tenerla per sempre, abbiamo la soluzione per te.
                </p>
                <div className="flex gap-4">
                    <Link to="/finance/request" className="bg-hd-orange text-white px-8 py-3 font-bold font-condensed uppercase hover:bg-white hover:text-black transition-all clip-slant text-sm md:text-base">
                        Calcola Rata
                    </Link>
                </div>
            </div>
            <div className="bg-white/5 p-6 md:p-8 border-l-4 border-hd-orange relative overflow-hidden mt-8 lg:mt-0">
                <div className="absolute top-0 right-0 -mr-8 -mt-8 opacity-5">
                    <FileText size={200} />
                </div>
                <h4 className="text-xl md:text-2xl font-condensed font-bold uppercase mb-6 relative z-10">Documenti Necessari</h4>
                <ul className="space-y-4 text-gray-400 relative z-10 text-sm md:text-base">
                    <li className="flex items-center gap-3"><span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-hd-orange font-bold shrink-0">1</span> Documento d'identità valido</li>
                    <li className="flex items-center gap-3"><span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-hd-orange font-bold shrink-0">2</span> Codice Fiscale</li>
                    <li className="flex items-center gap-3"><span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-hd-orange font-bold shrink-0">3</span> Ultima busta paga o Modello Unico</li>
                    <li className="flex items-center gap-3"><span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-hd-orange font-bold shrink-0">4</span> IBAN per l'addebito</li>
                </ul>
            </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 mb-20 md:mb-24 items-start pt-4">
            <FinanceOption 
                title="Harley | Own"
                subtitle="Finanziamento Classico"
                features={[
                    "Rate mensili costanti per tutta la durata",
                    "Durata flessibile da 12 a 72 mesi",
                    "Possibilità di includere accessori, abbigliamento e assicurazione",
                    "Proprietà immediata della moto al 100%",
                    "Nessun limite di chilometraggio"
                ]}
            />
            <FinanceOption 
                title="Harley | Loan"
                subtitle="Valore Futuro Garantito"
                recommended={true}
                features={[
                    "Rate mensili più basse rispetto al finanziamento classico",
                    "Decidi alla fine del contratto (23 o 35 mesi) se tenere, restituire o cambiare la moto",
                    "Valore futuro garantito dal concessionario",
                    "Massima flessibilità per cambiare modello spesso",
                    "Anticipo variabile"
                ]}
            />
            <FinanceOption 
                title="Harley | Lease"
                subtitle="Leasing Finanziario"
                features={[
                    "Ideale per aziende, professionisti e partite IVA",
                    "Canoni mensili deducibili fiscalmente",
                    "Anticipo variabile in base alle esigenze",
                    "Possibilità di riscatto finale",
                    "Gestione semplificata del parco mezzi"
                ]}
            />
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10 md:mb-12">
                <HelpCircle size={40} className="text-hd-orange mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-condensed font-bold uppercase text-white">Domande Frequenti</h2>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-6 md:p-8">
                <FAQItem 
                    question="Posso finanziare anche l'abbigliamento e gli accessori?" 
                    answer="Assolutamente sì. Con Harley|Own puoi includere nel finanziamento anche l'acquisto di abbigliamento tecnico, accessori e parti speciali, per avere un'unica rata mensile."
                />
                <FAQItem 
                    question="Qual è l'anticipo minimo richiesto?" 
                    answer="L'anticipo è variabile e dipende dal tipo di finanziamento e dal tuo profilo di credito. In alcuni casi è possibile finanziare l'intero importo senza anticipo."
                />
                <FAQItem 
                    question="Cosa succede alla fine del contratto Harley|Loan?" 
                    answer="Hai tre opzioni: 1) Saldi la maxi-rata finale e tieni la moto. 2) Restituisci la moto al concessionario senza costi aggiuntivi (rispettando km e condizioni). 3) Utilizzi il valore della moto come anticipo per una nuova Harley-Davidson."
                />
                <FAQItem 
                    question="Quanto tempo ci vuole per l'approvazione?" 
                    answer="Generalmente riusciamo a darti una risposta entro 24/48 ore dalla presentazione di tutti i documenti necessari."
                />
            </div>
        </div>

      </div>
    </div>
  );
};

export default Finance;
