import randomPasswordReducer from '../../../src/store/adminPassword_Put/reducers';
import expect from 'expect';

describe('Test randomPasswordReducer', () => {
  it('Should return the initial state', () => {
    expect(randomPasswordReducer(undefined, [])).toEqual({"content": []});
  });

  it('Should return correct state when action type is SET_RANDOM_PASSWORD', () => {
    expect(randomPasswordReducer({foo: ''}, {type: 'SET_RANDOM_PASSWORD'})).toEqual({foo: ''})
  })
});