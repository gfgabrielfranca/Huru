import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import api from '../../services/api';

function Users({ search, searchPlaceholder }) {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState();

  useEffect(() => {
    searchPlaceholder('Buscar por nome de usuário');
  });

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/users');
      setUsers(response.data);
    }

    loadUsers();
  }, []);

  useEffect(() => {
    setSelectedUser();
  }, [search]);

  return (
    <div className="Users">
      { users.length > 0 ? (
        <div className="Users__table-wrapper">
          <table className="Users__table">
            <thead>
              <tr>
                <th>Nome de usuário</th>
                <th>Nome</th>
                <th>E-mail</th>
              </tr>
            </thead>
            <tbody>
              { users.filter((user) => user.username.toLowerCase().includes(search.toLowerCase()))
                .map((user) => (
                  <tr key={user.id} onClick={() => setSelectedUser(user)}>
                    <td>{ user.username }</td>
                    <td>{ user.name }</td>
                    <td>{ user.email }</td>
                  </tr>
                )) }
            </tbody>
          </table>
        </div>
      ) : (
        <div className="Users__spinner">
          <FontAwesomeIcon icon={faSpinner} pulse />
        </div>
      ) }

      <div className={`Users__detail${selectedUser ? ' -selected' : ''}`}>
        { selectedUser && (
          <div>
            <header className="Users__detail-header">
              <button
                className="Users__detail-close"
                type="button"
                onClick={() => setSelectedUser()}
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <span>Usuário</span>
            </header>

            <div className="Users__detail-list">
              <span className="Users__detail-item">
                <b>Nome: </b>
                {selectedUser.name}
              </span>
              <span className="Users__detail-item">
                <b>Nome de usuário: </b>
                {selectedUser.username}
              </span>
              <span className="Users__detail-item">
                <b>E-mail: </b>
                {selectedUser.email}
              </span>
              <span className="Users__detail-item">
                <b>Telefone: </b>
                {selectedUser.phone}
              </span>
              <span className="Users__detail-item">
                <b>Website: </b>
                {selectedUser.website}
              </span>
              <span className="Users__detail-item">
                <b>Empresa: </b>
                {selectedUser.company.name}
              </span>
            </div>
          </div>
        ) }
      </div>
    </div>
  );
}

export default Users;
