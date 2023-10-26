import React, { useState} from 'react';
import { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { GrProjects } from 'react-icons/gr';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const navHandle = () => {
        setNav(!nav);
        console.log('Changed Nav State')
    };


return (
    <div className="navbar">
        <div className={`menu-button ${nav ? 'active' : ''}`} onClick={navHandle}>
        <AiOutlineMenu className="nav-icon" />
      </div>
      {nav ? (
        <div className="menu-items right">
          <a href="#home">
            <AiOutlineHome size={20} />
            <span>Home</span>
          </a>
          <a href="#work">
            <GrProjects size={20} />
            <span>Work</span>
          </a>
          <a href="#projects">
            <AiOutlineProject size={20} />
            <span>Projects</span>
          </a>
          <a
            href=""
            target="_blank"
          >
            <BsPerson size={20} />
            <span>Resume</span>
          </a>
          <a href="#contact">
            <AiOutlineMail size={20} />
            <span>Contact</span>
          </a>
        </div>
      ) : null}
    </div>
    );
};

export default Navbar;