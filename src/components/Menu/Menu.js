import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faFolder } from '@fortawesome/free-solid-svg-icons';

function Menu() {
  return (
    <nav className="Menu">
      <NavLink className="Menu__item" to="/usuarios">
        <div className="Menu__item-icon">
          <FontAwesomeIcon icon={faUsers} />
        </div>
        Usuários
      </NavLink>
      <NavLink className="Menu__item" to="/publicacoes">
        <div className="Menu__item-icon">
          <FontAwesomeIcon icon={faFolder} />
        </div>
        Publicações
      </NavLink>
    </nav>
  );
}

export default Menu;
