// components/BookTrip.tsx
import React from 'react';

const BookTrip: React.FC = () => {
  return (
    <section id="book" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Book Your Next Trip in 3 Easy Steps</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Choose Destination</h3>
            <p>Engrossed listening. Park gate sell they west hard for the.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Make Payment</h3>
            <p>Barton vanity itself do in it. Preferred to men it engrossed listening.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Reach Airport on Selected Date</h3>
            <p>We deliver outsourced aviation services for military customers.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookTrip;
