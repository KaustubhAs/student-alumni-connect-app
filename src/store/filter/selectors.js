import { propOr } from 'ramda';
import { createSelector } from 'reselect';
import { getAllProfilesState } from '../profiles/selectors';

export const getProfilesByNameSearch = createSelector(getAllProfilesState, propOr([], 'profilesByNameSearch'));

