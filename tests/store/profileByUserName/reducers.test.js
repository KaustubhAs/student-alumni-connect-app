import userProfileReducer from '../../../src/store/profileByUserName/reducers';
import expect from 'expect';

describe('Test userProfileReducer', () => {
  it('Should return the initial state', () => {
    expect(userProfileReducer(undefined, {})).toEqual({"content": []});
  });

  it('Should return correct state when action type is SET_USER_PROFILE', () => {
    expect(userProfileReducer({foo: ''}, {type: 'SET_USER_PROFILE'})).toEqual({foo: ''})
  })
});