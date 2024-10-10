// components/Services.tsx
import React from 'react';

const services = [
  { title: 'Calculated Weather', description: 'Built Wicket longer admire do barton vanity itself do in it.', icon: '/wheather.png' },
  { title: 'Best Flights', description: 'Engrossed listening. Park gate sell they west hard for the.', icon: '/flight.png' },
  { title: 'Local Events', description: 'Barton vanity itself do in it. Preferred to men it engrossed listening.', icon: '/events.png' },
  { title: 'Customization', description: 'We deliver outsourced aviation services for military customers.', icon: '/customization.png' },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">We Offer Best Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-8 bg-white shadow-md rounded-lg">
              <img src={service.icon} alt={service.title} className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
