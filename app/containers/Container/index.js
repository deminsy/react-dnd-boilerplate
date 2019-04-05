/**
 *
 * Container
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
// -----
import { DropTarget } from 'react-dnd'
import ItemTypes from 'utils/itemTypes'
import DraggableBox from 'components/DraggableBox'
//import snapToGrid from './snapToGrid'

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectContainer from './selectors';
import reducer from './reducer';
import saga from './saga';


const update = require('immutability-helper');
const styles = {
  width: 600,
  height: 300,
  border: '1px solid black',
  position: 'relative',
};


/* eslint-disable react/prefer-stateless-function */
export class Container extends React.PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      boxes: {
        a: { top: 20, left: 80, title: 'Drag me around', color: '#aa0000' },
        b: { top: 180, left: 20, title: 'Drag me too', color: '#00aa00' }
      },
    }
  }

    render() {
    const { connectDropTarget } = this.props;
    const { boxes } = this.state;
    return connectDropTarget(
      <div style={styles}>
        {Object.keys(boxes).map(key => this.renderBox(boxes[key], key))}
      </div>,
    )
  }
  moveBox(id, left, top) {


    this.setState(
      update(this.state, {
        boxes: {
          [id]: {
            $merge: { left, top },
          },
        },
      }),
    )
  }
  renderBox(item, key) {
    return <DraggableBox key={key} id={key} {...item} />
  }
}

Container.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  container: makeSelectContainer(),
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
        let left = Math.round(item.left + delta.x);
        let top = Math.round(item.top + delta.y);
        if (props.snapToGrid) {
         // [left, top] = snapToGrid(left, top);
        }
        component.moveBox(item.id, left, top)
      },
    },
    connect => ({
      connectDropTarget: connect.dropTarget(),
    }),
  )
)(Container);

// export default DropTarget(
//   ItemTypes.BOX,
//   {
//     drop(props, monitor, component) {
//       if (!component) {
//         return
//       }
//       const delta = monitor.getDifferenceFromInitialOffset()
//       const item = monitor.getItem()
//       let left = Math.round(item.left + delta.x)
//       let top = Math.round(item.top + delta.y)
//       if (props.snapToGrid) {
//         ;[left, top] = snapToGrid(left, top)
//       }
//       component.moveBox(item.id, left, top)
//     },
//   },
//   connect => ({
//     connectDropTarget: connect.dropTarget(),
//   }),
// )(Container)

