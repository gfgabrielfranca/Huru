import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import api from '../../services/api';

function Publications({ search, searchPlaceholder }) {
  const [publications, setPublications] = useState([]);
  const [selectedPublication, setSelectedPublication] = useState();
  const [selectedPublicationAuthor, setSelectedPublicationAuthor] = useState();

  useEffect(() => {
    searchPlaceholder('Buscar por título da publicação');
  });

  useEffect(() => {
    async function loadPublications() {
      const response = await api.get('/posts');
      setPublications(response.data);
    }

    loadPublications();
  }, []);

  useEffect(() => {
    setSelectedPublication();
  }, [search]);

  async function handleSelectPublication(publication) {
    setSelectedPublicationAuthor();
    setSelectedPublication(publication);

    const response = await api.get(`/users/${publication.userId}`);
    setSelectedPublicationAuthor(response.data);
  }

  return (
    <div className="Publications">
      { publications.length > 0 ? (
        <div className="Publications__table-wrapper">
          <table className="Publications__table">
            <thead>
              <tr>
                <th>Título</th>
              </tr>
            </thead>
            <tbody>
              { publications.filter((publication) => publication.title.toLowerCase()
                .includes(search.toLowerCase())).map((publication) => (
                  <tr key={publication.id} onClick={() => handleSelectPublication(publication)}>
                    <td>{ publication.title }</td>
                  </tr>
              )) }
            </tbody>
          </table>
        </div>
      ) : (
        <div className="Publications__spinner">
          <FontAwesomeIcon icon={faSpinner} pulse />
        </div>
      ) }

      <div className={`Publications__detail ${selectedPublication && '-selected'}`}>
        { selectedPublication && (
          <div>
            <header className="Publications__detail-header">
              <button
                className="Publications__detail-close"
                type="button"
                onClick={() => setSelectedPublication()}
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <span>Publicação</span>
            </header>

            <h3 className="Publications__detail-title">{ selectedPublication.title }</h3>
            <p className="Publications__detail-body">{ selectedPublication.body }</p>

            <span className="Publications__detail-author">
              <b>Autor: </b>
              { selectedPublicationAuthor ? selectedPublicationAuthor.name : 'Carregando...' }
            </span>
          </div>
        ) }
      </div>
    </div>
  );
}

export default Publications;
