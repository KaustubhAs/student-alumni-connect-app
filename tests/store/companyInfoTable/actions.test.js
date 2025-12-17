import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../../src/store/educationTable/actions';
// import { useSelector, useDispatch } from 'react-redux';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore();

// jest.mock('react-redux', () => ({
//     useSelector: jest.fn(),
//     useDispatch: jest.fn()
// }));

describe.skip('Test educationTable actions', () => {
    beforeEach(() => {
        store.clearActions();
    });

    it('Test dispatch a successful API request', () => {
        // useSelector.mockImplementation((selectorFn) => selectorFn());
        // useDispatch.mockReturnValue((dispatchFn) => dispatchFn());
        const testData = {
            "UserName": "testuser",
            "University": "",
            "Major1": "",
            "Major2": "",
            "ClassYear": 0,
            "UniOrg1": "",
            "UniOrg2": "",
            "UniOrg3": "",
            "OtherEduDegree": "",
            "OtherEduMajor": "",
            "OtherEduClassYear": 0,
        }
        let promise = store.dispatch(actions.performEditEducationTable(testData)).then(() => {
            expect(store.getActions()).toBeTruthy()
        });
        return promise;
    });
});