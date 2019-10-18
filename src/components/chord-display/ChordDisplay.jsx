import React from 'react';
import PropTypes from 'prop-types';
// import ChordDiagram from '../ChordDiagram/ChordDiagram';
import ChordGallery from './chord-gallery/ChordGallery';
// import SmallDiagram from '../ChordDiagram/small-diagram/SmallDiagram';
import './chord-display.css';

export default function ChordDisplay(props) {
  const { chords, progression } = props;

  const progSortedChords = [[], [], [], []];

  if (progression === '') {
    chords.sort((a, b) => {
      if (a.notation[0] > b.notation[0]) return 1;
      if (a.notation[0] < b.notation[0]) return -1;
      if (a.variation > b.variation) return 1;
      return -1;
    });
    const splitIndex = chords.findIndex((chord) => chord.notation === chord.tonic);
    const prefix = chords.splice(0, splitIndex);
    chords.push(...prefix);
  } else {
    const chordType = {
      i: 'tonic',
      ii: 'second',
      iii: 'third',
      iv: 'fourth',
      v: 'fifth',
      vi: 'sixth',
      vii: 'seventh',
    };
    let progArray = progression.split('-');
    progArray = progArray.map((chord) => chordType[chord]);

    progArray.forEach((progStep, index) => {
      chords.forEach((chord) => {
        if (chord.notation === chord[progStep]) {
          progSortedChords[index].push(chord);
        }
      });
    });
  }

  return (
    <ul>
      {progSortedChords.map((chordGroup, index) => (

        // eslint-disable-next-line react/no-array-index-key
        <li key={index}>
          <ChordGallery chords={chordGroup} />
        </li>

      ))}
    </ul>
  );
}

ChordDisplay.defaultProps = {
  chords: [],
  progression: '',
};

ChordDisplay.propTypes = {
  chords: PropTypes.instanceOf(Array),
  progression: PropTypes.string,
};
