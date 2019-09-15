import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';

import logo from '../../assets/images/mini_logo.png';

function Header() {
  return (
    <header className="Header">
      <div className="Header__menu">
        {/* <button className="Header__menu-button" type="button">
          <FontAwesomeIcon icon={faBars} />
        </button> */}
        <div className="Header__logo">
          <img src={logo} alt="Huru" />
        </div>
      </div>
    </header>
  );
}

export default Header;
