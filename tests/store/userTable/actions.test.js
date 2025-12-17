import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../../src/store/userTable/actions';
const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore();

describe.skip('Test userTable actions', () => {
    beforeEach(() => {
        store.clearActions();
    });

    it('Test dispatch a successful API request', () => {
        const testData = {
            "FullName": "Test User",
            "FirstName": "Test",
            "LastName": "User",
            "CurrentUserName": "testuser",
            "NewUserName": "testuser",
            "ProfilePic": "",
            "Pronouns": "",
            "Bio": "",
            "Phone": "",
            "Email": "",
            "JobTitle": "",
            "Mentoring": "",
            "LastUpdate": ""
        }
        let promise = store.dispatch(actions.performEditUserTable(testData)).then(() => {
            expect(store.getActions()).toBeTruthy()
        });
        return promise;
    });
});