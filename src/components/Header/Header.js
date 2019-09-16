import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';

import logo from '../../assets/images/logo.png';

function Header({ search, searchPlaceholder, openMenu }) {
  function handleSearch(event) {
    search(event.target.value);
  }

  function handleMenu() {
    openMenu();
  }

  return (
    <header className="Header">
      <div className="Header__menu">
        <button className="Header__menu-button" type="button" onClick={handleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className="Header__logo">
          <img src={logo} alt="Huru" />
        </div>
      </div>

      <div className="Header__search">
        <input className="Header__search-input" type="text" onChange={handleSearch} placeholder={searchPlaceholder} />
        <button className="Header__search-icon" type="button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </header>
  );
}

export default Header;
