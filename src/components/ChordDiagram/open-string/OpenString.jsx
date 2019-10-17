import React from 'react';
import PropTypes from 'prop-types';
import './open-string.css';

export default function OpenString(props) {
  const { stringNo } = props;

  const style = {
    left: `${(stringNo - 1) * 50 - 11}px`,
    top: `${-34}px`,
  };
  return (<div className="open-string" style={style} />);
}

OpenString.defaultProps = {
  stringNo: 1,
};

OpenString.propTypes = {
  stringNo: PropTypes.number,
};
