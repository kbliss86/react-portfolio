import React from 'react';
import { AiOutlineHome, AiOutlineProject, AiOutlineMail } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    // <div className="navbar static top-0 left-0 right-0 p-4 z-50 bg-white text-black shadow-md flex justify-around">
    <div className="navbar static top-0 left-0 right-0 p-4 z-50 bg-white text-black flex justify-around">
      <Link
        to="/"
        className="flex items-center hover:text-blue-500 px-4 py-2 font-bold text-xl"
      >
        <AiOutlineHome size={24} className="mr-2" />
        Home
      </Link>

      <Link
        to="/portfolio"
        className="flex items-center hover:text-blue-500 px-4 py-2 font-bold text-xl"
      >
        <AiOutlineProject size={24} className="mr-2" />
        Portfolio
      </Link>

      <Link
        to="/resume"
        className="flex items-center hover:text-blue-500 px-4 py-2 font-bold text-xl"
      >
        <BsPerson size={24} className="mr-2" />
        Resume
      </Link>

      <Link
        to="/contact"
        className="flex items-center hover:text-blue-500 px-4 py-2 font-bold text-xl"
      >
        <AiOutlineMail size={24} className="mr-2" />
        Contact
      </Link>
      {/* AIOutlineLaptop for Blog */}
      {/* AIOutlineCoffee for Blog Publisher */}
    </div>
  );
};

export default Navbar;
