import React, { useState} from 'react';
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
        <div className="navbar">
          <div className={`menu-button ${nav ? 'active' : ''}`} onClick={navHandle}>
            <AiOutlineMenu className="nav-icon" />
          </div>
          {nav ? (
            <div className="menu-items right">
              <Link to="/">
                <AiOutlineHome size={20} />
                <span>Home</span>
              </Link>
              <Link to="/work">
                <GrProjects size={20} />
                <span>Work</span>
              </Link>
              <Link to="/portfolio">
                <AiOutlineProject size={20} />
                <span>Portfolio</span>
              </Link>
              <a
                href="" // Update this with the URL for Resume
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsPerson size={20} />
                <span>Resume</span>
              </a>
              <Link to="/contact">
                <AiOutlineMail size={20} />
                <span>Contact</span>
              </Link>
            </div>
          ) : null}
        </div>
      );
    };
    


// return (
//     <div className="navbar">
//         <div className={`menu-button ${nav ? 'active' : ''}`} onClick={navHandle}>
//         <AiOutlineMenu className="nav-icon" />
//       </div>
//       {nav ? (
//         <div className="menu-items right">
//           <a href="#home">
//             <AiOutlineHome size={20} />
//             <span>Home</span>
//           </a>
//           <a href="#work">
//             <GrProjects size={20} />
//             <span>Work</span>
//           </a>
//           <a href="#portfolio">
//             <AiOutlineProject size={20} />
//             <span>Portfolio</span>
//           </a>
//           <a
//             href=""
//             target="_blank"
//           >
//             <BsPerson size={20} />
//             <span>Resume</span>
//           </a>
//           <a href="#contact">
//             <AiOutlineMail size={20} />
//             <span>Contact</span>
//           </a>
//         </div>
//       ) : null}
//     </div>
//     );
// };

export default Navbar;