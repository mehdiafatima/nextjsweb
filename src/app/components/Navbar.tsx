// components/Navbar.tsx
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Travello</div>
        <div className="space-x-4 flex items-center">
          <a href="#destinations" className="text-gray-600 hover:text-gray-900">Destinations</a>
          <a href="#hotels" className="text-gray-600 hover:text-gray-900">Hotels</a>
          <a href="#flights" className="text-gray-600 hover:text-gray-900">Flights</a>
          <a href="#bookings" className="text-gray-600 hover:text-gray-900">Bookings</a>
          <a href="#login" className="text-gray-600 hover:text-gray-900">Login</a>
          <button className="bg-yellow-500 text-white py-2 px-4 rounded-full">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
