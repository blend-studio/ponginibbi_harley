import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import AnimatedPage from '../components/AnimatedPage';
import { Settings, PenTool, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const StageCard = ({ level, title, description }) => (
    <div className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors">
        <span className="text-4xl font-black text-hd-orange mb-4 block">Stage {level}</span>
        <h4 className="text-xl font-condensed font-bold uppercase text-white mb-2">{title}</h4>
        <p className="text-gray-400 text-sm">{description}</p>
    </div>
);

const GalleryImage = ({ src, title }) => (
    <div className="relative group overflow-hidden aspect-square">
        <img src={src} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <h4 className="text-2xl font-condensed font-bold text-white uppercase text-center px-4">{title}</h4>
        </div>
    </div>
);

const Customization = () => {
  return (
    <AnimatedPage>
      <div className="bg-hd-dark min-h-screen pt-20">
         {/* Hero */}
         <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
                <img 
                    src="https://images.unsplash.com/photo-1609630875171-b1321377ee53?q=80&w=2670&auto=format&fit=crop" 
                    alt="Custom Bike" 
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hd-dark via-transparent to-transparent"></div>
            </div>
            <div className="relative z-10 text-center px-4">
                <h1 className="text-5xl md:text-8xl font-condensed font-bold text-white mb-6 uppercase tracking-tight">
                    Build Your <span className="text-hd-orange">Dream</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    La moto di serie è solo l'inizio. Rendila unica, rendila tua.
                </p>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
               <div>
                  <SectionTitle title="Custom Kings" subtitle="PERSONALIZZAZIONE" />
                  <p className="text-gray-400 mt-8 mb-8 text-lg leading-relaxed">
                      Dallo Stage I per dare voce al motore, a trasformazioni radicali di telaio e carrozzeria. 
                      Il nostro reparto custom lavora con passione per realizzare la moto che hai sempre sognato, 
                      utilizzando accessori originali H-D e le migliori parti aftermarket.
                  </p>
                  <ul className="space-y-4 mb-8">
                      <li className="flex items-center gap-3 text-white font-bold uppercase"><PenTool className="text-hd-orange" /> Verniciature Custom</li>
                      <li className="flex items-center gap-3 text-white font-bold uppercase"><Settings className="text-hd-orange" /> Manubri e Comandi</li>
                      <li className="flex items-center gap-3 text-white font-bold uppercase"><Zap className="text-hd-orange" /> Performance & Tuning</li>
                  </ul>
                  <Link to="/parts-request" className="bg-hd-orange text-white px-8 py-3 font-bold font-condensed uppercase hover:bg-white hover:text-black transition-all clip-slant inline-block">
                     Richiedi Consulenza
                  </Link>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <StageCard 
                        level="I" 
                        title="Intake + Exhaust + Tuning" 
                        description="Migliora il flusso d'aria e il sound. La base di ogni elaborazione." 
                   />
                   <StageCard 
                        level="II" 
                        title="Torque & Power Cam" 
                        description="Scegli tra coppia ai bassi o potenza agli alti con un nuovo albero a camme." 
                   />
                   <StageCard 
                        level="III" 
                        title="Big Bore Cylinder" 
                        description="Aumenta la cilindrata e la compressione per prestazioni superiori." 
                   />
                   <StageCard 
                        level="IV" 
                        title="Heads & Throttle Body" 
                        description="Massimizza il flusso d'aria con teste lavorate e corpo farfallato maggiorato." 
                   />
               </div>
          </div>

          {/* Gallery */}
          <div className="mb-20">
              <h3 className="text-4xl font-condensed font-bold uppercase text-white mb-8 text-center">Inspiration Gallery</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
                  <GalleryImage src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2670&auto=format&fit=crop" title="Bobber" />
                  <GalleryImage src="https://images.unsplash.com/photo-1558980394-4c7c9299fe96?q=80&w=2670&auto=format&fit=crop" title="Chopper" />
                  <GalleryImage src="https://images.unsplash.com/photo-1558981852-426c6c22a060?q=80&w=2671&auto=format&fit=crop" title="Bagger" />
                  <GalleryImage src="https://images.unsplash.com/photo-1558980394-0a06c46e60e7?q=80&w=2670&auto=format&fit=crop" title="Club Style" />
              </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-white/5 p-16 border border-white/10">
              <h2 className="text-4xl font-condensed font-bold uppercase text-white mb-6">Hai un'idea in mente?</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                  Vieni a parlarne con i nostri Custom Specialist. Trasformeremo la tua visione in metallo e cromo.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 text-hd-orange font-bold uppercase text-xl hover:text-white transition-colors">
                  Contattaci per un appuntamento <ArrowRight size={24} />
              </Link>
          </div>

        </div>
      </div>
    </AnimatedPage>
  );
};

export default Customization;