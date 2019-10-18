import React from 'react';
import PropTypes from 'prop-types';
import './small-muted-string.css';

export default function SmallMutedString(props) {
  const { stringNo } = props;

  const style = {
    left: `${((stringNo - 1) * 10) - 3}px`,
    top: `${-10}px`,
  };

  return (
    <div className="small-muted-string" style={style} />
  );
}

SmallMutedString.defaultProps = {
  stringNo: 1,
};

SmallMutedString.propTypes = {
  stringNo: PropTypes.number,
};
