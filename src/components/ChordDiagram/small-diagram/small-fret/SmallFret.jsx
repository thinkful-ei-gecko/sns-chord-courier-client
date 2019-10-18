import React from 'react';
import PropTypes from 'prop-types';
import './small-fret.css';

export default function SmallFret(props) {
  const { fret } = props;

  return (
    <div className="small-fret">
      {fret}
    </div>
  );
}

SmallFret.defaultProps = {
  fret: 0,
};

SmallFret.propTypes = {
  fret: PropTypes.number,
};
