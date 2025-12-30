import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import { Award, Users, Wrench, ArrowRight, Shield, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CourseCard = ({ title, subtitle, description, link, image }) => (
    <div className="group relative overflow-hidden bg-white/5 border border-white/10 hover:border-hd-orange transition-all duration-300 flex flex-col h-full">
        <div className="h-48 overflow-hidden">
            <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
        </div>
        <div className="p-8 flex flex-col flex-grow">
            <h3 className="text-3xl font-condensed font-bold uppercase text-white mb-2 group-hover:text-hd-orange transition-colors">{title}</h3>
            <span className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-4 block">{subtitle}</span>
            <p className="text-gray-400 mb-8 flex-grow">{description}</p>
            <Link to={link} className="inline-flex items-center gap-2 text-white font-bold uppercase text-sm tracking-wider group-hover:translate-x-2 transition-transform mt-auto">
                Scopri di più <ArrowRight size={16} className="text-hd-orange" />
            </Link>
        </div>
    </div>
);

const LearnToRide = () => {
  return (
    <div className="bg-hd-dark min-h-screen">
      {/* Hero */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src="https://img.freepik.com/free-photo/full-shot-man-riding-motorbike_23-2150810243.jpg?t=st=1767091891~exp=1767095491~hmac=0a9bfb927248e154cdeffc95977f8aaf69824382204d02e00abd84b80ad87cb9&w=1060" 
                        alt="Learn to Ride" 
                        className="w-full h-full object-cover opacity-60"
                    />
          <div className="absolute inset-0 bg-gradient-to-t from-hd-dark via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl pt-20">
          <h1 className="text-5xl md:text-8xl font-condensed font-bold text-white mb-6 uppercase tracking-tight">
            Inizia il <span className="text-hd-orange">Viaggio</span>
          </h1>
          <p className="text-xl md:text-2xl text-white font-light mb-8 max-w-3xl mx-auto">
            La strada è il posto migliore per imparare chi sei. 
            I nostri corsi certificati ti daranno le competenze per dominarla.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <SectionTitle title="Riding Academy" subtitle="CORSI DI GUIDA" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 mb-24">
            <CourseCard 
                title="Neofiti"
                subtitle="Nuovi Piloti"
                description="Il corso perfetto per chi non ha mai guidato o vuole partire dalle basi. Impara l'equilibrio, l'uso della frizione, le curve e la frenata in un ambiente sicuro e controllato."
                link="/learn-to-ride/new-rider"
                    image="https://img.freepik.com/free-photo/red-motor-biking-road_114579-5071.jpg?t=st=1767091891~exp=1767095491~hmac=6130f968067151f6841975acc6f729a59cd3724a974920c36b6e5d384fa1460b&w=1060"
            />
            <CourseCard 
                title="Esperti"
                subtitle="Piloti Navigati"
                description="Migliora le tue abilità, impara tecniche avanzate di controllo a bassa velocità, frenata d'emergenza e traiettorie per dominare ogni curva con sicurezza."
                link="/learn-to-ride/skilled"
                image="https://img.freepik.com/free-photo/biking-motorcycle-forest_114579-5198.jpg?t=st=1767091041~exp=1767094641~hmac=eb78590e36e9afcf912609ca73db90bf1d5797444838d34653c3727d46844717&w=1060"
            />
            <CourseCard 
                title="Workshop"
                subtitle="Tecnica & Manutenzione"
                description="Scopri i segreti della tua moto. Workshop pratici sulla manutenzione base, controlli pre-viaggio e sulla tecnologia H-D."
                link="/learn-to-ride/workshop"
                image="https://img.freepik.com/free-psd/white-hard-hat-safety-equipment-construction-work-protection_191095-80944.jpg?t=st=1767091891~exp=1767095491~hmac=6657fc156aca7c6e18010418a21f3b6b7aa62ca0f6a6ec4964166ea27f1523a4&w=1060"
            />
        </div>

        {/* Requirements & Gear */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
            <div className="bg-white/5 border border-white/10 p-10">
                <h3 className="text-3xl font-condensed font-bold uppercase mb-8 text-white">Cosa Portare</h3>
                <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                        <CheckCircle className="text-hd-orange shrink-0 mt-1" />
                        <div>
                            <strong className="block text-white uppercase text-sm tracking-wider mb-1">Casco Omologato</strong>
                            <p className="text-gray-400 text-sm">Integrale o modulare. Deve essere in buone condizioni.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <CheckCircle className="text-hd-orange shrink-0 mt-1" />
                        <div>
                            <strong className="block text-white uppercase text-sm tracking-wider mb-1">Giacca Tecnica</strong>
                            <p className="text-gray-400 text-sm">In pelle o tessuto tecnico resistente alle abrasioni.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <CheckCircle className="text-hd-orange shrink-0 mt-1" />
                        <div>
                            <strong className="block text-white uppercase text-sm tracking-wider mb-1">Guanti e Stivali</strong>
                            <p className="text-gray-400 text-sm">Guanti da moto che coprano le dita e stivali robusti sopra la caviglia.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <CheckCircle className="text-hd-orange shrink-0 mt-1" />
                        <div>
                            <strong className="block text-white uppercase text-sm tracking-wider mb-1">Pantaloni Lunghi</strong>
                            <p className="text-gray-400 text-sm">Jeans pesanti o pantaloni tecnici da moto. No pantaloncini.</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                 <h3 className="text-4xl font-condensed font-bold uppercase mb-6 text-white">I Nostri Istruttori</h3>
                 <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                     Impara dai migliori. I nostri istruttori sono certificati dalla Harley-Davidson Riding Academy e hanno anni di esperienza su strada e in pista.
                     Pazienza, professionalità e passione sono i loro marchi di fabbrica.
                 </p>
                 <div className="grid grid-cols-2 gap-4">
                     <div className="relative group overflow-hidden">
                         <img src="https://img.freepik.com/free-photo/model-career-kit-still-life_23-2150229753.jpg?t=st=1767091952~exp=1767095552~hmac=8c4903869ad282d99558ed1d1d9baeacb89ab5bc8ad59cdde76e1cb93170e051&w=1060" alt="Instructor" className="w-full h-48 object-cover grayscale group-hover:grayscale-0 transition-all" />
                         <div className="absolute bottom-0 left-0 bg-black/80 w-full p-2 text-center text-white font-bold font-condensed uppercase">Mario Rossi</div>
                     </div>
                     <div className="relative group overflow-hidden">
                         <img src="https://img.freepik.com/free-photo/full-shot-man-riding-motorbike_23-2150810243.jpg?t=st=1767091891~exp=1767095491~hmac=0a9bfb927248e154cdeffc95977f8aaf69824382204d02e00abd84b80ad87cb9&w=1060" alt="Instructor" className="w-full h-48 object-cover grayscale group-hover:grayscale-0 transition-all" />
                         <div className="absolute bottom-0 left-0 bg-black/80 w-full p-2 text-center text-white font-bold font-condensed uppercase">Luca Bianchi</div>
                     </div>
                 </div>
            </div>
        </div>

        {/* Jumpstart Section */}
        <div className="bg-gradient-to-r from-white/10 to-transparent border border-white/10 p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-hd-orange/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="flex-1 relative z-10">
                <span className="text-hd-orange font-bold tracking-widest uppercase text-sm mb-2 block">Non serve la patente</span>
                <h3 className="text-5xl font-condensed font-bold uppercase text-white mb-4">Jumpstart™</h3>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    Hai mai sognato di guidare una Harley-Davidson ma non sai guidare?
                    Il Jumpstart™ combina una moto Harley-Davidson con un supporto stabile e sicuro.
                    Sali in sella, accendi il motore, dai gas e cambia le marce. Senti le vibrazioni e il sound inconfondibile, in totale sicurezza.
                </p>
                <Link to="/learn-to-ride/jumpstart" className="bg-hd-orange text-white px-8 py-3 font-bold font-condensed uppercase hover:bg-white hover:text-black transition-all clip-slant inline-block">
                    Prenota la tua prova gratuita
                </Link>
            </div>
            <div className="flex-1 w-full relative z-10">
                <img 
                    src="https://img.freepik.com/free-photo/model-career-kit-still-life_23-2150229753.jpg?t=st=1767091952~exp=1767095552~hmac=8c4903869ad282d99558ed1d1d9baeacb89ab5bc8ad59cdde76e1cb93170e051&w=1060" 
                    alt="Jumpstart" 
                    className="w-full h-96 object-cover shadow-2xl border-4 border-white/10 rounded-sm"
                />
            </div>
        </div>
      </div>
    </div>
  );
};

export default LearnToRide;
