import { SET_USER_PROFILE } from './actions';

export const initialState = {
    content: []
};

export default function userProfileReducer(initState = initialState, action) {
    switch (action.type) {
        case SET_USER_PROFILE:
            return {...initState, content: action.backend};
        default:
            return initState;
    }
}
