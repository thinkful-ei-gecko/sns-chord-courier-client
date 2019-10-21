import React from 'react';
import SearchForm from './search-form/SearchForm';
import Header from './Header/Header';
import LandingPage from './landing-page/LandingPage';
// import ChordDiagram from './ChordDiagram/ChordDiagram';
import './app.css';

function App() {
  return (
    <main className="App">
      <Header />
      <LandingPage />
      <SearchForm />
    </main>
  );
}

export default App;
