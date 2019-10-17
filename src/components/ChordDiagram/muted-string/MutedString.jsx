import React from 'react';
import PropTypes from 'prop-types';
import './muted-string.css';

export default function MutedString(props) {
  const { stringNo } = props;

  const style = {
    left: `${(stringNo - 1) * 50 - 11}px`,
    top: `${-34}px`,
  };

  return (
    <div className="muted-string" style={style} />
  );
}

MutedString.defaultProps = {
  stringNo: 1,
};

MutedString.propTypes = {
  stringNo: PropTypes.number,
};
