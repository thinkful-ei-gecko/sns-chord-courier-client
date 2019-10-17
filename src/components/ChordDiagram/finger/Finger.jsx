import React from 'react';
import PropTypes from 'prop-types';
import './finger.css';

export default function Finger(props) {
  const { stringNo, fret } = props;

  const style = {
    left: `${((stringNo - 1) * 50) - 15}px`,
    top: `${(fret * 50) + 13}px`,
  };

  return (
    <div className="finger" style={style} />
  );
}

Finger.defaultProps = {
  stringNo: 1,
  fret: 1,
};

Finger.propTypes = {
  stringNo: PropTypes.number,
  fret: PropTypes.number,
};
