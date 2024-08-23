import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 text-black py-8 shadow-md">
      <h1 className="text-4xl font-extrabold text-center tracking-wide" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        Kendall Bliss
      </h1>
      <p className="text-4xl text-center font-light mt-2 tracking-widest" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        Web Developer • .NET Developer • Power Platform Developer
      </p>
    </header>
  );
};

export default Header;