import React from 'react';
import PropTypes from 'prop-types';
import ChordDiagram from './ChordDiagram/ChordDiagram';

export default function ChordDisplay(props) {
  const { chords } = props;

  chords.sort((a, b) => {
    if (a.notation[0] > b.notation[0]) return 1;
    if (a.notation[0] < b.notation[0]) return -1;
    if (a.variation > b.variation) return 1;
    return -1;
  });

  const splitIndex = chords.findIndex((chord) => chord.notation === chord.tonic);
  const prefix = chords.splice(0, splitIndex);

  chords.push(...prefix);

  return (
    <ul>
      {chords.map((chord) => (
        <li key={chord.id}>
          <h3>
            {chord.chord_name}
          </h3>
          <ChordDiagram chordCode={chord.chord_code} />
        </li>
      ))}
    </ul>
  );
}

ChordDisplay.defaultProps = {
  chords: [],
};

ChordDisplay.propTypes = {
  chords: PropTypes.instanceOf(Array),
};
