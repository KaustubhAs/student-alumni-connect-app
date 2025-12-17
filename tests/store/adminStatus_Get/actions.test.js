import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../../src/store/adminStatus_Get/actions';
const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore();

describe.skip('Test adminStatus_Get actions', () => {
    beforeEach(() => {
        store.clearActions();
    });

    it('Test dispatch loadGetAdminStatus after a successful API request', () => {
        let promise = store.dispatch(actions.loadGetAdminStatus("testuser")).then(() => {
            let mockActions = [
                {
                    type: 'GET_ADMIN_STATUS',
                    "backend": {
                        "message": {
                            "Admin": 0,
                        },
                        "status": 200,
                    },
                }
            ]
            expect(store.getActions()).toEqual(mockActions)
        });
        return promise;
    });
});