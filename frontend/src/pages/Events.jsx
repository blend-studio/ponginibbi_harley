import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';

const Events = () => {
  return (
    <div className="bg-hd-dark min-h-screen pt-36 pb-10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <SectionTitle title="Eventi & News" subtitle="Vivi la passione H-D" center={true} />
        <div className="text-gray-400 mt-8">
            <p className="text-xl">Calendario eventi 2025 in aggiornamento.</p>
        </div>
      </div>
    </div>
  );
};

export default Events;