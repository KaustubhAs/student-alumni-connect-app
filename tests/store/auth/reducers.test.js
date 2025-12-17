import loginReducer from '../../../src/store/auth/reducers';
// import SET_LOG_IN from '../../../src/store/auth/actions';
import expect from 'expect';

describe('Test loginReducer', () => {
  it('Should return the initial state', () => {
    expect(loginReducer(undefined, {})).toEqual({"login": false});
  });

  it('Should return correct state when action type is SET_LOG_IN', () => {
    expect(loginReducer({foo: ''}, {type: 'SET_LOG_IN'})).toEqual({foo: ''})
  })
});