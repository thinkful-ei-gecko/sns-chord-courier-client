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

  const handleProgressionClick = () => {
    const progressions = [
      'i-iv-v-v',
      'i-i-iv-v',
      'i-iv-i-v',
      'i-iv-v-iv',
      'i-vi-ii-v',
      'iii-vi-ii-v',
      'i-v-vi-iv',
      'vi-iv-i-v',
      'i-v-vi-v',
      'i-vi-iv-v',
      'i-vi-iv-v',
    ];
    const randomProg = progressions[Math.floor(Math.random() * Math.floor(progressions.length))];
    ChordApiService.getChordProgressionByKey(key, randomProg)
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
          <option value="Eb">Eb Major</option>
          <option value="E">E Major</option>
          <option value="F">F Major</option>
          <option value="F#">F# Major</option>
          <option value="G">G Major</option>
          <option value="Ab">Ab Major</option>
          <option value="Cm">C Minor</option>
          <option value="C#m">C# Minor</option>
          <option value="Dm">D Minor</option>
          <option value="D#m">D# Minor</option>
          <option value="Em">E Minor</option>
          <option value="Fm">F Minor</option>
          <option value="F#m">C Minor</option>
          <option value="Gm">G Minor</option>
          <option value="G#m">G# Minor</option>
          <option value="Am">A Minor</option>
          <option value="Bbm">Bb Minor</option>
          <option value="Bm">B Minor</option>
        </select>
        <button type="submit">Search</button>
      </form>
      <button type="button" className="progression-randomizer" onClick={() => handleProgressionClick()}>Random Progression</button>

      <ChordDisplay chords={searchResults} />

    </section>
  );
}


/*
I–IV–V–V
I–I–IV–V
I–IV–I–V
I–IV–V–IV

--I–ii–V

jazz
--ii–V–I --Dm7 G7 Cmaj7

I–vi–ii–V -- C Am7 Dm7 G7
III-vi-ii-V

rock/pop
I–V–vi–IV
vi-IV-I-V
I-V-vi-V
I-vi-IV-V
I–vi–IV–V

i-iv-v-v,
i-i-iv-v,
i-iv-i-v,
i-iv-v-iv,
i-vi-ii-v,
iii-vi-ii-v,
i-v-vi-iv,
vi-iv-i-v,
i-v-vi-v,
i-vi-iv-v,
i-vi-iv-v,

*/
