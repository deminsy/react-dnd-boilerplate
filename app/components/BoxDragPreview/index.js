/**
 *
 * BoxDragPreview
 *
 */

// import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import Box from 'components/Box';

const styles = {
  display: 'inline-block',
  transform: 'rotate(-7deg)',
  WebkitTransform: 'rotate(-7deg)',
};
const BoxDragPreview = ({ title }) => (
  // const [tickTock, setTickTock] = useState(false);
  // useEffect(
  //   () => {
  //     const interval = setInterval(() => {
  //       setTickTock(!tickTock);
  //     }, 500);
  //     return () => clearInterval(interval);
  //   },
  //   [tickTock],
  // );

  <div style={styles}>
    <Box title={title} yellow="white" />
  </div>
);
export default BoxDragPreview;
