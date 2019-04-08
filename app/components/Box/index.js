import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  color: 'white',
  height: 100,
  width: 100,
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  cursor: 'move',
};
const Box = ({ title, yellow, color }) => {
  const backgroundColor = yellow ? 'yellow' : color;
  return (
    <div style={Object.assign({}, styles, { backgroundColor })}>{title}</div>
  );
};
Box.propTypes = {
  title: PropTypes.string,
  yellow: PropTypes.string,
  color: PropTypes.string,
};

export default Box;
