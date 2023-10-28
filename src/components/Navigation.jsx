import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { GrProjects } from 'react-icons/gr';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const navHandle = () => {
        setNav(!nav);
        console.log('Changed Nav State')
    };

    return (
        <div className="navbar fixed top-0 left-0 p-4 z-10">
          <div className={`menu-button ${nav ? 'active' : ''}`} onClick={navHandle}>
            <AiOutlineMenu className="nav-icon text-2xl cursor-pointer" />
          </div>
          {nav ? (
            <div className="menu-items absolute top-full left-0 bg-white border border-gray-300 rounded-md shadow-md p-2 z-20 flex flex-col">
              <Link
                to="/"
                className="flex items-center text-green-500 hover:bg-green-100 px-4 py-2 rounded-lg font-bold text-2xl my-2"
                onClick={navHandle}
              >
                <AiOutlineHome size={32} className="mr-2" />
                Home
              </Link>
    
              <Link
                to="/portfolio"
                className="flex items-center text-green-500 hover:bg-green-100 px-4 py-2 rounded-lg font-bold text-2xl my-2"
                onClick={navHandle}
              >
                <AiOutlineProject size={32} className="mr-2" />
                Portfolio
              </Link>
    
              <Link
                to="/resume"
                className="flex items-center text-green-500 hover:bg-green-100 px-4 py-2 rounded-lg font-bold text-2xl my-2"
                onClick={navHandle}
              >
                <BsPerson size={32} className="mr-2" />
                Resume
              </Link>
    
              <Link
                to="/contact"
                className="flex items-center text-green-500 hover:bg-green-100 px-4 py-2 rounded-lg font-bold text-2xl my-2"
                onClick={navHandle}
              >
                <AiOutlineMail size={32} className="mr-2" />
                Contact
              </Link>
            </div>
          ) : null}
        </div>
      );
    };

export default Navbar;