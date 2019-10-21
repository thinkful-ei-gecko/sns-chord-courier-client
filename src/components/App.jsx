import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchForm from './search-form/SearchForm';
// import Header from './Header/LightHeader';
import LandingPage from './landing-page/LandingPage';
import NotFoundPage from './not-found-page/NotFoundPage.jsx';
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
            component={NotFoundPage}
          />
        </Switch>
      </main>
    </div>
  );
}

export default App;
