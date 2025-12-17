import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../../src/store/addressTable/actions';
const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore();

describe.skip('Test addressTable actions', () => {
    beforeEach(() => {
        store.clearActions();
    });

    it('Test dispatch a successful API request', () => {
        const testData = {
            "UserName": "testuser",
            "Street": "", 
            "City": "",
            "District": "", 
            "State": "", 
            "Country": "", 
            "Postcode": "", 
            "Latitude": "", 
            "Longitude": ""
        }
        let promise = store.dispatch(actions.performEditAddressTable(testData)).then(() => {
            expect(store.getActions()).toBeTruthy()
        });
        return promise;
    });
});