// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#about" className="hover:underline">About</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
        <p className="text-sm">&copy; 2024 Travello. All rights reserved.</p>
        <p>Created by MEHDIA FATIMA FAIZI</p>
      </div>
      
    </footer>
    
  );
};

export default Footer;
