import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navigation.css';

const Navigation = () => (
  <nav>
    <h1 className="logo">Math Magicians</h1>
    <ul className="nav-links">
      <li>
        <Link className="links" to="/">Home</Link>
      </li>
      <li>
        <Link className="links" to="calculator">Calculator</Link>
      </li>
      <li>
        <Link className="links" to="quote">Quote</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
