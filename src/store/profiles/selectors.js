import { propOr } from 'ramda';
import { createSelector } from 'reselect';

export const getAllProfilesState = state => propOr({}, 'profiles', state);

export const getAllProfiles = createSelector(getAllProfilesState, propOr([], 'content'));
