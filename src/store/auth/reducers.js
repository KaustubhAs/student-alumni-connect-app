import { SET_LOG_IN } from './actions';

export const initialState = {
    login: false,
};

export default function loginReducer(initState = initialState, action) {
    switch (action.type) {
        case SET_LOG_IN:
            return {...initState, login: action.login};
        default:
            return initState;
    }
}
