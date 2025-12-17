import otherProfileReducer from '../../../src/store/otherProfile/reducers';
import expect from 'expect';

describe('Test otherProfileReducer', () => {
  it('Should return the initial state', () => {
    expect(otherProfileReducer(undefined, {})).toEqual({"content": []});
  });

  it('Should return correct state when action type is SET_OTHER_PROFILE', () => {
    expect(otherProfileReducer({foo: ''}, {type: 'SET_OTHER_PROFILE'})).toEqual({foo: ''})
  })
});