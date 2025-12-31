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
    { name: "Marco Ponginibbi", role: "Dealer Principal", image: "https://img.freepik.com/free-photo/full-shot-man-riding-motorbike_23-2150810243.jpg?t=st=1767091891~exp=1767095491~hmac=0a9bfb927248e154cdeffc95977f8aaf69824382204d02e00abd84b80ad87cb9&w=1060" },
    { name: "Alessandro Rossi", role: "Sales Manager", image: "https://img.freepik.com/free-photo/red-motor-biking-road_114579-5071.jpg?t=st=1767091891~exp=1767095491~hmac=6130f968067151f6841975acc6f729a59cd3724a974920c36b6e5d384fa1460b&w=1060" },
    { name: "Giulia Bianchi", role: "MotorClothes Manager", image: "https://img.freepik.com/free-photo/biking-motorcycle-forest_114579-5198.jpg?t=st=1767091041~exp=1767094641~hmac=eb78590e36e9afcf912609ca73db90bf1d5797444838d34653c3727d46844717&w=1060" },
    { name: "Roberto Verdi", role: "Service Manager", image: "https://img.freepik.com/free-photo/model-career-kit-still-life_23-2150229753.jpg?t=st=1767091952~exp=1767095552~hmac=8c4903869ad282d99558ed1d1d9baeacb89ab5bc8ad59cdde76e1cb93170e051&w=1060" },
    { name: "Luca Neri", role: "Master Technician", image: "https://img.freepik.com/free-psd/white-hard-hat-safety-equipment-construction-work-protection_191095-80944.jpg?t=st=1767091891~exp=1767095491~hmac=6657fc156aca7c6e18010418a21f3b6b7aa62ca0f6a6ec4964166ea27f1523a4&w=1060" },
    { name: "Elena Gialli", role: "Administration", image: "https://img.freepik.com/free-photo/red-motor-biking-road_114579-5071.jpg?t=st=1767091891~exp=1767095491~hmac=6130f968067151f6841975acc6f729a59cd3724a974920c36b6e5d384fa1460b&w=1060" }
  ];

  return (
    <div className="bg-hd-dark min-h-screen pt-20">
      {/* Hero */}
      <div className="relative min-h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-black mb-12 md:mb-20">
        <div className="absolute inset-0">
          <img 
            src="https://img.freepik.com/free-photo/model-career-kit-still-life_23-2150229753.jpg?t=st=1767091952~exp=1767095552~hmac=8c4903869ad282d99558ed1d1d9baeacb89ab5bc8ad59cdde76e1cb93170e051&w=1060" 
            alt="Team Ponginibbi" 
            className="w-full h-full object-cover opacity-40 grayscale hover:scale-105 transition-transform duration-[10s]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl pt-20">
          <div className="inline-block bg-hd-orange text-white font-bold uppercase tracking-[0.3em] px-6 py-2 mb-6 text-xs md:text-sm animate-fade-in-up">
            Our Crew
          </div>
          <h1 className="text-6xl md:text-[10rem] font-condensed font-bold text-white uppercase italic leading-[0.85] mb-6 drop-shadow-2xl animate-fade-in-up delay-100">
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-hd-orange to-red-600">Family</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto font-sans leading-relaxed animate-fade-in-up delay-200">
            Passione, esperienza e dedizione. Siamo motociclisti come te, 
            pronti ad aiutarti a vivere il sogno.
          </p>
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
