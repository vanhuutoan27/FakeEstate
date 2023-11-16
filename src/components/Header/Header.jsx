import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

function Header() {
  return (
    <section className="h-wrapper">
      <div className="h-container flexCenter paddings innerWidth">
        <img src="../public/images/logo.png" alt="logo" width={100} />
        <div className="h-menu flexCenter">
          <Link to="">Residencies</Link>
          <Link to="">Out Value</Link>
          <Link to="">Contact Us</Link>
          <Link to="">Get Started</Link>
          <button className="btn">
            <Link to="">Contact</Link>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Header;
