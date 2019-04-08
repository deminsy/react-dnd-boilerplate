import { saveBoxData, logBoxData } from '../actions';
import { SAVE_BOX_DATA, LOG_BOX_DATA } from '../constants';

describe('Container actions', () => {
  describe('Log Box Data Action', () => {
    it('has a type of LOG_BOX_DATA', () => {
      const data = { id: 'a', top: 0, left: 0 };
      const expected = {
        type: LOG_BOX_DATA,
        payload: data,
      };

      expect(logBoxData(data)).toEqual(expected);
    });
  });
  describe('Save Box Data Action', () => {
    it('has a type of SAVE_BOX_DATA', () => {
      const data = { id: 'a', top: 0, left: 0 };
      const expected = {
        type: SAVE_BOX_DATA,
        payload: data,
      };

      expect(saveBoxData(data)).toEqual(expected);
    });
  });
});
