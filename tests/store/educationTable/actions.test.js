import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../../src/store/companyInfoTable/actions';
const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore();

describe.skip('Test companyInfoTable actions', () => {
    beforeEach(() => {
        store.clearActions();
    });

    it('Test dispatch a successful API request', () => {
        const testData = {
            "UserName": "testuser",
            "CompanyName": "", 
            "CompanyContactInfo": "", 
            "Industry": ""
        }
        let promise = store.dispatch(actions.performEditCompanyInfoTable(testData)).then(() => {
            expect(store.getActions()).toBeTruthy()
        });
        return promise;
    });
});