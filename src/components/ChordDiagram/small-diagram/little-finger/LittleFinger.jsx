import React from 'react';
import PropTypes from 'prop-types';
import './little-finger.css';

export default function LittleFinger(props) {
  const { stringNo, fret } = props;

  const style = {
    left: `${((stringNo - 1) * 10) - 3}px`,
    top: `${(fret * 10) + 2.5}px`,
  };

  return (
    <div className="little-finger" style={style} />
  );
}

LittleFinger.defaultProps = {
  stringNo: 1,
  fret: 1,
};

LittleFinger.propTypes = {
  stringNo: PropTypes.number,
  fret: PropTypes.number,
};
