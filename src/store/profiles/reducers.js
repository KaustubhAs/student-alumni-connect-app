import { SET_ALL_PROFILES } from './actions';

export const initialState = {
    content: []
};

export default function allProfilesReducer(initState = initialState, action) {
    switch (action.type) {
        case SET_ALL_PROFILES:
            return {...initState, content: action.backend};
        default:
            return initState;
    }
}
