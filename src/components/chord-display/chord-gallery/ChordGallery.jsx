import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ChordDiagram from '../../ChordDiagram/ChordDiagram';
import SmallDiagram from '../../ChordDiagram/small-diagram/SmallDiagram';
import './chord-gallery.css';

export default function ChordGallery(props) {
  const { chords } = props;
  const [chordItems, setChordItems] = useState(chords);


  useEffect(() => {
    setChordItems(chords);
  }, [chords]);


  const handleClick = (chordId) => {
    const chordArray = [...chordItems];
    const chordIndex = chordArray.findIndex((chord) => chord.id === chordId);
    const newFront = chordArray.splice(chordIndex, 1);
    const front = chordArray.splice(0, 1);
    chordArray.unshift(...newFront);
    chordArray.push(...front);
    setChordItems(chordArray);
  };

  return (
    <ul className="gallery">
      {chordItems.map((chord, index) => (
        index === 0
          ? (
            <li key={chord.id}>
              <h3 className="chord-name">{chord.chord_name}</h3>
              <ChordDiagram chordCode={chord.chord_code} />
            </li>
          )
          : (
            <li key={chord.id} className="small-diagram-buttons">
              <button type="button" className="chord-button" onClick={() => handleClick(chord.id)}>
                <SmallDiagram chordCode={chord.chord_code} />
              </button>
            </li>
          )
      ))}
    </ul>
  );
}


ChordGallery.defaultProps = {
  chords: [],
};

ChordGallery.propTypes = {
  chords: PropTypes.instanceOf(Array),
};
