import React from 'react';
import PropTypes from 'prop-types';

export default function ChordDisplay(props) {
  let { chords } = props;
  chords = chords.filter((chord) => chord.variation === '1');
  return (
    <ul>
      {chords.map((chord) => (
        <li key={chord.id}>
          <h3>
            {chord.chord_name}
          </h3>
          <img src={require(`../image-assets/${chord.notation}-${chord.variation}.png`)} alt="c major first variation" />
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
