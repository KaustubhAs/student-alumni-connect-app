import { propOr } from 'ramda';
import { createSelector } from 'reselect';

export const getAllConnectionState = state => propOr({}, 'connection', state);

export const getAllConnection = createSelector(getAllConnectionState, propOr({}, 'content'));
