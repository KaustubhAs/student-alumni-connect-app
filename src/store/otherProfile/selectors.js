import { propOr } from 'ramda';
import { createSelector } from 'reselect';

export const getOtherProfileState = state => propOr({}, 'otherProfile', state);

export const getOtherProfile = createSelector(getOtherProfileState, propOr([], 'content'));