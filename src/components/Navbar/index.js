import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-50 shadow-md">
      {/* Menambahkan max-w-screen-lg untuk membatasi lebar di layar besar */}
      <div className="container mx-auto max-w-screen-lg flex justify-between items-center p-4 px-6">
        
        {/* Logo */}
        <Link href="/" className="text-green-600 text-2xl font-bold">
          SaktiMobile
        </Link>

        {/* Navbar untuk desktop */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-gray-900">About</Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
        </div>

        {/* Tombol hamburger untuk mobile */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Menu dropdown untuk mobile */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
          <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-gray-900">About</Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
