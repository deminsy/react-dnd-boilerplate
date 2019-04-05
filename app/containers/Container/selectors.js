import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the container state domain
 */

const selectContainerDomain = state => state.get('container', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Container
 */

const makeSelectContainer = () =>
  createSelector(selectContainerDomain, substate => substate.toJS());

export default makeSelectContainer;
export { selectContainerDomain };
