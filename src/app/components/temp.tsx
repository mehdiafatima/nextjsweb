// components/Testimonials.tsx
import React from 'react';

const testimonials = [
  { name: 'Mosa', feedback: 'Amazing experience! Highly recommend.', image: '/john.jpg' },
  { name: 'Leonen', feedback: 'Best trip ever! Will book again.', image: '/jane.jpg' },
  { name: 'Kat', feedback: 'Great service and beautiful destinations.', image: '/bob.jpg' },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">What People Say About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-8">
              <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">{testimonial.name}</h3>
              <p>{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
