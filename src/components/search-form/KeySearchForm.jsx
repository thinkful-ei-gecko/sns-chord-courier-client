import React, { useState } from 'react';
import ChordApiService from '../../services/chord-api-service';
import ChordKeyDisplay from '../chord-key-display/ChordKeyDisplay';
import DarkHeader from '../Header/DarkHeader';
import DarkNav from '../Nav/DarkNav';
import './key-search-form.css';

export default function SearchForm() {
  const [key, setKey] = useState('A');
  const [searchResults, setSearchResults] = useState([]);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setSearchResults([]);
    ChordApiService.getChordsByKey(key)
      .then((chords) => setSearchResults(chords));
  };

  return (
    <>
      <DarkNav />
      <DarkHeader />
      <section className="search-form">
        <form className="key-search-form" onSubmit={(ev) => handleSubmit(ev)}>
          <select className="key-choices" onChange={(e) => setKey(e.target.value)}>
            <option value="E">E Major</option>
            <option value="Em">E Minor</option>
            <option value="A">A Major</option>
            <option value="Am">A Minor</option>
            <option value="G">G Major</option>
            <option value="C">C Major</option>
            <option value="D">D Major</option>
            <option value="F">F Major</option>
            <option value="Fsharp">F# Major</option>
            <option value="Fsharpm">F# Minor</option>
            <option value="Bm">B Minor</option>
            <option value="Dm">D Minor</option>
            <option value="Csharpm">C# Minor</option>
            <option value="Cm">C Minor</option>
            <option value="Gm">G Minor</option>
            <option value="Fm">F Minor</option>
            <option value="Db">Db Major</option>
            <option value="B">B Major</option>
            <option value="Bb">Bb Major</option>
            <option value="Bbm">Bb Minor</option>
            <option value="Eb">Eb Major</option>
            <option value="Ab">Ab Major</option>
            <option value="Dsharpm">Dsharp Minor</option>
            <option value="Gsharpm">G# Minor</option>
          </select>
          <button type="submit" className="search-button">Search</button>
        </form>

        <ChordKeyDisplay chords={searchResults} />

      </section>
    </>
  );
}
