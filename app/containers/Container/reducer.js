/*
 *
 * Container reducer
 *
 */

import { fromJS, getIn } from 'immutable';
import { SAVE_BOX_DATA } from './constants';
export const initialState = fromJS({
  boxes: {
    a: { top: 20, left: 80, title: 'Drag me around', color: '#aa0000' },
    b: { top: 180, left: 20, title: 'Drag me too', color: '#00aa00' },
    c: { top: 100, left: 220, title: 'Drag me too', color: '#0000aa' },
  },
});

function containerReducer(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case SAVE_BOX_DATA:
      const { left, top } = action.payload;
      const newBoxState = state
        .getIn(['boxes', action.payload.id])
        .merge({ left, top });

      return state.setIn(['boxes', action.payload.id], newBoxState);

    // return state;
    default:
      return state;
  }
}

export default containerReducer;
