import React from 'react';
import PropTypes from 'prop-types';
import ChordGallery from '../chord-display/chord-gallery/ChordGallery';
import './chord-key-display.css';

export default function ChordKeyDisplay(props) {
  const { chords } = props;

  const indices = [];
  const progSortedChords = [];
  if (chords.length !== 0) {
    chords.sort((a, b) => {
      if (a.notation[0] > b.notation[0]) return 1;
      if (a.notation[0] < b.notation[0]) return -1;
      if (a.variation > b.variation) return 1;
      return -1;
    });
    const splitIndex = chords.findIndex((chord) => chord.notation === chord.tonic);
    const prefix = chords.splice(0, splitIndex);
    chords.push(...prefix);

    for (let i = 0; i < chords.length - 2; i += 1) {
      if (chords[i].notation !== chords[i + 1].notation) {
        indices.push(i + 1);
      }
    }
    indices.unshift(0);
    indices.push(chords.length - 1);

    for (let i = 0; i < indices.length; i += 1) {
      progSortedChords.push(chords.slice(indices[i], indices[i + 1]));
    }
  }

  return (
    <ul className="grid">
      {progSortedChords.map((chordGroup, index) => (

        // eslint-disable-next-line react/no-array-index-key
        <li key={index} className="grid-item">
          <ChordGallery chords={chordGroup} />
        </li>

      ))}
    </ul>
  );
}

ChordKeyDisplay.defaultProps = {
  chords: [],
};

ChordKeyDisplay.propTypes = {
  chords: PropTypes.instanceOf(Array),
};
