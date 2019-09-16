import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faFolder } from '@fortawesome/free-solid-svg-icons';

function Menu({ open, closeMenu }) {
  return (
    <div className={`Menu${open ? ' -open' : ''}`}>
      <div className="Menu__mobile-background" onClick={closeMenu} />
      <nav className="Menu__list">
        <NavLink className="Menu__item" to="/usuarios" onClick={closeMenu}>
          <div className="Menu__item-icon">
            <FontAwesomeIcon icon={faUsers} />
          </div>
          Usuários
        </NavLink>
        <NavLink className="Menu__item" to="/publicacoes" onClick={closeMenu}>
          <div className="Menu__item-icon">
            <FontAwesomeIcon icon={faFolder} />
          </div>
          Publicações
        </NavLink>
      </nav>
    </div>
  );
}

export default Menu;
