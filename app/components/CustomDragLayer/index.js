/**
 *
 * CustomDragLayer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { DragLayer } from 'react-dnd';
import ItemTypes from 'utils/itemTypes';
import BoxDragPreview from 'components/BoxDragPreview';
// import snapToGrid from './snapToGrid'
const layerStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: 100,
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
};
function getItemStyles(props) {
  const { initialOffset, currentOffset } = props;
  if (!initialOffset || !currentOffset) {
    return {
      display: 'none',
    };
  }
  const { x, y } = currentOffset;
  // if (props.snapToGrid) {
  //   x -= initialOffset.x;
  //   y -= initialOffset.y;
  //   [x, y] = snapToGrid(x, y);
  //   x += initialOffset.x;
  //   y += initialOffset.y;

  // }
  const transform = `translate(${x}px, ${y}px)`;
  return {
    transform,
    WebkitTransform: transform,
  };
}
const CustomDragLayer = props => {
  const { item, itemType, isDragging } = props;
  function renderItem() {
    switch (itemType) {
      case ItemTypes.BOX:
        return <BoxDragPreview title={item.title} />;
      default:
        return null;
    }
  }
  if (!isDragging) {
    return null;
  }
  return (
    <div style={layerStyles}>
      <div style={getItemStyles(props)}>{renderItem()}</div>
    </div>
  );
};

CustomDragLayer.propTypes = {
  isDragging: PropTypes.bool,
  itemType: PropTypes.exact(ItemTypes.BOX),
  // error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  // repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  item: PropTypes.object,
  // username: PropTypes.string,
  // onChangeUsername: PropTypes.func,
};
export default DragLayer(monitor => ({
  item: monitor.getItem(),
  itemType: monitor.getItemType(),
  initialOffset: monitor.getInitialSourceClientOffset(),
  currentOffset: monitor.getSourceClientOffset(),
  isDragging: monitor.isDragging(),
}))(CustomDragLayer);
