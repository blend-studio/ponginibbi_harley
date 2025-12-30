import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/ui/SectionTitle';
import { Wrench, Settings, Warehouse, Calendar } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, image, path }) => (
  <Link to={path} className="group relative overflow-hidden bg-hd-charcoal border border-white/10 h-[400px] flex flex-col justify-end p-8 transition-transform hover:-translate-y-2 cursor-pointer">
    <div className="absolute inset-0 z-0">
        <img src={image} alt={title} className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
    </div>
    <div className="relative z-10">
        <div className="bg-hd-orange w-12 h-12 flex items-center justify-center mb-4 clip-slant">
            <Icon className="text-white" size={24} />
        </div>
        <h3 className="font-condensed font-bold text-3xl text-white mb-2 uppercase">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
    </div>
  </Link>
);

const Services = () => {
  return (
    <div className="bg-hd-dark min-h-screen pt-24 md:pt-36 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-12 md:mb-16">
            <SectionTitle title="Service & Assistenza" subtitle="OFFICINA AUTORIZZATA" center={true} />
            <p className="max-w-2xl mx-auto text-gray-400 mt-4 text-sm md:text-base">
                La tua Harley-Davidson® è più di una macchina, è un'estensione della tua anima. 
                Affidala a chi conosce ogni singolo bullone. I nostri tecnici Master certificati H-D® 
                sono pronti a prendersene cura.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20">
            <ServiceCard 
                icon={Wrench}
                path="/services/maintenance"
                title="Manutenzione" 
                description="Tagliandi certificati, diagnostica avanzata e riparazioni con ricambi originali Genuine Motor Parts®. Mantieni il valore e le prestazioni della tua moto nel tempo."
                image="https://img.freepik.com/free-photo/biking-motorcycle-forest_114579-5198.jpg?t=st=1767091041~exp=1767094641~hmac=eb78590e36e9afcf912609ca73db90bf1d5797444838d34653c3727d46844717&w=1060"
            />
            <ServiceCard 
                icon={Settings}
                path="/services/customization"
                title="Customizzazione" 
                description="Dallo Stage I alle trasformazioni radicali. Consulenza dedicata per accessori Genuine Motor Accessories® e verniciature personalizzate. La tua visione, la nostra esperienza."
                image="https://img.freepik.com/free-photo/full-shot-man-riding-motorbike_23-2150810243.jpg?t=st=1767091891~exp=1767095491~hmac=0a9bfb927248e154cdeffc95977f8aaf69824382204d02e00abd84b80ad87cb9&w=1060"
            />
            <ServiceCard 
                icon={Warehouse}
                path="/services/winter-storage"
                title="Winter Storage" 
                description="Il sonno invernale perfetto. Rimessaggio in ambiente climatizzato, mantenimento carica batteria, lavaggio professionale e check-up completo pre-stagione."
                image="https://img.freepik.com/free-photo/model-career-kit-still-life_23-2150229753.jpg?t=st=1767091952~exp=1767095552~hmac=8c4903869ad282d99558ed1d1d9baeacb89ab5bc8ad59cdde76e1cb93170e051&w=1060"
            />
        </div>

        {/* CTA BOX */}
        <div className="bg-hd-charcoal border border-white/10 p-8 md:p-12 relative overflow-hidden clip-corner">
            <div className="absolute top-0 right-0 w-64 h-64 bg-hd-orange/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="text-center lg:text-left">
                    <h3 className="font-condensed font-bold text-3xl md:text-4xl text-white uppercase mb-2">Prenota il tuo intervento</h3>
                    <p className="text-gray-400 text-sm md:text-base">Evita l'attesa. Fissa un appuntamento online o chiamaci direttamente.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                    <button className="bg-hd-orange text-white px-8 py-4 font-condensed font-bold uppercase clip-slant hover:bg-white hover:text-black transition-colors w-full sm:w-auto">
                        Prenota Online
                    </button>
                    <button className="border border-white text-white px-8 py-4 font-condensed font-bold uppercase clip-slant hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2 w-full sm:w-auto">
                        <Calendar size={18} /> Orari Officina
                    </button>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Services;