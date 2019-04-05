/**
 *
 * DragAndDrop
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

// React DND
import Container from 'containers/Container';
import CustomDragLayer from 'components/CustomDragLayer';

import makeSelectDragAndDrop from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class DragAndDrop extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>DragAndDrop</title>
          <meta name="description" content="Description of DragAndDrop" />
        </Helmet>
        <div />
        <Container />
        <CustomDragLayer />
      </div>
    );
  }
}

DragAndDrop.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  dragAndDrop: makeSelectDragAndDrop(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'dragAndDrop', reducer });
const withSaga = injectSaga({ key: 'dragAndDrop', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(DragAndDrop);
