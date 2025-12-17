import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../../src/store/connectionInsert/actions';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore();

describe.skip('Test connectionInsert actions', () => {
    beforeEach(() => {
        store.clearActions();
    });

    it('Test dispatch a successful API request', () => {
        const testData = {
            "NameOne" : "",
            "NameTwo" : "",
        }
        let promise = store.dispatch(actions.performConnectionInsert(testData)).then(() => {
            expect(store.getActions()).toBeTruthy()
        });
        return promise;
    });
});