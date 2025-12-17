import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../../src/store/auth/actions';


const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore();

describe.skip('Test Login actions', () => {
    beforeEach(() => {
        store.clearActions();
    });

    it('Test dispatch SET_LOG_IN after a successful API request', () => {
        let promise = store.dispatch(actions.loadLogin("santa2022", "wrongPassword")).then(() => {
            let mockActions = [
                {
                    type: 'SET_LOG_IN',
                    "login": [{"matched": 0}]
                }
            ]
            expect(store.getActions()).toEqual(mockActions)
        });
        return promise;
    });
});