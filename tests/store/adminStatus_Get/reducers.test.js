import getAdminStatusReducer from '../../../src/store/adminStatus_Get/reducers';
import expect from 'expect';

describe('Test getAdminStatusReducer', () => {
  it('Should return the initial state', () => {
    expect(getAdminStatusReducer(undefined, {})).toEqual({"content": {}});
  });

  it('Should return correct state when action type is GET_ADMIN_STATUS', () => {
    expect(getAdminStatusReducer({foo: ''}, {type: 'GET_ADMIN_STATUS'})).toEqual({foo: ''})
  })
});