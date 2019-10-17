/* eslint-disable array-callback-return */
/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import MutedString from './muted-string/MutedString';
import OpenString from './open-string/OpenString';
import Finger from './finger/Finger';
import Fret from './fret/Fret';
import './chord-diagram.css';

export default function ChordDiagram(props) {
  const generateFingerPosition = (position) => {
    let fingerPos = position.split(',');
    const start = fingerPos[0];
    const startFret = start !== '0' ? 'diagram' : 'open-diagram';
    let barre = '';

    fingerPos = fingerPos.map((pos) => (!'xbo'.includes(pos) ? parseInt(pos, 10) : pos));

    // eslint-disable-next-line consistent-return
    fingerPos = fingerPos.map((pos, index) => {
      if (pos === 'b') {
        barre = 'barre';
      } if (pos === 'x') {
        return <MutedString stringNo={index} />;
      } if (pos === 'o') {
        return <OpenString stringNo={index} />;
      } if (index === 0 && pos !== 0) {
        return <Fret fret={pos} />;
      } if (index >= 1 && typeof pos === 'number') {
        return <Finger stringNo={index} fret={pos} />;
      }
    });
    return { startFret, fingerPos, barre };
  };

  const { chordCode } = props;
  const diagramDetails = generateFingerPosition(chordCode);

  return (
    <div className={diagramDetails.startFret}>
      <div className={diagramDetails.barre} />
      {diagramDetails.fingerPos}
    </div>
  );
}

ChordDiagram.defaultProps = {
  chordCode: '0,x,2,1,o,0,o',
};

ChordDiagram.propTypes = {
  chordCode: PropTypes.string,
};
