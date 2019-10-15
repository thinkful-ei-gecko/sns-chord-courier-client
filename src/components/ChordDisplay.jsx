import React from 'react';
import PropTypes from 'prop-types';

export default function ChordDisplay(props) {
  const { chords } = props;
  return (
    <ul>
      {chords.map((chord) => (
        <li>
          <h3>
            {chord.chord_name}
            variation-
            {chord.variation}
          </h3>
          <img src="../image-assets/cmaj-1.png" alt="c major first variation" />
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
