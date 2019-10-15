/* eslint-disable no-undef */
import React, { useState } from 'react';
import './chord-diagram.css';

export default function ChordDiagram(props) {
  const c = '0,x,2,1,o,0,o';
  const a = '0,x,o,1,1,1,o';
  const g = '0,2,1,o,o,2,2';
  const e = '0,o,1,1,0,o,o';
  const d = '0,x,x,o,1,2,1';
  const f = '0,x,2,2,1,0,x';
  const am = '0,x,o,1,1,0,o';
  const dm = '0,x,x,o,1,2,0';
  const em = '0,o,1,1,o,o,o';
  const bdim = '0,x,1,2,3,2,x';
  const b = '0,x,1,3,3,3,1';
  const fSharpMin = '0,'

  const generateFingerPosition = (position) => {
    let fingerPos = position.split(',');
    const startFret = fingerPos.shift();
    fingerPos = fingerPos.map((pos) => {
      if (!'xbo'.includes(pos)) {
        return parseInt(pos, 10);
      }
      return pos;
    });
    fingerPos = fingerPos.map((pos, index) => {
      let style = {};
      if (typeof (pos) === 'number') {
        style = {
          left: `${(index * 63.6) - 20}px`,
          top: `${(pos * 63.6) + 13}px`,
        };
        return (<div className="finger" style={style} />);
      }
    });
    return fingerPos;
  };

  return (
    <div className="diagram">
      {generateFingerPosition(b)}
    </div>
  );
}
