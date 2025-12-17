import { propOr } from 'ramda';
import { createSelector } from 'reselect';

export const getProfileByUserNameState = state => propOr({}, 'userProfile', state);

export const getProfileByUserName = createSelector(getProfileByUserNameState, propOr([], 'content'));