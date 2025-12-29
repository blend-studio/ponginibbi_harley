import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, variant = 'primary', to, className = '', ...props }) => {
  const baseStyle = "font-condensed font-bold uppercase tracking-wider px-8 py-3 transition-all duration-300 transform hover:-translate-y-1 inline-block text-center cursor-pointer";
  
  const variants = {
    primary: "bg-hd-orange text-white hover:bg-white hover:text-hd-orange clip-path-slant", 
    outline: "border-2 border-white text-white hover:bg-white hover:text-hd-black",
    ghost: "text-white hover:text-hd-orange"
  };

  const combinedClasses = `${baseStyle} ${variants[variant]} ${className}`;

  if (to) {
    return <Link to={to} className={combinedClasses} {...props}>{children}</Link>;
  }

  return <button className={combinedClasses} {...props}>{children}</button>;
};

export default Button;