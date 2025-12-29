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
    <div className="bg-hd-dark min-h-screen pt-36 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-16">
            <SectionTitle title="Service & Assistenza" subtitle="OFFICINA AUTORIZZATA" center={true} />
            <p className="max-w-2xl mx-auto text-gray-400 mt-4">
                La tua Harley-Davidson® è più di una macchina, è un'estensione della tua anima. 
                Affidala a chi conosce ogni singolo bullone. I nostri tecnici Master certificati H-D® 
                sono pronti a prendersene cura.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <ServiceCard 
                icon={Wrench}
                path="/services/maintenance"
                title="Manutenzione" 
                description="Tagliandi certificati, diagnostica avanzata e riparazioni con ricambi originali Genuine Motor Parts®. Mantieni il valore e le prestazioni della tua moto nel tempo."
                image="https://images.unsplash.com/photo-1597762699252-817688040443?q=80&w=2670&auto=format&fit=crop"
            />
            <ServiceCard 
                icon={Settings}
                path="/services/customization"
                title="Customizzazione" 
                description="Dallo Stage I alle trasformazioni radicali. Consulenza dedicata per accessori Genuine Motor Accessories® e verniciature personalizzate. La tua visione, la nostra esperienza."
                image="https://images.unsplash.com/photo-1558981806-ec527fa84c3d?q=80&w=2670&auto=format&fit=crop"
            />
            <ServiceCard 
                icon={Warehouse}
                path="/services/winter-storage"
                title="Winter Storage" 
                description="Il sonno invernale perfetto. Rimessaggio in ambiente climatizzato, mantenimento carica batteria, lavaggio professionale e check-up completo pre-stagione."
                image="https://images.unsplash.com/photo-1622185135505-2d795043dfeb?q=80&w=2670&auto=format&fit=crop"
            />
        </div>

        {/* CTA BOX */}
        <div className="bg-hd-charcoal border border-white/10 p-12 relative overflow-hidden clip-corner">
            <div className="absolute top-0 right-0 w-64 h-64 bg-hd-orange/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                    <h3 className="font-condensed font-bold text-4xl text-white uppercase mb-2">Prenota il tuo intervento</h3>
                    <p className="text-gray-400">Evita l'attesa. Fissa un appuntamento online o chiamaci direttamente.</p>
                </div>
                <div className="flex gap-4">
                    <button className="bg-hd-orange text-white px-8 py-4 font-condensed font-bold uppercase clip-slant hover:bg-white hover:text-black transition-colors">
                        Prenota Online
                    </button>
                    <button className="border border-white text-white px-8 py-4 font-condensed font-bold uppercase clip-slant hover:bg-white hover:text-black transition-colors flex items-center gap-2">
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