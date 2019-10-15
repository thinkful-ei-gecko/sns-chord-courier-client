import React, { useState } from 'react';
import ChordApiService from '../services/chord-api-service';
import ChordDisplay from './ChordDisplay';

export default function SearchFrom() {
  const [key, setKey] = useState('A');
  const [searchResults, setSearchResults] = useState([]);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setSearchResults([]);
    ChordApiService.getChordsByKey(key)
      .then((chords) => setSearchResults(chords));
  };

  return (
    <section>
      <form className="key-search-form" onSubmit={(ev) => handleSubmit(ev)}>
        <select onChange={(e) => setKey(e.target.value)}>
          <option value="A">A Major</option>
          <option value="Bb">Bb Major</option>
          <option value="B">B Major</option>
          <option value="C">C Major</option>
          <option value="Db">Db Major</option>
          <option value="D">D Major</option>
          <option value="E">E Major</option>
          <option value="F">F Major</option>
          <option value="G">G Major</option>
        </select>
        <button type="submit">Search</button>
      </form>

      <ChordDisplay chords={searchResults} />

    </section>
  );
}
