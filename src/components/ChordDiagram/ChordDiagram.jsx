/* eslint-disable no-undef */
import React, { useState } from 'react';
import './chord-diagram.css';

export default function ChordDiagram(props) {

  const a = '0,x,o,1,1,1,o';
  const b = '0,x,1,3,3,3,1';
  const c = '0,x,2,1,o,0,o';
  const d = '0,x,x,o,1,2,1';
  const e = '0,o,1,1,0,o,o';
  const f = '0,x,2,2,1,0,x';
  const g = '0,2,1,o,o,2,2';

  const am = '0,x,o,1,1,0,o';
  const bm = '0,x,1,3,3,2,1';
  const cm = '';
  const dm = '0,x,x,o,1,2,0';
  const em = '0,o,1,1,o,o,o';
  const fm = '';
  const gm = '0,2,4,4,2,2,2,b';

  const adim = ''
  const bdim = '0,x,1,2,3,2,x';
  const cdim = '';
  const ddim = '';
  const edim = '0,o,0,1,o,x,x';
  const fdim = '';
  const gdim = '';

  const aSh = '';
  const bSh = '';
  const cSh = '';
  const dSh = '';
  const eSh = '';
  const fSh = '';
  const gSh = '';

  const aShM = '';
  const bShM = '';
  const cShM = '4,x,0,2,2,1,x';
  const dShM = '';
  const eShM = '';
  const fShM = '0,1,3,3,1,1,1,b';
  const gShM = '4,0,2,2,0,0,0,b';

  const aB = '';
  const bB = '0,x,0,2,2,2,0,b';
  const cB = '';
  const dB = '';
  const eB = '';
  const fB = '';
  const gB = '';

  const aBM = '';
  const bBM = '';
  const cBM = '';
  const dBM = '';
  const eBM = '';
  const fBM = '';
  const gBM = '';

  const aShDim = '';
  const bShDim = '';
  const cShDim = '0,x,1,2,3,2,x';
  const dShDim = '6,x,0,1,2,1,x';


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

  const diagramDetails = generateFingerPosition(edim);

  return (
    <div className={diagramDetails.startFret}>
      {diagramDetails.fingerPos}
    </div>
  );
}
