/*
 *
 * Container actions
 *
 */

import { LOG_BOX_DATA, SAVE_BOX_DATA } from './constants';

export const logBoxData = data => ({
  type: LOG_BOX_DATA,
  payload: data,
});

export const saveBoxData = data => ({
  type: SAVE_BOX_DATA,
  payload: data,
});
