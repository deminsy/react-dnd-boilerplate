/**
 *
 * BoxDragPreview
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Box from 'components/Box';

const styles = {
  display: 'inline-block',
  transform: 'rotate(-7deg)',
  WebkitTransform: 'rotate(-7deg)',
};
const BoxDragPreview = ({ title }) => (
  <div style={styles}>
    <Box title={title} yellow="white" />
  </div>
);

BoxDragPreview.propTypes = {
  title: PropTypes.string,
};
export default BoxDragPreview;
