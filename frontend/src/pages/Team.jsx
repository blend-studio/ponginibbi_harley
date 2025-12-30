import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';

const TeamMember = ({ name, role, image }) => (
  <div className="group relative overflow-hidden">
    <div className="aspect-[3/4] overflow-hidden">
        <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" 
        />
    </div>
    <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
        <h3 className="text-2xl font-condensed font-bold text-white uppercase">{name}</h3>
        <p className="text-hd-orange font-bold text-sm tracking-wider uppercase">{role}</p>
    </div>
  </div>
);

const Team = () => {
  const members = [
    { name: "Marco Ponginibbi", role: "Dealer Principal", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop" },
    { name: "Alessandro Rossi", role: "Sales Manager", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574&auto=format&fit=crop" },
    { name: "Giulia Bianchi", role: "MotorClothes Manager", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop" },
    { name: "Roberto Verdi", role: "Service Manager", image: "https://images.unsplash.com/photo-1537368910025-bc005ca23c50?q=80&w=2574&auto=format&fit=crop" },
    { name: "Luca Neri", role: "Master Technician", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop" },
    { name: "Elena Gialli", role: "Administration", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2661&auto=format&fit=crop" }
  ];

  return (
    <div className="bg-hd-dark min-h-screen pt-20">
      {/* Hero */}
      <div className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1558981852-426c6c22a060?q=80&w=2671&auto=format&fit=crop" 
            alt="Team Ponginibbi" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-hd-dark via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-condensed font-bold text-white mb-2 uppercase">
            Il Nostro Team
          </h1>
          <p className="text-xl text-gray-400">Passione, Esperienza, Dedizione.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <SectionTitle title="La Famiglia" subtitle="STAFF" />
        <p className="text-gray-400 max-w-2xl mb-12">
            Non siamo solo venditori o meccanici. Siamo motociclisti come te. 
            Condividiamo la stessa passione per la strada e per il marchio Harley-Davidson.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member, idx) => (
                <TeamMember key={idx} {...member} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
