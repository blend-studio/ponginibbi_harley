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
      <div className="bg-hd-dark min-h-screen">
         {/* Hero */}
         <div className="relative min-h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-black mb-12 md:mb-20">
            <div className="absolute inset-0">
                <img 
                    src="https://img.freepik.com/free-photo/full-shot-man-riding-motorbike_23-2150810243.jpg?t=st=1767091891~exp=1767095491~hmac=0a9bfb927248e154cdeffc95977f8aaf69824382204d02e00abd84b80ad87cb9&w=1060" 
                    alt="Custom Bike" 
                    className="w-full h-full object-cover opacity-40 grayscale hover:scale-105 transition-transform duration-[10s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent"></div>
            </div>
            <div className="relative z-10 text-center px-4 max-w-5xl pt-20">
                <div className="inline-block bg-hd-orange text-white font-bold uppercase tracking-[0.3em] px-6 py-2 mb-6 text-xs md:text-sm animate-fade-in-up">
                    Custom Kings
                </div>
                <h1 className="text-6xl md:text-[10rem] font-condensed font-bold text-white uppercase italic leading-[0.85] mb-6 drop-shadow-2xl animate-fade-in-up delay-100">
                    Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-hd-orange to-red-600">Dream</span>
                </h1>
                <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto font-sans leading-relaxed animate-fade-in-up delay-200">
                    La moto di serie è solo l'inizio. Rendila unica, rendila tua. Trasformiamo visioni in metallo e cromo.
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
                  <GalleryImage src="https://img.freepik.com/free-photo/model-career-kit-still-life_23-2150229753.jpg?t=st=1767091952~exp=1767095552~hmac=8c4903869ad282d99558ed1d1d9baeacb89ab5bc8ad59cdde76e1cb93170e051&w=1060" title="Bobber" />
                  <GalleryImage src="https://img.freepik.com/free-photo/red-motor-biking-road_114579-5071.jpg?t=st=1767091891~exp=1767095491~hmac=6130f968067151f6841975acc6f729a59cd3724a974920c36b6e5d384fa1460b&w=1060" title="Chopper" />
                  <GalleryImage src="https://img.freepik.com/free-photo/biking-motorcycle-forest_114579-5198.jpg?t=st=1767091041~exp=1767094641~hmac=eb78590e36e9afcf912609ca73db90bf1d5797444838d34653c3727d46844717&w=1060" title="Bagger" />
                  <GalleryImage src="https://img.freepik.com/free-photo/full-shot-man-riding-motorbike_23-2150810243.jpg?t=st=1767091891~exp=1767095491~hmac=0a9bfb927248e154cdeffc95977f8aaf69824382204d02e00abd84b80ad87cb9&w=1060" title="Club Style" />
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