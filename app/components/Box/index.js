import React from 'react';
const styles = {
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

export default Box;
