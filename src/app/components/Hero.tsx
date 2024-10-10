// components/Hero.tsx
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-4">Travel, enjoy and live a new and full life</h1>
          <p className="text-xl mb-8">Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
          <button className="bg-yellow-500 text-white py-2 px-4 rounded-full mb-4 lg:mb-0">Find out more</button>
          <button className="bg-white text-blue-500 py-2 px-4 rounded-full border border-blue-500">Play Demo</button>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <img src="/worldwide.webp" alt="Hero Image" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
