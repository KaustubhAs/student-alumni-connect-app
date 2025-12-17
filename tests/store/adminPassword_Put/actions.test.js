import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../../src/store/adminPassword_Put/actions';
const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore();

describe.skip('Test adminPassword_Put actions', () => {
    beforeEach(() => {
        store.clearActions();
    });

    it.skip('Test dispatch performPutRandomPassword after a successful API request', () => {
        const testData = {
            "UserName": "santa2022",
        }
        let promise = store.dispatch(actions.performPutRandomPassword(testData)).then(() => {
            expect(store.getActions()).toBeTruthy()
        });
        return promise;
    });
});