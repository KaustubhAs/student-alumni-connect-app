import allProfilesReducer from '../../../src/store/profiles/reducers';
import expect from 'expect';

describe('Test allProfilesReducer', () => {
  it('Should return the initial state', () => {
    expect(allProfilesReducer(undefined, {})).toEqual({"content": []});
  });

  it('Should return correct state when action type is SET_ALL_PROFILES', () => {
    expect(allProfilesReducer({foo: ''}, {type: 'SET_ALL_PROFILES'})).toEqual({foo: ''})
  })
});