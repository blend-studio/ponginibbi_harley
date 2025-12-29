import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';

const Shop = () => {
  return (
    <div className="bg-hd-dark min-h-screen pt-36 pb-10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <SectionTitle title="Negozio & Ricambi" subtitle="Abbigliamento e Accessori Ufficiali" center={true} />
        <div className="text-gray-400 mt-8">
            <p className="text-xl">Shop Online in arrivo. Visita lo showroom per la nuova collezione.</p>
        </div>
      </div>
    </div>
  );
};

export default Shop;