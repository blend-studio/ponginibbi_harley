import React from 'react';

const SectionTitle = ({ title, subtitle, center = false }) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : 'text-left'}`}>
      {subtitle && (
        <span className="block text-hd-orange font-bold tracking-[0.2em] text-sm mb-2 uppercase">
          {subtitle}
        </span>
      )}
      <h2 className="font-condensed font-bold text-4xl md:text-5xl text-white uppercase leading-none">
        {title.split(' ').map((word, i) => (
          <span key={i} className={i % 2 !== 0 ? 'text-gray-400' : ''}> {word} </span>
        ))}
      </h2>
      <div className={`h-1 w-24 bg-hd-orange mt-4 ${center ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionTitle;