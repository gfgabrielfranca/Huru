import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

// Pages
import Users from './pages/Users/Users';
import Publications from './pages/Publications/Publications';

// Components
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';

export default function App() {
  return (
    <Router>
      <Header />

      <main>
        <Menu />

        <Route path="/usuarios" exact component={Users} />
        <Route path="/publicacoes" exact component={Publications} />
        <Redirect from="/" to="/usuarios" />
      </main>
    </Router>
  );
}
