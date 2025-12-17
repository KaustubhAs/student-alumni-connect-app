import { propOr } from 'ramda';
import { createSelector } from 'reselect';

export const getLoginState = state => propOr({}, 'login', state);

export const getLogin = createSelector(getLoginState, propOr([], 'login'));
