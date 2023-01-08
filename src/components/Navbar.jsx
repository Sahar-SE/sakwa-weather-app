import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header className="padding">
    <nav>
      <ul>
        <li className="navLinks">
          <Link exact="true" to="/" className="navlink">
            Back
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
