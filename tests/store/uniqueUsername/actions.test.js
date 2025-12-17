import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../../src/store/uniqueUsername/actions';
const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore();

describe.skip('Test Unique Username actions', () => {
    beforeEach(() => {
        store.clearActions();
    });

    it('Test dispatch SET_USERNAME_UNIQUE_CHECK after a successful API request', () => {
        let promise = store.dispatch(actions.loadCheckUniqueUsername("unique")).then(() => {
            let mockActions = [
                {
                    type: 'SET_USERNAME_UNIQUE_CHECK',
                    "backend": [{"matched": 0}]
                }
            ]
            expect(store.getActions()).toEqual(mockActions)
        });
        return promise;
    });
});