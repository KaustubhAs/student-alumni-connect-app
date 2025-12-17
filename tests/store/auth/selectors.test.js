import { type } from 'ramda';
import { getLogin, getLoginState } from '../../../src/store/auth/selectors';

describe('Test getLogin selector', () => {
    it('Should return result of type number', () => {
        const mockLogin = {
            login: [
                {
                    "matched": 1
                }
            ]
        };
        const selected = getLogin.resultFunc(mockLogin);
        expect(type(selected[0].matched)).toEqual("Number");
        expect(selected[0].matched).toEqual(0 || 1)
    });

    it("Should return getLogin state", () => {
        const state = getLoginState();
        expect(state).toEqual({});
    });
});