import React from 'react';
import PropTypes from 'prop-types';
import './fret.css';

export default function Finger(props) {
  const { fret } = props;

  return (
    <div className="fret">
      {fret}
    </div>
  );
}

Finger.defaultProps = {
  fret: 0,
};

Finger.propTypes = {
  fret: PropTypes.number,
};
