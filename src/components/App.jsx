import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchForm from './search-form/SearchForm';
import AboutPage from './about-page/AboutPage';
import KeySearchForm from './search-form/KeySearchForm';
import LandingPage from './landing-page/LandingPage';
import NotFoundPage from './not-found-page/NotFoundPage';
import './app.css';

function App() {
  return (
    <div className="App">
      <main className="App-main">
        <Switch>
          <Route
            exact
            path="/"
            component={LandingPage}
          />
          <Route
            path="/search"
            component={SearchForm}
          />
          <Route
            path="/full-search"
            component={KeySearchForm}
          />
          <Route
            path="/about"
            component={AboutPage}
          />
          <Route
            component={NotFoundPage}
          />
        </Switch>
      </main>
    </div>
  );
}

export default App;
