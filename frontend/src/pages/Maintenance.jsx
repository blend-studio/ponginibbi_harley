import React, { useEffect, useState } from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import AnimatedPage from '../components/AnimatedPage';
import { Wrench, Award, Clock, CheckCircle, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceItem = ({ icon: Icon, title, description }) => (
    <div className="bg-white/5 p-8 border border-white/10 hover:border-hd-orange transition-all duration-300 group">
        <Icon size={40} className="text-hd-orange mb-4 group-hover:scale-110 transition-transform" />
        <h4 className="text-xl font-condensed font-bold uppercase text-white mb-2">{title}</h4>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
);

const Maintenance = () => {
    const [isIpad, setIsIpad] = useState(false);

    useEffect(() => {
        const detect = () => {
            try {
                const ua = navigator.userAgent || navigator.vendor || window.opera || '';
                const isiPadUA = /iPad/.test(ua);
                const isiPadOS = navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
                const isIpadDevice = isiPadUA || isiPadOS;
                const isPortrait = window.matchMedia ? window.matchMedia('(orientation: portrait)').matches : (window.innerHeight > window.innerWidth);
                const width = window.innerWidth || document.documentElement.clientWidth || 0;
                const isIpadBreakpoint = width >= 768 && width <= 1024;
                setIsIpad(Boolean(isIpadDevice && isPortrait && isIpadBreakpoint));
            } catch (e) {
                setIsIpad(false);
            }
        };

        detect();
        window.addEventListener('resize', detect);
        window.addEventListener('orientationchange', detect);
        return () => {
            window.removeEventListener('resize', detect);
            window.removeEventListener('orientationchange', detect);
        };
    }, []);

    return (
    <AnimatedPage>
    
      <div className="bg-hd-dark min-h-screen">
        {/* Hero */}
        <div className={`relative min-h-[55vh] md:h-[60vh] flex items-center justify-center overflow-hidden md:overflow-visible bg-black mb-12 md:mb-20 ${isIpad ? 'ipad-portrait-hero' : ''}`}>
            <div className="absolute inset-0">
                <img 
                    src="https://img.freepik.com/free-photo/red-motor-biking-road_114579-5071.jpg?t=st=1767091891~exp=1767095491~hmac=6130f968067151f6841975acc6f729a59cd3724a974920c36b6e5d384fa1460b&w=1060" 
                    alt="Service Workshop" 
                    className="w-full h-full object-cover opacity-40 grayscale hover:scale-105 transition-transform duration-[10s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent"></div>
            </div>
            <div className="relative z-10 text-center px-4 max-w-5xl pt-8 md:pt-12">
                <div className="inline-block bg-hd-orange text-white font-bold uppercase tracking-[0.3em] px-6 py-2 mb-6 text-xs md:text-sm animate-fade-in-up">
                    Master Technicians
                </div>
                <h1 className="maintenance-hero-title text-4xl sm:text-5xl md:text-[6rem] lg:text-[7rem] xl:text-[8rem] font-condensed font-bold text-white uppercase italic leading-[0.95] mb-6 drop-shadow-2xl animate-fade-in-up delay-100">
                    Authorized <span className="text-transparent bg-clip-text bg-gradient-to-r from-hd-orange to-red-600">Service</span>
                </h1>
                <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto font-sans leading-relaxed animate-fade-in-up delay-200">
                    La tua Harley merita il meglio. Tecnici certificati, strumenti ufficiali e ricambi originali.
                </p>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20">
          
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 mb-24 items-center">
                            <div className="w-full max-w-2xl">
                                    <div className="section-title-wrapper">
                                        {!isIpad ? (
                                            <SectionTitle title="Manutenzione Ufficiale" subtitle="SERVICE" />
                                        ) : (
                                            <h1 className="section-title-fallback font-condensed font-bold text-white uppercase mb-6">
                                                <span className="text-hd-orange text-xs font-bold tracking-[0.3em] block mb-2">SERVICE</span>
                                                Manutenzione Ufficiale
                                            </h1>
                                        )}
                                    </div>
                  <p className="text-gray-400 mt-8 mb-8 text-lg leading-relaxed text-left">
                      Il nostro Service Department è il cuore pulsante della concessionaria. 
                      Ogni tecnico del nostro team segue un percorso di formazione continua presso la Harley-Davidson University, 
                      ottenendo certificazioni che garantiscono la massima competenza su ogni modello, dal Panhead al Pan America.
                  </p>
                  <div className="space-y-4 mb-8">
                      <div className="flex items-center gap-4">
                          <Award size={32} className="text-hd-orange" />
                          <div className="text-left">
                              <strong className="block text-white font-bold uppercase">Master Technicians</strong>
                              <span className="text-gray-500 text-sm">Il massimo livello di certificazione H-D.</span>
                          </div>
                      </div>
                      <div className="flex items-center gap-4">
                          <Wrench size={32} className="text-hd-orange" />
                          <div className="text-left">
                              <strong className="block text-white font-bold uppercase">Strumentazione Diagnostica</strong>
                              <span className="text-gray-500 text-sm">Digital Technician II per diagnosi precise.</span>
                          </div>
                      </div>
                  </div>
                  <div className="flex justify-start">
                    <Link to="/service-appointment" className="bg-hd-orange text-white px-8 py-3 font-bold font-condensed uppercase hover:bg-white hover:text-black transition-all clip-slant inline-block">
                      Prenota Appuntamento
                    </Link>
                  </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                   <ServiceItem 
                        icon={Clock}
                        title="Tagliandi Programmati"
                        description="Manutenzione ordinaria secondo gli standard della casa madre per mantenere la garanzia."
                   />
                   <ServiceItem 
                        icon={ShieldCheck}
                        title="Estensione Garanzia"
                        description="Programmi H-D Extended Warranty per proteggere il tuo investimento nel tempo."
                   />
                   <ServiceItem 
                        icon={Wrench}
                        title="Riparazioni Complesse"
                        description="Rifacimento motori, interventi sulla trasmissione e sull'impianto elettrico."
                   />
                   <ServiceItem 
                        icon={CheckCircle}
                        title="Campagne di Richiamo"
                        description="Verifica ed esecuzione gratuita di tutte le campagne di sicurezza ufficiali."
                   />
              </div>
          </div>
          

          {/* Express Lane Section */}
          <div className="bg-white/5 border border-white/10 p-12 relative overflow-hidden mb-20">
                <div className="absolute top-0 right-0 w-64 h-64 bg-hd-orange/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
                    <div className="flex-1">
                        <span className="text-hd-orange font-bold tracking-widest uppercase text-sm mb-2 block">Senza Appuntamento</span>
                        <h3 className="text-4xl font-condensed font-bold uppercase text-white mb-4">Express Lane™</h3>
                        <p className="text-gray-400 text-lg mb-6">
                            Per interventi rapidi che richiedono meno di un'ora, passa direttamente in concessionaria. 
                            Cambio olio, gomme, pastiglie freni o manopole. Ti aspettiamo.
                        </p>
                        <Link to="/services/express-lane" className="text-white border-b border-hd-orange pb-1 font-bold uppercase hover:text-hd-orange transition-colors">
                            Scopri quali servizi sono inclusi
                        </Link>
                    </div>
                    <div className="w-full md:w-1/3">
                        <img src="https://img.freepik.com/free-photo/model-career-kit-still-life_23-2150229753.jpg?t=st=1767091952~exp=1767095552~hmac=8c4903869ad282d99558ed1d1d9baeacb89ab5bc8ad59cdde76e1cb93170e051&w=1060" alt="Express Lane" className="w-full h-auto rounded-sm border border-white/20" />
                    </div>
                </div>
          </div>

        </div>
      </div>
    </AnimatedPage>
  );
};

export default Maintenance;