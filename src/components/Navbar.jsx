import React from 'react';
import { Link } from 'react-router-dom';
//import { FaMicrophone } from 'react-icons/fa';
//import { AiOutlineSetting } from 'react-icons/ai';
import { IoChevronBackOutline } from 'react-icons/io5';

const Navbar = () => (
  <header className="padding">
    <nav>
      <ul>
        <li className="navLinks">
          <Link exact="true" to="/">
            <IoChevronBackOutline className="backIcon" />
          </Link>
          <Link exact="true" to="/" className="navlink">
            Back
          </Link>
        </li>
        //<li className="icons">
//           <FaMicrophone className="microphone" />
//           <AiOutlineSetting className="settings" />
//         </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
