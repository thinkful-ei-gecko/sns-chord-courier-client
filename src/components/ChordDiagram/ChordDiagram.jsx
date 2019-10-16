/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import './chord-diagram.css';

export default function ChordDiagram(props) {
  const generateFingerPosition = (position) => {
    let fingerPos = position.split(',');
    const start = fingerPos[0];
    const startFret = start !== '0' ? 'diagram' : 'open-diagram';
    let barre = '';

    fingerPos = fingerPos.map((pos) => (!'xbo'.includes(pos) ? parseInt(pos, 10) : pos));

    fingerPos = fingerPos.map((pos, index) => {
      let style = {};
      if (pos === 'x') {
        style = {
          left: `${(index - 1) * 50 - 13}px`,
          top: `${-35}px`,
        };
        return (<div className="muted-string" style={style} />);
      } if (pos === 'o') {
        style = {
          left: `${(index - 1) * 50 - 11}px`,
          top: `${-34}px`,
        };
        return (<div className="open-string" style={style} />);
      } if (pos === 'b') {
        barre = 'barre';
      } if (index === 0 && pos !== 0) {
        return (
          <div className="fret">
            {pos}
          </div>
        );
      } if (index >= 1 && typeof pos === 'number') {
        style = {
          left: `${((index - 1) * 50) - 15}px`,
          top: `${(pos * 50) + 13}px`,
        };
        return (<div className="finger" style={style} />);
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
