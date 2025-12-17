import filterProfilesReducer from '../../../src/store/filter/reducers';
import expect from 'expect';

describe('Test filterProfilesReducer', () => {

  it('Should return the initial state', () => {
    expect(filterProfilesReducer(undefined, {})).toEqual({"profiles": []});
  });

  it('Should return correct state when action type is SET_ALL_PROFILES_BY_NAME_SEARCH', () => {
    expect(filterProfilesReducer({foo: ''}, {type: 'SET_ALL_PROFILES_BY_NAME_SEARCH'})).toEqual({foo: ''})
  })
});