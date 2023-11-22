import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';

import './Header.css';

function Header() {
  const [menuOpened, setMenuOpened] = useState(false);
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && '-100%' };
    }
  };

  return (
    <section className="h-wrapper">
      <div className="h-container flexCenter paddings innerWidth">
        <img src="../images/logo.png" alt="logo" width={100} />

        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div className="h-menu flexCenter" style={getMenuStyles(menuOpened)}>
            <Link to="#!">Residencies</Link>
            <Link to="#!">Out Value</Link>
            <Link to="#!">Contact Us</Link>
            <Link to="#!">Get Started</Link>
            <button className="btn">
              <Link to="#!">Contact</Link>
            </button>
          </div>
        </OutsideClickHandler>

        <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
}

export default Header;
