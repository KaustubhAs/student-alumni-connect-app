import { propOr } from 'ramda';
import { createSelector } from 'reselect';

export const getRandomPasswordState = state => propOr({}, 'admin_Put_Password', state);

export const getRandomPassword = createSelector(getRandomPasswordState, propOr({}, 'content'));
