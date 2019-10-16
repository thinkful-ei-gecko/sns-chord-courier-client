/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import './chord-diagram.css';

export default function ChordDiagram(props) {
  const generateFingerPosition = (position) => {
    let fingerPos = position.split(',');
    const start = fingerPos[0];

    const startFret = start !== '0' ? 'diagram' : 'open-diagram';

    fingerPos = fingerPos.map((pos) => {
      if (!'xbo'.includes(pos)) {
        return parseInt(pos, 10);
      }
      return pos;
    });
    fingerPos = fingerPos.map((pos, index) => {
      let style = {};
      if (typeof (pos) === 'number') {
        if (index === 0 && pos !== 0) {
          return (
            <div className="fret">
              {pos}
            </div>
          );
        }
        if (index >= 1) {
          style = {
            left: `${((index - 1) * 50) - 15}px`,
            top: `${(pos * 50) + 13}px`,
          };
          return (<div className="finger" style={style} />);
        }
      } if (pos === 'x') {
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
        return (
          <svg viewBox="0 0 275 30" className="barre">
            <path d="M250,30 C250,1 10,1 10,30" />
          </svg>
        );
      }
    });
    return { startFret, fingerPos };
  };

  // eslint-disable-next-line camelcase
  const { chordCode } = props;

  const diagramDetails = generateFingerPosition(chordCode);

  return (
    <div className={diagramDetails.startFret}>
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
