import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

// Pages
import Users from './pages/Users/Users';
import Publications from './pages/Publications/Publications';

// Components
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';

export default function App() {
  const [search, setSearch] = useState('');
  const [openMenu, setOpenMenu] = useState(false);
  const [searchPlaceholder, setSearchPlaceholder] = useState('');

  function handleSearchPlaceholder(placeholderData) {
    setSearchPlaceholder(placeholderData);
  }

  function handleOpenMenu() {
    setOpenMenu(!openMenu);
  }

  return (
    <Router>
      <Header search={setSearch} searchPlaceholder={searchPlaceholder} openMenu={handleOpenMenu} />

      <main>
        <Menu open={openMenu} />

        <Route
          path="/usuarios"
          exact
          render={() => (
            <Users
              search={search}
              searchPlaceholder={handleSearchPlaceholder}
            />
          )}
        />

        <Route
          path="/publicacoes"
          exact
          render={() => (
            <Publications
              search={search}
              searchPlaceholder={handleSearchPlaceholder}
            />
          )}
        />
        <Redirect from="/" to="/usuarios" />
      </main>
    </Router>
  );
}
