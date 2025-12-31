import React from 'react';
import TextReveal from '../animations/TextReveal';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, center = false }) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : 'text-left'}`}>
      {subtitle && (
        <motion.div 
            initial={{ opacity: 0, x: center ? 0 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`flex items-center gap-4 mb-2 ${center ? 'justify-center' : ''}`}
        >
            <div className="h-[2px] w-8 bg-hd-orange"></div>
            <span className="text-hd-orange font-bold tracking-[0.2em] uppercase text-sm">
                {subtitle}
            </span>
        </motion.div>
      )}
      <TextReveal 
        text={title} 
        className={`font-condensed font-bold text-3xl sm:text-4xl md:text-7xl text-white uppercase leading-none ${center ? 'justify-center' : ''}`}
      />
    </div>
  );
};

export default SectionTitle;