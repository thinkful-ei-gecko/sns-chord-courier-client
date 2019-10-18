import React from 'react';
import PropTypes from 'prop-types';
import './small-open-string.css';

export default function SmallOpenString(props) {
  const { stringNo } = props;

  const style = {
    left: `${(stringNo - 1) * 10 - 2.5}px`,
    top: `${-10}px`,
  };
  return (<div className="small-open-string" style={style} />);
}

SmallOpenString.defaultProps = {
  stringNo: 1,
};

SmallOpenString.propTypes = {
  stringNo: PropTypes.number,
};
