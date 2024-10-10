// components/Destinations.tsx
import React from 'react';

const destinations = [
  { name: 'Rome, Italy', price: '$5,42k', duration: '10 Days Trip', image: '/rome.jpg' },
  { name: 'London, UK', price: '$4.2k', duration: '12 Days Trip', image: '/london.jpg' },
  { name: 'Full Europe', price: '$15k', duration: '30 Days Trip', image: '/europe.jpeg' },
];

const Destinations: React.FC = () => {
  return (
    <section id="destinations" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Top Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={destination.image} alt={destination.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-2xl font-bold mb-2">{destination.name}</h3>
                <p className="text-gray-600">{destination.price} - {destination.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
