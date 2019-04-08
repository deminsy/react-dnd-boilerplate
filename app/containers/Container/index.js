/**
 *
 * Container
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose, bindActionCreators } from 'redux';
// -----
import { DropTarget } from 'react-dnd';
import ItemTypes from 'utils/itemTypes';
import DraggableBox from 'components/DraggableBox';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { logBoxData } from './actions';

import makeSelectContainer from './selectors';
import reducer from './reducer';
import saga from './saga';

const styles = {
  // width: '100%',
  height: 300,
  border: '1px solid black',
  position: 'relative',
};

/* eslint-disable react/prefer-stateless-function */
export class Container extends React.PureComponent {
  render() {
    const { connectDropTarget } = this.props;
    const { boxes } = this.props.container;
    return connectDropTarget(
      <div style={styles}>
        {Object.keys(boxes).map(key => this.renderBox(boxes[key], key))}
      </div>,
    );
  }

  moveBox(id, left, top) {
    this.props.logBoxData({ id, left, top });
  }

  renderBox(item, key) {
    return <DraggableBox key={key} id={key} {...item} />;
  }
}

Container.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  logBoxData: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  container: makeSelectContainer(),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      logBoxData,
    },
    dispatch,
  );

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'container', reducer });
const withSaga = injectSaga({ key: 'container', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  DropTarget(
    ItemTypes.BOX,
    {
      drop(props, monitor, component) {
        if (!component) {
          return;
        }
        const delta = monitor.getDifferenceFromInitialOffset();
        const item = monitor.getItem();
        const left = Math.round(item.left + delta.x);
        const top = Math.round(item.top + delta.y);
        if (props.snapToGrid) {
          // [left, top] = snapToGrid(left, top);
        }
        component.moveBox(item.id, left, top);
      },
    },
    connect => ({
      connectDropTarget: connect.dropTarget(),
    }),
  ),
)(Container);
