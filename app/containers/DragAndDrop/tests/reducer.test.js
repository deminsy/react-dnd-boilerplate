import { fromJS } from 'immutable';
import dragAndDropReducer from '../reducer';

describe('dragAndDropReducer', () => {
  it('returns the initial state', () => {
    expect(dragAndDropReducer(undefined, {})).toEqual(fromJS({}));
  });
});
