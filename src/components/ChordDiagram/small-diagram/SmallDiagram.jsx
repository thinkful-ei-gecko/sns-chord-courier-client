/* eslint-disable react/no-array-index-key */
/* eslint-disable array-callback-return */
/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import SmallMutedString from './small-muted-string/SmallMutedString';
import SmallOpenString from './small-open-string/SmallOpenString';
import LittleFinger from './little-finger/LittleFinger';
import SmallFret from './small-fret/SmallFret';
import './small-diagram.css';

export default function SmallDiagram(props) {
  const generateFingerPosition = (position) => {
    let fingerPos = position.split(',');
    const start = fingerPos[0];
    const startFret = start !== '0' ? 'small-diagram' : 'small-open-diagram';
    let barre = '';
    fingerPos = fingerPos.map((pos) => (!'xbo'.includes(pos) ? parseInt(pos, 10) : pos));

    // eslint-disable-next-line consistent-return
    fingerPos = fingerPos.map((pos, index) => {
      if (pos === 'b') {
        barre = 'small-barre';
      } if (pos === 'x') {
        return <SmallMutedString stringNo={index} key={index} />;
      } if (pos === 'o') {
        return <SmallOpenString stringNo={index} key={index} />;
      } if (index === 0 && pos !== 0) {
        return <SmallFret fret={pos} key={index} />;
      } if (index >= 1 && typeof pos === 'number') {
        return <LittleFinger stringNo={index} fret={pos} key={index} />;
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

SmallDiagram.defaultProps = {
  chordCode: '0,x,2,1,o,0,o',
};

SmallDiagram.propTypes = {
  chordCode: PropTypes.string,
};
