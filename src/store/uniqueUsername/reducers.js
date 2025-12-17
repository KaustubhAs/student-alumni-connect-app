import { SET_USERNAME_UNIQUE_CHECK } from './actions';

export const initialState = {
    content: []
};

export default function checkUniqueUsernameReducer(initState = initialState, action) {
    switch (action.type) {
        case SET_USERNAME_UNIQUE_CHECK:
            return {...initState, content: action.backend};
        default:
            return initState;
    }
}
