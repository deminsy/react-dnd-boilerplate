import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the dragAndDrop state domain
 */

const selectDragAndDropDomain = state => state.get('dragAndDrop', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by DragAndDrop
 */

const makeSelectDragAndDrop = () =>
  createSelector(selectDragAndDropDomain, substate => substate.toJS());

export default makeSelectDragAndDrop;
export { selectDragAndDropDomain };
